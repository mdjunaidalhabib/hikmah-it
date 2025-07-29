import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900 mt-15">
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          আপনার ব্যবসার জন্য আধুনিক ই-কমার্স ওয়েবসাইট তৈরি করুন
        </h1>
        <p className="text-lg md:text-xl mb-6">
          সম্পূর্ণ রেসপনসিভ, দ্রুত লোডিং ও মোবাইল ফ্রেন্ডলি ডিজাইন
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
          অর্ডার করুন এখনই
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
