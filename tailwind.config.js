/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0A",
        ink: "#111110",
        card: "#131210",
        gold: { DEFAULT: "#D4AF37", light: "#F0D98A", dark: "#C29A2B" },
        cream: "#EDE8DF",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
