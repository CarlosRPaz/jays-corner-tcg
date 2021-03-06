const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./{components,pages}/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-color': "#D104E3",
        'primary-dark': "#171717",
        'secondary-dark': "#252525",
        'product-dark': "#363636",
        'text-primary-light': "#F5F5F5",
        clementine: "#EF7300",
        tumbleweed: "#D9A876",
        "hawkes-blue": "#C7DDFD",
        asparagus: "#789750",
        goldenrod: "#FFCE70",
        black: "#150703",
        "faded-black": "rgba(21,7,3,0.6)",
        "ecru-white": "#FAF8F3",
        "white-rock": "#E8E0CF",
      },
      height: {
        112: "28rem",
      },
      rotate: {
        '-25': '-25deg',
      },
      boxShadow: {
        'thank-you': '-2.63365px 5.92572px 8.55938px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["'EB Garamond'", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      borderRadius: ["hover"],
      fontStyle: ["hover"],
      textColor: ["checked"],
    },
  },
};
