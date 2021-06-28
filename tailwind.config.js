module.exports = {
  purge: ["./src/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cm: ["Computer Modern Serif", "serif"],
    },
    extend: {
      colors: {
        gray: {
          950: '#101010',
        }
      },
      backgroundImage: (theme) => ({
        "ocean": "url('/public/images/ocean.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
