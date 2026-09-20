"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  defaultPosition?: { x: number; y: number };
  onDoubleClick?: () => void;
  onDragEnd: (newPos: { x: number; y: number }) => void;
};

export default function FloatingIcon({
  icon,
  title,
  defaultPosition = { x: 0, y: 0 },
  onDoubleClick,
  onDragEnd,
}: Props) {
  const x = useMotionValue(defaultPosition.x || 0);
  const y = useMotionValue(defaultPosition.y || 0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    if (isMobile) {
      x.set(0);
      y.set(0);
    } else {
      x.set(defaultPosition.x || 0);
      y.set(defaultPosition.y || 0);
    }
  }, [isMobile, defaultPosition.x, defaultPosition.y, x, y]);

  const handleDragEnd = useCallback(() => {
    if (!isMobile) onDragEnd({ x: x.get(), y: y.get() });
  }, [isMobile, x, y, onDragEnd]);

  return (
    <motion.div
      drag={!isMobile}
      dragMomentum={false}
      dragElastic={0.2}
      className={`
        ${isMobile ? "relative" : "absolute"}
        w-20 h-24 flex flex-col items-center justify-center cursor-pointer hover:opacity-80
        ${isMobile ? "w-16 h-20 mx-1 mb-2 flex-shrink-0" : ""}
      `}
      style={isMobile ? {} : { x, y }}
      onDoubleClick={onDoubleClick}
      onDragEnd={handleDragEnd}
      whileDrag={{
        scale: 1.08,
        zIndex: 2000,
        boxShadow: "0 8px 32px #000a",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
      }}
    >
      <img
        src={icon}
        alt={title}
        className={isMobile ? "w-8 h-8" : "w-12 h-12"}
      />
      <span
        className={`${
          isMobile ? "text-[9px] mt-0" : "text-sm mt-1"
        } text-center truncate w-full px-1`}
      >
        {title}
      </span>
    </motion.div>
  );
}
