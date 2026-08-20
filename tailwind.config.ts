import type { Config } from 'tailwindcss'

/**
 * デザイントークン。
 * コーポレートサイトとして「明るく・事業が分かる・ポップ」を狙い、白基調＋事業ごとのカラーで構成する。
 * 色・タイポ・余白はここに集約し、コンポーネント側で任意の値（text-[13px] 等）は使わない。
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      bg: 'rgb(var(--bg-rgb) / <alpha-value>)',
      surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
      fg: 'rgb(var(--fg-rgb) / <alpha-value>)',
      muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
      line: 'var(--line)',
      'line-strong': 'var(--line-strong)',
      /** プライマリ（CTA・リンク） */
      brand: 'rgb(var(--brand-rgb) / <alpha-value>)',
      /** 事業カラー。Services とタグで使い分ける */
      web: 'rgb(var(--c-web) / <alpha-value>)',
      ec: 'rgb(var(--c-ec) / <alpha-value>)',
      cloud: 'rgb(var(--c-cloud) / <alpha-value>)',
      data: 'rgb(var(--c-data) / <alpha-value>)',
      ad: 'rgb(var(--c-ad) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'var(--font-jp)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    fontSize: {
      label: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      xs: ['0.75rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
      sm: ['0.875rem', { lineHeight: '1.8', letterSpacing: '0.02em' }],
      base: ['1rem', { lineHeight: '1.9', letterSpacing: '0.02em' }],
      md: ['1.0625rem', { lineHeight: '1.9', letterSpacing: '0.02em' }],
      lg: ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
      xl: ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      h3: ['clamp(1.375rem, 1.1rem + 1.1vw, 2.125rem)', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
      /** 英字の大見出し。和文より細く大きく置いて対にする */
      en: ['clamp(2rem, 1.1rem + 4vw, 4.5rem)', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
      h2: ['clamp(2rem, 1.3rem + 3.2vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      display: ['clamp(2.5rem, 1.4rem + 5vw, 5.5rem)', { lineHeight: '1.06', letterSpacing: '-0.045em' }],
      hero: ['clamp(2.375rem, 6.9vw, 5.5rem)', { lineHeight: '1.06', letterSpacing: '-0.05em' }],
      stat: ['clamp(2.25rem, 1rem + 3.4vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      label: '0.14em',
    },
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      40: '160px',
      48: '192px',
      56: '224px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
      header: 'var(--header-h)',
    },
    extend: {
      maxWidth: {
        content: '1280px',
        wide: '1440px',
        prose: '38ch',
        'prose-wide': '52ch',
      },
      minHeight: { hero: 'calc(100svh - var(--header-h))' },
      height: { deco: '720px' },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        '2xl': '40px',
        full: '9999px',
      },
      boxShadow: {
        pop: '0 10px 0 0 rgb(var(--fg-rgb) / 0.9)',
        card: '0 2px 0 0 rgb(var(--fg-rgb) / 0.08), 0 12px 32px -12px rgb(var(--fg-rgb) / 0.18)',
        lift: '0 8px 0 0 rgb(var(--fg-rgb) / 0.06), 0 24px 48px -18px rgb(var(--fg-rgb) / 0.28)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        pop: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: { fast: '180ms', base: '380ms', slow: '700ms' },
      aspectRatio: { '16/10': '16 / 10', '3/4': '3 / 4', '3/2': '3 / 2', '4/5': '4 / 5' },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
        meta: '5rem minmax(0, 1fr)',
        timeline: '7rem minmax(0, 1fr)',
        'timeline-wide': '9rem minmax(0, 1fr)',
        step: '56px minmax(0, 1fr)',
      },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        blob: {
          '0%,100%': { borderRadius: '48% 52% 62% 38% / 46% 44% 56% 54%', transform: 'rotate(0deg)' },
          '50%': { borderRadius: '58% 42% 38% 62% / 56% 60% 40% 44%', transform: 'rotate(8deg)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(10px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        shimmer: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 32s linear infinite',
        float: 'float 7s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        'pop-in': 'pop-in 520ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        shimmer: 'shimmer 7s ease-in-out infinite alternate',
      },
      zIndex: { 60: '60' },
    },
  },
  plugins: [],
}

export default config
