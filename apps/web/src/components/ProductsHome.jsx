import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, BarChart3, TrendingUp, Download, Megaphone } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';

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

  const coreModules = [
    {
      logo: 'https://horizons-cdn.hostinger.com/74d8c2bd-be68-4613-8d19-cd6b1527ee02/9812e93bd770231b66c91ed8aeb5b7e3.jpg',
      name: 'NuroTok',
      subtitle: 'Sensory Regulation App',
      description: 'A calming wellbeing app helping users manage sensory overload, stress, and daily regulation in a supportive digital environment.',
      features: ['Home', 'Profile', 'Toolkit', 'Insights'],
      platforms: ['App Store', 'Google Play'],
      logoCircle: true,
      color: 'text-blue-500',
      slug: 'nurotok'
    }, {
      logo: '/images/products/AltiTok.png',
      name: 'AltiTok',
      subtitle: 'Sensory-Aware Social Platform',
      description: 'A new kind of social platform reimagining connection through emotionally safer, sensory-conscious features and calm interaction.',
      features: ['Scroll Speed', 'Reduced Motion', 'Content Filters'],
      platforms: ['Mobile & Tablet'],
      logoCircle: true,
      color: 'text-purple-500',
      slug: 'altitok'
    }, {
      logo: '/images/products/olitok.jpeg',
      name: 'OliTok',
      subtitle: 'Online Friendship & Support Network',
      description: 'A safe, structured companionship platform connecting neurodivergent individuals with trained volunteers for meaningful friendship and emotional support.',
      features: ['Volunteer Matching', 'Safe Messaging', 'Group Hangouts'],
      platforms: ['JOIN'],
      logoCircle: true,
      color: 'text-orange-500',
      slug: 'olitok'
    }, {
      icon: FileText,
      name: 'Care Logging App',
      subtitle: 'Secure Support System',
      description: 'A professional digital companion for care teams, providing simple and reliable record-keeping for supported living environments.',
      features: ['Daily Logs', 'Mood Tracking', 'Incident Reports'],
      platforms: ['Mobile & Tablet'],
      color: 'text-emerald-500',
      slug: 'care-logging'
    }, {
      icon: Megaphone,
      name: 'Digital Advocacy Hub',
      subtitle: 'Awareness & Inclusion',
      description: 'A dedicated resource centre supporting neurodiversity awareness, policy progress, and accessible society initiatives through practical advocacy tools.',
      features: ['Awareness Campaigns', 'Policy Support', 'Workplace Inclusion'],
      platforms: ['RESOURCES'],
      color: 'text-emerald-500',
      slug: 'advocacy-hub'
    }, {
      icon: BarChart3,
      name: 'Research & Insights',
      subtitle: 'Knowledge Centre',
      description: 'Data-driven knowledge centre equipped with evidence-based strategies, accessibility research, and systemic clinical insights.',
      features: ['Clinical Data', 'Accessibility', 'Trend Analysis'],
      platforms: ['Web'],
      color: 'text-teal-500',
      slug: 'research-hub'
    }, {
      icon: TrendingUp,
      name: 'Social Listening Dashboard',
      subtitle: 'Real-Time AI Insights',
      description: 'AI-powered analytics monitoring public conversations to identify emerging trends for neurodivergent communities.',
      features: ['Trend Graphs', 'Topic Clusters', 'Community Alerts'],
      platforms: ['Web', 'AI', 'SOURCES'],
      color: 'text-pink-500',
      slug: 'social-listening'
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
                    <img
                      src={module.logo}
                      alt={`${module.name} logo`}
                      className="max-h-20 w-auto object-contain rounded-xl drop-shadow-md"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-slate-50 dark:bg-emerald-900/20 border border-slate-100 dark:border-transparent shadow-inner">
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
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/product/${module.slug}`}
                    className="inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#34967C] hover:bg-[#2a7a65] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-[10px] sm:text-[11px] font-bold tracking-wider transition-all hover:-translate-y-0.5 shadow-md shadow-emerald-500/20"
                  >
                    MORE
                  </Link>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;