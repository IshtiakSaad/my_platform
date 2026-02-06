/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: "#FAC638",            // The signature yellow
                "background-light": "#f8f8f5", // The paper texture white
                "background-dark": "#231e0f",  // Deep warm dark
                "editorial-text": "#1C1917",   // Sharp black
                "editorial-muted": "#57534E",  // Muted gray-brown
                "editorial-border": "#E7E5E4"  // Light border
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}