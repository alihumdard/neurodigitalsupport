import React, { useState } from "react";
import {
  Activity,
  BarChart3,
  PieChart,
  Hash,
  Map,
  Bell,
  ArrowRight,
  Terminal,
  Sparkles,
  Globe,
  Database,
  Network,
  ShieldAlert,
  Users,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAccessibility } from "@/hooks/useAccessibility.jsx";
import LaptopImg from "../images/social.png";
import CtaBg from "../images/social_cta_bg.png";

export default function SocialListeningDetails() {
  const { darkMode } = useAccessibility();
  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0.8, 1], [-50, 150]);

  const features = [
    {
      icon: Activity,
      title: "Trend Graphs",
      desc: "Visualise how topics rise or decline over time, helping researchers identify critical changes in public discussion.",
    },
    {
      icon: Network,
      title: "Topic Clusters",
      desc: "AI-grouped conversations revealing common themes like workplace burnout, sensory overload, or online harassment.",
    },
    {
      icon: Hash,
      title: "Keyword Mapping",
      desc: "Highlights the most frequently used words and linguistic anchors across neurodivergent communities.",
    },
    {
      icon: Map,
      title: "Heatmaps",
      desc: "Visual distributions displaying exactly where conversations and community engagements are most active.",
    },
    {
      icon: Bell,
      title: "Community Alerts",
      desc: "Instant notification protocols when important neurodiversity issues suddenly gain momentum.",
    },
    {
      icon: Users,
      title: "Researcher View",
      desc: "Tailored analytical environments specifically designed for deep academic and clinical research needs.",
    },
    {
      icon: Globe,
      title: "Organisation View",
      desc: "Strategic dashboards optimized for corporate, non-profit, and governmental decision-making.",
    },
    {
      icon: ShieldAlert,
      title: "Admin Controls",
      desc: "Comprehensive tools for system moderation, reporting, and secure digital management.",
    },
  ];

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#00B389]/20 transition-colors duration-500 overflow-x-hidden ${
        darkMode ? "bg-[#030605] text-white" : "bg-white text-slate-900"
      }`}
    >
      <Header />

      {/* 1. HERO SECTION: CLEAN LIGHT GREEN + LAPTOP */}
      <section
        className={`relative flex items-center py-10 overflow-hidden transition-colors duration-700 ${
          darkMode ? "bg-[#030605]" : "bg-[#F7FCF9]"
        }`}
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-emerald-500/20 text-[#00B389] text-[10px] font-bold uppercase tracking-[0.1em] mb-10">
                  <Activity className="w-3 h-3" /> Dashboard.V5
                </div>
                <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold font-sans italic tracking-tight leading-[1.1] mb-8">
                  Social Listening &nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B389] to-[#00B389]/60">
                    Dashboard.
                  </span>
                </h1>
                <h3 className="text-2xl font-semibold text-[#00B389] mb-6 tracking-tight">
                  Real-Time Neurodiversity Insights Powered by AI
                </h3>
                <p
                  className={`text-xl md:text-lg font-light tracking-tight max-w-xl mb-12 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  A smart analytics dashboard designed to monitor public
                  conversations and identify emerging themes affecting autistic
                  and neurodivergent communities.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-2 bg-[#00B389] text-white font-semibold text-sm uppercase tracking-[0.1em] rounded-full shadow-[0_20px_40px_-10px_rgba(0,179,137,0.4)]"
                >
                  Enter Command Suite
                </motion.button>
              </motion.div>
            </div>

            {/* Right Laptop Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="lg:w-[450px] relative"
            >
              <div className="relative group">
                <img
                  src={LaptopImg}
                  alt="System Mockup"
                  className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. NEURO-SEMANTIC LOGIC: FINAL ULTRA-TECH SPACE */}
      <section
        className={`relative flex flex-col justify-center overflow-hidden border-t border-[#00B389]/15 transition-colors duration-1000 ${
          darkMode ? "bg-[#030605] text-white" : "bg-[#FAFCFB] text-slate-900"
        }`}
      >
        {/* Kinetic Tech Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#00B389 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Moving Light Leaks */}
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-10%", "10%", "-10%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,179,137,0.05)_0%,transparent_50%)]"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto py-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Enhanced Technical Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              {/* Vertical Scanner Line */}
              <motion.div
                animate={{
                  height: ["0%", "100%", "0%"],
                  top: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 w-[1px] bg-gradient-to-b from-transparent via-[#00B389] to-transparent opacity-40"
              />

              <h2 className="text-5xl md:text-5xl font-semibold tracking-tight mb-10 leading-tight">
                Intelligent &nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B389] to-[#00B389]/40">
                  Monitoring.
                </span>
              </h2>

              <div className="space-y-8 max-w-xl">
                <p className="text-lg md:text-xl font-light text-black dark:text-white leading-relaxed border-l border-white/5 italic">
                  Utilising artificial intelligence to monitor and analyse
                  public online conversations relating to autism,
                  neurodivergence, sensory challenges, and digital experiences
                  across global networks.
                </p>
                <p className="text-base text-black dark:text-white leading-relaxed">
                  By gathering publicly available discussions from platforms
                  such as Reddit, Facebook, and LinkedIn, the system helps
                  organisations understand emerging concerns, trends, and
                  community sentiment in real time.
                </p>

                {/* Ultra-Thin Glass Data Panels */}
                <div className="grid grid-cols-2 gap-6 pt-10">
                  <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden group/panel">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B389]/30 to-transparent" />
                    <span className="text-[9px] font-mono text-black dark:text-white uppercase tracking-widest block mb-2">
                      Ingestion_Sources
                    </span>
                    <div className="flex flex-col gap-1 text-sm font-semibold tracking-tight dark:text-white text-black">
                      <span>• Reddit</span>
                      <span>• Facebook</span>
                      <span>• LinkedIn</span>
                    </div>
                  </div>
                  <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden group/panel">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B389]/30 to-transparent" />
                    <span className="text-[9px] font-mono text-black dark:text-white uppercase tracking-widest block mb-2">
                      Primary_Tracks
                    </span>
                    <div className="flex flex-col gap-1 text-sm font-semibold tracking-tight dark:text-white text-black">
                      <span>• Autism Discussions</span>
                      <span>• Sensory Challenges</span>
                      <span>• Online Sentiment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Final Neural Web Visualizer */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Deep 3D Glow */}
              <div className="absolute w-[500px] h-[500px] bg-[#00B389]/[0.03] rounded-full blur-[120px] animate-pulse" />

              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00B389" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00B389" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Complex Orbits */}
                  {[180, 140, 100].map((r, i) => (
                    <motion.circle
                      key={i}
                      cx="200"
                      cy="200"
                      r={r}
                      stroke="#00B389"
                      strokeWidth="0.5"
                      fill="none"
                      opacity={0.1 - i * 0.02}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}

                  {/* Neural Grid Nodes */}
                  {[
                    { x: 150, y: 100 },
                    { x: 250, y: 120 },
                    { x: 320, y: 200 },
                    { x: 250, y: 300 },
                    { x: 120, y: 280 },
                    { x: 80, y: 180 },
                  ].map((node, i) => (
                    <g key={i}>
                      {/* Connection with Data Pulse */}
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={node.x}
                        y2={node.y}
                        stroke="#00B389"
                        strokeWidth="0.5"
                        opacity="0.15"
                      />
                      <motion.circle
                        r="2"
                        fill="#00B389"
                        animate={{
                          cx: [200, node.x],
                          cy: [200, node.y],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut",
                        }}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="8"
                        fill="url(#nodeGlow)"
                      />
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="2"
                        fill="#00B389"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    </g>
                  ))}

                  {/* Central Nucleus with HUD */}
                  <g className="origin-center">
                    <motion.path
                      d="M 160 200 A 40 40 0 0 1 240 200"
                      stroke="#00B389"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.4"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "200px 200px" }}
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="30"
                      fill="#00B389"
                      opacity="0.03"
                    />
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="15"
                      fill="#00B389"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMMERSIVE FEATURES: ENDLESS FLOW */}
      <section className="relative py-10 bg-[#F7FCF9]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                viewport={{ margin: "-100px" }}
                className="group relative py-24 border-t border-[#00B389]/10 flex flex-col lg:flex-row items-center gap-24 cursor-pointer"
              >
                {/* Visual Number on Left */}
                <div className="lg:w-1/4 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-[8rem] font-bold leading-none opacity-5 group-hover:opacity-10 transition-all duration-700">
                      0{idx + 1}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <feature.icon className="w-12 h-12 text-[#00B389] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" />
                    </div>
                  </div>
                </div>

                {/* Content on Right */}
                <div className="lg:w-3/4 text-center lg:text-left transition-all duration-700">
                  <h4 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-[#00B389] transition-colors duration-700">
                    {feature.title}
                  </h4>
                  <p className="text-lg md:text-xl font-light text-slate-500 max-w-xl leading-relaxed group-hover:text-slate-400 transition-colors duration-700">
                    {feature.desc}
                  </p>
                  <div className="mt-12 w-20 h-[1px] bg-[#00B389]/30 group-hover:w-full group-hover:bg-[#00B389] transition-all duration-1000 ease-in-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B389]/0 via-[#00B389]/[0.02] to-[#00B389]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA: SOCIAL INTELLIGENCE HUB (PIXEL PERFECT RESEARCH STYLE) */}
      <section className="relative py-10 flex items-center justify-center overflow-hidden border-t border-white/5">
        {/* Parallax Background Container - Expanded for safe scroll range */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0.8, 1], [-50, 150]) }}
          className="absolute inset-0 z-0 h-[130%] -top-[15%]"
        >
          <img
            src={CtaBg}
            alt="Cinematic Background"
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605] via-[#030605]/20 to-[#030605]" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B389]/10 border border-[#00B389]/20 text-[#00B389] text-[10px] font-bold uppercase tracking-[0.5em] mb-12 backdrop-blur-xl"
          >
            <Sparkles className="w-3.5 h-3.5" /> Social Intelligence Hub
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] mb-12 text-white">
            Empowering Global Communities: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B389] via-[#00FFC2] to-[#00B389] italic font-serif font-light">
              Exploring the Digital Footprint of Neurodiversity
            </span>
          </h2>

          {/* Audience Tags */}
          <div className="flex flex-col items-center gap-8 mb-20">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Advocates",
                "Community Leaders",
                "Tech Ethics",
                "Neuro-Policy",
              ].map((target, i) => (
                <span
                  key={i}
                  className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-2xl transition-all hover:bg-[#00B389]/10 hover:border-[#00B389]/30"
                >
                  {target}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-3 rounded-full bg-[#00B389] text-white font-bold text-md shadow-[0_20px_50px_-10px_rgba(0,179,137,0.5)] transition-all"
            >
              Access The Suite
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-3 rounded-full border border-white/10 text-white font-bold text-md transition-all backdrop-blur-md"
            >
              Request Strategic Audit
            </motion.button>
          </div>
        </div>

        {/* Decorative Scanner Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B389] to-transparent animate-pulse" />
      </section>

      <Footer />
    </div>
  );
}
