const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                encacap: colors.blue,
            },
        },
    },
    plugins: [],
};
