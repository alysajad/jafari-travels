import { formDetails, sendEnquiryThenOpenWhatsApp } from "../lib/whatsapp";

export function HajjRegistrationPage() {
  return (
    <main className="w-full bg-background text-on-background font-sans antialiased overflow-x-hidden">
      <section className="relative flex min-h-[720px] items-center justify-center p-4 sm:p-6 lg:min-h-[819px]">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hajj-registration.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#002451]/40 to-[#002451]/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-12">
          <div className="flex-1 text-center lg:text-left flex flex-col gap-6">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[12px] uppercase tracking-[0.1em] font-bold w-fit mx-auto lg:mx-0 shadow-sm">Early Access</span>
            
            <h1 className="font-display text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-[1.12] text-on-primary">
              Hajj 2027 Packages - <br/>Pre-Registration Open
            </h1>
            
            <p className="mx-auto max-w-2xl text-base leading-[1.6] text-surface-container-low sm:text-[18px] lg:mx-0">
              Secure your spot for the sacred journey with Jaffari Sky Travels. Priority allocation is now open for our carefully curated, spiritually guided shifting packages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <a href="#register" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-secondary text-on-secondary font-bold hover:bg-secondary-fixed-variant transition-colors">
                Pre-Register Now
              </a>
              <a href="#details" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-surface/20 text-on-primary font-bold hover:bg-surface/30 backdrop-blur-sm transition-colors border border-surface/30">
                View Package Details
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-md rounded-xl border border-outline-variant/30 bg-surface/95 p-5 shadow-xl backdrop-blur-md sm:p-8">
            <h3 className="mb-6 text-center font-serif text-[22px] text-primary sm:text-[24px]">Time Until Expected Hajj Season</h3>
            <div className="flex justify-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-surface-container-highest shadow-inner sm:h-20 sm:w-20">
                  <span className="font-numbers font-medium text-3xl sm:text-4xl text-primary">325</span>
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">Days</span>
              </div>
              <div className="text-2xl text-outline-variant pt-4 sm:pt-6">:</div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-surface-container-highest shadow-inner sm:h-20 sm:w-20">
                  <span className="font-numbers font-medium text-3xl sm:text-4xl text-primary">14</span>
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">Hours</span>
              </div>
            </div>
            <p className="text-center text-sm text-on-surface-variant mt-6 italic">*Dates are approximate and subject to official announcements.</p>
          </div>
        </div>
      </section>

      <section id="details" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 font-display text-[clamp(1.8rem,8vw,2rem)] font-semibold text-primary">Expected Package Preview</h2>
            <h3 className="font-serif text-[24px] text-on-surface mb-4">30-40 Days Shifting Package</h3>
            <p className="text-[16px] text-on-surface-variant">Experience a well-planned and spiritually uplifting Hajj journey with our comprehensive packages designed for comfort and focus.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-primary text-2xl">flight_takeoff</span>
              </div>
              <h4 className="font-bold text-lg text-on-surface mb-2">Visa & Flights</h4>
              <p className="text-on-surface-variant text-sm">Includes comprehensive Hajj Visa processing and comfortable return flights on premium airlines.</p>
            </div>
            
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-secondary text-2xl">apartment</span>
              </div>
              <h4 className="font-bold text-lg text-on-surface mb-2">Shifting Hotels</h4>
              <p className="text-on-surface-variant text-sm">Carefully selected accommodations transitioning seamlessly between Mecca, Mina, and Arafat based on rituals.</p>
            </div>
            
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-tertiary text-2xl">group</span>
              </div>
              <h4 className="font-bold text-lg text-on-surface mb-2">Kashmiri Qafila Leaders</h4>
              <p className="text-on-surface-variant text-sm">Dedicated spiritual guidance and logistical support by experienced Kashmiri leaders throughout the journey.</p>
            </div>
            
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-colors group">
              <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-primary text-2xl">directions_bus</span>
              </div>
              <h4 className="font-bold text-lg text-on-surface mb-2">Complete Logistics</h4>
              <p className="text-on-surface-variant text-sm">All ground transportation via air-conditioned coaches and comprehensive meal plans included.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="bg-surface-container-low px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 font-display text-[clamp(1.8rem,8vw,2rem)] font-semibold text-primary">Why Pre-Register Early?</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg mt-1">1</div>
                <div>
                  <h4 className="font-bold text-xl text-on-surface mb-2">Priority Slot Allocation</h4>
                  <p className="text-on-surface-variant">Hajj quotas are limited and fill up quickly. Pre-registering ensures you are at the front of the queue when official bookings open, drastically increasing your chances of securing a spot.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg mt-1">2</div>
                <div>
                  <h4 className="font-bold text-xl text-on-surface mb-2">Early Price Lock Protection</h4>
                  <p className="text-on-surface-variant">Protect yourself against potential price increases. Pre-registered pilgrims often receive early-bird pricing guarantees or priority access to the most cost-effective tiers before they sell out.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg mt-1">3</div>
                <div>
                  <h4 className="font-bold text-xl text-on-surface mb-2">Dedicated Preparation Guidance</h4>
                  <p className="text-on-surface-variant">Gain immediate access to our preparatory seminars, spiritual webinars, and step-by-step documentation assistance months ahead of departure.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-secondary-fixed/30 rounded-xl border border-secondary-fixed">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-icons-outlined text-secondary">info</span>
                <h5 className="font-bold text-on-secondary-fixed">No Commitment Required Yet</h5>
              </div>
              <p className="text-sm text-on-surface-variant">Pre-registration is an expression of interest. No payment is required until official quotas are announced and you confirm your package selection.</p>
            </div>
          </div>
          
          <div className="rounded-2xl border border-outline-variant/50 bg-surface p-5 shadow-lg sm:p-8">
            <h3 className="font-serif text-[24px] text-primary mb-6">Pre-Registration Form</h3>
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                const details = formDetails(event.currentTarget);
                void sendEnquiryThenOpenWhatsApp({
                  source: "Hajj pre-registration form",
                  enquiryType: "Hajj pre-registration",
                  request: "I would like to pre-register for Hajj 2027.",
                  details,
                });
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-on-surface mb-1">Full Name *</label>
                  <input type="text" id="fullName" name="Full Name" required className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-on-surface mb-1">Phone / WhatsApp *</label>
                  <input type="tel" id="phone" name="Phone / WhatsApp" required className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-1">Email Address *</label>
                <input type="email" id="email" name="Email Address" required className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tier" className="block text-sm font-medium text-on-surface mb-1">Preferred Package Tier</label>
                  <select id="tier" name="Preferred Package Tier" defaultValue="Standard Shifting" className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow">
                    <option>Economy Shifting</option>
                    <option>Standard Shifting</option>
                    <option>Premium Non-Shifting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-on-surface mb-1">Group Size</label>
                  <input type="number" id="groupSize" name="Group Size" min="1" defaultValue="1" className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
              </div>
              
              <div>
                <span className="block text-sm font-medium text-on-surface mb-2">Previous Hajj Experience?</span>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="Previous Hajj Experience" value="Yes" className="text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-on-surface-variant">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="Previous Hajj Experience" value="No (First Timer)" defaultChecked className="text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-on-surface-variant">No (First Timer)</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-on-surface mb-1">Special Requirements (Medical, Wheelchair, etc.)</label>
                <textarea id="requirements" name="Special Requirements" rows={3} className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full h-12 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-fixed-variant transition-colors flex items-center justify-center gap-2">
                <span>Submit Pre-Registration</span>
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
