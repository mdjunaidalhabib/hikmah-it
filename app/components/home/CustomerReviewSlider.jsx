"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const reviews = [
  {
    name: "মোঃ সাইফুল ইসলাম",
    position: "প্রতিষ্ঠাতা, নূরানী মাদ্রাসা",
    comment:
      "Hikmah IT এর সার্ভিস খুবই বিশ্বস্ত এবং সময়মতো। আমি অত্যন্ত সন্তুষ্ট।",
    rating: 5,
  },
  {
    name: "আব্দুল্লাহ আল মামুন",
    position: "ম্যানেজার, ফাহিম স্টোর",
    comment: "তাদের ডিজাইন ও কাস্টমাইজেশন খুব সুন্দর। এক কথায় অসাধারণ।",
    rating: 4,
  },
  {
    name: "জান্নাতুল ফেরদৌস",
    position: "শিক্ষার্থী",
    comment:
      "আইডি কার্ড ও লোগো ডিজাইনে খুবই সাহায্য পেয়েছি। ধন্যবাদ Hikmah IT!",
    rating: 5,
  },
  {
    name: "মাহমুদুল হাসান",
    position: "প্রজেক্ট কোঅর্ডিনেটর",
    comment: "সবকিছু সময়মতো এবং একদম নিখুঁতভাবে পেয়েছি। আলহামদুলিল্লাহ।",
    rating: 5,
  },
];

const CustomerReviewSlider = () => {
  return (
    <section className="relative py-10 px-4 bg-fuchsia-100 dark:bg-slate-950 overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-80 h-80 bg-pink-300 rounded-full opacity-20 absolute -bottom-24 -left-24 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            কাস্টমার রিভিউ
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            আমাদের সম্মানিত ক্লায়েন্টরা যা বলছেন —
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  relative h-full rounded-2xl p-[1px]
                  bg-gradient-to-br from-orange-400/40 via-pink-400/30 to-purple-500/40
                "
              >
                <div className="h-full rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur p-6 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Quote */}
                  <Quote className="text-orange-400 w-8 h-8 mb-4 opacity-70" />

                  {/* Comment */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
                    “{review.comment}”
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mt-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? "#f97316" : "none"}
                        stroke="#f97316"
                      />
                    ))}
                  </div>

                  {/* User */}
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {review.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviewSlider;
