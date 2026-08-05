import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-kashmir-green px-5 text-sm font-black text-white shadow-2xl motion-safe:animate-[pulse_2.4s_infinite]"
      href={whatsappLink("Assalamualaikum Jaffari Sky Travels, I need travel assistance.")}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-5 w-5" />
      Chat with us
    </a>
  );
}
