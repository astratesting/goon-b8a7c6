import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#7c3aed",
          coral: "#f97316",
          honey: "#f59e0b",
          cream: "#fefce8",
          "violet-dark": "#6d28d9",
          "violet-light": "#a78bfa",
          "coral-dark": "#ea580c",
          "coral-light": "#fb923c",
          "honey-dark": "#d97706",
          "honey-light": "#fbbf24",
        },
        surface: {
          DEFAULT: "#fefce8",
          warm: "#fff7ed",
          card: "#ffffff",
          muted: "#f5f3f0",
        },
        ink: {
          DEFAULT: "#1e1b1b",
          muted: "#6b6260",
          light: "#9e9593",
        },
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
