import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 text-black">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          
          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center justify-start gap-8 text-sm text-black uppercase tracking-wider font-bold">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="hover:text-primary transition-colors" to="/kashmir-packages">Packages</Link>
            <Link className="hover:text-primary transition-colors" to="/hajj-umrah">Hajj & Umrah</Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="z-10 flex items-center">
            <img src="/logo.png" alt="Jaffari Sky Travels & Tours" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Right Nav & Action (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-8">
            <nav className="flex items-center gap-8 text-sm text-black uppercase tracking-wider font-bold">
              <Link className="hover:text-primary transition-colors" to="/ticketing">Air Tickets</Link>
              <Link className="hover:text-primary transition-colors" to="/visa-services">Visas</Link>
              <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
            </nav>
            <Link to="/contact" className="bg-primary text-white px-8 py-3 text-sm font-semibold hover:shadow-lg hover:opacity-90 transition-all uppercase tracking-wider hidden xl:block">
                Book Now
            </Link>
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
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col lg:hidden">
          <nav className="flex flex-col gap-6 text-xl font-extrabold uppercase tracking-wider text-black">
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/kashmir-packages">Packages</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/hajj-umrah">Hajj & Umrah</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/ticketing">Air Tickets</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/visa-services">Visas</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-slate-100 pb-4" to="/contact">Contact</Link>
          </nav>
          <div className="mt-auto pt-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="bg-primary text-white px-8 py-4 text-center rounded-xl font-bold uppercase tracking-wider block w-full shadow-lg">
                Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
