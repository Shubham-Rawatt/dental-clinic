import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const aboutData = [
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "10K+",
    label: "Happy Patients",
  },
  {
    number: "20+",
    label: "Dental Treatments",
  },
  {
    number: "8",
    label: "Expert Doctors",
  },
];

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="px-6 sm:px-8 md:px-10 lg:px-16 py-12 md:py-16 bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Image */}
      <motion.div
        className="relative rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900"
          alt="Our clinic"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Video Button */}
        <motion.button
          onClick={() => setShowVideo(true)}
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 bg-white/90 backdrop-blur px-3 sm:px-4 py-2.5 sm:py-3 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaPlay className="bg-emerald-900 text-white rounded-full p-2 text-xl sm:text-2xl" />

          <span className="text-xs sm:text-sm text-left leading-tight">
            Our Clinic Tour
            <br />
            <span className="text-gray-500">Watch Video</span>
          </span>
        </motion.button>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-wide text-gray-500 mb-3">
          ABOUT AURELIS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif text-emerald-950 mb-5 leading-tight">
          Dentistry, with a different perspective.
        </h2>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-lg">
          At Aurelis, we believe a healthy smile changes everything. Our clinic
          combines advanced technology, expert care and a calm, welcoming
          environment to give you the best dental experience possible.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {aboutData.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl font-serif text-emerald-950">
                {stat.number}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Popup */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-2xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 text-white text-xl z-10"
            >
              <FaTimes />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
