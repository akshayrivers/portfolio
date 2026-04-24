"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!src) return;

    // Stop old audio if exists
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = src;
    } else {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    const playAudio = async () => {
      try {
        await audioRef.current!.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    playAudio();

    return () => {
      audioRef.current?.pause();
    };
  }, [src]);

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
      className="fixed bottom-4 right-6 z-50 bg-[#161a1f]/75 px-3 py-2 rounded-md border border-cyan-500 text-white font-mono text-xs hover:bg-[#262f40]/80 transition shadow-md"
      onClick={toggleAudio}
      style={{ backdropFilter: "blur(4px)" }}
    >
      {playing ? "🔊 Sound: ON" : "🔇 Sound: OFF"}
    </button>
  );
}
