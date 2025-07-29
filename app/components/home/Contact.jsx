"use client";
import React, { useState, useEffect } from "react";
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

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
    <section id="contact" className="bg-teal-50 dark:bg-gray-900">
      <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          যোগাযোগ করুন
        </h2>

        <div className="grid md:grid-cols-2 gap-4 relative mt-10">
          <div className="z-10 text-center md:mr-10">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2">
              চলুন, কথা বলি
            </h5>
            <p className="text-gray-900 dark:text-white mb-4 max-w-md mx-auto">
              আপনার কোনো প্রশ্ন, মতামত বা কাজের প্রস্তাব থাকলে নির্দ্বিধায়
              জানাতে পারেন। আমি আপনার বার্তার অপেক্ষায় আছি — উত্তর দিতে সবসময়
              প্রস্তুত।
            </p>
            <div className="justify-self-center">
              <SocialIcons />
            </div>
          </div>

          <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {emailSubmitted && (
                <div className="text-green-500 text-lg font-semibold mb-4 animate-fade-in">
                  ✅ মেসেজ সফলভাবে পাঠানো হয়েছে!
                </div>
              )}
              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-gray-900 dark:text-white block mb-2 text-sm font-medium"
                  aria-label="Your email"
                >
                  আপনার ইমেইল
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="  bg-white dark:bg-gray-800 border border-violet-600 placeholder-[#9CA2A9] text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-gray-900 dark:text-white block text-sm mb-2 font-medium"
                  aria-label="Subject"
                >
                  বিষয়
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="  bg-white dark:bg-gray-800 border border-violet-600 placeholder-[#9CA2A9] text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="আপনার মেসেজের বিষয়"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-gray-900 dark:text-white block text-sm mb-2 font-medium"
                  aria-label="Message"
                >
                  মেসেজ
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="  bg-white dark:bg-gray-800 border border-violet-600 placeholder-[#9CA2A9] text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="আপনার মেসেজ লিখুন..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-2 lg:px-3 inline-block py-2 w-full shadow-xl lg:m-3 sm:w-fit rounded-full bg-violet-700 hover:bg-fuchsia-600 text-white mt-3 text-center"
                >
                  {isSubmitting ? "পাঠানো হচ্ছে..." : "মেসেজ পাঠান"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
