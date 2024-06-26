/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        clouds:
          "url('https://images.unsplash.com/photo-1566044366987-6de6ca566441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlYWNlZnVsfGVufDB8fDB8fHww')",
      },
      colors: {
        text: "#0c1817",
        bg: "#f1f8f6",
        primary: "#59aba3",
        secondary: "#aaa7d3",
        accent: "#9882c0",
        text_dark: "#e7f3f2",
        bg_dark: "#070e0c",
        primary_dark: "#54a69e",
        secondary_dark: "#2f2c58",
        accent_dark: "#553f7d",
      },
      fontFamily: {
        oregano: ["oregano", "cursive"],
        yanone: ["yanone", "sans-serif"],
      },
    },
  },
  plugins: [],
};
