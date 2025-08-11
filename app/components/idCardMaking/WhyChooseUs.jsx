import React from "react";
import {
  FaLaptopCode,
  FaIdCard,
  FaPaintBrush,
  FaServer,
  FaShippingFast,
  FaSmile,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaIdCard className="text-blue-600" />,
    title: "আধুনিক ডিজাইনের আইডি কার্ড",
    description:
      "নান্দনিক ও মানসম্মত ডিজাইনে তৈরি করা হয় আইডি কার্ড, যা ছাত্র-শিক্ষক সবার কাছে পছন্দনীয়।",
  },
  {
    icon: <FaPaintBrush className=" text-green-600" />,
    title: "কাস্টম ডিজাইন সাপোর্ট",
    description:
      "চাইলে আপনি নিজের পছন্দ অনুযায়ী ডিজাইন করাতে পারবেন, আমাদের দক্ষ ডিজাইনার টিম সহায়তা করবে।",
  },
  {
    icon: <FaServer className=" text-purple-600" />,
    title: "অর্ডার ট্র্যাকিং ও ডাটাবেইজ সংরক্ষণ",
    description:
      "আপনার অর্ডার ও ডিজাইনগুলো আমাদের সিস্টেমে সংরক্ষিত থাকে, ভবিষ্যতে রিফেরেন্স হিসেবে ব্যবহারযোগ্য।",
  },
  {
    icon: <FaShippingFast className=" text-orange-600" />,
    title: "দ্রুত ও নিরাপদ হোম ডেলিভারি",
    description:
      "নির্দিষ্ট পরিমাণ অর্ডারে হোম ডেলিভারি ফ্রি, অন্যথায় স্বল্প ডেলিভারি চার্জে সেবা নিশ্চিত।",
  },
  {
    icon: <FaLaptopCode className="text-red-600" />,
    title: "অনলাইন সাপোর্ট ও ফিডব্যাক ব্যবস্থা",
    description:
      "আপনি চাইলে ওয়েবসাইটেই অর্ডার ও রিভিউ দিতে পারবেন, এবং আমাদের টিম রেসপন্স করবে দ্রুত।",
  },
  {
    icon: <FaSmile className=" text-yellow-600" />,
    title: "গ্রাহক সন্তুষ্টিই আমাদের অগ্রাধিকার",
    description:
      "আমরা কাজ করি আন্তরিকতা ও দায়িত্বের সাথে, যাতে আপনি পান সর্বোচ্চ মানের সেবা।",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          🤝 কেন হিকমাহ আইটি সেন্টার?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>{" "}
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
