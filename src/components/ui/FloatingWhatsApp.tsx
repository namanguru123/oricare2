"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917804818549"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with us
      </span>
      {/* Ping Animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </motion.a>
  );
}
