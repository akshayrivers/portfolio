"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  mode: "window" | "fullscreen";
  onClose?: () => void;
  onMinimize?: () => void;
  onFullscreen?: () => void;
};

export default function HudFrame({
  children,
  title,
  mode,
  onClose,
  onMinimize,
  onFullscreen,
}: Props) {
  const router = useRouter();

  const isFullscreen = mode === "fullscreen";

  const handleExitFullscreen = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className={
        isFullscreen
          ? "w-screen h-screen flex flex-col bg-black text-green-400"
          : "w-[600px] max-w-[90vw] h-[600px] flex flex-col bg-[#1e1e1e] border border-neutral-700 rounded-md shadow-lg text-sm font-mono"
      }
    >
      {/* Title Bar */}
      <div
        className={`flex items-center justify-between px-3 py-1 ${
          isFullscreen ? "bg-zinc-800" : "bg-[#2d2d2d]"
        } text-neutral-300`}
      >
        <div className="ml-3 font-semibold tracking-wide">{title}</div>
        <div className="space-x-2">
          {isFullscreen ? (
            <button
              onClick={handleExitFullscreen}
              className="text-red-400 hover:text-red-600 font-bold text-lg"
            >
              ✕
            </button>
          ) : (
            <>
              {onMinimize && (
                <button
                  onClick={onMinimize}
                  className="text-yellow-400 hover:text-yellow-600 transition text-sm font-bold"
                >
                  -
                </button>
              )}
              {onFullscreen && (
                <button
                  onClick={onFullscreen}
                  className="text-blue-400 hover:text-blue-600 transition text-sm font-bold"
                >
                  ☐
                </button>
              )}
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-red-400 hover:text-red-600 transition text-sm font-bold"
                >
                  x
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Body */}
      <div
        className={`${
          isFullscreen
            ? "flex-1 p-6 overflow-auto"
            : "bg-[#0f0f0f] text-green-400 p-4 flex-1 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
