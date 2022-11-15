const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        proseSeondary: "var(--color-text-prose-secondary)",
        tertiary: "var(--color-text-tertiary)",
        icon: "var(--color-icon)",
        appPrimary: "var(--color-app-primary)",
        cta: "var(--color-text-cta)",
        ...colors,
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        tertiary: "var(--color-bg-tertiary)",
        accent: "var(--color-bg-accent)",
        extreme: "var(--color-bg-extreme)",
        appPrimary: "var(--color-app-primary)",
        sidebar: "var(--color-app-sidebar)",
        code: "var(--color-bg-code)",
        cta: "var(--color-bg-cta)",
        core: "var(--color-bg-core)",
        ...colors,
      },
      borderColor: {
        theme: "var(--color-border)",
        primary: "var(--color-border-primary)",
        ...colors,
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
