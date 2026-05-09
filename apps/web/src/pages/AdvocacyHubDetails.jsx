import React from "react";
import {
  Globe,
  Scale,
  Building2,
  GraduationCap,
  BookOpen,
  Megaphone,
  FileText,
  LayoutGrid,
  ExternalLink,
  Download,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAccessibility } from "@/hooks/useAccessibility.jsx";
import AdvocacyLaptop from "../../src/images/digital advoicy hub.png";
import AdvocacyCTABg from "../images/advocacy_cta_bg.png";

const AdvocacyHubDetails = () => {
  const { darkMode } = useAccessibility();

  return (
    <div
      className={` bg-white dark:bg-[#070A09] text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-emerald-100 dark:selection:bg-emerald-900/30 ${darkMode ? "dark" : ""}`}
    >
      <Header />
      {/* 1. HERO: PRECISION TYPOGRAPHY SECTION */}
      <section className="relative overflow-hidden py-10 bg-[#F7FCF9] dark:bg-[#070A09]">
        {/* Advanced Tech-Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="tech-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-emerald-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        {/* Dynamic Glowing Orbs - Light Green */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/40 dark:bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-emerald-100/30 dark:bg-emerald-600/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-emerald-400" /> Digital
              Ecosystem Resource
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[3.5rem] font-bold tracking-tighter leading-[0.95] text-slate-800 dark:text-white mb-10"
            >
              Advocacy &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
                Hub.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-black dark:text-white font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
            >
              A high-performance digital gateway bringing together global
              resources and systemic frameworks for neurodivergent awareness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="p-2 rounded-full bg-white/50 dark:bg-white/5 border border-emerald-100 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-emerald-500/5">
                <button className="px-8 py-2 rounded-full bg-emerald-400 text-white dark:text-slate-900 font-semibold text-lg flex items-center gap-3 transition-all hover:scale-105 hover:bg-emerald-500 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)]">
                  Explore The Hub <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Ultra Tech Laptop Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5, delay: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative group cursor-pointer">
              {/* Background Glow - Added ease-in-out for smoother transition */}

              {/* Image - Changed to group-hover and added ease-out */}
              <img
                src={AdvocacyLaptop}
                alt="Digital Advocacy Hub Dashboard Mockup"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORE HUB: ULTRA-TECH BENTO MESH */}
      <section className="py-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Awareness Campaigns - Massive Dynamic Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative p-12 rounded-[1rem] bg-white dark:bg-[#0D1311] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-700"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-100 dark:border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                <Megaphone className="w-8 h-8 text-[#00B389]" />
              </div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                Awareness Campaigns
              </h3>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl leading-relaxed mb-8">
                Designed to educate the public through digital storytelling,
                social media toolkits, and accessible learning content that
                challenge stereotypes.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Digital Storytelling
                </span>
                <span className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Social Toolkits
                </span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700">
              <Megaphone className="w-96 h-96 text-[#00B389]" />
            </div>
          </motion.div>

          {/* Policy Discussions - High Intensity Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 p-12 rounded-[1rem] bg-gradient-to-br from-[#00B389] to-[#008F6D] text-white shadow-[0_20px_60px_-15px_rgba(0,179,137,0.4)] flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/30">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">
                Policy <br />
                Discussions
              </h3>
              <p className="text-emerald-50 font-light leading-relaxed text-lg">
                Exploring legislation, accessibility standards, workplace
                rights, and inclusive public services.
              </p>
            </div>
            <ArrowRight
              className="w-10 h-10 mt-10 group-hover:translate-x-3 transition-transform"
              strokeWidth={1}
            />
          </motion.div>

          {/* Workplace Inclusion - Vertical Tech Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 p-12 rounded-[1rem] bg-white dark:bg-[#0D1311] border border-slate-100 dark:border-white/5 shadow-xl group hover:bg-slate-50 dark:hover:bg-[#111816] transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-10 border border-slate-200 dark:border-white/10 group-hover:border-emerald-500/50 transition-colors">
              <Building2 className="w-7 h-7 text-[#00B389]" />
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tighter">
              Workplace <br />
              Inclusion
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Training guides, hiring frameworks, and wellbeing recommendations
              for neuroinclusive cultures.
            </p>
          </motion.div>

          {/* University Accessibility - Contrast Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-12 rounded-[1rem] bg-slate-900 dark:bg-emerald-950/10 border border-white/5 dark:border-emerald-500/20 shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
              <div className="w-24 h-24 rounded-[01rem] bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <GraduationCap className="w-12 h-12 text-slate-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">
                  University Accessibility Guides
                </h3>
                <p className="text-xl text-emerald-100/60 dark:text-emerald-500/70 font-light leading-relaxed">
                  Supporting students and institutions with best practices for
                  learning accommodations and campus inclusion.
                </p>
              </div>
            </div>
            {/* Animated Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
          </motion.div>

          {/* Duo Detail Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 p-12 rounded-[1rem] bg-white dark:bg-[#0D1311] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all"
          >
            <BookOpen
              className="w-12 h-12 text-[#00B389] mb-8"
              strokeWidth={1}
            />
            <h3 className="text-2xl font-bold mb-4">
              Public Education Materials
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Making complex topics easier for families, professionals, and the
              community to understand through structured digital documentation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 p-12 rounded-[1rem] bg-white dark:bg-[#0D1311] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all"
          >
            <Globe className="w-12 h-12 text-[#00B389] mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">
              Community Campaign Tools
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Downloadable templates and petition tools designed to advocate for
              positive systemic change across global platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ASSETS & RESOURCES: HIGH-END INTERACTIVE LIST */}
      <section className="py-10 bg-[#F7FCF9] dark:bg-[#050807] border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
        {/* Abstract Background Detail */}
        <div className="absolute top-1/2 left-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-6">
                <Layers className="w-4 h-4" /> Professional Assets
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">
                Actionable{" "}
                <span className="italic font-serif font-light">Resources.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Practical toolkits and materials to empower individual and
                collective advocacy.
              </p>
            </div>
            <button className="group flex items-center gap-3 text-[#00B389] font-bold uppercase tracking-widest text-[11px] pb-3 border-b-2 border-emerald-500/30 hover:border-emerald-500 transition-all">
              Access All Infrastructure{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-2">
            {[
              {
                label: "Blog Articles",
                icon: MessageSquare,
                sub: "Insights & Stories",
                count: "24+",
              },
              {
                label: "Case Studies",
                icon: LayoutGrid,
                sub: "Real-World Impact",
                count: "12",
              },
              {
                label: "Downloadable Guides",
                icon: Download,
                sub: "PDF Documentation",
                count: "18",
              },
              {
                label: "Petition Tools",
                icon: ExternalLink,
                sub: "Digital Action",
                count: "Active",
              },
              {
                label: "Campaign Templates",
                icon: FileText,
                sub: "Standardized Frameworks",
                count: "08",
              },
              {
                label: "Training Modules",
                icon: Zap,
                sub: "Interactive Learning",
                count: "New",
              },
            ].map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between py-10 border-b border-slate-100 dark:border-white/5 cursor-pointer hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10 px-4 rounded-xl transition-all"
              >
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0D1311] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:rotate-6 transition-all duration-500">
                      <res.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-500" />
                    </div>
                    {res.count === "New" && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-black rounded-full uppercase tracking-tighter">
                        New
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                      {res.label}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      {res.sub}{" "}
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />{" "}
                      {res.count} items
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CTA: THE ACTION PORTAL (Light Green Edition) */}
      <section className="py-10 relative overflow-hidden border-t border-emerald-50/10">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AdvocacyCTABg})` }}
        />

        {/* Dynamic Light Green Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/20 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lime-100/10 dark:bg-lime-500/5 rounded-full blur-[120px] pointer-events-none z-2" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-white dark:bg-emerald-500 rounded-[1rem] flex items-center justify-center mx-auto mb-12 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.2)] border border-emerald-50"
          >
            <Megaphone className="w-10 h-10 text-emerald-400 dark:text-slate-900" />
          </motion.div>

          <h2 className="text-5xl md:text-5xl font-bold tracking-tighter mb-10 leading-[1] text-slate-800 dark:text-white">
            Be the Catalyst <br />
            <span className="text-emerald-400 dark:text-black italic font-serif font-light">
              for Systemic Change.
            </span>
          </h2>

          <p className="text-xl text-black dark:text-white font-light mb-20 max-w-2xl mx-auto leading-relaxed">
            NeuroDigital Support is the global standard for sensory-aware
            living. Join our advocacy hub to drive positive impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-8 py-2 rounded-full bg-emerald-400 text-white font-semibold text-lg shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)] hover:scale-105 active:scale-95 transition-all">
              Start Your Campaign
            </button>
            <button className="px-8 py-2 rounded-full bg-white border border-emerald-100 text-emerald-500 font-semibold text-lg hover:bg-emerald-50 transition-all">
              Partner with Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdvocacyHubDetails;
