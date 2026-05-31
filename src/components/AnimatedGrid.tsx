"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AnimatedGrid({ campaigns }: { campaigns: any[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Lock the background from scrolling when the lightbox is open
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [currentIndex]);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % campaigns.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + campaigns.length) % campaigns.length);
  };

  return (
    <>
      {/* 1. The Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden bg-gray-50 mb-4">
              {campaign.coverImage && (
                <Image
                  src={urlFor(campaign.coverImage).width(800).url()}
                  alt={campaign.title}
                  width={800}
                  height={1000} 
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>

            {/* Title */}
            <div className="flex items-center justify-between px-1">
              <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-black group-hover:text-gray-400 transition-colors duration-300">
                {campaign.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. The Full-Screen Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
            onClick={closeLightbox}
          >
            
            {/* Top Navigation Bar */}
            <div className="absolute top-0 w-full flex justify-between items-center p-8 z-50">
              <button onClick={closeLightbox} className="text-gray-500 hover:text-black transition-colors">
                {/* Back Arrow */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-12">
               {/* Clickable areas for Next/Prev */}
               <div className="absolute left-0 top-0 w-1/2 h-full cursor-[w-resize] z-10" onClick={showPrev} />
               <div className="absolute right-0 top-0 w-1/2 h-full cursor-[e-resize] z-10" onClick={showNext} />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={urlFor(campaigns[currentIndex].coverImage).url()}
                  alt={`Viewing image ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Counter */}
            <div className="absolute bottom-8 right-8 text-xs tracking-widest text-gray-500 font-light z-50">
              <span onClick={showPrev} className="cursor-pointer hover:text-black px-2">&lt;</span>
              {currentIndex + 1} / {campaigns.length}
              <span onClick={showNext} className="cursor-pointer hover:text-black px-2">&gt;</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}