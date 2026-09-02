import { CalendarDays, Mail, MapPin, MessageSquareText, Phone, Tag, UserRound, UsersRound } from "lucide-react";
import { FormEvent, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { BOOKING_ENQUIRY_EVENT, BookingEnquiry, BookingKind } from "../lib/booking";
import { packages, rentalVehicles, umrahPackages } from "../data/site";
import { sendEnquiryThenOpenWhatsApp } from "../lib/whatsapp";
import { EnquiryField, EnquiryModalShell, enquiryFieldClass } from "./EnquiryModalShell";

type BookingField = {
  label: string;
  name: string;
  type?: "date" | "number" | "select" | "text";
  options?: string[];
  required?: boolean;
  min?: number;
};

const bookingLabels: Record<BookingKind, string> = {
  package: "Package booking",
  car: "Car rental",
  hajj: "Hajj reservation",
  umrah: "Umrah package",
  hotel: "Hotel reservation",
  gondola: "Gondola booking",
  flight: "Flight booking",
  visa: "Visa assistance",
};

const countries = ["Saudi Arabia", "UAE", "Oman", "Qatar", "Kuwait", "Malaysia", "Thailand"];

export function BookingEnquiryPopup() {
  const [enquiry, setEnquiry] = useState<BookingEnquiry | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const open = (event: Event) => {
      const nextEnquiry = (event as CustomEvent<BookingEnquiry>).detail;
      setEnquiry(nextEnquiry);
      setValues(initialValues(nextEnquiry));
      setSubmitting(false);
    };
    window.addEventListener(BOOKING_ENQUIRY_EVENT, open);
    return () => window.removeEventListener(BOOKING_ENQUIRY_EVENT, open);
  }, []);

  const close = useCallback(() => {
    if (!submitting) setEnquiry(null);
  }, [submitting]);

  const derivedDetails = useMemo(() => enquiry ? selectedItemDetails(enquiry.kind, values) : {}, [enquiry, values]);

  if (!enquiry) return null;

  const activeEnquiry = enquiry;
  const fields = bookingFields(activeEnquiry.kind);
  const selection = values.Package || values.Vehicle || values["Hotel / Destination"] || bookingLabels[activeEnquiry.kind];
  const minDate = localToday();

  function change(name: string, value: string) {
    setValues((current) => {
      const next = { ...current, [name]: value };
      if (activeEnquiry.kind === "umrah" && name === "Package") {
        next.Duration = umrahPackages.find((item) => item.tier === value)?.duration || next.Duration;
      }
      if (activeEnquiry.kind === "car" && name === "Vehicle") {
        next["Vehicle Category"] = rentalVehicles.find((item) => item.name === value)?.category || next["Vehicle Category"];
      }
      return next;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const details: Record<string, string> = {
      Name: values.Name,
      Email: values.Email,
      "Mobile Number": `+91 ${values["Mobile Number"]}`,
      ...Object.fromEntries(Object.entries(values).filter(([key]) => !["Name", "Email", "Mobile Number", "Special Requests"].includes(key))),
      ...derivedDetails,
      "Special Requests": values["Special Requests"],
    };

    await sendEnquiryThenOpenWhatsApp({
      source: activeEnquiry.source,
      enquiryType: `${bookingLabels[activeEnquiry.kind]} enquiry`,
      request: bookingRequest(activeEnquiry.kind, values),
      details,
    });
    setEnquiry(null);
  }

  return (
    <EnquiryModalShell
      description="Your selection is ready. Add your contact details and adjust anything before sending."
      onClose={close}
      title="Complete your booking enquiry."
      titleId="booking-enquiry-title"
    >
      <form className="grid max-h-[calc(100vh-190px)] grid-cols-1 gap-3 overflow-y-auto p-5 sm:grid-cols-2 sm:gap-4 sm:p-7" onSubmit={submit}>
        <div className="rounded-2xl border border-kashmir-gold/40 bg-white p-4 sm:col-span-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-kashmir-bright">Selection carried forward</p>
          <p className="mt-1 font-display text-lg font-extrabold text-kashmir-blue">{selection}</p>
          {Object.keys(derivedDetails).length > 0 && (
            <p className="mt-1 text-xs font-semibold leading-5 text-kashmir-slate">{Object.values(derivedDetails).join(" · ")}</p>
          )}
        </div>

        <EnquiryField icon={<UserRound />} label="Full name" required>
          <input className={enquiryFieldClass} name="Name" onChange={(event) => change("Name", event.target.value)} placeholder="Enter your name" required type="text" value={values.Name || ""} />
        </EnquiryField>

        <EnquiryField icon={<Phone />} label="Mobile number" required>
          <div className="relative">
            <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-kashmir-blue/15 pr-2 text-sm font-bold text-kashmir-blue">+91</span>
            <input className={`${enquiryFieldClass} pl-[5.2rem]`} inputMode="numeric" maxLength={10} name="Mobile Number" onChange={(event) => change("Mobile Number", event.target.value)} pattern="[0-9]{10}" placeholder="10 digit mobile" required type="tel" value={values["Mobile Number"] || ""} />
          </div>
        </EnquiryField>

        <EnquiryField icon={<Mail />} label="Email" required>
          <input className={enquiryFieldClass} name="Email" onChange={(event) => change("Email", event.target.value)} placeholder="Enter your email" required type="email" value={values.Email || ""} />
        </EnquiryField>

        {fields.map((field) => (
          <EnquiryField icon={fieldIcon(field)} key={field.name} label={field.label} required={field.required}>
            {field.type === "select" ? (
              <select className={`${enquiryFieldClass} appearance-none`} name={field.name} onChange={(event) => change(field.name, event.target.value)} required={field.required} value={values[field.name] || ""}>
                {field.options?.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : (
              <input
                className={enquiryFieldClass}
                min={field.type === "date" ? dateMinimum(field.name, values, minDate) : field.min}
                name={field.name}
                onChange={(event) => change(field.name, event.target.value)}
                required={field.required}
                type={field.type || "text"}
                value={values[field.name] || ""}
              />
            )}
          </EnquiryField>
        ))}

        <label className="sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold text-kashmir-blue">Special requests</span>
          <span className="relative block">
            <MessageSquareText className="absolute left-3 top-3.5 h-4 w-4 text-kashmir-bright" />
            <textarea className={`${enquiryFieldClass} min-h-24 resize-y`} name="Special Requests" onChange={(event) => change("Special Requests", event.target.value)} placeholder="Hotel preferences, accessibility needs, or anything else..." rows={3} value={values["Special Requests"] || ""} />
          </span>
        </label>

        <button className="focus-ring mt-1 inline-flex min-h-12 items-center justify-center rounded-xl bg-kashmir-bright px-5 text-sm font-black text-white shadow-[0_12px_30px_rgba(15,95,215,0.24)] transition hover:bg-kashmir-blue disabled:cursor-wait disabled:opacity-65 sm:col-span-2" disabled={submitting} type="submit">
          {submitting ? "Sending enquiry..." : "Send enquiry and continue to WhatsApp"}
        </button>
        <p className="text-center text-[11px] leading-4 text-kashmir-slate sm:col-span-2">We email your booking details securely, then open WhatsApp so you can continue with our travel team.</p>
      </form>
    </EnquiryModalShell>
  );
}

function bookingFields(kind: BookingKind): BookingField[] {
  const packageNames = packages.map((item) => item.name);
  const vehicleNames = rentalVehicles.map((item) => item.name);
  const umrahNames = umrahPackages.map((item) => item.tier);

  const fields: Record<BookingKind, BookingField[]> = {
    package: [
      { label: "Package", name: "Package", type: "select", options: [...packageNames, "Custom Package Needed"], required: true },
      { label: "Travel date", name: "Travel Date", type: "date", required: true },
      { label: "End date", name: "Return Date", type: "date" },
      { label: "Adults", name: "Adults", type: "number", min: 1, required: true },
      { label: "Children", name: "Children", type: "number", min: 0 },
      { label: "Infants", name: "Infants", type: "number", min: 0 },
    ],
    car: [
      { label: "Vehicle", name: "Vehicle", type: "select", options: ["Let the team recommend", ...vehicleNames], required: true },
      { label: "Vehicle category", name: "Vehicle Category", type: "select", options: [...new Set(rentalVehicles.map((item) => item.category))], required: true },
      { label: "Pickup location", name: "Pickup Location", required: true },
      { label: "Pickup date", name: "Pickup Date", type: "date", required: true },
      { label: "Drop date", name: "Drop Date", type: "date" },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
    ],
    hajj: [
      { label: "Package", name: "Package", type: "select", options: ["Hajj 2027 Shifting Package", "Economy Shifting", "Standard Shifting", "Premium Non-Shifting"], required: true },
      { label: "Preferred travel date", name: "Travel Date", type: "date", required: true },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
    ],
    umrah: [
      { label: "Package", name: "Package", type: "select", options: [...new Set([...umrahNames, "Premium Umrah", "Economy Umrah", "VIP Umrah", "Ramadan Umrah"])], required: true },
      { label: "Duration", name: "Duration", type: "select", options: [...new Set(umrahPackages.map((item) => item.duration)), "Custom"] },
      { label: "Travel month", name: "Travel Month", type: "select", options: ["Ramadan 2027", "Shawwal 2027", "Rajab 2027", "Any Month"] },
      { label: "Travel date", name: "Travel Date", type: "date", required: true },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
    ],
    hotel: [
      { label: "Hotel or destination", name: "Hotel / Destination", required: true },
      { label: "Check-in date", name: "Check-in Date", type: "date", required: true },
      { label: "Check-out date", name: "Check-out Date", type: "date" },
      { label: "Rooms", name: "Rooms", type: "number", min: 1, required: true },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
    ],
    gondola: [
      { label: "Phase", name: "Phase", type: "select", options: ["Phase 1 (Gulmarg - Kongdoori)", "Phase 2 (Kongdoori - Apharwat)", "Phase 1 & 2"], required: true },
      { label: "Travel date", name: "Travel Date", type: "date", required: true },
      { label: "Time slot", name: "Time Slot", type: "select", options: ["09:00 AM - 11:00 AM", "11:00 AM - 01:00 PM", "01:00 PM - 03:00 PM", "Any Time"] },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
    ],
    flight: [
      { label: "From", name: "From", required: true },
      { label: "To", name: "To", required: true },
      { label: "Travel date", name: "Travel Date", type: "date", required: true },
      { label: "Return date", name: "Return Date", type: "date" },
      { label: "Travellers", name: "Travellers", type: "number", min: 1, required: true },
      { label: "Travel class", name: "Travel Class", type: "select", options: ["Economy", "Premium Economy", "Business", "First Class"] },
    ],
    visa: [
      { label: "Country", name: "Country", type: "select", options: countries, required: true },
      { label: "Nationality", name: "Nationality", type: "select", options: ["Indian", "Foreign National"], required: true },
      { label: "Travel date", name: "Travel Date", type: "date", required: true },
      { label: "Visa type", name: "Visa Type", type: "select", options: ["Umrah Visa", "Tourist Visa", "Business Visa", "Transit Visa"], required: true },
    ],
  };
  return fields[kind];
}

function initialValues(enquiry: BookingEnquiry) {
  const defaults: Record<BookingKind, Record<string, string>> = {
    package: { Package: packages[0].name, Adults: "2", Children: "0", Infants: "0" },
    car: { Vehicle: "Let the team recommend", "Vehicle Category": rentalVehicles[0].category, Travellers: "1" },
    hajj: { Package: "Hajj 2027 Shifting Package", Travellers: "1" },
    umrah: { Package: umrahPackages[0].tier, Duration: umrahPackages[0].duration, Travellers: "1" },
    hotel: { Rooms: "1", Travellers: "1" },
    gondola: { Phase: "Phase 1 (Gulmarg - Kongdoori)", "Time Slot": "Any Time", Travellers: "1" },
    flight: { Travellers: "1", "Travel Class": "Economy" },
    visa: { Country: countries[0], Nationality: "Indian", "Visa Type": "Tourist Visa" },
  };
  const suppliedValues = Object.fromEntries(Object.entries(enquiry.values || {}).filter(([, value]) => value));
  return { Name: "", Email: "", "Mobile Number": "", "Special Requests": "", ...defaults[enquiry.kind], ...suppliedValues };
}

function selectedItemDetails(kind: BookingKind, values: Record<string, string>): Record<string, string> {
  if (kind === "package") {
    const item = packages.find((pkg) => pkg.name === values.Package);
    return item ? { Duration: item.duration, Destinations: item.destinations, "Starting Price": item.price } : {};
  }
  if (kind === "car") {
    const item = rentalVehicles.find((vehicle) => vehicle.name === values.Vehicle);
    return item ? { Seating: String(item.seats), "Price Per Day": `₹${item.pricePerDay.toLocaleString()}` } : {};
  }
  if (kind === "umrah") {
    const item = umrahPackages.find((pkg) => pkg.tier === values.Package);
    return item ? { Price: item.price } : {};
  }
  return {};
}

function fieldIcon(field: BookingField): ReactNode {
  if (field.type === "date") return <CalendarDays />;
  if (field.name.includes("Traveller") || ["Adults", "Children", "Infants", "Rooms"].includes(field.name)) return <UsersRound />;
  if (field.name.includes("Location") || ["From", "To", "Country", "Nationality"].includes(field.name)) return <MapPin />;
  return <Tag />;
}

function bookingRequest(kind: BookingKind, values: Record<string, string>) {
  if (kind === "package") return `I would like to book the ${values.Package} package.`;
  if (kind === "car") return `I would like to reserve the ${values.Vehicle}.`;
  if (kind === "hajj") return `I would like to reserve a place in the ${values.Package}.`;
  if (kind === "umrah") return `I would like to enquire about the ${values.Package}.`;
  if (kind === "hotel") return `I would like help reserving a hotel${values["Hotel / Destination"] ? ` in ${values["Hotel / Destination"]}` : ""}.`;
  if (kind === "gondola") return `I would like to book ${values.Phase} Gondola tickets.`;
  if (kind === "flight") return `I would like help booking a flight from ${values.From} to ${values.To}.`;
  return `I would like help with a ${values["Visa Type"]} for ${values.Country}.`;
}

function dateMinimum(name: string, values: Record<string, string>, today: string) {
  if (name === "Drop Date") return values["Pickup Date"] || today;
  if (name === "Check-out Date") return values["Check-in Date"] || today;
  if (name === "Return Date") return values["Travel Date"] || today;
  return today;
}

function localToday() {
  return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
}
