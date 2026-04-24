/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sh: {
          blueDigital: "#4760F0",
          blueBusiness: "#0D1453",
          yellowAttention: "#FAAE39",
          beigeModern: "#EDE6DE",
          ink: "#111827",
          muted: "#667085",
          white: "#FFFFFF"
        },
        primary: "#4760F0",
        secondary: "#0D1453",
        accent: "#FAAE39",
        background: "#EDE6DE"
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        brand: "1.5rem"
      },
      boxShadow: {
        brand: "0 24px 60px rgba(13, 20, 83, 0.14)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0D1453 0%, #4760F0 55%, #FAAE39 130%)",
        "blue-gradient": "linear-gradient(135deg, #0D1453 0%, #4760F0 100%)",
        "yellow-gradient": "linear-gradient(135deg, #FAAE39 0%, #EDE6DE 130%)"
      }
    }
  },
  plugins: []
};
