/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        grayDark: "#020005",
        grayDark2: "#131528",
        grayB1: "#B1B5C1",
        primary: "#1E50FF",
      },
      fontFamily: {
        sans: ["Space Grotesk", "san-serif"],
      },
    },
  },
  plugins: [],
};
