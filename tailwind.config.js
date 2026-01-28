/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ede6d6',
          400: '#e3d9c3',
          500: '#d4c4a8',
          600: '#c2ae8a',
          700: '#a8926f',
          800: '#8a775d',
          900: '#726350',
          950: '#3d3329',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faefd8',
          300: '#f6e2b8',
          400: '#f0d08f',
          500: '#e9b865',
          600: '#e09e3d',
          700: '#c8822a',
          800: '#a56826',
          900: '#855625',
          950: '#472911',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
