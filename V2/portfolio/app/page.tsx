"use client";

import { useState, useEffect } from "react";
import MainDesktop from "../components/MainDesktop";
import { themes } from "@/data/themes";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadLines, setLoadLines] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const videoAlreadyCached = localStorage.getItem("videoLoaded") === "true";
    const alreadyBooted = localStorage.getItem("hasBooted");

    if (alreadyBooted === "true" && videoAlreadyCached) {
      setTimeout(() => setReady(true), 600);
    } else {
      preloadResources();
    }
  }, []);

  const preloadResources = () => {
    setLoading(true);
    let i = 0;

    const resourceLines = [
      "[ OK ] Connecting to portfolio...",
      "[ OK ] Loading assets...",
      "[ OK ] Initializing experience...",
      "Welcome.",
    ];

    const videoUrls = Object.values(themes).map((t) => t.video);
    let loadedCount = 0;

    videoUrls.forEach((url) => {
      const video = document.createElement("video");
      video.src = url;
      video.preload = "auto";
      video.onloadeddata = () => {
        loadedCount++;
        if (loadedCount === videoUrls.length) {
          localStorage.setItem("videoLoaded", "true");
        }
      };
    });

    const interval = setInterval(() => {
      setLoadLines((prev) => [...prev, resourceLines[i]]);
      i++;

      if (i >= resourceLines.length) {
        clearInterval(interval);
        setTimeout(() => {
          localStorage.setItem("hasBooted", "true");
          setReady(true);
        }, 600);
      }
    }, 400);
  };

  if (ready) return <MainDesktop />;

  if (loading) {
    return (
      <div
        className={`flex h-screen w-full bg-bgDark items-center justify-center p-4 ${
          isMobile ? "font-mono text-sm" : "font-mono"
        }`}
      >
        <div className="w-full max-w-2xl">
          {loadLines.map((line, index) => (
            <p key={index} className="mb-1 whitespace-pre-wrap">
              {line}
            </p>
          ))}
          <div className="flex items-center gap-2 mt-4 animate-fade-in">
            <span className="animate-pulse">$</span>
            <span className="text-green-400">Loading Vinod Akshat...</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
