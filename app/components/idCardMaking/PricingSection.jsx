import React from "react";
import {
  FaIdCard,
  FaAddressCard,
  FaRegIdBadge,
  FaUserTag,
  FaTruck,
  FaPenNib,
  FaTags,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";

const pricingTiers = [
  {
    range: "১০ - ৪৯টি",
    rate: "প্রতি পিস ৮০/= টাকা",
    description: "ছোট পরিমাণ অর্ডারের জন্য মানসম্মত ও নির্ভরযোগ্য দাম।",
    icon: (
      <FaIdCard className="text-blue-600  hover:text-blue-800" />
    ),
  },
  {
    range: "৫০ - ৯৯ টি",
    rate: "প্রতি পিস ৭০/= টাকা",
    description: "মাঝারি অর্ডারে বিশেষ ছাড় ও দ্রুত সেবা।",
    icon: (
      <FaAddressCard className="text-purple-600 hover:text-purple-800" />
    ),
  },
  {
    range: "১০০ - ১৯৯টি",
    rate: "প্রতি পিস ৬০/= টাকা",
    description: "বড় অর্ডারে সাশ্রয়ী ও মানসম্মত রেট।",
    icon: (
      <FaRegIdBadge className="text-green-600  hover:text-green-800" />
    ),
  },
  {
    range: "২০০ - ৩৪৯টি",
    rate: "প্রতি পিস ৫০/= টাকা",
    description: "বিশাল অর্ডারে অতিরিক্ত সাশ্রয় ও বিশ্বাসযোগ্যতা।",
    icon: (
      <FaTags className="text-yellow-600 hover:text-yellow-800" />
    ),
  },
  {
    range: "৩৫০ - ৪৯৯টি",
    rate: "প্রতি পিস ৪৮/= টাকা",
    description: "বাল্ক অর্ডারের জন্য সর্বোচ্চ মান ও ছাড়ের নিশ্চয়তা।",
    icon: (
      <FaHandshake className="text-teal-600  hover:text-teal-800" />
    ),
  },
  {
    range: "৫০০ টির বেশি",
    rate: "প্রতি পিস ৪৫/= টাকা",
    description: "সর্বোচ্চ পরিমাণে বিশেষ ছাড় ও প্রাধান্য।",
    icon: (
      <FaUserTag className="text-red-600 hover:text-red-800" />
    ),
  },
];

const PricingSection = () => {
  return (
    <section className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10">
            <FaMoneyBillWave className="text-green-500 text-5xl mx-auto mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            মূল্য তালিকা
            </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            আপনি যত বেশি অর্ডার করবেন, প্রতি পিসের মূল্য তত কম হবে। নিচে আমাদের
            পরিমাণভিত্তিক রেট তালিকা দেওয়া হলো।
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map(({ range, rate, description, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-1">
                {range}
              </h3>
              <p className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-1">
                {rate}
              </p>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:space-x-4 shadow-md hover:shadow-xl transition hover:scale-105">
          <FaTruck className="text-green-600 text-3xl mb-2 sm:mb-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
              🚚 হোম ডেলিভারি সুবিধা
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-sm">
              🔹 ২০০ টি বা তার বেশি অর্ডার করলেই হোম ডেলিভারি{" "}
              <strong>ফ্রি</strong>!<br />
              🔸 ২০০ টির নিচে অর্ডার করলে ডেলিভারি চার্জ প্রযোজ্য ( সাধারণত
              ১০০–১৫০ টাকা নির্ভর করে অবস্থানের উপর )।
            </p>
          </div>
        </div>

        {/* Design Setup Fee */}
        <div className="mt-6 max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:space-x-4 shadow-md hover:shadow-xl transition hover:scale-105">
          <FaPenNib className="text-yellow-500 text-3xl mb-2 sm:mb-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
              🎨 ডিজাইন সেটআপ ফি
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-sm">
              🔹 যদি আপনি আমাদের প্রস্তুতকৃত টেমপ্লেট থেকে ডিজাইন বাছাই করেন,
              তাহলে <strong>কোন ডিজাইন ফি নেই</strong>।<br />
              🔸 কাস্টম ডিজাইন চাইলে একবারই ৩০০–৫০০ টাকা সেটআপ ফি প্রযোজ্য।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
