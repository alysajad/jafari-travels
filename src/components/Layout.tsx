import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { EnquiryPopup } from "./EnquiryPopup";
import { BookingEnquiryPopup } from "./BookingEnquiryPopup";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <EnquiryPopup />
      <BookingEnquiryPopup />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
