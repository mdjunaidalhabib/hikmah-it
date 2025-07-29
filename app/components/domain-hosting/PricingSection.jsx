"use client";

import React from "react";
import { FaGlobe, FaServer, FaBoxOpen } from "react-icons/fa";

const pricing = [
  {
    title: "ডোমেইন কিনে দেয়া",
    price: "৳২০০ ফি",
    desc: "আপনার পছন্দ অনুযায়ী ডোমেইন কিনে দেয়া হবে।",
    icon: <FaGlobe className="text-blue-600" />,
  },
  {
    title: "হোস্টিং কিনে দেয়া",
    price: "৳৩০০ ফি",
    desc: "বিশ্বস্ত হোস্টিং কোম্পানি থেকে হোস্টিং কিনে দেয়া হবে।",
    icon: <FaServer className="text-green-600" />,
  },
  {
    title: "ডোমেইন + হোস্টিং",
    price: "৳৪৫০ প্যাকেজ ফি",
    desc: "একসাথে নিলে ডিসকাউন্ট সহ সার্ভিস।",
    icon: <FaBoxOpen className="text-purple-600" />,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          সার্ভিস চার্জ সমূহ
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          আমাদের সার্ভিসের চার্জ নিচে দেখুন। আমরা সাশ্রয়ী ও নির্ভরযোগ্য সেবা
          নিশ্চিত করি।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map(({ title, price, desc, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-2xl font-bold text-indigo-600 mb-2">{price}</p>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
