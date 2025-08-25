import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for beginners",
      price: { monthly: 0, yearly: 0 },
      badge: null,
      features: [
        "100 trades per month",
        "Basic analytics",
        "1 trading account",
        "CSV export",
        "Email support"
      ],
      limitations: ["Limited to 100 trades/month", "Basic charts only"],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      description: "For serious traders",
      price: { monthly: 29, yearly: 290 },
      badge: "Most Popular",
      features: [
        "Unlimited trades",
        "Advanced analytics",
        "Multiple accounts",
        "Tag performance heatmap", 
        "Broker integrations",
        "Risk management tools",
        "Trade screenshots",
        "Priority support"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Premium",
      description: "For professional traders",
      price: { monthly: 59, yearly: 590 },
      badge: "Best Value",
      features: [
        "Everything in Pro",
        "Team workspaces (5 users)",
        "API access",
        "Custom reports",
        "Advanced risk metrics",
        "White-label options",
        "1-on-1 onboarding",
        "24/7 phone support"
      ],
      limitations: [],
      cta: "Start Premium Trial", 
      popular: false
    }
  ];

  const savings = (monthly: number, yearly: number) => {
    if (monthly === 0) return 0;
    return Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your plan
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Start free, upgrade as you grow. All plans include our 30-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-smooth ${
                !isYearly 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-smooth relative ${
                isYearly 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-xl border shadow-card hover:shadow-card-hover transition-smooth ${
                plan.popular 
                  ? 'border-primary ring-2 ring-primary/20 scale-105' 
                  : 'border-border/50'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className={`px-4 py-1 rounded-full text-xs font-semibold ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-success text-success-foreground'
                  }`}>
                    {plan.popular && <Star className="inline w-3 h-3 mr-1" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="text-sm text-success font-medium">
                      Save ${plan.price.monthly * 12 - plan.price.yearly} ({savings(plan.price.monthly, plan.price.yearly)}%)
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="text-xs text-muted-foreground">
                        {plan.limitations.join(' • ')}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "hero" : "default"}
                  size="lg"
                  className="w-full"
                >
                  {plan.popular && <Zap className="w-4 h-4" />}
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">All plans include:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-success" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-success" />
                Bank-level security & encryption
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-success" />
                99.9% uptime SLA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};