// Features.jsx
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaFileAlt,
  FaMoneyBillWave,
  FaChartBar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate className="text-blue-600" />,
    title: "ছাত্র ব্যবস্থাপনা",
    description: "ছাত্র ভর্তি, প্রোফাইল ও প্রোগ্রেস ট্র্যাকিং সহজেই করুন।",
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600" />,
    title: "শিক্ষক ব্যবস্থাপনা",
    description: "শিক্ষকের তথ্য, ক্লাস রুটিন ও রিপোর্টিং একসাথে পরিচালনা করুন।",
  },
  {
    icon: <FaCalendarCheck className="text-pink-600" />,
    title: "অ্যাটেন্ডেন্স",
    description: "ছাত্র-শিক্ষকের উপস্থিতি রেকর্ড করুন সহজেই।",
  },
  {
    icon: <FaFileAlt className="text-yellow-600" />,
    title: "রেজাল্ট ও রিপোর্ট",
    description: "সহজে পরীক্ষার রেজাল্ট তৈরি ও বিতরণ করুন।",
  },
  {
    icon: <FaMoneyBillWave className="text-rose-500" />,
    title: "ফি কালেকশন",
    description: "টিউশন ফি সহ সব ধরনের ফি কালেকশন ও রিপোর্টিং।",
  },
  {
    icon: <FaChartBar className="text-orange-600" />,
    title: "স্ট্যাটিস্টিক্স",
    description: "ইনস্টিটিউশনের তথ্য বিশ্লেষণ ও গ্রাফসহ রিপোর্ট।",
  },
];

const Features = () => {
  return (
    <section className="bg-fuchsia-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center -mt-4 p-2">
          আমাদের সিস্টেমের বৈশিষ্ট্যসমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
