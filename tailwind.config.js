/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(var(--cream) / <alpha-value>)",
        sand: "hsl(var(--sand) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        terracotta: "hsl(var(--terracotta) / <alpha-value>)",
        "terracotta-deep": "hsl(var(--terracotta-deep) / <alpha-value>)",
        rosewood: "hsl(var(--rosewood) / <alpha-value>)",
        blush: "hsl(var(--blush) / <alpha-value>)",
        gold: "hsl(var(--gold) / <alpha-value>)",
        plum: "hsl(var(--plum) / <alpha-value>)",
        olive: "hsl(var(--olive) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 50px -22px hsl(var(--ink) / 0.30)",
        lift: "0 30px 70px -28px hsl(var(--terracotta-deep) / 0.45)",
        glow: "0 0 0 1px hsl(var(--gold) / 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.14) translate(-1.5%, -1.5%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        kenburns: "kenburns 7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
