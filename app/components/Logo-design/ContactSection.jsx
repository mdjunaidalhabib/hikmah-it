import React from "react";

export default function ContactSection() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
        যোগাযোগ করুন ও অর্ডার করুন
      </h2>
      <p className="text-gray-700">
        📱 ০১৭৮৮-৫৬৩৯৮৮ | 🌐 www.hikmahitcenter.com | ✉️
        support@hikmahitcenter.com
      </p>
      <a
        href="https://wa.me/8801788563988"
        className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600"
      >
        হোয়াটসঅ্যাপে মেসেজ দিন
      </a>
    </section>
  );
}
