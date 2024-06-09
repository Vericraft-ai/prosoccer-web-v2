import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
    },

    extend: {
      colors: {
        goku: "rgb(var(--goku) / <alpha-value>)",
        trunks: "rgb(var(--trunks) / <alpha-value>)",
        gohan: "rgb(var(--gohan) / <alpha-value>)",
        vegeta: "rgb(var(--vegeta) / <alpha-value>)",
        bulma: "rgb(var(--bulma) / <alpha-value>)",
        broly: "rgb(var(--broly) / <alpha-value>)",
        frieza: "rgb(var(--frieza) / <alpha-value>)",
        piccolo: "rgb(var(--piccolo) / <alpha-value>)",
        popo: "rgb(var(--popo) / <alpha-value>)",
        zeno: "rgb(var(--zeno) / <alpha-value>)",
        heles: "rgb(var(--heles) / <alpha-value>)",
        chichi: "rgb(var(--chichi) / <alpha-value>)",
        whis: "rgb(var(--whis) / <alpha-value>)",
        andriod: "rgb(var(--andriod) / <alpha-value>)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        "auto-fill-335": "repeat(auto-fill, minmax(335px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
