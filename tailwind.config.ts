import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1680px",
      },
    },
  },
  plugins: [],
} satisfies Config;
