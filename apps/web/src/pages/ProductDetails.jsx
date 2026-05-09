import React, { useEffect } from "react";
import altitokLaptop from "../../src/images/altitok.png"; 
import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  MonitorPlay,
  ShieldAlert,
  EyeOff,
  Clock,
  Bot,
  ShieldCheck,
  LockKeyhole,
  Users,
  Moon,
  Sun,
  Shield,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAccessibility } from "../hooks/useAccessibility";

// New high-end placeholder image representing a luxury tech landscape

// --- Clean SaaS Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// --- Helper Component: Simplified high-end 3D Laptop Image Mockup ---
const LaptopRender = () => {
  return (
    <div className="relative mx-auto flex items-center justify-center w-full max-w-[650px] ">
      {/* High-quality placeholder URL representing a real, high-end 3D laptop render */}
      <img
        src={altitokLaptop}
        alt="High End 3D Laptop Render"
        className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(16,185,129,0.15)] transition-transform duration-700 hover:scale-[1.03]"
      />
    </div>
  );
};

export default function ProductDetails() {
  const { darkMode } = useAccessibility();

  return (
    <div
      className={` transition-colors duration-700 font-sans antialiased text-slate-800 dark:text-slate-200 selection:bg-emerald-100 dark:selection:bg-emerald-900 ${darkMode ? "dark" : ""}`}
    >
      <Header />


      {/* 1. HERO SECTION WITH BACKGROUND IMAGE AND NO CARDS */}
      <section className="relative w-full min-h-[90vh] bg-[#FAFDFA] dark:bg-[#070B09] flex items-center justify-between pt-16 md:pt-20">
        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:w-[45%] text-left"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100/50 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <Shield className="w-4 h-4" /> Sensory-Aware Social Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.05] text-[#0A201A] dark:text-slate-50 mb-8">
              Welcome to{" "}
              <span className="text-emerald-600 dark:text-emerald-500">
                AltiTok.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-light max-w-2xl">
              AltiTok is a new kind of social media platform designed around
              safety, calm interaction, and meaningful connection rather than
              addictive engagement.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-extralight max-w-2xl">
              We reimagine social media by replacing addictive design with
              emotionally safer and sensory-conscious features.
            </p>
            <div className="flex flex-wrap items-center justify-start gap-5">
              {/* 1. PRIMARY BUTTON: "Create free account" (Luxury Emerald) */}
              <button
                className="
      group
      px-4 py-2
      rounded-full
      font-medium text-base
      flex items-center justify-center gap-2.5
      transition-all duration-300 ease-out
      text-white
      
      /* Standard State with Depth */
      bg-gradient-to-br from-emerald-500 to-emerald-700
      border border-emerald-400 dark:border-emerald-700
      
      /* Premium Multi-Shadow (Shine + Glow) */
      shadow-[0_1px_1px_rgba(255,255,255,0.1)_inner,_0_8px_30px_rgb(16,185,129,0.3)]
      
      /* Hover Interactions: Premium Shine, Colored Border, Scale */
      hover:scale-105
      hover:border-emerald-300 dark:hover:border-emerald-600
      hover:shadow-[0_1px_1px_rgba(255,255,255,0.05)_inner,_0_12px_40px_rgb(16,185,129,0.4)]
      
      /* Active State (Click): Compression */
      active:scale-95
      active:shadow-[0_1px_1px_rgba(255,255,255,0.05)_inner,_0_4px_10px_rgb(16,185,129,0.2)]
    "
              >
                Create free account
                <ArrowRight
                  className="
        w-5 h-5
        text-white/80
        group-hover:text-white
        group-hover:translate-x-1
        transition-transform duration-300 ease-out
      "
                />
              </button>

              {/* 2. SECONDARY BUTTON: "Learn more" (Luxury Glass) */}
              <button
                className="
      px-4 py-2
      rounded-full
      font-medium text-base
      transition-all duration-300 ease-out
      text-slate-800 dark:text-slate-200
      
      /* Standard State: Subdued, Glass-like Depth */
      bg-slate-100 dark:bg-[#111312]
      border border-slate-200 dark:border-white/5
      
      /* Hover Interactions: Colored Border, Inner Shine, Scale */
      hover:border-emerald-300 dark:hover:border-emerald-600
      hover:text-emerald-600
      hover:shadow-inner
      hover:scale-105
      
      /* Active State (Click): Compression */
      active:scale-95
    "
              >
                Learn more
              </button>
            </div>
          </motion.div>

          {/* New Simplified 3D Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-[45%] flex justify-center lg:justify-end w-full"
          >
            <LaptopRender />
          </motion.div>
        </div>
      </section>

      <main className="relative z-10">
        {/* 2. CORE FEATURES (FLOW LAYOUT, NO CARDS) */}
        <section className="bg-white dark:bg-[#070B09] border-t border-slate-100 dark:border-white/5 px-6 py-28 md:py-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0A201A] dark:text-white mb-6 tracking-tight">
                Emotionally Safer Experience
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light mx-auto leading-relaxed">
                Take control of your digital environment. AltiTok gives you the
                tools to filter, slow down, and customize your feed to match
                your comfort level.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              {[
                {
                  id: "01",
                  icon: SlidersHorizontal,
                  title: "Adjustable Scroll Speed",
                  desc: "Control feed movement for a calmer browsing experience.",
                },
                {
                  id: "02",
                  icon: MonitorPlay,
                  title: "Reduced Motion Feeds",
                  desc: "Limit animations and fast-moving content.",
                },
                {
                  id: "03",
                  icon: ShieldAlert,
                  title: "Trigger & Content Filters",
                  desc: "Hide content categories that may cause distress.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col md:flex-row items-center gap-10 border-b border-slate-100 dark:border-white/5 pb-16 last:border-none"
                >
                  <div className="text-5xl font-bold text-emerald-100 dark:text-emerald-950/40">
                    {item.id}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-medium text-[#0A201A] dark:text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 dark:bg-[#0B100E] border border-slate-100 dark:border-white/[0.03] flex items-center justify-center shadow-inner flex-shrink-0">
                    <item.icon
                      className="w-7 h-7 text-emerald-600 dark:text-emerald-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. ADDITIONAL FEATURES GRID (CLEAN ASYMMETRICAL LAYOUT, NO CARDS) */}
        <section className="bg-[#FAFDFA] dark:bg-[#040806] px-6 py-28 md:py-10 border-t border-slate-100 dark:border-white/5">
          <div className="max-w-[1100px] mx-auto relative">
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0A201A] dark:text-white mb-6 tracking-tight">
                Meaningful Connection
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                Connect without the pressure. We remove visible metrics and
                introduce mindful communication tools to foster a healthier
                community.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
              {[
                {
                  icon: EyeOff,
                  title: "Hidden Likes & Followers",
                  desc: "Reduce social pressure and comparison.",
                },
                {
                  icon: Clock,
                  title: "Comment Delay System",
                  desc: "Encourages thoughtful and respectful communication.",
                },
                {
                  icon: Bot,
                  title: "AI Tone Moderation",
                  desc: "Detects hostile language and promotes healthier conversations.",
                },
                {
                  icon: ShieldCheck,
                  title: "Shield Mode for Creators",
                  desc: "Extra protection tools for content creators.",
                },
                {
                  icon: LockKeyhole,
                  title: "Safe Messaging",
                  desc: "Optional message controls and wellbeing settings.",
                },
                {
                  icon: Users,
                  title: "Community Spaces",
                  desc: "Interest-based groups built around inclusion.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeUp} className="group">
                  <div className="flex items-start gap-5 mb-5 border-l-2 border-emerald-500 dark:border-emerald-700 pl-6 group-hover:border-emerald-600 transition-colors">
                    <feature.icon
                      className="w-6 h-6 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-xl font-medium text-[#0A201A] dark:text-white tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light pl-17">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. EXACT CTA SECTION */}
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
      </main>
      <Footer />
    </div>
  );
}
