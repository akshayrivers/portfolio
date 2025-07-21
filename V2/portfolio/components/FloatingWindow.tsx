"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  zIndex?: number;
  onClick?: () => void;
};

export default function FloatingWindow({
  children,
  defaultPosition = { x: 200, y: 200 },
  zIndex = 1,
  onClick,
}: Props) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onClick={onClick}
      dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 1000 }}
      className="absolute shadow-xl"
      style={{ top: defaultPosition.y, left: defaultPosition.x, zIndex }}
    >
      {children}
    </motion.div>
  );
}
