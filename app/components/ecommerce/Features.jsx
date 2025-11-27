"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaDollarSign,
  FaTruck,
  FaTags,
  FaWarehouse,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

const categories = [
  {
    title: "মূল ই-কমার্স ফিচারসমূহ",
    icon: <FaShoppingCart className="text-3xl text-purple-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ইউজার রেজিস্ট্রেশন ও লগইন",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "নিরাপদ চেকআউট সিস্টেম",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "উন্নত সার্চ সিস্টেম",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "স্মার্ট কার্ট সিস্টেম",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ইচ্ছেমতো উইশলিস্ট",
      },
    ],
  },
  {
    title: "প্রোডাক্ট ম্যানেজমেন্ট",
    icon: <FaTags className="text-3xl text-green-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "অসীম প্রোডাক্ট আপলোড",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "বাল্ক আপলোড (CSV/Excel)",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "SKU ও Barcode ম্যানেজমেন্ট",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "মাল্টি-ইমেজ সাপোর্ট",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "রেটিং ও রিভিউ সিস্টেম",
      },
    ],
  },
  {
    title: "অর্ডার ম্যানেজমেন্ট",
    icon: <FaCogs className="text-3xl text-blue-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "অর্ডার ট্র্যাকিং",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "স্ট্যাটাস আপডেট সিস্টেম",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ক্যানসেল / রিটার্ন / রিফান্ড",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ইনভয়েস ডাউনলোড (PDF)",
      },
    ],
  },
  {
    title: "পেমেন্ট সিস্টেম",
    icon: <FaDollarSign className="text-3xl text-yellow-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ক্যাশ অন ডেলিভারি (COD)",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "অনলাইন পেমেন্ট গেটওয়ে",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ম্যানুয়াল পেমেন্ট",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "পেমেন্ট ভেরিফিকেশন",
      },
    ],
  },
  {
    title: "শিপিং ও ডেলিভারি",
    icon: <FaTruck className="text-3xl text-red-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "কুরিয়ার ইন্টিগ্রেশন",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ডাইনামিক শিপিং চার্জ",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "ডেলিভারি এরিয়া কন্ট্রোল",
      },
    ],
  },
  {
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    icon: <FaWarehouse className="text-3xl text-indigo-600" />,
    items: [
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "রিয়েল-টাইম স্টক আপডেট",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "লো স্টক ওয়ার্নিং",
      },
      {
        icon: <FaCheckCircle className="text-green-500 mt-1" />,
        text: "অটো স্টক রিডিউস",
      },
    ],
  },
];

const EcommerceFeatures = () => {
  return (
    <section className="py-16 relative z-10 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* ✅ Background Animation (সবচেয়ে নিচে থাকবে) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-96 h-96 bg-pink-300 rounded-full opacity-20 absolute -bottom-32 -right-32 animate-pulse -z-10"></div>
      </div>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          ই-কমার্স ওয়েবসাইট ফিচারসমূহ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-purple-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6 transition-transform duration-300 hover:scale-[1.02]">
                {cat.icon}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              <ul className="grid grid-cols-1 gap-3 text-gray-700 dark:text-gray-300">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;
