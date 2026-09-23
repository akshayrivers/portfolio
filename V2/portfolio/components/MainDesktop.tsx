import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useVFS } from "@/hooks/useVFS";
import FloatingWindow from "./FloatingWindow";
import HudFrame from "./HudFrame";
import TerminalUI from "./terminal";
import Dock from "./Dock";
import AudioPlayer from "./AudioPlayer";
import FloatingIcon from "./FloatingIcons";
import ExplorerView from "./ExploreView";
import PhoneScreen from "./mobile/PhoneScreen";
import { themes, ThemeKey } from "@/data/themes";

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
  const [isMobile, setIsMobile] = useState(false);
  const { profile, loading: profileLoading, switchProfile } = useProfile();
  const setVFSProfile = useVFS((s) => s.setProfile);

  // Keep the terminal/explorer filesystem on the active profile's content.
  useEffect(() => {
    setVFSProfile(profile);
  }, [profile, setVFSProfile]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const [openWindows, setOpenWindows] = useState<WindowInstance[]>([]);
  const [zIndices, setZIndices] = useState<Record<string, number>>({});
  const [highestZ, setHighestZ] = useState(1);
  const [nextOffset, setNextOffset] = useState({ x: 100, y: 100 });

  const [iconPositions, setIconPositions] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    if (!isMobile) {
      setIconPositions({
        terminal: { x: 20, y: 20 },
        about: { x: 20, y: 100 },
        projects: { x: 20, y: 180 },
        writings: { x: 20, y: 260 },
        memories: { x: 20, y: 340 },
        resume: { x: 20, y: 420 },
        bin: { x: 20, y: 500 },
        contact: { x: 20, y: 600 },
        batman: { x: typeof window !== "undefined" ? window.innerWidth - 40 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 - 50 : 0 },
        schrodinger: { x: typeof window !== "undefined" ? window.innerWidth - 40 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 + 40 : 0 },
      });
    } else {
      setIconPositions({});
    }
  }, [isMobile]);

  const bringToFront = (id: string) => {
    const newZ = highestZ + 1;
    setZIndices((prev) => ({ ...prev, [id]: newZ }));
    setHighestZ(newZ);
  };

  const closeAllInCategory = (cat: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.cat !== cat));
  };

  const openNewWindow = (type: string, cat: string, command?: string) => {
    if (isMobile) {
      if (type === "explorer") {
        const existing = openWindows.find((w) => w.type === cat);
        if (existing) return;
      }
      const id = `${type}-${crypto.randomUUID()}`;
      const newWindow: WindowInstance = {
        id, type, cat,
        minimized: false, fullscreen: false,
        position: { x: 50, y: Math.min(openWindows.length * 60 + 50, window.innerHeight - 300) },
        ...(command && { command }),
      };
      setOpenWindows((prev) => [...prev, newWindow]);
      setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
      setHighestZ((prev) => prev + 1);
    } else {
      const STEP = 30;
      const MAX_OFFSET = 240;
      if (type === "explorer") {
        const existing = openWindows.find((w) => w.type === cat);
        if (existing) return;
      }
      const id = `${type}-${crypto.randomUUID()}`;
      const newWindow: WindowInstance = {
        id, type, cat,
        minimized: false, fullscreen: false,
        position: nextOffset, ...(command && { command }),
      };
      setOpenWindows((prev) => [...prev, newWindow]);
      setZIndices((prev) => ({ ...prev, [id]: highestZ + 1 }));
      setHighestZ((prev) => prev + 1);
      setNextOffset((prev) => ({
        x: 100 + ((prev.x - 100 + STEP) % MAX_OFFSET),
        y: 100 + ((prev.y - 100 + STEP) % MAX_OFFSET),
      }));
    }
  };

  const updateWindowPosition = (id: string, newPos: { x: number; y: number }) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position: newPos } : w))
    );
  };

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    );
  };

  const restoreWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false } : w)),
    );
    bringToFront(id);
  };

  const toggleFullscreen = (id: string) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, fullscreen: !w.fullscreen } : w)),
    );
  };

  const icons = [
    { id: "terminal", title: "Terminal", icon: "/assets/icons/term.png", cat: "terminal" },
    { id: "about", title: "About Me", icon: "/assets/icons/soda.png", cat: "explorer" },
    { id: "projects", title: "Projects", icon: "/assets/icons/folder2.png", cat: "explorer" },
    { id: "writings", title: "Writings", icon: "/assets/icons/writer.png", cat: "explorer" },
    { id: "memories", title: "Memories", icon: "/assets/icons/memories.png", cat: "explorer" },
    { id: "resume", title: "Resume.pdf", icon: "/assets/icons/resume1.png", cat: "resume" },
    { id: "bin", title: "Recycle Bin", icon: "/assets/icons/cat.png", cat: "bin" },
    { id: "contact", title: "Contact Me", icon: "/assets/icons/message.png", cat: "explorer" },
    { id: "batman", title: "batsy", icon: "/assets/icons/batman.png", cat: "bin" },
    { id: "schrodinger", title: "If I exist or not", icon: "/assets/icons/catman.png", cat: "explorer" },
  ];

  const renderWindowContent = (type: string, command?: string) => {
    switch (type) {
      case "terminal": return <TerminalUI initialCommand={command} />;
      case "about": return <ExplorerView title="About Me" path="/home/vinod/about" />;
      case "projects": return <ExplorerView title="Projects" path="/home/vinod/projects" />;
      case "writings": return <ExplorerView title="Writings" path="/home/vinod/ideas" />;
      case "memories": return <ExplorerView title="Memories" path="/home/vinod/memories" />;
      case "resume": return <iframe src="/RESUME_VINOD_AKSHAT.pdf" className="w-full h-[90vh]" />;
      case "explorer": return <ExplorerView title="Explorer" path="/home/vinod" />;
      case "bin": return <ExplorerView title="Recycle Bin" path="/home/vinod/ideas" />;
      case "contact":
        return (
          <ExplorerView title="Contact Me" path="/home/vinod/contact"
            onTriggerCommand={(cmd) => { if (cmd) openNewWindow("terminal", "terminal", cmd); }} />
        );
      case "batman":
        return (
          <div className="max-w-md">
            <p className="text-lg">Even Batman calls Alfred.</p>
            <p className="mt-2 text-sm text-zinc-300">
              This portfolio has a jokes folder, a chaos gremlin, and a whole
              terminal — but some nights the dark feels real. Strength is not
              suffering quietly; every hero has a line they call. If you need
              one, these lines are answered by humans, free, in India:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li><strong>iCall:</strong> 9152987821</li>
              <li><strong>AASRA:</strong> 91-9820466726</li>
              <li><strong>Vandrevala Foundation:</strong> 1860 266 2345</li>
            </ul>
            <p className="mt-3 text-sm">The night is darkest before the dawn. Call someone. Stay for the sequel.</p>
          </div>
        );
      case "schrodinger":
        return <ExplorerView title="cat in the bag" path="/home/vinod/secret" />;
      case "rust":
        return <div>Rust Demo disabled for production build.</div>;
      default:
        return null;
    }
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("engineer");
  const currentWallpaper = themes[currentTheme].video;
  const currentTrack = {
    src: themes[currentTheme].music,
    title: themes[currentTheme].musicTitle,
    artist: themes[currentTheme].musicArtist,
    art: themes[currentTheme].musicArt,
  };

  // Desktop has one identity: theme buttons drive wallpaper + music AND the
  // active profile (apps, VFS content), exactly like mobile profile switching.
  const handleThemeSelect = (theme: ThemeKey) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
    switchProfile(theme);
  };

  // Music navigation cycles themes, so wallpaper + profile follow the track.
  const stepTheme = (dir: 1 | -1) => {
    const order = Object.keys(themes) as ThemeKey[];
    const next = order[(order.indexOf(currentTheme) + dir + order.length) % order.length];
    handleThemeSelect(next);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && saved in themes) {
      setCurrentTheme(saved as ThemeKey);
      switchProfile(saved as ThemeKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black text-white font-mono overflow-hidden">
      {isMobile ? (
        <PhoneScreen />
      ) : (
      <div className="relative w-screen h-screen bg-black text-white font-mono overflow-hidden">
      <video
        autoPlay loop muted playsInline preload="auto"
        src={themes[currentTheme].video}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-20 flex gap-2 bg-black/50 p-2 rounded backdrop-blur-sm">
        {Object.keys(themes).map((theme) => (
          <button
            key={theme}
            onClick={(e) => { e.stopPropagation(); handleThemeSelect(theme as ThemeKey); }}
            className="text-xs px-2 py-1 bg-white/15 hover:bg-white/25 rounded cursor-pointer"
          >
            {theme}
          </button>
        ))}
      </div>

      {/* Desktop Icons */}
      {icons.map(({ id, title, icon, cat }) => (
        <FloatingIcon
          key={id} icon={icon} title={title}
          defaultPosition={iconPositions[id] || { x: 0, y: 0 }}
          onDoubleClick={() => openNewWindow(id, cat)}
          onDragEnd={(newPos) => setIconPositions((prev) => ({ ...prev, [id]: newPos }))}
        />
      ))}

      {/* Floating Windows */}
      {openWindows.map((w) => (
        <FloatingWindow
          key={w.id}
          defaultPosition={w.position}
          zIndex={zIndices[w.id] || 1}
          onClick={() => bringToFront(w.id)}
          onDragEnd={(pos) => updateWindowPosition(w.id, pos)}
          isFullscreen={w.fullscreen}
          isMinimized={w.minimized}
        >
          <HudFrame
            title={w.type.toUpperCase()}
            mode={w.fullscreen ? "fullscreen" : "window"}
            onClose={() => closeWindow(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onFullscreen={() => toggleFullscreen(w.id)}
          >
            {renderWindowContent(w.type, w.command)}
          </HudFrame>
        </FloatingWindow>
      ))}

      {/* Dock */}
      <AudioPlayer
        track={currentTrack}
        onNext={() => stepTheme(1)}
        onPrev={() => stepTheme(-1)}
      />
      <Dock
        openNewWindow={openNewWindow}
        openWindows={openWindows}
        restoreWindow={restoreWindow}
        closeAllInCategory={closeAllInCategory}
      />
      </div>
      )}
    </div>
  );
}
