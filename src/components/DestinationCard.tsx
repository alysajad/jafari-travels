import { Star } from "lucide-react";
import { destinations } from "../data/site";

type Destination = (typeof destinations)[number];

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group relative min-h-[230px] overflow-hidden rounded-2xl bg-kashmir-blue text-white shadow-travel">
      <img className="h-full min-h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-105" src={destination.image} alt={`${destination.name} travel destination`} loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-kashmir-crimson">{destination.discount}</span>
      <div className="absolute inset-x-4 bottom-4">
        <h3 className="text-xl font-black">{destination.name}</h3>
        <p className="mt-1 text-xs font-extrabold">Starting from {destination.price}</p>
        <p className="mt-2 flex items-center gap-1 text-xs font-black text-yellow-300">
          <Star className="h-4 w-4 fill-current" />
          {destination.rating}
        </p>
      </div>
    </article>
  );
}
