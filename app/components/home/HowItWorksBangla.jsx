import React from "react";
import Image from "next/image";
import Link from "next/link";


const HowItWorksBangla = () => {
  return (
    <section className="bg-orange-50 dark:bg-gray-900 ">
      <div className=" px-4 md:px-10 py-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          সহজ <span className="text-orange-500">সমাধান!</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* বাম পাশে ভেক্টর ইমেজ */}
          <div className="flex justify-center">
            <Image
              src="/worker.png"
              alt="সার্ভিস প্রদানকারী"
              width={500}
              height={500}
              className="w-full hidden lg:block  max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* ডান পাশে কন্টেন্ট */}
          <div>
            <p className="text-gray-900 dark:text-white text-justify p-4">
              আমরা বুঝি প্রতিটি মানুষের প্রয়োজন ভিন্ন। তাই আমরা সময় নিই আপনার
              চাহিদা বুঝতে, যেন আপনি পান একদম ঠিকঠাক ডিজিটাল সমাধান।
            </p>

            {/* ধাপসমূহ */}
            <div className="relative pl-8">
              {/* লম্বা লাইন */}
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
                  <li key={index} className="flex items-start relative">
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
                  </li>
                ))}
              </ol>
            </div>

            {/* বোতাম */}
            <div className="flex space-x-4">
              <Link
                href="/start"
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-all duration-300 shadow-md ursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
              >
                শুরু করুন
              </Link>
              <Link
                href="/details"
                className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-100 transition-all duration-300 shadow-md ursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBangla;
