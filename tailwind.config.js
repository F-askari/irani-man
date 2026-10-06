/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#0E8A8A",
        cream: "#D7C49A",
        navy: "#0B2D5B",
        terracotta: "#B55234",
        gold: "#D4A017",
        canvas: "#F7F1F3",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
