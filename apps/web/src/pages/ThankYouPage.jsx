import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { Button } from '@/components/ui/button';

const ThankYouPage = () => {
  const location = useLocation();
  const message = location.state?.message || 'Thank you for reaching out. We have received your submission and will be in touch soon.';

  return (
    <>
      <Helmet>
        <title>Thank You | NeuroDigital Support</title>
      </Helmet>

      <Header />

      <main className="theme-aware-page flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fbfffd_0%,#f1faf6_100%)] px-5 py-24 text-[#102f28]">
        <div className="w-full max-w-lg rounded-[1.5rem] border border-[#dcece6] bg-white p-10 text-center shadow-[0_24px_80px_rgba(15,61,50,0.08)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7f1] text-[#0f765a]">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-normal text-[#0b3b31]">Thank You</h1>
          <p className="mt-4 text-base font-medium leading-7 text-[#536b64]">{message}</p>

          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-[#0b5f49] px-7 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(11,95,73,0.2)] hover:bg-[#084d3c]"
          >
            <Link to="/">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThankYouPage;
