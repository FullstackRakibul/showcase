/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        product: '0 0 .8rem var(--tw-shadow-color, #000)',
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'container-color': 'var(--container-color)',
        'button-color': 'var(--button-color)',
        bgcolor: 'var(--bgcolor)',
        'button-hover-color': 'var(--button-hover-color)',
        'primary-font-color': 'var(--primary-font-color)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
};
