"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HowItWorksBangla = () => {
  return (
    <section className="relative px-4 bg-fuchsia-100 dark:bg-slate-950 text-center overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-72 h-72 bg-orange-300 rounded-full opacity-20 absolute -top-24 -left-24 animate-pulse"></div>
      </div>

      <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center"
        >
          সহজ <span className="text-orange-500">সমাধান!</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/worker.png"
              alt="সার্ভিস প্রদানকারী"
              width={500}
              height={500}
              className="w-full hidden lg:block max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-900 dark:text-white text-justify px-4 mb-8">
              আমরা বুঝি প্রতিটি মানুষের প্রয়োজন ভিন্ন। তাই আমরা সময় নিই আপনার
              চাহিদা বুঝতে, যেন আপনি পান একদম ঠিকঠাক ডিজিটাল সমাধান।
            </p>

            {/* Steps */}
            <div className="relative pl-8">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-orange-400"></div>

              <ol className="space-y-6 mb-6 relative z-10">
                {[
                  {
                    num: "১",
                    title: "যোগাযোগ করুন",
                    desc: "আপনার প্রয়োজন অনুযায়ী আমাদের সঙ্গে যোগাযোগ করুন",
                  },
                  {
                    num: "২",
                    title: "পরামর্শ নিন",
                    desc: "আপনার প্রশ্নের উত্তর দিতে আমরা সদা প্রস্তুত",
                  },
                  {
                    num: "৩",
                    title: "অর্ডার করুন",
                    desc: "পছন্দের প্যাকেজটি বেছে নিয়ে অর্ডার করুন",
                  },
                  {
                    num: "৪",
                    title: "পেমেন্ট করুন",
                    desc: "বিকাশ, নগদ, ব্যাংক সব মাধ্যমে পেমেন্ট সুবিধা",
                  },
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start relative"
                  >
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold absolute -left-4 top-1">
                      {step.num}
                    </div>
                    <div className="pl-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0"
            >
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-12 py-2 rounded hover:bg-orange-600 transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
              >
                যোগাযোগ করুন
              </Link>
              <Link
                href="/services"
                className="border border-orange-500 text-orange-500 px-12 py-2 rounded hover:bg-orange-100 transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
              >
                সেবা সমূহ দেখুন
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBangla;
