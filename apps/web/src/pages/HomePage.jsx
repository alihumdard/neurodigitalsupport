import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText, Users, MessageSquare, BarChart3, TrendingUp,
  Moon, Minimize2, Eye, Type, Volume2, Settings,
  Sparkles, UserCheck, Activity, Heart, ArrowRight,
  Briefcase, GraduationCap, Building2,
  Brain, Shield, Download
} from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const {
    reducedMotion
  } = useAccessibility();
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const animationProps = reducedMotion ? {} : {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.5
    }
  };
  const coreModules = [{
    logo: 'https://horizons-cdn.hostinger.com/74d8c2bd-be68-4613-8d19-cd6b1527ee02/9812e93bd770231b66c91ed8aeb5b7e3.jpg',
    name: 'NuroTok',
    description: 'Sensory regulation app with customizable environments, calming exercises, and real-time mood tracking.',
    color: 'text-blue-500'
  }, {
    icon: FileText,
    name: 'Care Logging App',
    description: 'Secure, intuitive logging system for support workers with offline sync and privacy-first design.',
    color: 'text-green-500'
  }, {
    logo: 'https://horizons-cdn.hostinger.com/74d8c2bd-be68-4613-8d19-cd6b1527ee02/37f1e28818ba4db4db19abe709be42b1.png',
    name: 'AltiTok',
    description: 'Sensory-aware social platform with adjustable stimulation levels and safe community spaces.',
    color: 'text-purple-500'
  }, {
    icon: MessageSquare,
    name: 'OliSupport',
    description: 'Digital advocacy hub connecting neurodivergent individuals with resources and peer support.',
    color: 'text-orange-500'
  }, {
    icon: BarChart3,
    name: 'Research & Insights Hub',
    description: 'Data-driven knowledge centre with evidence-based strategies and accessibility research.',
    color: 'text-teal-500'
  }, {
    icon: TrendingUp,
    name: 'Social Listening Dashboard',
    description: 'AI-powered trend intelligence tracking neurodiversity conversations and emerging needs.',
    color: 'text-pink-500'
  }];
  const accessibilityFeatures = [{
    icon: Moon,
    name: 'Dark mode',
    description: 'Reduce eye strain with carefully calibrated dark themes'
  }, {
    icon: Minimize2,
    name: 'Reduced motion',
    description: 'Minimize animations for those sensitive to movement'
  }, {
    icon: Eye,
    name: 'High contrast',
    description: 'Enhanced visibility with WCAG AAA compliant contrast ratios'
  }, {
    icon: Type,
    name: 'Dyslexia-friendly fonts',
    description: 'Optimized typography for improved reading comprehension'
  }, {
    icon: Volume2,
    name: 'Screen reader compatible',
    description: 'Full semantic HTML and ARIA support for assistive tech'
  }, {
    icon: Settings,
    name: 'Customizable UI',
    description: 'Adjust spacing, colors, and layout to your preferences'
  }];
  const howItWorksSteps = [{
    number: '01',
    title: 'Create your sensory profile',
    description: 'Tell us about your preferences, sensitivities, and what helps you feel comfortable in digital spaces.',
    icon: UserCheck
  }, {
    number: '02',
    title: 'Access personalized tools',
    description: 'Get recommendations for modules and settings tailored to your unique neurodivergent needs.',
    icon: Activity
  }, {
    number: '03',
    title: 'Track insights and wellbeing',
    description: 'Monitor your digital comfort levels and discover patterns that support your mental health.',
    icon: Heart
  }, {
    number: '04',
    title: 'Connect with community',
    description: 'Join safe, moderated spaces where you can share experiences and find peer support.',
    icon: Users
  }];
  const ctaSections = [{
    title: 'Start your sensory journey',
    description: 'Discover tools designed specifically for neurodivergent minds. Create your profile and find what works for you.',
    buttonText: 'Get started',
    icon: Sparkles,
    gradient: 'from-blue-500/10 to-purple-500/10'
  }, {
    title: 'Streamline care logging',
    description: 'Support workers: save time with our secure, intuitive logging system built for real-world care environments.',
    buttonText: 'Try care logging',
    icon: Briefcase,
    gradient: 'from-green-500/10 to-teal-500/10'
  }, {
    title: 'Access research data',
    description: 'Researchers and academics: explore our evidence-based insights hub and contribute to neurodiversity knowledge.',
    buttonText: 'Explore research',
    icon: GraduationCap,
    gradient: 'from-orange-500/10 to-pink-500/10'
  }, {
    title: 'Implement inclusive technology',
    description: 'Institutions: bring sensory-aware digital tools to your organization and support neurodivergent staff and clients.',
    buttonText: 'Contact us',
    icon: Building2,
    gradient: 'from-purple-500/10 to-blue-500/10'
  }];

  return <>
    <Helmet>
      <title>NeuroDigital Support - Digital spaces designed for neurodivergent minds</title>
      <meta name="description" content="Sensory-aware technology that supports your wellbeing, not your overwhelm. Discover tools built specifically for neurodivergent individuals." />
    </Helmet>

    <Header />

    <main>

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-background">

        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--foreground) / 0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Primary glow top-right */}
        <div
          className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full z-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 65%)' }}
        />

        {/* Accent glow bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-[450px] h-[450px] rounded-full z-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 65%)' }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">

            {/* LEFT — Text content */}
            <motion.div
              className="flex flex-col justify-center"
              {...reducedMotion ? {} : {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
              }}
            >
              {/* Eyebrow pill */}
              <motion.div
                className="inline-flex items-center gap-2 mb-6 w-fit"
                {...reducedMotion ? {} : {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                }}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'hsl(var(--primary) / 0.1)',
                    color: 'hsl(var(--primary))',
                    border: '1px solid hsl(var(--primary) / 0.2)',
                  }}
                >
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  Sensory-Aware Technology
                </span>
              </motion.div>

              {/* Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Technology Designed Around{' '}
                <span style={{ color: 'hsl(var(--primary))' }}>
                  Human Sensory
                </span>{' '}
                Needs
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
                A premium digital ecosystem built to support autistic and neurodivergent adults across the UK through calming tools, safer online spaces, research intelligence, and inclusive support systems.
              </p>

              {/* Supporting text — block quote style */}
              <p
                className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-lg italic border-l-2 pl-4"
                style={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
              >
                Most digital platforms ask neurodivergent people to adapt to overwhelming environments. We believe technology should adapt to people, not the other way around.
              </p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 flex-wrap"
                {...reducedMotion ? {} : {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.55, delay: 0.25 },
                }}
              >
                <Button
                  size="lg"
                  className="transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  Explore Our Ecosystem
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download NuroTok
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  className="transition-all duration-200 active:scale-[0.98]"
                >
                  Book a Demo
                </Button>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 items-center"
                {...reducedMotion ? {} : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.6, delay: 0.45 },
                }}
              >
                {['Care Providers', 'Universities', 'Employers', 'Public Sector'].map((label) => (
                  <span key={label} className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'hsl(var(--primary))' }}
                    />
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Visual card cluster (desktop only) */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              {...reducedMotion ? {} : {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: 0.15 },
              }}
            >
              {/* Main card */}
              <div
                className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                {/* Card header bar */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{
                    background: 'hsl(var(--primary) / 0.08)',
                    borderBottom: '1px solid hsl(var(--border))',
                  }}
                >
                  <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                    NeuroDigital Support
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                </div>

                {/* SVG illustration */}
                <div className="px-6 pt-6 pb-4">
                  <svg
                    viewBox="0 0 400 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                    aria-hidden="true"
                  >
                    <ellipse cx="200" cy="110" rx="185" ry="92" fill="hsl(210 73% 59% / 0.05)" />
                    <ellipse cx="110" cy="75" rx="75" ry="50" fill="hsl(120 39% 54% / 0.06)" />
                    <circle cx="200" cy="110" r="78" stroke="hsl(210 73% 59% / 0.18)" strokeWidth="1" strokeDasharray="5 5" />
                    <circle cx="200" cy="110" r="55" stroke="hsl(210 73% 59% / 0.28)" strokeWidth="1.2" />
                    <circle cx="200" cy="110" r="32" fill="hsl(210 73% 59% / 0.1)" stroke="hsl(210 73% 59% / 0.45)" strokeWidth="1.5" />
                    <circle cx="200" cy="110" r="13" fill="hsl(210 73% 59%)" />
                    <circle cx="200" cy="110" r="6" fill="hsl(0 0% 100% / 0.6)" />
                    <circle cx="78"  cy="48"  r="6" fill="hsl(120 39% 54% / 0.65)" />
                    <circle cx="335" cy="58"  r="5" fill="hsl(210 73% 59% / 0.55)" />
                    <circle cx="58"  cy="162" r="4" fill="hsl(210 73% 59% / 0.4)"  />
                    <circle cx="348" cy="172" r="7" fill="hsl(120 39% 54% / 0.45)" />
                    <circle cx="295" cy="38"  r="3" fill="hsl(210 73% 59% / 0.35)" />
                    <circle cx="148" cy="48"  r="4" fill="hsl(120 39% 54% / 0.3)"  />
                    <line x1="78"  y1="48"  x2="168" y2="98"  stroke="hsl(210 73% 59% / 0.14)" strokeWidth="1" />
                    <line x1="335" y1="58"  x2="232" y2="98"  stroke="hsl(120 39% 54% / 0.14)" strokeWidth="1" />
                    <line x1="58"  y1="162" x2="168" y2="122" stroke="hsl(210 73% 59% / 0.12)" strokeWidth="1" />
                    <line x1="348" y1="172" x2="232" y2="122" stroke="hsl(120 39% 54% / 0.12)" strokeWidth="1" />
                    <line x1="148" y1="48"  x2="185" y2="95"  stroke="hsl(120 39% 54% / 0.1)"  strokeWidth="1" />
                    <polyline
                      points="95,148 118,148 129,126 145,168 162,132 178,148 308,148"
                      stroke="hsl(210 73% 59%)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.55"
                    />
                  </svg>
                </div>

                {/* Mini stats row */}
                <div
                  className="mx-6 mb-6 rounded-2xl px-5 py-3 grid grid-cols-3 divide-x divide-border"
                  style={{ background: 'hsl(var(--muted))' }}
                >
                  {[
                    { label: 'Sensory Tools', value: '7+'    },
                    { label: 'Care Partners', value: '100+'  },
                    { label: 'Wellbeing',     value: '↑ 94%' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center px-2">
                      <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                      <p className="text-sm font-bold mt-0.5" style={{ color: 'hsl(var(--foreground))' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge: NuroTok (top-left) */}
              <motion.div
                className="absolute -top-5 -left-8 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  boxShadow: '0 8px 32px hsl(var(--primary) / 0.12)',
                }}
                {...reducedMotion ? {} : {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.65 },
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--primary) / 0.12)' }}
                >
                  <Brain className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: 'hsl(var(--foreground))' }}>
                    NuroTok
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">Sensory regulation</p>
                </div>
              </motion.div>

              {/* Floating badge: AltiTok (bottom-right) */}
              <motion.div
                className="absolute -bottom-5 -right-8 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  boxShadow: '0 8px 32px hsl(var(--accent) / 0.1)',
                }}
                {...reducedMotion ? {} : {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--accent) / 0.12)' }}
                >
                  <Shield className="w-5 h-5" style={{ color: 'hsl(var(--accent))' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: 'hsl(var(--foreground))' }}>
                    AltiTok
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">Safe social platform</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CORE PRODUCTS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInVariants} {...animationProps}>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              Core Products
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Six specialized tools working together to create a comprehensive support ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreModules.map((module, index) => (
              <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-50px" },
                transition: { duration: 0.5, delay: index * 0.1 }
              }}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      {module.logo ? (
                        <div className="p-3 rounded-xl bg-muted flex items-center justify-center">
                          <img
                            src={module.logo}
                            alt={`${module.name} - ${module.description.split(' ').slice(0, 3).join(' ')}`}
                            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                          />
                        </div>
                      ) : (
                        <div className={`p-3 rounded-xl bg-muted ${module.color}`}>
                          <module.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{module.name}</CardTitle>
                        <CardDescription className="leading-relaxed">{module.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to="/modules" className="inline-flex items-center text-sm font-medium text-primary hover:underline focus-visible-ring rounded">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESSIBILITY FEATURES ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInVariants} {...animationProps}>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              Accessibility features
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive controls to customize your digital experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-50px" },
                transition: { duration: 0.5, delay: index * 0.08 }
              }}>
                <Card className={`bg-card hover:bg-muted/50 transition-all duration-200 ${index === 0 ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="pt-6">
                    <feature.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
                    <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW NUROTOK WORKS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInVariants} {...animationProps}>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              How NuroTok works
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Four simple steps to a more comfortable digital experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-50px" },
                transition: { duration: 0.5, delay: index * 0.1 }
              }} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4" style={{ letterSpacing: '-0.02em' }}>
                  {step.number}
                </div>
                <step.icon className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTIONS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ctaSections.map((cta, index) => (
              <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-50px" },
                transition: { duration: 0.5, delay: index * 0.1 }
              }}>
                <Card className={`h-full bg-gradient-to-br ${cta.gradient} border-0 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
                  <CardContent className="pt-6 flex flex-col h-full">
                    <cta.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-semibold mb-3">{cta.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{cta.description}</p>
                    <Button className="w-full transition-all duration-200 active:scale-[0.98]">
                      {cta.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>

    <Footer />
  </>;
};

export default HomePage;