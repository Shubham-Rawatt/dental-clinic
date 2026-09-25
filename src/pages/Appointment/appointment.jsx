import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaUser, FaPhoneAlt, FaTooth, FaRegCalendarAlt, FaCheckCircle,} from "react-icons/fa";

const Appointment = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", date: "", });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.treatment) newErrors.treatment = "Please select a treatment";
    if (!formData.date) newErrors.date = "Please select a date";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    console.log("Appointment request:", formData);

    setSubmitted(true);
    setFormData({ name: "", phone: "", treatment: "", date: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  const fieldBase =
    "w-full pl-11 pr-4 py-3.5 text-sm rounded-xl bg-gray-50 border border-transparent outline-none transition-colors focus:bg-white focus:border-[#1D1D1F]";

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
          <p className="text-xs tracking-[0.2em] text-gray-800 font-bold mb-3">
            BOOK AN APPOINTMENT
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F]  mb-5">
            Your smile starts
            <br />
            with a visit.
          </h2>

          <p className="text-sm text-gray-500 max-w-md leading-relaxed font-semibold mb-7">
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
          className="bg-white p-7 md:p-9 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-1">
            Request an appointment
          </h3>
          <p className="text-sm font-semibold text-gray-400 mb-6">
            We'll confirm your slot within 24 hours.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${fieldBase} ${
                    errors.name ? "border-red-300 bg-red-50" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 mt-1.5 ml-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${fieldBase} ${
                    errors.phone ? "border-red-300 bg-red-50" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 mt-1.5 ml-1"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Treatment */}
            <div>
              <div className="relative">
                <FaTooth className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <label htmlFor="treatment" className="sr-only">
                  Select Treatment
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={`${fieldBase} appearance-none ${
                    formData.treatment ? "text-[#1D1D1F]" : "text-gray-500"
                  } ${errors.treatment ? "border-red-300 bg-red-50" : ""}`}
                >
                  <option value="" disabled>
                    Select Treatment
                  </option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Braces & Aligners">Braces & Aligners</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                </select>
              </div>
              <AnimatePresence>
                {errors.treatment && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 mt-1.5 ml-1"
                  >
                    {errors.treatment}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Date */}
            <div>
              <div className="relative">
                <FaRegCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <label htmlFor="date" className="sr-only">
                  Appointment Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className={`${fieldBase} ${
                    formData.date ? "text-[#1D1D1F]" : "text-gray-500"
                  } ${errors.date ? "border-red-300 bg-red-50" : ""}`}
                />
              </div>
              <AnimatePresence>
                {errors.date && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 mt-1.5 ml-1"
                  >
                    {errors.date}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-[#1D1D1F] text-white py-4 rounded-full text-sm mt-2"
            >
              Request Appointment
              <FaArrowRight />
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 bg-green-50 text-green-700 text-sm px-4 py-3 rounded-xl"
                >
                  <FaCheckCircle />
                  Appointment request sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
