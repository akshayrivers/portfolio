import { themes } from "./themes";

export type ProfileKey = keyof typeof themes;

export const profiles: Record<ProfileKey, { name: string; emoji: string; description: string; tagline: string }> = {
  engineer: {
    name: "Engineer",
    emoji: "🕷️",
    description: "Penetration tester, Rust developer, and terminal enthusiast. Building tools that break things so they can be fixed.",
    tagline: "Building the web, one exploit at a time",
  },
  hacker: {
    name: "Hacker",
    emoji: "⚔️",
    description: "Security researcher and systems programmer. Obsessed with low-level architecture and encryption.",
    tagline: "Breaking systems to understand them",
  },
  writer: {
    name: "Writer",
    emoji: "🍵",
    description: "Writer, thinker, and philosopher. Crafting narratives that blur the line between reality and code.",
    tagline: "Where code meets contemplation",
  },
  babli: {
    name: "Babli",
    emoji: "🦎",
    description: "Story co-lead and professional thought-hearer. Owed a rematch tomorrow. (A story-character easter egg.)",
    tagline: "I can hear your thoughts, you know",
  },
  manglu: {
    name: "Manglu",
    emoji: "🌿",
    description: "Swordless knight with a blanked-out name, on a dream-rescue mission. Runs really fast. (A story-character easter egg.)",
    tagline: "A tactical retreat is still correct",
  },
  bindi: {
    name: "Bindi",
    emoji: "🌅",
    description: "Philosophy fragments: anchors, oblivion, and the line between right and justifiable. (Under construction.)",
    tagline: "True death is oblivion",
  },
};
