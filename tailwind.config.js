/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'topg-black': '#000000',
        'topg-dark': '#0a0a0a',
        'topg-gold': '#FFD700',
        'topg-red': '#DC143C',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}