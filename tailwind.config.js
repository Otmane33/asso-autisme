/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4D90",
        secondary: "#FFB81C",
        accent: "#2EC4B6",
        "text-dark": "#333333",
        "text-light": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        arabic: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
