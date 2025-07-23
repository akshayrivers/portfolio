"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

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
  const x = useMotionValue(defaultPosition.x);
  const y = useMotionValue(defaultPosition.y);

  useEffect(() => {
    x.set(defaultPosition.x);
    y.set(defaultPosition.y);
  }, [defaultPosition.x, defaultPosition.y, x, y]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.2}
      className="absolute w-20 h-24 flex flex-col items-center justify-center cursor-pointer hover:opacity-80"
      style={{ x, y }}
      onDoubleClick={onDoubleClick}
      onDragEnd={() => {
        onDragEnd({ x: x.get(), y: y.get() });
      }}
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
      <img src={icon} alt={title} className="w-12 h-12" />
      <span className="text-sm mt-1 text-center">{title}</span>
    </motion.div>
  );
}
