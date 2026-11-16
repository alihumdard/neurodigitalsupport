import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import CookieConsent from '@/components/CookieConsent.jsx';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage.jsx';
import AltiTokPage from './pages/AltiTokPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import CareLoggingPage from './pages/CareLoggingPage.jsx';
import { CartProvider } from '@/contexts/CartContext.jsx';
import { CartDrawer } from '@/components/store/StoreParts.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ConsultancyTrainingPage from './pages/ConsultancyTrainingPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import StorePage from './pages/StorePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DigitalAdvocacyHubPage from './pages/DigitalAdvocacyHubPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NuroTokPage from './pages/NuroTokPage.jsx';
import NuroTokLegalPage from './pages/NuroTokLegalPage.jsx';
import OliTokPage from './pages/OliTokPage.jsx';
import ResearchInsightsHubPage from './pages/ResearchInsightsHubPage.jsx';
import SocialListeningDashboardPage from './pages/SocialListeningDashboardPage.jsx';
import ThankYouPage from './pages/ThankYouPage.jsx';
import SeoFoundation from './components/SeoFoundation.jsx';

// Loaded only when visited: the admin panel and editor are most of the code, and most visitors
// never open them.
const AdminPage = lazy(() => import('./pages/AdminPage.jsx'));
const SharePage = lazy(() => import('./pages/SharePage.jsx'));
const AccountPage = lazy(() => import('./pages/AccountPage.jsx'));

const PageLoading = () => <p className="p-8 text-center text-sm text-muted-foreground">Loading…</p>;

function App() {
  return (
    <AccessibilityProvider>
      <CartProvider>
      <Router>
        <SeoFoundation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<Suspense fallback={<PageLoading />}><AdminPage /></Suspense>} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/consultancy-training-workshops" element={<ConsultancyTrainingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/nurotok" element={<NuroTokPage />} />
          <Route path="/nurotok/account" element={<Suspense fallback={<PageLoading />}><AccountPage /></Suspense>} />
          <Route path="/nurotok/legal" element={<NuroTokLegalPage />} />
          <Route path="/nurotok/:policy" element={<NuroTokLegalPage />} />
          <Route path="/altitok" element={<AltiTokPage />} />
          <Route path="/olitok" element={<OliTokPage />} />
          <Route path="/care-logging" element={<CareLoggingPage />} />
          <Route path="/digital-advocacy-hub" element={<DigitalAdvocacyHubPage />} />
          <Route path="/research" element={<ResearchInsightsHubPage />} />
          <Route path="/research-insights-hub" element={<ResearchInsightsHubPage />} />
          <Route path="/social-listening-dashboard" element={<SocialListeningDashboardPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/checkout" element={<CheckoutPage />} />
          <Route path="/store/:slug" element={<ProductPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/share/:token" element={<Suspense fallback={<PageLoading />}><SharePage /></Suspense>} />
        </Routes>
        <CartDrawer />
        <CookieConsent />
        <Toaster />
      </Router>
      </CartProvider>
    </AccessibilityProvider>
  );
}

export default App;
