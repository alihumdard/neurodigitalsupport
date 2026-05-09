import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import AltiTokPage from './pages/AltiTokPage.jsx';
import CareLoggingPage from './pages/CareLoggingPage.jsx';
import DigitalAdvocacyHubPage from './pages/DigitalAdvocacyHubPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NuroTokPage from './pages/NuroTokPage.jsx';
import OliTokPage from './pages/OliTokPage.jsx';
import ResearchInsightsHubPage from './pages/ResearchInsightsHubPage.jsx';
import SocialListeningDashboardPage from './pages/SocialListeningDashboardPage.jsx';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/nurotok" element={<NuroTokPage />} />
          <Route path="/altitok" element={<AltiTokPage />} />
          <Route path="/olitok" element={<OliTokPage />} />
          <Route path="/care-logging" element={<CareLoggingPage />} />
          <Route path="/digital-advocacy-hub" element={<DigitalAdvocacyHubPage />} />
          <Route path="/research-insights-hub" element={<ResearchInsightsHubPage />} />
          <Route path="/social-listening-dashboard" element={<SocialListeningDashboardPage />} />
        </Routes>
        <Toaster />
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
