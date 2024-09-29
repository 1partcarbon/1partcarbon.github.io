/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
      },
      colors: {
        onepcblue: "#00a1d4",
      },
    },
  },
  plugins: [],
};
