import { useState } from "react";
import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/whatsapp";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 text-black">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-4">
          
          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center justify-start gap-8 text-sm text-black uppercase tracking-wider font-bold">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="hover:text-primary transition-colors" to="/kashmir-packages">Packages</Link>
            <Link className="hover:text-primary transition-colors" to="/car-rental">Car Rental</Link>
            <Link className="hover:text-primary transition-colors" to="/hajj-umrah">Hajj & Umrah</Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="z-10 flex max-w-[150px] items-center sm:max-w-none">
            <img src="/logo.png" alt="Jaffari Sky Travels & Tours" className="h-12 w-auto sm:h-16 md:h-20" />
          </Link>

          {/* Right Nav & Action (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-8">
            <nav className="flex items-center gap-8 text-sm text-black uppercase tracking-wider font-bold">
              <Link className="hover:text-primary transition-colors" to="/ticketing">Air Tickets</Link>
              <Link className="hover:text-primary transition-colors" to="/visa-services">Visas</Link>
              <Link className="hover:text-primary transition-colors" to="/aboutus">About Us</Link>
            </nav>
            <a href={whatsappLink("Hello! I have a general inquiry.")} target="_blank" rel="noreferrer" className="bg-primary text-white px-8 py-3 text-sm font-semibold hover:shadow-lg hover:opacity-90 transition-all uppercase tracking-wider hidden xl:block">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-4 justify-end">
            <button 
              className="p-2 text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-icons-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6 text-xl font-extrabold uppercase tracking-wider text-black">
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/kashmir-packages">Packages</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/car-rental">Car Rental</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/hajj-umrah">Hajj & Umrah</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/ticketing">Air Tickets</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/visa-services">Visas</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/aboutus">About Us</Link>
          </nav>
          <div className="mt-auto pt-8">
            <a onClick={() => setIsMobileMenuOpen(false)} href={whatsappLink("Hello! I have a general inquiry.")} target="_blank" rel="noreferrer" className="bg-primary text-white px-8 py-4 text-center rounded-xl font-bold uppercase tracking-wider block w-full shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
