module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      wrapper: "506px",
      product: "600px",
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      width: {
        zoomProduct: "65rem",
        product: "37.5rem",
        wrapperProduct: "225rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
