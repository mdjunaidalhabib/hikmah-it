"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggleButton from "./DarkModeToggleButton";

const navLinks = [
  { title: "Home", path: "#home", bgColor: "#f97316" },
  { title: "Services", path: "#services", bgColor: "#fc9414" },
  { title: "Contact", path: "#contact", bgColor: "#f97316" },
  { title: "Team", path: "#team", bgColor: "#f97316" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [bgColor, setBgColor] = useState("#f97316");

  const menuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleSmoothScroll = (e, targetId, color) => {
    e.preventDefault();
    setNavbarOpen(false);

    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(targetId);
          setBgColor(color);
        }
      }, 100);
    } else {
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        setBgColor(color);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setActiveSection(null);
        return;
      }

      let found = false;
      navLinks.forEach((link) => {
        if (!link.path.startsWith("#")) return;
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 100 &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(link.path);
            setBgColor(link.bgColor);
            found = true;
          }
        }
      });

      if (!found) {
        setActiveSection(null);
        setBgColor("#6b46c1");
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <motion.nav
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 w-full"
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-2 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center text-white font-semibold text-2xl gap-2"
        >
          <img src="/logo.png" alt="logo" className="w-8 h-8 rounded-full" />
          <h1 className="px-0">HIKMAH IT</h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={(e) => handleSmoothScroll(e, link.path, link.bgColor)}
              className={`text-white p-2 transition-all duration-500 ease-in-out relative ${
                pathname === "/" && activeSection === link.path
                  ? "text-yellow-300 font-bold"
                  : ""
              }`}
            >
              {link.title}
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-yellow-300 transition-all duration-1000 ease-in-out ${
                  pathname === "/" && activeSection === link.path
                    ? "w-full"
                    : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:ml-6">
          <DarkModeToggleButton />
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed top-[52px] left-0 w-3/4 h-full bg-gray-900 shadow-lg p-6 z-40"
          >
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.path, link.bgColor)
                    }
                    className={`block text-white text-lg py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
                      pathname === "/" && activeSection === link.path
                        ? "bg-yellow-500 text-black font-bold"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
