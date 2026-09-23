"use client";

import { useState, useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import PhoneApp from "./PhoneApp";
import PhoneChat from "./PhoneChat";
import PhoneProfileSelect from "./PhoneProfileSelect";
import ProfileDropdown from "./ProfileDropdown";
import { PhoneMusicProvider, usePhoneMusic } from "./PhoneMusicProvider";
import PhoneMusicPlayer from "./PhoneMusicPlayer";
import aboutData from "@/data/about";
import projectData from "@/data/projects";
import ideaData from "@/data/ideas";
import memoriesData from "@/data/memories";
import contactData from "@/data/contact";
import { type ThemeKey } from "@/data/themes";
import { ProfileKey } from "@/data/profiles";
import { themes } from "@/data/themes";

type App = {
  id: string;
  label: string;
  iconSrc: string;
};

const APPS: App[] = [
  { id: "chat", label: "Chat", iconSrc: "/assets/icons/term.png" },
  { id: "about", label: "About", iconSrc: "/assets/icons/soda.png" },
  { id: "projects", label: "Projects", iconSrc: "/assets/icons/folder2.png" },
  { id: "writings", label: "Writings", iconSrc: "/assets/icons/writer.png" },
  { id: "memories", label: "Memories", iconSrc: "/assets/icons/memories.png" },
  { id: "contact", label: "Contact", iconSrc: "/assets/icons/message.png" },
  { id: "camera", label: "Camera", iconSrc: "" },
  { id: "settings", label: "Settings", iconSrc: "" },
];

function CameraIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CameraComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-neon font-mono">
      <CameraIcon />
      <p className="text-green-400 text-lg mt-4">Coming Soon</p>
      <p className="text-zinc-500 text-sm mt-2">Camera feature is on the way</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-neon font-mono p-8">
      <h2 className="text-xl font-bold mb-6">Settings</h2>
      <div className="space-y-4 w-full max-w-xs">
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm">Dark Mode</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-zinc-600" />
          <span className="text-sm">Sound</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-zinc-600" />
          <span className="text-sm">Notifications</span>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">About Me</h2>
      <div className="space-y-4">
        {aboutData
          .filter((f) => f.content)
          .map((f, i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <h3 className="text-zinc-400 text-xs uppercase mb-1">{f.name.replace(/\.\w+$/, "")}</h3>
              <p className="text-zinc-300 text-sm whitespace-pre-wrap">{f.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Projects</h2>
      <div className="space-y-2">
        {projectData.map((p, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-300 text-sm">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WritingsPage() {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Writings</h2>
      <div className="space-y-2">
        {ideaData.map((w, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-300 text-sm">{w.name}</span>
            {w.content && <p className="text-zinc-500 text-xs mt-1">{w.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoriesPage() {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Memories</h2>
      <div className="space-y-2">
        {memoriesData.map((m, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-400 text-xs mb-1">{m.name}</span>
            <p className="text-zinc-300 text-sm whitespace-pre-wrap">{m.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Contact Me</h2>
      <div className="space-y-2">
        {contactData.map((c, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-400 text-xs mb-1">{c.name}</span>
            <p className="text-zinc-300 text-sm">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneScreenInner() {
  const { profile, profileName, switchProfile } = useProfile();
  const { setTrack, setUserInteracted, userInteracted } = usePhoneMusic();
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [showProfileSelect, setShowProfileSelect] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const profileNames: Record<ProfileKey, string> = {
    engineer: "Engineer",
    babli: "Babli",
    hacker: "Hacker",
    writer: "Writer",
    manglu: "Manglu",
    bindi: "Bindi",
  };

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case "chat": return <PhoneChat />;
      case "about": return <AboutPage />;
      case "projects": return <ProjectsPage />;
      case "writings": return <WritingsPage />;
      case "memories": return <MemoriesPage />;
      case "contact": return <ContactPage />;
      case "camera": return <CameraComingSoon />;
      case "settings": return <SettingsPage />;
      default: return null;
    }
  };

  const handleProfileSwitch = (newProfile: ThemeKey) => {
    switchProfile(newProfile);
    setTrack(newProfile);
  };

  const handleUserInteraction = () => {
    if (!userInteracted) setUserInteracted();
  };

  return (
    <div
      className="flex flex-col h-screen bg-black text-neon font-mono"
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      {showProfileSelect ? (
        <PhoneProfileSelect onSelect={() => setShowProfileSelect(false)} />
      ) : (
        <>
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 py-2 bg-zinc-900/80 border-b border-zinc-800">
            <span className="text-xs text-zinc-400">12:45</span>
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#39FF14">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xs text-zinc-400">100%</span>
            </div>
          </div>

          {/* App Grid */}
          <div className="flex-1 overflow-auto p-4 pb-8">
            <div className="grid grid-cols-4 gap-4 items-start">
              {APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className="flex flex-col items-center gap-2 p-3 hover:bg-zinc-800/50 rounded-lg transition active:scale-95"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-zinc-800 rounded-xl border border-zinc-700">
                    {app.iconSrc ? (
                      <img src={app.iconSrc} alt={app.label} className="w-10 h-10" />
                    ) : app.id === "camera" ? (
                      <CameraIcon />
                    ) : (
                      <SettingsIcon />
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-1">{app.label}</span>
                </button>
              ))}
              {/* Music Player Card */}
              <div className="col-span-4 bg-zinc-800/50 rounded-xl border border-zinc-700 p-3 hover:border-green-500/30 transition">
                <PhoneMusicPlayer compact />
              </div>
              <p className="col-span-4 text-[9px] text-zinc-600 text-center font-mono mt-1">
                ⚠ Music credits belong to respective artists. Used for portfolio demonstration only.
              </p>
            </div>
          </div>

          {/* Full-screen fixed music player (when app is open) */}
          {activeApp && <PhoneMusicPlayer fixed />}

          {/* Active App */}
          {activeApp && (
            <div className="fixed inset-0 z-50 bg-black animate-fade-in">
              <PhoneApp
                title={APPS.find((a) => a.id === activeApp)?.label || ""}
                onBack={() => setActiveApp(null)}
                onClose={() => setActiveApp(null)}
              >
                {renderAppContent(activeApp)}
              </PhoneApp>
            </div>
          )}

          {/* Profile Selector */}
          <button
            onClick={() => setShowDropdown(true)}
            className="flex items-center justify-center gap-2 py-2 bg-zinc-900/90 border-t border-zinc-800 hover:bg-zinc-800/90 transition"
          >
            <span className="text-xs text-green-400">{profileNames[profile]}</span>
            <span className="text-[10px] text-zinc-500">▼</span>
          </button>

          {/* Profile Dropdown */}
          {showDropdown && (
            <ProfileDropdown
              currentProfile={profile}
              onSwitch={handleProfileSwitch}
              onClose={() => setShowDropdown(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default function PhoneScreen() {
  return (
    <PhoneMusicProvider>
      <PhoneScreenInner />
    </PhoneMusicProvider>
  );
}