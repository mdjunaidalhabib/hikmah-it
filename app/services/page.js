import React from 'react'
import Services from "../components/home/services";
import CustomerReviewSlider from "../components/home/CustomerReviewSlider";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className='mt-14'>
      <Services />
      <CustomerReviewSlider />
      <Contact />
    </div>
  );
}
