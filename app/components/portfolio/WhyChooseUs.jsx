import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    "দ্রুত ও সময়মত ডেলিভারি",
    "সম্পূর্ণ কাস্টমাইজড ডিজাইন",
    "বাজেট ফ্রেন্ডলি প্যাকেজ",
    "আজীবন টেকনিক্যাল সাপোর্ট",
  ];

  return (
    <section className="py-16 px-4 bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          কেন আমাদের নির্বাচন করবেন?
        </h2>
        <ul className="space-y-4">
          {reasons.map((reason, idx) => (
            <li
              key={idx}
              className="flex items-center text-gray-700 dark:text-gray-300"
            >
              <FaCheckCircle className="text-green-500 mr-2" /> {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
