/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        fontFamily: {
            Poppins: ["Poppins, sans-serif"],
        },
        screens: {
            sm: { min: "320px" },
            md: { min: "481px" },
            lg: { min: "769px" },
            xl: { min: "1025px" },
            "2xl": { min: "1201px" },
            "3xl": { min: "1440px" },
        },

        extend: {},
    },
    plugins: [],
};
