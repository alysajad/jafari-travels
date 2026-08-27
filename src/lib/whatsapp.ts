const phone = "917051693767";

type EnquiryPayload = {
  source: string;
  message: string;
  details?: Record<string, string>;
};

let whatsappEmailBridgeInstalled = false;

export function whatsappLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formDetails(form: HTMLFormElement) {
  return Object.fromEntries(
    Array.from(new FormData(form)).map(([key, value]) => [key, String(value)])
  );
}

export function formatDetails(details: Record<string, string>) {
  return Object.entries(details)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

export async function sendEnquiryThenOpenWhatsApp(payload: EnquiryPayload) {
  const whatsappUrl = whatsappLink(payload.message);
  const popup = window.open("", "_blank");

  try {
    const response = await fetch("/api/enquiry", {
      body: JSON.stringify({ ...payload, page: window.location.href }),
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
    void sendEnquiryThenOpenWhatsApp({
      source: anchor.textContent?.trim() || "WhatsApp CTA",
      message,
    });
  });
}
