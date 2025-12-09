"use client";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaGem,
  FaCog,
  FaUserCog,
  FaCloud,
  FaBoxOpen,
  FaDatabase,
  FaUsers,
  FaHeadset,
  FaGlobe,
  FaPercent,
  FaCreditCard,
  FaUserShield,
  FaListUl,
  FaServer,
} from "react-icons/fa";

/* =========================
   FEATURE LISTS WITH ICONS + COLORS + BADGE BG
   ========================= */
const commonFeatures = [
  {
    key: "customization",
    label: "কাস্টমাইজেশন",
    icon: <FaCog />,
    iconClass: "text-indigo-700 dark:text-indigo-300",
    iconBgClass: "bg-indigo-100 dark:bg-indigo-900/40",
  },
  {
    key: "professional_admin_panel",
    label: "প্রফেশনাল অ্যাডমিন প্যানেল",
    icon: <FaUserCog />,
    iconClass: "text-purple-700 dark:text-purple-300",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/40",
  },
  {
    key: "unlimited_storage",
    label: "আনলিমিটেড স্টোরেজ",
    icon: <FaDatabase />,
    iconClass: "text-emerald-700 dark:text-emerald-300",
    iconBgClass: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  {
    key: "unlimited_bandwidth",
    label: "আনলিমিটেড ব্যান্ডউইথ",
    icon: <FaCloud />,
    iconClass: "text-sky-700 dark:text-sky-300",
    iconBgClass: "bg-sky-100 dark:bg-sky-900/40",
  },
  {
    key: "unlimited_product_add",
    label: "আনলিমিটেড প্রোডাক্ট ম্যানেজমেন্ট",
    icon: <FaBoxOpen />,
    iconClass: "text-amber-700 dark:text-amber-300",
    iconBgClass: "bg-amber-100 dark:bg-amber-900/40",
  },
  {
    key: "hosting_price",
    label: "হোস্টিং প্রাইস",
    icon: <FaServer />,
    iconClass: "text-rose-700 dark:text-rose-300",
    iconBgClass: "bg-rose-100 dark:bg-rose-900/40",
  },
  {
    key: "employee_management",
    label: "এমপ্লয়ী ম্যানেজমেন্ট",
    icon: <FaUsers />,
    iconClass: "text-teal-700 dark:text-teal-300",
    iconBgClass: "bg-teal-100 dark:bg-teal-900/40",
  },
  {
    key: "support_247",
    label: "২৪/৭ ডেডিকেটেড সাপোর্ট",
    icon: <FaHeadset />,
    iconClass: "text-lime-700 dark:text-lime-300",
    iconBgClass: "bg-lime-100 dark:bg-lime-900/40",
  },
];

const tierFeatures = [
  {
    key: "dotcom_domain",
    label: "ডট কম ডোমেইন",
    icon: <FaGlobe />,
    iconClass: "text-blue-700 dark:text-blue-300",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/40",
  },
  {
    key: "discount_coupon_management",
    label: "ডিসকাউন্ট/কুপন ম্যানেজমেন্ট",
    icon: <FaPercent />,
    iconClass: "text-pink-700 dark:text-pink-300",
    iconBgClass: "bg-pink-100 dark:bg-pink-900/40",
  },
  {
    key: "payment_gateway",
    label: "নিরাপদ পেমেন্ট গেটওয়ে",
    icon: <FaCreditCard />,
    iconClass: "text-green-700 dark:text-green-300",
    iconBgClass: "bg-green-100 dark:bg-green-900/40",
  },
  {
    key: "reseller_account",
    label: "রিসেলার অ্যাকাউন্ট",
    icon: <FaUserShield />,
    iconClass: "text-orange-700 dark:text-orange-300",
    iconBgClass: "bg-orange-100 dark:bg-orange-900/40",
  },
];

const allFeatures = [...commonFeatures, ...tierFeatures];

/* =========================
   3 PLANS
   ========================= */
const plans = [
  {
    key: "basic",
    title: "Basic",
    subtitle: "For starters",
    price: "৳১৪০০",
    renew: "Renewal same price",
    members: "২ জন",
    orders: "৫০০ অর্ডার/মাস",
    included: [...commonFeatures.map((f) => f.key)],
  },
  {
    key: "regular",
    title: "Regular",
    subtitle: "Most popular",
    price: "৳১৯৯৯৯",
    renew: "Renewal same price",
    popular: true,
    members: "৫ জন",
    orders: "১৫০০ অর্ডার/মাস",
    included: [
      ...commonFeatures.map((f) => f.key),
      "dotcom_domain",
      "discount_coupon_management",
      "payment_gateway",
    ],
  },
  {
    key: "advanced",
    title: "Advanced",
    subtitle: "For professionals",
    price: "৳৩৯৯৯৯",
    renew: "Renewal same price",
    members: "১০ জন",
    orders: "৩০০০ অর্ডার/মাস",
    included: [
      ...commonFeatures.map((f) => f.key),
      ...tierFeatures.map((f) => f.key),
    ],
  },
];

/* =========================
   MAIN COMPONENT
   ========================= */
export default function PricingTable() {
  const [hoverCol, setHoverCol] = useState(null);

  return (
    <section className="relative py-16 px-5 bg-purple-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full dark:text-indigo-200 dark:bg-indigo-900/40">
            বার্ষিক সাবস্ক্রিপশন
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            আপনার ব্যবসার জন্য সেরা প্ল্যান বেছে নিন
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto dark:text-slate-300">
            ই-কমার্স কেনাকাটায় আরও দ্রুত ডেলিভারি, বেশি ডিসকাউন্ট এবং প্রিমিয়াম
            সাপোর্ট উপভোগ করুন।
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((p) => (
            <div
              key={p.key}
              className="bg-purple-50 shadow-md rounded-xl p-6 text-center border border-gray-200
                         transition transform hover:-translate-y-2 hover:shadow-xl relative
                         dark:bg-slate-900 dark:border-slate-800 dark:shadow-black/40"
            >
              {p.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-yellow-400 px-3 py-1 rounded-full font-bold shadow flex items-center gap-1 dark:bg-yellow-500">
                  <FaGem /> জনপ্রিয়
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 mt-3 dark:text-white">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm dark:text-slate-400">
                {p.subtitle}
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-yellow-600 dark:text-yellow-400">
                {p.price}
              </h2>

              <p className="text-xs bg-green-100 text-green-700 px-3 py-1 inline-block rounded-full mt-1 border border-green-300 dark:bg-green-900/40 dark:text-green-200 dark:border-green-700/40">
                🔁 {p.renew}
              </p>

              <div className="mt-3 text-sm text-gray-600 space-y-1 dark:text-slate-300">
                <p>🔹 {p.members}</p>
                <p>🔹 {p.orders}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE VIEW (STACKED CARDS) ================= */}
        <div className="md:hidden space-y-5">
          {plans.map((p) => (
            <div
              key={p.key}
              className="bg-purple-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-md p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {p.subtitle}
                  </p>
                </div>
                {p.popular && (
                  <div className="text-[10px] bg-yellow-400 px-2 py-1 rounded-full font-bold flex items-center gap-1 dark:bg-yellow-500">
                    <FaGem /> জনপ্রিয়
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-end justify-between">
                <p className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400">
                  {p.price}
                </p>
                <p className="text-[11px] bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-300 dark:bg-green-900/40 dark:text-green-200 dark:border-green-700/40">
                  🔁 {p.renew}
                </p>
              </div>

              <div className="mt-3 text-xs text-gray-600 dark:text-slate-300 space-y-1">
                <p>🔹 {p.members}</p>
                <p>🔹 {p.orders}</p>
              </div>

              <div className="mt-4 space-y-2">
                {allFeatures.map((f) => {
                  const included = p.included.includes(f.key);
                  return (
                    <div
                      key={f.key}
                      className="flex items-center justify-between bg-slate-100 dark:bg-slate-950/40 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 flex items-center justify-center rounded-full ${f.iconBgClass}`}
                        >
                          <span className={`text-xs ${f.iconClass}`}>
                            {f.icon}
                          </span>
                        </span>
                        <span className="text-xs text-gray-800 dark:text-slate-200">
                          {f.label}
                        </span>
                      </div>

                      {included ? (
                        <FaCheckCircle className="text-green-500 dark:text-green-400 text-sm" />
                      ) : (
                        <FaTimesCircle className="text-red-400 dark:text-red-500 text-sm opacity-80" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP/TABLET VIEW (TABLE) ================= */}
        <div
          className="hidden md:block bg-purple-50 shadow-md rounded-2xl border border-gray-200
                     p-6 overflow-x-auto dark:bg-slate-900 dark:border-slate-800 dark:shadow-black/40 mt-6"
        >
          <table className="w-full table-auto text-left">
            <thead className="sticky top-0 bg-purple-100 dark:bg-slate-900 shadow-sm z-10">
              <tr>
                <th className="py-3 px-5 text-gray-800 dark:text-white font-semibold whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <FaListUl className="text-indigo-600 dark:text-indigo-300 text-lg" />
                    ফিচারসমূহ
                  </div>
                </th>

                {plans.map((p, idx) => (
                  <th
                    key={p.key}
                    className={`py-3 px-5 text-center font-semibold whitespace-nowrap
                      text-gray-800 dark:text-white transition
                      ${
                        hoverCol === idx
                          ? "bg-indigo-50 dark:bg-indigo-900/30 shadow-md"
                          : ""
                      }`}
                    onMouseEnter={() => setHoverCol(idx)}
                    onMouseLeave={() => setHoverCol(null)}
                  >
                    {p.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {commonFeatures.map((f) => (
                <FeatureRow
                  key={f.key}
                  feature={f}
                  plans={plans}
                  hoverCol={hoverCol}
                  setHoverCol={setHoverCol}
                />
              ))}

              <tr>
                <td colSpan={4} className="py-2" />
              </tr>

              {tierFeatures.map((f) => (
                <FeatureRow
                  key={f.key}
                  feature={f}
                  plans={plans}
                  hoverCol={hoverCol}
                  setHoverCol={setHoverCol}
                />
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 dark:text-slate-400">
          অতিরিক্ত ভ্যাট/সার্ভিস চার্জ প্রযোজ্য হতে পারে
        </p>
      </div>
    </section>
  );
}

/* =========================
   Feature Row Component (Desktop Table)
   ========================= */
function FeatureRow({ feature, plans, hoverCol, setHoverCol }) {
  return (
    <tr className="border-t border-gray-200 dark:border-slate-800">
      <td className="py-4 text-gray-700 text-sm flex items-center gap-3 dark:text-slate-200">
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full shadow-sm ${feature.iconBgClass}`}
        >
          <span className={`text-base ${feature.iconClass}`}>
            {feature.icon}
          </span>
        </span>
        {feature.label}
      </td>

      {plans.map((p, idx) => {
        const included = p.included.includes(feature.key);
        return (
          <td
            key={idx}
            className={`py-4 text-center transition rounded-md
              ${
                hoverCol === idx
                  ? "bg-indigo-50 scale-105 shadow-sm dark:bg-indigo-900/30"
                  : ""
              }`}
            onMouseEnter={() => setHoverCol(idx)}
            onMouseLeave={() => setHoverCol(null)}
          >
            {included ? (
              <FaCheckCircle className="text-green-500 dark:text-green-400 text-lg mx-auto" />
            ) : (
              <FaTimesCircle className="text-red-400 dark:text-red-500 text-lg mx-auto opacity-70" />
            )}
          </td>
        );
      })}
    </tr>
  );
}
