/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#2563eb",
        accent: "#ef4444",
        dark: "#111827",
        card: "#18181b",
        border: "#27272a",
        text: "#e0e7ef",
        subtitle: "#94a3b8",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(37, 99, 235, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #0a0a0a 0%, #18181b 100%)",
      },
    },
  },
  plugins: [],
} 