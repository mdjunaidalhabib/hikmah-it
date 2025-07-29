import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-indigo-100 dark:bg-indigo-900 py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        আপনার নিজের পোর্টফোলিও ওয়েবসাইট তৈরি করুন
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        পেশাদার ডিজাইনে আপনার স্কিল, অভিজ্ঞতা ও কাজের নমুনা প্রদর্শন করুন।
      </p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        এখনই শুরু করুন
      </button>
    </section>
  );
};

export default HeroSection;
