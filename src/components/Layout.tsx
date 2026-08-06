import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
