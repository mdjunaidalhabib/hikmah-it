import React from "react";
import { FaMobileAlt, FaUser, FaRocket } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaMobileAlt className="text-indigo-600 text-3xl" />,
      title: "মোবাইল রেসপন্সিভ",
      description: "সব ডিভাইসে সুন্দরভাবে দেখা যাবে।",
    },
    {
      icon: <FaUser className="text-indigo-600 text-3xl" />,
      title: "পার্সোনাল ব্র্যান্ডিং",
      description: "নিজেকে অনলাইনে তুলে ধরার সবচেয়ে সহজ উপায়।",
    },
    {
      icon: <FaRocket className="text-indigo-600 text-3xl" />,
      title: "দ্রুত লোডিং",
      description: "অপটিমাইজড এবং পারফরমেন্সে উন্নত।",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          ফিচারসমূহ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded shadow"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
