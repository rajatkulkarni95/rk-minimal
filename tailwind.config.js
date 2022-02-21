const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {},
        fontFamily: {
            mono: ["IBM Plex Mono", ...fontFamily.mono],
        },
    },
    plugins: [],
};