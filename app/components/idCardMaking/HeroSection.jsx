import React from "react";
import { FaIdCard } from "react-icons/fa";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900 mt-14">
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <FaIdCard className="mx-auto text-6xl mb-6 text-rose-500" />
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          প্রফেশনাল আইডি কার্ড সার্ভিস
        </h1>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          সহজ, দ্রুত এবং মানসম্মত আইডি কার্ড ডিজাইন ও প্রিন্টিং সার্ভিস। আপনার
          প্রতিষ্ঠান কিংবা স্কুলের জন্য একদম সঠিক পছন্দ।
        </p>
        {/* বোতাম */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Link
            href="/start"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-all duration-300 shadow-md ursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
          >
            এখনই যোগাযোগ করুন
          </Link>
          <Link
            href="/designs"
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-100 transition-all duration-300 shadow-md ursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
          >
            ডিজাইনগুলো দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
