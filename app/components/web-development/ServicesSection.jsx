import React from "react";
import {
  FaSchool,
  FaShoppingCart,
  FaUserMd,
  FaBlog,
  FaBook,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSchool className="text-blue-700" />,
    title: "স্কুল / মাদরাসা ওয়েবসাইট",
    description:
      "শিক্ষাপ্রতিষ্ঠানের জন্য স্টুডেন্ট ম্যানেজমেন্ট ও নোটিশসহ সম্পূর্ণ ওয়েবসাইট।",
  },
  {
    icon: <FaShoppingCart className="text-green-700" />,
    title: "ই-কমার্স ওয়েবসাইট",
    description: "পণ্য বিক্রি ও পেমেন্ট সিস্টেমসহ সম্পূর্ণ ই-কমার্স সাইট।",
  },
  {
    icon: <FaUserMd className=" text-pink-700" />,
    title: "ডাক্তারের ওয়েবসাইট",
    description: "অ্যাপয়েন্টমেন্ট সিস্টেমসহ ডাক্তারদের জন্য প্রফেশনাল সাইট।",
  },
  {
    icon: <FaBlog className=" text-yellow-700" />,
    title: "ব্লগ / নিউজ পোর্টাল",
    description: "নিজস্ব কন্টেন্ট প্রকাশ ও SEO ফ্রেন্ডলি ব্লগিং সাইট।",
  },
  {
    icon: <FaBook className=" text-rose-700" />,
    title: "কোর্স / লার্নিং সাইট",
    description: "অনলাইন কোর্স, কুইজ, এবং স্টুডেন্ট এনরোলমেন্ট ফিচারসহ।",
  },
  {
    icon: <FaGlobe className=" text-orange-700" />,
    title: "পোর্টফোলিও / বিজনেস সাইট",
    description: "আপনার প্রোফাইল বা ব্যবসা তুলে ধরার জন্য একদম প্রফেশনাল লুক।",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          আমরা যেসব ধরণের ওয়েবসাইট তৈরি করি
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
