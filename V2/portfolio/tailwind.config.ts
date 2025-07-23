import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#39FF14",
        bgDark: "#0d0d0d",
        glitchPink: "#ff007c",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "glitch-h": {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-1px)" },
          "40%": { transform: "translateX(1px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
        "glitch-v": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-1px)" },
          "50%": { transform: "translateY(1px)" },
          "75%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0)" },
        },
        "pulse-fade": {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.02)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        "glitch-h": "glitch-h 0.8s steps(2, start) infinite",
        "glitch-v": "glitch-v 1.2s steps(2, start) infinite",
        "pulse-fade": "pulse-fade 2.5s ease-in-out infinite",
      },
    },
  },
  // Safelist any utility classes you plan to toggle dynamically in JS (optional but helpful)
  safelist: [
    "animate-shake",
    "animate-glitch-h",
    "animate-glitch-v",
    "animate-pulse-fade",
    "will-change-transform",
    "will-change-opacity",
  ],
  plugins: [require("@tailwindcss/typography")],
};

export default config;
