import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlay, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  // Tracks the current slide so we know which number to show (01 / 03)
  const [activeIndex, setActiveIndex] = useState(0);

  // Controls whether the video popup is open
  const [showVideo, setShowVideo] = useState(false);

  const handleBookAppointment = () => {
    alert("Booking form opened! (connect this to your booking page)");
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative h-[520px] flex items-center px-16 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Fade overlay so text stays readable over the photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>

              {/* AnimatePresence + a key tied to activeIndex makes the text
                  animate in fresh every time the slide changes, not just once */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    className="relative z-10 max-w-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600 mb-2">
                      {slide.tag}
                    </p>
                    <h1 className="text-5xl leading-tight font-serif text-emerald-950 mb-4">
                      {slide.titleLine1}
                      <br />
                      <em className="italic">{slide.titleLine2}</em>
                      <br />
                      {slide.titleLine3}
                    </h1>
                    <p className="text-sm text-gray-700 mb-6 max-w-md">
                      Modern dental solutions for a healthier, more confident
                      you. Expert care, advanced technology and a gentle touch
                      — all in one place.
                    </p>

                    <div className="flex items-center gap-5">
                      <button
                        onClick={handleBookAppointment}
                        className="flex items-center gap-2 bg-emerald-900 text-white px-5 py-3 rounded-full text-sm hover:bg-emerald-800 transition-colors"
                      >
                        Book Appointment <FaArrowRight />
                      </button>
                      <button
                        onClick={() => setShowVideo(true)}
                        className="flex items-center gap-2 bg-transparent text-sm"
                      >
                        <FaPlay className="bg-white rounded-full p-2 text-2xl shadow" />
                        Watch Video
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slide counter, e.g. 01 / 03 */}
              <div className="absolute bottom-8 left-16 z-20 flex items-center gap-3 text-sm text-gray-700">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="w-16 h-[2px] bg-gray-300 relative overflow-hidden">
                  <span className="absolute left-0 top-0 h-full bg-emerald-900 w-1/3"></span>
                </span>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>

              {/* Custom Swiper arrows, with a small hover animation */}
              <div className="absolute bottom-8 right-16 z-20 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="prev-btn w-10 h-10 rounded-full border border-gray-400 bg-white hover:bg-gray-100"
                >
                  &#8592;
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="next-btn w-10 h-10 rounded-full border border-gray-400 bg-white hover:bg-gray-100"
                >
                  &#8594;
                </motion.button>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video popup, only rendered when showVideo is true */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 text-white text-xl z-10"
              >
                <FaTimes />
              </button>
              {/* Replace the src below with your real clinic video */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Clinic video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;