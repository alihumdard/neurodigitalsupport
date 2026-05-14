import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, BarChart3, TrendingUp, Download, Smartphone, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ProductsHome = () => {
  const { reducedMotion } = useAccessibility();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const animationProps = reducedMotion ? {} : {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  const principleItems = [
    'Calm by design',
    'Inclusive by default',
    'Backed by evidence',
    'Safe digital environments',
    'Ethical use of AI',
    'Built for long-term impact'
  ];

  const accessibilityItems = [
    'Dark Mode',
    'Reduced Motion',
    'High Contrast',
    'Adjustable Text Size',
    'Dyslexia-Friendly Fonts',
    'Screen Reader Support',
    'Sensory Safe Mode'
  ];

  const testimonials = [
    {
      review: 'Finally, technology that feels calm instead of exhausting.',
      name: '— Early User',
      image: '/images/products/earlyuser.jpeg',
      alt: 'Early user',
      avatarClass: 'from-emerald-100 via-white to-teal-100 text-emerald-700 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:text-emerald-100'
    },
    {
      review: 'An important step forward for inclusive digital care.',
      name: '— Support Worker',
      image: '/images/products/supportworker.jpeg',
      alt: 'Support worker',
      avatarClass: 'from-white via-emerald-50 to-teal-100 text-emerald-800'
    },
    {
      review: 'This platform could redefine neurodivergent wellbeing services.',
      name: '— Research Professional',
      image: '/images/products/researchworker.jpeg',
      alt: 'Research professional',
      avatarClass: 'from-teal-100 via-white to-emerald-100 text-teal-700 dark:from-teal-900 dark:via-emerald-900 dark:to-emerald-800 dark:text-emerald-100'
    }
  ];

  const coreModules = [
    {
      logo: '/images/products/nurotok-logo.jpeg',
      name: 'NuroTok',
      subtitle: 'Sensory Regulation App',
      description: 'A calming wellbeing app helping users manage sensory overload, stress, and daily regulation in a supportive digital environment.',
      features: ['Home', 'Profile', 'Toolkit', 'Insights'],
      platforms: ['App Store', 'Google Play'],
      logoCircle: true,
      path: '/nurotok',
      color: 'text-blue-500'
    }, {
      logo: '/images/products/AltiTok.png',
      name: 'AltiTok',
      subtitle: 'Sensory-Aware Social Platform',
      description: 'A new kind of social platform reimagining connection through emotionally safer, sensory-conscious features and calm interaction.',
      features: ['Scroll Speed', 'Reduced Motion', 'Content Filters'],
      platforms: ['Mobile & Tablet'],
      logoCircle: true,
      path: '/altitok',
      color: 'text-purple-500'
    }, {
      logo: '/images/products/oiltok.jpeg',
      name: 'OliSupport',
      subtitle: 'Digital Advocacy Hub',
      description: 'Centralized digital advocacy hub connecting neurodivergent individuals with personalized resources, guides, and peer support.',
      features: ['Peer Support', 'Resource Hub', 'Direct Advocacy'],
      platforms: ['Web'],
      name: 'OliTok',
      subtitle: 'Online Friendship & Support Network',
      description: 'A safe, structured companionship platform connecting neurodivergent individuals with trained volunteers for meaningful friendship and emotional support.',
      features: ['Volunteer Matching', 'Safe Messaging', 'Group Hangouts'],
      platforms: ['JOIN'],
      logoCircle: true,
      path: '/olitok',
      color: 'text-orange-500'
    }, {
      icon: FileText,
      name: 'Care Logging App',
      subtitle: 'Secure Support System',
      description: 'Secure, intuitive logging system for support workers with offline sync, custom reporting, and a privacy-first design infrastructure.',
      features: ['Offline Sync', 'Custom Reports', 'Privacy-First'],
      platforms: ['iOS', 'Android', 'Web'],
      description: 'A professional digital companion for care teams, providing simple and reliable record-keeping for supported living environments.',
      features: ['Daily Logs', 'Mood Tracking', 'Incident Reports'],
      platforms: ['Mobile & Tablet'],
      path: '/care-logging',
      color: 'text-emerald-500'
    }, {
      icon: Megaphone,
      name: 'Digital Advocacy Hub',
      subtitle: 'Awareness & Inclusion',
      description: 'A dedicated resource centre supporting neurodiversity awareness, policy progress, and accessible society initiatives through practical advocacy tools.',
      features: ['Awareness Campaigns', 'Policy Support', 'Workplace Inclusion'],
      platforms: ['RESOURCES'],
      color: 'text-emerald-500',
      path: '/digital-advocacy-hub',
      details: {
        includes: [
          'Neurodiversity awareness campaign guides',
          'Policy support briefs and advocacy templates',
          'Workplace inclusion toolkits',
          'Accessible society initiative planning resources',
          'Community outreach and education materials'
        ],
        resources: [
          'Blogs',
          'Case studies',
          'Petition tools',
          'Policy letter templates',
          'Accessibility checklists',
          'Campaign launch worksheets',
          'Inclusion training resources'
        ]
      }
    }, {
      icon: BarChart3,
      name: 'Research & Insights Hub',
      subtitle: 'Evidence-Led Innovation',
      description: 'Our Research Hub provides access to trusted studies, dashboards, and reports focused on neurodivergence and digital well-being.',
      features: ['Research Library', 'Published Studies', 'Visual Analytics'],
      platforms: ['Web'],
      path: '/research-insights-hub',
      color: 'text-teal-500'
    }, {
      icon: TrendingUp,
      name: 'Social Listening Dashboard',
      subtitle: 'Real-Time AI Insights',
      description: 'AI-powered analytics monitoring public conversations to identify emerging trends for neurodivergent communities.',
      features: ['Trend Graphs', 'Topic Clusters', 'Community Alerts'],
      platforms: ['Web', 'AI', 'SOURCES'],
      path: '/social-listening-dashboard',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="relative pt-12 pb-24 lg:pt-16 bg-emerald-50/60 dark:bg-emerald-950/10 transition-colors duration-300">
      
      {/* Sleek Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-emerald-600/20 dark:via-emerald-400/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div className="text-center mb-16 mt-4" variants={fadeInVariants} {...animationProps}>
          <h3 className="text-sm font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-500 uppercase mb-4">
            OUR ECOSYSTEM
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Our Features & Services.
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreModules.map((module, index) => (
            <motion.div 
              key={index} 
              className="h-full flex"
              variants={fadeInVariants} 
              {...(reducedMotion ? {} : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-50px" },
                transition: { duration: 0.5, delay: index * 0.1 }
              })}
            >
              {/* Premium Card Structure - Upgraded borders & shadows for light mode clarity */}
              <div className="bg-card w-full h-full rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-200 dark:border-white/10 group overflow-hidden">
                
                {/* Visual Header (Image or Icon) */}
                <div className="h-24 w-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105">
                  {module.logo ? (
                    module.logoCircle ? (
                      <div className="h-20 w-20 rounded-full flex items-center justify-center bg-white p-1.5 border border-emerald-100 shadow-inner overflow-hidden dark:bg-white dark:border-emerald-900/30">
                        <img
                          src={module.logo}
                          alt={`${module.name} logo`}
                          className="h-full w-full rounded-full object-contain drop-shadow-sm"
                        />
                      </div>
                    ) : (
                      <img
                        src={module.logo}
                        alt={`${module.name} logo`}
                        className="max-h-20 w-auto object-contain rounded-xl drop-shadow-md"
                      />
                    )
                  ) : (
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-white border border-emerald-100 shadow-inner dark:bg-white dark:border-emerald-900/30">
                      {module.icon && <module.icon className={`h-9 w-9 ${module.color}`} aria-hidden="true" />}
                    </div>
                  )}
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl font-extrabold mb-1 text-foreground">
                  {module.name}
                </h3>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-500 mb-4">
                  {module.subtitle}
                </span>

                {/* Description - Clamped to 3 lines, using slate-600 for softer but readable luxury text */}
                <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed mb-6 px-1 font-normal line-clamp-3">
                  {module.description}
                </p>

                {/* Key Features Glass Pills - Increased contrast for light mode */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {module.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-emerald-100/60 dark:bg-emerald-900/20 border border-emerald-200/80 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-400/90"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Platforms & Button */}
                <div className="mt-auto w-full pt-5 border-t border-slate-100 dark:border-border/50 flex flex-row items-center justify-between">
                  
                  {/* Platform Badges - Using slate for better light mode contrast */}
                  <div className="flex items-center gap-1.5">
                    {module.platforms.map((platform, idx) => (
                      <span 
                        key={idx}
                        className="text-[9px] font-bold tracking-wider uppercase text-slate-600 dark:text-muted-foreground bg-slate-100 dark:bg-muted/60 px-2 py-1 rounded flex items-center gap-1"
                      >
                        {platform === 'iOS' || platform === 'Android' ? <Download className="w-2.5 h-2.5" /> : null}
                        {['iOS', 'Android', 'App Store', 'Google Play'].includes(platform) ? <Download className="w-2.5 h-2.5" /> : 
                         platform === 'Mobile & Tablet' ? <Smartphone className="w-2.5 h-2.5" /> : null}
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {!module.path && module.details ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#34967C] hover:bg-[#2a7a65] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-[10px] sm:text-[11px] font-bold tracking-wider transition-all hover:-translate-y-0.5 shadow-md shadow-emerald-500/20"
                        >
                          MORE
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-extrabold text-foreground">
                            {module.name}
                          </DialogTitle>
                          <DialogDescription className="text-sm leading-relaxed">
                            {module.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <h4 className="mb-3 text-[11px] font-bold tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-500">
                              Includes
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-muted-foreground">
                              {module.details.includes.map((item) => (
                                <li key={item} className="rounded-md border border-emerald-200/80 bg-emerald-100/60 px-3 py-2 text-emerald-800 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-400/90">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-3 text-[11px] font-bold tracking-[0.15em] uppercase text-emerald-600 dark:text-emerald-500">
                              Resources
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-muted-foreground">
                              {module.details.resources.map((item) => (
                                <li key={item} className="rounded-md bg-slate-100 px-3 py-2 font-semibold text-slate-600 dark:bg-muted/60 dark:text-muted-foreground">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Link
                      to={module.path}
                      className="inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#34967C] hover:bg-[#2a7a65] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-[10px] sm:text-[11px] font-bold tracking-wider transition-all hover:-translate-y-0.5 shadow-md shadow-emerald-500/20"
                    >
                      MORE
                    </Link>
                  )}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-24 text-center" variants={fadeInVariants} {...animationProps}>
          <h3 className="text-sm font-bold tracking-[0.24em] text-emerald-700 dark:text-emerald-500 uppercase mb-3">
            WHY
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            NEURODIGITAL SUPPORT
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-7xl mx-auto">
          <motion.div
            className="h-full"
            variants={fadeInVariants}
            {...(reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5 }
            })}
          >
            <div className="h-full rounded-3xl border border-emerald-100/80 dark:border-emerald-800/30 bg-white/85 dark:bg-card/80 p-7 sm:p-9 text-left shadow-[0_10px_34px_rgb(15,23,42,0.08)]">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                Designed for Real Human Needs
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-muted-foreground">
                Every feature is built with wellbeing, dignity, and accessibility at the centre.
              </p>

              <h4 className="mt-6 text-[11px] font-extrabold tracking-[0.16em] uppercase text-emerald-700 dark:text-emerald-500">
                Our Principles
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {principleItems.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/65 px-3.5 py-2.5 text-sm font-semibold text-emerald-900 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            variants={fadeInVariants}
            {...(reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: 0.08 }
            })}
          >
            <div className="h-full rounded-3xl border border-emerald-100/80 dark:border-emerald-800/30 bg-white/85 dark:bg-card/80 p-7 sm:p-9 text-left shadow-[0_10px_34px_rgb(15,23,42,0.08)]">
              <h4 className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-emerald-700 dark:text-emerald-500">
                Accessibility Settings
              </h4>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                Personalise Your Experience
              </h3>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessibilityItems.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/65 px-3.5 py-2.5 text-sm font-semibold text-emerald-900 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 text-center"
          variants={fadeInVariants}
          {...animationProps}
        >
          <h3 className="text-sm font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-500 uppercase mb-4">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Trusted by People Building Better Care
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-12 max-w-6xl mx-auto px-10 sm:px-12 lg:px-14"
          variants={fadeInVariants}
          {...animationProps}
        >
          <button
            type="button"
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200/80 bg-white/85 text-emerald-800 shadow-sm shadow-emerald-950/5 backdrop-blur transition-all hover:-translate-x-0.5 hover:bg-emerald-50 dark:border-emerald-800/50 dark:bg-card/85 dark:text-emerald-300 dark:hover:bg-emerald-950/40 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-center lg:gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-h-[390px] flex-col items-center justify-center rounded-[1.75rem] bg-white/80 px-7 py-9 text-center text-foreground shadow-[0_12px_38px_rgb(15,23,42,0.08)] ring-1 ring-emerald-100/80 transition-all duration-300 dark:bg-card/80 dark:ring-emerald-800/30"
              >
                <div
                  className={`mb-8 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br p-2 shadow-inner ring-1 ring-emerald-200/80 sm:h-44 sm:w-44 ${testimonial.avatarClass}`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <blockquote
                  className="mx-auto max-w-[15rem] text-base font-extrabold leading-snug tracking-tight text-slate-900 dark:text-foreground"
                >
                  “{testimonial.review}”
                </blockquote>

                <p className="mt-7 text-xs font-bold tracking-wide text-emerald-800 dark:text-emerald-400">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200/80 bg-white/85 text-emerald-800 shadow-sm shadow-emerald-950/5 backdrop-blur transition-all hover:translate-x-0.5 hover:bg-emerald-50 dark:border-emerald-800/50 dark:bg-card/85 dark:text-emerald-300 dark:hover:bg-emerald-950/40 sm:flex"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2" aria-label="Testimonial carousel pagination">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 1
                    ? 'w-6 bg-emerald-700 dark:bg-emerald-400'
                    : 'w-2 bg-emerald-200 dark:bg-emerald-800'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHome;
