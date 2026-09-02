import { ArrowRight, CalendarDays, FileText, Landmark, MapPin, Mountain, Plane, UsersRound, Ticket, Car } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { formDetails, sendEnquiryThenOpenWhatsApp } from "../lib/whatsapp";

const tabs = {
  kashmir: ["Select Package", ["Choose a package..", "Budget Explorer (5D/4N)", "Classic Delight (10D/9N)", "Royal Summer Paradise (12D/11N)", "Adventure Seekers (8D/7N)", "Custom Package Needed"], "Check-in", "2026-09-20", "Check-out", "2026-09-26", "Travelers", "2 Adults, 1 Child", "Enquire Now"],
  cars: ["Pickup Location", ["Srinagar Airport", "Srinagar City", "Gulmarg", "Pahalgam"], "Pickup Date", "2026-09-20", "Drop Date", "2026-09-26", "Car Type", ["Sedan", "MUV", "SUV", "Tempo Traveller", "Bus", "Force Urbania"], "Search Cars"],
  umrah: ["Package Type", ["Premium Umrah", "Economy Umrah", "VIP Umrah", "Ramadan Umrah"], "Duration", ["15 Days", "21 Days", "28 Days", "Custom"], "Travel Month", ["Ramadan 2027", "Shawwal 2027", "Rajab 2027", "Any Month"], "Travelers", "Family of 4", "View Packages"],
  tickets: ["From", ["Srinagar (SXR)", "Delhi (DEL)", "Mumbai (BOM)", "Dubai (DXB)", "Jeddah (JED)"], "To", ["Delhi (DEL)", "Srinagar (SXR)", "Dubai (DXB)", "Jeddah (JED)", "Mumbai (BOM)"], "Travel Date", "2026-09-20", "Travelers", "2 Adults", "Search Flights"],
  visa: ["Country", ["Saudi Arabia", "UAE", "Oman", "Qatar", "Kuwait", "Malaysia", "Thailand"], "Nationality", ["Indian", "Foreign National"], "Travel Date", "2026-09-20", "Visa Type", ["Umrah Visa", "Tourist Visa", "Business Visa", "Transit Visa"], "Enquire Now"],
  gondola: ["Phase", ["Phase 1 (Gulmarg - Kongdoori)", "Phase 2 (Kongdoori - Apharwat)", "Phase 1 & 2"], "Date", "2026-09-20", "Time Slot", ["09:00 AM - 11:00 AM", "11:00 AM - 01:00 PM", "01:00 PM - 03:00 PM", "Any Time"], "Travelers", "2 Adults", "Book Gondola"],
} as const;

type TabKey = keyof typeof tabs;

const popularItems: Record<TabKey, readonly string[]> = {
  kashmir: ["Dal Lake", "Mughal Gardens", "Pahalgam", "Sonamarg", "Gulmarg", "Doodhpathri"],
  cars: ["Srinagar Airport", "Srinagar City", "Pahalgam Pickup", "Gulmarg Pickup", "Tempo Traveller", "Innova Crysta"],
  umrah: ["Economy Umrah", "Premium Umrah", "Ramadan Umrah", "Makkah Hotels", "Madinah Hotels"],
  tickets: ["Srinagar to Delhi", "Delhi to Srinagar", "Srinagar to Mumbai", "Dubai Flights", "Jeddah Flights"],
  visa: ["Saudi Visa", "UAE Visa", "Oman Visa", "Qatar Visa", "Malaysia Visa", "Thailand Visa"],
  gondola: ["Phase 1", "Phase 2", "Phase 1 & 2", "Morning Slot", "Afternoon Slot"],
};

export function SearchWidget() {
  const [active, setActive] = useState<TabKey>("kashmir");
  const fields = useMemo(() => tabs[active], [active]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = formDetails(event.currentTarget);
    void sendEnquiryThenOpenWhatsApp({
      source: `Hero ${active} enquiry`,
      enquiryType: `${active === "kashmir" ? "Kashmir package" : active === "cars" ? "Car rental" : active === "umrah" ? "Hajj and Umrah" : active === "tickets" ? "Flight booking" : active === "visa" ? "Visa" : "Gondola booking"} enquiry`,
      request: `I would like help with the selected ${active === "kashmir" ? "Kashmir package" : active === "cars" ? "car rental" : active === "umrah" ? "Hajj or Umrah package" : active === "tickets" ? "flight" : active === "visa" ? "visa service" : "Gondola tickets"}.`,
      details,
    });
  }

  return (
    <section className="relative z-20 mx-auto -mt-14 w-[min(1400px,calc(100%_-_20px))] max-w-[calc(100vw_-_20px)] rounded-xl border border-kashmir-blue/10 bg-white p-3 shadow-travel sm:w-[min(1400px,calc(100%_-_32px))] sm:max-w-none sm:p-4 md:-mt-20 md:w-[min(1400px,calc(100%_-_44px))] md:rounded-[22px] md:p-8 lg:p-10">
      <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-4 sm:grid-cols-3 lg:flex lg:gap-7 lg:overflow-x-auto">
        {Object.keys(tabs).map((key) => (
          <button
            className={`focus-ring relative flex min-h-11 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-center text-[11px] font-bold leading-tight transition-colors after:absolute after:inset-x-0 after:-bottom-4 after:hidden after:h-1 after:rounded-full after:bg-kashmir-bright sm:text-xs lg:shrink-0 lg:justify-start lg:border-0 lg:bg-transparent lg:px-0 lg:text-sm lg:whitespace-nowrap lg:after:block ${
              active === key ? "border-kashmir-bright/20 bg-kashmir-bright/10 text-kashmir-bright after:scale-x-100" : "border-slate-200 text-kashmir-charcoal hover:text-kashmir-bright/70 after:scale-x-0"
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

      <form className="grid grid-cols-1 gap-3 pt-5 min-[420px]:grid-cols-2 md:pt-6 lg:grid-cols-[repeat(4,minmax(0,1fr))_180px]" onSubmit={submit}>
        <SearchField key={`f1-${active}`} icon={<MapPin />} label={fields[0] as string} value={fields[1]} />
        <SearchField key={`f2-${active}`} icon={<CalendarDays />} label={fields[2] as string} value={fields[3]} />
        <SearchField key={`f3-${active}`} icon={<CalendarDays />} label={fields[4] as string} value={fields[5]} />
        {fields[6] === "Travelers" ? (
          <TravelerField key={`f4-${active}`} icon={<UsersRound />} label={fields[6] as string} />
        ) : (
          <SearchField key={`f4-${active}`} icon={<UsersRound />} label={fields[6] as string} value={fields[7]} />
        )}
        <button className="focus-ring inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-kashmir-bright px-5 text-sm font-bold text-white shadow-travel min-[420px]:col-span-2 md:min-h-[64px] md:rounded-2xl lg:col-span-1" type="submit">
          {fields[8] as string}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
        <span className="mr-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-kashmir-slate">Popular:</span>
        {popularItems[active].map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-kashmir-slate shadow-sm sm:text-[13px]">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function SearchField({ icon, label, value }: { icon: ReactNode; label: string; value: string | readonly string[] }) {
  const isDate = typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
  const isArray = Array.isArray(value);
  
  const minDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];

  return (
    <label className="flex min-w-0 items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-5">
      <span className="shrink-0 text-kashmir-bright [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <span className="min-w-0 flex-1 flex flex-col justify-center">
        <span className="mb-1 block text-[10px] font-bold text-kashmir-slate sm:text-[11px]">{label}</span>
        {isArray ? (
          <select name={label} className="w-full bg-transparent text-sm font-semibold outline-none cursor-pointer">
            {(value as readonly string[]).map((opt) => (
              <option disabled={opt.startsWith("Choose ")} key={opt} value={opt.startsWith("Choose ") ? "" : opt}>{opt}</option>
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
        className="flex w-full min-w-0 items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 px-3 py-3.5 text-left sm:gap-3 sm:px-5 sm:py-5"
      >
        <span className="shrink-0 text-kashmir-bright [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-bold text-kashmir-slate sm:text-[11px]">{label}</span>
          <span className="block text-sm font-semibold text-black">{value}</span>
        </span>
      </button>
      <input type="hidden" name={label} value={`${adults} Adults, ${children} Children, ${infants} Infants`} />
      
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-[10px] border border-slate-200 bg-white p-4 shadow-travel sm:w-72">
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
