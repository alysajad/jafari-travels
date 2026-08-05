import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HajjRegistrationPage } from "./pages/HajjRegistrationPage";
import { HajjUmrahPage } from "./pages/HajjUmrahPage";
import { HomePage } from "./pages/HomePage";
import { KashmirPackagesPage } from "./pages/KashmirPackagesPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PackageDetailPage } from "./pages/PackageDetailPage";
import { TicketingPage } from "./pages/TicketingPage";
import { VisaServicesPage } from "./pages/VisaServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="kashmir-packages" element={<KashmirPackagesPage />} />
        <Route path="kashmir-packages/:slug" element={<PackageDetailPage />} />
        <Route path="hajj-umrah" element={<HajjUmrahPage />} />
        <Route path="hajj-umrah/hajj" element={<HajjRegistrationPage />} />
        <Route path="ticketing" element={<TicketingPage />} />
        <Route path="visa-services" element={<VisaServicesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="terms-and-conditions" element={<LegalPage title="Terms & Conditions" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
