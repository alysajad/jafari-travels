import { CalendarDays, Mail, MessageSquareText, Phone, Plane, UserRound, UsersRound, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { formDetails, sendEnquiryThenOpenWhatsApp } from "../lib/whatsapp";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function dismiss() {
    setOpen(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = formDetails(event.currentTarget);
    void sendEnquiryThenOpenWhatsApp({
      source: "Travel planning popup",
      enquiryType: "General travel enquiry",
      request: "I would like help planning my trip.",
      details,
    });
    dismiss();
  }

  if (!open) return null;

  const minDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
  const fieldClass = "w-full rounded-xl border border-kashmir-blue/15 bg-white py-3 pl-10 pr-3 text-sm text-kashmir-charcoal outline-none transition focus:border-kashmir-bright focus:ring-2 focus:ring-kashmir-bright/15";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-kashmir-charcoal/75 p-3 backdrop-blur-[3px] sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && dismiss()}
    >
      <section
        aria-labelledby="enquiry-popup-title"
        aria-modal="true"
        className="relative my-auto w-full max-w-[590px] overflow-hidden rounded-[1.75rem] bg-kashmir-cream shadow-[0_28px_90px_rgba(3,18,43,0.42)]"
        role="dialog"
      >
        <header className="relative overflow-hidden bg-kashmir-blue px-5 py-5 text-white sm:px-7 sm:py-6">
          <div className="absolute -right-8 -top-14 h-32 w-32 rounded-full border-[22px] border-kashmir-gold/25" />
          <div className="relative text-center">
            <div className="mb-4 inline-flex max-w-[calc(100%-4rem)] items-center justify-center gap-1.5 whitespace-nowrap font-sans text-xs font-black tracking-[0.08em] sm:text-sm">
              <Plane className="h-4 w-4 shrink-0 text-kashmir-gold" />
              <span>Jaffari Sky <span className="text-kashmir-gold">Travels</span></span>
            </div>
            <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-[2rem]" id="enquiry-popup-title">
              Your next journey starts here.
            </h2>
            <p className="mx-auto mt-1.5 max-w-md text-sm leading-5 text-white/75">
              Share a few details and our travel team will help shape the right trip for you.
            </p>
          </div>
          <button
            aria-label="Close enquiry form"
            className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={dismiss}
            ref={closeButton}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <form className="grid max-h-[calc(100vh-190px)] grid-cols-1 gap-3 overflow-y-auto p-5 sm:grid-cols-2 sm:gap-4 sm:p-7" onSubmit={submit}>
          <PopupField icon={<UserRound />} label="Name" required>
            <input aria-label="Name" className={fieldClass} name="Name" placeholder="Enter your name" required type="text" />
          </PopupField>

          <PopupField icon={<Phone />} label="Mobile number" required>
            <div className="relative">
              <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-kashmir-blue/15 pr-2 text-sm font-bold text-kashmir-blue">+91</span>
              <input aria-label="Mobile number" className={`${fieldClass} pl-[5.2rem]`} inputMode="numeric" maxLength={10} name="Mobile Number" pattern="[0-9]{10}" placeholder="10 digit mobile" required type="tel" />
            </div>
          </PopupField>

          <PopupField icon={<Mail />} label="Email">
            <input aria-label="Email" className={fieldClass} name="Email" placeholder="Enter your email" type="email" />
          </PopupField>

          <div className="grid grid-cols-2 gap-3">
            <PopupField icon={<CalendarDays />} label="Travel date">
              <input aria-label="Travel date" className={fieldClass} min={minDate} name="Travel Date" type="date" />
            </PopupField>
            <PopupField icon={<UsersRound />} label="Travellers">
              <input aria-label="Number of travellers" className={fieldClass} defaultValue="1" min="1" name="Travel Count" type="number" />
            </PopupField>
          </div>

          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-bold text-kashmir-blue">Tell us about your trip</span>
            <span className="relative block">
              <MessageSquareText className="absolute left-3 top-3.5 h-4 w-4 text-kashmir-bright" />
              <textarea className={`${fieldClass} min-h-24 resize-y`} name="Message" placeholder="Destination, preferred dates, hotel needs, or anything else..." rows={3} />
            </span>
          </label>

          <button className="focus-ring mt-1 inline-flex min-h-12 items-center justify-center rounded-xl bg-kashmir-bright px-5 text-sm font-black text-white shadow-[0_12px_30px_rgba(15,95,215,0.24)] transition hover:bg-kashmir-blue sm:col-span-2" type="submit">
            Connect with a travel expert
          </button>
          <p className="text-center text-[11px] leading-4 text-kashmir-slate sm:col-span-2">
            Your enquiry is sent securely by email, then WhatsApp opens so you can continue the conversation.
          </p>
        </form>
      </section>
    </div>
  );
}

function PopupField({ children, icon, label, required = false }: { children: React.ReactNode; icon: React.ReactNode; label: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-1.5 block text-xs font-bold text-kashmir-blue">
        {label} {required && <span className="text-kashmir-crimson">*</span>}
      </span>
      <span className="relative block">
        <span className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-kashmir-bright [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {children}
      </span>
    </label>
  );
}
