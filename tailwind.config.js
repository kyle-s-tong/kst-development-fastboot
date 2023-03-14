/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{hbs,html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('img/background.webp')",
        divider: "url('img/divider.webp')",
      },
      fontFamily: {
        default: 'Raleway',
      },
      colors: {
        'kst-blue': '#AAD6E6',
        gray: colors.gray,
        red: colors.red,
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.375rem',
      },
    },
  },
  plugins: [],
};
