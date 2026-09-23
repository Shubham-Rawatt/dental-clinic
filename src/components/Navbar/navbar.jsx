import React, { useState } from "react";
import { FaTooth, FaSearch, FaArrowRight, FaTimes } from "react-icons/fa";

function Navbar() {
  const menuLinks = [
    "Home",
    "Treatments",
    "About",
    "Doctors",
    "Patient Stories",
    "Blog",
    "Contact",
  ];

  // Track which link is currently active
  const [activeLink, setActiveLink] = useState("Home");

  // Track whether the search box is open
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Runs when a menu link is clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Runs when the search icon is clicked
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  // Runs when the search form is submitted
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      alert(`Searching for: ${searchText}`);
      setSearchText("");
      setShowSearch(false);
    }
  };

  // Runs when "Book Appointment" is clicked
  const handleBookAppointment = () => {
    alert("Booking form opened! (connect this to your booking page)");
  };

  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-white border-b border-gray-200 relative">
      <div className="flex items-center gap-3">
        <FaTooth className="text-2xl text-emerald-900" />
        <div>
          <h1 className="text-lg font-semibold text-emerald-900 m-0">
            DentiCare
          </h1>
          <p className="text-xs text-gray-400 m-0">Modern Dental Clinic</p>
        </div>
      </div>

      <ul className="flex gap-7 list-none text-sm text-gray-700">
        {menuLinks.map((link, index) => (
          <li
            key={index}
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

      <div className="flex items-center gap-5">
        <FaSearch
          onClick={handleSearchToggle}
          className="text-gray-700 cursor-pointer hover:text-emerald-900"
        />
        <button
          onClick={handleBookAppointment}
          className="flex items-center gap-2 bg-emerald-900 text-white px-5 py-3 rounded-full text-sm hover:bg-emerald-800 transition-colors"
        >
          Book Appointment <FaArrowRight />
        </button>
      </div>

      {/* Search box appears only when showSearch is true */}
      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute top-full right-16 mt-2 flex items-center bg-white border border-gray-200 rounded-full shadow-md px-4 py-2 gap-2"
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
            className="text-gray-400 cursor-pointer hover:text-gray-700"
          />
        </form>
      )}
    </nav>
  );
}

export default Navbar;
