import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { routeHighlights } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

export function TicketingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Domestic and international"
        image="/images/ticketing-page.jpg"
        text="Domestic and international air tickets, group bookings, last-minute fares, modifications and cancellation support."
        title="Book Flights with Confidence"
      />
      <section className="section-wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <h2 className="font-serif text-5xl leading-none text-kashmir-blue">How it works</h2>
          <div className="mt-6 grid gap-4">
            {["Share your travel details via WhatsApp or the form.", "We compare fares and send options within 2 hours.", "Confirm and pay. Ticket issued the same day."].map((step, index) => (
              <div className="rounded-2xl bg-white p-5 font-bold text-slate-700 shadow-lg shadow-kashmir-blue/10" key={step}>
                <span className="mr-3 font-numbers text-kashmir-gold">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <form className="grid gap-4 rounded-2xl bg-white p-7 shadow-travel" onSubmit={(event) => event.preventDefault()}>
          <h2 className="font-serif text-4xl text-kashmir-blue">Flight enquiry</h2>
          {["From city", "To city", "Travel date", "Return date", "Passengers", "Travel class", "Contact number"].map((field) => (
            <input className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none focus:border-kashmir-gold" key={field} placeholder={field} type={field.includes("date") ? "date" : "text"} min={field.includes("date") ? new Date().toISOString().split('T')[0] : undefined} />
          ))}
          <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-kashmir-bright px-5 py-3 font-black text-white" href={whatsappLink("I need help booking a flight ticket.")} rel="noreferrer" target="_blank">
            Search Flights <ArrowRight className="h-4 w-4" />
          </a>
        </form>
      </section>
      <section className="section-wrap pt-0">
        <h2 className="mb-6 font-serif text-4xl text-kashmir-blue">Popular routes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routeHighlights.map((route) => (
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-kashmir-blue/10" key={`${route.from}-${route.to}`}>
              <route.icon className="h-7 w-7 text-kashmir-bright" />
              <strong className="text-kashmir-blue">{route.from} to {route.to}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
