import React from "react";
import HeroSection from "../components/video-editing/HeroSection";
import Features from "../components/video-editing/Features";
import WhyChooseUs from "../components/video-editing/WhyChooseUs";
import PricingSection from "../components/video-editing/PricingSection";
import FaqSection from "../components/video-editing/FaqSection";

export default function videoEditing() {
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
