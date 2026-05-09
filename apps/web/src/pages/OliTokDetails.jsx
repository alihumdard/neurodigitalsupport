import React, { useEffect } from "react";
import oiltokLaptop from "../../src/images/oiltok.png";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  MessageSquare,
  Video,
  CalendarCheck,
  Settings,
  Star,
  ArrowRight,
  Shield,
  Moon,
  Sun,
  CheckCircle2,
  Globe,
  HeartPulse,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAccessibility } from "../hooks/useAccessibility";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OliTokDetails() {
  const { darkMode } = useAccessibility();

  return (
    <div
      className={` transition-colors duration-700 font-sans antialiased selection:bg-emerald-100 dark:selection:bg-emerald-900 ${darkMode ? "dark" : ""}`}
    >
      <Header />
      {/* 1. HERO SECTION WITH MACBOOK & LIFESTYLE BG */}
      <section className="relative bg-[#FAFDFA] dark:bg-[#070B09] w-full flex items-center overflow-hidden pt-16 md:pt-20">


        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20 py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8">
              <HeartPulse className="w-4 h-4" /> Neurodivergent Support Network
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold tracking-tighter leading-[1.05] text-[#0A201A] dark:text-white mb-8">
              OliTok<span className="text-emerald-500">.</span> Friendship{" "}
              <br /> Reimagined.
            </h1>
            <p className="text-lg md:text-xl text-black dark:text-white font-light mb-12 max-w-xl leading-relaxed">
              OliTok is a safe, structured companionship platform connecting
              neurodivergent individuals with trained volunteers in a respectful
              online environment.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="px-5 py-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-medium shadow-[0_12px_40px_-8px_rgba(16,185,129,0.5)] border border-emerald-400 hover:scale-105 transition-all flex items-center gap-3">
                Request Support <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-5 py-2 rounded-full bg-white dark:bg-[#111312] text-slate-700 dark:text-slate-200 font-medium border border-slate-200 dark:border-white/10 hover:bg-slate-50 transition-all">
                Become a Volunteer
              </button>
            </div>
          </motion.div>

          {/* Realistic Latest Laptop Render */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]"></div>
              {/* Replace with actual image URL if you host the one generated earlier */}
              <img
                src={oiltokLaptop}
                className="w-full h-auto drop-shadow-2xl relative z-10"
                alt="OliTok Interface"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ADAPTIVE FEATURES - EXPANSIVE LIST (NO CARDS) */}
      <section className="bg-white dark:bg-[#070B09] py-10 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0A201A] dark:text-white mb-6">
              Structured Companionship
            </h2>
            <p className="text-lg text-slate-500 font-light">
              Built on trust, dignity, and emotional safety.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-24"
          >
            {[
              {
                id: "01",
                icon: ShieldCheck,
                title: "Volunteer Screening & Verification",
                desc: "Every volunteer undergoes identity checks, safeguarding reviews, and behavioural suitability assessments before acceptance.",
              },
              {
                id: "02",
                icon: Star,
                title: "Mandatory Training Programme",
                desc: "All approved volunteers complete training in autism awareness, neurodiversity inclusion, and sensory-sensitive support.",
              },
              {
                id: "03",
                icon: Users,
                title: "Smart Matching System",
                desc: "Users are paired with volunteers based on shared interests, age group, personality traits, and support goals.",
              },
              {
                id: "04",
                icon: MessageSquare,
                title: "Safe Chat & Messaging Tools",
                desc: "Secure in-platform messaging with moderation filters, wellbeing prompts, and reporting tools.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="text-8xl font-black text-emerald-500/10 dark:text-emerald-500/5 lg:w-1/3 text-center">
                  {feature.id}
                </div>
                <div className="lg:w-2/3 text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-inner">
                    <feature.icon
                      className="w-7 h-7 text-emerald-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0A201A] dark:text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TESTIMONIALS & PRINCIPLES - LUXURY FLOW */}
      <section className="bg-[#FAFDFA] dark:bg-[#040806] py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-[#0A201A] dark:text-white mb-10">
              Why NeuroDigital Support
            </h2>
            <div className="space-y-8">
              {[
                "Calm by design",
                "Inclusive by default",
                "Safe digital environments",
                "Ethical use of AI",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-xl font-light text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-white/5 pb-6"
                >
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" /> {text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative px-5 py-8 rounded-[0.5rem] bg-white dark:bg-[#0B100E] border border-slate-100 dark:border-white/5 shadow-2xl">
            <div className="absolute top-[7px] left-5 text-7xl font-serif text-emerald-100 dark:text-emerald-900/40">
              “
            </div>
            <p className="text-2xl italic font-light text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Finally, technology that feels calm instead of exhausting. This
              platform could redefine neurodivergent wellbeing services.
            </p>
            <div className="text-emerald-600 font-semibold tracking-widest uppercase text-sm">
              — Early User & Research Pro
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION (JOIN PLATFORM) */}
      <section className="relative w-full overflow-hidden bg-[#FAFDFA] dark:bg-[#070B09] border-t border-slate-100 dark:border-white/5 px-6 py-10 md:py-10 z-0">
        {/* Ultra-Tech, Meaningful Connection Background Picture with Aura Glow */}
        <div className="absolute inset-0 z-[-1] transition-opacity duration-1000">
          <img
            src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2560&auto=format&fit=crop"
            alt="Calm team connection and focus"
            className="w-full h-full object-cover  opacity-70 dark:opacity-20 pointer-events-none"
          />
          {/* Expansive Ambient Emerald Aura Blur */}
          {/* Matte Frosted Glass Overlay */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[1100px] mx-auto text-center"
        >
          {/* Jewel-like Premium Glowing Badge Icon Container */}
          <div className="w-20 h-20 bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-950 dark:to-transparent rounded-[1rem] flex items-center justify-center mx-auto mb-10 border border-emerald-100 dark:border-emerald-900/50 shadow-[0_10px_40px_-5px_rgba(16,185,129,0.15)] dark:shadow-none transition-transform group-hover:scale-110">
            <Shield
              className="w-10 h-10 text-emerald-600 dark:text-emerald-400"
              strokeWidth={1.5}
            />
          </div>

          {/* Refined Expansive Typography */}
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-semibold tracking-tight mb-3 text-[#0A201A] dark:text-slate-50 leading-[1.05]">
            Join Platform
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-black dark:text-white font-light max-w-xl mx-auto mb-8">
            Create your free account today and reclaim your digital wellbeing
            with sensory-aware design.
          </p>

          {/* Luxury High-End Professional Button */}
          <button
            className="
              group
              px-5 py-2
              rounded-full
              font-medium text-lg
              flex items-center justify-center gap-3 mx-auto
              transition-all duration-300 ease-out
              text-white
              
              /* Luxury Emerald Gradient */
              bg-gradient-to-br from-emerald-500 to-emerald-700
              border border-emerald-400 dark:border-emerald-600
              
              /* Premium Multi-layered Shadow (Shine + Glow) for Tangible Depth */
              shadow-[0_1px_1px_rgba(255,255,255,0.2)_inner,_0_12px_40px_-8px_rgba(16,185,129,0.5)]
              
              /* Hover Interactions: Dynamic Scale, Colored Border, and Polish Shine */
              hover:scale-105
              hover:border-emerald-300 dark:hover:border-emerald-500
              hover:shadow-[0_1px_1px_rgba(255,255,255,0.3)_inner,_0_20px_50px_-10px_rgba(16,185,129,0.6)]
              
              /* Active State (Click Compression) */
              active:scale-95
              active:shadow-[0_1px_1px_rgba(255,255,255,0.2)_inner,_0_5px_15px_rgba(16,185,129,0.2)]
            "
          >
            Create Free Account
            <ArrowRight
              className="
                w-5 h-5
                text-white/80
                group-hover:text-white
                group-hover:translate-x-1.5
                transition-transform duration-300 ease-out
              "
            />
          </button>
        </motion.div>
      </section>

      {/* 5. FOOTER - CLEAN SAAS LOOK */}
      <Footer />
    </div>
  );
}
