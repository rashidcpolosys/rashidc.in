/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'

const config = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
}

export default config
