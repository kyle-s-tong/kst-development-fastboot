/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('img/background.webp')",
      },
    },
  },
  plugins: [],
};
