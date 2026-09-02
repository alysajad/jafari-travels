import { MessageCircle } from "lucide-react";
import { formatEnquiryMessage, whatsappLink } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      className="focus-ring fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-kashmir-green text-sm font-black text-white shadow-2xl motion-safe:animate-[pulse_2.4s_infinite] sm:bottom-5 sm:right-5 sm:w-auto sm:gap-2 sm:px-5"
      href={whatsappLink(formatEnquiryMessage({
        enquiryType: "General travel enquiry",
        request: "I would like travel assistance.",
      }))}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
