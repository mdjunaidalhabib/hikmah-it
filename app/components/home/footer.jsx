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
            <li className="flex items-center gap-2">
              <FaHome /> হোম
            </li>
            <li className="flex items-center gap-2">
              <FaTools /> সার্ভিসসমূহ
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> আমাদের সম্পর্কে
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> যোগাযোগ করুন
            </li>
            <li className="flex items-center gap-2">
              <FaProjectDiagram /> প্রকল্পসমূহ
            </li>
            <li className="flex items-center gap-2">
              <FaClipboardCheck /> সার্ভিস নিন
            </li>
            <li className="flex items-center gap-2">
              <FaUsers /> টিম মেম্বার
            </li>
            <li className="flex items-center gap-2">
              <FaFileContract /> টার্মস ও কন্ডিশন
            </li>
            <li className="flex items-center gap-2">
              <FaUndoAlt /> রিটার্ন পলিসি
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">আমাদের সেবা</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaLaptopCode /> কাস্টম ওয়েব ডিজাইন ও ডেভেলপমেন্ট
            </li>
            <li className="flex items-center gap-2">
              <FaSchool /> স্কুল ম্যানেজমেন্ট সিস্টেম
            </li>
            <li className="flex items-center gap-2">
              <FaShoppingCart /> ই-কমার্স ওয়েবসাইট
            </li>
            <li className="flex items-center gap-2">
              <FaIdCard /> পোর্টফোলিও ওয়েবসাইট
            </li>
            <li className="flex items-center gap-2">
              <FaPaintBrush /> ইউআই ইউএক্স ডিজাইন
            </li>
            <li className="flex items-center gap-2">
              <FaServer /> ডোমেইন ও হোস্টিং
            </li>
            <li className="flex items-center gap-2">
              <FaPenNib /> লোগো ডিজাইন
            </li>
            <li className="flex items-center gap-2">
              <FaAddressCard /> আইডি কার্ড তৈরি
            </li>
            <li className="flex items-center gap-2">
              <FaVideo /> ভিডিও এডিটিং
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div>
            <h2 className="text-xl font-semibold mb-4">যোগাযোগ</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> ফোন: +৮৮০১৭৮৮-৫৬৩৯৮৮
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> ইমেইল: junaidalhabib20@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> ঠিকানা: নারায়ণগঞ্জ-১৪২১, ঢাকা, বাংলাদেশ
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
