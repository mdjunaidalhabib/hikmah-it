"use client";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaPaintBrush,
  FaLaptopCode,
  FaServer,
  FaRocket,
} from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    {
      icon: <FaUserCircle className="text-blue-500" />,
      title: "Requirement Analysis",
      description:
        "প্রথমে আমরা ব্যবসার ধরন এবং প্রয়োজন বুঝে নিই, যেন সঠিক সলিউশন দিতে পারি।",
    },
    {
      icon: <FaPaintBrush className="text-pink-500" />,
      title: "UI/UX Design",
      description:
        "তোমার ওয়েবসাইটের জন্য কাস্টম এবং আকর্ষণীয় UI/UX ডিজাইন তৈরি করা হয়।",
    },
    {
      icon: <FaLaptopCode className="text-green-500" />,
      title: "Development",
      description:
        "ডিজাইন অনুযায়ী কোডিং করে ওয়েবসাইট ফাংশনাল ও রেসপন্সিভ করা হয়।",
    },
    {
      icon: <FaServer className="text-purple-500 " />,
      title: "Testing & Deployment",
      description:
        "ওয়েবসাইটের বাগ ফিক্স করে সার্ভারে ডিপ্লয় করা হয়, যেন সবকিছু স্মুথ চলে।",
    },
    {
      icon: <FaRocket className="text-orange-500" />,
      title: "Support & Maintenance",
      description: "প্রজেক্ট শেষ হলেও আমরা নিয়মিত আপডেট ও সাপোর্ট দিয়ে থাকি।",
    },
  ];

  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white  -mt-4 p-2"
        >
          আমাদের <span className="text-blue-600">কাজের প্রক্রিয়া</span>
        </motion.h2>
        <p className="max-w-1xl mx-auto  mb-6 text-gray-600 dark:text-gray-300">
          প্রতিটি ধাপ আমরা পরিকল্পিতভাবে সম্পন্ন করি, যাতে তোমার ওয়েবসাইট হয়
          পারফেক্ট, প্রফেশনাল এবং কার্যকরী।
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
