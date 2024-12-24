const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fraktur: ['UnifrakturCook', ...fontFamily.serif],
        serif: ['Playfair Display', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
