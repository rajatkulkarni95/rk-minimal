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
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        blinking: "blinking 0.75s cubic-bezier(0.4, 0, 0.6, 1) 3",
        slideDownAndFade: "slideDownAndFade 0.5s ease forwards",
        spin10: "spin 10s linear infinite",
        spin8: "spin 8s linear infinite",
        spin6: "spin 6s linear infinite",
        spin4: "spin 4s linear infinite",
      },
    },
    fontFamily: {
      sans: ["Karla", ...fontFamily.sans],
    },
  },
  plugins: [],
};
