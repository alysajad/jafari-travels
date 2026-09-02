import { Plane, X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";

export const enquiryFieldClass = "w-full rounded-xl border border-kashmir-blue/15 bg-white py-3 pl-10 pr-3 text-sm text-kashmir-charcoal outline-none transition focus:border-kashmir-bright focus:ring-2 focus:ring-kashmir-bright/15";

export function EnquiryModalShell({ children, description, onClose, title, titleId }: {
  children: ReactNode;
  description: string;
  onClose: () => void;
  title: string;
  titleId: string;
}) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-kashmir-charcoal/75 p-3 backdrop-blur-[3px] sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section aria-labelledby={titleId} aria-modal="true" className="relative my-auto w-full max-w-[590px] overflow-hidden rounded-[1.75rem] bg-kashmir-cream shadow-[0_28px_90px_rgba(3,18,43,0.42)]" role="dialog">
        <header className="relative overflow-hidden bg-kashmir-blue px-5 py-5 text-white sm:px-7 sm:py-6">
          <div className="absolute -right-8 -top-14 h-32 w-32 rounded-full border-[22px] border-kashmir-gold/25" />
          <div className="relative text-center">
            <div className="mb-4 inline-flex max-w-[calc(100%-4rem)] items-center justify-center gap-1.5 whitespace-nowrap font-sans text-xs font-black tracking-[0.08em] sm:text-sm">
              <Plane className="h-4 w-4 shrink-0 text-kashmir-gold" />
              <span>Jaffari Sky <span className="text-kashmir-gold">Travels</span></span>
            </div>
            <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-[2rem]" id={titleId}>{title}</h2>
            <p className="mx-auto mt-1.5 max-w-md text-sm leading-5 text-white/75">{description}</p>
          </div>
          <button aria-label="Close enquiry form" className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={onClose} ref={closeButton} type="button">
            <X className="h-5 w-5" />
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}

export function EnquiryField({ children, icon, label, required = false }: { children: ReactNode; icon: ReactNode; label: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-1.5 block text-xs font-bold text-kashmir-blue">
        {label} {required && <span className="text-kashmir-crimson">*</span>}
      </span>
      <div className="relative block">
        <span className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-kashmir-bright [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {children}
      </div>
    </label>
  );
}
