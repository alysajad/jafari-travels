import { routeHighlights } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

export function TicketingPage() {
  const steps = [
    "Share your travel details via WhatsApp or the form below.",
    "We compare fares across airlines and send you the best options within 2 hours.",
    "Confirm your choice and make payment. Ticket issued the same day."
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center pt-16 pb-16">
        <div className="absolute inset-0 z-0">
          <img alt="Ticketing Services" className="w-full h-full object-cover object-center" src="/images/ticketing-page.jpg"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              <span className="material-icons-outlined text-secondary animate-pulse">flight_takeoff</span>
              Domestic & International
            </div>
            <h1 className="font-varien text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-6 tracking-wide">
              Book Flights with <span className="text-secondary italic font-sans font-extrabold">Confidence</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 opacity-90 max-w-xl">
              Air tickets, group bookings, last-minute fares, modifications and reliable cancellation support.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section - How it works */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">How it works</h2>
              <p className="text-slate-600 text-lg">Booking flights shouldn't be complicated. Our simple process ensures you get the best fares without the hassle.</p>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div className="flex gap-4 items-start" key={index}>
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 text-xl shadow-lg shadow-secondary/30">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-lg text-slate-900">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary rounded-[3rem] transform -rotate-3 scale-105 opacity-10 hidden md:block"></div>
              <img src="/images/ticketing-page.jpg" className="rounded-[3rem] shadow-2xl w-full object-cover relative z-10" alt="Booking process" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Popular Routes & Services</h2>
            <p className="text-slate-500 font-medium">We offer competitive pricing on the most frequently traveled domestic and international sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routeHighlights.map((route, i) => (
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-5 group" key={i}>
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <route.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-1">{route.from}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">to {route.to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Flight Enquiry</h2>
            <p className="text-blue-100 opacity-90 text-lg">Enter your travel details and our ticketing experts will find the best options for you.</p>
          </div>
          
          <form className="relative z-10 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">From City</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" placeholder="e.g. Srinagar" type="text" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">To City</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" placeholder="e.g. New Delhi" type="text" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Travel Date</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" type="date" min={new Date().toISOString().split('T')[0]} />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Return Date</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" type="date" min={new Date().toISOString().split('T')[0]} />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Passengers</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" type="number" min="1" defaultValue="1" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Travel Class</label>
              <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all cursor-pointer appearance-none">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Contact No.</label>
              <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" placeholder="Phone number" type="tel" />
            </div>

            <a className="sm:col-span-2 bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 mt-4 shadow-xl shadow-secondary/30" href={whatsappLink("I need help booking a flight ticket.")} rel="noreferrer" target="_blank">
              Search Flights <span className="material-icons-outlined">arrow_forward</span>
            </a>
          </form>
          
          <div className="absolute -left-20 -bottom-20 opacity-10">
            <span className="material-icons-outlined text-[300px] text-white">airplanemode_active</span>
          </div>
        </div>
      </section>
    </main>
  );
}
