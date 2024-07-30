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
      hero_l: "url('/assets/hero/hero01-02.jpg')",
      hero_s: "url('/assets/hero/hero02-02_mobile.jpg')",
      hero: "url('/assets/hero/hero02-02_s.jpg')",
      hero_mobile: 
    },
    extend: {
      colors: {
        darkBg: {
          DEFAULT: "#06252b",
        },
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
      boxShadow: {
        "3xl": "10px 10px 30px -15px rgba(255, 255, 255, 0.3)",
      },
      backgroundImage: {
        bg_gradient: "linear-gradient(180deg, #013d5a 0%, #06252b 100%)",
        bg_gradient_reverse:
          "linear-gradient(180deg, #03252f 0%, #013d5a 100%)",
      },
    },
    plugins: [],
  },
};

