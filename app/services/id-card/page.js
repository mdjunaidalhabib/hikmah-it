"use client"
import React from 'react'
import HeroSection from "../../components/idCardMaking/HeroSection";
import ServiceSection from "../../components/idCardMaking/ServiceSection";
import PricingSection from "../../components/idCardMaking/PricingSection";
import CombinedSection from "../../components/idCardMaking/CombinedSection";
import CustomerReviewSlider from "../../components/home/CustomerReviewSlider";
import WhyChooseUs from "../../components/idCardMaking/WhyChooseUs";





export default function page() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <PricingSection />
      <WhyChooseUs />
      <CombinedSection />
      <CustomerReviewSlider />
    </div>
  );
}
