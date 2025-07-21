"use client";

import Image from "next/image";
import { useState } from "react";

type HoverPosition = { x: number; y: number } | null;
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
  terminal: "/assets/icons/terminal.png",
  explorer: "/assets/icons/folder.png",
  about: "/assets/icons/folder.png",
  projects: "/assets/icons/folder.png",
  writings: "/assets/icons/folder.png",
  memories: "/assets/icons/folder.png",
  resume: "/assets/icons/pdf.png",
  bin: "/assets/icons/bin.png",
};

const STATIC_CATEGORIES = ["terminal", "explorer"];

export default function Dock({
  openNewWindow,
  openWindows,
  restoreWindow,
  closeAllInCategory,
}: DockProps) {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [hoverPos, setHoverPos] = useState<HoverPosition>(null);

  const handleMouseEnter = (cat: string) => setHoveredCat(cat);
  const handleMouseLeave = () => {
    setHoveredCat(null);
    setHoverPos(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  };
  const dynamicCats = Array.from(new Set(openWindows.map((w) => w.cat))).filter(
    (cat) => !STATIC_CATEGORIES.includes(cat) && ICONS[cat]
  );

  const allCategories = [...STATIC_CATEGORIES, ...dynamicCats];

  const windowsByCat = (cat: string) =>
    openWindows.filter((w) => w.cat === cat);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-neutral-700 rounded-xl px-6 py-3 flex gap-6 shadow-2xl z-50">
      {allCategories.map((cat) => {
        const windows = windowsByCat(cat);

        return (
          <div
            key={cat}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredCat(cat)}
            onMouseLeave={() => setHoveredCat(null)}
          >
            <button
              onClick={() => openNewWindow(cat, cat)}
              className="hover:scale-110 transition"
            >
              <Image
                src={ICONS[cat]}
                alt={cat}
                width={32}
                height={32}
                className="mb-1"
              />
              {windows.length > 0 && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-green-400">
                  ● {windows.length}
                </span>
              )}
            </button>

            {hoveredCat === cat && windows.length > 0 && (
              <div className="absolute bottom-12 bg-black border border-neutral-600 rounded-md px-3 py-2 text-sm text-yellow-300 whitespace-nowrap z-50 min-w-[180px]">
                <p className="mb-1">Open Windows:</p>
                {windows.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => restoreWindow(w.id)}
                    className="block text-left w-full hover:text-green-400"
                  >
                    {w.type} #{w.id.slice(0, 4)}
                  </button>
                ))}

                <button
                  onClick={() => closeAllInCategory(cat)}
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
