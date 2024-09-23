/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    '!./node_modules/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bree Serif', 'serif'],
        serif: ['Bree Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

