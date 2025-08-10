"use client";
import Link from "next/link";
import {
  FaLaptopCode,
  FaSchool,
  FaShoppingCart,
  FaUserCircle,
  FaBlog,
  FaBook,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUserCircle className="text-yellow-500" />,
    title: "Portfolio / Business Website",
    description: "আপনার প্রোফাইল বা ব্যবসা তুলে ধরার জন্য একদম প্রফেশনাল লুক।",
    link: "/portfolio",
  },
  {
    id: 2,
    icon: <FaSchool className="text-green-600" />,
    title: "School / Madrasah Website",
    description:
      "শিক্ষাপ্রতিষ্ঠানের জন্য স্টুডেন্ট ম্যানেজমেন্ট ও নোটিশসহ সম্পূর্ণ ওয়েবসাইট।",
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
    icon: <FaBook className=" text-rose-700" />,
    title: "Course / Learning Website",
    description: "অনলাইন কোর্স, কুইজ, এবং স্টুডেন্ট এনরোলমেন্ট ফিচারসহ।",
    link: "/ui-ux",
  },
  {
    id: 5,
    icon: <FaBlog className=" text-yellow-700" />,
    title: "Blog / News Portal",
    description: "নিজস্ব কন্টেন্ট প্রকাশ ও পাঠকদের সাথে শেয়ার করার জন্য SEO ফ্রেন্ডলি ব্লগিং সাইট।",
    link: "/ui-ux",
  },
  {
    id: 6,
    icon: <FaLaptopCode className="text-indigo-600" />,
    title: "Doctor's Website",
    description: "অ্যাপয়েন্টমেন্ট সিস্টেমসহ ডাক্তারদের জন্য প্রফেশনাল সাইট।",
    link: "/web-development",
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
