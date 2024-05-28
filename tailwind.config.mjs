/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      pink: "#DF8B8E",
      black: "#20221D",
      cream: "#E3D3D1",
      yellow: "#E7CE80",
    },
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", ...defaultTheme.fontFamily.sans],
        condensed: [
          "Fira Sans Extra Condensed",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
