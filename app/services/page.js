import React from 'react'
import Services from "../components/home/services";
import CustomerReviewSlider from "../components/home/CustomerReviewSlider";
export default function Home() {
  return (
    <div className='mt-14'>
      <Services />
      <CustomerReviewSlider />
    </div>
  );
}
