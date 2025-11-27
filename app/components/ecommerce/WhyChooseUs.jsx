"use client";

import React from "react";
import Link from "next/link"; // ✅ ADD THIS
import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaHandsHelping,
  FaSyncAlt,
  FaDollarSign,
  FaStar,
  FaPaintBrush,
  FaSearch,
  FaChartLine,
  FaBolt,
  FaCogs,
  FaHeadset,
  FaGlobe,
  FaLaptopCode,
  FaServer,
  FaUndoAlt,
} from "react-icons/fa";

// ✅ Highlight / stats row (no scores)
const highlights = [
  {
    icon: <FaBolt className="text-indigo-600 dark:text-indigo-400" />,
    value: "< 300ms",
    label: "লোডিং টাইম",
  },
  {
    icon: <FaUndoAlt className="text-indigo-600 dark:text-indigo-400" />,
    value: "30-Day",
    label: "মানি ব্যাক",
  },
  {
    icon: <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />,
    value: "App Ready",
    label: "Mobile + Desktop",
  },
  {
    icon: <FaHeadset className="text-indigo-600 dark:text-indigo-400" />,
    value: "Contact",
    label: "24/7 সাপোর্ট",
  },
];

const uniqueReasons = [
  {
    icon: <FaPaintBrush className="text-pink-500" />,
    title: "অনন্য ডিজাইন",
    description:
      "আমাদের ডিজাইন অন্য কোথাও নেই—একদম ইউনিক, প্রফেশনাল ও ব্র্যান্ড-ফোকাসড।",
  },
  {
    icon: <FaBolt className="text-yellow-500" />,
    title: "ইনস্ট্যান্ট লোডিং (মিলিসেকেন্ডে)",
    description:
      "আমরা সাইটকে এমনভাবে অপ্টিমাইজ করি যাতে ক্লিক করার সাথে সাথেই লোড হয়—মিলিসেকেন্ড লেভেলের স্পিড। দ্রুত লোডিং ভিজিটর ধরে রাখে, কনভার্সন বাড়ায়।",
    badge: "⚡ Instant Speed",
  },
  {
    icon: <FaRocket className="text-red-500" />,
    title: "দ্রুত লঞ্চ",
    description:
      "আপনার ওয়েবসাইট/অ্যাপ দ্রুত লাইভ হবে—সময় ও ব্যয় দুটোই বাঁচবে।",
  },
  {
    icon: <FaMobileAlt className="text-purple-500" />,
    title: "100% মোবাইল ফ্রেন্ডলি",
    description:
      "সব ডিভাইসে পারফেক্ট ভিউ—মোবাইল ইউজারদের অভিজ্ঞতা দ্বিগুণ বাড়ায়।",
  },
  {
    icon: <FaLaptopCode className="text-indigo-500" />,
    title: "ডেস্কটপ + মোবাইল অ্যাপ সাপোর্ট",
    description:
      "চাইলে Android/iOS মোবাইল অ্যাপ এবং Windows/macOS ডেস্কটপ অ্যাপও বানানো যাবে একই ডিজাইন ভাষায়।",
    badge: "📱💻 App Ready",
  },
  {
    icon: <FaHandsHelping className="text-green-500" />,
    title: "ব্যক্তিগত মনিটরিং ও গাইডেন্স",
    description:
      "প্রথম দিন থেকে ডেলিভারি পর্যন্ত এক-টু-এক প্রজেক্ট মনিটরিং ও সাপোর্ট।",
  },
  {
    icon: <FaSyncAlt className="text-pink-500" />,
    title: "Free Revisions",
    description: "আপনি পুরোপুরি সন্তুষ্ট না হওয়া পর্যন্ত ফ্রি রিভিশন চলবে।",
  },
  {
    icon: <FaDollarSign className="text-yellow-600" />,
    title: "30-Day Money Back",
    description: "সন্তুষ্ট না হলে ৩০ দিনের মধ্যে সম্পূর্ণ টাকা ফেরত।",
  },
  {
    icon: <FaSearch className="text-blue-500" />,
    title: "SEO Ready",
    description:
      "টেকনিক্যাল SEO, স্পিড SEO ও মার্কেটিং রেডি স্ট্রাকচার সহ তৈরি।",
  },
  {
    icon: <FaChartLine className="text-indigo-600" />,
    title: "ROI Focused Design",
    description:
      "ডিজাইন শুধু সুন্দর না—সেলস, লিড ও ROI বাড়ানোর জন্য স্ট্র্যাটেজিক।",
  },
  {
    icon: <FaShieldAlt className="text-gray-700" />,
    title: "পূর্ণ নিরাপত্তা",
    description: "SSL, ফায়ারওয়াল ও সিকিউর পেমেন্ট গেটওয়ে দিয়ে ডাটা সুরক্ষিত।",
  },
  {
    icon: <FaStar className="text-amber-500" />,
    title: "প্রিমিয়াম ইউআই/ইউএক্স",
    description:
      "ইউজার-ফার্স্ট UX এবং আধুনিক UI—যা ভিজিটরকে কাস্টমারে বদলে দেয়।",
  },
  {
    icon: <FaCogs className="text-slate-600" />,
    title: "কাস্টম ফিচার ও স্কেলেবল সিস্টেম",
    description: "আপনার ব্যবসা বড় হলে সাইট/অ্যাপও সহজে স্কেল করা যাবে।",
  },
  {
    icon: <FaServer className="text-emerald-600" />,
    title: "পারফরম্যান্স-অপ্টিমাইজড ব্যাকএন্ড",
    description:
      "ফাস্ট API, ডাটাবেস টিউনিং এবং লোড ব্যালেন্সিং—সব মিলিয়ে সর্বোচ্চ পারফরম্যান্স।",
  },
  {
    icon: <FaGlobe className="text-cyan-600" />,
    title: "গ্লোবাল স্ট্যান্ডার্ড টেকনোলজি",
    description:
      "লেটেস্ট ও স্টেবল টেক স্ট্যাক ব্যবহার করি—যা ভবিষ্যতেও টিকে থাকবে।",
  },
  {
    icon: <FaHeadset className="text-rose-600" />,
    title: "প্রায়োরিটি কাস্টমার সাপোর্ট",
    description:
      "প্রজেক্ট ডেলিভারির পরেও আপনি একা নন। দ্রুত রেসপন্স, গাইডেন্স ও সমাধান—যখনই দরকার, আমরা পাশে থাকি।",
    badge: "🤝 Priority Support",
  },
];

const WhyChooseUsUltimate = () => {
  return (
    <section className="py-20 px-4 bg-fuchsia-100 dark:bg-slate-950 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          আমাদের বেছে নেওয়ার জন্য মূল কারণসমূহ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 mb-8 text-lg max-w-3xl mx-auto"
        >
          আমরা শুধু ওয়েবসাইট বানাই না—আমরা{" "}
          <span className="font-semibold">আপনার ব্যবসাকে এগিয়ে রাখি</span>।
          নিচের প্রতিটি পয়েন্ট দেখাবে কেন আমরা অন্যদের থেকে আলাদা এবং কেন আমরা
          সেরা।
        </motion.p>

        {/* ✅ Highlight Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center"
            >
              <div className="text-2xl mb-2">{h.icon}</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {h.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ✅ Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {uniqueReasons.map(({ icon, title, description, badge }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {badge && (
                <div className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-indigo-600 text-white shadow">
                  {badge}
                </div>
              )}

              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ✅ Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
            আপনি যদি চান আপনার ব্র্যান্ড দ্রুত, নিরাপদ, ইউনিক ডিজাইন এবং
            মিলিসেকেন্ড লেভেলের লোডিং স্পিড দিয়ে গ্রো করুক— তাহলে আমরা আপনার
            জন্য পারফেক্ট টিম।
          </p>

          {/* ✅ আপনার Link এখানে add করা হলো */}
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-12 py-2 rounded hover:bg-orange-600 transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300 inline-block"
          >
            যোগাযোগ করুন
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsUltimate;
