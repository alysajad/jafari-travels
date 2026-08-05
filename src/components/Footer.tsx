import { Link } from "react-router-dom";

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
      <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/">Our Services</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/about">Careers</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/">Travel Blog</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
      </ul>
      </div>
      <div>
      <h4 className="font-extrabold text-black mb-6">Top Services</h4>
      <ul className="space-y-4 text-slate-500 text-sm font-medium">
      <li><Link className="hover:text-primary transition-colors" to="/kashmir-packages">Kashmir Holiday Tours</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/hajj-umrah">Hajj & Umrah Packages</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/ticketing">Air Ticketing</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/visa-services">Global Visa Services</Link></li>
      <li><Link className="hover:text-primary transition-colors" to="/contact">Hotel Reservations</Link></li>
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
      <a className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group" href="https://wa.me/917051693767" target="_blank" rel="noreferrer">
      <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52c1.54.995 3.11 1.488 4.67 1.488 5.285 0 9.585-4.3 9.587-9.586.001-2.56-.992-4.967-2.797-6.772-1.804-1.805-4.212-2.798-6.773-2.799-5.285 0-9.585 4.3-9.588 9.586 0 1.861.541 3.515 1.572 4.908l-.946 3.454 3.875-1.018zM17.477 14.22c-.266-.133-1.569-.773-1.813-.863-.243-.09-.419-.133-.596.133-.176.265-.685.863-.839 1.041-.155.176-.309.199-.574.066-.265-.133-1.121-.413-2.133-1.317-.788-.703-1.32-1.57-1.474-1.835-.155-.265-.017-.409.117-.541.12-.12.266-.31.398-.465.133-.155.176-.265.266-.442.088-.176.044-.332-.022-.465-.067-.133-.596-1.439-.816-1.97-.214-.518-.448-.448-.616-.457-.159-.009-.34-.01-.522-.01s-.477.067-.727.342c-.25.275-.953.931-.953 2.272s.976 2.639 1.11 2.816c.133.176 1.921 2.933 4.654 4.113.649.28 1.157.447 1.552.572.653.208 1.247.178 1.717.108.523-.078 1.569-.641 1.79-1.261.221-.619.221-1.151.155-1.261-.067-.109-.244-.176-.51-.309z"></path></svg>
      <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-1 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
      </a>
    </>
  );
}
