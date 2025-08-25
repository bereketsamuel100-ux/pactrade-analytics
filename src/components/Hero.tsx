import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Trusted by 10,000+ traders worldwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent leading-tight">
              Trade Smarter with a Real Journal
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Track every trade, analyze what works, and grow your edge with the most advanced trading journal. 
              Turn data into profits.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/auth/signin">
                <Button variant="hero" size="xl" className="min-w-48">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="min-w-48">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
              <img 
                src={heroDashboard} 
                alt="Trading Journal Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-card font-semibold">
              +$2,847 This Month
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-card px-4 py-2 rounded-lg">
              <div className="text-sm text-muted-foreground">Win Rate</div>
              <div className="text-2xl font-bold text-success">72.5%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};