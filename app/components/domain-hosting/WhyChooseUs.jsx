"use client";

import React from "react";
import {
  FaUserShield,
  FaMoneyBillWave,
  FaHandshake,
  FaComments,
} from "react-icons/fa";

const reasons = [
  {
    title: "অনলাইন পেমেন্টে সমস্যা?",
    description:
      "যারা অনলাইন পেমেন্ট করতে পারেন না, তাদের জন্য বিশ্বস্ত সমাধান।",
    icon: <FaUserShield className="text-blue-600" />,
  },
  {
    title: "কম খরচে সার্ভিস",
    description: "কম খরচে এবং ঝামেলাহীন সার্ভিস উপভোগ করুন।",
    icon: <FaMoneyBillWave className="text-green-600" />,
  },
  {
    title: "ট্রান্সপারেন্সি ও বিশ্বাস",
    description: "বিশ্বস্ততা ও ট্রান্সপারেন্সি বজায় রেখে কাজ করি।",
    icon: <FaHandshake className="text-purple-600" />,
  },
  {
    title: "সার্বক্ষণিক সহযোগিতা",
    description: "অর্ডারের আগে ও পরে পর্যাপ্ত সহযোগিতা করে থাকি।",
    icon: <FaComments className="text-rose-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          আমাদের কেন বেছে নেবেন?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          বিশ্বস্ততা, কম খরচ ও সহযোগিতামূলক ব্যবস্থাই আমাদেরকে আলাদা করে তোলে।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 text-center">
                {title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
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
