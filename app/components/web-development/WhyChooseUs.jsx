"use client"
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaUserCircle,
  FaServer,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaLaptopCode className="text-blue-500" />,
      title: "Responsive & Modern Design",
      description:
        "আমাদের তৈরি ওয়েবসাইট সব ডিভাইসের জন্য সম্পূর্ণ রেসপন্সিভ এবং আধুনিক ডিজাইনের।",
    },
    {
      icon: <FaPaintBrush className="text-pink-500" />,
      title: "Custom UI/UX",
      description:
        "আপনার ব্যবসার ধরন অনুযায়ী একদম কাস্টমাইজড UI/UX ডিজাইন করে থাকি।",
    },
    {
      icon: <FaServer className="text-green-500" />,
      title: "Fast & Secure",
      description:
        "আমাদের ওয়েবসাইটগুলো দ্রুত লোড হয় এবং নিরাপদ সার্ভার সাপোর্টসহ তৈরি করা হয়।",
    },
    {
      icon: <FaUserCircle className="text-purple-500" />,
      title: "Dedicated Support",
      description:
        "প্রজেক্ট শেষ হওয়ার পরেও আমরা আপনাকে টেকনিক্যাল সাপোর্ট দিয়ে থাকি।",
    },
  ];

  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white text-center -mt-4 p-2"
        >
          কেন আমাদের{" "}
          <span className="text-blue-600 text-1xl">
            Custom Web Design & Development
          </span>{" "}
          বেছে নেবেন?
        </motion.h2>
        <p className="max-w-1xl mx-auto  mb-6 text-gray-600 dark:text-gray-300">
          আমরা শুধু ওয়েবসাইট বানাই না, বরং ব্যবসাকে অনলাইনে সফল করতে পূর্ণাঙ্গ
          ওয়েব সলিউশন দিয়ে থাকি।
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
