import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster />
      </Router>
    </AccessibilityProvider>
  );
}

export default App;