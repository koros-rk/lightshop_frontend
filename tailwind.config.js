/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-brown': '#735C5D',
        'nav-deepblue': '#22223B',
        'font-deepblue': '#263859',
        'activation-yellow': '#FFDD93',
        'btn-white': '#F7F9FB',
      },
      fontFamily: {
        'bitter': ['bitter', 'sans-serif'],
        'melodrama': ['melodrama', 'sans-serif']
      },
      fontSize: {
        '5xl': ['2.5rem', {
          lineHeight: '3rem',
          fontWeight: '500'
        }],
      }
    },
  },
  plugins: [],
}

