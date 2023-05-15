/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
  extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        nunito: "'Nunito Sans', serif", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'abstract-background': "linear-gradient(rgba(39, 39, 39, 0.9), rgba(15, 15, 15, 0.8)), url('/build/img/background.jpg')"
      },
      animation: {
        'appear': 'appear .5s ease-in forwards, bouncing .7s ease-in-out 1s infinite',
      },
      keyframes: {
        appear: {
          '0%': {
            scale: '0'
          },
          '100%': {
            scale: '1'
          }
        },

        bouncing: {
          '0%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0px)'}
          },
      }
    },
    plugins: [],
  }
}

