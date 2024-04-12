/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      backgroundImage: {
        "map-image": "url('/src/assets/map.png')",
        "suchith-image": "url('/src/assets/suchith_m.jpeg')",
        "office-background": "url('/src/assets/office-image-bg.webp')",
      },
    },
  },
  plugins: [],
};
