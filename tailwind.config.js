module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cm: ["Computer Modern Serif", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "still-water": "url('/src/images/still-water.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
