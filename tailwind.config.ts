import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans-serif": ['sans-serif'],
      },      
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out   both",
        "tracking-in-expand-fwd":
          "tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "fade-out-bck":
          "fade-out-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in":
          "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "roll-in-left": "roll-in-left 0.6s ease   both",
        "tracking-out-expand-fwd": "tracking-out-expand-fwd 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)    both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "tracking-in-expand-fwd": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "fade-out-bck": {
          "0%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(-80px)",
            opacity: "0",
            display: "none",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "tracking-out-expand-fwd": {
          "0%": {
              transform: "translateZ(0)",
              opacity: "1"
          },
          "60%": {
              opacity: ".8"
          },
          to: {
              "letter-spacing": "1em",
              transform: "translateZ(300px)",
              opacity: "0"
          }
      },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
export default config
