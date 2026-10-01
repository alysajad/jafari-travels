import { Bed, CalendarCheck, CheckCircle2, ChevronRight, Headphones, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { formatEnquiryMessage, whatsappLink } from "../lib/whatsapp";
import { getSeasonPackages } from "../data/site";
import { SeasonToggle, useSeason } from "../components/SeasonToggle";
import { PackageCard } from "../components/PackageCard";
import { WinterPackageNotes } from "../components/WinterPackageNotes";

export function KashmirPackagesPage() {
  const { season } = useSeason();
  const isWinter = season === "winter";
  const [filters, setFilters] = useState({
    duration: { '1-3': false, '4-6': false, '7+': false } as Record<string, boolean>,
    type: { 'Family': false, 'Honeymoon': false, 'Adventure': false, 'Luxury': false, 'Holiday': false, 'Group': false, 'Pilgrimage': false } as Record<string, boolean>,
    dest: { 'Srinagar': false, 'Gulmarg': false, 'Pahalgam': false, 'Sonamarg': false, 'Leh': false } as Record<string, boolean>
  });
  
  const [sortBy, setSortBy] = useState('Recommended');
  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterChange = (category: keyof typeof filters, key: string) => {
    setVisibleCount(6);
    setFilters(prev => ({
      ...prev,
      [category]: { ...prev[category], [key]: !prev[category][key] }
    }));
  };

  const handleReset = () => {
    setFilters({
      duration: { '1-3': false, '4-6': false, '7+': false },
      type: { 'Family': false, 'Honeymoon': false, 'Adventure': false, 'Luxury': false, 'Holiday': false, 'Group': false, 'Pilgrimage': false },
      dest: { 'Srinagar': false, 'Gulmarg': false, 'Pahalgam': false, 'Sonamarg': false, 'Leh': false }
    });
    setSortBy('Recommended');
    setVisibleCount(6);
  };

  useEffect(() => { handleReset(); }, [season]);

  const processedPackages = useMemo(() => {
    let result = getSeasonPackages(season).filter(pkg => {
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

    if (sortBy.startsWith('Price:')) {
      const price = (value: string) => Number(value.replace(/[^0-9]/g, ''));
      result.sort((a, b) => {
        const first = price(a.price);
        const second = price(b.price);
        if (!first) return 1;
        if (!second) return -1;
        return sortBy === 'Price: Low to High' ? first - second : second - first;
      });
    }

    return result;
  }, [filters, sortBy, season]);

  return (
    <main className="bg-slate-50 text-slate-800 transition-colors duration-300">
      <section className="relative flex min-h-[360px] items-center overflow-hidden py-16 sm:min-h-[400px]">
        <img alt={isWinter ? "Gulmarg mountains in winter" : "Kashmir landscape in summer"} className="absolute inset-0 w-full h-full object-cover" src={isWinter ? "/images/hero-winter.webp" : "/images/dal_lake_destination.jpg"}/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="relative mx-auto w-full px-4 text-white lg:px-8 xl:px-12">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm opacity-90">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/kashmir-packages" className="hover:underline">Packages</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold">Kashmir</span>
          </nav>
          <h1 className="mb-4 font-varien text-[clamp(2.35rem,8vw,4.5rem)] font-extrabold leading-[1.15] tracking-wide">Kashmir in <span className="text-secondary">{season}</span></h1>
          <p className="max-w-2xl text-base leading-relaxed opacity-90 md:text-xl">{isWinter ? "Six winter holidays for families, couples and friends. Find your snow escape and explore the day-by-day plan." : "Discover Kashmir's green valleys, lakes and mountain trails with our summer tours."}</p>
        </div>
      </section>

      <div className="season-switch-dock"><SeasonToggle /></div>

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
                  {[...new Set(getSeasonPackages(season).map((pkg) => pkg.type))].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary">
                      <input checked={!!filters.type[type]} onChange={() => handleFilterChange('type', type)} className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /> {type}
                    </label>
                  ))}
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
                  <label className="flex items-center gap-2 text-sm">
                    <input checked={filters.dest['Leh']} onChange={() => handleFilterChange('dest', 'Leh')} className="rounded border-slate-300 text-primary" type="checkbox"/> Leh
                  </label>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
              <ShieldCheck className="w-10 h-10 mb-4 opacity-50" />
              <h4 className="text-xl font-bold mb-2">Book with Confidence</h4>
              <p className="text-xs opacity-90 leading-relaxed mb-4">Confirm your hotels, inclusions and cancellation conditions with our local team before booking.</p>
              <a href={whatsappLink(formatEnquiryMessage({ enquiryType: "Kashmir package enquiry", request: "I would like to learn more about the Kashmir package booking process." }))} target="_blank" rel="noreferrer" className="block text-center w-full py-2 bg-white text-primary font-bold rounded-lg text-sm hover:bg-slate-50 transition-colors">Learn More</a>
            </div>
          </aside>
          
          <div className="flex-1">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-bold">{processedPackages.length} {isWinter ? "Winter" : "Summer"} Packages Found</h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium opacity-60">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border-none bg-transparent font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {processedPackages.slice(0, visibleCount).map(pkg => <PackageCard key={pkg.slug} pkg={pkg} />)}
              </div>
            )}
            {isWinter && <WinterPackageNotes />}

            {processedPackages.length > visibleCount && (
              <div className="mt-12 text-center">
                <button onClick={() => setVisibleCount(v => v + 6)} className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">Load More Packages</button>
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
