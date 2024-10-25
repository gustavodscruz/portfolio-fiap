import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text" : "#E2E4E9",
        background: "#262955",
        "red-custom": "#D7606D",
      },
      fontFamily: {
        primary: "var(--primary), sans-serif",
        secondary: "var(--secondary), sans-serif",
      }
    },
  },
  plugins: [],
};
export default config;
