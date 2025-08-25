import { Star, Users, TrendingUp, Shield } from "lucide-react";

export const SocialProof = () => {
  const stats = [
    { icon: Users, label: "Active Traders", value: "10,000+" },
    { icon: TrendingUp, label: "Trades Logged", value: "2.5M+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
  ];

  const testimonials = [
    {
      quote: "Transformed my trading completely. Finally understand my patterns.",
      author: "Sarah Chen",
      role: "Day Trader",
      rating: 5,
    },
    {
      quote: "The analytics are incredible. Helped me identify my best setups.",
      author: "Mike Rodriguez",
      role: "Swing Trader", 
      rating: 5,
    },
    {
      quote: "Essential tool for serious traders. The insights are game-changing.",
      author: "David Kim",
      role: "Crypto Trader",
      rating: 5,
    },
  ];

  const logos = [
    "TradingView", "MetaTrader", "Interactive Brokers", "TD Ameritrade", 
    "E*TRADE", "Schwab", "Binance", "Coinbase"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Loved by traders worldwide
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Logos */}
        <div className="text-center">
          <div className="text-muted-foreground mb-8">
            Integrates with your favorite platforms
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-muted-foreground font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};