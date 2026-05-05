import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Download, Brain, Shield } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';

const HeroSection = () => {
  const { reducedMotion } = useAccessibility();

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300">
      {/* Premium ultra-tech background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      />

      {/* Dynamic Glow Orbs for light/dark mode contrast */}
      <div
        className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full z-0 pointer-events-none blur-3xl opacity-50 dark:opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-3xl opacity-50 dark:opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          
          {/* LEFT — Text content */}
          <motion.div
            className="flex flex-col justify-center"
            {...(reducedMotion ? {} : {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
            })}
          >
            {/* Glassmorphic Eyebrow Pill */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 w-fit"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
              })}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Sensory-Aware Technology
              </span>
            </motion.div>

            {/* Headline with Gradient Accent */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-foreground"
            >
              Technology Designed Around <br />
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Human Sensory
              </span>{' '}
              Needs
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl font-light">
              A premium digital ecosystem built to support autistic and neurodivergent adults across the UK through calming tools, safer online spaces, research intelligence, and inclusive support systems.
            </p>

            {/* Supporting text — Professional block quote style */}
            <div className="mb-10 border-l-4 border-primary/40 pl-5 py-1">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg italic">
                Most digital platforms ask neurodivergent people to adapt to overwhelming environments. We believe technology should adapt to people, not the other way around.
              </p>
            </div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 flex-wrap"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.25 },
              })}
            >
              <Button
                size="lg"
                className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] inline-flex items-center gap-2 h-12 px-8 text-base"
              >
                Explore Our Ecosystem
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-2 h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-muted"
              >
                <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                Download NuroTok
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 items-center"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.45 },
              })}
            >
              {['Care Providers', 'Universities', 'Employers', 'Public Sector'].map((label) => (
                <span key={label} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Glassmorphism Visual Card Cluster (Desktop only) */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            {...(reducedMotion ? {} : {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7, delay: 0.15 },
            })}
          >
            {/* Main Premium Card */}
            <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden bg-background/60 backdrop-blur-2xl border border-border/60 shadow-2xl">
              
              {/* Card header bar */}
              <div className="px-6 py-4 flex items-center justify-between bg-muted/40 border-b border-border/50">
                <span className="text-sm font-semibold tracking-wide text-primary">
                  NeuroDigital Hub
                </span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
                </div>
              </div>

              {/* SVG illustration - Cleaned up for tech vibe */}
              <div className="px-6 pt-8 pb-6 flex justify-center">
                <svg
                  viewBox="0 0 400 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full drop-shadow-md"
                  aria-hidden="true"
                >
                  <ellipse cx="200" cy="110" rx="185" ry="92" fill="hsl(var(--primary) / 0.05)" />
                  <circle cx="200" cy="110" r="78" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="110" r="55" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
                  <circle cx="200" cy="110" r="32" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" />
                  <circle cx="200" cy="110" r="10" fill="hsl(var(--primary))" className="animate-pulse" />
                  
                  {/* Connecting Nodes */}
                  <line x1="200" y1="110" x2="80" y2="60" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1.5" />
                  <circle cx="80" cy="60" r="6" fill="hsl(var(--accent))" />
                  
                  <line x1="200" y1="110" x2="320" y2="160" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1.5" />
                  <circle cx="320" cy="160" r="6" fill="hsl(var(--accent))" />
                  
                  <line x1="200" y1="110" x2="300" y2="40" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1.5" />
                  <circle cx="300" cy="40" r="4" fill="hsl(var(--foreground) / 0.4)" />
                  
                  <line x1="200" y1="110" x2="100" y2="170" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1.5" />
                  <circle cx="100" cy="170" r="4" fill="hsl(var(--foreground) / 0.4)" />
                </svg>
              </div>

              {/* Mini stats row - Glass styling */}
              <div className="mx-6 mb-6 rounded-2xl px-5 py-4 grid grid-cols-3 divide-x divide-border/50 bg-muted/30 backdrop-blur-md border border-border/40">
                {[
                  { label: 'Sensory Tools', value: '7+'    },
                  { label: 'Care Partners', value: '100+'  },
                  { label: 'Wellbeing',     value: '↑ 94%' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center px-2">
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-lg font-bold text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge: NuroTok (top-left) */}
            <motion.div
              className="absolute -top-6 -left-10 rounded-2xl px-5 py-4 flex items-center gap-4 bg-background/80 backdrop-blur-xl border border-border shadow-2xl"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.65 },
              })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                <Brain className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">NuroTok</p>
                <p className="text-xs text-muted-foreground">Sensory regulation</p>
              </div>
            </motion.div>

            {/* Floating badge: AltiTok (bottom-right) */}
            <motion.div
              className="absolute -bottom-6 -right-10 rounded-2xl px-5 py-4 flex items-center gap-4 bg-background/80 backdrop-blur-xl border border-border shadow-2xl"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.8 },
              })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-500">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">AltiTok</p>
                <p className="text-xs text-muted-foreground">Safe social platform</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;