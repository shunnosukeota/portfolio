import type { ReactNode } from 'react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

type Dot = 'brand' | 'web' | 'ec' | 'cloud' | 'data' | 'ad'

const DOT: Record<Dot, string> = {
  brand: 'bg-brand',
  web: 'bg-web',
  ec: 'bg-ec',
  cloud: 'bg-cloud',
  data: 'bg-data',
  ad: 'bg-ad',
}

/**
 * セクション冒頭のかたまり。
 * 「丸ラベル → 英字の大見出し → 和文の太い一行 → 補足 → 丸ボタン」の順に、
 * 1要素ずつ間を置いて立ち上げる。
 */
export default function SectionIntro({
  label,
  dot = 'brand',
  en,
  title,
  lead,
  link,
  className = '',
}: {
  label: string
  dot?: Dot
  /** 英字の見出し。改行は <br /> を含めて渡す */
  en: ReactNode
  /** 和文の見出し */
  title: ReactNode
  lead?: ReactNode
  link?: { href: string; label: string }
  className?: string
}) {
  return (
    <div className={className}>
      <Reveal>
        <span className="pill">
          <span className={`h-2 w-2 rounded-full ${DOT[dot]}`} aria-hidden="true" />
          {label}
        </span>
      </Reveal>

      <Reveal delay={90}>
        <p className="mt-8 text-en font-normal text-balance" aria-hidden="true">
          {en}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <h2 className="mt-7 max-w-[22ch] text-h3 font-bold text-balance">{title}</h2>
      </Reveal>

      {lead && (
        <Reveal delay={270}>
          <p className="mt-6 max-w-prose-wide text-md text-muted">{lead}</p>
        </Reveal>
      )}

      {link && (
        <Reveal delay={360}>
          <Link href={link.href} className="round-link mt-10">
            {link.label}
            <i aria-hidden="true" />
          </Link>
        </Reveal>
      )}
    </div>
  )
}
