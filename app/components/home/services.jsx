"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaSchool,
  FaShoppingCart,
  FaUserCircle,
  FaBlog,
  FaBook,
  FaIdCard,
  FaVideo,
  FaMoneyBillWave,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-purple-600" />,
    title: "Custom Web Design",
    description:
      "কাস্টমাইজড ওয়েবসাইট ডিজাইন, যা ব্যবসার জন্য উপযোগী ও আকর্ষণীয়।",
    link: "",
  },
  {
    id: 2,
    icon: <FaShoppingCart className="text-pink-600" />,
    title: "E-commerce Website",
    description:
      "অনলাইন শপিংয়ের জন্য আধুনিক ই-কমার্স ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট।",
    link: "/ecommerce",
  },
  {
    id: 3,
    icon: <FaUserCircle className="text-yellow-500" />,
    title: "Portfolio / Business Website",
    description: "আপনার প্রোফাইল বা ব্যবসা তুলে ধরার জন্য একদম প্রফেশনাল লুক।",
    link: "",
  },
  {
    id: 4,
    icon: <FaSchool className="text-green-600" />,
    title: "School / Madrasah Website",
    description:
      "শিক্ষাপ্রতিষ্ঠানের জন্য স্টুডেন্ট ম্যানেজমেন্ট ও নোটিশসহ সম্পূর্ণ ওয়েবসাইট।",
    link: "",
  },

  {
    id: 5,
    icon: <FaBook className=" text-rose-700" />,
    title: "Course / Learning Website",
    description: "অনলাইন কোর্স, কুইজ, এবং স্টুডেন্ট এনরোলমেন্ট ফিচারসহ।",
    link: "",
  },
  {
    id: 6,
    icon: <FaBlog className=" text-yellow-700" />,
    title: "Blog / News Portal",
    description:
      "নিজস্ব কন্টেন্ট প্রকাশ ও পাঠকদের সাথে শেয়ার করার জন্য SEO ফ্রেন্ডলি ব্লগিং সাইট।",
    link: "",
  },
  {
    id: 7,
    icon: <FaMoneyBillWave className="text-indigo-600" />,
    title: "Hosting Buy",
    description:
      "Hostinger বা Namecheap হোস্টিং এখন bKash ও Nagad দিয়ে কিনুন খুব সহজেই।",
    link: "",
  },

  {
    id: 8,
    icon: <FaIdCard className="text-green-600" />,
    title: "ID Card Making",
    description:
      "মাদ্রাসা ও অন্যান্য প্রতিষ্ঠানের জন্য আইডি কার্ড ডিজাইন ও তৈরি।",
    link: "",
  },
  {
    id: 9,
    icon: <FaVideo className="text-red-500" />,
    title: "Video Editing",
    description: "ভিডিও এডিটিং সার্ভিস, যাতে আপনার কনটেন্ট আরো আকর্ষণীয় হয়।",
    link: "",
  },
];

export default function ServicesPage() {
  return (
    <section id="services" className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 pb-14 pt-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          আমাদের সেবা সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, icon, title, description, link }) => (
            <Link href={link} key={id}>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-101 active:scale-105 active:bg-yellow-300">
                <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
