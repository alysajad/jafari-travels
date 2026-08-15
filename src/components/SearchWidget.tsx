import { ArrowRight, CalendarDays, FileText, Landmark, MapPin, Mountain, Plane, UsersRound, Ticket, Car } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { whatsappLink } from "../lib/whatsapp";

const tabs = {
  kashmir: ["Select Package", ["Choose a package..", "Budget Explorer (5D/4N)", "Classic Delight (10D/9N)", "Royal Summer Paradise (12D/11N)", "Adventure Seekers (8D/7N)", "Custom Package Needed"], "Check-in", "2026-09-20", "Check-out", "2026-09-26", "Travelers", "2 Adults, 1 Child", "Enquire Now"],
  cars: ["Pickup Location", ["Srinagar Airport", "Srinagar City", "Gulmarg", "Pahalgam"], "Pickup Date", "2026-09-20", "Drop Date", "2026-09-26", "Car Type", ["Sedan", "MUV", "SUV", "Tempo Traveller", "Bus", "Force Urbania"], "Search Cars"],
  umrah: ["Package Type", ["Premium Umrah", "Economy Umrah", "VIP Umrah", "Ramadan Umrah"], "Duration", ["15 Days", "21 Days", "28 Days", "Custom"], "Travel Month", ["Ramadan 2027", "Shawwal 2027", "Rajab 2027", "Any Month"], "Travelers", "Family of 4", "View Packages"],
  tickets: ["From", ["Srinagar (SXR)", "Delhi (DEL)", "Mumbai (BOM)", "Dubai (DXB)", "Jeddah (JED)"], "To", ["Delhi (DEL)", "Srinagar (SXR)", "Dubai (DXB)", "Jeddah (JED)", "Mumbai (BOM)"], "Travel Date", "2026-09-20", "Travelers", "2 Adults", "Search Flights"],
  visa: ["Country", ["Saudi Arabia", "UAE", "Oman", "Qatar", "Kuwait", "Malaysia", "Thailand"], "Nationality", ["Indian", "Foreign National"], "Travel Date", "2026-09-20", "Visa Type", ["Umrah Visa", "Tourist Visa", "Business Visa", "Transit Visa"], "Enquire Now"],
  gondola: ["Phase", ["Phase 1 (Gulmarg - Kongdoori)", "Phase 2 (Kongdoori - Apharwat)", "Phase 1 & 2"], "Date", "2026-09-20", "Time Slot", ["09:00 AM - 11:00 AM", "11:00 AM - 01:00 PM", "01:00 PM - 03:00 PM", "Any Time"], "Travelers", "2 Adults", "Book Gondola"],
} as const;

type TabKey = keyof typeof tabs;

export function SearchWidget() {
  const [active, setActive] = useState<TabKey>("kashmir");
  const fields = useMemo(() => tabs[active], [active]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = Array.from(new FormData(event.currentTarget)).map(([k, v]) => `${k}: ${v}`).join(", ");
    window.open(whatsappLink(`I want to enquire about ${active} services with Jaffari Sky Travels.\n\nDetails: ${details}`), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative z-20 mx-auto -mt-20 w-[min(1400px,calc(100%_-_32px))] md:w-[min(1400px,calc(100%_-_44px))] rounded-xl md:rounded-[22px] border border-kashmir-blue/10 bg-white p-4 md:p-8 lg:p-10 shadow-travel">
      <div className="flex gap-5 md:gap-7 border-b border-slate-200 px-1 pb-4 overflow-x-auto scrollbar-hide -mx-1 md:mx-0">
        {Object.keys(tabs).map((key) => (
          <button
            className={`focus-ring relative py-2 flex items-center gap-2 text-xs md:text-sm font-bold whitespace-nowrap after:absolute after:inset-x-0 after:-bottom-4 after:h-1 after:rounded-full after:bg-kashmir-bright transition-colors ${
              active === key ? "text-kashmir-bright after:scale-x-100" : "text-kashmir-charcoal hover:text-kashmir-bright/70 after:scale-x-0"
            }`}
            key={key}
            onClick={() => setActive(key as TabKey)}
            type="button"
          >
            {key === "kashmir" && <Mountain className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "cars" && <Car className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "umrah" && <Landmark className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "tickets" && <Plane className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "visa" && <FileText className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "gondola" && <Ticket className="w-4 h-4 md:w-5 md:h-5" />}
            {key === "umrah" ? "Hajj & Umrah" : key === "tickets" ? "Air Tickets" : key === "kashmir" ? "Kashmir Tours" : key === "gondola" ? "Gondola Tickets" : key === "cars" ? "Car Rentals" : "Visas"}
          </button>
        ))}
      </div>

      <form className="grid gap-3 pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_180px]" onSubmit={submit}>
        <SearchField key={`f1-${active}`} icon={<MapPin />} label={fields[0] as string} value={fields[1]} />
        <SearchField key={`f2-${active}`} icon={<CalendarDays />} label={fields[2] as string} value={fields[3]} />
        <SearchField key={`f3-${active}`} icon={<CalendarDays />} label={fields[4] as string} value={fields[5]} />
        {fields[6] === "Travelers" ? (
          <TravelerField key={`f4-${active}`} icon={<UsersRound />} label={fields[6] as string} />
        ) : (
          <SearchField key={`f4-${active}`} icon={<UsersRound />} label={fields[6] as string} value={fields[7]} />
        )}
        <button className="focus-ring inline-flex min-h-[56px] md:min-h-[64px] items-center justify-center gap-2 rounded-2xl bg-kashmir-bright px-6 text-sm font-bold text-white shadow-travel md:col-span-2 lg:col-span-1" type="submit">
          {fields[8] as string}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}

function SearchField({ icon, label, value }: { icon: ReactNode; label: string; value: string | readonly string[] }) {
  const isDate = typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
  const isArray = Array.isArray(value);
  
  const minDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];

  return (
    <label className="flex min-w-0 items-center gap-3 rounded-[10px] border border-slate-200 bg-slate-50 px-5 py-5">
      <span className="text-kashmir-bright [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <span className="min-w-0 flex-1 flex flex-col justify-center">
        <span className="block text-[11px] font-bold text-kashmir-slate mb-1">{label}</span>
        {isArray ? (
          <select name={label} className="w-full bg-transparent text-sm font-semibold outline-none cursor-pointer">
            {(value as readonly string[]).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input name={label} className="w-full bg-transparent text-sm font-semibold outline-none" defaultValue={value as string} type={isDate ? "date" : "text"} min={isDate ? minDate : undefined} />
        )}
      </span>
    </label>
  );
}

function TravelerField({ icon, label }: { icon: ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const total = adults + children + infants;
  const value = `${total} Traveler${total > 1 ? 's' : ''}`;

  return (
    <div className="relative">
      <button 
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full min-w-0 items-center gap-3 rounded-[10px] border border-slate-200 bg-slate-50 px-5 py-5 text-left"
      >
        <span className="text-kashmir-bright [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold text-kashmir-slate">{label}</span>
          <span className="block text-sm font-semibold text-black">{value}</span>
        </span>
      </button>
      <input type="hidden" name={label} value={`${adults} Adults, ${children} Children, ${infants} Infants`} />
      
      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-72 rounded-[10px] border border-slate-200 bg-white p-4 shadow-travel">
           <Counter label="Adults" sub="(12+ Years)" value={adults} onChange={setAdults} min={1} />
           <Counter label="Children" sub="(2-12 Years)" value={children} onChange={setChildren} min={0} />
           <Counter label="Infant" sub="(0-2 Years)" value={infants} onChange={setInfants} min={0} />
        </div>
      )}
    </div>
  );
}

function Counter({ label, sub, value, onChange, min }: any) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
      <div>
        <div className="text-sm font-bold text-black">{label}</div>
        <div className="text-[11px] text-slate-500">{sub}</div>
      </div>
      <div className="flex items-center rounded-md border border-slate-200">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="flex h-8 w-8 items-center justify-center text-slate-500 hover:bg-slate-100">-</button>
        <div className="flex h-8 w-8 items-center justify-center text-sm font-bold text-black">{value}</div>
        <button type="button" onClick={() => onChange(value + 1)} className="flex h-8 w-8 items-center justify-center text-slate-500 hover:bg-slate-100">+</button>
      </div>
    </div>
  );
}
