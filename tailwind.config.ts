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
        'hero-bg': "url('/hero-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        biryani: ['var(--font-biryani)', 'biryani'],
        archivo: ['var(--font-archivo)', 'archivo'],
      },
      colors: {
        gradient1: "linear-gradient(108.9deg, #614BC3 7.52%, #03A7B4 113.36%)",
        white1: "#ffffff",
        red100: "#E12533",
        red25: "#F7C9CC",
        red_50: "#701219",
        red_75: "#A91C26",
        grey5: "#F2F2F2",
        grey10: "#EFEFEF",
        grey50: "#808080",
        grey70: "#4B4B4B",
        navyBlue100: "#072267",
        navyBlue25: "#C1C8D9",
        navyBlue_75: "#05194D",
      }
    },
  },
  plugins: [],
};
export default config;
