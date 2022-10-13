/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      'midnight': '#0E192F',
      'blue': '#2C2EFE',
      'blue-light': '#0A97FD',
      'gray': '#fC9D6ED',
      'byron-gray': '#C9D6ED'
      },
    },
  },
  plugins: []
};
