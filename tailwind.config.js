/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./JS/main.js"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        instagram: "Courgette",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
