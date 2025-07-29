import React from "react";
import {
  FaLaptopCode,
  FaSchool,
  FaShoppingCart,
  FaUserCircle,
  FaPaintBrush,
  FaIdCard,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIdCard className="text-blue-600" />,
    title: "প্রফেশনাল ডিজাইন",
    description:
      "আমাদের অভিজ্ঞ ডিজাইনাররা আপনার আইডি কার্ড সুন্দর ও আকর্ষণীয় ডিজাইন করবে।",
  },
  {
    icon: <FaLaptopCode className="text-green-600" />,
    title: "আধুনিক প্রযুক্তি",
    description:
      "সর্বাধুনিক সফটওয়্যার ও মেশিন ব্যবহার করে দ্রুত ও নিখুঁত কার্ড প্রিন্টিং।",
  },
  {
    icon: <FaSchool className="text-pink-600" />,
    title: "শিক্ষাপ্রতিষ্ঠানের জন্য উপযোগী",
    description: "স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের জন্য বিশেষ আইডি কার্ড সার্ভিস।",
  },
  {
    icon: <FaShoppingCart className="text-yellow-600" />,
    title: "সহজ অর্ডার প্রক্রিয়া",
    description:
      "অনলাইন অর্ডারের মাধ্যমে দ্রুত ও সহজ পদ্ধতিতে আইডি কার্ড তৈরি করানো যায়।",
  },
  {
    icon: <FaUserCircle className="text-rose-500" />,
    title: "পার্সোনালাইজেশন",
    description:
      "আপনার প্রয়োজন অনুযায়ী নাম, ছবি, কোড ইত্যাদি পার্সোনালাইজড আইডি কার্ড।",
  },
  {
    icon: <FaPaintBrush className="text-orange-600" />,
    title: "উচ্চ মানের মেটেরিয়াল",
    description:
      "দীর্ঘস্থায়ী ও টেকসই কার্ড তৈরি করার জন্য মানসম্মত উপকরণ ব্যবহৃত হয়।",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white -mt-4 p-2">
          আমাদের সার্ভিসসমূহ
        </h2>
        <p className="max-w-2xl mx-auto  mb-6 text-gray-600 dark:text-gray-300">
          আইডি কার্ড তৈরির ক্ষেত্রে আমরা যেসব সুবিধা ও গুণগত মান নিশ্চিত করি তা
          নীচে দেখুন।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
