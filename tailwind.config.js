/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#09090b",
        white: "#fafafa",
        mutedwhite: "#E2E2E2",
        gray: "#27272a",
        mutedgray: "#a1a1aa",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
