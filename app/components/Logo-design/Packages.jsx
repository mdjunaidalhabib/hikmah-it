"use client";

import React from "react";
import { FaLeaf, FaGem, FaCrown } from "react-icons/fa";

const packages = [
  {
    title: "বেসিক লোগো",
    price: "৳৫০০",
    icon: <FaLeaf className="text-green-600" />,
    features: ["১টি কনসেপ্ট", "PNG ফরম্যাটে ডেলিভারি"],
  },
  {
    title: "স্ট্যান্ডার্ড লোগো",
    price: "৳১০০০",
    icon: <FaGem className="text-indigo-600" />,
    features: ["২টি কনসেপ্ট", "PNG + PDF ফরম্যাটে ডেলিভারি"],
  },
  {
    title: "প্রিমিয়াম লোগো",
    price: "৳১৫০০",
    icon: <FaCrown className="text-yellow-500" />,
    features: ["৩টি কনসেপ্ট", "AI + PNG + PDF ফরম্যাট", "ব্র্যান্ডিং গাইড সহ"],
  },
];

export default function Packages() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          আমাদের লোগো ডিজাইন প্যাকেজসমূহ
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          আপনার প্রয়োজন অনুযায়ী সাশ্রয়ী থেকে প্রিমিয়াম লেভেলের লোগো প্যাকেজ বেছে
          নিন।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map(({ title, price, icon, features }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-2xl font-bold text-indigo-600 mb-3">{price}</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm text-left">
                {features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
