/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" }, // Customize the distance as needed
        },
      },
      animation: {
        bounceX: "bounceX 1s infinite",
      },
    },
  },
  plugins: [],
};
