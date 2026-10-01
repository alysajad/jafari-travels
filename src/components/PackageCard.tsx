import { ArrowRight, Check, Clock, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../data/site";
import { openBookingEnquiry } from "../lib/booking";

type Package = (typeof packages)[number];

export function PackageCard({ pkg, compact = false }: { pkg: Package; compact?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-travel transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img className={`${compact ? "h-40" : "h-52"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} src={pkg.image} alt={pkg.name} loading="lazy" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-kashmir-blue">{pkg.badge}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-black text-kashmir-blue">{pkg.name}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-kashmir-slate"><Clock size={14} />{pkg.duration.replace("N/", " Nights / ").replace("D", " Days")}</p>
          </div>
          {pkg.originalPrice && <del className="font-numbers text-xs font-bold text-kashmir-slate sm:shrink-0">{pkg.originalPrice}</del>}
        </div>
        {pkg.audience && <p className="mt-3 text-sm font-semibold text-primary">For {pkg.audience}</p>}
        <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-500"><MapPin size={14} className="shrink-0" />{pkg.destinations}</p>
        {!compact ? (
          <ul className="mt-4 grid gap-2 text-xs font-bold text-slate-600">
            {(pkg.highlights || pkg.inclusions.slice(0, 3)).map((item) => (
              <li className="flex items-center gap-2" key={item}><Check className="h-3.5 w-3.5 shrink-0 text-primary" />{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto pt-5">
          <div className="border-t border-slate-100 pt-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Starting from</p>
            <p className="mt-1"><span className="font-numbers text-2xl font-bold text-kashmir-blue">{pkg.price}</span><span className="ml-1 text-xs text-slate-500">/{pkg.priceUnit || "person"}{pkg.priceUnit === "couple" ? "*" : ""}</span></p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-kashmir-bright px-4 py-2 text-sm font-black text-white" to={`/kashmir-packages/${pkg.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-kashmir-green px-4 py-2 text-sm font-black text-white"
            onClick={() => openBookingEnquiry({ kind: "package", source: "Package card", values: { Package: pkg.name } })}
            type="button"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}
