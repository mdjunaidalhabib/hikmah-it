"use client";

export default function WhyChooseUs() {
  const reasons = [
    "দ্রুত ডেলিভারি গ্যারান্টি",
    "ক্লায়েন্ট অনুযায়ী সম্পূর্ণ কাস্টমাইজ",
    "সাশ্রয়ী মূল্য এবং প্যাকেজ অপশন",
    "প্রফেশনাল সফটওয়্যার (Adobe Premiere, After Effects) ব্যবহৃত",
    "বাংলা ভাষায় সাপোর্ট ও যোগাযোগ",
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">কেন আমাদের নির্বাচন করবেন?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded shadow"
            >
              🎯 {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}