import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaTimes,
  FaStar,
  FaRegClock,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ---------- Apni details yahan badlo ----------
// YouTube embed URL (normal watch URL nahi chalta)
const VIDEO_URL =
  "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0";

// PLACEHOLDER values: apni asli rating / reviews / slot se replace karo
const CLINIC = {
  rating: "4.9",
  reviews: "1,200+ reviews",
  nextSlot: "Today, 4:00 PM",
};

// Slide kitne ms mein badle
const AUTOPLAY_DELAY = 4500;
// ----------------------------------------------

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600",
    alt: "Dentist examining a patient in a bright clinic",
    tag: "Premium Dental Care",
    titleLine1: "Healthy Smiles",
    titleLine2: "for a Brighter",
    titleLine3: "Tomorrow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1600",
    alt: "Dental specialist preparing for a treatment",
    tag: "Trusted Specialists",
    titleLine1: "Confident Care",
    titleLine2: "for Every",
    titleLine3: "Smile",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600",
    alt: "Friendly dental check-up for a young patient",
    tag: "Family Friendly",
    titleLine1: "Gentle Care",
    titleLine2: "for Every",
    titleLine3: "Age Group",
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const swiperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Card: neeche se bounce karke aata hai, andar ka content ek-ek karke
  const card = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 70, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: reduceMotion ? 0 : 0.5,
        duration: 1,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Video khulne par autoplay roko, band hone par dobara chalao
  useEffect(() => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (showVideo) autoplay.stop();
    else autoplay.start();
  }, [showVideo]);

  // Escape se modal band + background scroll lock
  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e) => e.key === "Escape" && setShowVideo(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [showVideo]);

  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          grabCursor
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          /* pauseOnMouseEnter hata diya: mouse hero par ho to bhi autoplay chalta rahe */
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          loop
          speed={900}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className="relative flex min-h-[560px] items-end bg-emerald-950 px-4 pb-20 sm:px-10 md:px-14 lg:h-[640px] lg:items-center lg:px-16 lg:pb-0">
                {/* Full-width image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Halka tint, image bright rehti hai */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/25 via-emerald-950/5 to-transparent" />

                {/* Compact card: image ka zyada hissa dikhta rahe */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      variants={card}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="relative z-10 w-full max-w-sm rounded-3xl border border-white/50 bg-[#f5f2ea]/80 p-5 shadow-2xl shadow-emerald-950/25 backdrop-blur-md sm:max-w-md sm:p-6 lg:ml-2 lg:p-7"
                    >
                      <motion.p
                        variants={item}
                        className="mb-3 inline-flex items-center rounded-full bg-emerald-900/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-900"
                      >
                        {slide.tag}
                      </motion.p>

                      <motion.h1
                        variants={item}
                        className="mb-3 font-serif text-3xl leading-[1.1] text-emerald-950 sm:text-4xl lg:text-5xl"
                      >
                        {slide.titleLine1}
                        <br />
                        <em className="italic text-emerald-800">
                          {slide.titleLine2}
                        </em>
                        <br />
                        {slide.titleLine3}
                      </motion.h1>

                      {/* Mobile par hide: card chhota rahe */}
                      <motion.p
                        variants={item}
                        className="mb-5 hidden max-w-sm text-sm leading-relaxed text-stone-700 sm:block"
                      >
                        Modern dental solutions for a healthier, more confident
                        you. Expert care, advanced technology and a gentle
                        touch.
                      </motion.p>

                      <motion.div
                        variants={item}
                        className="flex flex-wrap items-center gap-3"
                      >
                        <button
                          type="button"
                          className={`group flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-50 shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800 ${focusRing}`}
                        >
                          Book Appointment
                          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowVideo(true)}
                          className={`group flex items-center gap-2.5 rounded-full py-1 pr-2 text-sm font-medium text-emerald-950 ${focusRing}`}
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/25 bg-[#fbfaf6] text-emerald-900 shadow-sm transition group-hover:bg-emerald-900 group-hover:text-emerald-50">
                            <FaPlay className="ml-0.5 text-xs" />
                          </span>
                          Watch Video
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trust chips: card se bahar, chhote, sirf desktop par */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute right-10 top-8 hidden flex-col items-end gap-2 lg:flex xl:right-16"
                  >
                    <div className="flex items-center gap-2 rounded-full bg-[#f5f2ea]/90 px-4 py-2 text-sm shadow-md backdrop-blur-md">
                      <FaStar className="text-amber-500" />
                      <span className="font-semibold text-emerald-950">
                        {CLINIC.rating}
                      </span>
                      <span className="text-stone-600">{CLINIC.reviews}</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#f5f2ea]/90 px-4 py-2 text-sm shadow-md backdrop-blur-md">
                      <FaRegClock className="text-emerald-800" />
                      <span className="text-stone-600">Next slot</span>
                      <span className="font-semibold text-emerald-950">
                        {CLINIC.nextSlot}
                      </span>
                    </div>
                  </motion.div>
                )}
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls: Swiper ke bahar, ek hi baar render */}
        <div className="absolute bottom-5 left-4 z-20 flex items-center gap-4 rounded-full bg-[#f5f2ea]/85 px-4 py-2 text-xs text-emerald-950 backdrop-blur-md sm:left-10 sm:text-sm md:left-14 lg:left-16">
          <span className="tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${focusRing} ${
                  i === activeIndex
                    ? "w-8 bg-emerald-900"
                    : "w-3 bg-emerald-900/25 hover:bg-emerald-900/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 right-4 z-20 flex gap-2 sm:right-10 md:right-14 lg:right-16">
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f2ea]/90 text-emerald-900 shadow-md backdrop-blur-md transition hover:bg-emerald-900 hover:text-emerald-50 ${focusRing}`}
          >
            <FaArrowLeft className="text-sm" />
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f2ea]/90 text-emerald-900 shadow-md backdrop-blur-md transition hover:bg-emerald-900 hover:text-emerald-50 ${focusRing}`}
          >
            <FaArrowRight className="text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Clinic video"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-black"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaTimes />
              </button>

              <iframe
                className="h-full w-full"
                src={VIDEO_URL}
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
