import { CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { serviceCards } from "../data/site";

const values = ["Trust", "Transparency", "Personalisation", "24/7 Care", "Community"];

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kashmir's trusted travel partner"
        image="/images/about-page.jpg"
        text="Built for travelers and pilgrims who need honest guidance, clear pricing and local care."
        title="About Jaffari Sky Travels"
      />
      <section className="section-wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-kashmir-teal">Our story</p>
          <h2 className="font-serif text-5xl leading-none text-kashmir-blue">Journeys planned from Kashmir, with care.</h2>
        </div>
        <div className="rounded-2xl bg-white p-7 shadow-travel">
          <p className="font-semibold leading-8 text-kashmir-slate">
            Founded by Adil Hussain Sofi, Jaffari Sky Travels was born from a passion for sharing Kashmir's unmatched beauty with travelers from across India and the world. From our base in Kashmir, we focus on honest pricing, attentive service and deeply personal travel experiences.
          </p>
        </div>
      </section>
      <section className="section-wrap pt-0">
        <h2 className="mb-6 font-serif text-4xl text-kashmir-blue">What we do</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.slice(0, 4).map((service) => (
            <div className="rounded-2xl bg-white p-5 shadow-lg shadow-kashmir-blue/10" key={service.title}>
              <service.icon className="mb-4 h-9 w-9 rounded-xl bg-kashmir-teal p-2 text-white" />
              <h3 className="font-black text-kashmir-blue">{service.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-kashmir-slate">{service.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-wrap pt-0 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-7 shadow-travel">
          <h2 className="font-serif text-4xl text-kashmir-blue">Why choose us</h2>
          {["Local Kashmir expertise", "Transparent pricing", "Kashmiri-speaking group leaders", "24/7 WhatsApp support", "All-inclusive planning"].map((item) => (
            <p className="mt-4 flex items-center gap-3 font-bold text-slate-700" key={item}>
              <CheckCircle2 className="h-5 w-5 text-kashmir-green" />
              {item}
            </p>
          ))}
        </div>
        <div className="rounded-2xl bg-kashmir-blue p-7 text-white shadow-travel">
          <h2 className="font-serif text-4xl">Our values</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {values.map((value) => (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-kashmir-gold" key={value}>{value}</span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["5,000+ Happy Travelers", "8+ Package Styles", "24/7 Support", "One Trusted Team"].map((stat) => (
              <strong className="rounded-2xl bg-white/10 p-4 text-lg" key={stat}>{stat}</strong>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
