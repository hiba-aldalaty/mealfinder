/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        title: `77px;`,
        paragraph: `30px;`,
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#FA649D",
        orange: "#F6A96E",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#B4B3B3",
        "gray-light": "#d3dce6",
        white: "white",
      },
    },
  },
  plugins: [],
};
