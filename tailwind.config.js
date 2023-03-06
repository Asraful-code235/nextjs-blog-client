/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#3e1e68',
        'semi-pink': '#ffacac',
        'semi-purple': '#562990',
        'extra-dark-purple': '#261340',
        'extra-light-pink': '#ffdfdf',
        'dark-pink': '#ff7979',
      },
    },
  },
  plugins: [],
};
