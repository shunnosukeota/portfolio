import type { ReactNode } from 'react'
import Link from 'next/link'

type Dot = 'brand' | 'web' | 'ec' | 'cloud' | 'data' | 'ad'

type Props = {
  label: string
  title: ReactNode
  lead?: ReactNode
  id?: string
  link?: { href: string; label: string }
  level?: 'h1' | 'h2'
  /** ラベル横の点の色。ページごとに事業カラーを割り当てて統一感を出す */
  dot?: Dot
}

const DOT: Record<Dot, string> = {
  brand: 'bg-brand',
  web: 'bg-web',
  ec: 'bg-ec',
  cloud: 'bg-cloud',
  data: 'bg-data',
  ad: 'bg-ad',
}

/** セクション見出し：丸ラベル＋太い見出し＋リード＋任意のリンク */
export default function SectionHeading({ label, title, lead, id, link, level = 'h2', dot = 'brand' }: Props) {
  const Heading = level
  return (
    <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <span className="pill" id={id ? `${id}-label` : undefined}>
          <span className={`h-2 w-2 rounded-full ${DOT[dot]}`} aria-hidden="true" />
          {label}
        </span>
        <Heading
          id={id}
          className={`mt-6 ${level === 'h1' ? 'text-display' : 'text-h2'} font-bold text-balance`}
        >
          {title}
        </Heading>
        {lead && <p className="mt-6 max-w-prose-wide text-md text-muted">{lead}</p>}
      </div>
      {link && (
        <div className="md:col-span-4 md:justify-self-end">
          <Link href={link.href} className="btn-outline btn-sm">
            {link.label}
          </Link>
        </div>
      )}
    </div>
  )
}
