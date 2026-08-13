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
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-start pt-16 pb-16">
        <div className="absolute inset-0 z-0">
          <img alt="Kashmir Car Rental" className="w-full h-full object-cover object-center" src="/images/rental_hero_bg.png"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex justify-start">
          <div className="max-w-2xl text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary drop-shadow-md">
              Kashmir Car Rental
            </p>
            <h1 className="font-varien text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-6 tracking-wide drop-shadow-lg">
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
            <h2 className="text-3xl md:text-5xl font-varien font-extrabold text-slate-900 mb-6">
              Fifteen vehicles.<br/><span className="text-primary">One promise.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              From a Swift for two through to a 20-seater coach — pick the format that fits your trip.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
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
              <div key={vehicle.id} className="rounded-[32px] p-6 flex flex-col h-full transition-all duration-300 ease-out border bg-white border-black text-black hover:shadow-xl hover:-translate-y-1 group">
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] bg-slate-100 mb-6 overflow-hidden flex items-center justify-center">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                    {vehicle.category}
                  </span>
                </div>
                
                <div className="px-2 flex flex-col flex-1">
                  <div className="mb-5">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{vehicle.category}</p>
                    <h3 className="text-2xl font-extrabold text-black">{vehicle.name}</h3>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-4 gap-2 mb-8 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-black font-extrabold text-base">{vehicle.seats}</span>
                      <span className="text-slate-400 text-xs uppercase font-medium">Seats</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-black font-extrabold text-base">{vehicle.bags}</span>
                      <span className="text-slate-400 text-xs uppercase font-medium">Bags</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-black font-extrabold text-base">{vehicle.transmission}</span>
                      <span className="text-slate-400 text-xs uppercase font-medium">Trans.</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-black font-extrabold text-base">{vehicle.ac ? 'AC' : 'Non-AC'}</span>
                      <span className="text-slate-400 text-xs uppercase font-medium">Climate</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-3xl font-extrabold text-black">₹{vehicle.pricePerDay.toLocaleString()}</span>
                      <span className="text-xs text-slate-500">/day</span>
                    </div>
                    <a
                      href={whatsappLink(`Hi, I want to rent the ${vehicle.name} (${vehicle.category}) for ₹${vehicle.pricePerDay}/day.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-colors duration-200 gap-5 bg-black text-white hover:bg-slate-800"
                    >
                      Book
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f59e0b] text-white">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </a>
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
              <img src="/images/imad-clicks-pihL1C0Mtvc-unsplash.jpg" className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover relative z-10" alt="Booking process" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
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
