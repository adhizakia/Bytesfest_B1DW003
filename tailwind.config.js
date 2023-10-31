/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          gray: "#292D32",
          black: "#15151E",
          red: "#FF1E00",
        },
      },
      fontFamily: {
        ethnocentric: ["ethnocentric", "sans-serif"],
      },
    },
  },
  plugins: [],
};
