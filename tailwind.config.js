/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      height: {
        90: '90vh',
      },
      
      },
    },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
