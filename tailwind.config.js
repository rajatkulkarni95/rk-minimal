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
            },
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
            },
        },
        fontFamily: {
            mono: ["Roboto Mono", ...fontFamily.mono],
        },
    },
    plugins: [],
};