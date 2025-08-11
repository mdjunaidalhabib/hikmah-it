import React from 'react'
import About from "../components/about/About";
import Services from "../components/home/services";
import CameServices from "../components/about/CameServices";
import CustomerReviewSlider from "../components/home/CustomerReviewSlider";
import Contact from "../components/home/Contact";




export default function Home() {
  return (
    <div className="mt-14">
      <About />
      <Services />
      <CameServices />
      <CustomerReviewSlider />
      <Contact />
    </div>
  );
}
