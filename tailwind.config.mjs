/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["Lufga", "sans-serif"], // Custom font
      },
      colors: {
        white: "#FFFFFF",
        mischka: "#CDD4DD",
        electric: "#7446F5",
        codGray: "#111111",
      },
    },
  },
  plugins: [],
};
