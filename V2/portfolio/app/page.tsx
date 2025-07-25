"use client";

import { useState, useEffect } from "react";
import MainDesktop from "../components/MainDesktop";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [command, setCommand] = useState("");
  const [bootComplete, setBootComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const fullBootLog = [
    "[ OK ] Initializing Vinod Akshat Virtual Machine...",
    "[ OK ] Mounting reality layer...",
    "[ OK ] Loading desktop environment...",
    "[ OK ] Preparing terminal interface...",
    "Boot complete.",
    "Type `startx` to begin.",
  ];

  useEffect(() => {
    const alreadyBooted = localStorage.getItem("hasBooted");

    if (alreadyBooted === "true") {
      setLoading(true);
      preloadVideo();
    } else {
      let i = 0;
      const interval = setInterval(() => {
        setBootLines((prev) => [...prev, fullBootLog[i]]);
        i++;
        if (i >= fullBootLog.length) {
          clearInterval(interval);
          setBootComplete(true);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const preloadVideo = () => {
    const video = document.createElement("video");
    video.src = "/assets/wallpapers/musashi.mp4";
    video.preload = "auto";
    video.onloadeddata = () => {
      setVideoLoaded(true);
      setStarted(true);
    };
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim().toLowerCase() === "startx") {
      localStorage.setItem("hasBooted", "true");
      setLoading(true);
      preloadVideo();
    }
  };

  if (started && videoLoaded) return <MainDesktop />;

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-black text-green-400 font-mono p-6 items-center justify-center">
        <p>Loading resources...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-black text-green-400 font-mono p-6 items-center justify-center">
      <div className="w-full max-w-2xl">
        {bootLines.map((line, index) => (
          <p key={index} className="mb-1 whitespace-pre-wrap">
            {line}
          </p>
        ))}
        {bootComplete && (
          <div className="flex items-center gap-2 mt-4 animate-fade-in">
            <span className="animate-pulse">$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-green-400 w-full"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
