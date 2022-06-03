const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      hover: "#000",
    },
  },
  plugins: [],
};
