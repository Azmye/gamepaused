/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#00ADB5',
        secondary: '#393E46',
      },
    },
  },
  plugins: [],
};
