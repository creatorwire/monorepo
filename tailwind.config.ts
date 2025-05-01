import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        bgWhiteGray: "#F5F5F5",
        borderGray: "#D9D9D9",
        primaryBlue: "#286CFF",
        textSubtitle: "#808080",
        textGray: "#3A3A3A",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        custom: "0px 2px 4px rgba(0, 0, 0,0)",
      },
      boxShadow: {
        custom:
          "`0px 61px 500px 0px rgba(20, 25, 32, 0.01),0px 6.514px 33.251px 0px rgba(20, 25, 32, 0.03), 0px 2.787px 13.836px 0px rgba(20, 25, 32, 0.07)`",
        demoShadow: "inset 0px 4px 0px 0px #FFFFFF28",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #8E22EA 35%, #8C06FF 40%)",
        "black-gradient": "linear-gradient(45deg, #BF73FF 0%, #8E22EA 60%)",
      },
     keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(calc(50vw - 100px), -30vh) scale(1.1)" },
          "50%": { transform: "translate(calc(75vw - 200px), 20vh) scale(0.9)" },
          "75%": { transform: "translate(calc(-25vw + 50px), 40vh) scale(1.2)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(calc(-40vw + 100px), 25vh) scale(1.05)" },
          "50%": { transform: "translate(calc(30vw - 150px), -20vh) scale(0.95)" },
          "75%": { transform: "translate(calc(60vw - 300px), 15vh) scale(1.1)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(calc(-60vw + 200px), -15vh) scale(0.8)" },
          "50%": { transform: "translate(calc(40vw - 100px), 30vh) scale(1.2)" },
          "75%": { transform: "translate(calc(20vw - 50px), -25vh) scale(1)" },
        },
      },
      animation: {
        blob: "blob 25s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        blob2: "blob2 30s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        blob3: "blob3 35s infinite cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/forms'),],
} satisfies Config;
