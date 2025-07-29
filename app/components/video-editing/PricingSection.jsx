"use client";

export default function PricingSection() {
  const pricing = [
    {
      title: "বেসিক প্যাকেজ",
      price: "৳৫০০",
      features: [
        "১-৩ মিনিট ভিডিও",
        "বেসিক কাটিং ও ট্রানজিশন",
        "স্ট্যান্ডার্ড এক্সপোর্ট",
      ],
    },
    {
      title: "স্ট্যান্ডার্ড প্যাকেজ",
      price: "৳১৫০০",
      features: [
        "৪-৭ মিনিট ভিডিও",
        "অ্যাডভান্স ট্রানজিশন",
        "ভয়েস ও ব্যাকগ্রাউন্ড মিউজিক",
      ],
    },
    {
      title: "প্রিমিয়াম প্যাকেজ",
      price: "৳৩০০০",
      features: [
        "৮+ মিনিট ভিডিও",
        "মোশন গ্রাফিক্স ও কালার গ্রেডিং",
        "২৪ ঘন্টার এক্সপ্রেস ডেলিভারি",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">মূল্য তালিকা</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="text-left space-y-1">
                {pkg.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}