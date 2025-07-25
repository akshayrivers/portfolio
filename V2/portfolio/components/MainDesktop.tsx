"use client";

import { useState } from "react";
import FloatingWindow from "./FloatingWindow";
import HudFrame from "./HudFrame";
import TerminalUI from "./terminal";
import Dock from "./Dock";
import AudioPlayer from "./AudioPlayer";
import FloatingIcon from "./FloatingIcons";
import ExplorerView from "./ExploreView";
import catFiles from "@/data/cat";
import aboutFiles from "@/data/about";
import ideaFiles from "@/data/ideas";
import memoriesFiles from "@/data/memories";
import projectFiles from "@/data/projects";
import Image from "next/image";

import contactFiles from "@/data/contact";

type WindowInstance = {
  id: string;
  type: string;
  cat: string;
  minimized?: boolean;
  fullscreen?: boolean;
  position: { x: number; y: number };
  command?: string;
};

export default function MainDesktop() {
  const [openWindows, setOpenWindows] = useState<WindowInstance[]>([]);
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const [highestZ, setHighestZ] = useState(1);
  const [nextOffset, setNextOffset] = useState({ x: 100, y: 100 });

  const [iconPositions, setIconPositions] = useState<
    Record<string, { x: number; y: number }>
  >({
    terminal: { x: 20, y: 20 },
    about: { x: 20, y: 100 },
    projects: { x: 20, y: 180 },
    writings: { x: 20, y: 260 },
    memories: { x: 20, y: 340 },
    resume: { x: 20, y: 420 },
    bin: { x: 20, y: 500 },
    contact: { x: 20, y: 600 },
    batman: {
      x: typeof window !== "undefined" ? window.innerWidth - 40 : 0,
      y: 580,
    },
    schrodinger: {
      x: typeof window !== "undefined" ? window.innerWidth - 40 : 0,
      y: 460,
    },
  });

  const bringToFront = (id: string) => {
    const newZ = highestZ + 1;
    setZIndices((prev) => ({ ...prev, [id]: newZ }));
    setHighestZ(newZ);
  };

  const closeAllInCategory = (cat: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.cat !== cat));
  };

  const openNewWindow = (type: string, cat: string, command?: string) => {
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
        ...(command && { command }),
      };
      setOpenWindows((prev) => [...prev, newWindow]);
      setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
      setHighestZ((prev) => prev + 1);
    } else {
      const id = `${type}-${crypto.randomUUID()}`;
      const newWindow: WindowInstance = {
        id,
        type,
        cat,
        minimized: false,
        fullscreen: false,
        position: nextOffset,
        ...(command && { command }),
      };
      setOpenWindows((prev) => [...prev, newWindow]);
      setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
      setHighestZ((prev) => prev + 1);
    }

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
      title: "Recycle Bin",
      icon: "/assets/icons/cat.png",
      cat: "bin",
    },
    {
      id: "contact",
      title: "Contact Me",
      icon: "/assets/icons/message.png",
      cat: "explorer",
    },
    {
      id: "batman",
      title: "batsy",
      icon: "/assets/icons/batman.png",
      cat: "bin",
    },
    {
      id: "schrodinger",
      title: "If I exist or not",
      icon: "/assets/icons/catman.png",
      cat: "explorer",
    },
  ];

  const renderWindowContent = (type: string, command?: string) => {
    switch (type) {
      case "terminal":
        return <TerminalUI initialCommand={command} />;
      case "about":
        return (
          <>
            <ExplorerView title="about" files={aboutFiles} />;
          </>
        );
      case "projects":
        return <ExplorerView title="Projects" files={projectFiles} />;
      case "writings":
        return <ExplorerView title="writings" files={ideaFiles} />;
      case "memories":
        return <ExplorerView title="memories" files={memoriesFiles} />;
      case "resume":
        return (
          <iframe src="/RESUME_VINOD_AKSHAT.pdf" className="w-full h-[90vh]" />
        );
      case "explorer":
        return <ExplorerView title="about" files={aboutFiles} />;

      case "bin":
        return <ExplorerView title="scarpped ideas" files={ideaFiles} />;
      case "contact":
        return (
          <ExplorerView
            title="contact me"
            files={contactFiles}
            onTriggerCommand={(cmd) => {
              if (cmd) {
                openNewWindow("terminal", "terminal", cmd);
              }
            }}
          />
        );
      case "batman":
        return (
          <>
            Grief doesn't go away. You just learn to live with it.
            <br />
            But you're not alone in the dark — reach out:
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>iCall:</strong> 9152987821
              </li>
              <li>
                <strong>AASRA:</strong> 91-9820466726
              </li>
              <li>
                <strong>Vandrevala Foundation:</strong> 1860 266 2345
              </li>
            </ul>
            <p className="mt-2">
              Be the hero of your own story. Start by asking for help.
            </p>
          </>
        );

      case "schrodinger":
        return (
          <ExplorerView title="cat in the bag" files={catFiles}></ExplorerView>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-black bg-cover text-white font-mono overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/assets/wallpapers/musashi.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      {/* Desktop Icons */}
      {icons.map(({ id, title, icon, cat }) => (
        <FloatingIcon
          key={id}
          icon={icon}
          title={title}
          defaultPosition={iconPositions[id] || { x: 0, y: 0 }}
          onDoubleClick={() => openNewWindow(id, cat)}
          onDragEnd={(newPos) =>
            setIconPositions((prev) => ({
              ...prev,
              [id]: newPos,
            }))
          }
        />
      ))}
      {/* Floating Windows */}
      {openWindows
        .filter((w) => !w.minimized)
        .map(({ id, type, fullscreen, position, command }) => {
          const content = (
            <HudFrame
              title={type.toUpperCase()}
              mode={fullscreen ? "fullscreen" : "window"}
              onClose={() => closeWindow(id)}
              onMinimize={() => minimizeWindow(id)}
              onFullscreen={() => toggleFullscreen(id)}
            >
              {renderWindowContent(type, command)}
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
              defaultPosition={position}
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
