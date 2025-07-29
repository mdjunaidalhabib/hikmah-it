// PricingSection.jsx
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "বেসিক",
    price: "৳5,000",
    features: [
      "১০০ ছাত্র পর্যন্ত ব্যবস্থাপনা",
      "বেসিক ক্লাস ও শিক্ষক ম্যানেজমেন্ট",
      "সহজ রিপোর্টিং সিস্টেম",
      "মাসিক সাপোর্ট",
    ],
  },
  {
    title: "স্ট্যান্ডার্ড",
    price: "৳১০,০০০",
    features: [
      "৫০০ ছাত্র পর্যন্ত ব্যবস্থাপনা",
      "সম্পূর্ণ ক্লাস, শিক্ষক ও উপস্থিতি ম্যানেজমেন্ট",
      "এক্সেল ও PDF রিপোর্ট",
      "মাসিক ও টেকনিক্যাল সাপোর্ট",
    ],
  },
  {
    title: "প্রিমিয়াম",
    price: "৳২০,০০০",
    features: [
      "অসীম ছাত্র ব্যবস্থাপনা",
      "কাস্টমাইজড ফিচার ও রিপোর্টিং",
      "প্রায়োরিটি সাপোর্ট",
      "মোবাইল অ্যাপ ইন্টিগ্রেশন",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
          আমাদের মূল্য পরিকল্পনাসমূহ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold mb-6 text-green-900">
                {plan.price}
              </p>
              <ul className="mb-6 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center mb-2 text-gray-700"
                  >
                    <FaCheckCircle className="text-green-600 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition duration-300">
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
