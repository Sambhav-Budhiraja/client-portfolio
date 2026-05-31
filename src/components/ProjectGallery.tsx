"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectGallery({ title, images }: { title: string, images: any[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % images.length);
  };
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* 1. The Initial Grid View (Masonry) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {images?.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={urlFor(image).width(800).url()}
              alt={`${title} - Image ${index + 1}`}
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>
        ))}
      </div>

      {/* 2. The Full-Screen Lightbox View (from your reference image) */}
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
                 {/* Simple Back Arrow SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-12">
               {/* Left Click Area */}
               <div className="absolute left-0 top-0 w-1/2 h-full cursor-[w-resize] z-10" onClick={showPrev} />
               
               {/* Right Click Area */}
               <div className="absolute right-0 top-0 w-1/2 h-full cursor-[e-resize] z-10" onClick={showNext} />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={urlFor(images[currentIndex]).url()}
                  alt={`Viewing image ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Counter (e.g., "1 / 107") */}
            <div className="absolute bottom-8 right-8 text-xs tracking-widest text-gray-500 font-light">
              <span onClick={showPrev} className="cursor-pointer hover:text-black px-2">&lt;</span>
              {currentIndex + 1} / {images.length}
              <span onClick={showNext} className="cursor-pointer hover:text-black px-2">&gt;</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}