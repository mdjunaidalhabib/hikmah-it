"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ">
            আপনার ডিজিটাল স্বপ্নকে বাস্তবে রূপ দিন
            <span className="text-orange-600 font-serif"> Hikmah IT</span> -র
            সঙ্গে
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
            আপনার প্রয়োজন বুঝে আমরা তৈরি করি সহজ, আধুনিক ও বিশ্বস্ত ডিজিটাল
            সমাধান। যেটা শুধু কাজের না, আপনার বিশ্বাসেরও যোগ্য।
          </p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition-all duration-300 shadow-md ursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300">
              এখনই যোগাযোগ করুন
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center ">
          <Image
            src="/hero.png"
            alt="ডিজিটাল সার্ভিস ভেক্টর"
            width={500}
            height={500}
            className="w-full max-w-sm hidden lg:block :max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
