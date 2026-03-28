/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores oficiais da Itália (ajustadas para brilhar no site)
        "verde-italia": "#009246",
        "vermelho-italia": "#ce2b37",
        dark: "#1a1a1a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
