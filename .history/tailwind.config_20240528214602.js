/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    
    extend: {},
  },
  plugins: [],
};

