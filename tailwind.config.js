module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen:{
      
    },
    extend: {
      keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },
          'left': {
            '0%': {
              opacity: '0',
              transform: 'translateX(300px)'
            },
            '70%': {
              opacity: '0.6',
              transform: 'translateX(220px)'
            },
            
          },
          'right': {
            '0%': {
              opacity: '0',
              transform: 'translateX(-300px)'
            },
            '70%': {
              opacity: '0.6',
              transform: 'translateX(-220px)'
            },
            
          },
      },
      animation: {
          'fade-in-down': 'fade-in-down 1s ease-out',
          'fade-in-down2': 'fade-in-down 2s ease-in',
          'left': 'left 2s ease-in',
          'right': 'right 2s ease-in'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
