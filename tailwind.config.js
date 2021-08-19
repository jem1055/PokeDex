// Importación de color por defecto
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            green: colors.green,
            yellow: colors.amber,


            primary: "#475694",
            secondary: "#00C48C",
            tertiary: "#F22539",
            quartary: "#ECA539",
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}