import { CalendarDays, Mail, MessageSquareText, Phone, UserRound, UsersRound } from "lucide-react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { BOOKING_ENQUIRY_EVENT } from "../lib/booking";
import { formDetails, sendEnquiryThenOpenWhatsApp } from "../lib/whatsapp";
import { EnquiryField, EnquiryModalShell, enquiryFieldClass } from "./EnquiryModalShell";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    const closeForBooking = () => {
      window.clearTimeout(timer);
      setOpen(false);
    };
    window.addEventListener(BOOKING_ENQUIRY_EVENT, closeForBooking);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(BOOKING_ENQUIRY_EVENT, closeForBooking);
    };
  }, []);

  const dismiss = useCallback(() => setOpen(false), []);

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
  return (
    <EnquiryModalShell
      description="Share a few details and our travel team will help shape the right trip for you."
      onClose={dismiss}
      title="Your next journey starts here."
      titleId="enquiry-popup-title"
    >
      <form className="grid max-h-[calc(100vh-190px)] grid-cols-1 gap-3 overflow-y-auto p-5 sm:grid-cols-2 sm:gap-4 sm:p-7" onSubmit={submit}>
          <EnquiryField icon={<UserRound />} label="Name" required>
            <input aria-label="Name" className={enquiryFieldClass} name="Name" placeholder="Enter your name" required type="text" />
          </EnquiryField>

          <EnquiryField icon={<Phone />} label="Mobile number" required>
            <div className="relative">
              <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-kashmir-blue/15 pr-2 text-sm font-bold text-kashmir-blue">+91</span>
              <input aria-label="Mobile number" className={`${enquiryFieldClass} pl-[5.2rem]`} inputMode="numeric" maxLength={10} name="Mobile Number" pattern="[0-9]{10}" placeholder="10 digit mobile" required type="tel" />
            </div>
          </EnquiryField>

          <EnquiryField icon={<Mail />} label="Email">
            <input aria-label="Email" className={enquiryFieldClass} name="Email" placeholder="Enter your email" type="email" />
          </EnquiryField>

          <div className="grid grid-cols-2 gap-3">
            <EnquiryField icon={<CalendarDays />} label="Travel date">
              <input aria-label="Travel date" className={enquiryFieldClass} min={minDate} name="Travel Date" type="date" />
            </EnquiryField>
            <EnquiryField icon={<UsersRound />} label="Travellers">
              <input aria-label="Number of travellers" className={enquiryFieldClass} defaultValue="1" min="1" name="Travel Count" type="number" />
            </EnquiryField>
          </div>

          <label className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-bold text-kashmir-blue">Tell us about your trip</span>
            <span className="relative block">
              <MessageSquareText className="absolute left-3 top-3.5 h-4 w-4 text-kashmir-bright" />
              <textarea className={`${enquiryFieldClass} min-h-24 resize-y`} name="Message" placeholder="Destination, preferred dates, hotel needs, or anything else..." rows={3} />
            </span>
          </label>

          <button className="focus-ring mt-1 inline-flex min-h-12 items-center justify-center rounded-xl bg-kashmir-bright px-5 text-sm font-black text-white shadow-[0_12px_30px_rgba(15,95,215,0.24)] transition hover:bg-kashmir-blue sm:col-span-2" type="submit">
            Connect with a travel expert
          </button>
          <p className="text-center text-[11px] leading-4 text-kashmir-slate sm:col-span-2">
            Your enquiry is sent securely by email, then WhatsApp opens so you can continue the conversation.
          </p>
      </form>
    </EnquiryModalShell>
  );
}
