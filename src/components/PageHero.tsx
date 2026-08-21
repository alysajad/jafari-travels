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
    <section className="relative flex min-h-[340px] items-center overflow-hidden bg-black py-16 sm:min-h-[400px]">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" src={image} alt="" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-white">
        <div className="max-w-full">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f59e0b] sm:tracking-[0.18em]">{eyebrow}</p>
          <h1 className="max-w-3xl font-varien text-[clamp(2.4rem,13vw,6rem)] font-extrabold leading-[1.05] tracking-wide">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-90 md:text-xl">{text}</p>
          {cta ? (
            <Link className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-slate-100 sm:w-auto sm:px-6" to={cta.href}>
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
