"use client";

import { useState } from "react";
import FloatingWindow from "./FloatingWindow";
import HudFrame from "./HudFrame";
import TerminalUI from "./terminal";
import Dock from "./Dock";
import ProjectWindow from "@/app/projects/page";
import AboutWindow from "@/app/about/page";
import MemoryWindow from "@/app/memories/page";
import BinWindow from "@/app/404/page";
import WritingWindow from "@/app/writings/page";
import AudioPlayer from "./AudioPlayer";

// ---- CHANGED: Added position field!
type WindowInstance = {
  id: string;
  type: string;
  cat: string;
  minimized?: boolean;
  fullscreen?: boolean;
  position: { x: number; y: number };
};

export default function MainDesktop() {
  const [openWindows, setOpenWindows] = useState<WindowInstance[]>([]);
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const [highestZ, setHighestZ] = useState(1);

  // ---- ADDED: nextOffset for window cascade
  const [nextOffset, setNextOffset] = useState({ x: 100, y: 100 });

  const bringToFront = (id: string) => {
    const newZ = highestZ + 1;
    setZIndices((prev) => ({ ...prev, [id]: newZ }));
    setHighestZ(newZ);
  };

  const closeAllInCategory = (cat: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.cat !== cat));
  };

  // ------------ CHANGED: openNewWindow now uses and advances offset!
  const openNewWindow = (type: string, cat: string) => {
    const STEP = 30;
    const MAX_OFFSET = 240;

    if (type === "explorer") {
      const existing = openWindows.find((w) => w.type === cat);
      if (existing) return;

      const id = `${cat}-${crypto.randomUUID()}`;
      const newWindow: WindowInstance = {
        id,
        type: cat,
        cat: "explorer",
        minimized: false,
        fullscreen: false,
        position: nextOffset,
      };
      setOpenWindows((prev) => [...prev, newWindow]);
      setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
      setHighestZ((prev) => prev + 1);

      setNextOffset((prev) => ({
        x: 100 + ((prev.x - 100 + STEP) % MAX_OFFSET),
        y: 100 + ((prev.y - 100 + STEP) % MAX_OFFSET),
      }));
      return;
    }

    const id = `${type}-${crypto.randomUUID()}`;
    const newWindow: WindowInstance = {
      id,
      type,
      cat,
      minimized: false,
      fullscreen: false,
      position: nextOffset,
    };
    setOpenWindows((prev) => [...prev, newWindow]);
    setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
    setHighestZ((prev) => prev + 1);

    setNextOffset((prev) => ({
      x: 100 + ((prev.x - 100 + STEP) % MAX_OFFSET),
      y: 100 + ((prev.y - 100 + STEP) % MAX_OFFSET),
    }));
  };

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  };

  const restoreWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false } : w))
    );
    bringToFront(id);
  };

  const toggleFullscreen = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, fullscreen: !w.fullscreen } : w))
    );
  };

  const icons = [
    {
      id: "terminal",
      title: "Terminal",
      icon: "/assets/icons/term.png",
      cat: "terminal",
    },
    {
      id: "about",
      title: "About Me",
      icon: "/assets/icons/soda.png",
      cat: "explorer",
    },
    {
      id: "projects",
      title: "Projects",
      icon: "/assets/icons/folder2.png",
      cat: "explorer",
    },
    {
      id: "writings",
      title: "Writings",
      icon: "/assets/icons/writer.png",
      cat: "explorer",
    },
    {
      id: "memories",
      title: "Memories",
      icon: "/assets/icons/memories.png",
      cat: "explorer",
    },
    {
      id: "resume",
      title: "Resume.pdf",
      icon: "/assets/icons/resume1.png",
      cat: "resume",
    },
    {
      id: "bin",
      title: "Recycle bin",
      icon: "/assets/icons/cat.png",
      cat: "bin",
    },
  ];

  const renderWindowContent = (type: string) => {
    switch (type) {
      case "terminal":
        return <TerminalUI />;
      case "about":
        return <AboutWindow />;
      case "projects":
        return <ProjectWindow />;
      case "writings":
        return <WritingWindow />;
      case "memories":
        return <MemoryWindow />;
      case "resume":
        return (
          <iframe src="/RESUME_VINOD_AKSHAT.pdf" className="w-full h-[80vh]" />
        );
      case "bin":
        return <BinWindow />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[url('/assets/desktop-bg3.jpg')] bg-cover text-white font-mono overflow-hidden">
      {/* Desktop Icons */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/assets/wallpapers/musashi.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      <div className="absolute left-4 top-4 space-y-4 z-0">
        {icons.map(({ id, title, icon, cat }) => (
          <div
            key={id}
            onDoubleClick={() => openNewWindow(id, cat)}
            className="flex flex-col items-center cursor-pointer hover:opacity-80"
          >
            <img src={icon} alt={title} className="w-12 h-12" />
            <span className="text-sm mt-1">{title}</span>
          </div>
        ))}
      </div>

      {/* Floating Windows */}
      {openWindows
        .filter((w) => !w.minimized)
        // ---- CHANGED: added position for each window!
        .map(({ id, type, fullscreen, position }) => {
          const content = (
            <HudFrame
              title={type.toUpperCase()}
              mode={fullscreen ? "fullscreen" : "window"}
              onClose={() => closeWindow(id)}
              onMinimize={() => minimizeWindow(id)}
              onFullscreen={() => toggleFullscreen(id)}
            >
              {renderWindowContent(type)}
            </HudFrame>
          );

          return fullscreen ? (
            <div
              key={id}
              className="fixed top-0 left-0 w-screen h-screen z-[9999]"
            >
              {content}
            </div>
          ) : (
            <FloatingWindow
              key={id}
              defaultPosition={position} // ---- CHANGED: use dynamic position!
              zIndex={zIndices[id] || 1}
              onClick={() => bringToFront(id)}
            >
              {content}
            </FloatingWindow>
          );
        })}

      {/* Dock */}
      <AudioPlayer />
      <Dock
        openNewWindow={openNewWindow}
        openWindows={openWindows}
        restoreWindow={restoreWindow}
        closeAllInCategory={closeAllInCategory}
      />
    </div>
  );
}
