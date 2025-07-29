"use client";
export default function FaqSection() {
  const faqs = [
    {
      question: "আমি কিভাবে অর্ডার করতে পারি?",
      answer: "আমাদের ফেসবুক পেজ বা ওয়েবসাইটের মাধ্যমে সরাসরি যোগাযোগ করুন।",
    },
    {
      question: "আমি কি নিজে ভিডিও এর ক্লিপ দিতে পারবো?",
      answer:
        "হ্যাঁ, আপনি আপনার ফুটেজ আমাদের Google Drive বা অন্য মাধ্যমে পাঠাতে পারবেন।",
    },
    {
      question: "ডেলিভারি কত সময়ে পাবো?",
      answer: "প্যাকেজ অনুযায়ী ১-৩ দিনের মধ্যে ডেলিভারি দেওয়া হবে।",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">প্রশ্নোত্তর</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
            >
              <h4 className="font-semibold text-lg">❓ {faq.question}</h4>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
