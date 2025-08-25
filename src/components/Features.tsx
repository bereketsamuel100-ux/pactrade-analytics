import { 
  Zap, BarChart3, Shield, Tag, Download, Brain, 
  Clock, Target, PieChart, AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import analyticsMockup from "@/assets/analytics-mockup.jpg";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Trade Logging",
      description: "Log trades in seconds across stocks, crypto, forex, and options. Smart detection auto-fills symbols and prices.",
      highlight: "Multi-Asset Support"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard", 
      description: "Track P&L, win rate, R-multiple, expectancy, and more. Visual charts show your performance at a glance.",
      highlight: "20+ Metrics"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Set position sizing rules, max drawdown alerts, and daily risk limits. Never blow up your account again.",
      highlight: "Built-in Safeguards"
    },
    {
      icon: Tag,
      title: "Tags & Playbooks",
      description: "Create setup tags and strategy notes. See which setups are most profitable and focus on what works.",
      highlight: "Pattern Recognition"
    },
    {
      icon: Download,
      title: "Broker Imports",
      description: "Import trades via CSV or connect APIs from major brokers. Automatic sync keeps your journal updated.",
      highlight: "50+ Brokers Supported"
    },
    {
      icon: Brain,
      title: "Psychology & Notes",
      description: "Daily journaling prompts and trade-specific notes help you understand your mental game and improve discipline.",
      highlight: "Mental Edge"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to trade smarter
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional-grade tools that help you identify your edge, manage risk, 
            and consistently improve your trading performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-8 h-full shadow-card hover:shadow-card-hover transition-smooth border border-border/50 hover:border-primary/20">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="mb-4">
                  <div className="inline-block bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                See your performance like never before
              </h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-success/10 rounded-lg flex-shrink-0 mt-1">
                    <PieChart className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tag Performance Heatmap</h4>
                    <p className="text-muted-foreground">Instantly see which setups are making you money and which ones need work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time-Based Analytics</h4>
                    <p className="text-muted-foreground">Discover your best trading hours and days to optimize your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-warning/10 rounded-lg flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-warning" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Metrics</h4>
                    <p className="text-muted-foreground">Track drawdowns, variance, and position sizing to keep risk in check.</p>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-card-hover border">
                <img 
                  src={analyticsMockup} 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
              </div>
              
              {/* Floating Stat Cards */}
              <div className="absolute -top-4 -right-4 bg-card border shadow-card px-4 py-3 rounded-lg">
                <div className="text-xs text-muted-foreground">Expectancy</div>
                <div className="text-lg font-bold text-success">+$127</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border shadow-card px-4 py-3 rounded-lg">
                <div className="text-xs text-muted-foreground">Best Setup</div>
                <div className="text-lg font-bold">Morning Gap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};