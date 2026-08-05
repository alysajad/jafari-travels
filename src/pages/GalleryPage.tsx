import { PageHero } from "../components/PageHero";
import { galleryItems } from "../data/site";

export function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Photo and video gallery"
        image="/images/gallery-hero.jpg"
        text="A visual record of Kashmir tours, pilgrimage support, group journeys and happy travelers."
        title="Travel Gallery"
      />
      <section className="section-wrap">
        <div className="mb-7 flex flex-wrap gap-3">
          {["All", "Kashmir", "Hajj & Umrah", "Ziyarat", "Group Tours", "Happy Travelers"].map((filter) => (
            <button className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-black text-kashmir-blue shadow-sm first:bg-kashmir-blue first:text-white" key={filter} type="button">
              {filter}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <article className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-travel" key={item.title}>
              <img className={`w-full object-cover ${index % 2 ? "h-72" : "h-96"}`} src={item.image} alt={item.title} loading="lazy" />
              <div className="p-5">
                <span className="text-xs font-black uppercase tracking-wide text-kashmir-gold">{item.category}</span>
                <h2 className="mt-2 font-black text-kashmir-blue">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
