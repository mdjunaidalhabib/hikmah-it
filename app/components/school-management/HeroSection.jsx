// HeroSection.jsx
import { FaSchool } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900 mt-14">
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <FaSchool className="text-blue-600 text-6xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">
          স্মার্ট স্কুল ম্যানেজমেন্ট সিস্টেম
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          আপনার প্রতিষ্ঠানের ছাত্র-শিক্ষক তথ্য, ক্লাস, অ্যাটেন্ডেন্স, রেজাল্টসহ
          সবকিছু এক প্ল্যাটফর্মে পরিচালনা করুন
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          আজই ডেমো নিন
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
