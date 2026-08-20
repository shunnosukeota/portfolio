import type { ReactNode } from 'react'

/**
 * 見出しを1文字ずつに分けて、順に立ち上げる。
 * JS が無効でも CSS 側で .char が通常表示になるため、文字は必ず読める。
 * 空白は改行位置として温存する。
 */
export default function SplitText({
  text,
  delay = 0,
  step = 34,
  className = '',
}: {
  text: string
  /** 開始を遅らせる（ms） */
  delay?: number
  /** 1文字あたりの遅延（ms） */
  step?: number
  className?: string
}) {
  const chars = Array.from(text)
  return (
    <span className={className}>
      {chars.map((c, i) =>
        c === ' ' || c === '　' ? (
          <span key={i}> </span>
        ) : (
          <span key={i} className="char" style={{ '--char-delay': `${delay + i * step}ms` } as React.CSSProperties}>
            {c}
          </span>
        ),
      )}
    </span>
  )
}

/**
 * 装飾用：色の玉をふわふわ浮かべる。
 * variant='top' はセクションが縦に長い下層ページ用で、上部だけに収める。
 */
export function Blobs({
  children,
  variant = 'full',
  tone = 'color',
}: {
  children?: ReactNode
  variant?: 'full' | 'top'
  /** mono は白黒基調の面用。事業カラーを使わず、地の色を薄く光らせる */
  tone?: 'color' | 'mono'
}) {
  const area = variant === 'top' ? 'inset-x-0 top-0 h-deco' : 'inset-0'
  const c =
    tone === 'mono'
      ? ['bg-fg/16', 'bg-fg/12', 'bg-fg/14', 'bg-fg/10']
      : ['bg-web/40', 'bg-ec/40', 'bg-data/35', 'bg-cloud/35']
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${area} overflow-hidden`}>
      <span className={`blob animate-blob left-[-8%] top-[6%] h-64 w-64 md:h-96 md:w-96 ${c[0]}`} />
      <span className={`blob animate-float right-[-6%] top-[12%] h-56 w-56 md:h-80 md:w-80 ${c[1]}`} />
      <span className={`blob animate-blob bottom-[-10%] left-[28%] h-64 w-64 md:h-96 md:w-96 ${c[2]}`} />
      <span className={`blob animate-float right-[18%] top-[52%] h-40 w-40 md:h-64 md:w-64 ${c[3]}`} />
      {children}
    </div>
  )
}
