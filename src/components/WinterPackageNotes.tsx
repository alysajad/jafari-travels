import { BedDouble, Utensils, CarFront, PlaneLanding, MapPinned, Headphones } from "lucide-react";
import { honeymoonPriceNote, winterInclusions, winterPricingNote } from "../data/winter";

const icons = [BedDouble, Utensils, CarFront, PlaneLanding, MapPinned, Headphones];

export function WinterPackageNotes() {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-kashmir-blue">Included in your winter holiday</h3>
        <p className="mt-2 text-sm text-slate-500">Your final quotation confirms the hotel category, vehicle and sightseeing arrangements.</p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {winterInclusions.map((item, i) => {
            const Icon = icons[i];
            return <li className="flex items-center gap-3 text-sm font-semibold text-slate-700" key={item}><Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />{item}</li>;
          })}
        </ul>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 p-6 sm:px-8">
        <h3 className="font-bold text-kashmir-blue">Prices starting from</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{winterPricingNote}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">{honeymoonPriceNote}</p>
      </div>
    </div>
  );
}
