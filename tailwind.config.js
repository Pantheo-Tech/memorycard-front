/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
      },
      colors: {
        background: "var(--background)",
        red: "var(--red)",
      },
      textColor: {
        primaryText: "var(--primary-text)",
      },
    },
  },
  plugins: [],
};

