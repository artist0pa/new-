/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
              custombg:"#0a1f21"
      },
      keyframes: {
        shutterDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        shutter: 'shutterDown 1s ease-in-out forwards',
      },

    },
  },
  plugins: [],
}

