/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Mukta", "ui-sans-serif", "system-ui"],
      fsans: ["Chivo", "ui-sans-serif", "system-ui"],
      bserif: ["IBM Plex Serif", "serif"],
    },
    extend: {
      backgroundImage: {
        logo: "url(./src/img/logo.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
