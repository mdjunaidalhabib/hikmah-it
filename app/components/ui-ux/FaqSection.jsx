"use client";

import React from "react";

const faqs = [
  {
    question: "আমি কি কাস্টম ডিজাইন চাইতে পারি?",
    answer: "হ্যাঁ, আপনি আপনার পছন্দমতো ডিজাইনের অনুরোধ করতে পারবেন।",
  },
  {
    question: "ডেলিভারির সময়সীমা কত?",
    answer: "সাধারণত ৩-৭ দিনের মধ্যে ডিজাইন সম্পন্ন করা হয়।",
  },
  {
    question: "আমি কি সোর্স ফাইল পাবো?",
    answer: "হ্যাঁ, নির্দিষ্ট প্যাকেজে সোর্স ফাইল অন্তর্ভুক্ত থাকে।",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">প্রশ্ন ও উত্তর</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-4"
            >
              <h4 className="font-semibold mb-2">❓ {faq.question}</h4>
              <p>✅ {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
