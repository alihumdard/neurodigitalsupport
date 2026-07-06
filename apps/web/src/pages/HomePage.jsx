import React from 'react';
import { Helmet } from 'react-helmet';
import { canonicalFor } from '@/lib/seo';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ProductsHome from '@/components/ProductsHome.jsx'; 
// import AccesiblityFeatures from '@/components/AccesiblityFeatures.jsx';
// import HowNurotokWorks from '@/components/HowNurotokWorks.jsx';
import HomeCTA from '@/components/HomeCTA.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>NeuroDigital Support | Inclusive digital support for neurodivergent adults</title>
        <meta name="description" content="NeuroDigital Support builds sensory-aware digital platforms for autistic and neurodivergent adults, offering calm interfaces, wellbeing tools, and inclusive support services." />
              <link rel="canonical" href={canonicalFor('/')} />
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
        <HomeCTA />
      </main>
    </>
  );
};

export default HomePage;
