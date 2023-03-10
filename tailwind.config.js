/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                shantell: ['var(--font-shantell)'],
                merri: ['var(--font-merri)'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
