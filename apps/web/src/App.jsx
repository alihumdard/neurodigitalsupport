import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext.jsx";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage.jsx";
import AltiTokDetails from "./pages/ProductDetails.jsx";
import OliTokDetails from "./pages/OliTokDetails.jsx";
import CareLoggingDetails from "./pages/CareLoggingDetails.jsx";
import AdvocacyHubDetails from "./pages/AdvocacyHubDetails.jsx";
import ResearchDetails from "./pages/ResearchDetails.jsx";
import SocialListeningDetails from "./pages/SocialListeningDetails.jsx";

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/altitok" element={<AltiTokDetails />} />
          <Route path="/product/nurotok" element={<AltiTokDetails />} />
          <Route path="/product/olitok" element={<OliTokDetails />} />
          <Route
            path="/product/care-logging"
            element={<CareLoggingDetails />}
          />
          <Route
            path="/product/advocacy-hub"
            element={<AdvocacyHubDetails />}
          />
          <Route path="/product/research-hub" element={<ResearchDetails />} />
          <Route
            path="/product/social-listening"
            element={<SocialListeningDetails />}
          />
        </Routes>
        <Toaster />
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
