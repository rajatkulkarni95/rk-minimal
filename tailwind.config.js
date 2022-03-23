const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        blinking: {
          "50%": {
            opacity: 1,
          },
        },
        slideDownAndFade: {
          "0%": {
            opacity: 0,
            transform: "translateY(-2px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideOut: {
          "0%": {
            right: "-720px",
          },
          "100%": {
            right: "0px",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        blinking: "blinking 0.75s cubic-bezier(0.4, 0, 0.6, 1) 3",
        slideDownAndFade: "slideDownAndFade 0.5s ease forwards",
        slideOut: "slideOut 0.5s ease forwards",
      },
    },
    fontFamily: {
      mono: ["Roboto Mono", ...fontFamily.mono],
    },
  },
  plugins: [],
};
