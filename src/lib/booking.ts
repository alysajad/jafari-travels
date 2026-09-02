export type BookingKind = "package" | "car" | "hajj" | "umrah" | "hotel" | "gondola" | "flight" | "visa";

export type BookingEnquiry = {
  kind: BookingKind;
  source: string;
  values?: Record<string, string>;
};

export const BOOKING_ENQUIRY_EVENT = "jaffari:open-booking-enquiry";

export function openBookingEnquiry(enquiry: BookingEnquiry) {
  window.dispatchEvent(new CustomEvent<BookingEnquiry>(BOOKING_ENQUIRY_EVENT, { detail: enquiry }));
}
