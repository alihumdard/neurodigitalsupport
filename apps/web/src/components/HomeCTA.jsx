import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';
import { toast } from 'sonner';
import logoSrc from '../../public/logo.png';

const HomeCTA = () => {
  const { reducedMotion } = useAccessibility();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const animationProps = reducedMotion ? {} : {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: "easeOut" }
  };

  const navigationLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Ecosystem', path: '/modules' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast('Thanks for subscribing to our newsletter');
    setNewsletterEmail('');
  };

  return (
    <section className="w-full overflow-hidden">
      <motion.div
        className="w-full bg-gradient-to-br from-[#edf8f4] via-[#e6f5ef] to-[#dcf0e8] dark:from-background dark:via-muted dark:to-background"
        variants={fadeInVariants}
        {...animationProps}
      >
        <div className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700 dark:text-foreground">
                NeuroDigital Support
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                Join the Future of Inclusive Technology
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-muted-foreground sm:text-base lg:mx-0">
                Whether you are an individual, caregiver, researcher, university, employer, or healthcare provider, NeuroDigital Support is built for you.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button className="h-11 rounded-full bg-[#5aa88f] px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#4a957e] active:scale-[0.98]">
                  <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                  Book a Demo
                </Button>
                <Button className="h-11 rounded-full border border-emerald-300 bg-white px-6 text-sm font-bold text-emerald-800 shadow-sm transition-all hover:bg-emerald-50 active:scale-[0.98] dark:border-border dark:bg-card dark:text-foreground dark:hover:bg-muted">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <div className="rounded-[1.5rem] border border-emerald-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-border dark:bg-card dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">Get Started Today</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-muted-foreground">No credit card required</p>
                </div>

                <form className="space-y-3.5">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-border dark:bg-background dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-border dark:focus:ring-ring/30"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-border dark:bg-background dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-border dark:focus:ring-ring/30"
                  />
                  <input
                    type="text"
                    name="organizationRole"
                    placeholder="Org"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-border dark:bg-background dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-border dark:focus:ring-ring/30"
                  />
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-[#5aa88f] text-sm font-extrabold text-white shadow-sm transition-all hover:bg-[#4a957e] active:scale-[0.98]"
                  >
                    Start Now
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="w-full border-t border-emerald-100 bg-[#fbfdfc] dark:border-border dark:bg-background">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-14 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-20 lg:gap-20">
            <div>
              <Link
                to="/"
                className="relative block h-12 w-[250px] overflow-hidden rounded-md focus-visible-ring"
                aria-label="NeuroDigital Support home"
              >
                <img
                  src={logoSrc}
                  alt="NeuroDigital Support"
                  className="absolute left-[-8px] top-[-50px] w-[260px] max-w-none"
                />
              </Link>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 dark:text-muted-foreground">
                Creating sensory-aware digital spaces that support neurodivergent wellbeing and reduce overwhelm.
              </p>
            </div>

            <div className="min-w-0 md:pl-3 lg:pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-foreground">Navigation</span>
              <nav className="mt-5 space-y-3" aria-label="Footer navigation">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-foreground">Contact</span>
              <div className="mt-5 space-y-4">
                <a href="mailto:support@neurodigital.com" className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:text-muted-foreground dark:hover:text-foreground">
                  <Mail className="h-4 w-4 text-[#5aa88f]" aria-hidden="true" />
                  <span>support@neurodigital.com</span>
                </a>
                <a href="tel:+447825354088" className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:text-muted-foreground dark:hover:text-foreground">
                  <Phone className="h-4 w-4 text-[#5aa88f]" aria-hidden="true" />
                  <span>+447825354088</span>
                </a>
                <div className="inline-flex items-center gap-3 pt-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 bg-white text-slate-600 shadow-sm transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring dark:border-border dark:bg-card dark:text-muted-foreground dark:hover:text-foreground"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-foreground">Newsletter</span>
              <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600 dark:text-muted-foreground">
                Stay updated on neuroinclusive technology and research.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="h-11 flex-1 border-emerald-100 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#5aa88f] dark:border-border dark:bg-card dark:text-foreground dark:placeholder:text-muted-foreground"
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  className="h-11 w-full shrink-0 rounded-lg bg-[#5aa88f] px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#4a957e] active:scale-[0.98] sm:w-auto"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 py-7 dark:border-border">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm font-semibold text-slate-600 dark:text-muted-foreground">© 2026 NeuroDigital Support. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-muted-foreground">
                <Link to="/accessibility" className="transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:hover:text-foreground">
                  Accessibility Statement
                </Link>
                <Link to="/privacy" className="transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="transition-colors duration-200 hover:text-[#4a957e] focus-visible-ring rounded dark:hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default HomeCTA;
