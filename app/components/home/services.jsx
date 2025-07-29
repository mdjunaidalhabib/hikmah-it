"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaSchool,
  FaShoppingCart,
  FaUserCircle,
  FaPaintBrush,
  FaServer,
  FaPalette,
  FaIdCard,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-indigo-600" />,
    title: "Custom Web Design and Development",
    description:
      "কাস্টমাইজড ওয়েবসাইট ডিজাইন, যা আপনার ব্যবসার জন্য সম্পূর্ণ উপযোগী ও আকর্ষণীয়।",
    link: "/web-development",
  },
  {
    id: 2,
    icon: <FaSchool className="text-green-600" />,
    title: "School Management System",
    description:
      "স্কুল ব্যবস্থাপনা সফটওয়্যার, যা ছাত্র, শিক্ষক, ক্লাস, অ্যাডমিশন সবকিছু সহজে নিয়ন্ত্রণ করে।",
    link: "/school-management",
  },
  {
    id: 3,
    icon: <FaShoppingCart className="text-pink-600" />,
    title: "E-commerce Website",
    description:
      "অনলাইন শপিংয়ের জন্য আধুনিক ই-কমার্স ওয়েবসাইট ডিজাইন এবং ডেভেলপমেন্ট।",
    link: "/ecommerce",
  },
  {
    id: 4,
    icon: <FaUserCircle className="text-yellow-500" />,
    title: "Portfolio Website",
    description:
      "ব্যক্তিগত বা পেশাদারী কাজ প্রদর্শনের জন্য পোর্টফোলিও ওয়েবসাইট।",
    link: "/portfolio",
  },
  {
    id: 5,
    icon: <FaPaintBrush className="text-rose-500" />,
    title: "UI/UX Design",
    description:
      "ব্যবহারকারীর জন্য সহজ ও মনোগ্রাহী ইউজার ইন্টারফেস এবং অভিজ্ঞতা ডিজাইন।",
    link: "/ui-ux",
  },
  {
    id: 6,
    icon: <FaServer className="text-gray-600" />,
    title: "Domain and Hosting",
    description: "ডোমেইন নিবন্ধন এবং দ্রুত, নিরাপদ হোস্টিং সার্ভিস প্রদান।",
    link: "/domain-hosting",
  },
  {
    id: 7,
    icon: <FaPalette className="text-orange-500" />,
    title: "Logo Design",
    description: "তোমার ব্র্যান্ডের জন্য ইউনিক এবং প্রফেশনাল লোগো ডিজাইন।",
    link: "logo-design",
  },
  {
    id: 8,
    icon: <FaIdCard className="text-blue-600" />,
    title: "ID Card Making",
    description:
      "মাদ্রাসা ও অন্যান্য প্রতিষ্ঠানের জন্য আইডি কার্ড ডিজাইন ও তৈরি।",
    link: "/id-card",
  },
  {
    id: 9,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ id, icon, title, description, link }) => (
            <Link href={link} key={id}>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105">
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
