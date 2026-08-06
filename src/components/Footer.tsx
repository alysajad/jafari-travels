import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/whatsapp";

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
      <a className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all" href="#"><span className="material-icons-outlined text-sm">facebook</span></a>
      <a className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all" href="#"><span className="material-icons-outlined text-sm">camera_alt</span></a>
      <a className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all" href="#"><span className="material-icons-outlined text-sm">twitter</span></a>
      </div>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Company</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li><Link className="hover:text-primary transition-colors" to="/aboutus">About Us</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/">Our Services</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/aboutus">Careers</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/">Travel Blog</Link></li>
      <li><a className="hover:text-primary transition-colors" href={whatsappLink("Hello! I have a general inquiry.")} target="_blank" rel="noreferrer">Contact Us</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Top Services</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li><Link className="hover:text-primary transition-colors" to="/kashmir-packages">Kashmir Holiday Tours</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/hajj-umrah">Hajj & Umrah Packages</Link></li>
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
      <span>jaffariskytravels@gmail.com</span>
      </li>
      <li className="flex items-start gap-3">
      <span className="material-icons-outlined text-primary text-sm mt-1">location_on</span>
      <span>Jaffari Sky Travels, Srinagar, Kashmir</span>
      </li>
      </ul>
      </div>
      </div>
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-sm">© 2026 Jaffari Sky Travels. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-extrabold text-blue-900 tracking-wider">VISA</span>
          <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-extrabold text-red-600 tracking-wider">MC</span>
          <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-extrabold text-slate-700 tracking-wider">UPI</span>
          <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-extrabold text-green-700 tracking-wider">GPay</span>
        </div>
      </div>
      </div>
      </footer>

    </>
  );
}
