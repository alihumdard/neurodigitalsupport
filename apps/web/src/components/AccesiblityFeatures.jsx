        <section className="py-24 bg-muted/20 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={fadeInVariants} {...animationProps}>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 tracking-tight">
                Accessibility features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Comprehensive controls to customize your digital experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeInVariants} {...(reducedMotion ? {} : {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true, margin: "-50px" },
                  transition: { duration: 0.5, delay: index * 0.08 }
                })}>
                  <Card className={`bg-card/50 backdrop-blur-sm border-border/50 hover:bg-muted/40 transition-colors duration-300 ${index === 0 ? 'ring-1 ring-primary/50 shadow-md shadow-primary/5' : 'shadow-sm'}`}>
                    <CardContent className="pt-8 pb-6 px-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 tracking-tight">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
