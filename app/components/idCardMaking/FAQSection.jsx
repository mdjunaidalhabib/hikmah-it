import React, { useState } from "react";

const faqs = [
  {
    question: "আইডি কার্ড কত দিনের মধ্যে ডেলিভারি পাবো?",
    answer:
      "সাধারণত ৩-৫ কার্যদিবসের মধ্যে ডেলিভারি সম্পন্ন করা হয়। জরুরি প্রয়োজনে দ্রুত সেবা প্রদান করা হয়।",
  },
  {
    question: "কোনো ডিজাইন চার্জ আছে কি?",
    answer:
      "যদি আপনি আমাদের টেমপ্লেট থেকে ডিজাইন গ্রহণ করেন, তাহলে আলাদা কোনো চার্জ নেই। তবে কাস্টম ডিজাইনের ক্ষেত্রে অতিরিক্ত ডিজাইন চার্জ প্রযোজ্য।",
  },
  {
    question: "কীভাবে অর্ডার করবো?",
    answer:
      "আপনার নাম, মোবাইল নম্বর, প্রতিষ্ঠান, পরিমাণ ও ঠিকানা সহ ফর্ম পূরণ করে অর্ডার সাবমিট করতে পারবেন।",
  },
  {
    question: "কত পরিমাণ অর্ডারে হোম ডেলিভারি ফ্রি?",
    answer:
      "১০০টির বেশি অর্ডার করলে হোম ডেলিভারি চার্জ ফ্রি। এর কম হলে ডেলিভারি চার্জ প্রযোজ্য।",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        ❓ সাধারণ প্রশ্নোত্তর
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-lg"
          >
            <button
              className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
