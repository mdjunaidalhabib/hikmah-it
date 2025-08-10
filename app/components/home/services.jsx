"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaIdCard,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-purple-600" />,
    title: "Custom Web Design",
    description:
      "কাস্টমাইজড ওয়েবসাইট ডিজাইন, যা ব্যবসার জন্য উপযোগী ও আকর্ষণীয়।",
    link: "/web-development",
  },
  {
    id: 2,
    icon: <FaIdCard className="text-green-600" />,
    title: "ID Card Making",
    description:
      "মাদ্রাসা ও অন্যান্য প্রতিষ্ঠানের জন্য আইডি কার্ড ডিজাইন ও তৈরি।",
    link: "/id-card",
  },
  {
    id: 3,
    icon: <FaVideo className="text-red-500" />,
    title: "Video Editing",
    description: "ভিডিও এডিটিং সার্ভিস, যাতে তোমার কনটেন্ট আরো আকর্ষণীয় হয়।",
    link: "/video-editing",
  },
];

export default function ServicesPage() {
  return (
    <section id="services" className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center -mt-4 mb-6">
          সেবা সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, icon, title, description, link }) => (
            <Link href={link} key={id}>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105 active:scale-105 active:bg-yellow-300">
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
