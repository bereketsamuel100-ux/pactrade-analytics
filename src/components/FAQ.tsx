import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does billing work?",
      answer: "We offer monthly and yearly billing options. You can start with a free account and upgrade anytime. All paid plans include a 30-day money-back guarantee. Cancel or change your plan at any time from your account settings."
    },
    {
      question: "Is my trading data private and secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) to protect your data both in transit and at rest. We're SOC 2 compliant and never share your trading data with third parties. Your data is stored securely in the cloud with automatic backups."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel during a billing cycle, you'll continue to have access until the end of your current period. We also offer a 30-day money-back guarantee on all plans."
    },
    {
      question: "Which brokers and exchanges do you support?",
      answer: "We support 50+ brokers and exchanges including Interactive Brokers, TD Ameritrade, E*TRADE, Charles Schwab, Binance, Coinbase, and many more. You can import via CSV from any broker, or use our direct API integrations for automatic sync."
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer: "Yes! Our Premium plan includes team workspaces for up to 5 users. For larger teams or custom requirements, contact us for enterprise pricing. We offer white-label solutions, custom integrations, and dedicated support."
    },
    {
      question: "Can I try before I buy?",
      answer: "Definitely! We offer a generous free plan with 100 trades per month. All paid plans also include a 14-day free trial with full access to premium features. No credit card required to start."
    },
    {
      question: "What kind of analytics do you provide?",
      answer: "Our analytics include P&L tracking, win rate, expectancy, profit factor, Sharpe ratio, maximum drawdown, tag performance heatmaps, time-based analysis, risk metrics, and much more. All metrics are calculated in real-time as you add trades."
    },
    {
      question: "Do you have a mobile app?",
      answer: "Our web app is fully responsive and works great on mobile devices. We're currently developing native iOS and Android apps, which will be available to Pro and Premium subscribers in early 2024."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Got questions? We have answers. If you can't find what you're looking for, 
            reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border/50 shadow-card">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/20 transition-smooth rounded-lg"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-card rounded-xl border border-border/50 shadow-card">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of your trading journal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-primary hover:underline font-medium">
                Contact Support
              </button>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <button className="text-primary hover:underline font-medium">
                Schedule Demo
              </button>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <button className="text-primary hover:underline font-medium">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};