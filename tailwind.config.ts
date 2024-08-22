import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        biryani: ['var(--font-biryani)', 'biryani'],
        archivo: ['var(--font-archivo)', 'archivo'],
      },
      colors: {
        white1: "#ffffff",
        red100: "#E12533",
        grey50: "#808080",
        navyBlue100: "#072267"
      }
    },
  },
  plugins: [],
};
export default config;
