module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        },
        minHeight: {
            500: "500px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
