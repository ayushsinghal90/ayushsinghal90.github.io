/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "surface-primary": "#0E0E0E",
      "surface-secondary": "#151515",
      "surface-secondary-opacity": "#151515",
      "surface-tertiary": "#262626",

      "surface-brand": "#FDBA72",
      "surface-brand-secondary": "#B9925F",
      "surface-invert": "#E5E5E5",

      "t-primary": "#F5F5F5",
      "t-secondary": "#A3A3A3",
      "t-invert": "#0E0E0E",

      "b-primary": "#737373",
      "b-secondary": "#404040",
    },
    fontFamily: {
      arvo: ["Arvo", "serif"],
      "martel-sans": ["Martel Sans", "sans-serif"],
      zodiak: "Zodiak",
      "zodiak-sans": ['"Zodiak"', '"sans-serif"'],
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
