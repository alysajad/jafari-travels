const toEmail = process.env.ENQUIRY_TO_EMAIL || "info@jaffariskytravels.com";
const fromEmail = process.env.RESEND_FROM_EMAIL || "Jaffari Sky Travels <onboarding@resend.dev>";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY is not configured" });
  }

  const body = await readBody(req);
  const source = clean(body.source || "Website enquiry", 140);
  const enquiryType = clean(body.enquiryType || "General enquiry", 140);
  const request = cleanMultiline(body.request || body.message || "", 1000);
  const message = cleanMultiline(body.message || "", 4000);
  const details = cleanDetails(body.details);
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const page = clean(body.page || "", 500);
  const rows = Object.entries(details);

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const text = [
    `New ${enquiryType}`,
    `Source: ${source}`,
    `Submitted: ${submittedAt}`,
    page ? `Page: ${page}` : null,
    "",
    "Customer request:",
    request,
    "",
    rows.length ? "Enquiry details:" : null,
    ...rows.map(([key, value]) => `${key}: ${value}`),
    "",
    "WhatsApp message:",
    message,
  ].filter((line) => line !== null).join("\n");

  const htmlRows = rows.map(([key, value]) => `
    <tr>
      <th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;background:#f8fafc;">${escapeHtml(key)}</th>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td>
    </tr>
  `).join("");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "jaffari-sky-travels/1.0",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New ${enquiryType}: ${source}`,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5;">
          <h2 style="margin:0 0 12px;">New ${escapeHtml(enquiryType)}</h2>
          <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryType)}<br />
          <strong>Source:</strong> ${escapeHtml(source)}<br />
          <strong>Submitted:</strong> ${escapeHtml(submittedAt)}${page ? `<br /><strong>Page:</strong> ${escapeHtml(page)}` : ""}</p>
          <h3 style="margin:24px 0 8px;">Customer request</h3>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(request)}</p>
          ${htmlRows ? `<h3 style="margin:24px 0 8px;">Enquiry details</h3><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px;border:1px solid #e5e7eb;">${htmlRows}</table>` : ""}
          <h3 style="margin:24px 0 8px;">WhatsApp message preview</h3>
          <pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e5e7eb;padding:12px;border-radius:8px;">${escapeHtml(message)}</pre>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    return res.status(502).json({ error: "Resend failed", details: (await resendResponse.text()).slice(0, 500) });
  }

  return res.status(200).json({ ok: true });
}

async function readBody(req) {
  if (req.body) return typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function clean(value, max) {
  return String(value).replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function cleanMultiline(value, max) {
  return String(value).replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function cleanDetails(details) {
  if (!details || typeof details !== "object" || Array.isArray(details)) return {};

  return Object.fromEntries(
    Object.entries(details)
      .map(([key, value]) => [clean(key, 80), clean(value, 500)])
      .filter(([key, value]) => key && value)
  );
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}
