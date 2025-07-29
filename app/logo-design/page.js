import React from "react";
import HeroSection from "../components/Logo-design/HeroSection";
import WhyChooseUs from "../components/Logo-design/WhyChooseUs";
import Packages from "../components/Logo-design/Packages";
import ContactSection from "../components/Logo-design/ContactSection";

export default function LogoDesignService() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-white p-6">
      <HeroSection />
      <WhyChooseUs />
      <Packages />
      <ContactSection />
    </main>
  );
}
