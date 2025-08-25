import { Upload, PenTool, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Import Your Trades",
      description: "Connect your broker account or upload CSV files. We'll automatically parse and categorize your trade data.",
      features: ["CSV Import", "Broker APIs", "Manual Entry"]
    },
    {
      number: 2, 
      icon: PenTool,
      title: "Journal Everything",
      description: "Add tags, notes, and context to each trade. Document your setups, emotions, and market conditions.",
      features: ["Setup Tags", "Trade Notes", "Market Context"]
    },
    {
      number: 3,
      icon: TrendingUp,
      title: "Analyze & Improve", 
      description: "Review detailed analytics to identify patterns, optimize your strategy, and consistently grow your edge.",
      features: ["Performance Analytics", "Pattern Recognition", "Risk Metrics"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Three simple steps to transform your trading performance and build a systematic edge in the markets.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                
                <div className="relative bg-card rounded-xl p-8 shadow-card border border-border/50 hover:shadow-card-hover transition-smooth h-full">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg font-bold text-lg mb-6">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 bg-card rounded-2xl p-8 shadow-card border">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Ready to start your journey?</h3>
                <p className="text-muted-foreground">Join thousands of traders already using our platform</p>
              </div>
              <Button variant="hero" size="lg" className="flex-shrink-0">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};