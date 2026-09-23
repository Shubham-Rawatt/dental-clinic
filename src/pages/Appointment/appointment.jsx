import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-16 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] text-gray-500 mb-3">
            BOOK AN APPOINTMENT
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1D1D1F] leading-tight mb-5">
            Your smile starts
            <br />
            with a visit.
          </h2>

          <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-7">
            Schedule a consultation with our experienced dental team and take
            the first step towards a healthier smile.
          </p>

          <motion.img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=900"
            alt="Dental clinic"
            className="w-full h-64 object-cover rounded-2xl"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-7 md:p-9 rounded-2xl"
        >
          <h3 className="text-2xl font-serif text-[#1D1D1F] mb-6">
            Request an appointment
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#1D1D1F]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-b border-gray-200 py-3 text-sm outline-none focus:border-[#1D1D1F]"
            />

            <select className="w-full border-b border-gray-200 py-3 text-sm text-gray-500 outline-none bg-white">
              <option>Select Treatment</option>
              <option>Dental Implants</option>
              <option>Cosmetic Dentistry</option>
              <option>Braces & Aligners</option>
              <option>Teeth Whitening</option>
            </select>

            <input
              type="date"
              className="w-full border-b border-gray-200 py-3 text-sm text-gray-500 outline-none"
            />

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-[#1D1D1F] text-white py-4 rounded-full text-sm"
            >
              Request Appointment
              <FaArrowRight />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
