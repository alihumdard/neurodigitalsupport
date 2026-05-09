import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Eye,
  Lock,
  PieChart,
  TrendingUp,
  Sparkles,
  Database,
  ArrowRight,
  ExternalLink,
  Layers,
  MessageSquare,
  FileText,
  Download,
  Zap,
  LayoutGrid,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAccessibility } from "@/hooks/useAccessibility.jsx";
import ResearchLaptop from "../images/research.png";
import ResearchPortalBg from "../images/research_portal_bg.png";

export default function ResearchDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { darkMode } = useAccessibility();

  const features = [
    {
      icon: Search,
      title: "Searchable Research Library",
      desc: "Quickly find studies, reports, and publications by topic, keyword, or category, making valuable knowledge easier to access.",
    },
    {
      icon: BookOpen,
      title: "Published Studies",
      desc: "Peer-reviewed academic work covering autism, sensory environments, social media experiences, workplace inclusion, and well-being.",
    },
    {
      icon: Eye,
      title: "Digital Sensory Environment Reports",
      desc: "Explore how online platforms, app design, notifications, and interface patterns affect neurodivergent users.",
    },
    {
      icon: Lock,
      title: "Ethical Anonymised Data Sets",
      desc: "Privacy-safe information for research and innovation while protecting individuals.",
    },
    {
      icon: PieChart,
      title: "Visual Analytics Dashboards",
      desc: "Convert complex data into charts, maps, and trend summaries that are easier to interpret.",
    },
    {
      icon: TrendingUp,
      title: "Trend Reports",
      desc: "Continuous monitoring and reporting on emerging digital accessibility patterns.",
    },
  ];

  return (
    <div
      className={` font-sans selection:bg-[#00B389]/20 transition-colors duration-500 ${
        darkMode ? "bg-[#030605] text-white" : "bg-white text-slate-800"
      }`}
    >
      <Header />

      {/* 1. PREMIUM HERO: RESEARCH & INTELLIGENCE */}
      <section
        className={`relative py-10 overflow-hidden bg-[#F7FCF9] border-b transition-colors duration-500 ${
          darkMode
            ? "bg-[#030605] border-white/5"
            : "bg-[#F7FCF9] border-emerald-100"
        }`}
      >
        {/* Tech Grid Background */}
        <div
          className={`absolute inset-0 z-0 opacity-[0.05] pointer-events-none ${darkMode ? "invert" : ""}`}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-grid-res"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#00B389"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-res)" />
          </svg>
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/40 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/80 dark:bg-[#00B389]/10 border border-emerald-100 dark:border-[#00B389]/20 text-[#00B389] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-sm"
            >
              <Database className="w-3 h-3" /> Evidence-Led Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-4xl lg:text-[3rem] font-semibold tracking-tight leading-relaxed mb-8"
            >
              Research & &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B389] to-[#00FFC2]">
                Insights Hub.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-xl text-black dark:text-white font-light leading-relaxed mb-8 max-w-xl"
            >
              Building inclusive digital futures through
              <span className="text-[#00B389] font-medium ml-2">
                rigorous data and lived-experience research.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <button className="px-8 py-3 rounded-full bg-[#00B389] text-white font-bold text-sm uppercase tracking-widest shadow-[0_15px_35px_-10px_rgba(0,179,137,0.4)] hover:scale-105 transition-all">
                Access Library
              </button>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-bold tracking-tighter">
                  DATA.CORE.V3
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-[60px] animate-pulse group-hover:scale-110 transition-transform duration-1000" />
              <img
                src={ResearchLaptop}
                alt="Research Data Dashboard"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,179,137,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED DISSERTATION (Cinematic Banner, No Card) */}
      <section className="py-10 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/4">
            <div className="w-24 h-24 rounded-full border border-[#00B389]/20 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#00B389]/10 rounded-full animate-ping opacity-20" />
              <Sparkles className="w-8 h-8 text-[#00B389]" />
            </div>
          </div>

          <div className="md:w-3/4">
            <span className="text-[#00B389] text-[10px] font-bold uppercase tracking-widest mb-4 block">
              Featured Dissertation
            </span>
            <h3
              className={`text-3xl md:text-4xl font-semibold tracking-tighter leading-tight mb-6 transition-colors ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Exploring the Lived Experiences of Autistic Adults with Social
              Media Marketing in the UK
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#00B389]/50" />
              <p className="text-slate-400 font-light text-sm tracking-wide">
                Demonstrates a commitment to lived-experience research and
                practical insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE KNOWLEDGE INDEX (The "Card-less" Layout) */}
      <section className="py-10 bg-[#F7FCF9]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-start">
          {/* Left: Raw Typographic Hover List */}
          <div className="lg:col-span-7 flex flex-col space-y-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group relative p-8 cursor-pointer border border-transparent transition-all ease-in-out duration-1000 overflow-hidden rounded-xl ${
                  activeIndex === idx
                    ? "bg-[#00B389]/5 border-[#00B389]/20 shadow-[0_0_40px_-15px_rgba(0,179,137,0.2)]"
                    : "hover:bg-white/[0.02] border-b-white/5 opacity-40 hover:opacity-100"
                }`}
              >
                {/* Tech Grid Background (Visible on Hover/Active) */}
                <div
                  className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none transition-all duration-1000 ${activeIndex === idx ? "opacity-[0.08]" : "group-hover:opacity-[0.05]"}`}
                >
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`grid-${idx}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#00B389"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#grid-${idx})`}
                    />
                  </svg>
                </div>

                {/* Scanning Laser Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B389] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[1.5s] ease-linear pointer-events-none" />

                <div className="flex items-center gap-8 relative z-10">
                  {/* Digital Index Indicator */}
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-[10px] font-mono mb-1 transition-colors ${activeIndex === idx ? "text-[#00B389]" : "text-slate-600"}`}
                    >
                      SYS.DATA
                    </span>
                    <span
                      className={`text-xl font-bold font-mono transition-all ${activeIndex === idx ? "text-[#00B389] scale-125" : "text-slate-500"}`}
                    >
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4
                      className={`text-2xl md:text-3xl font-bold tracking-tighter transition-all duration-1000 flex items-center gap-3 ${
                        activeIndex === idx
                          ? darkMode
                            ? "text-white translate-x-1"
                            : "text-slate-900 translate-x-1"
                          : darkMode
                            ? "text-slate-400 group-hover:text-white group-hover:translate-x-1"
                            : "text-slate-500 group-hover:text-slate-900 group-hover:translate-x-1"
                      }`}
                    >
                      <span
                        className={`text-[#00B389] transition-opacity duration-500 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}
                      >
                        [
                      </span>
                      {feature.title}
                      <span
                        className={`text-[#00B389] transition-opacity duration-500 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}
                      >
                        ]
                      </span>
                    </h4>

                    {/* Data Status Bar */}
                    <div className="flex gap-1 mt-3">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-8 rounded-full transition-all duration-500 ${
                            activeIndex === idx
                              ? "bg-[#00B389] shadow-[0_0_10px_#00B389]"
                              : "bg-white/10 group-hover:bg-[#00B389]/30"
                          }`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tech Icon Overlay */}
                  <div
                    className={`transition-all duration-700 ${activeIndex === idx ? "opacity-100 rotate-0 scale-110" : "opacity-0 rotate-12 scale-90"}`}
                  >
                    {React.createElement(feature.icon, {
                      className: "w-8 h-8 text-[#00B389]",
                    })}
                  </div>
                </div>

                {/* Bottom Glow */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00B389]/50 to-transparent transition-all duration-700 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            ))}
          </div>

          {/* Right: Sticky Visual & Description Panel */}
          <div className="lg:col-span-5 sticky top-32 h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full relative"
              >
                {/* Abstract Data Glow for the Active Item */}
                <div className="absolute -inset-10 bg-gradient-to-br from-[#00B389]/10 to-transparent rounded-full blur-3xl -z-10" />

                <div className="w-16 h-16 rounded-2xl border border-[#00B389]/30 flex items-center justify-center bg-[#00B389]/5 mb-10">
                  {React.createElement(features[activeIndex].icon, {
                    className: "w-8 h-8 text-[#00B389]",
                    strokeWidth: 1.5,
                  })}
                </div>

                <h5
                  className={`text-2xl font-semibold mb-6 tracking-tight ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {features[activeIndex].title}
                </h5>

                <p
                  className={`text-lg font-light leading-relaxed mb-10 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {features[activeIndex].desc}
                </p>

                <button className="flex items-center gap-3 text-[#00B389] text-sm font-semibold uppercase tracking-widest hover:gap-5 transition-all">
                  Access Data <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM FINAL PORTAL: THE DISSERTATION ACCESS */}
      <section className="relative py-10 overflow-hidden border-t border-emerald-500/20">
        {/* Cinematic Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ResearchPortalBg})` }}
        />
        <div
          className={`absolute inset-0 z-1 ${
            darkMode ? "bg-black/75" : "bg-white/70"
          } `}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-[#00B389]/10 border border-[#00B389]/30 text-[#00B389] text-[11px] font-bold uppercase tracking-[0.3em] mb-12 shadow-xl backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4" /> Global Research Portal
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] mb-12 transition-colors ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Dissertation: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B389] via-[#00FFC2] to-[#00B389] italic font-serif font-light">
              Exploring the Lived Experiences of Autistic Adults with Social
              Media Marketing in the UK
            </span>
          </h2>

          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {["Researchers", "Institutions", "Charities", "Policymakers"].map(
                (target, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/5 text-sm font-medium backdrop-blur-md"
                  >
                    {target}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="px-8 py-2 rounded-full bg-[#00B389] text-white font-semibold text-md shadow-[0_20px_50px_-10px_rgba(0,179,137,0.5)] hover:scale-105 transition-all">
              Download Full Dissertation
            </button>
            <button
              className={`px-8 py-2 rounded-full border font-semibold text-md transition-all ${
                darkMode
                  ? "border-white/10 text-white hover:bg-white/5"
                  : "border-slate-200 text-slate-800 hover:bg-slate-50"
              }`}
            >
              Collaborate With Us
            </button>
          </div>
        </div>

        {/* Decorative Scanner Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B389] to-transparent animate-[pulse_3s_infinite]" />
      </section>

      <Footer />
    </div>
  );
}
