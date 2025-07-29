"use client";
import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import Features from "../components/portfolio/Features";
import WhyChooseUs from "../components/portfolio/WhyChooseUs";
import PricingSection from "../components/portfolio/PricingSection";
import FaqSection from "../components/portfolio/FaqSection";

const portfolio = () => {
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

export default portfolio;
