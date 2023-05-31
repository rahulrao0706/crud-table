/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': {transform: 'translateX(100%)'},
        },
      },

      animation: {
        shimmer: 'shimmer 2.0s infinite',
      },
    },
  },
  plugins: [],
}

