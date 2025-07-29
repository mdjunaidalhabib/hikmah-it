"use client";

import React from "react";
import { FaMobileAlt, FaLock, FaRocket, FaShoppingCart } from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt className="text-purple-600" />,
    title: "মোবাইল রেসপনসিভ",
    description: "সকল ডিভাইসে সঠিকভাবে কাজ করে এমন রেসপনসিভ ডিজাইন।",
  },
  {
    icon: <FaRocket className="text-rose-500" />,
    title: "দ্রুত লোডিং স্পিড",
    description: "উচ্চগতির ও অপ্টিমাইজড ওয়েব পেজ লোডিং সিস্টেম।",
  },
  {
    icon: <FaShoppingCart className="text-green-600" />,
    title: "ডাইনামিক প্রোডাক্ট ম্যানেজমেন্ট",
    description: "সহজেই প্রোডাক্ট যোগ, সম্পাদনা ও মুছে ফেলার সুবিধা।",
  },
  {
    icon: <FaLock className="text-blue-600" />,
    title: "নিরাপদ পেমেন্ট গেটওয়ে",
    description: "SSL সিকিউরড নিরাপদ পেমেন্ট ব্যবস্থা সংযুক্ত।",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          আমাদের ফিচারসমূহ
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          আমাদের ওয়েবসাইট সার্ভিসে যা যা পাচ্ছেন তা নিচে দেখুন।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
