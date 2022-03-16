const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "plex-sans": ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                encacap: {
                    300: "#C0FCF7",
                    500: "#0CD4CC",
                    700: "#009C96",
                },
            },
        },
    },
    plugins: [],
};