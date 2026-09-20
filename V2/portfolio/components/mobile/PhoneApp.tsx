"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  onBack: () => void;
  onClose?: () => void;
};

export default function PhoneApp({ title, children, onBack, onClose }: Props) {
  return (
    <div className="flex flex-col h-full bg-black text-neon font-mono">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/90">
        <button onClick={onBack} className="text-green-400 hover:text-green-300 text-lg transition">
          ←
        </button>
        <span className="text-sm font-semibold tracking-wide uppercase opacity-80">
          {title}
        </span>
        {onClose && (
          <button onClick={onClose} className="text-red-400 hover:text-red-500 text-lg transition">
            ✕
          </button>
        )}
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
