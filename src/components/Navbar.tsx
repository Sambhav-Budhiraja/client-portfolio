"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  

  // Lock the background scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header className="w-full relative z-50">
      <div className="flex justify-between items-center px-6 py-8 md:px-12 md:py-12 bg-white">
        
        {/* The Logo */}
        <Link href="/" className="text-xl tracking-widest uppercase whitespace-nowrap text-black font-medium">
  BHARAT SETHI
</Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-semibold text-gray-500">
          <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative space-y-1.5 focus:outline-none"
        >
          {/* Top Line */}
          <span className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          {/* Middle Line */}
          <span className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          {/* Bottom Line */}
          <span className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Mobile Full-Screen Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full h-[100vh] bg-white border-t border-gray-50 md:hidden flex flex-col items-center pt-16 space-y-10"
          >
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.3em] uppercase font-semibold text-black">
              Portfolio
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.3em] uppercase font-semibold text-black">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.3em] uppercase font-semibold text-black">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}