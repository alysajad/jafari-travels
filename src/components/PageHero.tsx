import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PageHeroProps = {
  title: string;
  eyebrow: string;
  text: string;
  image: string;
  cta?: { label: string; href: string };
};

export function PageHero({ title, eyebrow, text, image, cta }: PageHeroProps) {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden bg-black">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" src={image} alt="" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 w-full text-white flex items-center justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f59e0b]">{eyebrow}</p>
          <h1 className="max-w-3xl font-varien text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-4 tracking-wide">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed">{text}</p>
          {cta ? (
            <Link className="mt-8 inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-black text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors" to={cta.href}>
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
        {title.toUpperCase() === "ABOUT US" && (
          <div className="hidden md:block relative w-64 h-64 opacity-80 mix-blend-screen mix-blend-lighten">
            <img src="/images/about-avatar.png" alt="Thinking Avatar" className="w-full h-full object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
