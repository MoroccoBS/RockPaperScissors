import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Cyan: "var(--Cyan)",
        DarkText: "var(--DarkText)",
        ScoreText: "var(--ScoreText)",
        HeaderOutline: "var(--HeaderOutline)",
        BgColor: "var(--BgColor)",
        GrayscaleBg: "var(--grayscaleBg)",
      },
      boxShadow: {
        ScissorsGradientShadow: "var(--ScissorsGradientShadow)",
        PaperGradientShadow: "var(--PaperGradientShadow)",
        RockGradientShadow: "var(--RockGradientShadow)",
        LizardGradientShadow: "var(--LizardGradientShadow)",
        SpockGradientShadow: "var(--SpockGradientShadow)",
        InnerShadow: "var(--innerShadow)",
      },
      backgroundImage: {
        ScissorsGradient: "var(--ScissorsGradient)",
        PaperGradient: "var(--PaperGradient)",
        RockGradient: "var(--RockGradient)",
        LizardGradient: "var(--LizardGradient)",
        SpockGradient: "var(--SpockGradient)",
        WhiteGradient: "var(--whiteGradient)",
        GrayscaleGradient: "var(--grayscaleGradient)",
      },
    },
  },
  plugins: [],
};
export default config;
