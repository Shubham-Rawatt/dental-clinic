import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaMicroscope, FaTooth, FaHeart } from "react-icons/fa";

const featureList = [
  {
    icon: <FaUserMd />,
    title: "Expert Dentists",
    desc: "Highly skilled & experienced specialists.",
  },
  {
    icon: <FaMicroscope />,
    title: "Advanced Technology",
    desc: "Modern equipment for precise & safe treatment.",
  },
  {
    icon: <FaTooth />,
    title: "Personalized Care",
    desc: "Treatment plans tailored to your needs.",
  },
  {
    icon: <FaHeart />,
    title: "Comfortable Experience",
    desc: "Relaxing environment, less stress, better care.",
  },
];

function Features() {
  return (
    <section className="flex flex-wrap justify-between gap-6 px-16 py-10 bg-white border-t border-gray-200">
      {featureList.map((item, index) => (
        <motion.div
          className="flex items-start gap-4 max-w-[220px]"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="bg-stone-100 text-emerald-900 text-xl p-4 rounded-full">
            {item.icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-emerald-950 mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 m-0">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Features;
