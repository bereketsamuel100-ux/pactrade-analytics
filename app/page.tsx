"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
