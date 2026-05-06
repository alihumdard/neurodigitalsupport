import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Brain, Shield, Calendar } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';

const HeroSection = () => {
  const { reducedMotion } = useAccessibility();

  return (
    <section className="relative overflow-hidden transition-colors duration-300">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/products/homepage.jpeg')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/58 to-black/68"
        aria-hidden="true"
      />

      {/* Subtle neutral grid for depth without green cast */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted padding and min-height to pull content closer to the header */}
        <div className="flex min-h-[70vh] items-center justify-center pt-24 pb-14 lg:pt-28 lg:pb-20">
          
          {/* LEFT — Text content */}
          <motion.div
            className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 text-center"
            {...(reducedMotion ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
            })}
          >
            {/* Main Content Grouping */}
            <div className="space-y-7">
              {/* Headline - Size Decreased */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Technology Designed Around{' '}
                <span className="text-white">
                  Human Sensory
                </span>{' '}
                Needs
              </h1>

              {/* Subheadline */}
              <p className="mx-auto max-w-3xl text-center text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
                A premium digital ecosystem built to support autistic and neurodivergent adults across the UK through calming tools, safer online spaces, research intelligence, and inclusive support systems.
              </p>

              {/* Supporting text — Professional callout style */}
            </div>

            {/* CTA Buttons - Sized down to fit on one line */}
            <motion.div
              className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.2 },
              })}
            >
              <Button
                size="sm"
                className="rounded-full bg-[#34967C] text-white transition-all duration-300 hover:bg-[#2a7a65] hover:shadow-lg hover:shadow-emerald-900/35 active:scale-[0.98] inline-flex items-center gap-1.5 h-10 px-4 sm:px-5 text-sm font-semibold"
              >
                Explore Our Ecosystem
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-white transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-1.5 h-10 px-4 sm:px-5 text-sm font-semibold bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/18 hover:border-white/50 hover:text-white"
              >
                <Download className="w-3.5 h-3.5 mr-0.5" aria-hidden="true" />
                Download NuroTok
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-white transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-1.5 h-10 px-4 sm:px-5 text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/18 hover:border-white/50 hover:text-white"
              >
                <Calendar className="w-3.5 h-3.5 mr-0.5" aria-hidden="true" />
                Book a Demo
              </Button>
            </motion.div>

            <div className="mx-auto max-w-3xl px-4 py-2 border-l-2 border-white/55 text-left">
              <p className="text-sm text-white/90 font-semibold italic leading-relaxed">
                Most digital platforms ask neurodivergent people to adapt to overwhelming environments. We believe technology should adapt to people, not the other way around.
              </p>
            </div>

            {/* Trust strip */}
            <motion.div
              className="pt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 items-center border-t border-white/20"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.4 },
              })}
            >
              {['Care Providers', 'Universities', 'Employers', 'Public Sector'].map((label) => (
                <span key={label} className="text-xs sm:text-sm font-semibold text-white/90 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Glassmorphism Visual Card Cluster (Desktop only) */}
          <div className="hidden">
            {/* Main Premium Card */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-background/60 backdrop-blur-xl border border-border shadow-2xl">
              
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

              {/* Mini stats row - Glass styling */}
              <div className="mx-6 my-6 rounded-2xl px-5 py-4 grid grid-cols-3 divide-x divide-border/50 bg-muted/30 backdrop-blur-md border border-border/40">
                {[
                  { label: 'Sensory Tools', value: '7+'    },
                  { label: 'Care Partners', value: '100+'  },
                  { label: 'Wellbeing',     value: '↑ 94%' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center px-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-lg font-extrabold text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge: NuroTok (top-left) */}
            <motion.div
              className="absolute -top-4 -left-8 rounded-2xl px-4 py-3 flex items-center gap-3 bg-background/90 backdrop-blur-xl border border-border shadow-xl"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.5 },
              })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                <Brain className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-none mb-1">NuroTok</p>
                <p className="text-[11px] font-medium text-muted-foreground leading-none">Sensory regulation</p>
              </div>
            </motion.div>

            {/* Floating badge: AltiTok (bottom-right) */}
            <motion.div
              className="absolute -bottom-4 -right-8 rounded-2xl px-4 py-3 flex items-center gap-3 bg-background/90 backdrop-blur-xl border border-border shadow-xl"
              {...(reducedMotion ? {} : {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.65 },
              })}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-500">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-none mb-1">AltiTok</p>
                <p className="text-[11px] font-medium text-muted-foreground leading-none">Safe social platform</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
