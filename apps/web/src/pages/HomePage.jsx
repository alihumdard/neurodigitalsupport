import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Users, MessageSquare, BarChart3, TrendingUp, Moon, Minimize2, Eye, Type, Volume2, Settings, Sparkles, UserCheck, Activity, Heart, ArrowRight, Briefcase, GraduationCap, Building2 } from 'lucide-react';
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1664307983373-e0b6616e6287" alt="Calming abstract background with soft gradients" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{
            letterSpacing: '-0.02em'
          }} {...reducedMotion ? {} : {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.6
            }
          }}>
              Digital tools designed for neurodivergent minds
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" {...reducedMotion ? {} : {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.6,
              delay: 0.2
            }
          }}>
              Sensory-aware technology that supports your wellbeing
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" {...reducedMotion ? {} : {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.6,
              delay: 0.4
            }
          }}>
              <Button size="lg" className="transition-all duration-200 active:scale-[0.98]">
                Explore the platform
              </Button>
              <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                Learn more
              </Button>
            </motion.div>
          </div>
        </section>

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
              {coreModules.map((module, index) => <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: {
                once: true,
                margin: "-50px"
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              }
            }}>
                  <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        {module.logo ? <div className="p-3 rounded-xl bg-muted flex items-center justify-center">
                            <img src={module.logo} alt={`${module.name} - ${module.description.split(' ').slice(0, 3).join(' ')}`} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" />
                          </div> : <div className={`p-3 rounded-xl bg-muted ${module.color}`}>
                            <module.icon className="h-6 w-6" aria-hidden="true" />
                          </div>}
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{module.name}</CardTitle>
                          <CardDescription className="leading-relaxed">
                            {module.description}
                          </CardDescription>
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
                </motion.div>)}
            </div>
          </div>
        </section>

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
              {accessibilityFeatures.map((feature, index) => <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: {
                once: true,
                margin: "-50px"
              },
              transition: {
                duration: 0.5,
                delay: index * 0.08
              }
            }}>
                  <Card className={`bg-card hover:bg-muted/50 transition-all duration-200 ${index === 0 ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="pt-6">
                      <feature.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
                      <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

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
              {howItWorksSteps.map((step, index) => <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: {
                once: true,
                margin: "-50px"
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              }
            }} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                    {step.number}
                  </div>
                  <step.icon className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ctaSections.map((cta, index) => <motion.div key={index} variants={fadeInVariants} {...reducedMotion ? {} : {
              initial: "hidden",
              whileInView: "visible",
              viewport: {
                once: true,
                margin: "-50px"
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              }
            }}>
                  <Card className={`h-full bg-gradient-to-br ${cta.gradient} border-0 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
                    <CardContent className="pt-6 flex flex-col h-full">
                      <cta.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                      <h3 className="text-xl font-semibold mb-3">{cta.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {cta.description}
                      </p>
                      <Button className="w-full transition-all duration-200 active:scale-[0.98]">
                        {cta.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default HomePage;