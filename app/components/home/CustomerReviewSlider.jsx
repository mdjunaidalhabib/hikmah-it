"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
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
    <section className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 dark:text-white font-bold">
            কাস্টমার রিভিউ
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            আমাদের সম্মানিত ক্লায়েন্টরা যা বলছেন —
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border h-full min-h-[260px] flex flex-col justify-between transition-all duration-500 hover:shadow-lg">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="text-orange-500 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < review.rating ? "#f97316" : "none"}
                        stroke="#f97316"
                      />
                    ))}
                  </div>
                </div>
                {/* Comment */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 transition-all duration-500">
                  "{review.comment}"
                </p>
                {/* Name & Position */}
                <div>
                  <h4 className="font-semibold text-gray-600 dark:text-gray-300">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {review.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviewSlider;
