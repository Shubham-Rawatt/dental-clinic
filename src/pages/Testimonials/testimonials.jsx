import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimonialsData from "../../data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <section id="testimonials" className="px-16 py-16 bg-stone-50">
      {/* Section header */}
      <motion.div
        className="text-center max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-wide text-gray-500 mb-2">
          PATIENT TESTIMONIALS
        </p>
        <h2 className="text-4xl font-serif text-emerald-950 mb-3">
          What Our Patients Say
        </h2>
        <p className="text-sm text-gray-600">
          Real experiences from people who trusted us with their smiles.
        </p>
      </motion.div>

      {/* Testimonial carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, el: paginationEl }}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationEl;
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full flex flex-col"
              whileHover={{
                y: -6,
                boxShadow: "0px 12px 28px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteRight className="absolute top-6 right-6 text-emerald-100 text-4xl" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating ? "text-amber-400" : "text-gray-200"
                    }
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-emerald-950">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.treatment}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots — Swiper ke bahar, isliye card ke neeche hi rahenge */}
      <div ref={setPaginationEl} className="flex justify-center gap-1.5 mt-5" />
    </section>
  );
}

export default Testimonials;
