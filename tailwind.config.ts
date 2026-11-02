import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sebez: {
          50: "#faf8f2",
          100: "#f3ede0",
          200: "#e6d7bc",
          300: "#d5bc91",
          400: "#c4a069",
          500: "#b58748",
          600: "#9d6e3c",
          700: "#7e5332",
          800: "#68442d",
          900: "#573a28",
          950: "#321f15",
        },
        market: {
          primary: "#059669", // Emerald green for fresh commerce
          accent: "#d97706",  // Warm amber for barter swaps and top-ups
          dark: "#0f172a",    // Slate dark
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};

export default config;
