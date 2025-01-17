/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bubbles-down": "url('img/wh-circles-down2@2x.png')",
        "bubbles-up": "url('img/wh-circles-up2@2x.png')",
      },
      backgroundColor: {
        light: "#f7f1e8",
        onepcblue: "#00a1d4",
        darkgrey: "#313e50",
        onepcgrey: "#565657",
        lightorange: "#ee7a57",
      },
      colors: {
        onepcblue: "#00a1d4",
        darkgrey: "#565657",
        lightorange: "#ee7a57",
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
