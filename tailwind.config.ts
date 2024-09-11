import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors:{
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    }
  },
  plugins: [],
};
export default config;