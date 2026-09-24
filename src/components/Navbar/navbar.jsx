import React, { useState } from "react";
import { motion } from "framer-motion";

import {FaTooth,FaSearch,FaArrowRight,FaTimes,FaBars,} from "react-icons/fa";

function AnimatedArrow() {
  return (
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex"
    >
      <FaArrowRight />
    </motion.span>
  );
}

function Navbar() {
  const menuLinks = [
    "Home",
    "About",
    "Treatments",
    "Doctors",
    "Patient Stories",
    "Blog",
    "Contact",
  ];

  const [activeLink, setActiveLink] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMenu(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim() !== "") {
      alert(`Searching for: ${searchText}`);
      setSearchText("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaTooth className="text-2xl text-emerald-900" />

        <h1 className="text-lg font-semibold text-emerald-900">DentiCare</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 xl:gap-7 list-none text-sm">
        {menuLinks.map((link) => (
          <li
            key={link}
            onClick={() => handleLinkClick(link)}
            className={`relative cursor-pointer pb-1 transition-colors duration-300
              ${
                link === activeLink
                  ? "text-emerald-900 font-bold"
                  : "text-gray-700 font-semibold"
              }
              hover:text-emerald-900
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-emerald-900 after:w-0 after:transition-all
              after:duration-300 hover:after:w-full
              ${link === activeLink ? "after:w-full" : ""}
            `}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Desktop Right */}
      <div className="hidden lg:flex items-center gap-5">
        <FaSearch
          onClick={() => setShowSearch(!showSearch)}
          className="text-gray-700 cursor-pointer hover:text-emerald-900"
        />

        <button className="flex items-center gap-2 bg-emerald-900 text-white px-5 py-3 rounded-full text-sm hover:bg-emerald-800 transition">
          Book Appointment
          <AnimatedArrow />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle menu"
        className="lg:hidden text-xl text-gray-700"
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md lg:hidden">
          <div className="px-6 py-5 space-y-4">
            {menuLinks.map((link) => (
              <p
                key={link}
                onClick={() => handleLinkClick(link)}
                className={
                  link === activeLink
                    ? "font-semibold text-emerald-900 cursor-pointer"
                    : "text-gray-700 cursor-pointer"
                }
              >
                {link}
              </p>
            ))}

            <button className="w-full flex items-center justify-center gap-2 bg-emerald-900 text-white py-3 rounded-full text-sm">
              Book Appointment
              <AnimatedArrow />
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute top-full right-4 md:right-10 mt-2 flex items-center bg-white border border-gray-200 rounded-full shadow-md px-4 py-2 gap-2"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="outline-none text-sm w-40"
          />

          <FaTimes
            onClick={() => setShowSearch(false)}
            className="text-gray-400 cursor-pointer"
          />
        </form>
      )}
    </nav>
  );
}

export default Navbar;
