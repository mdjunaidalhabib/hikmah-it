import React from "react";
import OrderForm from "./OrderForm";
import FAQSection from "./FAQSection";

const CombinedSection = () => {
  return (
    <section
      id="order-section"
      className="bg-fuchsia-50 dark:bg-gray-900 pt-8"
    >
      <div className=" text-center px-4 md:px-10 py-10 max-w-7xl mx-auto">
        {/* হেডিং */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white p-2">
          🎫 আইডি কার্ড অর্ডার করুন এবং বিস্তারিত জানুন
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          অনলাইন ফর্ম পূরণ করে সহজেই অর্ডার করুন, এবং প্রয়োজনীয় তথ্য জেনে নিন
          এখানেই।
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <FAQSection />
          </div>
          <div className="md:w-1/2">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
};


export default CombinedSection;
