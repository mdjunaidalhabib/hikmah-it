"use client";

import React from "react";
import {
  FaPenNib,
  FaFileImage,
  FaClock,
  FaRedo,
  FaUserTie,
} from "react-icons/fa";

const reasons = [
  {
    title: "কাস্টম লোগো ডিজাইন",
    description: "আপনার চাহিদা অনুযায়ী সম্পূর্ণ কাস্টম লোগো তৈরি করা হয়।",
    icon: <FaPenNib className="text-pink-600" />,
  },
  {
    title: "বিভিন্ন ফরম্যাটে ডেলিভারি",
    description: "AI, PNG, PDF সহ আপনার প্রয়োজন অনুযায়ী ফরম্যাটে ডেলিভারি।",
    icon: <FaFileImage className="text-green-600" />,
  },
  {
    title: "দ্রুত ডেলিভারি",
    description: "৪৮-৭২ ঘণ্টার মধ্যে ডিজাইন ডেলিভারি করা হয়।",
    icon: <FaClock className="text-blue-600" />,
  },
  {
    title: "রিভিশনের সুবিধা",
    description: "যতবার দরকার, রিভিশন চাওয়ার সুযোগ রয়েছে।",
    icon: <FaRedo className="text-yellow-600" />,
  },
  {
    title: "অভিজ্ঞ ডিজাইনার",
    description: "আমাদের টিমে রয়েছে দক্ষ ও সৃজনশীল লোগো ডিজাইনার।",
    icon: <FaUserTie className="text-purple-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          কেন আমাদের লোগো সার্ভিস নিবেন?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          আমরা লোগো ডিজাইন সার্ভিসে ক্রিয়েটিভিটি, কোয়ালিটি এবং সময়নিষ্ঠতা বজায়
          রাখি।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 text-center">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
