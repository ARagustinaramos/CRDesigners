import { defineConfig } from 'vite'
import colors from 'tailwindcss/colors'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        emerald: colors.emerald,
        rose: colors.rose,
        yellow: colors.yellow,
        blue: colors.blue,
       
      },
    },
  },
  plugins: [],
})

