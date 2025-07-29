import React, { useState } from "react";

const FaqSection = () => {
  const [active, setActive] = useState(null);
  const toggle = (index) => setActive(active === index ? null : index);

  const faqs = [
    {
      question: "কত সময়ে ওয়েবসাইট ডেলিভারি পাবো?",
      answer: "সাধারণত ৩-৭ কর্মদিবসের মধ্যে ডেলিভারি করা হয়।",
    },
    {
      question: "পেমেন্ট কিভাবে করবো?",
      answer: "বিকাশ/নগদ অথবা ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করতে পারবেন।",
    },
    {
      question: "হোস্টিং কি আপনারা দিবেন?",
      answer: "আমরা হোস্টিং সেটআপে সাহায্য করি এবং চাহিদামতো সরবরাহ করি।",
    },
  ];

  return (
    <section className="py-16 px-4 bg-indigo-100 dark:bg-indigo-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          প্রায় জিজ্ঞাসিত প্রশ্ন
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 flex justify-between items-center text-indigo-700 dark:text-indigo-300 font-semibold"
              >
                <span>{faq.question}</span>
                <span>{active === idx ? "−" : "+"}</span>
              </button>
              {active === idx && (
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
