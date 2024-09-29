/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
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
