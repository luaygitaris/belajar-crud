import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ungu: '#4D44B5',
				lamaPurple: '#CFCEFF',
				lamaPurpleLight: '#F1F0FF',
				orange: '#FB7D5B',
				kuning: '#FCC43E',
				maintext: '#303972',
				hijau: '#4CBC9A',
				merah: '#FF4550',
      },
    },
  },
  plugins: [],
} satisfies Config;
