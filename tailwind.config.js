const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "plex-sans": ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: "1rem",
            },
        },
    },
    plugins: [],
};
