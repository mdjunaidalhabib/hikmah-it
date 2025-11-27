"use client";
import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaRocket,
  FaGem,
  FaGlobe,
  FaCreditCard,
  FaServer,
  FaUserTie,
  FaChartLine,
  FaRedoAlt,
  FaHeadset,
} from "react-icons/fa";

/* =========================
   Hikmah IT - E-commerce FAQ (Updated)
   ========================= */
const faqs = [
  {
    question: "কীভাবে Hikmah IT থেকে ই-কমার্স ওয়েবসাইট অর্ডার করবো?",
    answer:
      "আপনি আমাদের WhatsApp/ফোনে যোগাযোগ করুন। আপনার ব্যবসার ধরন ও প্রয়োজনীয় ফিচার বললে আমরা Basic/Regular/Advanced থেকে আপনার জন্য বেস্ট প্যাকেজ সাজেস্ট করে কাজ শুরু করবো।",
    icon: <FaWhatsapp />,
    iconClass: "text-green-700 dark:text-green-300",
    iconBgClass: "bg-green-100 dark:bg-green-900/40",
  },
  {
    question: "৩টি প্যাকেজের দাম কত এবং কোনটা কার জন্য?",
    answer:
      "Basic: ৳৯,৯৯৯ (নতুন ব্যবসার জন্য), Regular: ৳১৯,৯৯৯ (সবচেয়ে জনপ্রিয়), Advanced: ৳৩৯,৯৯৯ (বড়/প্রফেশনাল ব্যবসার জন্য)।",
    icon: <FaGem />,
    iconClass: "text-yellow-700 dark:text-yellow-300",
    iconBgClass: "bg-yellow-100 dark:bg-yellow-900/40",
  },
  {
    question: "প্রতি প্যাকেজে কতজন স্টাফ/এডমিন অ্যাকসেস থাকবে?",
    answer:
      "Basic প্যাকেজে ২ জন, Regular প্যাকেজে ৫ জন এবং Advanced প্যাকেজে ১০ জন স্টাফ/এডমিন অ্যাকসেস থাকবে।",
    icon: <FaUserTie />,
    iconClass: "text-indigo-700 dark:text-indigo-300",
    iconBgClass: "bg-indigo-100 dark:bg-indigo-900/40",
  },
  {
    question: "প্রতি মাসে কত অর্ডার ম্যানেজ করা যাবে?",
    answer:
      "Basic: ৫০০ অর্ডার/মাস, Regular: ১৫০০ অর্ডার/মাস, Advanced: ৩০০০ অর্ডার/মাস। প্রয়োজন হলে আপগ্রেড করা যাবে।",
    icon: <FaChartLine />,
    iconClass: "text-sky-700 dark:text-sky-300",
    iconBgClass: "bg-sky-100 dark:bg-sky-900/40",
  },
  {
    question: "সব প্যাকেজে কোন কোন কমন ফিচার থাকবে?",
    answer:
      "সব প্যাকেজেই কাস্টম ডিজাইন, প্রফেশনাল অ্যাডমিন প্যানেল, আনলিমিটেড স্টোরেজ, আনলিমিটেড ব্যান্ডউইথ, আনলিমিটেড প্রোডাক্ট ম্যানেজমেন্ট এবং ২৪/৭ সাপোর্ট থাকবে।",
    icon: <FaTools />,
    iconClass: "text-purple-700 dark:text-purple-300",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/40",
  },
  {
    question: "Regular ও Advanced প্যাকেজে অতিরিক্ত কী কী সুবিধা পাবো?",
    answer:
      "Regular প্যাকেজে .com ডোমেইন, ডিসকাউন্ট/কুপন সিস্টেম এবং নিরাপদ পেমেন্ট গেটওয়ে থাকবে। Advanced প্যাকেজে এগুলোর সাথে রিসেলার অ্যাকাউন্টও থাকবে।",
    icon: <FaRocket />,
    iconClass: "text-amber-700 dark:text-amber-300",
    iconBgClass: "bg-amber-100 dark:bg-amber-900/40",
  },
  {
    question: "ডোমেইন ও হোস্টিং কি আপনারাই সেটআপ করবেন?",
    answer:
      "হ্যাঁ। Regular ও Advanced প্যাকেজে ১ বছর .com ডোমেইনসহ হোস্টিং সেটআপ করে দেওয়া হয়। Basic প্যাকেজে প্রয়োজন অনুযায়ী ডোমেইন/হোস্টিং যুক্ত করা যাবে।",
    icon: <FaGlobe />,
    iconClass: "text-blue-700 dark:text-blue-300",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/40",
  },
  {
    question: "পেমেন্ট গেটওয়ে (Bkash/Nagad/SSL) সেটআপ করবেন?",
    answer:
      "Regular ও Advanced প্যাকেজে নিরাপদ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন ফ্রি থাকে। Basic প্যাকেজে চাইলে অতিরিক্ত চার্জে যুক্ত করা যাবে।",
    icon: <FaCreditCard />,
    iconClass: "text-green-700 dark:text-green-300",
    iconBgClass: "bg-green-100 dark:bg-green-900/40",
  },
  {
    question: "ওয়েবসাইট ডেলিভারি কত দিনে পাবো?",
    answer:
      "Basic সাধারণত ৫–৭ কর্মদিবস, Regular ৭–১০ কর্মদিবস এবং Advanced ১০–১৫ কর্মদিবসের মধ্যে ডেলিভারি করা হয় (ফিচার/কনটেন্ট দ্রুত দিলে সময় কম লাগবে)।",
    icon: <FaClock />,
    iconClass: "text-rose-700 dark:text-rose-300",
    iconBgClass: "bg-rose-100 dark:bg-rose-900/40",
  },
  {
    question: "রিনিউ ফি কত? নতুন করে বেশি টাকা লাগবে কি?",
    answer:
      "না। স্ক্রিনশটের মতোই সব প্যাকেজে Renewal same price—মানে রিনিউ চার্জ আগের দামের সমান থাকবে।",
    icon: <FaRedoAlt />,
    iconClass: "text-teal-700 dark:text-teal-300",
    iconBgClass: "bg-teal-100 dark:bg-teal-900/40",
  },
  {
    question: "ডেলিভারির পর সাপোর্ট কীভাবে পাবো?",
    answer:
      "আমরা ২৪/৭ ডেডিকেটেড সাপোর্ট দিই। WhatsApp/কল/ইমেইলে আপনার যেকোনো সমস্যা দ্রুত সমাধান করা হবে।",
    icon: <FaHeadset />,
    iconClass: "text-lime-700 dark:text-lime-300",
    iconBgClass: "bg-lime-100 dark:bg-lime-900/40",
  },
  {
    question: "আমি কি পরে প্যাকেজ আপগ্রেড করতে পারবো?",
    answer:
      "হ্যাঁ। আপনার সেল/অর্ডার বাড়লে Basic থেকে Regular বা Advanced এ খুব সহজেই আপগ্রেড করা যাবে। আগের ডেটা/ডিজাইন ঠিক থাকবে।",
    icon: <FaServer />,
    iconClass: "text-cyan-700 dark:text-cyan-300",
    iconBgClass: "bg-cyan-100 dark:bg-cyan-900/40",
  },
  {
    question: "ওয়েবসাইট চালানোর ট্রেইনিং দিবেন?",
    answer:
      "ডেলিভারির পর অ্যাডমিন প্যানেল কিভাবে ব্যবহার করবেন, প্রোডাক্ট যোগ/অর্ডার ম্যানেজ করবেন—এসবের ফুল ট্রেইনিং আমরা দিয়ে থাকি।",
    icon: <FaQuestionCircle />,
    iconClass: "text-pink-700 dark:text-pink-300",
    iconBgClass: "bg-pink-100 dark:bg-pink-900/40",
  },
  {
    question: "ওয়েবসাইট কি সিকিউর থাকবে?",
    answer:
      "হ্যাঁ। আমরা SSL সিকিউরিটি, নিরাপদ সার্ভার কনফিগারেশন এবং বেসিক সিকিউরিটি প্রটেকশনসহ ওয়েবসাইট ডেলিভারি করি।",
    icon: <FaShieldAlt />,
    iconClass: "text-orange-700 dark:text-orange-300",
    iconBgClass: "bg-orange-100 dark:bg-orange-900/40",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-fuchsia-100 dark:bg-slate-950">
      <div className="py-16 px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full
                      dark:text-indigo-200 dark:bg-indigo-900/40"
          >
            <FaQuestionCircle />
            Hikmah IT FAQ
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-800 dark:text-white">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলি
          </h2>
          <p className="mt-2 text-gray-600 dark:text-slate-300 text-sm">
            আমাদের ই-কমার্স ওয়েবসাইট প্যাকেজ ও সার্ভিস নিয়ে সাধারণ প্রশ্নগুলোর
            উত্তর।
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map(
            ({ question, answer, icon, iconClass, iconBgClass }, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden
                ${
                  isOpen
                    ? "border-indigo-400 dark:border-indigo-700 shadow-sm"
                    : "border-gray-200 dark:border-slate-800"
                }
                bg-purple-50 dark:bg-slate-900`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex justify-between items-center gap-3 p-4 text-left focus:outline-none"
                  >
                    {/* icon badge + question */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 flex items-center justify-center rounded-full ${iconBgClass}`}
                      >
                        <span className={`text-base ${iconClass}`}>{icon}</span>
                      </span>

                      <span className="text-indigo-700 dark:text-indigo-300 font-semibold">
                        {question}
                      </span>
                    </div>

                    {/* plus/minus */}
                    <span
                      className={`text-2xl font-bold transition
                    ${
                      isOpen
                        ? "text-indigo-700 dark:text-indigo-300 rotate-180"
                        : "text-gray-400 dark:text-slate-500"
                    }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 pt-0 text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                        {answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
