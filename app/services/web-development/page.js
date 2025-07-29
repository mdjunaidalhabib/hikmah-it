import React from "react";
import HeroSection from "../../components/web-development/HeroSection";
import WhyChooseUs from "../../components/web-development/WhyChooseUs";
import WorkProcess from "../../components/web-development/WorkProcess";
import ServicesSection from "../../components/web-development/ServicesSection";

export default function webDevelopment() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <WorkProcess />
      <ServicesSection />
    </div>
  );
}
