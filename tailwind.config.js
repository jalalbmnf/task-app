module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: {
          100: "var(--success-color-100)",
          200: "var(--success-color-200)",
          300: "var(--success-color-300)",
          400: "var(--success-color-400)",
          500: "var(--success-color-500)",
          600: "var(--success-color-600)",
          700: "var(--success-color-700)",
          800: "var(--success-color-800)",
          900: "var(--success-color-900)",
        },
        info: {
          100: "var(--info-color-100)",
          200: "var(--info-color-200)",
          300: "var(--info-color-300)",
          400: "var(--info-color-400)",
          500: "var(--info-color-500)",
          600: "var(--info-color-600)",
          700: "var(--info-color-700)",
          800: "var(--info-color-800)",
          900: "var(--info-color-900)",
        },
        warning: {
          100: "var(--warning-color-100)",
          200: "var(--warning-color-200)",
          300: "var(--warning-color-300)",
          400: "var(--warning-color-400)",
          500: "var(--warning-color-500)",
          600: "var(--warning-color-600)",
          700: "var(--warning-color-700)",
          800: "var(--warning-color-800)",
          900: "var(--warning-color-900)",
        },
        danger: {
          100: "var(--danger-color-100)",
          200: "var(--danger-color-200)",
          300: "var(--danger-color-300)",
          400: "var(--danger-color-400)",
          500: "var(--danger-color-500)",
          600: "var(--danger-color-600)",
          700: "var(--danger-color-700)",
          800: "var(--danger-color-800)",
          900: "var(--danger-color-900)",
        },
        primary: {
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
        },
        basic: {
          100: "var(--basic-color-100)",
          200: "var(--basic-color-200)",
          300: "var(--basic-color-300)",
          400: "var(--basic-color-400)",
          500: "var(--basic-color-500)",
          600: "var(--basic-color-600)",
          700: "var(--basic-color-700)",
          800: "var(--basic-color-800)",
          900: "var(--basic-color-900)",
          1100: "var(--basic-color-1100)",
          1200: "var(--basic-color-1200)",
        },
      },
      opacity: {
        8: "0.08",
        16: "0.16",
        24: "0.24",
        32: "0.32",
        40: "0.4",
        48: "0.48",
      },
      fontSize: {
        96: ["96px", { lineHeight: "120px" }],
        60: ["60px", { lineHeight: "72px" }],
        "60x": ["60px", { lineHeight: "80px" }],
        48: ["48px", { lineHeight: "64px" }],
        34: ["34px", { lineHeight: "40px" }],
        24: ["24px", { lineHeight: "32px" }],
        20: ["20px", { lineHeight: "24px" }],
        "20x": ["20px", { lineHeight: "28px" }],
        16: ["16px", { lineHeight: "20px" }],
        "16x": ["16px", { lineHeight: "24px" }],
        14: ["14px", { lineHeight: "16px" }],
        "14x": ["14px", { lineHeight: "20px" }],
        12: ["12px", { lineHeight: "16px" }],
        10: ["10px", { lineHeight: "12px" }],
        "10x": ["10px", { lineHeight: "14px" }],
      },
      boxShadow: {
        cardShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xxs: { min: "320px", max: "359px" },
        // => @media (min-width: 320px and max-width: 359px) { ... }

        xs: { min: "360px", max: "479px" },
        // => @media (min-width: 360px and max-width: 479px) { ... }

        s: { min: "480px", max: "639px" },
        // => @media (min-width: 480px and max-width: 639px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
