import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { rentalVehicles } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

export function CarRentalPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(rentalVehicles.map((v) => v.category)));
    return ["All", ...cats];
  }, []);

  const filteredVehicles = useMemo(() => {
    if (activeCategory === "All") return rentalVehicles;
    return rentalVehicles.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  const steps = [
    "Choose your vehicle from our fleet",
    "Share trip dates via WhatsApp",
    "Confirmed vehicle at your doorstep"
  ];

  return (
    <main>
      {/* Custom Hero Section */}
      <section className="relative flex min-h-[380px] items-center justify-start pb-16 pt-16 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img alt="Kashmir Car Rental" className="w-full h-full object-cover object-center" src="/images/rental_hero_bg.png"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex justify-start">
          <div className="max-w-2xl text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-secondary drop-shadow-md sm:tracking-[0.18em]">
              Kashmir Car Rental
            </p>
            <h1 className="mb-6 font-varien text-[clamp(2.5rem,13vw,3.75rem)] font-extrabold leading-[1.08] tracking-wide text-white drop-shadow-lg">
              OUR FLEET.<br />YOUR JOURNEY.
            </h1>
            <p className="text-base md:text-lg text-slate-100 opacity-95 leading-relaxed drop-shadow-md">
              From premium sedans to luxury coaches, pick the format that fits your trip. Reliable, sanitized, and ready for the mountains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F8F6]">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-6 font-varien text-[clamp(2rem,10vw,3rem)] font-extrabold leading-tight text-slate-900">
              Fifteen vehicles.<br/><span className="text-primary">One promise.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              From a Swift for two through to a 20-seater coach - pick the format that fits your trip.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-bold tracking-wide transition-all sm:px-5 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
                {category === "All" && (
                  <span className="ml-2 text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{rentalVehicles.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="group flex h-full flex-col rounded-[24px] border border-black bg-white p-5 text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:rounded-[32px] sm:p-6">
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] bg-transparent mb-4 overflow-hidden flex items-center justify-center">
                  <img src={vehicle.image} alt={vehicle.name} className={`w-full h-full object-contain mix-blend-multiply contrast-125 brightness-110 transition-transform duration-500 ${vehicle.id === 'bus-19' ? 'scale-100 group-hover:scale-110 p-2' : vehicle.id === 'tempo-22-26' ? 'scale-100 group-hover:scale-110 p-2' : vehicle.id === 'bus-large' ? 'scale-[1.35] group-hover:scale-[1.45] translate-x-8 group-hover:translate-x-10' : vehicle.category === 'Tempo' || vehicle.id === 'urbania' ? 'scale-[1.25] group-hover:scale-[1.35] p-1' : 'scale-[1.35] group-hover:scale-[1.45]'}`} loading="lazy" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                    {vehicle.category}
                  </span>
                </div>
                
                <div className="px-2 flex flex-col flex-1">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{vehicle.category}</p>
                      <h3 className="text-xl font-extrabold leading-tight text-black sm:text-2xl">{vehicle.name}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-auto gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-0.5">
                         <span className="text-[11px] text-slate-400 line-through font-semibold">₹{(Math.round(vehicle.pricePerDay * 1.25 / 100) * 100).toLocaleString()}</span>
                         <div className="flex items-baseline gap-1">
                           <span className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">₹{vehicle.pricePerDay.toLocaleString()}</span>
                           <span className="text-[10px] text-slate-500 font-bold uppercase">/day</span>
                         </div>
                      </div>

                      <a className="inline-flex items-center justify-between pl-4 pr-1 py-1 rounded-full font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 w-fit gap-3 bg-black text-white hover:bg-slate-800" href={whatsappLink(`Hi, I want to rent the ${vehicle.name} (${vehicle.category}) for ₹${vehicle.pricePerDay}/day.`)} target="_blank" rel="noreferrer">
                        Book Now
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#f59e0b] text-white">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </a>
                    </div>

                    <div className="sm:pl-6 sm:border-l border-slate-100 py-1 sm:ml-auto">
                      <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-[13px] font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                            <span className="text-slate-600">Seating: <span className="text-slate-900">{vehicle.seats}</span></span>
                          </li>
                          <li className="flex items-center gap-2 text-[13px] font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                            <span className="text-slate-600">Luggage: <span className="text-slate-900">{vehicle.luggageDetails}</span></span>
                          </li>
                          <li className="flex items-center gap-2 text-[13px] font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                            <span className="text-slate-600">AC: <span className="text-slate-900">{vehicle.ac ? 'Yes' : 'No'}</span></span>
                          </li>
                          <li className="flex items-center gap-2 text-[13px] font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                            <span className="text-slate-600">Tolls: <span className="text-slate-900">{vehicle.tollTaxes}</span></span>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Section - How it works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">How to book your ride</h2>
              <p className="text-slate-600 text-lg">Booking a rental car shouldn't be complicated. Our simple process ensures you get the best vehicle without the hassle.</p>
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
              <img src="/images/imad-clicks-pihL1C0Mtvc-unsplash.jpg" className="relative z-10 h-[320px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[500px] sm:rounded-[3rem]" alt="Booking process" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[2rem] bg-primary p-6 sm:rounded-[3rem] sm:p-8 md:flex-row md:p-16">
          <div className="max-w-xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Need a custom fleet?</h2>
            <p className="text-blue-100 opacity-90 text-lg">For corporate events, large groups, or long-term rentals, get in touch with our team for special rates.</p>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <a 
              href={whatsappLink("Hi, I'm looking for a custom fleet/corporate rental quote.")}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wider block text-center hover:scale-105 transition-transform shadow-xl"
            >
              Contact Sales Team
            </a>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span className="material-icons-outlined text-[300px] text-white">directions_car</span>
          </div>
        </div>
      </section>
    </main>
  );
}
