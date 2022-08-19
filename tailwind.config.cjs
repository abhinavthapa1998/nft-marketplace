/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6414F",
        secondary: "#2255B1",
        secondarydark: "#2B3A51",
        dark: "#0B1A2F",
        white: "#FEFEFE",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
