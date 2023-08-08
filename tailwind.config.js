/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#FECB52",
        light: "#FFF3CC",
        dark: "#CBAE00",
        neutral: "#A0A0A0"
      }
    },
  },
  plugins: [],
}

