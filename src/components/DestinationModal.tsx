import { X, Navigation, Clock, Map } from "lucide-react";
import type { Destination } from "../data/site";

export function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination | null;
  onClose: () => void;
}) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-[#F9F8F6] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 h-[300px] md:h-auto shrink-0 relative">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col overflow-y-auto bg-[#F9F8F6]">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-200/50 hover:bg-slate-300 text-slate-700 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 pr-8">
            <div className="inline-block px-3 py-1 bg-[#854d0e] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
              {destination.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#064e3b] mb-4">
              {destination.name}
            </h2>
            
            <div className="flex flex-wrap gap-4 text-sm text-[#064e3b] font-medium mb-6">
              <div className="flex items-center gap-2 bg-[#064e3b]/5 px-3 py-1.5 rounded-lg border border-[#064e3b]/10">
                <Navigation className="w-4 h-4 opacity-70" />
                {destination.distance}
              </div>
              <div className="flex items-center gap-2 bg-[#064e3b]/5 px-3 py-1.5 rounded-lg border border-[#064e3b]/10">
                <Clock className="w-4 h-4 opacity-70" />
                {destination.time}
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              {destination.description}
            </p>

            <h3 className="text-[#064e3b] font-serif text-lg mb-4 flex items-center gap-2">
              Top Attractions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {destination.attractions.map((attr, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5 w-4 h-4 rounded-full border border-[#854d0e] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#854d0e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-tight">{attr}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[#064e3b] font-serif text-lg mb-4 flex items-center gap-2">
              Location Map
            </h3>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-slate-200 relative group">
              <iframe
                src={destination.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
              <a 
                href={destination.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-md text-xs font-bold text-blue-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
              >
                <Map className="w-3 h-3" />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
