import Link from "next/link";
import SocialIcons from "./SocialIcons";
import {
  FaHome,
  FaTools,
  FaInfoCircle,
  FaPhoneAlt,
  FaProjectDiagram,
  FaClipboardCheck,
  FaUsers,
  FaFileContract,
  FaUndoAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaSchool,
  FaShoppingCart,
  FaIdCard,
  FaPaintBrush,
  FaServer,
  FaPenNib,
  FaAddressCard,
  FaVideo,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-6">
        {/* Quick Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">দ্রুত মেনু</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaHome />
              <Link href="/">হোম</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaTools />
              <Link href="/">সার্ভিসসমূহ</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaInfoCircle />
              <Link href="/" className="">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaPhoneAlt />
              <Link href="/">যোগাযোগ করুন</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaProjectDiagram />
              <Link href="/">প্রকল্পসমূহ</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaClipboardCheck />
              <Link href="/">সার্ভিস নিন</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaUsers />
              <Link href="/">টিম মেম্বার</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaFileContract />
              <Link href="/">টার্মস ও কন্ডিশন</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaUndoAlt />
              <Link href="/">রিটার্ন পলিসি</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">আমাদের সেবা</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaLaptopCode />
              <Link href="/web-development">
                কাস্টম ওয়েব ডিজাইন ও ডেভেলপমেন্ট
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaSchool />
              <Link href="/school-management">স্কুল ম্যানেজমেন্ট সিস্টেম</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaShoppingCart />
              <Link href="/ecommerce">ই-কমার্স ওয়েবসাইট</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaIdCard />
              <Link href="/portfolio">পোর্টফোলিও ওয়েবসাইট</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaPaintBrush />
              <Link href="/ui-ux">ইউআই ইউএক্স ডিজাইন</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaServer />
              <Link href="/domain-hosting">ডোমেইন ও হোস্টিং</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaPenNib />
              <Link href="/logo-design">লোগো ডিজাইন</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaAddressCard />
              <Link href="/id-card">আইডি কার্ড তৈরি</Link>
            </li>
            <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
              <FaVideo />
              <Link href="/video-editing">ভিডিও এডিটিং</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div>
            <h2 className="text-xl font-semibold mb-4">যোগাযোগ</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
                <FaPhoneAlt /> ফোন: <a href="tel:01788563988">০১৭৮৮-৫৬৩৯৮৮</a>
              </li>
              <li className="flex items-center gap-2 hover:scale-101 hover:text-yellow-300">
                <FaEnvelope /> ইমেইল:{" "}
                <a href="mailto:hikmahitcenter@gmail.com">@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> ঠিকানা: দেওয়ানগঞ্জ, জামালপুর, বাংলাদেশ
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mt-10">সোশ্যাল মিডিয়া</h2>
            <div className="">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-1 border-gray-600" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4">
        © ২০২৫ Hikmah IT. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
