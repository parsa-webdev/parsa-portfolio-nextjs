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
        dark: `#101215`,
        gray: `#3E4347`,
        gray2: `#424242`,
        lightGray: `#505050`,
        light: `#EFFFF7`,
        lightGreen: `#E0FFEF`,
        lightGreen2: `#C9ECDA`,
        lightGreen3: `#CFFFE7`,
        lightGreen4: `#D0F9E4`,
        primary: `#32FF92`,
        secondary: `#FFBC41`,
      },
    },
  },
  plugins: [],
} satisfies Config;
