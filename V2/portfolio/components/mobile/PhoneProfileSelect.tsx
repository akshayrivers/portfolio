"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes } from "@/data/themes";
import { profiles, ProfileKey } from "@/data/profiles";
import { ChevronRight, Sparkles } from "lucide-react";
import type { ThemeKey } from "@/data/themes";

type Props = {
  onSelect: (profile: ThemeKey) => void;
};

export default function PhoneProfileSelect({ onSelect }: Props) {
  const [autoSelected, setAutoSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoSelected(true);
      onSelect("spiderman");
    }, 3000);
    return () => clearTimeout(timer);
  }, [onSelect]);

  return (
    <div className="flex flex-col h-screen bg-black text-neon font-mono">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-zinc-900/80 border-b border-zinc-800">
        <span className="text-xs text-zinc-400">Select Your Profile</span>
        <div className="flex items-center gap-1">
          <Sparkles size={12} color="#39FF14" />
          <span className="text-xs text-zinc-400">100%</span>
        </div>
      </div>

      {/* Auto-select indicator */}
      <AnimatePresence>
        {!autoSelected && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center py-2"
          >
            <p className="text-xs text-zinc-500">
              Choosing in <span className="text-green-400">{3}</span> seconds...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Cards */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {(Object.keys(themes) as ProfileKey[]).map((key) => {
            const p = profiles[key];
            return (
              <motion.button
                key={key}
                onClick={() => {
                  setAutoSelected(true);
                  onSelect(key);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-zinc-900/80 rounded-xl border border-zinc-800 p-4 text-left hover:border-green-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <h3 className="text-green-400 text-sm font-bold">{p.name}</h3>
                    <span className="text-[10px] text-zinc-500 uppercase">{key}</span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-400 mb-3 line-clamp-2">{p.tagline}</p>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-zinc-500 overflow-hidden"
                  >
                    {p.description}
                  </motion.div>
                </AnimatePresence>
                <ChevronRight
                  size={16}
                  className="absolute top-4 right-4 text-zinc-600 group-hover:text-green-400 transition"
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      {autoSelected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-3 bg-zinc-900/90 border-t border-zinc-800"
        >
          <Sparkles size={14} color="#39FF14" />
          <span className="text-xs text-green-400">Profile loaded</span>
        </motion.div>
      )}
    </div>
  );
}
