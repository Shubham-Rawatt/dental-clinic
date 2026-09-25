import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import galleryData from "../../data/gallerydata";
import "swiper/css";

function Gallery() {
  const [selectedPair, setSelectedPair] = useState(null);

  return (
    <section id="transformations" className="px-4 sm:px-8 lg:px-16 py-16 bg-white">
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
            SMILE TRANSFORMATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950">
            Real People. Real Results.
          </h2>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-900 transition-colors">
          View gallery <FaArrowRight />
        </button>
      </motion.div>

      {/* Infinite auto-scrolling slider, pauses when the mouse is over it */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.2}
        spaceBetween={24}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="border border-gray-200 rounded-xl overflow-hidden bg-white cursor-pointer shadow-sm"
              whileHover={{ y: -6, boxShadow: "0px 12px 28px rgba(0,0,0,0.10)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPair(item)}
            >
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="relative">
                  <img
                    src={item.before}
                    alt={`${item.patient} before treatment`}
                    loading="lazy"
                    className="w-full h-44 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] uppercase tracking-wide px-2 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.after}
                    alt={`${item.patient} after treatment`}
                    loading="lazy"
                    className="w-full h-44 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 bg-emerald-900/80 text-white text-[10px] uppercase tracking-wide px-2 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 py-3 font-medium">
                {item.patient}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPair && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPair(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPair(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl bg-white/80 rounded-full p-2"
              >
                <FaTimes />
              </button>

              <h3 className="text-center text-lg font-serif text-emerald-950 mb-4">
                {selectedPair.patient}
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <img
                    src={selectedPair.before}
                    alt={`${selectedPair.patient} before treatment`}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Before
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={selectedPair.after}
                    alt={`${selectedPair.patient} after treatment`}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3">
                    After
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;