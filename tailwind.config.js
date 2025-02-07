const { Oxanium } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        primary: "#030405",
        accent: {
          DEFAULT: "#00DF82",
          hover: "#429011",
        },
        white: "#F1F7F7",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 1000s linear infinite",
        slider: "slider 12s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "2px #50D001", // Adjust color as needed
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "2px #ffffff",
        },
        ".text-stroke-transparent": {
          "-webkit-text-stroke": "1px transparent",
        },
      });
    },
  ],
};
