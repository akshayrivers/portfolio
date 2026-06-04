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
          ? "fixed inset-0 w-screen h-screen flex flex-col bg-black text-green-400 z-[10000]"
          : "w-[800px] max-w-[95vw] h-[600px] max-h-[80vh] flex flex-col bg-[#1e1e1e] border border-neutral-700 rounded-md shadow-2xl text-sm font-mono overflow-hidden"
      }
    >
      {/* Title Bar */}
      <div
        className={`drag-handle flex items-center justify-between px-3 py-1 cursor-move select-none ${
          isFullscreen ? "bg-zinc-800" : "bg-[#2d2d2d]"
        } text-neutral-300`}
      >
        <div className="ml-3 font-semibold tracking-wide uppercase text-xs opacity-70">{title}</div>
        <div className="flex items-center gap-3">
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-inner"
              title="Minimize"
            />
          )}
          {onFullscreen && (
            <button
              onClick={onFullscreen}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-inner"
              title={isFullscreen ? "Restore" : "Maximize"}
            />
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-inner"
              title="Close"
            />
          )}
        </div>
      </div>

      {/* Body */}
      <div
        className={`flex-1 overflow-auto ${
          isFullscreen ? "p-6" : "bg-[#0f0f0f] text-green-400"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
