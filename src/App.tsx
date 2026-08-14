import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const GalleryPage = lazy(() => import("./pages/GalleryPage").then(m => ({ default: m.GalleryPage })));
const HajjRegistrationPage = lazy(() => import("./pages/HajjRegistrationPage").then(m => ({ default: m.HajjRegistrationPage })));
const HajjUmrahPage = lazy(() => import("./pages/HajjUmrahPage").then(m => ({ default: m.HajjUmrahPage })));
const KashmirPackagesPage = lazy(() => import("./pages/KashmirPackagesPage").then(m => ({ default: m.KashmirPackagesPage })));
const LegalPage = lazy(() => import("./pages/LegalPage").then(m => ({ default: m.LegalPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));
const PackageDetailPage = lazy(() => import("./pages/PackageDetailPage").then(m => ({ default: m.PackageDetailPage })));
const TicketingPage = lazy(() => import("./pages/TicketingPage").then(m => ({ default: m.TicketingPage })));
const VisaServicesPage = lazy(() => import("./pages/VisaServicesPage").then(m => ({ default: m.VisaServicesPage })));
const CarRentalPage = lazy(() => import("./pages/CarRentalPage").then(m => ({ default: m.CarRentalPage })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-slate-50"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="kashmir-packages" element={<KashmirPackagesPage />} />
            <Route path="kashmir-packages/:slug" element={<PackageDetailPage />} />
            <Route path="hajj-umrah" element={<HajjUmrahPage />} />
            <Route path="hajj-umrah/hajj" element={<HajjRegistrationPage />} />
            <Route path="ticketing" element={<TicketingPage />} />
            <Route path="visa-services" element={<VisaServicesPage />} />
            <Route path="car-rental" element={<CarRentalPage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />

            <Route path="privacy-policy" element={<LegalPage title="Privacy Policy" />} />
            <Route path="terms-and-conditions" element={<LegalPage title="Terms & Conditions" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
