"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "বেসিক প্ল্যান",
    price: "৳৯৯৯/মাস",
    features: [
      "সব প্রোডাক্টে প্রবেশাধিকার",
      "স্ট্যান্ডার্ড শিপিং",
      "সাধারণ সাপোর্ট",
    ],
  },
  {
    name: "প্রিমিয়াম প্ল্যান",
    price: "৳১৯৯৯/মাস",
    features: [
      "ফ্রি এক্সপ্রেস ডেলিভারি",
      "অগ্রাধিকার ভিত্তিক কাস্টমার সাপোর্ট",
      "বিশেষ ডিসকাউন্ট",
    ],
  },
  {
    name: "আলটিমেট প্ল্যান",
    price: "৳২৯৯৯/মাস",
    features: [
      "সারা বিশ্বে ফ্রি ডেলিভারি",
      "২৪/৭ ডেডিকেটেড সাপোর্ট",
      "সেল শুরুর আগেই এক্সেস",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
        আমাদের মূল্য পরিকল্পনা
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        আপনার প্রয়োজন অনুযায়ী সেরা একটি প্ল্যান বেছে নিন এবং আমাদের প্রিমিয়াম
        সেবা উপভোগ করুন।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(({ name, price, features }, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg p-8 flex flex-col transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {name}
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-3xl font-bold mb-6 text-center">
              {price}
            </p>
            <ul className="mb-6 space-y-3 flex-1">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-green-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
              প্ল্যানটি নির্বাচন করুন
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
