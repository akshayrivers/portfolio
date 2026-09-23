"use client";

import { useEffect, useRef, useState } from "react";

export type MusicTrack = {
  src: string;
  title: string;
  artist: string;
  art: string;
};

type Props = {
  track: MusicTrack;
  onNext: () => void;
  onPrev: () => void;
};

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ track, onNext, onPrev }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.3);

  useEffect(() => {
    if (!track.src) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = track.src;
    } else {
      audioRef.current = new Audio(track.src);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    audio.play().catch(() => setPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track.src]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = value * duration;
    setProgress(value);
    setCurrentTime(audio.currentTime);
  };

  const setVolume = (value: number) => {
    const clamped = Math.max(0, Math.min(1, value));
    if (audioRef.current) audioRef.current.volume = clamped;
    setVolumeState(clamped);
  };

  return (
    <div
      className="fixed bottom-4 right-6 z-50 w-[320px] bg-[#161a1f]/85 rounded-lg border border-zinc-500/60 text-white font-mono shadow-lg overflow-hidden"
      style={{ backdropFilter: "blur(6px)" }}
      role="region"
      aria-label="Music player"
    >
      <div className="flex gap-3 p-3">
        {/* Left cell: album cover */}
        <div
          className={`w-16 h-16 rounded-md overflow-hidden border border-zinc-500/40 shrink-0 ${
            playing ? "animate-pulse" : ""
          }`}
        >
          <img
            src={track.art}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right cell: info + controls */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold truncate">{track.title}</p>
          <p className="text-[11px] text-zinc-400 truncate">{track.artist}</p>

          <div className="flex items-center gap-2 mt-1.5">
            <button
              onClick={onPrev}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 transition"
              aria-label="Previous track"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button
              onClick={toggleAudio}
              className="p-1.5 rounded-full bg-zinc-500/20 hover:bg-zinc-500/30 text-zinc-400 transition"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={onNext}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 transition"
              aria-label="Next track"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(volume * 100)}
              onChange={(e) => setVolume(Number(e.target.value) / 100)}
              className="w-16 h-1 appearance-none bg-zinc-700 rounded-full cursor-pointer accent-zinc-400"
              aria-label="Volume"
            />
          </div>

          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="text-[10px] text-zinc-500 w-8">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(progress * 100)}
              onChange={(e) => seek(Number(e.target.value) / 100)}
              className="flex-1 h-1 appearance-none bg-zinc-700 rounded-full cursor-pointer accent-zinc-400"
              aria-label="Seek"
            />
            <span className="text-[10px] text-zinc-500 w-8 text-right">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: copyright note */}
      <div className="px-3 pb-2 border-t border-zinc-800">
        <p className="text-[9px] text-zinc-600 text-center font-mono pt-1.5">
          ⚠ Music credits belong to respective artists. Used for portfolio demonstration only.
        </p>
      </div>
    </div>
  );
}
