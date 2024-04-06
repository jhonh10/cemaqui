/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8ea38",
        secondary: "#eef0f3",
        tertiary: "#FF8C00",
        whatsapp: "#075E54",
        dark: "#000000",
        light: "#FFFFFF",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
        circle: "circle",
        decimal: "decimal",
        disc: "disc",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
