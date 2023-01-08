/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackColor: "#404040",
        blueColor: "#4E69FE",
        whiteColor: "#FFFFFF",
        grayColor: "#F8F8F8",
      },
      fontFamily: {
        helveticNeue: ["Helvetic Neue"],
      },
      fontSize: {
        "4xl": ["2rem", "3rem"],
        "5xl": ["2.5rem", "3.5rem"],
      },
    },
  },
  plugins: [],
};
