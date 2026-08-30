import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/whatsapp";
import { socialLinks } from "../data/site";

export function Footer() {
  return (
    <>
      <footer className="bg-white text-black pt-12 md:pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
      <div className="space-y-6">
      <div className="flex items-center">
      <img src="/logo.png" alt="Jaffari Sky Travels & Tours" className="h-14 w-auto" />
      </div>
      <p className="text-slate-500 text-sm leading-relaxed">
                              Your trusted travel partner for unforgettable journeys. Specializing in Kashmir tours, Hajj & Umrah services, and global travel solutions since 2012.
                          </p>
      <div className="flex items-center gap-4">
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 hover:text-primary transition-colors">
          <span className="material-icons-outlined">facebook</span>
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-primary transition-colors">
          <span className="material-icons-outlined">camera_alt</span>
        </a>
      </div>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Company</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li><Link className="hover:text-primary transition-colors" to="/aboutus">About Us</Link></li>
      <li><a className="hover:text-primary transition-colors" href={whatsappLink("Hello! I have a general inquiry.")} target="_blank" rel="noreferrer">Contact Us</a></li>
      <li><Link className="hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/terms-and-conditions">Terms & Conditions</Link></li>
      </ul>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Top Services</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li><Link className="hover:text-primary transition-colors" to="/kashmir-packages">Kashmir Holiday Tours</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/hajj-umrah">Hajj & Umrah Packages</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/car-rental">Car Rental</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/ticketing">Air Ticketing</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/visa-services">Global Visa Services</Link></li>
      <li><a className="hover:text-primary transition-colors" href={whatsappLink("I would like to make a hotel reservation.")} target="_blank" rel="noreferrer">Hotel Reservations</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Contact Us</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li className="flex items-start gap-3">
      <span className="material-icons-outlined text-primary text-sm mt-1">call</span>
      <span>+91 7051693767<br/>+91 9906-123456</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="material-icons-outlined text-primary text-sm mt-1">mail</span>
      <span>info@jaffariskytravels.com</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="material-icons-outlined text-primary text-sm mt-1">location_on</span>
      <span>Jaffari Sky Travels, Gulmarg Road Magam, Budgam, J&K</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-sm">© 2026 Jaffari Sky Travels. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 font-medium">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
      </div>
      </footer>

    </>
  );
}
