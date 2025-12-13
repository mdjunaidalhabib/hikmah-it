import React from 'react'
import Services from "../components/home/services";
import CustomerReviewSlider from "../components/home/CustomerReviewSlider";
export default function Home() {
  return (
    <div className='mt-12'>
      <Services />
      <CustomerReviewSlider />
    </div>
  );
}
