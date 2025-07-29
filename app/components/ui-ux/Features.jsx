"use client";

import React from "react";
import { FaPaintBrush, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const features = [
  {
    icon: <FaPaintBrush className="text-3xl text-indigo-600" />,
    title: "ক্রিয়েটিভ ডিজাইন",
    description: "আপনার ব্র্যান্ডের সাথে মানানসই ইউনিক ও আধুনিক ডিজাইন।",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-indigo-600" />,
    title: "মোবাইল রেসপন্সিভ",
    description: "সকল ডিভাইসে সুন্দরভাবে প্রদর্শনযোগ্য ডিজাইন।",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-indigo-600" />,
    title: "ইউজার ফ্রেন্ডলি ইন্টারফেস",
    description: "সহজ এবং দ্রুত ব্যবহারযোগ্য UI উপস্থাপন।",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          আমাদের বিশেষত্ব
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
