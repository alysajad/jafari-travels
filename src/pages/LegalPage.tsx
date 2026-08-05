import { PageHero } from "../components/PageHero";

export function LegalPage({ title }: { title: string }) {
  return (
    <main>
      <PageHero
        eyebrow="Policy information"
        image="/images/legal-page.jpg"
        text="Basic policy page placeholder for launch. Final business terms can be added when confirmed."
        title={title}
      />
      <section className="section-wrap">
        <article className="rounded-2xl bg-white p-7 shadow-travel">
          <h2 className="font-serif text-4xl text-kashmir-blue">{title}</h2>
          <p className="mt-4 font-semibold leading-8 text-kashmir-slate">
            This page is prepared as a placeholder for Jaffari Sky Travels. Add final legal copy for cancellations, refunds, data handling, payment terms and customer responsibilities before production launch.
          </p>
        </article>
      </section>
    </main>
  );
}
