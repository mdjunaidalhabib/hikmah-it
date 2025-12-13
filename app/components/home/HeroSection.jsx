"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Shape */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        {/* subtle decorative shapes (background only) */}
        <div className="w-70 h-70 bg-purple-300 dark:bg-gray-600 rounded-full opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
      </div>

      <div className="px-8 md:px-10 py-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            আপনার ডিজিটাল স্বপ্নকে বাস্তবে রূপ দিন
            <span className="text-orange-600 font-serif"> Hikmah IT</span> -র
            সঙ্গে
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            আপনার প্রয়োজন বুঝে আমরা তৈরি করি সহজ, আধুনিক ও বিশ্বস্ত ডিজিটাল
            সমাধান। যেটা শুধু কাজের না, আপনার বিশ্বাসেরও যোগ্য।
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/about">
              <button className="px-4 sm:px-14 inline-block py-2 shadow-md lg:m-3 rounded bg-purple-700 hover:bg-fuchsia-600 text-white text-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-105 active:bg-fuchsia-600">
                আমাদের সম্পর্কে জানুন
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/hero.png"
            alt="ডিজিটাল সার্ভিস ভেক্টর"
            width={500}
            height={500}
            className="w-full max-w-sm hidden lg:block md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
