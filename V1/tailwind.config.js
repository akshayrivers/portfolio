/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 2s ease infinite alternate-reverse',
        stack: 'stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards'
      },
      keyframes: {
        glitch: {
          '0%': {
            textShadow: '-2px 3px 0 red, 2px -3px 0 blue',
            transform: 'translateX(8px)',
          },
          '50%': {
            textShadow: '2px -3px 0 red, -2px 3px 0 blue',
            transform: 'translateX(-8px)',
          },
          '100%': {
            textShadow: 'none',
            transform: 'none',
          }
        },
        stack: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%)',
            textShadow: '-2px 3px 0 red, 2px -3px 0 blue',
          },
          '60%': {
            opacity: '0.5',
            transform: 'translateX(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
            textShadow: 'none',
          }
        }
      }
    },
  },
  plugins: [],
}
