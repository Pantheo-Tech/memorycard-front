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
      },
    },
  },
  plugins: [],
};
