import React from 'react'
import HeroSection from "../components/about/heroSection";
import Services from "../components/home/services";
import CameServices from "../components/about/CameServices";
import CustomerReviewSlider from "../components/home/CustomerReviewSlider";
import Contact from "../components/home/Contact";




export default function Home() {
  return (
    <div className="mt-14">
      <HeroSection />
      <Services />
      <CameServices />
      <CustomerReviewSlider />
      <Contact />
    </div>
  );
}
