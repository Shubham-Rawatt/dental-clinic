import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import galleryData from "../../data/gallerydata";
import "swiper/css";

function Gallery () {
  const [selectedPair, setSelectedPair] = useState(null);

  return (
    <section id="transformations" className="px-16 py-16 bg-white">
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
          <h2 className="text-4xl font-serif text-emerald-950">
            Real People. Real Results.
          </h2>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-900 transition-colors">
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
              className="border border-gray-200 rounded-lg p-4 bg-white cursor-pointer"
              whileHover={{ y: -6, boxShadow: "0px 10px 25px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPair(item)}
            >
              <div className="flex gap-3">
                <div className="flex-1">
                  <img
                    src={item.before}
                    alt="Before treatment"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Before
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={item.after}
                    alt="After treatment"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">
                    After
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox: shows the clicked before/after pair bigger, on top of everything */}
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
              className="relative bg-white rounded-lg p-6 max-w-3xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPair(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                <FaTimes />
              </button>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <img
                    src={selectedPair.before}
                    alt="Before treatment"
                    className="w-full h-72 object-cover rounded-md"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Before
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={selectedPair.after}
                    alt="After treatment"
                    className="w-full h-72 object-cover rounded-md"
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

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowRight, FaTimes } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import galleryData from "../../data/gallerydata";


// import "swiper/css";

// function Gallery() {
//   // Holds the pair the user clicked on, so we can show it big in a lightbox.
//   // null means the lightbox is closed.
//   const [selectedPair, setSelectedPair] = useState(null);

//   return (
//     <section id="transformations" className="px-16 py-16 bg-white">
//       {/* Section header */}
//       <motion.div
//         className="flex items-end justify-between mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <div>
//           <p className="text-xs tracking-wide text-gray-500 mb-2">
//             SMILE TRANSFORMATIONS
//           </p>
//           <h2 className="text-4xl font-serif text-emerald-950">
//             Real People. Real Results.
//           </h2>
//         </div>
//         <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-900 transition-colors">
//           View gallery <FaArrowRight />
//         </button>
//       </motion.div>

//       {/* Infinite auto-scrolling slider, pauses when the mouse is over it */}
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={1.2}
//         spaceBetween={24}
//         loop={true}
//         speed={4000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         breakpoints={{
//           768: { slidesPerView: 2.2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {galleryData.map((item) => (
//           <SwiperSlide key={item.id}>
//             <motion.div
//               className="border border-gray-200 rounded-lg p-4 bg-white cursor-pointer"
//               whileHover={{ y: -6, boxShadow: "0px 10px 25px rgba(0,0,0,0.08)" }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setSelectedPair(item)}
//             >
//               <div className="flex gap-3">
//                 <div className="flex-1">
//                   <img
//                     src={item.before}
//                     alt={`${item.patient} before treatment`}
//                     className="w-full h-40 object-cover rounded-md"
//                   />
//                   <p className="text-center text-xs text-gray-500 mt-2">
//                     Before
//                   </p>
//                 </div>
//                 <div className="flex-1">
//                   <img
//                     src={item.after}
//                     alt={`${item.patient} after treatment`}
//                     className="w-full h-40 object-cover rounded-md"
//                   />
//                   <p className="text-center text-xs text-gray-500 mt-2">
//                     After
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Lightbox: shows the clicked before/after pair bigger, on top of everything */}
//       <AnimatePresence>
//         {selectedPair && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPair(null)}
//           >
//             <motion.div
//               className="relative bg-white rounded-lg p-6 max-w-3xl w-full"
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedPair(null)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
//               >
//                 <FaTimes />
//               </button>

//               <div className="flex flex-col sm:flex-row gap-6">
//                 <div className="flex-1">
//                   <img
//                     src={selectedPair.before}
//                     alt={`${selectedPair.patient} before treatment`}
//                     className="w-full h-72 object-cover rounded-md"
//                   />
//                   <p className="text-center text-sm text-gray-500 mt-3">
//                     Before
//                   </p>
//                 </div>
//                 <div className="flex-1">
//                   <img
//                     src={selectedPair.after}
//                     alt={`${selectedPair.patient} after treatment`}
//                     className="w-full h-72 object-cover rounded-md"
//                   />
//                   <p className="text-center text-sm text-gray-500 mt-3">
//                     After
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default Gallery;