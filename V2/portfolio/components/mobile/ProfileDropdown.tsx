"use client";

import { motion, AnimatePresence } from "framer-motion";
import { themes } from "@/data/themes";
import { profiles, ProfileKey } from "@/data/profiles";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { ThemeKey } from "@/data/themes";

type Props = {
  currentProfile: ProfileKey;
  onSwitch: (profile: ThemeKey) => void;
  onClose: () => void;
};

export default function ProfileDropdown({ currentProfile, onSwitch, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSwitch = (key: ThemeKey) => {
    setLoading(true);
    setTimeout(() => {
      onSwitch(key);
      setLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-72 max-h-[80vh] overflow-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-green-400 text-sm font-bold">Switch Profile</h3>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition">
              <X size={18} />
            </button>
          </div>
          <div className="space-y-2">
            {(Object.keys(themes) as ProfileKey[]).map((key) => {
              const p = profiles[key];
              const isCurrent = key === currentProfile;
              return (
                <button
                  key={key}
                  onClick={() => handleSwitch(key)}
                  disabled={isCurrent || loading}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition ${
                    isCurrent
                      ? "bg-green-500/10 border-green-500/30 cursor-default"
                      : "bg-zinc-800/50 border-zinc-700 hover:border-green-500/30 cursor-pointer"
                  } ${loading ? "opacity-50" : ""}`}
                >
                  <span className="text-xl">{p.emoji}</span>
                  <div className="text-left">
                    <p className="text-sm text-zinc-300">{p.name}</p>
                    <p className="text-[10px] text-zinc-500 uppercase">{key}</p>
                  </div>
                  {isCurrent && <span className="text-[10px] text-green-400 ml-auto">Current</span>}
                  {loading && !isCurrent && <Loader2 size={14} className="animate-spin text-green-400" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
