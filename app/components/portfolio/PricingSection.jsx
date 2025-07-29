import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "স্টার্টার প্যাকেজ",
      price: "৳৩,৫০০",
      features: ["১ পেজ ডিজাইন", "কন্ট্যাক্ট ফর্ম", "বেসিক SEO"],
    },
    {
      name: "প্রফেশনাল প্যাকেজ",
      price: "৳৬,৫০০",
      features: ["৩-৫ পেজ", "ব্লগ/প্রজেক্ট সেকশন", "উন্নত SEO"],
    },
    {
      name: "প্রিমিয়াম প্যাকেজ",
      price: "৳৯,৫০০",
      features: [
        "সম্পূর্ণ কাস্টম ডিজাইন",
        "ডোমেইন/হোস্টিং সেটআপ",
        "লাইফটাইম সাপোর্ট",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          প্যাকেজ ও মূল্য তালিকা
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-indigo-600 mb-4">
                {plan.price}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                অর্ডার করুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
