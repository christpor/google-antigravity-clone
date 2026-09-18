/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A73E8',
          blueHover: '#1557B0',
          blueLight: '#E8F0FE',
          red: '#FC413D',
          yellow: '#FBBC04',
          green: '#00B95C',
          dark: '#121317',
          surface: '#F8F9FA',
          border: 'rgba(0,0,0,0.08)',
          textSec: '#45474D',
        }
      },
      fontFamily: {
        sans: ['Google Sans Flex', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        code: ['Google Sans Code', 'monospace'],
      },
      borderRadius: {
        'pill': '9999px',
        'xl': '24px',
        '2xl': '32px',
      }
    },
  },
  plugins: [],
}
