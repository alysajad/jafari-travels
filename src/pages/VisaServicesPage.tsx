import { whatsappLink } from "../lib/whatsapp";

const visaTypes = [
  { name: "Tourist visa", icon: "travel_explore", desc: "For leisure travel and family visits" },
  { name: "Saudi Umrah / Hajj visa", icon: "mosque", desc: "Specialized religious pilgrimage visas" },
  { name: "Business visa", icon: "work", desc: "For meetings, conferences and trade" },
  { name: "Student visa", icon: "school", desc: "For higher education and studies abroad" },
  { name: "Work visa", icon: "assignment_ind", desc: "Employment and skilled worker visas" },
  { name: "Transit visa", icon: "flight", desc: "For short layovers during travel" }
];
const process = [
  { title: "Submit documents", icon: "folder_shared", desc: "Share your passport and basic details with us securely." },
  { title: "We verify and lodge", icon: "verified_user", desc: "Our experts review and submit the application." },
  { title: "Track status", icon: "update", desc: "Get regular updates on your application's progress." },
  { title: "Receive visa", icon: "task_alt", desc: "Get your approved visa delivered to your email." }
];

export function VisaServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[380px] items-center pb-16 pt-16 lg:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img alt="Visa Services" className="w-full h-full object-cover object-center" src="/images/visa-page.jpg"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 text-sm font-bold uppercase tracking-[0.12em] text-white sm:tracking-widest">
              Tourism, Business, Pilgrimage and Work
            </div>
            <h1 className="mb-6 font-varien text-[clamp(2.5rem,13vw,6rem)] font-extrabold leading-[1.05] tracking-wide text-white">
              Visa Made <span className="text-secondary italic font-sans font-extrabold">Simple</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 opacity-90 max-w-xl">
              End-to-end visa assistance for UAE, Saudi Arabia, UK, Schengen, USA, Canada, Australia and more.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Visa Types Offered</h2>
            <p className="text-slate-500 font-medium">We specialize in a wide range of visa categories for top destinations globally, ensuring a smooth and hassle-free experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((type) => (
              <div className="group flex items-start gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-8" key={type.name}>
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons-outlined text-2xl">{type.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-1">{type.name}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">Our Hassle-Free Process</h2>
              <p className="text-slate-600 text-lg">Getting your visa shouldn't be stressful. We've streamlined our application process to ensure maximum success rates with minimal effort from you.</p>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div className="flex gap-4 items-start" key={step.title}>
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 text-xl shadow-lg shadow-secondary/30">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-xl text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-500 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary rounded-[3rem] transform rotate-3 scale-105 opacity-10 hidden md:block"></div>
              <img src="/images/visa-page.jpg" className="relative z-10 h-[320px] w-full rounded-[2rem] object-cover shadow-2xl sm:rounded-[3rem] md:h-auto" alt="Visa application process" />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-5 sm:rounded-[3rem] sm:p-8 md:p-16">
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Start Your Application</h2>
            <p className="text-blue-100 opacity-90 text-lg">Leave your details and our visa experts will get in touch with you immediately to discuss your requirements.</p>
          </div>
          
          <form 
            className="relative z-10 mx-auto grid max-w-4xl grid-cols-1 gap-5 rounded-[1.5rem] bg-white p-5 shadow-2xl sm:gap-6 sm:rounded-[2rem] sm:p-8 md:grid-cols-2 md:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              const details = Array.from(new FormData(event.currentTarget)).map(([k, v]) => `${k}: ${v}`).join(", ");
              window.open(whatsappLink(`I need visa assistance.\n\nDetails:\n${details}`), "_blank", "noopener,noreferrer");
            }}
          >
            {["Country", "Visa Type", "Travel Date", "Passport Holder Name", "Contact Number"].map((field) => (
              <div className={field === "Contact Number" ? "md:col-span-2" : ""} key={field}>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">{field}</label>
                <input 
                  name={field}
                  className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-800 font-bold focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none w-full transition-all" 
                  placeholder={field} 
                  type={field.includes("Date") ? "date" : "text"} 
                  min={field.includes("Date") ? new Date().toISOString().split('T')[0] : undefined} 
                />
              </div>
            ))}
            <button type="submit" className="md:col-span-2 bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 mt-4 shadow-xl shadow-secondary/30">
              Enquire on WhatsApp <span className="material-icons-outlined">arrow_forward</span>
            </button>
          </form>
          
          <div className="absolute -left-20 -bottom-20 opacity-10">
            <span className="material-icons-outlined text-[300px] text-white">flight_takeoff</span>
          </div>
        </div>
      </section>
    </main>
  );
}
