import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import treatmentsData from '../../data/treatmentdata';

// Parent container: controls the stagger timing so cards appear one after another
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Each card: fades up and slightly scales in as it enters the screen
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Treatments() {
  return (
    <section className="px-16 py-16 bg-white">
      {/* Section header */}
      <motion.div
        className="flex items-end justify-between mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-xs tracking-wide text-gray-500 mb-2">
            OUR TREATMENTS
          </p>
          <h2 className="text-4xl font-serif text-emerald-950">
            Everything your smile needs.
          </h2>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-900 transition-colors">
          View all treatments <FaArrowRight />
        </button>
      </motion.div>

      {/* Treatment cards, staggered in as a group when scrolled into view */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {treatmentsData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0px 10px 25px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
            className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer bg-white group"
          >
            <div className="h-40 overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">{item.number}</p>
              <h3 className="text-base font-semibold text-emerald-950 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mb-4">{item.desc}</p>

              {/* Arrow slides right on hover — its own small animation, independent of the card's entrance animation */}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                className="inline-block"
              >
                <FaArrowRight className="text-gray-500 group-hover:text-emerald-900 transition-colors" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Treatments;
