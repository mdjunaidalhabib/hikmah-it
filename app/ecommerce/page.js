import React from "react";
import HeroSection from "../components/ecommerce/HeroSection";
import Features from "../components/ecommerce/Features";
import WhyChooseUs from "../components/ecommerce/WhyChooseUs";
import PricingSection from "../components/ecommerce/PricingSection";
import FaqSection from "../components/ecommerce/FaqSection";

const ecommerce = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <PricingSection />
      <FaqSection />
    </div>
  );
};
export default ecommerce;
