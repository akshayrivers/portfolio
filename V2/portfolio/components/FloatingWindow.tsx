"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  zIndex?: number;
  onClick?: () => void;
  isFullscreen?: boolean;
  isMinimized?: boolean;
};

export default function FloatingWindow({
  children,
  defaultPosition = { x: 0, y: 0 },
  zIndex = 1,
  onClick,
  isFullscreen = false,
  isMinimized = false,
}: Props) {
  return (
    <motion.div
      drag={!isFullscreen && !isMinimized}
      dragMomentum={false}
      onClick={onClick}
      className={clsx(
        isFullscreen ? "fixed inset-0 z-[10000] pointer-events-auto" : "absolute shadow-xl pointer-events-auto",
        isMinimized && "hidden"
      )}
      style={isFullscreen ? {} : { top: defaultPosition.y, left: defaultPosition.x, zIndex }}
    >
      {children}
    </motion.div>
  );
}
