/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#6366F1",
        primaryHover: "#4F46E5",

        secondary: "#06B6D4",
        accent: "#22C55E",

        background: "#F9FAFB",
        surface: "#FFFFFF",

        sidebar: "#111827",

        textPrimary: "#111827",
        textSecondary: "#6B7280",

        borderColor: "#E5E7EB",

        danger: "#EF4444",
        warning: "#F59E0B",
        success: "#10B981",
      },
    },
  },
  plugins: [],
}
