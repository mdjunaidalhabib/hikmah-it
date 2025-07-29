"use client";

import React from "react";

const plans = [
  {
    name: "বেসিক প্যাকেজ",
    price: "৳৫,০০০",
    features: ["১টি পেজ ডিজাইন", "রেসপন্সিভ লেআউট", "সাধারণ এনিমেশন"],
  },
  {
    name: "প্রো প্যাকেজ",
    price: "৳৮,০০০",
    features: ["৩টি পেজ ডিজাইন", "কাস্টম আইকন ও এনিমেশন", "ফিগমা/এক্সডি ফাইল"],
  },
  {
    name: "প্রিমিয়াম প্যাকেজ",
    price: "৳১২,০০০",
    features: [
      "৫+ পেজ",
      "ব্র্যান্ড গাইডলাইন ফলো করে ডিজাইন",
      "সাপোর্ট ও রিভিশন",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">প্যাকেজ সমূহ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-indigo-600 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-left space-y-1">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔️ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
