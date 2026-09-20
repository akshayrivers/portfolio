"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  zIndex?: number;
  onClick?: () => void;
  onDragEnd?: (pos: { x: number; y: number }) => void;
  isFullscreen?: boolean;
  isMinimized?: boolean;
};

export default function FloatingWindow({
  children,
  defaultPosition = { x: 100, y: 100 },
  zIndex = 1,
  onClick,
  onDragEnd,
  isFullscreen = false,
  isMinimized = false,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(defaultPosition.x || 100);
  const y = useMotionValue(defaultPosition.y || 100);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    x.set(defaultPosition.x || 100);
    y.set(defaultPosition.y || 100);
  }, [defaultPosition, x, y]);

  return (
    <motion.div
      drag={!isFullscreen && !isMinimized}
      dragMomentum={false}
      dragElastic={0}
      onClick={onClick}
      className={clsx(
        isFullscreen
          ? "fixed inset-0 z-[10000] pointer-events-auto"
          : "absolute shadow-xl pointer-events-auto",
        isMinimized && "hidden"
      )}
      style={{ x, y, zIndex }}
      initial={false}
      onDragEnd={(_event, info) => {
        if (!onDragEnd) return;
        onDragEnd({
          x: Math.max(0, Math.min(x.get(), window.innerWidth - 50)),
          y: Math.max(0, Math.min(y.get(), window.innerHeight - 50)),
        });
      }}
    >
      {children}
    </motion.div>
  );
}
