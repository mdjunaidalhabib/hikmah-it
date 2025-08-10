import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    institute: "",
    quantity: "",
    deliveryAddress: "",
    designType: "template",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("অর্ডার ডেটা:", formData);
    alert("আপনার অর্ডারটি গ্রহণ করা হয়েছে!");
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        📝 আইডি কার্ড অর্ডার ফর্ম
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block mb-1 font-medium">আপনার নাম</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
            placeholder="পূর্ণ নাম লিখুন"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">মোবাইল নম্বর</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
            placeholder="01XXXXXXXXX"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">আইডি কার্ডের পরিমাণ</label>
          <input
            type="number"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
            placeholder="যতটি কার্ড অর্ডার করতে চান"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">ডেলিভারি ঠিকানা</label>
          <textarea
            name="deliveryAddress"
            required
            value={formData.deliveryAddress}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
            placeholder="সম্পূর্ণ ঠিকানা লিখুন"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">ডিজাইনের ধরন</label>
          <select
            name="designType"
            value={formData.designType}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="template">আমাদের টেমপ্লেট থেকে নিব</option>
            <option value="custom">নিজস্ব ডিজাইন দিব</option>
          </select>
          {formData.designType === "custom" && (
            <p className="text-sm text-red-500 mt-1">
              কাস্টম ডিজাইনের জন্য ডিজাইন সেটআপ ফি প্রযোজ্য হবে।
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
        >
          ✅ অর্ডার সাবমিট করুন
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
