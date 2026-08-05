import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "../data/site";
import { whatsappLink } from "../lib/whatsapp";

type Package = (typeof packages)[number];

export function PackageCard({ pkg, compact = false }: { pkg: Package; compact?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-travel transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img className={`${compact ? "h-40" : "h-52"} w-full object-cover transition-transform duration-500 group-hover:scale-105`} src={pkg.image} alt={pkg.name} loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-kashmir-bright">{pkg.badge}</span>
        <span className="absolute bottom-3 left-3 rounded-full bg-kashmir-blue px-3 py-1 font-numbers text-sm font-black text-white">From {pkg.price}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-kashmir-blue">{pkg.name}</h3>
            <p className="mt-1 text-xs font-bold text-kashmir-slate">{pkg.duration} | {pkg.destinations}</p>
          </div>
          <del className="font-numbers text-xs font-bold text-kashmir-slate">{pkg.originalPrice}</del>
        </div>
        {!compact ? (
          <ul className="mt-4 grid gap-2 text-xs font-bold text-slate-600">
            {pkg.inclusions.slice(0, 3).map((item) => (
              <li className="rounded-lg bg-kashmir-cream px-3 py-2" key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="focus-ring inline-flex items-center gap-2 rounded-[10px] bg-kashmir-bright px-4 py-2 text-sm font-black text-white" to={`/kashmir-packages/${pkg.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-[10px] bg-kashmir-green px-4 py-2 text-sm font-black text-white"
            href={whatsappLink(`I am interested in ${pkg.name} ${pkg.duration}.`)}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
