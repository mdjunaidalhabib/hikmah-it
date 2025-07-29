// WorkProcess.jsx
import {
  FaClipboardList,
  FaChalkboardTeacher,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList className="text-blue-600" />,
    title: "রেজিস্ট্রেশন ও ড্যাশবোর্ড",
    description:
      "প্রতিষ্ঠান, শিক্ষক ও ছাত্র রেজিস্ট্রেশন করে একটি কেন্দ্রীয় ড্যাশবোর্ডে একত্রিত করা হয়।",
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600" />,
    title: "ক্লাস ও শিক্ষক ব্যবস্থাপনা",
    description:
      "ক্লাস রুটিন, বিষয় নির্ধারণ ও শিক্ষক নিয়োগ সহজে সম্পন্ন করুন।",
  },
  {
    icon: <FaDatabase className="text-pink-600" />,
    title: "রেজাল্ট ও উপস্থিতি",
    description:
      "ছাত্রদের পরীক্ষার ফলাফল ও উপস্থিতি রিপোর্ট স্বয়ংক্রিয়ভাবে সংরক্ষণ করুন।",
  },
  {
    icon: <FaChartLine className="text-orange-600" />,
    title: "রিপোর্ট ও এনালাইসিস",
    description: "সম্পূর্ণ ডেটা বিশ্লেষণের মাধ্যমে উন্নয়নের পথে পদক্ষেপ নিন।",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white -mt-4 mb-6 p-2">
          আমাদের কাজের ধাপসমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
