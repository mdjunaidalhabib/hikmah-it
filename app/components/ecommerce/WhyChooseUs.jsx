"use client";

import React from "react";
import { FaStar, FaTools, FaUserShield } from "react-icons/fa";

const reasons = [
  {
    icon: <FaStar className="text-yellow-500" />,
    title: "পেশাদার কোয়ালিটি",
    description: "আমাদের ডিজাইন সর্বোচ্চ মানসম্পন্ন ও প্রফেশনাল।",
  },
  {
    icon: <FaTools className="text-indigo-500" />,
    title: "কাস্টমাইজড ডিজাইন",
    description: "আপনার পছন্দ অনুযায়ী ১০০% কাস্টম ডিজাইন সেবা।",
  },
  {
    icon: <FaUserShield className="text-green-500" />,
    title: "পরিপূর্ণ সাপোর্ট",
    description: "প্রয়োজনে রিভিশন সহ সর্বোচ্চ সাপোর্ট আমরা দিয়ে থাকি।",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14 px-4 bg-gray-100 dark:bg-gray-800 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          আমাদের কেন নির্বাচন করবেন?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          আমাদের সার্ভিস গুলোর ব্যতিক্রমী বৈশিষ্ট্যগুলো জানতে নিচের পয়েন্টগুলো
          দেখুন।
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map(({ icon, title, description }, idx) => (
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

export default WhyChooseUs;
