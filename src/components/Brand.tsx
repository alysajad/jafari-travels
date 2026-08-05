import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

type BrandProps = {
  inverse?: boolean;
};

export function Brand({ inverse = false }: BrandProps) {
  return (
    <Link className="flex min-w-max items-center gap-3 focus-ring" to="/">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[conic-gradient(from_220deg,#C89B3C,#ff7b22,#0F5FD7,#2A7F7F,#C89B3C)] text-white shadow-lg">
        <Plane className="h-5 w-5" />
      </span>
      <span>
        <strong className={`block text-xl font-black leading-none sm:text-2xl ${inverse ? "text-white" : "text-kashmir-blue"}`}>
          Jaffari Sky Travels
        </strong>
        <small className={`block pt-1 text-[11px] font-extrabold ${inverse ? "text-white/75" : "text-kashmir-slate"}`}>
          Explore. Worship. Fly.
        </small>
      </span>
    </Link>
  );
}
