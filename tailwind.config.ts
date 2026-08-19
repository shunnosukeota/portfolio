import type { Config } from 'tailwindcss'

/**
 * デザイントークン。色・タイポ・余白・モーションはすべてここで定義し、
 * コンポーネント側で任意の値（text-[13px] 等）を直書きしない。
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // ブレークポイント：640 / 768 / 1024 / 1280
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
      surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
      fg: 'rgb(var(--fg-rgb) / <alpha-value>)',
      muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
      line: 'var(--line)',
      'line-strong': 'var(--line-strong)',
      accent: 'rgb(var(--fg-rgb) / <alpha-value>)',
      'accent-fg': 'rgb(var(--bg-rgb) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'var(--font-jp)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    fontSize: {
      // ラベル：等幅・大文字・0.12em
      label: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.12em' }],
      xs: ['0.75rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
      sm: ['0.875rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
      base: ['1rem', { lineHeight: '1.85', letterSpacing: '0.02em' }],
      md: ['1.0625rem', { lineHeight: '1.85', letterSpacing: '0.02em' }],
      lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
      xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      h3: ['clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
      h2: ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      display: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
      // 和文 30 文字前後の見出しを 100vh 内に収めるための、display のひと回り小さい段階
      hero: ['clamp(2.5rem, 5.25vw, 4.75rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      // 数値用（Proof bar）
      stat: ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
    },
    letterSpacing: {
      tighter: '-0.035em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      label: '0.12em',
    },
    // 4px 基準。Tailwind 既定の 4px スケールを踏襲しつつ、使用値を明示
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      32: '128px',
      40: '160px',
      48: '192px',
      64: '256px',
      // 固定高さ系
      header: 'var(--header-h)',
    },
    extend: {
      maxWidth: {
        content: '1240px',
        prose: '38ch',
        'prose-wide': '52ch',
      },
      minHeight: {
        hero: 'calc(100svh - var(--header-h))',
      },
      borderColor: {
        DEFAULT: 'var(--line)',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        full: '9999px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '400ms',
        slow: '600ms',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      zIndex: {
        60: '60',
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
        // dl（ラベル＋値）用
        meta: '4.5rem minmax(0, 1fr)',
        timeline: '7rem minmax(0, 1fr)',
        'timeline-wide': '9rem minmax(0, 1fr)',
      },
      aspectRatio: {
        '16/10': '16 / 10',
        '3/4': '3 / 4',
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}

export default config
