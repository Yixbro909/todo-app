/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts, js}"],
  theme: {
    extend: {
      listStyleType: {
        romanUpper: "upper-roman",
        romanLower: "lower-roman",
        square: "square",
      },
    },
  },
  plugins: [],
};
