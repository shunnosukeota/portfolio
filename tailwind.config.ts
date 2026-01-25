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
          "tracking-in-expand-fwd 2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "fade-out-bck":
          "fade-out-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in":
          "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "roll-in-left": "roll-in-left 0.6s ease   both",
        "tracking-out-expand-fwd": "tracking-out-expand-fwd 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)    both",
        "text-flicker-out-glow": "text-flicker-out-glow 5.5s linear  infinite both",
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
        "text-flicker-out-glow": {
          "0%,13.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .6), 0 0 60px rgba(255, 255, 255, .45), 0 0 110px rgba(255, 255, 255, .25), 0 0 100px rgba(255, 255, 255, .1)"
          },
          "14%,14.9%,23%,24.9%,35%,39.9%,43%,44.9%,55%,69.4%,70%,79.4%,80%,89.8%,90%": {
              opacity: "0",
              "text-shadow": "none"
          },
          "15%,22.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .4), 0 0 110px rgba(255, 255, 255, .2), 0 0 100px rgba(255, 255, 255, .1)"
          },
          "25%,34.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35), 0 0 100px rgba(255, 255, 255, .1)"
          },
          "40%,42.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35)"
          },
          "45%,50%,54.9%,69.5%,69.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)"
          },
          "79.9%": {
              opacity: "1",
              "text-shadow": "0 0 30px rgba(255, 255, 255, .25)"
          },
          "89.9%": {
              opacity: "1",
              "text-shadow": "none"
          },
          to: {
              opacity: "0"
          }
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
export default config
