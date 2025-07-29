import React from "react";
import { FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900 mt-15">
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white text-center -mt-4 p-2">
          আপনার স্বপ্নের ওয়েবসাইট তৈরি হোক আমাদের সাথে!
        </h1>
        <p className="max-w-1xl mx-auto  mb-6 text-gray-600 dark:text-gray-300">
          আধুনিক, রেসপন্সিভ, দ্রুত লোডিং এবং SEO ফ্রেন্ডলি ওয়েবসাইট ডিজাইন করে
          দিচ্ছি সম্পূর্ণ কাস্টমভাবে।
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm md:text-base">
          <span className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded shadow">
            <FaCode /> কাস্টম ডিজাইন
          </span>
          <span className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded shadow">
            <FaMobileAlt /> মোবাইল রেসপন্সিভ
          </span>
          <span className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded shadow">
            <FaGlobe /> ফাস্ট লোডিং ও SEO Ready
          </span>
        </div>
        <a
          href="#order-form"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          ওয়েবসাইট বানাতে চাই
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
