import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import "./i18n";

// Composants partagés
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ActionsPage from "./pages/ActionsPage";
import EventsPage from "./pages/EventsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ContactPage from "./pages/ContactPage";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import EventGallery1 from "./pages/EventGallery1";
import EventGallery2 from "./pages/EventGallery2";

// Composant de chargement
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/actions" element={<ActionsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/event-gallery-1" element={<EventGallery1 />} />
                <Route path="/event-gallery-2" element={<EventGallery2 />} />
                <Route path="/get-involved" element={<GetInvolvedPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route
                  path="/politique-confidentialite"
                  element={<PolitiqueConfidentialite />}
                />
                <Route
                  path="/conditions-utilisation"
                  element={<ConditionsUtilisation />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </Suspense>
  );
}

export default App;
