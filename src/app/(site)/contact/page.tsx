"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black px-10 py-32 flex flex-col items-center overflow-hidden">
      <div className="text-center space-y-16">
        
        {/* Animated Header */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl uppercase tracking-[0.2em]"
        >
          Contact
        </motion.h1>
        
        {/* Animated Email Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400">Direct Inquiries</p>
          <motion.a 
            href="mailto:studio@bharatsethi.com" 
            whileHover={{ scale: 1.05, color: "#6b7280" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block text-xl tracking-[0.1em] border-b border-transparent hover:border-gray-400 pb-1"
          >
            studio@bharatsethi.com
          </motion.a>
        </motion.div>

        {/* Animated Social Section with Brand Colors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="space-y-4 pt-8"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400">Social</p>
          <div className="flex justify-center gap-10">
            
            {/* Instagram - Pops to brand pink/magenta */}
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              initial={{ color: "#000000" }}
              whileHover={{ y: -3, color: "#E1306C" }}
              transition={{ duration: 0.2 }}
              className="text-sm tracking-widest uppercase block"
            >
              Instagram
            </motion.a>

            {/* Behance - Pops to brand blue */}
            <motion.a 
              href="https://behance.net" 
              target="_blank" 
              initial={{ color: "#000000" }}
              whileHover={{ y: -3, color: "#1769ff" }}
              transition={{ duration: 0.2 }}
              className="text-sm tracking-widest uppercase block"
            >
              Behance
            </motion.a>

          </div>
        </motion.div>

      </div>
    </main>
  );
}