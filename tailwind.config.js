/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
        stalinist: ["Stalinist One", "cursive"],
      },
      colors: {
        background: "var(--background)",
        red: "var(--red)",
        buttonHover: "var(--button-hover)",
      },
      textColor: {
        primaryText: "var(--primary-text)",
      },
    },
  },
  plugins: [],
};

