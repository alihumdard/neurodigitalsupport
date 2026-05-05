        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-20" variants={fadeInVariants} {...animationProps}>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 tracking-tight">
                How NuroTok works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Four simple steps to a more comfortable digital experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {howItWorksSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInVariants} {...(reducedMotion ? {} : {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true, margin: "-50px" },
                  transition: { duration: 0.5, delay: index * 0.1 }
                })} className="relative group">
                  <div className="text-7xl font-black text-primary/5 mb-6 group-hover:text-primary/10 transition-colors duration-300" style={{ letterSpacing: '-0.04em' }}>
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-primary mb-5" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>