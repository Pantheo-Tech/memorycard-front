/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
        stalinist: ["Stalinist One", "cursive"],
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        red: "var(--red)",
        buttonHover: "var(--button-hover)",
      },
      textColor: {
        primaryText: "var(--primary-text)",
      },
      backgroundImage: {
        gradientRedToLight: "linear-gradient(to right, #EE4D50, #edaaab)",
        gradientRedToBlack: "linear-gradient(to right, #EE4D50, #000)",
        gradientBlackToRed: "linear-gradient(to right, #000, #EE4D50)",
        radialGradient: "radial-gradient(circle, var(--tw-gradient-stops))",
        "bg-footer": "url('../../src/assets/img/background-footer.png')",
        'custom-gradient-banner': 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)',
        'custom-gradient-bottom-banner': 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 1) 76%)',
      },
      animation: {
        expand: "expand 0.5s ease-in-out forwards",
        collapse: "collapse 0.5s ease-in-out forwards",
      },
      keyframes: {
        expand: {
          "0%": { height: "0px", opacity: "0" },
          "100%": { height: "auto", opacity: "1" },
        },
        collapse: {
          "0%": { height: "auto", opacity: "1" },
          "100%": { height: "0px", opacity: "0" },
        },
      },
      screens: {
        "sm-custom": "474px",
      },
    },
  },
  plugins: [],
};
