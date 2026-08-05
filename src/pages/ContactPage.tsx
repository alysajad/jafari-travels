import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "../components/PageHero";
import { contact } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        image="/images/contact-page.jpg"
        text="Start a Kashmir, pilgrimage, ticketing or visa enquiry. The team will follow up with practical options."
        title="Contact Jaffari Sky Travels"
      />
      <section className="section-wrap grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="grid gap-4">
          <ContactCard icon={<Phone />} label="Phone" value={contact.phone} href="tel:+917051693767" />
          <ContactCard icon={<Mail />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactCard icon={<MessageCircle />} label="WhatsApp" value="Chat directly" href={whatsappLink("I want to contact Jaffari Sky Travels.")} />
          <ContactCard icon={<MapPin />} label="Office" value={contact.address} />
        </div>
        <form className="grid gap-4 rounded-2xl bg-white p-7 shadow-travel" onSubmit={(event) => event.preventDefault()}>
          <h2 className="font-serif text-4xl text-kashmir-blue">Send an enquiry</h2>
          {["Name", "Phone", "Email", "Service Interested In"].map((field) => (
            <input className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none focus:border-kashmir-gold" key={field} placeholder={field} type={field === "Email" ? "email" : "text"} />
          ))}
          <textarea className="min-h-32 rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none focus:border-kashmir-gold" placeholder="Message" />
          <a className="focus-ring rounded-[10px] bg-kashmir-green px-5 py-3 text-center font-black text-white" href={whatsappLink("I want to send an enquiry to Jaffari Sky Travels.")} rel="noreferrer" target="_blank">
            Submit via WhatsApp
          </a>
        </form>
      </section>
    </main>
  );
}

function ContactCard({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-kashmir-blue text-white [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <span>
        <small className="block text-xs font-black uppercase tracking-wide text-kashmir-slate">{label}</small>
        <strong className="mt-1 block text-kashmir-blue">{value}</strong>
      </span>
    </>
  );

  return href ? (
    <a className="focus-ring flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-kashmir-blue/10" href={href} rel={href.startsWith("http") ? "noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-kashmir-blue/10">{content}</div>
  );
}
