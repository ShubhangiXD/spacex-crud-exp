/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Kanit': ['Kanit'],
      'Gaseok': ['Gasoek One'],
      'Raleway': ['Raleway'],
    },
    width: {
      "50rem": "50rem",
      "40rem": "40rem",
    },
    colors: {
      orange: "#ff7849",
      green: "#13ce66",
      black: "#000000",
      white: "#fff",
    },
  },
  plugins: [require("daisyui")],
}

