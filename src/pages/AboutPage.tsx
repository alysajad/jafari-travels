import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        text="Crafting Journeys of a Lifetime"
        image="/images/about-page.jpg"
        eyebrow="Jaffari Sky Travels"
      />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">Crafting Journeys <br/>of a Lifetime</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Founded with the mission to bridge the gap between spiritual longing and physical travel, Jaffari Sky Travels provides more than just a booking service - we provide peace of mind.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="material-icons-outlined text-primary text-4xl mb-4">history_edu</span>
                <h4 className="font-bold text-primary mb-2">Est. 2012</h4>
                <p className="text-sm text-slate-500">Years of excellence in hospitality.</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span className="material-icons-outlined text-primary text-4xl mb-4">star</span>
                <h4 className="font-bold text-primary mb-2">4.8★ Rating</h4>
                <p className="text-sm text-slate-500">Trusted by thousands of travelers.</p>
              </div>
            </div>
            
            <div id="contact" className="p-8 bg-white rounded-xl border border-blue-100 shadow-lg mt-8">
              <h3 className="font-serif text-2xl text-primary mb-6 flex items-center gap-2">
                <span className="material-icons-outlined text-secondary">contact_support</span> Contact Us
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-icons-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">Phone</p>
                    <div className="flex flex-col gap-1 text-slate-600 text-sm">
                      <a href="tel:+917051693767" className="hover:text-primary transition-colors">+91 7051693767</a>
                      <a href="tel:+919906123456" className="hover:text-primary transition-colors">+91 9906-123456</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-icons-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-0.5">Email</p>
                    <a href="mailto:info@jaffariskytravels.com" className="text-slate-600 text-sm hover:text-primary transition-colors break-all">info@jaffariskytravels.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <span className="material-icons-outlined text-green-600">chat</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/917051693767" target="_blank" rel="noopener noreferrer" className="text-slate-600 text-sm hover:text-green-600 transition-colors">+91 7051693767</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-2 pt-4 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-800">Follow Us:</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">facebook</span>
                    </a>
                    <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">camera_alt</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gradient-to-br from-white to-slate-50 flex flex-col items-center justify-center p-12 border border-slate-200">
              <img alt="JAffari Sky Travels Logo" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/logo.png" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-blue-100 rounded-2xl -z-0 opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-1/3 aspect-square border-2 border-primary/20 rounded-2xl -z-0"></div>
          </div>
          
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-secondary mx-auto opacity-30 mt-4 mb-4"></div>
            <p className="text-slate-500">The passionate individuals behind your unforgettable journeys.</p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <div className="group rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100 text-center">
              <div className="aspect-square overflow-hidden bg-black">
                <img alt="Adil Hussain Sofi" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" src="/images/founder_black_bg.png" loading="lazy" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-1">Adil Hussain Sofi</h3>
                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">CEO & Founder</p>
                <p className="text-slate-600 text-sm">
                  With a deep passion for Kashmir's beauty and a commitment to exceptional service, Adil leads our mission to provide the best travel experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
