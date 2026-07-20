import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kerygma: {
          black: "#0A0A0A",
          white: "#FAFAFA",
          red: "#E63946",
          redDark: "#B82C38",
          gray: "#8A8A8A",
          line: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;