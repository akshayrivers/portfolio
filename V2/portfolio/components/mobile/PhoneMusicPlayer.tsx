"use client";

import { useState } from "react";
import { usePhoneMusic } from "./PhoneMusicProvider";

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function EqualizerBars({
  playing,
  className = "",
}: {
  playing: boolean;
  className?: string;
}) {
  if (!playing) return null;
  return (
    <div className={`flex items-end gap-1 h-6 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-1 bg-green-400/70 rounded-sm animate-equalizer"
          style={{
            animationDelay: `${i * 100}ms`,
            height: `${20 + Math.random() * 40}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function PhoneMusicPlayer({
  compact = false,
  fixed = false,
}: {
  compact?: boolean;
  fixed?: boolean;
}) {
  const {
    playing,
    progress,
    currentTime,
    duration,
    volume,
    toggle,
    next: nextTrack,
    prev: prevTrack,
    seek,
    setVolume,
    setTrack,
  } = usePhoneMusic();

  const [expanded, setExpanded] = useState(!compact);
  const [currentQueueIndex, setCurrentQueueIndex] = useState(0);

  const queue = [
    {
      id: "1",
      title: "Hate Yourself",
      artist: "TV Girl",
      artwork: "/assets/thumbnails/spider-man.jpg",
      duration: 267,
      url: "/sounds/hateyourself.mp3",
      profile: "spiderman",
    },
    {
      id: "2",
      title: "Ellie's Theme",
      artist: "Gustavo Santaolalla",
      artwork: "/assets/thumbnails/ellie.jpg",
      duration: 190,
      url: "/sounds/ellie.mp3",
      profile: "ellie",
    },
    {
      id: "3",
      title: "Sekiro Soundtrack",
      artist: "Yuka Kitamura",
      artwork: "/assets/thumbnails/sekiro.jpg",
      duration: 245,
      url: "/sounds/explosion.mp3",
      profile: "sekiro",
    },
    {
      id: "4",
      title: "Typewriter",
      artist: "Unknown",
      artwork: "/assets/thumbnails/musashi.jpg",
      duration: 180,
      url: "/sounds/typewriter.mp3",
      profile: "musashi",
    },
    {
      id: "5",
      title: "My Old Ways",
      artist: "Unknown",
      artwork: "/assets/thumbnails/coming-soon.jpg",
      duration: 210,
      url: "/sounds/myoldways.mp3",
      profile: "manglu",
    },
    {
      id: "6",
      title: "Red Sky",
      artist: "Unknown",
      artwork: "/assets/thumbnails/red-sky.jpg",
      duration: 230,
      url: "/sounds/explosion.mp3",
      profile: "redsky",
    },
  ];

  const track = queue[currentQueueIndex];
  const isPlaying = playing;

  const handleNext = () => {
    nextTrack();
    setCurrentQueueIndex((prev) => (prev + 1) % queue.length);
  };

  const handlePrev = () => {
    prevTrack();
    setCurrentQueueIndex((prev) => (prev - 1 + queue.length) % queue.length);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const baseStyles =
    "bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl transition-all duration-500 ease-out";
  const fixedStyles = fixed ? "fixed bottom-0 left-0 right-0 z-40" : "relative";
  const expandedStyles = expanded
    ? "max-h-[500px] w-full max-w-md"
    : "h-14 w-full max-w-md";

  return (
    <div
      className={`${baseStyles} ${fixedStyles} ${expandedStyles} overflow-hidden transition-all duration-500 ease-out ${expanded ? "shadow-2xl" : "shadow-lg"}`}
      role="region"
      aria-label="Music player"
    >
      {!expanded && (
        <div className="flex items-center justify-between h-14 px-4 w-full max-w-md">
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center gap-3 w-full text-left touch-manipulation"
          >
            <div
              className={`w-10 h-10 rounded-lg overflow-hidden border border-zinc-700 ${playing ? "animate-pulse-subtle" : ""}`}
            >
              <img
                src={track.artwork}
                alt={track.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-mono text-sm font-medium truncate">
                {track.title}
              </p>
              <p className="text-zinc-500 text-xs truncate">{track.artist}</p>
            </div>
            <div className="flex items-center gap-2">
              <EqualizerBars playing={playing} />
              <button
                onClick={toggle}
                className="p-2.5 rounded-full bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors touch-manipulation"
                aria-label={playing ? "Pause" : "Play"}
                style={{ minWidth: "40px", minHeight: "40px" }}
              >
                {playing ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </button>
        </div>
      )}

      {expanded && (
        <div className="flex flex-col h-full">
          {/* Collapse Button */}
          <div className="flex justify-start p-2">
            <button
              onClick={() => setExpanded(false)}
              className="p-1.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors touch-manipulation"
              aria-label="Collapse"
              style={{ minWidth: "36px", minHeight: "36px" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>

          {/* Album Artwork */}
          <div className="flex justify-center pt-2">
            <div
              className={`relative w-48 h-48 rounded-xl overflow-hidden ${playing ? "animate-pulse-subtle" : ""} shadow-2xl`}
            >
              <img
                src={track.artwork}
                alt={track.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Track Info */}
          <div className="px-4 pb-2 text-center">
            <h3 className="text-white font-mono text-lg font-medium truncate">
              {track.title}
            </h3>
            <p className="text-zinc-400 text-sm truncate mt-1">
              {track.artist}
            </p>
            <p className="text-zinc-500 text-xs truncate mt-0.5">
              Profile: {track.profile}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 font-mono w-12 text-left">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress * 100}
                onChange={(e) => seek(parseFloat(e.target.value) / 100)}
                className="flex-1 h-1.5 appearance-none bg-zinc-800 rounded-full cursor-pointer accent-green-400"
                aria-label="Seek"
              />
              <span className="text-[10px] text-zinc-500 font-mono w-12 text-right">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 px-4 pb-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors touch-manipulation"
              aria-label="Previous"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button
              onClick={toggle}
              className={`p-3.5 rounded-full bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors touch-manipulation ${playing ? "animate-pulse-subtle" : ""}`}
              aria-label={playing ? "Pause" : "Play"}
              style={{ minWidth: "56px", minHeight: "56px" }}
            >
              {playing ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors touch-manipulation"
              aria-label="Next"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Volume & Queue Toggle */}
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVolume(volume > 0 ? 0 : 0.3)}
                className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors touch-manipulation"
                aria-label={volume > 0 ? "Mute" : "Unmute"}
                style={{ minWidth: "40px", minHeight: "40px" }}
              >
                {volume > 0 ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={(e) => setVolume(parseFloat(e.target.value) / 100)}
                className="w-20 h-1.5 appearance-none bg-zinc-800 rounded-full cursor-pointer accent-green-400"
                aria-label="Volume"
              />
            </div>
          </div>

          {/* Queue */}
          <div className="px-4 pb-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                Queue
              </h4>
              <span className="text-[10px] text-zinc-500">
                {queue.length} tracks
              </span>
            </div>
            <div className="max-h-40 overflow-y-auto space-y-1">
              {queue.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQueueIndex(i);
                    setTrack(
                      q.profile as
                        | "engineer"
                        | "babli"
                        | "hacker"
                        | "writer"
                        | "manglu"
                        | "bindi",
                    );
                  }}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors touch-manipulation ${
                    i === currentQueueIndex
                      ? "bg-green-500/10 border border-green-500/30"
                      : "bg-zinc-800/50 hover:bg-zinc-800"
                  }`}
                  style={{ minHeight: "44px" }}
                >
                  <img
                    src={q.artwork}
                    alt={q.title}
                    className="w-10 h-10 rounded-lg object-cover border border-zinc-700"
                  />
                  <div className="flex-1 min-w-0 text-left">
                    <p
                      className={`text-white font-mono text-xs font-medium truncate ${i === currentQueueIndex ? "text-green-400" : ""}`}
                    >
                      {q.title}
                    </p>
                    <p className="text-zinc-500 text-[10px] truncate">
                      {q.artist}
                    </p>
                  </div>
                  {i === currentQueueIndex && (
                    <EqualizerBars playing={playing} className="w-6" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="px-4 pb-3 border-t border-zinc-800">
            <p className="text-[9px] text-zinc-600 text-center font-mono">
              ⚠ Music credits belong to respective artists. Used for portfolio
              demonstration only.
            </p>
          </div>
        </div>
      )}

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="absolute inset-0 w-full h-full touch-manipulation"
          aria-label="Expand player"
        />
      )}
    </div>
  );
}
