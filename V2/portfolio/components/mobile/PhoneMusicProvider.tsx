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

const profileOrder: ThemeKey[] = ["spiderman", "ellie", "sekiro", "musashi", "manglu", "redsky"];

function getTrackForProfile(profile: ThemeKey): Track {
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
    currentTrack: getTrackForProfile("spiderman"),
    playing: false,
    progress: 0,
    duration: 0,
    currentTime: 0,
    volume: 0.3,
    userInteracted: false,
  });

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = state.volume;
    audioRef.current.loop = false;

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

    const handlePlay = () => setState((prev) => ({ ...prev, playing: true }));
    const handlePause = () => setState((prev) => ({ ...prev, playing: false }));

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
    };
  }, []);

  const play = useCallback(async () => {
    if (!audioRef.current || !state.currentTrack) return;
    if (!state.userInteracted) return;
    try {
      audioRef.current.src = state.currentTrack.src;
      await audioRef.current.play();
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
    else play();
  }, [play, pause, state.playing]);

  const seek = useCallback((progress: number) => {
    if (!audioRef.current || !state.duration) return;
    const time = progress * state.duration;
    audioRef.current.currentTime = time;
    setState((prev) => ({ ...prev, progress, currentTime: time }));
  }, [state.duration]);

  const setVolume = useCallback((volume: number) => {
    const clamped = Math.max(0, Math.min(1, volume));
    if (audioRef.current) audioRef.current.volume = clamped;
    setState((prev) => ({ ...prev, volume: clamped }));
  }, []);

  const next = useCallback(() => {
    if (!state.currentTrack) return;
    const currentIndex = profileOrder.indexOf(state.currentTrack.profile);
    const nextIndex = (currentIndex + 1) % profileOrder.length;
    const nextProfile = profileOrder[nextIndex];
    const nextTrack = getTrackForProfile(nextProfile);
    setState((prev) => ({ ...prev, currentTrack: nextTrack, progress: 0, currentTime: 0 }));
    if (state.playing) play();
  }, [state.currentTrack, state.playing, play]);

  const prev = useCallback(() => {
    if (!state.currentTrack) return;
    const currentIndex = profileOrder.indexOf(state.currentTrack.profile);
    const prevIndex = (currentIndex - 1 + profileOrder.length) % profileOrder.length;
    const prevProfile = profileOrder[prevIndex];
    const prevTrack = getTrackForProfile(prevProfile);
    setState((prev) => ({ ...prev, currentTrack: prevTrack, progress: 0, currentTime: 0 }));
    if (state.playing) play();
  }, [state.currentTrack, state.playing, play]);

  const setTrack = useCallback((profile: ThemeKey) => {
    const track = getTrackForProfile(profile);
    setState((prev) => ({ ...prev, currentTrack: track, progress: 0, currentTime: 0 }));
    if (state.playing) play();
  }, [state.playing, play]);

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