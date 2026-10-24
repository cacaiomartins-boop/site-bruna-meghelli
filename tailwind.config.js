/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#F5F2EC",
        areia: "#EBDFD2",
        terra: "#C78464",
        terraescura: "#A5603F",
        marrom: "#6B4A22",
        marromclaro: "#8A6A44",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
