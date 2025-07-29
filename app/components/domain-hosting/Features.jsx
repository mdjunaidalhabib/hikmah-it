"use client";

import React from "react";
import {
  FaGlobe,
  FaLock,
  FaMoneyCheckAlt,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "বিশ্বস্ত হোস্টিং",
    description:
      "Hostinger, Namecheap ইত্যাদি বিশ্বস্ত সাইট থেকে ডোমেইন/হোস্টিং ক্রয়।",
    icon: <FaGlobe className="text-blue-600" />,
  },
  {
    title: "নিরাপদ পেমেন্ট",
    description: "নিরাপদ পেমেন্ট ও দ্রুত ডেলিভারি সার্ভিস।",
    icon: <FaLock className="text-green-600" />,
  },
  {
    title: "নিজস্ব গেটওয়ে",
    description: "নিজস্ব পেমেন্ট গেটওয়ে দিয়ে টাকা পরিশোধের সুবিধা।",
    icon: <FaMoneyCheckAlt className="text-purple-600" />,
  },
  {
    title: "বিশেষ ছাড়",
    description: "আমাদের মাধ্যমে অর্ডার করলে বিশেষ ছাড় ও অফার।",
    icon: <FaTags className="text-yellow-600" />,
  },
  {
    title: "২৪/৭ সাপোর্ট",
    description: "২৪/৭ কাস্টমার সাপোর্ট সুবিধা।",
    icon: <FaHeadset className="text-rose-600" />,
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
          আমাদের সার্ভিস ব্যবহার করলে আপনি যেসব সুবিধা পাচ্ছেন:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
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
