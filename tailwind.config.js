/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#775DA6",
        secondary: {
          100: "#70B6C1",
          200: "#ABDFE7",
        },
        fadedPurple: "#775DA6",
        main_content: "#FAFAFA",
        statusActive: "#70B6C1",
        statusInactive: "#F9837C",

        //new colors
        dark: {
          900: "#31374D",
          800: "#394059",
          700: "#0A112F",
          600: "2E343E",
        },
        secondary: {
          100: "#B9BFD3",
          200: "#f7f7f9",
        },
        customBlue: "#1890FF",
      },

      fontFamily: {
        InterRegular: ["Inter-Regular", "sans-serif"],
        InterBold: ["Inter-Bold", "sans-serif"],
        InterMedium: ["Inter-Medium", "sans-serif"],
        InterSemiBold: ["Inter-SemiBold", "sans-serif"],
        AntonRegular: ["Anton-Regular", "sans-serif"],
      },

      boxShadow: {
        custom: "0px 10px 20px 0px rgba(18, 38, 63, 0.03)",
      },
    },
  },
  plugins: [],
};
