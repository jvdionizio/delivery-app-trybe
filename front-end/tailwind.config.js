module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      '2md': 28,
      lg: 32,
      xl: 40,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',

      red: '#FF5151',

      white: {
        smoked: '#FFFEF9',
        1000: '#FFF',
      },

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      blue: '#056DF2',

      yellow: {
        500: '#F29F05',
        600: '#F28705',
        200: '#EAC582',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        bowlby: 'Bowlby One SC, sans-serif',
      },
    },
  },
  plugins: [],
};
