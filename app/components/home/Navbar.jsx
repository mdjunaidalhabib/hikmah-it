"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggleButton from "./DarkModeToggleButton";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-violet-600 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        {/* Logo and Title */}
        <Link
          href="/"
          className="flex items-center text-white font-bold text-2xl"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-8 h-8 rounded-full mr-2"
          />
          HIKMAH IT
        </Link>

        {/* Desktop Menu centered vertically */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className={`text-white font-semibold hover:text-amber-400 transition-all duration-300 ease-in-out px-3 py-1 rounded-b-md ${
                isActive(link.path)
                  ? "border-b-4 border-amber-400 text-amber-400 font-semibold"
                  : "border-b-4 border-transparent"
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right side: Dark Mode Toggle + Hamburger */}
        <div className="flex items-center space-x-4">
          <DarkModeToggleButton />

          {/* Hamburger Button */}
          <button
            onClick={toggleNavbar}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={navbarOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              className="block h-1 w-6 bg-white rounded"
              style={{ originX: 0.5, originY: 0.5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={navbarOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-1 w-6 bg-white rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={
                navbarOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block h-1 w-6 bg-white rounded"
              style={{ originX: 0.5, originY: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setNavbarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-13 left-0 bottom-0  w-64 bg-violet-950 p-6 flex flex-col space-y-4 z-50"
            >
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className={`text-white text-lg px-4 py-2 rounded transition-colors duration-300 ${
                    isActive(link.path)
                      ? "bg-yellow-400 text-black font-semibold"
                      : "hover:bg-yellow-500"
                  }`}
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
