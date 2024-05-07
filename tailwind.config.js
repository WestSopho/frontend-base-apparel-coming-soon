/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            "F8BFBF": "#F8BFBF",
            "EE8B8B": "#EE8B8B",
            "423A3A": "#423A3A",
            "CE9898": "#CE9898",
            "FFF4F4": "#FFF4F4",
        },
        fontFamily:{
            "josefin": "Josefin Sans, sans-serif",
        }
      },
    },
    plugins: [],
  }