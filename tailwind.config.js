/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2447',
        lightFont: '#E6E6E6',
        darkFont: '#1A1A1A',
        secondary: '#19376D',
        tertiary: '#A5D7E8'
      }
    },
  },
  plugins: [],
}

