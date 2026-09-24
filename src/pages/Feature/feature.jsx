// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserMd, FaMicroscope, FaTooth, FaHeart } from "react-icons/fa";

// const featureList = [
//   {
//     icon: <FaUserMd />,
//     title: "Expert Dentists",
//     desc: "Highly skilled & experienced specialists.",
//   },
//   {
//     icon: <FaMicroscope />,
//     title: "Advanced Technology",
//     desc: "Modern equipment for precise & safe treatment.",
//   },
//   {
//     icon: <FaTooth />,
//     title: "Personalized Care",
//     desc: "Treatment plans tailored to your needs.",
//   },
//   {
//     icon: <FaHeart />,
//     title: "Comfortable Experience",
//     desc: "Relaxing environment, less stress, better care.",
//   },
// ];

// function Features() {
//   return (
//     <section className="flex flex-wrap justify-between gap-6 px-16 py-10 bg-white border-t border-gray-200">
//       {featureList.map((item, index) => (
//         <motion.div
//           className="flex items-start gap-4 max-w-[220px]"
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.15 }}
//         >
//           <div className="bg-stone-100 text-emerald-900 text-xl p-4 rounded-full">
//             {item.icon}
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-emerald-950 mb-1">
//               {item.title}
//             </h3>
//             <p className="text-xs text-gray-500 m-0">{item.desc}</p>
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// }

// export default Features;

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaUserMd, FaMicroscope, FaTooth, FaHeart } from "react-icons/fa";

const featureList = [
  {
    icon: <FaUserMd />,
    title: "Expert Dentists",
    desc: "Highly skilled and experienced specialists.",
  },
  {
    icon: <FaMicroscope />,
    title: "Advanced Technology",
    desc: "Modern equipment for precise and safe treatment.",
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
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-emerald-900/10 bg-[#f5f2ea] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {featureList.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-[#fbfaf6] p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-950/10 sm:flex-col sm:gap-5 sm:p-6"
          >
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-900/10 text-xl text-emerald-900 transition-colors duration-300 group-hover:bg-emerald-900 group-hover:text-emerald-50"
            >
              {item.icon}
            </div>

            <div>
              <h3 className="mb-1 text-base font-semibold text-emerald-950">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
