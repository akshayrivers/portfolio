"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  defaultPosition?: { x: number; y: number };
  onDoubleClick?: () => void;
  onDragEnd: (newPos: { x: number; y: number }) => void;
};

export default function FloatingIcon({
  children,
  defaultPosition = { x: 0, y: 0 },
  onDoubleClick,
  onDragEnd,
}: Props) {
  // Use Framer motion values to avoid style jump on re-render
  const x = useMotionValue(defaultPosition.x);
  const y = useMotionValue(defaultPosition.y);

  // If the icon's position changes from outside (e.g. reset), sync it here
  useEffect(() => {
    x.set(defaultPosition.x);
    y.set(defaultPosition.y);
  }, [defaultPosition.x, defaultPosition.y, x, y]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.2}
      className="absolute shadow-xl"
      style={{
        x,
        y,
      }}
      // Pass up new position at drop
      onDoubleClick={onDoubleClick}
      onDragEnd={(_, info) => {
        // Use offset from parent, not page
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
      {children}
    </motion.div>
  );
}
