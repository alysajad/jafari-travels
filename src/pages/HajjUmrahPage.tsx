import { ArrowRight, CheckCircle2, ChevronDown, Landmark } from "lucide-react";
import { umrahPackages } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

const hajjFaqs = [
  { q: "When will Hajj 2027 packages be officially announced?", a: "The official quotas and package details are typically announced by the Ministry of Hajj and Umrah a few months before the season. Pre-registering ensures you get the updates immediately." },
  { q: "What is the difference between Shifting and Non-Shifting Hajj?", a: "Shifting packages involve moving to an apartment or hotel in Aziziyah before and after the core days of Hajj (Mina, Arafat, Muzdalifah), while Non-Shifting packages keep you in a hotel close to the Haram throughout." },
  { q: "Is the pre-registration fee refundable?", a: "Yes, pre-registration is essentially an expression of interest. If you choose not to proceed once prices are announced, your deposit is fully refundable." },
  { q: "Do you provide female guides for women traveling without a Mahram?", a: "Yes, under the new regulations, women can travel in groups without a Mahram. We provide dedicated female Qafila leaders for guidance and support." }
];

const hotels = ["Swissotel Al Maqam", "Pullman Zamzam", "Hilton Suites", "Concorde Al Madinah", "Movenpick Anwar Al Madinah", "Manarat Misk"];

export function HajjUmrahPage() {
  return (
    <main className="bg-slate-50 pb-12 pt-16 md:pt-24">

      {/* Featured Hajj Packages */}
      <section className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Packages</span>
        <h2 className="font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">Featured Hajj Packages</h2>
        <p className="text-slate-500 text-lg mb-12">Explore our expected packages for the upcoming Hajj season.</p>
        
        <div className="max-w-[540px] mx-auto text-left">
          <div className="mb-6 text-center text-kashmir-gold text-sm font-black tracking-[0.2em] uppercase">Hajj 2027</div>
          <div className="rounded-[24px] bg-[#044c3c] text-white p-8 shadow-2xl relative border border-[#044c3c]/50">
            <div className="absolute top-4 right-4 bg-[#9a5611] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">LIMITED SEATS</div>
            <div className="flex flex-col items-center text-center mb-6 pt-4">
              <Landmark className="w-8 h-8 mb-4 opacity-70" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl mb-3 text-white">Shifting Package</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Full Hajj package with hotel shifting between Mecca, Mina & Arafat. Includes visa, flights, accommodation & Qafila leaders.
              </p>
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-serif text-white">₹6,50,000</span>
                <span className="text-sm text-white/70">/person</span>
              </div>
              <p className="text-[9px] font-bold tracking-widest uppercase text-white/60 mb-8">(Prices subject to change) — Please enquire</p>
            </div>
            
            <div className="pt-2">
              <ul className="space-y-4 mb-8">
                {[
                  "Hajj Visa & Return Flights",
                  "Hotel Shifting — Mecca, Mina & Arafat",
                  "Dedicated Kashmiri Qafila Leaders",
                  "All Rituals Guidance & Transport"
                ].map(inc => (
                  <li key={inc} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent border border-[#a3e635]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                    </div>
                    <span className="text-white/90">{inc}</span>
                  </li>
                ))}
              </ul>
              
              <a href={whatsappLink("I want to reserve a seat for the Hajj 2027 Shifting Package.")} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-colors duration-200 bg-[#854d0e] text-white hover:bg-[#713f12]">
                Reserve Hajj Seat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pre-Register */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Why Register</span>
          <h2 className="font-extrabold text-3xl md:text-5xl text-slate-900 mb-12">Why Pre-Register for Hajj 2027?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#a3e635] text-slate-900 text-lg font-black flex items-center justify-center mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Priority Slot Allocation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Quota is limited. Early registration ensures you're first in line when packages are officially announced.
              </p>
            </div>
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#a3e635] text-slate-900 text-lg font-black flex items-center justify-center mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Early Price Lock</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Register now and lock in early-bird pricing before fare increases closer to the peak season.
              </p>
            </div>
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#a3e635] text-slate-900 text-lg font-black flex items-center justify-center mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dedicated Guidance</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                From day one, our team provides personalised guidance on preparation, documentation, and rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="umrah-packages" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="mb-6 font-extrabold text-2xl text-slate-800">Umrah package tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {umrahPackages.map((pkg) => (
            <div key={pkg.tier} className="rounded-[32px] p-6 flex flex-col h-full transition-all duration-300 ease-out border bg-white border-black text-black hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xs font-bold text-black">{pkg.tier}</h4>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">{pkg.duration}</span>
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <span className="font-extrabold text-3xl text-black">{pkg.price}</span>
                <span className="text-xs text-slate-500">/person</span>
              </div>
              <p className="text-xs leading-relaxed mb-8 text-slate-600">
                A carefully guided spiritual journey with all essential arrangements for a peaceful and meaningful Umrah experience.
              </p>
              <a className="inline-flex items-center justify-between pl-4 pr-1 py-1 rounded-full font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 w-fit mb-8 gap-3 bg-black text-white hover:bg-slate-800" href={whatsappLink(`I want details for ${pkg.tier}.`)} target="_blank" rel="noreferrer">
                Select
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#f59e0b] text-white">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
              <div className="mt-auto pt-8 border-t border-slate-200">
                <p className="text-xs font-bold mb-4 uppercase tracking-wider text-slate-500">Includes:</p>
                <ul className="space-y-3">
                  {pkg.inclusions.map(inc => (
                    <li key={inc} className="flex items-start gap-2 text-xs font-semibold">
                      <div className="mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#f59e0b]">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-slate-700">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="mb-6 font-extrabold text-2xl text-slate-800">Affiliate partner hotels</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <div className="rounded-2xl bg-white border border-slate-200 p-4 transition-shadow hover:shadow-lg" key={hotel}>
              <strong className="block text-base text-slate-800">{hotel}</strong>
              <span className="mt-1 block text-xs font-semibold text-slate-500">Makkah / Madinah stay support</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-extrabold text-3xl md:text-5xl text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Common questions about Hajj & Umrah bookings.</p>
          </div>
          <div className="space-y-4">
            {hajjFaqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
