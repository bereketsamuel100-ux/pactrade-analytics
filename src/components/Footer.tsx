import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Shield, 
  FileText, 
  HelpCircle, 
  Activity 
} from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" }, 
        { label: "Integrations", href: "#integrations" },
        { label: "API", href: "/api-docs" },
        { label: "Roadmap", href: "/roadmap" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Trading Guides", href: "/guides" },
        { label: "Webinars", href: "/webinars" },
        { label: "Community", href: "/community" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Status", href: "/status" },
        { label: "Bug Reports", href: "/bugs" },
        { label: "Feature Requests", href: "/feedback" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Partners", href: "/partners" },
        { label: "Investors", href: "/investors" }
      ]
    }
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "/terms", icon: FileText },
    { label: "Privacy Policy", href: "/privacy", icon: Shield },
    { label: "Cookie Policy", href: "/cookies", icon: HelpCircle },
    { label: "Status", href: "/status", icon: Activity }
  ];

  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Email", href: "mailto:hello@tradingjournal.com", icon: Mail }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  TradeJournal
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  The most advanced trading journal for serious traders. Track, analyze, and improve your performance.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/50">
          <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Stay updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get trading tips, product updates, and market insights delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary-hover transition-smooth">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 TradeJournal. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <link.icon className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};