"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none md:hidden text-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto w-full max-w-sm mx-auto"
      >
        <button
          onClick={() => window.open('https://wa.me/916364904890', '_blank')}
          className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-2xl font-bold shadow-[0_8px_30px_rgb(16,185,129,0.3)] active:scale-95 transition-all text-lg"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          Talk to us on WhatsApp
        </button>
      </motion.div>
    </div>
  );
}

export function DesktopStickyContact() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] hidden md:flex flex-col gap-3">
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => window.open('https://wa.me/916364904890', '_blank')}
        className="group flex items-center gap-3 bg-emerald-500 text-white pl-4 pr-6 py-3 rounded-full font-bold shadow-[0_8px_30px_rgb(16,185,129,0.3)] transition-all"
      >
        <div className="bg-white/20 p-1.5 rounded-full">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-80 uppercase tracking-wider">Connect Now</span>
          <span className="text-sm">Talk to us</span>
        </div>
      </motion.button>
    </div>
  );
}
