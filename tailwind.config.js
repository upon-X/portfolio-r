/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      // media queries
      sm: { max: "480px" }, // móbile
      md: { min: "481px", max: "768px" }, // tablet
      lg: { min: "769px", max: "1024px" }, // laptop
      xl: { min: "1025px", max: "1366px" }, // desktop
      "2xl": { min: "1367px" }, // +desktop
    },
    fontSize: {
      // tamaños de letras con su espaciador entre lineas
      ss: ["0.675rem", { lineHeight: "1.0" }],
      sm: ["0.875rem", { lineHeight: "1.1" }],
      base: ["1rem", { lineHeight: "1.2" }],
      lg: ["1.125rem", { lineHeight: "1.3" }],
      xl: ["1.25rem", { lineHeight: "1.4" }],
      "2xl": ["1.5rem", { lineHeight: "1.5" }],
      "3xl": ["1.875rem", { lineHeight: "1.5" }],
      "4xl": ["2.25rem", { lineHeight: "1.6" }],
      "5xl": ["3rem", { lineHeight: "1.6" }],
      "6xl": ["3.75rem", { lineHeight: "1.7" }],
      "7xl": ["4.5rem", { lineHeight: "1.7" }],
      "8xl": ["6rem", { lineHeight: "1.7" }],
      "9xl": ["8rem", { lineHeight: "1.8" }],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: "#0000ff",
        green: "#2c5629",
        gray: "#505050",
        grayLeter: "#7a7a7a",
        brown: "#b49d7a",
        darkGreen: "#666e4d",
        mustard: "#b6bc66",
        khaki: "#a6ae87",
        blackT: "#000000B2",
        red: "#ff0000",
        // Personalizados
        purple: "#9D6FFF",
        purpleDark: "#2F214B",
        darkTheme: "#1d1d1d",
      },
      fontFamily: {
        juliusFF: ["Julius Sans One", "sans-serif"],
        jostFF: ["Jost", "sans-serif"],
        figtreeFF: ["Figtree", "sans-serif"],
        josefinFF: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
