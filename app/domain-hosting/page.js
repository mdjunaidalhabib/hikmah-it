import React from "react";
import HeroSection from "../components/domain-hosting/HeroSection";
import Features from "../components/domain-hosting/Features";
import WhyChooseUs from "../components/domain-hosting/WhyChooseUs";
import PricingSection from "../components/domain-hosting/PricingSection";
import FaqSection from "../components/domain-hosting/FaqSection";

export default function domainHosting() {
  return (
    <div>
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
