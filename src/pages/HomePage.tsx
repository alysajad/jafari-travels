import { Link } from "react-router-dom";
import { destinations, packages } from "../data/site";
import { useState } from "react";
import { SearchWidget } from "../components/SearchWidget";
import { DestinationModal } from "../components/DestinationModal";
import type { Destination } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

export function HomePage() {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  return (
    <main>
      <section className="relative min-h-[600px] lg:min-h-[750px] flex items-center pt-16 pb-32">
        <div className="absolute inset-0 z-0">
          <img alt="Beautiful Kashmir Landscape" className="w-full h-full object-cover object-[75%_center]" src="/images/imad-clicks-pIZZtKU_aVU-unsplash.jpg"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="text-white text-sm font-medium mb-6">
              Trusted by 50,000+ Happy Travelers
            </div>
            <h1 className="font-varien font-extrabold text-white leading-[1.1] mb-6 tracking-wide flex flex-col">
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] opacity-90">Explore</span>
              <span className="text-secondary text-6xl sm:text-7xl md:text-9xl lg:text-[150px] drop-shadow-2xl relative z-10 -mt-2 md:-mt-6">Kashmir.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-100 mb-8 max-w-xl opacity-90">
              Your trusted travel partner for boutique Kashmir tours, breathtaking mountain adventures, and unforgettable scenic getaways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/kashmir-packages" className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all text-center w-full sm:w-auto">
                  Explore Destinations <span className="material-icons-outlined">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <SearchWidget />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">verified_user</span>
              </div>
              <h4 className="font-bold text-sm">Best Price<br/>Guarantee</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">headset_mic</span>
              </div>
              <h4 className="font-bold text-sm">24/7 Support<br/>We are here</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">security</span>
              </div>
              <h4 className="font-bold text-sm">Secure Booking<br/>100% safe</h4>
            </div>
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">event_available</span>
              </div>
              <h4 className="font-bold text-sm">Easy Cancellation<br/>Hassle-free</h4>
            </div>
            <div className="hidden lg:flex flex-col items-center text-center gap-2 group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined">star</span>
              </div>
              <h4 className="font-bold text-sm">Top Rated<br/>Handpicked</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Explore the Paradise on Earth</h2>
              <p className="text-slate-500 font-medium">Breathtaking locations handpicked for your next Kashmir getaway.</p>
            </div>
            <Link to="/kashmir-packages" className="text-primary font-bold flex items-center gap-1 hover:underline">
                View All <span className="material-icons-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedDestination(dest)}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl text-left focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                <img alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={dest.image}/>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${i % 2 === 0 ? 'bg-red-500' : 'bg-green-500'} text-white px-3 py-1 rounded-full text-xs font-bold`}>{dest.discount}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                  <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                  <p className="text-slate-200 text-sm mb-2">Starting from <span className="text-secondary font-bold">{dest.price}</span></p>
                  <div className="flex items-center text-secondary text-xs">
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

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 bg-primary rounded-[2rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">Top Packages This Season</h2>
                <p className="text-blue-100 opacity-80 mb-8">Exclusive hand-crafted experiences designed just for you.</p>
                <Link to="/kashmir-packages" className="bg-white text-primary px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-100 transition-all">
                  View All Offers <span className="material-icons-outlined">east</span>
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-20 transform -rotate-12">
                <span className="material-icons-outlined text-[200px]">luggage</span>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[packages[0], packages[3]].map((pkg) => (
                <div key={pkg.slug} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all flex flex-col">
                  <div className="relative h-48">
                    <img alt={pkg.name} className="w-full h-full object-cover" src={pkg.image}/>
                    {pkg.badge && (
                      <span className={`absolute top-4 left-4 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${pkg.badge === 'Hot Deal' ? 'bg-red-500' : 'bg-primary'}`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-xl">{pkg.name}</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase text-right shrink-0">{pkg.duration.replace('/', ' / ').replace('N', ' Nights').replace('D', ' Days').replace('4 Nights / 5 Days', '5 Days / 4 Nights').replace('5 Nights / 6 Days', '6 Days / 5 Nights')}</p>
                    </div>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">{pkg.destinations}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-xs line-through">{pkg.originalPrice}</span>
                        <span className="text-2xl font-extrabold text-primary">{pkg.price}</span>
                      </div>
                      <Link to={`/kashmir-packages/${pkg.slug}`} className="text-primary font-bold flex items-center gap-1 text-sm hover:translate-x-1 transition-transform">
                        View Details <span className="material-icons-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 border-[30px] border-black rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 border-[50px] border-black rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
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
                <img alt="Hajj" className="rounded-[3rem] shadow-2xl relative z-10 w-full h-full object-cover max-h-[500px]" src="/images/hajj-hero.jpg"/>
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
          <div className="text-center max-w-2xl mx-auto mb-10">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
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

          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="max-w-xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Get Exclusive Offers & Travel Inspiration</h2>
            <p className="text-blue-100 opacity-90 text-lg">Subscribe to our newsletter and be the first to know about seasonal deals and pilgrimage slots.</p>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <form 
              className="flex bg-white p-2 rounded-2xl w-full max-w-md shadow-2xl" 
              onSubmit={e => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email");
                if(email) window.open(whatsappLink(`Please subscribe me to the newsletter. Email: ${email}`), "_blank", "noopener,noreferrer");
              }}
            >
              <input name="email" className="bg-transparent border-none focus:ring-0 px-4 py-3 text-slate-800 w-full font-medium" placeholder="Enter your email" type="email"/>
              <button className="bg-primary text-white p-3 rounded-xl flex items-center justify-center hover:scale-105 transition-all" type="submit">
                <span className="material-icons-outlined">send</span>
              </button>
            </form>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span className="material-icons-outlined text-[300px] text-white">public</span>
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
