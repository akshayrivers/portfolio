"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback, useMemo } from "react";
import { themes, ThemeKey } from "@/data/themes";

type Track = {
  src: string;
  title: string;
  artist: string;
  art: string;
  profile: ThemeKey;
};

type MusicState = {
  currentTrack: Track | null;
  playing: boolean;
  progress: number; // 0-1
  duration: number;
  currentTime: number;
  volume: number;
  userInteracted: boolean;
};

type MusicActions = {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (progress: number) => void;
  setVolume: (volume: number) => void;
  setTrack: (profile: ThemeKey) => void;
  setUserInteracted: () => void;
};

type MusicContextValue = MusicState & MusicActions;

const MusicContext = createContext<MusicContextValue | null>(null);

// Single source of truth — same mapping as desktop (themes[profile].music).
// Derived from themes so it can never drift from desktop.
export const profileOrder: ThemeKey[] = Object.keys(themes) as ThemeKey[];

export function getTrackForProfile(profile: ThemeKey): Track {
  const theme = themes[profile];
  return {
    src: theme.music,
    title: theme.musicTitle,
    artist: theme.musicArtist,
    art: theme.musicArt,
    profile,
  };
}

export function PhoneMusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<MusicState>({
    currentTrack: getTrackForProfile("engineer"),
    playing: false,
    progress: 0,
    duration: 0,
    currentTime: 0,
    volume: 0.3,
    userInteracted: false,
  });

  // Create audio element once
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = false;
    audioRef.current.preload = "auto";

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setState((prev) => ({
          ...prev,
          progress: audio.currentTime / audio.duration,
          currentTime: audio.currentTime,
          duration: audio.duration,
        }));
      }
    };

    const handleEnded = () => {
      setState((prev) => ({ ...prev, playing: false, progress: 0 }));
    };

    const handleLoadedMetadata = () => {
      setState((prev) => ({ ...prev, duration: audio.duration }));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.pause();
    };
  }, []);

  // Keep volume in sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = state.volume;
  }, [state.volume]);

  // Direct profile -> music mapping, exactly like desktop:
  // whenever currentTrack changes, swap the audio src.
  // Autoplay the new src only if we were already playing.
  const currentSrc = state.currentTrack?.src;
  const isPlaying = state.playing;
  const hasInteracted = state.userInteracted;
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSrc) return;
    const currentAttr = audio.getAttribute("src");
    if (currentAttr !== currentSrc) {
      audio.src = currentSrc;
      audio.load();
      if (isPlaying && hasInteracted) {
        audio.play().catch((e) => console.warn("Audio play failed:", e));
      }
    }
  }, [currentSrc, isPlaying, hasInteracted]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !state.currentTrack) return;
    if (!state.userInteracted) return;
    // Ensure src is correct without restarting if already correct
    if (audio.getAttribute("src") !== state.currentTrack.src) {
      audio.src = state.currentTrack.src;
      audio.load();
    }
    try {
      await audio.play();
      setState((prev) => ({ ...prev, playing: true }));
    } catch (e) {
      console.warn("Audio play failed:", e);
    }
  }, [state.currentTrack, state.userInteracted]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setState((prev) => ({ ...prev, playing: false }));
  }, []);

  const toggle = useCallback(() => {
    if (state.playing) pause();
    else void play();
  }, [play, pause, state.playing]);

  const seek = useCallback(
    (progress: number) => {
      if (!audioRef.current || !state.duration) return;
      const time = progress * state.duration;
      audioRef.current.currentTime = time;
      setState((prev) => ({ ...prev, progress, currentTime: time }));
    },
    [state.duration]
  );

  const setVolume = useCallback((volume: number) => {
    const clamped = Math.max(0, Math.min(1, volume));
    setState((prev) => ({ ...prev, volume: clamped }));
  }, []);

  const next = useCallback(() => {
    setState((prev) => {
      if (!prev.currentTrack) return prev;
      const currentIndex = profileOrder.indexOf(prev.currentTrack.profile);
      const nextProfile = profileOrder[(currentIndex + 1) % profileOrder.length];
      return {
        ...prev,
        currentTrack: getTrackForProfile(nextProfile),
        progress: 0,
        currentTime: 0,
      };
    });
  }, []);

  const prev = useCallback(() => {
    setState((prev) => {
      if (!prev.currentTrack) return prev;
      const currentIndex = profileOrder.indexOf(prev.currentTrack.profile);
      const prevProfile =
        profileOrder[(currentIndex - 1 + profileOrder.length) % profileOrder.length];
      return {
        ...prev,
        currentTrack: getTrackForProfile(prevProfile),
        progress: 0,
        currentTime: 0,
      };
    });
  }, []);

  const setTrack = useCallback((profile: ThemeKey) => {
    setState((prev) => {
      // No-op if already on this profile's track — keeps desktop-like 1:1 mapping
      if (prev.currentTrack?.profile === profile) return prev;
      return {
        ...prev,
        currentTrack: getTrackForProfile(profile),
        progress: 0,
        currentTime: 0,
      };
    });
  }, []);

  const setUserInteracted = useCallback(() => {
    setState((prev) => ({ ...prev, userInteracted: true }));
  }, []);

  const value = useMemo<MusicContextValue>(() => ({
    ...state,
    play,
    pause,
    toggle,
    next,
    prev,
    seek,
    setVolume,
    setTrack,
    setUserInteracted,
  }), [state, play, pause, toggle, next, prev, seek, setVolume, setTrack, setUserInteracted]);

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export function usePhoneMusic(): MusicContextValue {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("usePhoneMusic must be used within PhoneMusicProvider");
  return ctx;
}

export function usePhoneMusicLoading(): boolean {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("usePhoneMusic must be used within PhoneMusicProvider");
  return ctx.playing;
}