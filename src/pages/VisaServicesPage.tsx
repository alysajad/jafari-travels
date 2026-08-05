import { PageHero } from "../components/PageHero";
import { whatsappLink } from "../lib/whatsapp";

const visaTypes = ["Tourist visa", "Saudi Umrah / Hajj visa", "Business visa", "Student visa", "Work visa", "Transit visa"];
const process = ["Submit documents", "We verify and lodge the application", "Track status with regular updates", "Receive visa or passport"];

export function VisaServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tourism, business, pilgrimage and work"
        image="/images/visa-page.jpg"
        text="End-to-end visa assistance for UAE, Saudi Arabia, UK, Schengen, USA, Canada, Australia and more."
        title="Visa Made Simple"
      />
      <section className="section-wrap grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-5xl leading-none text-kashmir-blue">Visa types offered</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {visaTypes.map((type) => (
              <div className="rounded-2xl bg-white p-5 font-black text-kashmir-blue shadow-lg shadow-kashmir-blue/10" key={type}>{type}</div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-5xl leading-none text-kashmir-blue">Our process</h2>
          <ol className="mt-6 grid gap-3">
            {process.map((step, index) => (
              <li className="rounded-2xl bg-white p-5 font-bold text-slate-700 shadow-lg shadow-kashmir-blue/10" key={step}>
                <span className="mr-3 font-numbers text-kashmir-gold">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-wrap pt-0">
        <form className="grid gap-4 rounded-2xl bg-white p-7 shadow-travel lg:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <h2 className="font-serif text-4xl text-kashmir-blue lg:col-span-2">Visa enquiry</h2>
          {["Country", "Visa Type", "Travel Date", "Passport Holder Name", "Contact Number"].map((field) => (
            <input className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none focus:border-kashmir-gold" key={field} placeholder={field} type={field.includes("Date") ? "date" : "text"} min={field.includes("Date") ? new Date().toISOString().split('T')[0] : undefined} />
          ))}
          <a className="focus-ring rounded-[10px] bg-kashmir-green px-5 py-3 text-center font-black text-white" href={whatsappLink("I need visa assistance.")} rel="noreferrer" target="_blank">
            Enquire on WhatsApp
          </a>
        </form>
      </section>
    </main>
  );
}
