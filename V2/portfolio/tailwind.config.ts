import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        bgDark: '#0d0d0d',
        glitchPink: '#ff007c',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  }
  ,
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
