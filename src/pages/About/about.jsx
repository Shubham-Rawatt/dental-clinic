import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import aboutStats from "../data/aboutData";

function About() {
  // Controls whether the video popup is open
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="px-16 py-16 bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side: clinic image with play button */}
      <motion.div
        className="relative rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} >
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900"
          alt="Our clinic"
          className="w-full h-[380px] object-cover"
        />

        {/* Play button + label, bottom-left of the image */}
        <button
          onClick={() => setShowVideo(true)}
          className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur px-4 py-3 rounded-full"
        >
          <FaPlay className="bg-emerald-900 text-white rounded-full p-2 text-2xl" />
          <span className="text-sm text-left leading-tight">
            Our Clinic Tour
            <br />
            <span className="text-gray-500">Watch Video</span>
          </span>
        </button>
      </motion.div>

      {/* Right side: text content and stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-wide text-gray-500 mb-3">
          ABOUT AURELIS
        </p>
        <h2 className="text-4xl font-serif text-emerald-950 mb-5 leading-snug">
          Dentistry, with a different perspective.
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-md">
          At Aurelis, we believe a healthy smile changes everything. Our clinic
          combines advanced technology, expert care and a calm, welcoming
          environment to give you the best dental experience possible.
        </p>

        {/* Stats row */}
        <div className="flex gap-12">
          {aboutStats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-serif text-emerald-950">
                {stat.number}
              </p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video popup */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
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
            {/* Replace the src below with your real clinic tour video */}
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
