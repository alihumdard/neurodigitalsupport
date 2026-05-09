import React from "react";
import {
  Activity,
  Mic,
  ArrowRight,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Layers,
  Globe,
  Tablet,
  ChevronRight,
  FileText,
  HeartPulse,
  Users,
  Bell,
  BarChart3,
  Smartphone,
  AppWindow,
  AlertTriangle,
  ClipboardCheck,
  Layout,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAccessibility } from "@/hooks/useAccessibility.jsx";
import OliTokDetailsLaptop from "@/images/carelogingapp.png";

// Standard Grid Background for Tech Depth

const features = [
  {
    icon: Activity,
    title: "Daily Activity Logs",
    desc: "Record meals, routines, appointments, medication prompts, and participation in activities throughout the day.",
    tags: ["Real-Time Updates", "Routine Tracking"],
  },
  {
    icon: HeartPulse,
    title: "Mood & Behaviour Tracking",
    desc: "Capture patterns in emotional well-being and provide structured observations on communication and support responses.",
    tags: ["Proactive Support", "Behaviour Notes"],
  },
  {
    icon: AlertTriangle,
    title: "Sensory Trigger Reports",
    desc: "Record environmental factors such as noise, lighting, crowding, or disruptions that may have affected a person’s well-being.",
    tags: ["Safeguarding", "Environmental Logs"],
  },
  {
    icon: Mic,
    title: "Voice Input Logging",
    desc: "Help busy staff add notes quickly without typing, while keeping teams informed instantly across all devices.",
    tags: ["Accessibility", "Hands-Free"],
  },
  {
    icon: ShieldCheck,
    title: "Incident Reporting",
    desc: "Create secure, time-stamped records to safeguard against accidents or critical events for professional audits.",
    tags: ["Audit-Ready", "Secure"],
  },
];
export default function CareLoggingDetails() {
  const { darkMode } = useAccessibility();
  const benefits = [
    {
      icon: Users,
      title: "Designed for Everyone",
      desc: "Simple enough for non-technical users.",
    },
    {
      icon: BarChart3,
      title: "Built for Insights",
      desc: "Powerful enough for professional reporting.",
    },
  ];
  return (
    <div
      className={` bg-white dark:bg-[#070A09] text-[#0D1F1A] dark:text-slate-200 font-sans antialiased selection:bg-emerald-100 dark:selection:bg-emerald-900/30 ${darkMode ? "dark" : ""}`}
    >
      <Header />
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#FAFDFA] dark:bg-[#070A09] w-full py-10 flex items-center overflow-hidden">
        {/* Ambient Emerald Glow */}

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20">
          {/* Content Side */}
          <div className="lg:w-[45%] text-left">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
              <ClipboardCheck className="w-4 h-4" /> Professional Care Companion
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[3rem] font-bold tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8">
              Smarter Support for <br />
              <span className="text-emerald-600 dark:text-emerald-500">
                Care Homes.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-black dark:text-white font-light mb-12 max-w-xl leading-relaxed">
              A practical digital tool created for care homes, supported living
              environments, and frontline support staff who need simple but
              reliable record-keeping systems.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-medium shadow-[0_12px_40px_-8px_rgba(16,185,129,0.5)] border border-emerald-400 dark:border-emerald-700 flex items-center gap-3">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-2 rounded-full bg-white dark:bg-[#111312] text-slate-700 dark:text-slate-200 font-medium border border-slate-200 dark:border-white/10 shadow-sm">
                View Mobile App
              </button>
            </div>
          </div>

          {/* Realistic 3D Mockup Side */}
          <div className="lg:w-[55%] flex justify-center lg:justify-end relative">
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] h-12 bg-emerald-900/10 blur-[50px] rounded-full" />
            <img
              src={OliTokDetailsLaptop}
              alt="Care Logging App Premium Dashboard"
              className="relative z-10 w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. EXPANSIVE FEATURES FLOW (NO CARDS) */}
      <section className="relative max-w-6xl mx-auto py-10 bg-white dark:bg-[#070A09] border-t border-slate-100 dark:border-white/5">
        {/* Background Ambient Aura */}

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT SIDE: Sticky Professional Context */}
          <div className="sticky top-40 z-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8">
              <Layout className="w-3.5 h-3.5" /> Smarter Support Systems
            </div>

            <h2 className="text-5xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8">
              Built for <br />
              <span className="text-[#00B389]">Professional Care.</span>
            </h2>

            <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md mb-12">
              A practical digital tool created for care homes, supported living,
              and frontline staff who require simple yet reliable
              record-keeping.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:border-[#00B389] transition-colors">
                  <Users className="w-5 h-5 text-slate-400 group-hover:text-[#00B389]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Multi-User Access
                  </div>
                  <div className="text-xs text-slate-500">
                    Role-based team permissions
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:border-[#00B389] transition-colors">
                  <FileText className="w-5 h-5 text-slate-400 group-hover:text-[#00B389]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Exportable Reports
                  </div>
                  <div className="text-xs text-slate-500">
                    Audit-ready CSV & PDF summaries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Timeline Feature Flow */}
          <div className="relative space-y-28">
            {/* Vertical Line Connector */}
            <div className="absolute left-[23.5px] top-4 bottom-8 w-[1px] bg-slate-100 dark:bg-emerald-900/40 hidden md:block" />

            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.1,
                }}
                className="relative md:pl-20 group"
              >
                {/* Timeline Indicator */}
                <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full bg-white dark:bg-[#070A09] border border-slate-100 dark:border-emerald-900/50 flex items-center justify-center z-10 shadow-sm group-hover:border-[#00B389] group-hover:shadow-[0_0_15px_rgba(0,179,137,0.2)] transition-all duration-500 hidden md:flex">
                  <feature.icon
                    className="w-5 h-5 text-[#00B389]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Feature Content */}
                <div className="pt-1">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                    {feature.desc}
                  </p>

                  {/* Micro-Pills */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-emerald-900/10 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-emerald-500/70 border border-slate-100 dark:border-emerald-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL CAPABILITIES (GRID REFINED) */}
      <section className="py-10 bg-[#FAFDFA] dark:bg-[#070A09]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: HeartPulse,
              title: "Mood Tracking",
              desc: "Capture patterns in emotional well-being to adjust support proactively.",
            },
            {
              icon: FileText,
              title: "Behaviour Notes",
              desc: "Structured observations on communication, behaviour changes, and support responses.",
            },
            {
              icon: ShieldCheck,
              title: "Incident Reporting",
              desc: "Secure, time-stamped records to safeguard against accidents or critical events.",
            },
            {
              icon: Users,
              title: "Multi-User Staff Access",
              desc: "Collaborate securely with role-based permissions for teams and managers.",
            },
            {
              icon: BarChart3,
              title: "Exportable Reports",
              desc: "Share summaries for audits, families, or healthcare professionals.",
            },
            {
              icon: Bell,
              title: "Real-Time Updates",
              desc: "Instant notifications and data syncing across mobile and tablet devices.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 border-l border-slate-200 dark:border-emerald-900/30 hover:border-emerald-500 transition-colors"
            >
              <item.icon
                className="w-6 h-6 text-emerald-600 mb-6"
                strokeWidth={1.5}
              />
              <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM CTA */}
      <section className="relative w-full py-10  overflow-hidden  dark:bg-[#0A1A15] text-[#0D1F1A] dark:text-emerald-50 border-t border-slate-100 dark:border-emerald-900/20">
        {/* 1. PRECISION SVG GRID: Luxury Tech Background */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
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
                  stroke="#00B389"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        {/* Subtle Ambient Emerald Aura */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00B389]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT: THE BENEFITS (Structural Clarity) */}
            <div className="p-12 rounded-[1rem] bg-white dark:bg-[#111312] shadow-xl border border-transparent dark:border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs mb-8">
                  Professional Core
                </div>

                <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tighter mb-16 leading-tight">
                  Simplicity Meets <br />
                  <span className="text-[#00B389]">Professional Power.</span>
                </h3>

                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[#00B389]">
                      <Users
                        className="w-7 h-7 text-[#00B389]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Simple enough for{" "}
                      <span className="text-slate-900 dark:text-white font-medium">
                        non-technical users.
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[#00B389]">
                      <BarChart3
                        className="w-7 h-7 text-[#00B389]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      Powerful enough for{" "}
                      <span className="text-slate-900 font-medium">
                        professional reporting.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE DOWNLOAD (Bento Glass Effect) */}
            <div className="relative p-12 rounded-[1rem] bg-gradient-to-br from-[#00B389] to-[#008F6D] shadow-[0_20px_60px_-15px_rgba(0,179,137,0.4)] flex flex-col justify-between overflow-hidden">
              {/* Geometric Accent Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-12">
                  Available Now
                </div>

                <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                  Mobile & Tablet <br />
                  <span className="opacity-80 italic font-serif">
                    Infrastructure.
                  </span>
                </h3>

                <p className="text-lg text-emerald-50 font-light max-w-sm leading-relaxed mb-12">
                  Optimized for front-line reliability across every device in
                  your care network.
                </p>

                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Smartphone
                        className="w-6 h-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">
                      Mobile
                    </span>
                  </div>
                  <div className="h-10 w-[1px] bg-white/10" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Tablet
                        className="w-6 h-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">
                      Tablet
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <button className="group w-full py-3 rounded-xl bg-white text-emerald-700 font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
                  Organisation Access
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
