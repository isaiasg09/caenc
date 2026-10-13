/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        canvas: {
          DEFAULT: "var(--color-bg-canvas)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
        },
        themeBorder: "var(--color-border)",
        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "phi-1": "4px",
        "phi-2": "8px",
        "phi-3": "13px",
        "phi-4": "21px",
        "phi-5": "34px",
        "phi-6": "55px",
        "phi-7": "89px",
        "phi-8": "144px",
      },
      fontSize: {
        "phi-micro": ["0.75rem", { lineHeight: "1.2" }],
        "phi-sm": ["0.875rem", { lineHeight: "1.4" }],
        "phi-base": ["1rem", { lineHeight: "1.618" }],
        "phi-h5": ["1.25rem", { lineHeight: "1.4" }],
        "phi-h4": ["1.618rem", { lineHeight: "1.3" }],
        "phi-h3": ["2.618rem", { lineHeight: "1.2" }],
        "phi-h2": ["4.236rem", { lineHeight: "1.1" }],
        "phi-h1": ["6.854rem", { lineHeight: "1.05" }],
      },
      flex: {
        "phi-major": "0 0 61.8%",
        "phi-minor": "0 0 38.2%",
      },
      width: {
        "phi-major": "61.8%",
        "phi-minor": "38.2%",
      },
      maxWidth: {
        "phi-major": "61.8%",
        "phi-minor": "38.2%",
      },
      boxShadow: {
        warm: "0 20px 40px -15px rgba(31, 20, 14, 0.08)",
        "warm-lg": "0 30px 60px -20px rgba(31, 20, 14, 0.14)",
        "glow-accent": "0 0 30px -5px rgba(217, 101, 40, 0.4)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.025)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
