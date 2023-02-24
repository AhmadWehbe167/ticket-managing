/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mini: "375px",
      mb: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#3C4856",
        secondary: "#5C96CC",
        grey: "#777777",
        danger: "#DF677A",
        success: "#2AB688",
      },
      fontFamily: {
        inter: ["Inter"],
        opensans: ["Open Sans"],
      },
    },
    plugins: [],
  },
};
