import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "fresh-700": "var(--color-fresh-700)",
      },
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1336px",
      },
    },
  },
  plugins: [],
} satisfies Config;
