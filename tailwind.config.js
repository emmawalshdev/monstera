/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.liquid', './**/*.html', './_src/scripts/**/*.js'],
  theme: {
    extend: {
      height: {
        600: '600px',
        650: '650px',
        700: '700px',
        750: '750px',
        800: '800px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

