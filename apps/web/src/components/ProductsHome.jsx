import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, MessageSquare, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
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
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={fadeInVariants} {...animationProps}>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-foreground tracking-tight">
            Core Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Six specialized tools working together to create a comprehensive support ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreModules.map((module, index) => (
            <motion.div key={index} variants={fadeInVariants} {...(reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: index * 0.1 }
            })}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-start space-x-5">
                    {module.logo ? (
                      <div className="p-3 rounded-2xl bg-muted/50 flex items-center justify-center border border-border/50 shadow-sm">
                        <img
                          src={module.logo}
                          alt={`${module.name} - logo`}
                          className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl"
                        />
                      </div>
                    ) : (
                      <div className={`p-4 rounded-2xl bg-muted/50 border border-border/50 shadow-sm ${module.color}`}>
                        {module.icon && <module.icon className="h-7 w-7" aria-hidden="true" />}
                      </div>
                    )}
                    <div className="flex-1 mt-1">
                      <CardTitle className="text-xl mb-2 font-bold tracking-tight">{module.name}</CardTitle>
                      <CardDescription className="leading-relaxed text-sm font-light text-muted-foreground">{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to="/modules" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible-ring rounded group">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;