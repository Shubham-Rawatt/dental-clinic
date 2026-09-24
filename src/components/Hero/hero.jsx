import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlay, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200",
    tag: "Premium Dental Care",
    titleLine1: "Healthy Smiles",
    titleLine2: "for a Brighter",
    titleLine3: "Tomorrow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200",
    tag: "Trusted Specialists",
    titleLine1: "Confident Care",
    titleLine2: "for Every",
    titleLine3: "Smile",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    tag: "Family Friendly",
    titleLine1: "Gentle Care",
    titleLine2: "for Every",
    titleLine3: "Age Group",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative min-h-[600px] md:min-h-[620px] lg:h-[600px] flex items-center px-6 sm:px-10 md:px-14 lg:px-16 py-20 md:py-16 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Soft dim layer: image ki brightness/glare kam karta hai */}
              <div className="absolute inset-0 bg-stone-900/15" />

              {/* Warm cream-emerald gradient (pure white nahi) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e9efe6]/30 via-[#e9efe6]/10 to-transparent" />
              {/* Content */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    className="relative z-10 w-full max-w-xl"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xs sm:text-sm tracking-wide text-emerald-800 font-medium mb-3">
                      {slide.tag}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-serif text-emerald-950 mb-5">
                      {slide.titleLine1}
                      <br />
                      <em className="italic">{slide.titleLine2}</em>
                      <br />
                      {slide.titleLine3}
                    </h1>

                    <p className="text-sm md:text-base text-stone-800 mb-7 max-w-md leading-relaxed">
                      Modern dental solutions for a healthier, more confident
                      you. Expert care, advanced technology and a gentle touch —
                      all in one place.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <button className="flex items-center gap-2 bg-emerald-900 text-emerald-50 px-5 py-3 rounded-full text-sm shadow-md shadow-emerald-900/20 hover:bg-emerald-800 transition">
                        Book Appointment
                        <FaArrowRight />
                      </button>

                      <button
                        onClick={() => setShowVideo(true)}
                        className="flex items-center gap-2 text-sm text-emerald-950"
                      >
                        <FaPlay className="bg-emerald-50 text-emerald-900 rounded-full p-2 text-3xl shadow-md shadow-emerald-900/10" />
                        Watch Video
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Counter */}
              <div className="absolute bottom-6 left-6 sm:left-10 md:left-14 lg:left-16 z-20 flex items-center gap-3 text-xs sm:text-sm text-emerald-950">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>

                <span className="w-10 sm:w-16 h-[2px] bg-emerald-900/25 relative overflow-hidden">
                  <span
                    className="absolute inset-y-0 left-0 bg-emerald-900 transition-all duration-500"
                    style={{
                      width: `${((activeIndex + 1) / slides.length) * 100}%`,
                    }}
                  />
                </span>

                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>

              {/* Arrows */}
              <div className="absolute bottom-5 right-6 sm:right-10 md:right-14 lg:right-16 z-20 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous slide"
                  className="prev-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald-900/30 bg-emerald-50/80 text-emerald-900 backdrop-blur-sm"
                >
                  ←
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next slide"
                  className="next-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald-900/30 bg-emerald-50/80 text-emerald-900 backdrop-blur-sm"
                >
                  →
                </motion.button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 text-white text-xl z-10"
              >
                <FaTimes />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com"
                title="Clinic video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;
