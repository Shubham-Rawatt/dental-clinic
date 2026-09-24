import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { FaPlay, FaTimes, FaCheckCircle, FaArrowRight } from "react-icons/fa";

// Apni YouTube video ki ID yahan daalo (embed URL hi chalta hai)
const VIDEO_URL = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

// Images
const MAIN_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000";
const SMALL_IMAGE =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600";

// value = asli number, suffix = number ke baad ka hissa (+, K+ wagairah)
const aboutData = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Happy Patients" },
  { value: 20, suffix: "+", label: "Dental Treatments" },
  { value: 8, suffix: "", label: "Expert Doctors" },
];

// Apne clinic ke hisaab se in points ko badal lena
const highlights = [
  "Expert dentists you can trust",
  "Modern equipment for precise, safe treatment",
  "Care plans built around your needs",
  "A calm, comfortable clinic experience",
];

// Number 0 se gin-ta hua asli value tak jata hai, jab screen par dikhe
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="about"
      className="bg-[#f5f2ea] px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:px-16"
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <motion.div
          className="relative pb-10 pr-4 sm:pr-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Peeche ka halka frame (depth ke liye) */}
          <div className="absolute bottom-6 left-4 top-4 hidden w-[calc(100%-2rem)] rounded-3xl border-2 border-emerald-900/20 sm:block" />

          {/* Main image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-emerald-950/10">
            <img
              src={MAIN_IMAGE}
              alt="Our clinic"
              className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[500px]"
            />

            {/* Video button */}
            <button
              onClick={() => setShowVideo(true)}
              aria-label="Watch clinic tour video"
              className="group absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-[#f5f2ea]/90 py-2.5 pl-2.5 pr-5 shadow-lg backdrop-blur-md transition hover:bg-[#f5f2ea] sm:bottom-6 sm:left-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-emerald-50 transition group-hover:scale-105">
                <FaPlay className="ml-0.5 text-sm" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-semibold text-emerald-950">
                  Our Clinic Tour
                </span>
                <span className="block text-xs text-stone-600">
                  Watch Video
                </span>
              </span>
            </button>
          </div>

          {/* Chhoti image (sirf tablet/desktop par), halka float karti hai */}
          <motion.img
            src={SMALL_IMAGE}
            alt="Dentist at work"
            className="absolute bottom-0 right-0 hidden h-36 w-36 rounded-2xl border-4 border-[#f5f2ea] object-cover shadow-xl sm:block lg:h-44 lg:w-44"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium text-emerald-800">
            About Aurelis
          </p>

          <h2 className="mb-6 font-serif text-3xl leading-[1.15] tracking-tight text-emerald-950 sm:text-4xl xl:text-5xl">
            Dentistry, with a{" "}
            <em className="italic text-emerald-800">different perspective.</em>
          </h2>

          <p className="mb-4 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            At Aurelis, we believe a healthy smile changes everything. Our
            clinic combines advanced technology, expert care and a calm,
            welcoming environment to give you the best dental experience
            possible.
          </p>

          <p className="mb-7 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            From your first check-up to complex treatments, our team takes the
            time to listen, explain and care for you and your family, every step
            of the way.
          </p>

          {/* Highlights */}
          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-stone-800 sm:text-base"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-emerald-800" />
                {point}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-emerald-50 shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800"
            >
              Book a Visit
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#doctors"
              className="rounded-full border border-emerald-900/25 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-900/10"
            >
              Meet our doctors
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats band: poori width, section ko bharta hai */}
      <motion.div
        className="mt-14 grid grid-cols-2 gap-y-8 rounded-3xl bg-emerald-900 px-6 py-10 text-emerald-50 sm:px-10 md:mt-20 lg:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {aboutData.map((stat) => (
          <div
            key={stat.label}
            className="text-center lg:border-l lg:border-emerald-50/15 lg:first:border-0"
          >
            <p className="font-serif text-4xl sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-emerald-100/80 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Video Popup */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 text-xl text-white"
            >
              <FaTimes />
            </button>

            <iframe
              className="h-full w-full"
              src={VIDEO_URL}
              title="Clinic tour video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
