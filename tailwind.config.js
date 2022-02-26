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
            },
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
                blinking: "blinking 0.75s cubic-bezier(0.4, 0, 0.6, 1) 4",
            },
        },
        fontFamily: {
            mono: ["Roboto Mono", ...fontFamily.mono],
        },
    },
    plugins: [],
};