/** @type {import('tailwindcss').Config} */
/* eslint-env es6 */
/* eslint-disable */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  theme: {
    colors: {
      blue: colors.blue,
      cyan: colors.cyan,
      gray: colors.gray,
      green: colors.green,
      lime: colors.lime,
      orange: colors.orange,
      red: colors.red,
      violet: colors.violet,
      white: colors.white,
      yellow: colors.yellow,
      light: 'var(--color-light)',
      'light-active': 'var(--color-light-active)',
      'light-disabled': 'var(--color-light-disabled)',
      dark: 'var(--color-dark)',
      'dark-active': 'var(--color-dark-active)',
      'dark-disabled': 'var(--color-dark-disabled)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
};
