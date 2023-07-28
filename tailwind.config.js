/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'bg-100': '#1E1E1E',
      'bg-200': '#2D2D2D',
      'bg-300': '#454545',
      'text-primary': '#ffffff',
      'text-secondary': '#9E9E9E',
      'text-new': '#ECECEC',
      'accent-100': '#006FFF',
      'accent-200': '#E1FFFF',
      'primary-100': '#0085FF',
      'primary-200': '#69B4FF',
      'primary-300': '#E0FFFF',
    },
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      monument: ['Monument', 'serif'],
    },
  },
  plugins: [],
}

