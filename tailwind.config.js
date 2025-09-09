/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "#000000", // black
        surface: "#111111", // dark gray for cards
        textPrimary: "#ffffff", // white
        textSecondary: "#9ca3af", // gray-400
      },
    },
  },
};
