"use client";

import { useState, useEffect } from "react";
import MainDesktop from "../components/MainDesktop";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [command, setCommand] = useState("");
  const [bootComplete, setBootComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLines, setLoadingLines] = useState<string[]>([]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const fullBootLog = [
    "[ OK ] Initializing Vinod Akshat Virtual Machine...",
    "[ OK ] Mounting reality layer...",
    "[ OK ] Loading desktop environment...",
    "[ OK ] Preparing terminal interface...",
    "Boot complete.",
    "Type `startx` to begin.",
  ];

  const resourceLoadingLog = [
    "[ OK ] Fetching fonts...",
    "[ OK ] Loading wallpaper video...",
    "[ OK ] Bootstrapping desktop environment...",
    "Launching interface...",
  ];

  useEffect(() => {
    const alreadyBooted = localStorage.getItem("hasBooted");
    const videoAlreadyCached = localStorage.getItem("videoLoaded") === "true";

    if (alreadyBooted === "true" && videoAlreadyCached) {
      // Skip loading animation if video was cached
      setLoading(true);
      setTimeout(() => {
        setStarted(true);
      }, 1000);
    } else if (alreadyBooted === "true") {
      preloadResources();
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

  const preloadResources = () => {
    setLoading(true);
    let i = 0;

    const interval = setInterval(() => {
      setLoadingLines((prev) => [...prev, resourceLoadingLog[i]]);
      i++;

      if (i === 1) {
        // Start video preload when video line is triggered
        const video = document.createElement("video");
        video.src = "/assets/wallpapers/musashi.mp4";
        video.preload = "auto";
        video.onloadeddata = () => {
          setVideoLoaded(true);
          localStorage.setItem("videoLoaded", "true"); // Cache it
        };
      }

      if (i >= resourceLoadingLog.length) {
        clearInterval(interval);

        // Wait for video to load
        const checkInterval = setInterval(() => {
          if (videoLoaded) {
            clearInterval(checkInterval);
            setTimeout(() => setStarted(true), 1000);
          }
        }, 200);
      }
    }, 600);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim().toLowerCase() === "startx") {
      localStorage.setItem("hasBooted", "true");
      preloadResources();
    }
  };

  if (started) return <MainDesktop />;

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-black text-green-400 font-mono p-6 items-center justify-center">
        <div className="w-full max-w-2xl">
          {loadingLines.map((line, index) => (
            <p key={index} className="mb-1 whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
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
