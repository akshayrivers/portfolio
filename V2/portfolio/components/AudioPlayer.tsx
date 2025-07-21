// components/AudioPlayer.tsx

"use client";

import { useEffect } from "react";

export default function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio("/sounds/typewriter.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {
      /* user has not interacted */
    });

    return () => audio.pause();
  }, []);

  return null;
}
