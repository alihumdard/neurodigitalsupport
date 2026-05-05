      <section className="py-24 bg-muted/10 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ctaSections.map((cta, index) => (
                <motion.div key={index} variants={fadeInVariants} {...(reducedMotion ? {} : {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true, margin: "-50px" },
                  transition: { duration: 0.5, delay: index * 0.1 }
                })}>
                  <Card className={`h-full bg-gradient-to-br ${cta.gradient} border border-border/50 shadow-md hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-background shadow-sm border border-border/50 flex items-center justify-center mb-6">
                        <cta.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 tracking-tight">{cta.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1 font-light">{cta.description}</p>
                      <Button className="w-full h-12 text-base font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm">
                        {cta.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>