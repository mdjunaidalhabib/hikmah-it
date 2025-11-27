"use client";

import React from "react";
import Link from "next/link"; // ✅ add this
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* subtle decorative shapes (background only) */}
        <div className="w-72 h-72 bg-purple-300 rounded-full opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
      </div>

      <div className="relative text-center px-4 md:px-10 py-24 max-w-7xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight"
        >
          আপনার ব্যবসার জন্য{" "}
          <span className="text-orange-600 dark:text-blue-400">
            আধুনিক ই-কমার্স
          </span>{" "}
          ওয়েবসাইট তৈরি করুন
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 dark:text-gray-300"
        >
          সম্পূর্ণ{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            রেসপনসিভ
          </span>
          ,{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            দ্রুত লোডিং
          </span>{" "}
          ও{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">
            মোবাইল ফ্রেন্ডলি
          </span>{" "}
          ডিজাইন
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* ✅ Button as Link */}
          <Link
            href="/contact" // 🔁 change this to your order page if needed
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            অর্ডার করুন এখনই
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
