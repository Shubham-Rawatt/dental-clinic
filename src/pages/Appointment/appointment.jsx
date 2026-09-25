import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaUser,
  FaPhoneAlt,
  FaTooth,
  FaRegCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Appointment = () => {
  // har field ka alag state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");

  // har error ka alag state
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [treatmentError, setTreatmentError] = useState("");
  const [dateError, setDateError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Name check
    if (name.trim() === "") {
      setNameError("Name is required");
      hasError = true;
    } else {
      setNameError("");
    }

    // Phone check
    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      hasError = true;
    } else if (!/^\d{10}$/.test(phone.trim())) {
      setPhoneError("Enter a valid 10-digit phone number");
      hasError = true;
    } else {
      setPhoneError("");
    }

    // Treatment check
    if (treatment === "") {
      setTreatmentError("Please select a treatment");
      hasError = true;
    } else {
      setTreatmentError("");
    }

    // Date check
    if (date === "") {
      setDateError("Please select a date");
      hasError = true;
    } else {
      setDateError("");
    }

    if (hasError) {
      setSubmitted(false);
      return;
    }

    console.log("Appointment request:", { name, phone, treatment, date });

    setSubmitted(true);
    setName("");
    setPhone("");
    setTreatment("");
    setDate("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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

          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-5">
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
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={
                    nameError
                      ? `${fieldBase} border-red-300 bg-red-50`
                      : fieldBase
                  }
                />
              </div>
              {nameError !== "" && (
                <p className="text-xs text-red-500 mt-1.5 ml-1">{nameError}</p>
              )}
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
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={
                    phoneError
                      ? `${fieldBase} border-red-300 bg-red-50`
                      : fieldBase
                  }
                />
              </div>
              {phoneError !== "" && (
                <p className="text-xs text-red-500 mt-1.5 ml-1">{phoneError}</p>
              )}
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
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className={
                    treatmentError
                      ? `${fieldBase} appearance-none border-red-300 bg-red-50`
                      : `${fieldBase} appearance-none`
                  }
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
              {treatmentError !== "" && (
                <p className="text-xs text-red-500 mt-1.5 ml-1">
                  {treatmentError}
                </p>
              )}
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
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={
                    dateError
                      ? `${fieldBase} border-red-300 bg-red-50`
                      : fieldBase
                  }
                />
              </div>
              {dateError !== "" && (
                <p className="text-xs text-red-500 mt-1.5 ml-1">{dateError}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-[#1D1D1F] text-white py-4 rounded-full text-sm font-semibold mt-2"
            >
              Request Appointment
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex"
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>

            {submitted && (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 text-sm px-4 py-3 rounded-xl">
                <FaCheckCircle />
                Appointment request sent successfully!
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
