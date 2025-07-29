// FaqSection.jsx
"use client";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "স্কুল ম্যানেজমেন্ট সিস্টেম কি?",
    answer:
      "এটি একটি সফটওয়্যার যা স্কুলের ছাত্র-ছাত্রী, শিক্ষক, ক্লাস, উপস্থিতি, ও ফলাফলসহ সমস্ত তথ্য ডিজিটালি ম্যানেজ করে।",
  },
  {
    question: "কতজন ছাত্র পর্যন্ত সিস্টেম ব্যবহার করা যাবে?",
    answer:
      "আমাদের প্যাকেজ অনুসারে ১০০ থেকে অসীম সংখ্যক ছাত্র পর্যন্ত ব্যবহার করা যায়।",
  },
  {
    question: "কোন প্রযুক্তি ব্যবহার করা হয়েছে?",
    answer: "আমাদের সিস্টেম React, Node.js, এবং PostgreSQL ব্যবহার করে তৈরি।",
  },
  {
    question: "সাপোর্ট কেমন দেওয়া হয়?",
    answer:
      "আমরা মাসিক ও টেকনিক্যাল সাপোর্ট দিয়ে থাকি, যেকোনো সমস্যায় দ্রুত সহায়তা পাবেন।",
  },
  {
    question: "ডেটা সিকিউরিটি কেমন?",
    answer:
      "আমাদের সিস্টেমে ডেটা সুরক্ষায় উন্নত এনক্রিপশন ও ব্যাকআপ ব্যবস্থাপনা রয়েছে।",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <FaQuestionCircle className="text-blue-600 mr-3 text-4xl" />
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-5 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
