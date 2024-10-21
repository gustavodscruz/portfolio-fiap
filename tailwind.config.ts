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
        foreground: "var(--foreground)",
        "red-custom": "#D7606D",
      },
      fontFamily: {
        'primary': ['Inconsolata, sans-serif'],
        'secondary': ['Epilogue, Arial'],
      }
    },
  },
  plugins: [],
};
export default config;
