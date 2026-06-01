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
      {/* 1. The Static Masonry Grid (Client Approved) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto">
        {campaigns.map((campaign, index) => {
          // Safely grab the blur string if it exists
          const blurHash = campaign.coverImage?.asset?.metadata?.lqip;

          return (
            <div key={campaign._id} className="break-inside-avoid">
              
              {/* Changed from <Link> to an onClick trigger */}
              <div onClick={() => openLightbox(index)} className="group block cursor-pointer">
                
                {/* Static Image Wrapper (Hover zoom kept for interactivity) */}
                <div className="relative overflow-hidden bg-gray-50 mb-4">
                  {campaign.coverImage && (
                    <Image
                      src={urlFor(campaign.coverImage).width(800).url()}
                      alt={campaign.title}
                      width={800}
                      height={1000}
                      placeholder={blurHash ? "blur" : "empty"}
                      blurDataURL={blurHash || undefined}
                      className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between px-1">
                  <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-black group-hover:text-gray-400 transition-colors duration-300">
                    {campaign.title}
                  </h2>
                </div>

              </div>
            </div>
          );
        })}
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
            
            {/* Top Navigation Bar with Exit Cross */}
            <div className="absolute top-0 w-full flex justify-end p-8 z-50">
              <button onClick={closeLightbox} className="text-gray-400 hover:text-black transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-12">
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
                  // We also add the blur effect to the lightbox image!
                  placeholder={campaigns[currentIndex].coverImage?.asset?.metadata?.lqip ? "blur" : "empty"}
                  blurDataURL={campaigns[currentIndex].coverImage?.asset?.metadata?.lqip || undefined}
                />
              </motion.div>
            </div>

            {/* Bottom Counter */}
            <div className="absolute bottom-10 flex items-center gap-6 text-xs tracking-[0.2em] text-gray-400 font-light z-50">
              <span onClick={showPrev} className="cursor-pointer hover:text-black transition-colors p-2">&lt;</span>
              <span className="text-black">{currentIndex + 1} / {campaigns.length}</span>
              <span onClick={showNext} className="cursor-pointer hover:text-black transition-colors p-2">&gt;</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}