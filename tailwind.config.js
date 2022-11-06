/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        personalRed: "#D91C29",
        personalBlack: "#191929",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
