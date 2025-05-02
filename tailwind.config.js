/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      "./templates/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        text: "#F7F7F7",
        accent1: "#FF5722",
        accent2: "#673AB7",
        hover: "#FFEB3B",
      },
    },
  },
  plugins: [],
}

