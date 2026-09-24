import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import treatmentsData from "../../data/treatmentdata";

// Shuru mein kitne cards dikhane hain
const INITIAL_COUNT = 4;

// Parent: cards ek ke baad ek aate hain
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Card: neeche se fade-up. custom = "View all" dabane par naye cards ki delay
const makeCardVariants = (reduceMotion) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 30, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
});

function Treatments() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const cardVariants = makeCardVariants(reduceMotion);

  const hasMore = treatmentsData.length > INITIAL_COUNT;
  const visibleItems = showAll
    ? treatmentsData
    : treatmentsData.slice(0, INITIAL_COUNT);

  const toggleAll = () => {
    const next = !showAll;
    setShowAll(next);
    // "Show less" par section ke top par wapas le jao
    if (!next) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="treatments"
      className="scroll-mt-20 bg-[#f5f2ea] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16"
    >
      {/* Section header */}
      <motion.div
        className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="mb-2 text-sm font-medium text-emerald-800">
            Our treatments
          </p>
          <h2 className="font-serif text-3xl text-emerald-950 sm:text-4xl">
            Everything your smile needs.
          </h2>
        </div>

        {hasMore && (
          <button
            type="button"
            onClick={toggleAll}
            aria-expanded={showAll}
            aria-controls="treatments-grid"
            className="group flex w-fit items-center gap-2 rounded-full border border-emerald-900/20 bg-[#fbfaf6] px-5 py-2.5 text-sm font-medium text-emerald-950 shadow-sm transition hover:bg-emerald-900 hover:text-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]"
          >
            {showAll ? "Show less" : "View all treatments"}
            {showAll ? (
              <FaChevronDown className="rotate-180 text-xs transition-transform" />
            ) : (
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        )}
      </motion.div>

      {/* Treatment cards */}
      <motion.div
        id="treatments-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <AnimatePresence>
          {visibleItems.map((item, index) => {
            const isExtra = index >= INITIAL_COUNT;
            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                custom={isExtra ? index - INITIAL_COUNT : 0}
                // Naye (extra) cards parent ke stagger ke bahar hain, isliye khud animate hote hain
                {...(isExtra ? { initial: "hidden", animate: "visible" } : {})}
                exit="exit"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-[#fbfaf6] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#f5f2ea]/90 px-2.5 py-1 text-xs font-medium tabular-nums text-emerald-900 backdrop-blur-sm">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-semibold text-emerald-950">
                    {item.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-stone-600">
                    {item.desc}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-emerald-900/20 text-emerald-900 transition duration-300 group-hover:border-emerald-900 group-hover:bg-emerald-900 group-hover:text-emerald-50"
                  >
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Count + neeche wala toggle (jab saare cards khule hon, upar scroll na karna pade) */}
      {hasMore && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm text-stone-600">
            Showing {visibleItems.length} of {treatmentsData.length} treatments
          </p>
          {showAll && (
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-full px-5 py-2 text-sm font-medium text-emerald-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              Show less
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Treatments;
