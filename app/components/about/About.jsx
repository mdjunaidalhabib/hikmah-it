"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        {/* subtle decorative shapes (background only) */}
        <div className="w-70 h-70 bg-purple-300 dark:bg-gray-600 rounded-full opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 md:px-10 py-14 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          আমাদের সম্পর্কে{" "}
          <span className="block sm:inline text-orange-600">Hikmah IT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          <span className="font-semibold">Hikmah IT</span> একটি আধুনিক ও বহুমুখী
          ডিজিটাল সেবা প্রদানকারী প্রতিষ্ঠান, যেখানে প্রযুক্তি ও সৃজনশীলতার
          সমন্বয়ে আমরা আমাদের গ্রাহকদের জন্য সর্বোচ্চ মানের সমাধান তৈরি করি।
          আমরা বিশ্বাস করি—
          <span className="italic text-purple-600 dark:text-purple-400">
            {" "}
            “প্রযুক্তির মাধ্যমে উন্নত ভবিষ্যৎ”
          </span>
          ।
        </motion.p>
      </div>
    </section>
  );
};

export default About;
