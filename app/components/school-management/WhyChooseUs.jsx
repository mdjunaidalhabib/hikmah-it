// WhyChooseUs.jsx
import { FaLock, FaRocket, FaCogs, FaUserShield } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket className="text-green-600" />,
    title: "দ্রুত ও সহজ ব্যবহার",
    description:
      "ইউজার-ফ্রেন্ডলি ডিজাইন এবং স্মার্ট ফিচার দিয়ে সহজেই ব্যবহারযোগ্য।",
  },
  {
    icon: <FaLock className="text-pink-600" />,
    title: "নিরাপদ ও গোপনীয়",
    description: "তথ্য সুরক্ষা ও ডেটা প্রাইভেসি আমাদের অগ্রাধিকার।",
  },
  {
    icon: <FaCogs className="text-yellow-600" />,
    title: "সম্পূর্ণ কাস্টমাইজেবল",
    description: "প্রতিষ্ঠানের প্রয়োজনে অনুযায়ী সিস্টেম সহজে কাস্টমাইজ করুন।",
  },
  {
    icon: <FaUserShield className="text-rose-500" />,
    title: "দায়িত্বশীল সাপোর্ট",
    description: "প্রযুক্তিগত সহায়তা ও গাইডলাইন পেতে সর্বদা পাশে থাকি।",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-900 dark:text-white text-center -mt-4 p-2">
          কেন আমাদের সিস্টেম ব্যবহার করবেন?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
