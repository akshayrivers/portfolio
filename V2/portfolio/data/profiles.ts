import { themes } from "./themes";

export type ProfileKey = keyof typeof themes;

export const profiles: Record<ProfileKey, { name: string; emoji: string; description: string; tagline: string }> = {
  spiderman: {
    name: "Spider-Man",
    emoji: "🕷️",
    description: "Penetration tester, Rust developer, and terminal enthusiast. Building tools that break things so they can be fixed.",
    tagline: "Building the web, one exploit at a time",
  },
  ellie: {
    name: "Ellie",
    emoji: "🦎",
    description: "Full-stack developer with a passion for clean code and minimal aesthetics. Creating experiences that feel right.",
    tagline: "Clean code, clean design",
  },
  sekiro: {
    name: "Sekiro",
    emoji: "⚔️",
    description: "Security researcher and systems programmer. Obsessed with low-level architecture and encryption.",
    tagline: "Breaking systems to understand them",
  },
  musashi: {
    name: "Musashi",
    emoji: "🍵",
    description: "Writer, thinker, and philosopher. Crafting narratives that blur the line between reality and code.",
    tagline: "Where code meets contemplation",
  },
  manglu: {
    name: "Manglu",
    emoji: "🌿",
    description: "Open source contributor and community builder. Connecting people through technology and shared purpose.",
    tagline: "Building bridges, not walls",
  },
  redsky: {
    name: "Red Sky",
    emoji: "🌅",
    description: "Creative developer and visual artist. Merging aesthetics with functionality to create something unforgettable.",
    tagline: "Art meets engineering",
  },
};
