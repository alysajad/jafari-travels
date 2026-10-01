import { Link } from "react-router-dom";
import { ArrowRight, Snowflake } from "lucide-react";
import { destinations, getSeasonPackages, rentalVehicles } from "../data/site";
import { useState } from "react";
import { SeasonToggle, useSeason } from "../components/SeasonToggle";
import { PackageCard } from "../components/PackageCard";
import { WinterPackageNotes } from "../components/WinterPackageNotes";
import { SearchWidget } from "../components/SearchWidget";
import { DestinationModal } from "../components/DestinationModal";
import type { Destination } from "../data/site";
import { openBookingEnquiry } from "../lib/booking";

export function HomePage() {
  const { season } = useSeason();
  const isWinter = season === "winter";
  const seasonalPackages = getSeasonPackages(season);
  const experiences = isWinter
    ? ["Gulmarg Snow", "Gondola Views", "Skiing Lessons", "Pahalgam Pines", "Kashmiri Kahwa", "Winter Photography", "Cosy Stays", "Dal Lake Views"]
    : ["Wazwan Dining", "Garden Walks", "Photography Tours", "Shikara Rides", "Mughal Gardens", "Houseboat Stay", "Valley Trekking", "Gondola Ride"];
  const winterDestinationDetails = [
    { image: "/images/winter-special.webp", subtitle: "A QUIETER SIDE OF DAL LAKE", description: "Winter brings quieter lakefront walks, mountain views and time to explore Srinagar's crafts markets. Shikara rides depend on lake and weather conditions. Gardens have bare terraces rather than spring flowers.", attractions: ["Dal Lake boulevard", "Hazratbal", "Lal Chowk markets", "Optional Shikara ride, conditions permitting"] },
    { image: "/images/winter-adventure.webp", subtitle: "KASHMIR'S SNOW COUNTRY", description: "Plan a day among Gulmarg's snow-covered fir trees. Gondola rides, ski lessons and sledging are optional activities, subject to tickets, snow conditions and operator clearance. Your team will advise on road access and any snow-chain transfers.", attractions: ["Gulmarg snow views", "Optional Gondola ride", "Optional beginner ski lessons", "Tangmarg scenic drive"] },
    { image: "/images/winter-family.webp", subtitle: "PINE FORESTS & WINTER DAYS", description: "Take your time in Pahalgam, with snowy pine slopes and views of the Lidder River. Explore accessible areas close to town; visits to Aru or Betaab Valley depend on road access and require a local taxi at additional cost.", attractions: ["Lidder River viewpoints", "Pine forest scenery", "Pahalgam market", "Optional valley visits when roads permit"] },
  ];
  const seasonalDestinations = isWinter
    ? destinations.slice(0, 3).map((destination, index) => ({ ...destination, ...winterDestinationDetails[index], time: "Travel time varies with winter road conditions" }))
    : destinations;
  const today = new Date().toISOString().split('T')[0];
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  return (
    <main>
      <section className={`season-hero ${isWinter ? "season-hero-winter" : "season-hero-summer"}`} aria-label={`${season} holidays in Kashmir`}>
        <img key={season} alt={isWinter ? "Snow-covered fir forests and Himalayan mountains in Gulmarg, Kashmir" : "Shikara boats on Dal Lake with green hills in summer"} className="season-hero-image" src={isWinter ? "/images/hero-winter.webp" : "/images/dal_lake_destination.jpg"} fetchPriority="high" />
        <div className="season-hero-shade" />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/90 sm:text-xs sm:tracking-[0.4em]">Jaffari Sky Travels · Kashmir, with local care</p>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-sm">
            {isWinter && <Snowflake size={14} aria-hidden="true" />}{isWinter ? "Your winter escape starts here" : "A summer in the valley"}
          </p>
          <h1 className="season-hero-title font-varien">
            <span className="block text-secondary">Kashmir</span>
            <span className="block">in {isWinter ? "winter." : "summer."}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
            {isWinter ? "Snow-dusted pines, slow days in the mountains and a warm cup of kahwa. Find your kind of winter with us." : "Lakeside mornings, green valleys and long days outdoors. Explore Kashmir at your own pace."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#season-packages" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300 sm:px-8">
              View {isWinter ? "Winter" : "Summer"} Tours <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#season-destinations" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">Explore Destinations</a>
          </div>
          {isWinter && <p className="mt-5 text-xs font-semibold tracking-wide text-white/85">6 winter holidays · From ₹12,999 per person</p>}
        </div>
        <svg className="season-snowline" viewBox="0 0 1440 75" preserveAspectRatio="none" aria-hidden="true"><path d="M0 44C85 62 118 13 211 35S362 74 462 43S617 11 730 40S871 71 982 36S1110 37 1220 48S1360 15 1440 37V75H0Z" fill="currentColor" /></svg>
      </section>

      <div className="season-switch-dock"><SeasonToggle /></div>
      <SearchWidget />

      <div className="relative mt-8 flex w-full items-center overflow-hidden border-y border-slate-200 bg-white py-4 sm:py-5" aria-label={`${season} experiences`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />
        <div className="flex min-w-max animate-ticker items-center whitespace-nowrap">
          {[...experiences, ...experiences].map((item, i) => (
            <div key={`${season}-${i}`} aria-hidden={i >= experiences.length ? true : undefined} className="mx-5 flex items-center gap-5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-sm font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section id="season-packages" className={`scroll-mt-48 py-16 sm:py-20 ${isWinter ? "bg-slate-50" : "bg-kashmir-cream"}`}>
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center" aria-live="polite">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-primary">{isWinter ? "Snow days, your way" : "Out into the valley"}</p>
            <h2 className="mb-4 font-varien text-3xl uppercase leading-tight tracking-wide text-slate-900 sm:text-4xl md:text-5xl">{isWinter ? "Winter Tour Packages" : "Summer Tour Packages"}</h2>
            <div className="mx-auto mb-5 h-0.5 w-12 bg-secondary" />
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500">{isWinter ? "A snow adventure with friends, a holiday for two or time away with family. Choose your trip and explore the full day-by-day plan." : "Discover lakes, gardens and mountain valleys with our Kashmir tours. Choose your package for the full itinerary."}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seasonalPackages.slice(0, 6).map((pkg) => <PackageCard key={pkg.slug} pkg={pkg} />)}
          </div>
          {isWinter && <WinterPackageNotes />}
          <div className="mt-8 text-center"><Link to="/kashmir-packages" className="focus-ring inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">Browse all {season} packages <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section id="season-destinations" className="scroll-mt-48 py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.35em] text-secondary">Explore in {isWinter ? "Winter" : "Summer"}</p>
            <h2 className="mb-4 font-varien text-3xl font-extrabold uppercase leading-tight tracking-wide text-slate-900 sm:text-4xl md:text-5xl">Popular Destinations</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500">{isWinter ? "Snow-covered mountains, pine valleys and peaceful lakefronts. We plan each outing around the weather and road conditions." : "Discover Kashmir in bloom - lush meadows, garden terraces, and shimmering lakes."}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalDestinations.map((dest, i) => (
              <button 
                key={i} 
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onClick={() => setSelectedDestination(dest)}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl text-left focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                <img alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={dest.image} loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                  <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                  <div className="mt-2 flex items-center text-secondary text-xs">
                    <span className="material-icons-outlined text-sm">star</span>
                    <span className="material-icons-outlined text-sm">star</span>
                    <span className="material-icons-outlined text-sm">star</span>
                    <span className="material-icons-outlined text-sm">star</span>
                    <span className="material-icons-outlined text-sm">star_half</span>
                    <span className="ml-2 text-white opacity-80">{dest.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="grid grid-cols-2 gap-7 sm:grid-cols-2 sm:gap-10 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                <span className="material-icons-outlined text-[26px] sm:text-[30px]">verified_user</span>
              </div>
              <h4 className="text-base font-bold leading-snug">Best Price<br/>Guarantee</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-primary transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                <span className="material-icons-outlined text-[26px] sm:text-[30px]">headset_mic</span>
              </div>
              <h4 className="text-base font-bold leading-snug">24/7 Support<br/>We are here</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600 transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                <span className="material-icons-outlined text-[26px] sm:text-[30px]">security</span>
              </div>
              <h4 className="text-base font-bold leading-snug">Secure Booking<br/>100% safe</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-3 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                <span className="material-icons-outlined text-[26px] sm:text-[30px]">event_available</span>
              </div>
              <h4 className="text-base font-bold leading-snug">Easy Cancellation<br/>Hassle-free</h4>
            </div>
            <div className="hidden flex-col items-center text-center gap-3 group lg:flex">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-transform group-hover:scale-110">
                <span className="material-icons-outlined text-[30px]">star</span>
              </div>
              <h4 className="text-base font-bold leading-snug">Top Rated<br/>Handpicked</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Car Rental Preview Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">Rent a Vehicle for Your Journey</h2>
              <p className="text-slate-500 font-medium">From sedans to luxury coaches, pick the format that fits your trip.</p>
            </div>
            <Link to="/car-rental" className="flex shrink-0 items-center gap-1 font-bold text-primary hover:underline sm:whitespace-nowrap">
                View Full Fleet <span className="material-icons-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalVehicles.slice(0, 3).map((vehicle) => (
              <div key={vehicle.id} className="rounded-[32px] p-6 flex flex-col h-full transition-all duration-300 ease-out border bg-white border-black text-black hover:shadow-xl hover:-translate-y-1 group">
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] bg-transparent mb-4 overflow-hidden flex items-center justify-center">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain scale-[1.35] mix-blend-multiply contrast-125 brightness-110 group-hover:scale-[1.45] transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                    {vehicle.category}
                  </span>
                </div>
                
                <div className="px-2 flex flex-col flex-1">
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{vehicle.category}</p>
                      <h3 className="text-2xl font-extrabold text-black leading-tight">{vehicle.name}</h3>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-0.5">
                         <span className="text-[11px] text-slate-400 line-through font-semibold">₹{(Math.round(vehicle.pricePerDay * 1.25 / 100) * 100).toLocaleString()}</span>
                         <div className="flex items-baseline gap-1">
                           <span className="text-3xl font-extrabold text-black tracking-tight">₹{vehicle.pricePerDay.toLocaleString()}</span>
                           <span className="text-[10px] text-slate-500 font-bold uppercase">/day</span>
                         </div>
                      </div>

                      <button className="inline-flex items-center justify-between pl-4 pr-1 py-1 rounded-full font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 w-fit gap-3 bg-black text-white hover:bg-slate-800" onClick={() => openBookingEnquiry({ kind: "car", source: "Homepage car Book Now", values: { Vehicle: vehicle.name, "Vehicle Category": vehicle.category } })} type="button">
                        Book Now
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#f59e0b] text-white">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </button>
                    </div>

                    <div className="py-1 sm:ml-auto sm:border-l sm:border-slate-100 sm:pl-6">
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

      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 border-[30px] border-black rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 border-[50px] border-black rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 border border-black bg-black text-white px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                <span className="material-icons-outlined text-sm">stars</span> Spiritual Journeys
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Embark on Your Blessed Journey to the Holy Land</h2>
              <p className="text-slate-600 text-lg">Specialized Hajj and Umrah packages from Kashmir. We provide premium accommodation, seamless logistics, and experienced religious guides to ensure a peaceful pilgrimage.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-icons-outlined text-black">check_circle</span>
                  <span className="font-medium">Proximity to Haram with 5-Star Accommodations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons-outlined text-black">check_circle</span>
                  <span className="font-medium">Personalized VIP Transport Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons-outlined text-black">check_circle</span>
                  <span className="font-medium">Experienced Mutawwifs for Religious Guidance</span>
                </li>
              </ul>
              <Link to="/hajj-umrah" className="border border-black bg-black text-white px-10 py-4 rounded-full font-extrabold shadow-xl hover:scale-105 transition-all inline-block">
                Inquire About 2026 Packages
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img alt="Hajj" className="rounded-[3rem] shadow-2xl relative z-10 w-full h-full object-cover max-h-[500px]" src="/images/hajj-hero.jpg" loading="lazy"/>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl z-20 hidden md:block">
                  <div className="text-slate-900">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Starting from</p>
                    <p className="text-3xl font-extrabold">₹65,000<span className="text-sm font-medium text-slate-500">/person</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl text-[#0b4b3c] font-serif mb-4 flex items-center justify-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Customer Voices
            </h2>
            <p className="text-slate-600 font-medium mb-6">Real reviews from our travelers experiencing the spiritual and scenic beauty with us.</p>
            <div className="flex items-center justify-center gap-2 text-lg font-bold">
              <span className="text-amber-500">4.8</span>
              <div className="flex text-amber-500">
                <span className="material-icons-outlined text-xl">star</span>
                <span className="material-icons-outlined text-xl">star</span>
                <span className="material-icons-outlined text-xl">star</span>
                <span className="material-icons-outlined text-xl">star</span>
                <span className="material-icons-outlined text-xl">star_half</span>
              </div>
              <span className="text-slate-500 text-sm font-medium ml-2">(120+ Reviews)</span>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold text-lg">S</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Shabir Ahmad</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">a month ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Very professional and reliable service. They managed our Umrah trip perfectly without any hassle. The local guides were knowledgeable and everything from flights to hotels was perfectly organized. Highly recommended for families."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-200 text-pink-700 flex items-center justify-center font-bold text-lg">F</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Faisal Wani</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">3 months ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"I booked a Kashmir tour package for my parents. Jaffari Sky Travels made sure they were comfortable and taken care of throughout the journey. Great hotels, excellent transport, and absolutely breathtaking views of Dal Lake."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-200 text-teal-700 flex items-center justify-center font-bold text-lg">M</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Mohammad Yasin</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">6 months ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Best travel agency in Kashmir! Their custom packages and transparency in pricing sets them apart. Excellent customer support 24x7. We had some flight delays and they instantly re-arranged our accommodation without any stress."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-bold text-lg">T</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Tariq Bhat</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">8 months ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Exceptional services! From our visa processing for Umrah to the local ziyarat tours, the Jaffari Sky Travels team made sure we were comfortable. A truly spiritual journey with zero worries."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center font-bold text-lg">Z</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Zahoor Lone</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">2 weeks ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Our family trip to Pahalgam and Gulmarg was beyond our expectations. The itinerary was perfectly balanced and the driver was extremely polite and helpful."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-lg">A</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Ayesha Sheikh</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">5 months ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Absolutely mesmerizing experience! The houseboat stay on Dal Lake was a dream come true. The team ensured we got the best rates possible."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-200 text-green-700 flex items-center justify-center font-bold text-lg">I</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Imran Qureshi</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star_half</span>
                    </div>
                    <span className="text-[10px] text-slate-500">7 months ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"Booked my international flights through Jaffari Sky Travels. Excellent support and they even managed to upgrade our seats at no extra cost. Trustworthy agency."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-lg">N</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Nadia Dar</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500 text-[10px]">
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                      <span className="material-icons-outlined text-[12px]">star</span>
                    </div>
                    <span className="text-[10px] text-slate-500">1 year ago</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic flex-1 pb-4">"The 15-day Umrah package we selected was meticulously planned. The Mutawwif provided was very patient with elders. Will definitely book again next year."</p>
              <div className="absolute bottom-4 right-4 opacity-50">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Before Business Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h4 className="text-secondary font-bold text-sm tracking-[0.2em] uppercase mb-2">Value Before Business</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight">We Offer The Best</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left side features */}
            <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div data-aos="fade-up" data-aos-delay="0" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">home</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">Local Expertise</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Born and raised in Kashmir - we know every hidden trail, shikara owner, and family-run wazwan kitchen in the valley.</p>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">apartment</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">Curated Stays</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Every property - houseboat, mountain lodge, or luxury resort - is personally inspected by our team.</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">phone_iphone</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">24/7 Concierge</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Your personal guide is always reachable - from airport arrival to farewell. Every detail handled for you.</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">favorite_border</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">Authentic Culture</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Dine with local families, learn pashmina weaving, attend a traditional feast - the real Kashmir, not a postcard of it.</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">assignment</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">Flexible Packages</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Budget to ultra-luxury, solo to large groups - we build itineraries around your time, taste, and budget.</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col gap-3 group">
                <div className="w-12 h-12 rounded border border-orange-200 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-outlined">verified_user</span>
                </div>
                <h4 className="font-extrabold text-sm uppercase text-slate-800 tracking-wide">Trained Guides</h4>
                <p className="text-sm text-slate-500 leading-relaxed">All our guides are certified, bilingual, first-aid trained, and deeply passionate about Kashmir's heritage.</p>
              </div>
            </div>

            {/* Right side Card */}
            <div data-aos="fade-left" className="lg:w-5/12 relative mt-12 lg:mt-0 px-4 sm:px-0">
              <div className="bg-white rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-50 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative h-full min-h-[450px]">
                {/* Rating Badge */}
                <div className="absolute top-6 right-6 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded border border-slate-100 p-3 flex flex-col items-center justify-center w-20 z-10">
                  <span className="text-2xl font-black text-slate-800 leading-none mb-1">4.9</span>
                  <div className="flex text-secondary text-[10px]">
                    <span className="material-icons-outlined text-[10px]">star</span>
                    <span className="material-icons-outlined text-[10px]">star</span>
                    <span className="material-icons-outlined text-[10px]">star</span>
                    <span className="material-icons-outlined text-[10px]">star</span>
                    <span className="material-icons-outlined text-[10px]">star</span>
                  </div>
                  <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Rating</span>
                </div>
                
                {/* Logo and Content */}
                <div className="w-56 h-32 mb-6 mt-8 p-1">
                  <img src="/logo.png" alt="Jaffari Sky Travels" className="w-full h-full object-contain drop-shadow-md scale-125" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary uppercase leading-tight">Jaffari Sky<br/>Travels</h3>
                <p className="text-secondary font-extrabold text-[10px] uppercase tracking-[0.3em] mt-3 mb-6">Kashmir • Est. 2009</p>
                
                <div className="w-12 h-[1px] bg-slate-200 mb-6"></div>

                <p className="text-slate-500 text-sm max-w-[280px] mx-auto leading-relaxed pb-8 lg:pb-0">
                  Kashmir's most trusted travel partner - crafting unforgettable Himalayan escapes since 2009.
                </p>
                
                {/* Floating Orange Box */}
                <div className="absolute -bottom-6 -left-6 md:-left-10 bg-secondary text-white p-6 rounded-sm w-48 shadow-xl z-20 hidden sm:block">
                  <div className="text-3xl font-black mb-2 leading-none">5+</div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest leading-[1.4]">Years Crafting<br/>Perfect Himalayan<br/>Escapes</div>
                </div>
                {/* Mobile Floating Box - inside flow or slightly shifted */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-secondary text-white p-5 rounded-sm w-48 shadow-xl z-20 sm:hidden">
                  <div className="text-2xl font-black mb-1 leading-none text-center">5+</div>
                  <div className="text-[9px] font-extrabold uppercase tracking-wider leading-[1.3] text-center">Years Crafting<br/>Perfect Himalayan<br/>Escapes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-aos="fade-up" className="max-w-xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.35em] text-secondary">Kashmir Tour FAQs</p>
            <h2 className="mb-5 font-varien text-3xl font-extrabold uppercase leading-tight tracking-wide text-slate-900 sm:text-4xl md:text-5xl">Plan With Clarity</h2>
            <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
              Quick answers about our Kashmir packages, booking support, seasonal travel, and custom itineraries.
            </p>
          </div>

          <div data-aos="fade-up" className="space-y-3">
            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                What is included in your Kashmir tour packages?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Most packages include hotel stays, private transport, sightseeing, itinerary planning, and booking assistance. Meals, tickets, and special activities depend on the selected package and can be customized before confirmation.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                Can you customize the itinerary for my budget?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Yes. We build trips around your budget, travel dates, group size, hotel preference, and pace. Budget explorers, honeymoon couples, families, and luxury travelers can all request a custom plan.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                What is the best time to visit Kashmir?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                April to June is ideal for spring views, gardens, and pleasant weather. July to September suits meadows, lakes, and soft adventure. October to November is great for autumn colors, while winter is best for snow, Gulmarg, skiing, and cozy stays.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                Do you help with hotels, transport, and activity bookings?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Yes. Our team handles accommodation, airport transfers, local transport, sightseeing routes, Gondola tickets, adventure activities, and other reservations based on availability.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                Which package types do you offer?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We offer cultural tours, winter adventure packages, honeymoon specials, family packages, luxury stays, budget tours, excursions, car rentals, air tickets, visas, and Hajj or Umrah support.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-[#F9F8F6] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-900">
                How do I book or get expert guidance?
                <span className="material-icons-outlined text-secondary transition-transform group-open:rotate-45">add</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose a package or send us your dates on WhatsApp. Our travel team will suggest the right route, stays, vehicle, and activities before sharing a final quote.
              </p>
            </details>
          </div>
        </div>
      </section>

      <DestinationModal 
        destination={selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
      />
    </main>
  );
}
