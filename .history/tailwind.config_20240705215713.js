/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Jost",
    },
    backgroundImage: {
      hero: "url('/assets/hero/hero01-02.jpg')",
      // grid: "url('/assets/grid.png')",
    },
    extend: {
      colors: {
        darkBg: 
        primary: {
          DEFAULT: "#013d5a",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};

