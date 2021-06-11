const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        'cool-gray': colors.coolGray,
        'alt-gray': colors.gray,
        'blue-gray': colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
