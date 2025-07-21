"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new window.Audio("/sounds/typewriter.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    // AUTOPLAY on mount
    const tryPlay = () => {
      audioRef
        .current!.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false)); // Will fail silently if not allowed yet
    };

    tryPlay();

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Click to toggle music
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      className={`fixed bottom-4 right-6 z-50 bg-[#161a1f]/75 px-3 py-2 rounded-md border border-cyan-500 text-white font-mono text-xs hover:bg-[#262f40]/80 transition shadow-md`}
      onClick={toggleAudio}
      tabIndex={0}
      aria-label={playing ? "Pause synthwave audio" : "Play synthwave audio"}
      style={{ backdropFilter: "blur(4px)" }}
    >
      {playing ? "🔊 Sound: ON" : "🔇 Sound: OFF"}
    </button>
  );
}
