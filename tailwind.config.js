/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                18: '4.5rem',
            },
            height: {
                18: '4.5rem',
            },
            minHeight: {
                18: '4.5rem', // Clase personalizada min-h-18 con valor de 4.5rem
            },
            padding: {
                18: '4.5rem',
            },
        },
    },
    plugins: [],
};
