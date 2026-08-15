import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "24px"
    },
    extend: {
      colors: {
        bg: "#F7F7F9",
        surface: "#FFFFFF",
        "surface-soft": "#F0F1F5",
        ink: {
          900: "#0A0B0E",
          700: "#3A3F4B",
          500: "#6B7280",
          400: "#9096A2"
        },
        line: {
          DEFAULT: "#E3E5EA",
          strong: "#D3D6DE"
        },
        indigo: {
          DEFAULT: "#4B4CF0",
          dark: "#3A3AD1",
          soft: "#ECEBFF"
        },
        amber: {
          DEFAULT: "#FF8A3D",
          soft: "#FFEDDD"
        },
        dark: {
          bg: "#0A0B0E",
          surface: "#121319",
          surface2: "#171922",
          line: "#23252E",
          ink: "#F4F5F7",
          muted: "#9297A6"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 3.4vw + 1rem, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 1.8vw + 1rem, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }]
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        pill: "999px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(10,11,14,0.04)",
        md: "0 10px 30px rgba(10,11,14,0.06)",
        lg: "0 25px 70px rgba(10,11,14,0.10)",
        glow: "0 0 0 1px rgba(75,76,240,0.18), 0 20px 60px rgba(75,76,240,0.20)"
      },
      maxWidth: {
        container: "1240px",
        text: "720px"
      },
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
        40: "160px"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
