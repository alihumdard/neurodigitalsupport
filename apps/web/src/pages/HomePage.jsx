import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ProductsHome from '@/components/ProductsHome.jsx'; 
// import AccesiblityFeatures from '@/components/AccesiblityFeatures.jsx';
// import HowNurotokWorks from '@/components/HowNurotokWorks.jsx';
// import HomeCTA from '@/components/HomeCTA.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>NeuroDigital Support - Digital spaces designed for neurodivergent minds</title>
        <meta name="description" content="Sensory-aware technology that supports your wellbeing, not your overwhelm. Discover tools built specifically for neurodivergent individuals." />
      </Helmet>

      <Header />

      <main>
        {/* ── HERO SECTION ── */}
        <HeroSection />

        {/* ── CORE PRODUCTS ── */}
        <ProductsHome />

        {/* ── ACCESSIBILITY FEATURES ── */}
        {/* <AccesiblityFeatures /> */}

        {/* ── HOW NUROTOK WORKS ── */}
        {/* <HowNurotokWorks /> */}

        {/* ── CTA SECTIONS ── */}
        {/* <HomeCTA /> */}
      </main>

      <Footer />
    </>
  );
};

export default HomePage;