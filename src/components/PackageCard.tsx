import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../data/site";
import { openBookingEnquiry } from "../lib/booking";

type Package = (typeof packages)[number];

export function PackageCard({ pkg, compact = false }: { pkg: Package; compact?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-travel transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img className={`${compact ? "h-40" : "h-52"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} src={pkg.image} alt={pkg.name} loading="lazy" />
        <span className="absolute bottom-3 left-3 rounded-full bg-kashmir-blue px-3 py-1 font-numbers text-sm font-black text-white">From {pkg.price}</span>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-black text-kashmir-blue">{pkg.name}</h3>
            <p className="mt-1 text-xs font-bold text-kashmir-slate">{pkg.duration} | {pkg.destinations}</p>
          </div>
          <del className="font-numbers text-xs font-bold text-kashmir-slate sm:shrink-0">{pkg.originalPrice}</del>
        </div>
        {!compact ? (
          <ul className="mt-4 grid gap-2 text-xs font-bold text-slate-600">
            {pkg.inclusions.slice(0, 3).map((item) => (
              <li className="rounded-lg bg-kashmir-cream px-3 py-2" key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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
