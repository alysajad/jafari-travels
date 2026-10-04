import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { EnquiryPopup } from "./EnquiryPopup";
import { BookingEnquiryPopup } from "./BookingEnquiryPopup";
import { SeasonProvider } from "./SeasonToggle";

export function Layout() {
  return (
    <SeasonProvider>
      <Header />
      <Outlet />
      <EnquiryPopup />
      <BookingEnquiryPopup />
      <WhatsAppFloat />
      <Footer />
    </SeasonProvider>
  );
}
