/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#C8F135",
        dark: {
          DEFAULT: "#0A0A0A",
          2: "#0f0f0f",
          3: "#141414",
        },
        border: {
          DEFAULT: "#1a1a1a",
          2: "#2a2a2a",
        },
        muted: "#888888",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "10": "10px",
        "11": "11px",
      },
      letterSpacing: {
        widest2: "0.15em",
        wide2: "0.12em",
        wide3: "0.08em",
      },
      animation: {
        "slide-up": "slideUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease both",
      },
      keyframes: {
        slideUp: {
          from: { transform: "translateY(100%)", opacity: "0" },
          to:   { transform: "translateY(0)",    opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%":       { transform: "translateX(-50%) translateY(8px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};