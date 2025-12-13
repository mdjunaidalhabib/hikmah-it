"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (emailSubmitted) {
      const timer = setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (!email.includes("@")) {
      setErrorMessage("অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা দিন।");
      setIsSubmitting(false);
      return;
    }

    const data = { email, subject, message };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      await response.json();
      setEmailSubmitted(true);

      e.target.email.value = "";
      e.target.subject.value = "";
      e.target.message.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage(
        "মেসেজ পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pb-10 px-4 bg-fuchsia-100 dark:bg-slate-950 text-center overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-72 h-72 bg-purple-300 rounded-full opacity-20 absolute -top-24 -right-24 animate-pulse"></div>
      </div>

      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white p-2"
        >
          যোগাযোগ করুন
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-900 dark:text-white mb-4 mx-auto max-w-3xl"
        >
          আপনার কোনো প্রশ্ন, মতামত বা কাজের প্রস্তাব থাকলে নির্দ্বিধায় জানাতে
          পারেন। আমরা আপনার বার্তার অপেক্ষায় আছি। উত্তর দিতে সবসময় প্রস্তুত।
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 relative mt-10 md:mt-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {emailSubmitted && (
                <div className="text-green-500 text-lg font-semibold mb-4">
                  ✅ মেসেজ সফলভাবে পাঠানো হয়েছে!
                </div>
              )}
              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}

              <div className="mb-6">
                <label className="text-gray-900 dark:text-white block mb-2 text-sm font-medium">
                  আপনার ইমেইল
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-white dark:bg-gray-800 border border-violet-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@domain.com"
                />
              </div>

              <div className="mb-6">
                <label className="text-gray-900 dark:text-white block text-sm mb-2 font-medium">
                  বিষয়
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="bg-white dark:bg-gray-800 border border-violet-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="আপনার মেসেজের বিষয়"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-900 dark:text-white block text-sm mb-2 font-medium">
                  মেসেজ
                </label>
                <textarea
                  name="message"
                  required
                  className="bg-white dark:bg-gray-800 border border-violet-600 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="আপনার মেসেজ লিখুন..."
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:flex md:justify-center"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-2 md:px-14 w-full md:w-fit py-2 shadow-md lg:m-3 rounded bg-purple-600 hover:bg-fuchsia-600 text-white transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "পাঠানো হচ্ছে..." : "মেসেজ পাঠান"}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-10 text-center mt-8 md:mr-10"
          >
            <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2 p-1">
              চলুন, যুক্ত হই
            </h5>
            <p className="text-gray-900 dark:text-white mb-4 max-w-md mx-auto">
              ফেসবুক, হোয়াটসঅ্যাপ, কিংবা ইউটিউব যে মাধ্যমেই চান, আমার সাথে
              যুক্ত হতে পারেন। আপনার মতামত, প্রস্তাব বা সহযোগিতার সুযোগ নিয়ে
              কথা বলতে আমি সবসময় প্রস্তুত।
            </p>
            <div className="justify-self-center">
              <SocialIcons />
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
