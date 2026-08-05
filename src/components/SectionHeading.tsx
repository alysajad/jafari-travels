import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({ eyebrow, title, href, linkLabel }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-kashmir-teal">{eyebrow}</p>
        <h2 className="font-serif text-4xl leading-none text-[#071739] md:text-5xl">{title}</h2>
      </div>
      {href && linkLabel ? (
        <Link className="focus-ring inline-flex items-center gap-2 text-sm font-black text-kashmir-bright" to={href}>
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
