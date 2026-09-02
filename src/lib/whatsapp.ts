const phone = "917051693767";

type EnquiryPayload = {
  source: string;
  enquiryType: string;
  request: string;
  details?: Record<string, string>;
};

type EnquiryContent = Omit<EnquiryPayload, "source">;

let whatsappEmailBridgeInstalled = false;

export function whatsappLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formDetails(form: HTMLFormElement) {
  return Object.fromEntries(
    Array.from(new FormData(form)).map(([key, value]) => [readableLabel(key), String(value)])
  );
}

export function formatDetails(details: Record<string, string>) {
  return Object.entries(details)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `- ${readableLabel(key)}: ${value.trim()}`)
    .join("\n");
}

export function formatEnquiryMessage({ enquiryType, request, details = {} }: EnquiryContent) {
  const formattedDetails = formatDetails(details);

  return [
    "Hi Jaffari Sky Travels,",
    "",
    `Enquiry Type: ${enquiryType}`,
    `Request: ${request}`,
    formattedDetails ? "" : null,
    formattedDetails ? "Enquiry Details:" : null,
    formattedDetails || null,
  ].filter((line) => line !== null).join("\n");
}

export async function sendEnquiryThenOpenWhatsApp(payload: EnquiryPayload) {
  const message = formatEnquiryMessage(payload);
  const whatsappUrl = whatsappLink(message);
  const popup = window.open("", "_blank");

  try {
    const response = await fetch("/api/enquiry", {
      body: JSON.stringify({ ...payload, message, page: window.location.href }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    if (!response.ok) throw new Error(`Email enquiry failed with ${response.status}`);
  } catch (error) {
    console.error("Unable to email enquiry", error);
  } finally {
    if (popup) {
      popup.opener = null;
      popup.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  }
}

export function installWhatsAppEmailBridge() {
  if (whatsappEmailBridgeInstalled || typeof window === "undefined") return;
  whatsappEmailBridgeInstalled = true;

  window.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = event.target instanceof Element ? event.target : null;
    const anchor = target?.closest<HTMLAnchorElement>(`a[href^="https://wa.me/${phone}"]`);
    if (!anchor) return;

    event.preventDefault();

    const message = new URL(anchor.href).searchParams.get("text") || "WhatsApp enquiry";
    const content = parseEnquiryMessage(message);
    void sendEnquiryThenOpenWhatsApp({
      source: anchor.textContent?.trim() || "WhatsApp CTA",
      ...content,
    });
  });
}

function readableLabel(label: string) {
  return label.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").trim();
}

function parseEnquiryMessage(message: string): EnquiryContent {
  const lines = message.split("\n");
  const enquiryType = lines.find((line) => line.startsWith("Enquiry Type: "))?.slice(14).trim();
  const request = lines.find((line) => line.startsWith("Request: "))?.slice(9).trim();
  const details = Object.fromEntries(lines.flatMap((line) => {
    if (!line.startsWith("- ")) return [];
    const separator = line.indexOf(": ", 2);
    return separator < 0 ? [] : [[line.slice(2, separator), line.slice(separator + 2)]];
  }));

  return {
    enquiryType: enquiryType || "General enquiry",
    request: request || message,
    details,
  };
}
