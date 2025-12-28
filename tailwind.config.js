import tailwindAnimate from "tailwindcss-animate";
export default {

    theme: {
        extend: {
            fontFamily: {
                clash: ['"Clash Display"', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [tailwindAnimate],
};
