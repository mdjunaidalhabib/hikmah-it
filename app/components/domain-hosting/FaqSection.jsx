"use client";

const FaqSection = () => {
  const faqs = [
    {
      question: "আমরা কোথা থেকে ডোমেইন ও হোস্টিং কিনে দিই?",
      answer: "Hostinger, Namecheap এর মত বিশ্বস্ত সাইট থেকে।",
    },
    {
      question: "কীভাবে টাকা পরিশোধ করতে হবে?",
      answer: "বিকাশ, নগদ, ব্যাংক ট্রান্সফার — আমাদের নিজস্ব গেটওয়ের মাধ্যমে।",
    },
    {
      question: "কতদিনের মধ্যে অর্ডার সম্পন্ন হবে?",
      answer: "অর্ডার করার ১ থেকে ৩ ঘণ্টার মধ্যে।",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          প্রায়শই জিজ্ঞাসিত প্রশ্ন
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow"
            >
              <summary className="font-semibold cursor-pointer">
                ❓ {faq.question}
              </summary>
              <p className="mt-2 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
