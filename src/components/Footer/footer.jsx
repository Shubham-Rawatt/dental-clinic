import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-white px-6 md:px-12 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif">DentiCare</h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Modern dentistry designed around your comfort, confidence and
            beautiful smile.
          </p>

          <div className="flex gap-3 mt-5">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4">Explore</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <a to="/" className="block hover:text-white">
              Home
            </a>
            <a to="/about" className="block hover:text-white">
              About
            </a>
            <a to="/treatments" className="block hover:text-white">
              Treatments
            </a>
            <a to="/doctors" className="block hover:text-white">
              Doctors
            </a>
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="mb-4">Treatments</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>Dental Implants</p>
            <p>Cosmetic Dentistry</p>
            <p>Braces & Aligners</p>
            <p>Teeth Whitening</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4">Visit Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p>
              24 Rose Avenue
              <br />
              New Delhi, India
            </p>
            <p>+91 1234567890</p>
            <p>hello@DentiCare.com</p>
            <p>Mon – Sat · 9 AM – 7 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 flex justify-between">
        <p className="text-xs text-gray-500">
          © 2026 DentiCare Dental. All rights reserved.
        </p>
<motion.button
  whileHover={{ y: -3 }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="text-sm font-medium text-gray-400 flex items-center gap-2"
>
  Back to top
  <motion.span
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="inline-flex font-bold"
  >
    <FaArrowUp />
  </motion.span>
</motion.button>
      </div>
    </footer>
  );
}

export default Footer;
