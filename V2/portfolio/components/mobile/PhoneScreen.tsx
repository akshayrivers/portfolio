"use client";

import { useState, useCallback, useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useVFS } from "@/hooks/useVFS";
import PhoneApp from "./PhoneApp";
import PhoneChat from "./PhoneChat";
import PhoneProfileSelect from "./PhoneProfileSelect";
import ProfileDropdown from "./ProfileDropdown";
import { PhoneMusicProvider, usePhoneMusic } from "./PhoneMusicProvider";
import PhoneMusicPlayer from "./PhoneMusicPlayer";
import { getContent } from "@/data/content";
import useFileContent from "@/hooks/useFileContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

// Renders markdown like the desktop explorer does, sized for the phone UI.
function Md({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="prose prose-invert prose-sm max-w-none prose-headings:text-green-400 prose-headings:text-sm prose-p:text-zinc-300 prose-p:text-sm prose-p:my-1 prose-li:text-zinc-300 prose-li:text-sm prose-li:my-0 prose-a:text-blue-400 prose-code:text-green-300 prose-code:text-xs prose-pre:bg-zinc-900 prose-ul:my-1 prose-ol:my-1">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
}

function AboutPage({ profile }: { profile: ProfileKey }) {
  const aboutData = getContent(profile, "about");
  const summary = aboutData.find((f) => f.src);
  const { content: summaryContent } = useFileContent(summary?.src ?? null);
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">About Me</h2>
      <div className="space-y-4">
        {summary && (
          <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <Md text={summaryContent ?? undefined} />
          </div>
        )}
        {aboutData
          .filter((f) => f.content)
          .map((f, i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <h3 className="text-zinc-400 text-xs uppercase mb-1">{f.name.replace(/\.\w+$/, "")}</h3>
              <Md text={f.content} />
            </div>
          ))}
      </div>
    </div>
  );
}

function ProjectBody({ file }: { file: { content?: string; src?: string } }) {
  const { content: fetched, loading } = useFileContent(file.src ?? null);
  const text = file.content ?? fetched ?? (loading ? "Loading…" : "Empty file.");
  return (
    <div className="mt-2 pt-2 border-t border-zinc-700/60">
      <Md text={text} />
    </div>
  );
}

function ProjectsPage({ profile }: { profile: ProfileKey }) {
  const projectData = getContent(profile, "projects");
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Projects</h2>
      <div className="space-y-2">
        {projectData.map((p, i) => {
          const expanded = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(expanded ? null : i)}
              className={`bg-zinc-800/50 rounded-lg p-3 border transition cursor-pointer active:scale-[0.99] ${
                expanded ? "border-green-500/40" : "border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`text-sm ${expanded ? "text-green-300" : "text-zinc-300"}`}>
                  {p.name}
                </span>
                <span className="text-zinc-600 text-xs shrink-0">{expanded ? "▲" : "▼"}</span>
              </div>
              {expanded && <ProjectBody file={p} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WritingsPage({ profile }: { profile: ProfileKey }) {
  const writingsData = getContent(profile, "writings");
  // Fall back to ideas when a profile has no curated writings yet.
  const data = writingsData.length > 0 ? writingsData : getContent(profile, "ideas");
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Writings</h2>
      <div className="space-y-2">
        {data.map((w, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-300 text-sm">{w.name}</span>
            <div className="mt-1"><Md text={w.content} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoriesPage({ profile }: { profile: ProfileKey }) {
  const memoriesData = getContent(profile, "memories");
  return (
    <div className="p-4 overflow-auto h-full">
      <h2 className="text-green-400 text-lg font-bold mb-4">Memories</h2>
      <div className="space-y-2">
        {memoriesData.map((m, i) => (
          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
            <span className="text-zinc-400 text-xs mb-1">{m.name}</span>
            <Md text={m.content} />
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
  const setVFSProfile = useVFS((s) => s.setProfile);

  // Keep the shared terminal/explorer filesystem on the active profile's content.
  useEffect(() => {
    setVFSProfile(profile);
  }, [profile, setVFSProfile]);
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [showProfileSelect, setShowProfileSelect] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const profileNames: Record<ProfileKey, string> = {
    engineer: "Engineer",
    hacker: "Hacker",
    writer: "Writer",
    babli: "Babli",
    manglu: "Manglu",
    bindi: "Bindi",
  };

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case "chat": return <PhoneChat />;
      case "about": return <AboutPage profile={profile} />;
      case "projects": return <ProjectsPage profile={profile} />;
      case "writings": return <WritingsPage profile={profile} />;
      case "memories": return <MemoriesPage profile={profile} />;
      case "contact": return <ContactPage />;
      case "camera": return <CameraComingSoon />;
      case "settings": return <SettingsPage />;
      default: return null;
    }
  };

  // Direct profile -> music mapping, same as desktop (themes[profile].music).
  // Both profile state and music track update together.
  const handleProfileSwitch = useCallback(
    (newProfile: ThemeKey) => {
      switchProfile(newProfile);
      setTrack(newProfile);
    },
    [switchProfile, setTrack]
  );

  const handleInitialSelect = useCallback(
    (selected: ThemeKey) => {
      handleProfileSwitch(selected);
      setShowProfileSelect(false);
    },
    [handleProfileSwitch]
  );

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
        <PhoneProfileSelect onSelect={handleInitialSelect} />
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