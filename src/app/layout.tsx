import type { Metadata, Viewport } from 'next'
import { Inter_Tight, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/content/site'

// 欧文：Inter Tight（400/500）／ 和文：Noto Sans JP（400/500 のサブセットを自前配信）／ 等幅：Geist Mono（ラベル・数値のみ）
// ※ Noto Sans JP を Google Fonts 経由で読むと日本語だけで約 40 リクエスト・800KB 超になるため、
//    scripts/build-fonts.mjs でサイト内の使用文字にサブセット化した woff2（約 115KB/ウェイト）を使う。
//    コンテンツに新しい漢字を追加したら `npm run fonts` を再実行すること。
const sans = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})
const jp = localFont({
  src: [
    { path: '../fonts/NotoSansJP-400.subset.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/NotoSansJP-500.subset.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-jp',
  display: 'swap',
  preload: true,
  // サブセット未収録の文字は OS の和文ゴシックで補う
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', 'Noto Sans CJK JP', 'sans-serif'],
  adjustFontFallback: false,
})
const mono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.owner.name, url: SITE.url }],
  creator: SITE.owner.name,
  keywords: [
    '受託開発',
    'Web制作',
    'Salesforce Commerce Cloud',
    'SFCC',
    'AWS',
    'Snowflake',
    'Databricks',
    'データ基盤',
    '仙台',
    'フリーランス エンジニア',
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE.name} — ${SITE.owner.titleEn}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${sans.variable} ${jp.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* JS が動く環境でのみスクロール連動モーションを有効化（JS 無効時は最初から表示） */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-enabled')" }} />
      </head>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-sm focus:bg-fg focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main" className="flex-1 pt-header">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
