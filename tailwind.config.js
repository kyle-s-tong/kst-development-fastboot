/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./app/**/*.hbs'],
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
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.375rem',
      },
    },
  },
  plugins: [],
};
