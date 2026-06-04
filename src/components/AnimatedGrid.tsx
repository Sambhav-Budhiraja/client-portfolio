"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AnimatedGrid({ photos }: { photos: any[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    if (currentIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [currentIndex]);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* The Predictable, Stable Flexbox Grid */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-[1600px] mx-auto group">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
          {photos.map((photo, index) => {
            if (index % 3 !== 0 || !photo?.asset) return null; 
            const blurHash = photo.asset.metadata?.lqip;
            return (
              <div 
                key={photo._key || index} 
                onClick={() => openLightbox(index)}
                className="cursor-pointer transition-all duration-700 ease-out group-hover:opacity-30 hover:!opacity-100 relative"
              >
                <Image src={urlFor(photo).width(800).url()} alt={photo.alt || "Bharat Sethi Photography"} width={800} height={1000} placeholder={blurHash ? "blur" : "empty"} blurDataURL={blurHash || undefined} className="w-full h-auto object-cover" />
              </div>
            );
          })}
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
          {photos.map((photo, index) => {
            if (index % 3 !== 1 || !photo?.asset) return null; 
            const blurHash = photo.asset.metadata?.lqip;
            return (
              <div 
                key={photo._key || index} 
                onClick={() => openLightbox(index)}
                className="cursor-pointer transition-all duration-700 ease-out group-hover:opacity-30 hover:!opacity-100 relative"
              >
                <Image src={urlFor(photo).width(800).url()} alt={photo.alt || "Bharat Sethi Photography"} width={800} height={1000} placeholder={blurHash ? "blur" : "empty"} blurDataURL={blurHash || undefined} className="w-full h-auto object-cover" />
              </div>
            );
          })}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/3">
          {photos.map((photo, index) => {
            if (index % 3 !== 2 || !photo?.asset) return null; 
            const blurHash = photo.asset.metadata?.lqip;
            return (
              <div 
                key={photo._key || index} 
                onClick={() => openLightbox(index)}
                className="cursor-pointer transition-all duration-700 ease-out group-hover:opacity-30 hover:!opacity-100 relative"
              >
                <Image src={urlFor(photo).width(800).url()} alt={photo.alt || "Bharat Sethi Photography"} width={800} height={1000} placeholder={blurHash ? "blur" : "empty"} blurDataURL={blurHash || undefined} className="w-full h-auto object-cover" />
              </div>
            );
          })}
        </div>

      </div>

      {/* The Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && photos[currentIndex]?.asset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute top-0 w-full flex justify-end p-8 z-50">
              <button onClick={closeLightbox} className="text-gray-400 hover:text-black transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-12">
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
                  src={urlFor(photos[currentIndex]).url()}
                  alt={`Viewing image ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                  placeholder={photos[currentIndex].asset?.metadata?.lqip ? "blur" : "empty"}
                  blurDataURL={photos[currentIndex].asset?.metadata?.lqip || undefined}
                />
              </motion.div>
            </div>

            <div className="absolute bottom-10 flex items-center gap-6 text-xs tracking-[0.2em] text-gray-400 font-light z-50">
              <span onClick={showPrev} className="cursor-pointer hover:text-black transition-colors p-2">&lt;</span>
              <span className="text-black">{currentIndex + 1} / {photos.length}</span>
              <span onClick={showNext} className="cursor-pointer hover:text-black transition-colors p-2">&gt;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}