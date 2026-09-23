import React, { useState } from "react";
import { FaTooth, FaSearch, FaArrowRight, FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const menuLinks = [ "Home", "About", "Treatments", "Doctors", "Patient Stories", "Blog", "Contact",];
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
    <nav className="relative flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 bg-white border-b border-gray-200">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaTooth className="text-2xl text-emerald-900" />

        <h1 className="text-lg font-semibold text-emerald-900">
          DentiCare
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 xl:gap-7 list-none text-sm text-gray-700">
        {menuLinks.map((link) => (
          <li
            key={link}
            onClick={() => handleLinkClick(link)}
            className={
              link === activeLink
                ? "underline font-semibold cursor-pointer text-emerald-900"
                : "cursor-pointer hover:text-emerald-900"
            }
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
          <FaArrowRight />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-xl text-gray-700"
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md lg:hidden z-50">
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
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute top-full right-4 md:right-10 mt-2 flex items-center bg-white border border-gray-200 rounded-full shadow-md px-4 py-2 gap-2 z-50"
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