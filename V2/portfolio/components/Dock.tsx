"use client";

import { useState, useRef } from "react";

type WindowInstance = {
  id: string;
  type: string;
  cat: string;
  minimized?: boolean;
};

type DockProps = {
  openNewWindow: (type: string, cat: string) => void;
  openWindows: WindowInstance[];
  restoreWindow: (id: string) => void;
  closeAllInCategory: (cat: string) => void;
};

const ICONS: Record<string, string> = {
  terminal: "/assets/icons/term.png",
  explorer: "/assets/icons/folder2.png",
  about: "/assets/icons/soda.png",
  projects: "/assets/icons/folder2.png",
  writings: "/assets/icons/writer.png",
  memories: "/assets/icons/memories.png",
  resume: "/assets/icons/resume1.png",
  bin: "/assets/icons/cat.png",
};

const STATIC_CATEGORIES = ["terminal", "explorer"];

export default function Dock({
  openNewWindow,
  openWindows,
  restoreWindow,
  closeAllInCategory,
}: DockProps) {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dynamicCats = Array.from(new Set(openWindows.map((w) => w.cat))).filter(
    (cat) => !STATIC_CATEGORIES.includes(cat) && ICONS[cat]
  );
  const allCategories = [...STATIC_CATEGORIES, ...dynamicCats];

  const windowsByCat = (cat: string) =>
    openWindows.filter((w) => w.cat === cat);

  function handleMouseEnter(cat: string) {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setHoveredCat(cat);
  }
  function handleMouseLeave(cat: string) {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredCat((prev) => (prev === cat ? null : prev));
    }, 170); // 170ms grace, tune as desired
  }

  return (
    <div className="absolute bg-opacity-55 bottom-4 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-neutral-700 rounded-xl px-6 py-3 flex gap-6 shadow-2xl z-50">
      {allCategories.map((cat) => {
        const windows = windowsByCat(cat);
        return (
          <div
            key={cat}
            className="relative flex flex-col items-center"
            // Use events with grace period
            onMouseEnter={() => handleMouseEnter(cat)}
            onMouseLeave={() => handleMouseLeave(cat)}
          >
            <button
              onClick={() => openNewWindow(cat, cat)}
              className="hover:scale-110 transition"
            >
              <img
                src={ICONS[cat]}
                alt={cat}
                width={32}
                height={32}
                className="mb-1"
                draggable={false}
              />
              {windows.length > 0 && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-green-400">
                  ● {windows.length}
                </span>
              )}
            </button>

            {/* Popup area, always within parent div (no gap) */}
            {hoveredCat === cat && windows.length > 0 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-14 min-w-[190px] bg-black border border-neutral-600 rounded-md px-3 py-2 text-sm text-yellow-300 whitespace-nowrap z-50 shadow-xl"
                // Graceful mouse events
                onMouseEnter={() => handleMouseEnter(cat)}
                onMouseLeave={() => handleMouseLeave(cat)}
              >
                <div className="mb-1 font-bold text-green-400 border-b border-neutral-700 pb-1">
                  Open Windows:
                </div>
                {windows.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => {
                      restoreWindow(w.id);
                      setHoveredCat(null);
                    }}
                    className="block text-left w-full hover:text-green-400 py-0.5"
                  >
                    {w.type}{" "}
                    <span className="text-gray-400">#{w.id.slice(0, 4)}</span>
                    {w.minimized && (
                      <span className="ml-2 text-yellow-400">[min]</span>
                    )}
                  </button>
                ))}

                <button
                  onClick={() => {
                    closeAllInCategory(cat);
                    setHoveredCat(null);
                  }}
                  className="mt-2 text-red-400 hover:text-red-600 text-sm border-t border-neutral-700 pt-1 w-full text-left"
                >
                  ✖ Close All
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
