import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { packages } from "../data/site";

export function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = packages.find((item) => item.slug === slug) ?? packages[0];
  const similar = packages.filter((item) => item.slug !== pkg.slug).slice(0, 3);
  
  const [expandedDays, setExpandedDays] = useState<number[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pkg.name,
          text: `Check out this amazing tour package: ${pkg.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const toggleDay = (index: number) => {
    setExpandedDays(prev => 
      prev.includes(index) ? prev.filter(d => d !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    if (pkg.itinerary && expandedDays.length === pkg.itinerary.length) {
      setExpandedDays([]);
    } else if (pkg.itinerary) {
      setExpandedDays(pkg.itinerary.map((_, i) => i));
    }
  };

  return (
    <main className="bg-white text-black transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="flex text-sm text-slate-500 mb-2 gap-2">
            <Link to="/">Home</Link> <span>/</span> <Link to="/kashmir-packages">Packages</Link> <span>/</span> <span className="text-primary font-medium">{pkg.name}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{pkg.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-amber-500"><i className="material-icons-outlined text-sm">star</i> 4.9 (124 reviews)</span>
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1"><i className="material-icons-outlined text-sm">location_on</i> {pkg.destinations}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={handleShare} className="p-3 border border-black rounded-xl hover:bg-slate-100 transition-colors"><i className="material-icons-outlined text-xl">share</i></button>
              <button onClick={() => setIsFavorite(!isFavorite)} className={`p-3 border rounded-xl transition-colors ${isFavorite ? 'bg-rose-50 border-rose-200' : 'border-black hover:bg-slate-100'}`}><i className={`material-icons-outlined text-xl ${isFavorite ? 'text-rose-500' : ''}`}>{isFavorite ? 'favorite' : 'favorite_border'}</i></button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[300px] md:h-[500px] rounded-3xl overflow-hidden relative">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden">
            <img alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={pkg.image}/>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <img alt="Gulmarg Snow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/destination-gulmarg.jpg"/>
          </div>
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <img alt="Pahalgam Valley" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/destination-pahalgam.jpg"/>
          </div>
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <img alt="Houseboat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/destination-dal-lake.jpg"/>
          </div>
          <div className="hidden md:block relative group cursor-pointer overflow-hidden">
            <img alt="Srinagar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/destination-srinagar.jpg"/>
            <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
              <i className="material-icons-outlined text-sm">grid_view</i> Show All Photos
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-black rounded-3xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-2xl text-primary"><i className="material-icons-outlined">schedule</i></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Duration</p><p className="font-bold">{pkg.duration}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-3 rounded-2xl text-green-600"><i className="material-icons-outlined">group</i></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Group Size</p><p className="font-bold">Flexible</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-2xl text-purple-600"><i className="material-icons-outlined">restaurant</i></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Meals</p><p className="font-bold">Breakfast & Dinner</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><i className="material-icons-outlined">directions_car</i></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Transport</p><p className="font-bold">Private SUV</p></div>
            </div>
          </div>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-black leading-relaxed">Experience the magic of 'Paradise on Earth' with our curated {pkg.duration} Kashmir odyssey. Explore the tranquil waters of Dal Lake, snow-capped meadows of Gulmarg, and breathtaking landscapes of Pahalgam.</p>
            </div>
          </section>
          
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Day-by-Day Itinerary</h2>
              {pkg.itinerary && (
                <button onClick={expandAll} className="text-primary font-bold text-sm">
                  {expandedDays.length === pkg.itinerary.length ? 'Collapse All' : 'Expand All'}
                </button>
              )}
            </div>
            <div className="space-y-4">
              {pkg.itinerary ? pkg.itinerary.map((day, index) => (
                <div key={index} className="border border-black rounded-2xl overflow-hidden bg-white">
                  <button onClick={() => toggleDay(index)} className="w-full px-6 py-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4 text-left">
                      <span className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {day.day}
                      </span>
                      <span className="font-bold text-lg text-black">{day.title}</span>
                    </div>
                    <i className={`material-icons-outlined text-slate-400 group-hover:text-primary transition-transform duration-300 ${expandedDays.includes(index) ? 'rotate-180' : ''}`}>
                      expand_more
                    </i>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${expandedDays.includes(index) ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-14 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {day.details}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-slate-500 italic">Itinerary details coming soon.</div>
              )}
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-black">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-700">
                <i className="material-icons-outlined">check_circle_outline</i> Inclusions
              </h3>
              <ul className="space-y-4">
                {pkg.inclusions.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <i className="material-icons-outlined text-emerald-500 mt-0.5">check</i>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-rose-50/50 p-8 rounded-3xl border border-black">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-rose-700">
                <i className="material-icons-outlined">highlight_off</i> Exclusions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="material-icons-outlined text-rose-500 mt-0.5">close</i>
                  <span className="text-black">Airfare / Train fare to/from Srinagar</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="material-icons-outlined text-rose-500 mt-0.5">close</i>
                  <span className="text-black">Gondola ride tickets (Gulmarg)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="material-icons-outlined text-rose-500 mt-0.5">close</i>
                  <span className="text-black">Personal expenses like tips, laundry, etc.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        
        <aside className="relative">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white border border-black p-8 rounded-3xl shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-500 text-sm font-medium line-through">{pkg.originalPrice}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-black">{pkg.price}</span>
                    <span className="text-slate-500 font-medium">/person</span>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Save 15%
                </span>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Check Availability</label>
                  <div className="relative">
                    <i className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</i>
                    <input className="w-full pl-11 pr-4 py-3 bg-white border border-black rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all cursor-pointer" type="date" min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]}/>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <i className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person</i>
                    <input className="w-full pl-11 pr-4 py-3 bg-white border border-black rounded-xl text-sm focus:ring-2 focus:ring-primary" type="number" min="1" defaultValue="2"/>
                  </div>
                  <div className="relative">
                    <i className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">child_care</i>
                    <input className="w-full pl-11 pr-4 py-3 bg-white border border-black rounded-xl text-sm focus:ring-2 focus:ring-primary" type="number" min="0" defaultValue="0"/>
                  </div>
                </div>
                <a href={`https://wa.me/917051693767?text=Hi, I am interested in ${pkg.name}`} target="_blank" rel="noreferrer" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/25 mt-4 flex justify-center items-center">
                    Enquire on WhatsApp
                </a>
              </form>
              <p className="text-center text-xs text-slate-500 mt-4 font-medium flex items-center justify-center gap-1">
                <i className="material-icons-outlined text-sm">bolt</i> No hidden booking fees
              </p>
            </div>
            
            <div className="bg-white border border-black p-8 rounded-3xl text-black">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-black text-sm mb-6 leading-relaxed">Our destination experts can help you customize this itinerary to your preference.</p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-black bg-white hover:bg-slate-100 transition-colors font-bold text-sm">
                  <i className="material-icons-outlined">call</i> Speak to Expert
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-black bg-white hover:bg-slate-100 transition-colors font-bold text-sm">
                  <i className="material-icons-outlined">mail</i> Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      <section className="bg-white py-20 border-t border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Similar Packages</h2>
              <p className="text-slate-500">More curated experiences in the Himalayas</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-white rounded-full border border-black shadow-sm"><i className="material-icons-outlined">chevron_left</i></button>
              <button className="p-3 bg-white rounded-full border border-black shadow-sm"><i className="material-icons-outlined">chevron_right</i></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similar.map(item => (
              <div key={item.slug} className="bg-white border border-black rounded-3xl overflow-hidden shadow-sm group">
                <div className="relative h-64 overflow-hidden">
                  <img alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image}/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{item.duration}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">{item.price} <span className="text-slate-400 text-sm font-normal">/pp</span></p>
                    <Link to={`/kashmir-packages/${item.slug}`} className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Details <i className="material-icons-outlined text-sm">arrow_forward</i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
