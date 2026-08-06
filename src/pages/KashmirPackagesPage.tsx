import { Bed, CalendarCheck, CheckCircle2, ChevronRight, Clock, Headphones, Lock, MapPin, ShieldCheck, Star, ArrowRight, Camera, Mountain, Coffee, Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/whatsapp";
import { packages } from "../data/site";

export function KashmirPackagesPage() {
  const [filters, setFilters] = useState({
    duration: { '1-3': false, '4-6': false, '7+': false } as Record<string, boolean>,
    type: { 'Family': false, 'Honeymoon': false, 'Adventure': false } as Record<string, boolean>,
    dest: { 'Srinagar': false, 'Gulmarg': false, 'Pahalgam': false, 'Sonamarg': false } as Record<string, boolean>
  });
  
  const [sortBy, setSortBy] = useState('Recommended');

  const handleFilterChange = (category: keyof typeof filters, key: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: { ...prev[category], [key]: !prev[category][key] }
    }));
  };

  const handleReset = () => {
    setFilters({
      duration: { '1-3': false, '4-6': false, '7+': false },
      type: { 'Family': false, 'Honeymoon': false, 'Adventure': false },
      dest: { 'Srinagar': false, 'Gulmarg': false, 'Pahalgam': false, 'Sonamarg': false }
    });
    setSortBy('Recommended');
  };

  const processedPackages = useMemo(() => {
    let result = packages.filter(pkg => {
      // Duration check
      let matchesDuration = true;
      const hasDurationFilter = Object.values(filters.duration).some(Boolean);
      if (hasDurationFilter) {
        const nights = parseInt(pkg.duration);
        let matched = false;
        if (filters.duration['1-3'] && nights >= 1 && nights <= 3) matched = true;
        if (filters.duration['4-6'] && nights >= 4 && nights <= 6) matched = true;
        if (filters.duration['7+'] && nights >= 7) matched = true;
        matchesDuration = matched;
      }

      // Type check
      let matchesType = true;
      const hasTypeFilter = Object.values(filters.type).some(Boolean);
      if (hasTypeFilter) {
        matchesType = !!filters.type[pkg.type];
      }

      // Dest check
      let matchesDest = true;
      const hasDestFilter = Object.values(filters.dest).some(Boolean);
      if (hasDestFilter) {
        matchesDest = Object.entries(filters.dest)
          .filter(([_, checked]) => checked)
          .some(([dest]) => pkg.destinations.includes(dest));
      }

      return matchesDuration && matchesType && matchesDest;
    });

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="bg-slate-50 text-slate-800 transition-colors duration-300">
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img alt="Kashmir Landscape" className="absolute inset-0 w-full h-full object-cover" src="/images/naweedey-XHG0uFAlEGM-unsplash.jpg"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="relative w-full px-4 lg:px-8 xl:px-12 mx-auto text-white -mt-16">
          <nav className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/kashmir-packages" className="hover:underline">Packages</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold">Kashmir</span>
          </nav>
          <h2 className="font-varien text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-wide mb-4">Heaven on Earth: <span className="text-secondary">Kashmir</span></h2>
          <p className="text-lg md:text-xl max-w-2xl opacity-90 leading-relaxed">Discover the enchanting valleys, serene lakes, and snow-capped peaks of the crown jewel of India.</p>
        </div>
      </section>

      <div className="w-full px-4 lg:px-8 xl:px-12 mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-72 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={handleReset} className="text-primary text-xs font-semibold uppercase tracking-wider hover:underline">Reset</button>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Duration</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                    <input checked={filters.duration['1-3']} onChange={() => handleFilterChange('duration', '1-3')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> 1 - 3 Nights
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                    <input checked={filters.duration['4-6']} onChange={() => handleFilterChange('duration', '4-6')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> 4 - 6 Nights
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                    <input checked={filters.duration['7+']} onChange={() => handleFilterChange('duration', '7+')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> 7+ Nights
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Package Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary">
                    <input checked={filters.type['Family']} onChange={() => handleFilterChange('type', 'Family')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> Family Tour
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary">
                    <input checked={filters.type['Honeymoon']} onChange={() => handleFilterChange('type', 'Honeymoon')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> Honeymoon
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary">
                    <input checked={filters.type['Adventure']} onChange={() => handleFilterChange('type', 'Adventure')} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/> Adventure
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold mb-3 text-sm">Destinations</h4>
                <div className="grid grid-cols-1 gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input checked={filters.dest['Srinagar']} onChange={() => handleFilterChange('dest', 'Srinagar')} className="rounded border-slate-300 text-primary" type="checkbox"/> Srinagar
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input checked={filters.dest['Gulmarg']} onChange={() => handleFilterChange('dest', 'Gulmarg')} className="rounded border-slate-300 text-primary" type="checkbox"/> Gulmarg
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input checked={filters.dest['Pahalgam']} onChange={() => handleFilterChange('dest', 'Pahalgam')} className="rounded border-slate-300 text-primary" type="checkbox"/> Pahalgam
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input checked={filters.dest['Sonamarg']} onChange={() => handleFilterChange('dest', 'Sonamarg')} className="rounded border-slate-300 text-primary" type="checkbox"/> Sonamarg
                  </label>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
              <ShieldCheck className="w-10 h-10 mb-4 opacity-50" />
              <h4 className="text-xl font-bold mb-2">Book with Confidence</h4>
              <p className="text-xs opacity-90 leading-relaxed mb-4">Get 100% refund on cancellations before 72 hours of departure.</p>
              <a href={whatsappLink(`I am interested in the ${pkg.title} Kashmir package and want to learn more.`)} target="_blank" rel="noreferrer" className="block text-center w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-slate-50 transition-colors">Learn More</a>
            </div>
          </aside>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">{processedPackages.length} Kashmir Packages Found</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium opacity-60">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border-none bg-transparent font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
            
            {processedPackages.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-slate-800 mb-2">No packages found</h4>
                <p className="text-slate-500 mb-6">Try adjusting your filters to see more results.</p>
                <button onClick={handleReset} className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedPackages.map(pkg => (
                <div key={pkg.slug} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <Link to={`/kashmir-packages/${pkg.slug}`} className="block relative h-64 overflow-hidden">
                    <img alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={pkg.image}/>
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1"><Clock className="w-3 h-3" /> {pkg.duration}</span>
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <Link to={`/kashmir-packages/${pkg.slug}`} className="flex justify-between items-start mb-2 group/title">
                      <h4 className="text-xl font-bold group-hover/title:text-primary transition-colors">{pkg.name}</h4>
                      <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 fill-current" /><span className="text-xs font-bold text-slate-800 ml-1">4.9</span></div>
                    </Link>
                    <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {pkg.destinations}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.inclusions.map(inc => (
                        <span key={inc} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-semibold text-slate-600 flex items-center gap-1">
                          {inc}
                        </span>
                      ))}
                    </div>
                    <div className="mb-6 border-t border-slate-100 pt-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#f59e0b]">{pkg.price}</span>
                        <span className="text-xs line-through opacity-50">{pkg.originalPrice}</span>
                        <span className="text-[10px] font-medium opacity-60 ml-auto text-right uppercase">Per Pax<br/>Min. 2 Pax</span>
                      </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-3 mt-auto pt-2">
                      <Link to={`/kashmir-packages/${pkg.slug}`} className="flex-1 flex items-center justify-center gap-1 py-3 bg-white text-black border border-black text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-black hover:text-white transition-colors">
                        View Details <span className="text-[14px] leading-none">→</span>
                      </Link>
                      <a href={`https://wa.me/917051693767?text=Hi, I am interested in ${pkg.name}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center py-3 bg-black text-white border border-black text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-colors">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            )}
            
            {processedPackages.length > 0 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">Load More Packages</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h5 className="font-bold text-sm">Best Price</h5>
            <p className="text-[10px] opacity-60 mt-1">Guarantee</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <Headphones className="w-8 h-8" />
            </div>
            <h5 className="font-bold text-sm">24/7 Support</h5>
            <p className="text-[10px] opacity-60 mt-1">We are here</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <Lock className="w-8 h-8" />
            </div>
            <h5 className="font-bold text-sm">Secure Booking</h5>
            <p className="text-[10px] opacity-60 mt-1">100% Safe</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <CalendarCheck className="w-8 h-8" />
            </div>
            <h5 className="font-bold text-sm">Easy Cancel</h5>
            <p className="text-[10px] opacity-60 mt-1">Hassle-free</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <Bed className="w-8 h-8" />
            </div>
            <h5 className="font-bold text-sm">Handpicked</h5>
            <p className="text-[10px] opacity-60 mt-1">Top Rated Hotels</p>
          </div>
        </div>
      </section>
    </main>
  );
}
