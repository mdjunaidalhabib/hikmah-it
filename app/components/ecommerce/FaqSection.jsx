"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "কীভাবে অর্ডার করতে পারি?",
    answer:
      "আমাদের প্রোডাক্টগুলো ব্রাউজ করুন, কার্টে যোগ করুন এবং নিরাপদে চেকআউট করুন।",
  },
  {
    question: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    answer:
      "আমরা ক্রেডিট কার্ড, বিকাশ, নগদ, এবং অন্যান্য জনপ্রিয় গেটওয়ে গ্রহণ করি।",
  },
  {
    question: "শিপিং কি সত্যিই ফ্রি?",
    answer:
      "৳৫০০ টাকার বেশি অর্ডারে ফ্রি শিপিং দেওয়া হয়। এর কম হলে সাধারণ চার্জ প্রযোজ্য।",
  },
  {
    question: "আমি কি পণ্য রিটার্ন করতে পারি?",
    answer:
      "হ্যাঁ, ব্যবহার না করা পণ্যের জন্য ৩০ দিনের মধ্যে রিটার্ন করার সুযোগ রয়েছে।",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        প্রায়শই জিজ্ঞাসিত প্রশ্নাবলি
      </h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className="border border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-4 text-left text-indigo-600 dark:text-indigo-400 font-semibold focus:outline-none"
            >
              <span>{question}</span>
              <span className="text-xl">{activeIndex === idx ? "−" : "+"}</span>
            </button>
            {activeIndex === idx && (
              <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
