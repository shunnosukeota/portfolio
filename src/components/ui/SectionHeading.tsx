import type { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  label: string
  title: ReactNode
  lead?: ReactNode
  id?: string
  link?: { href: string; label: string }
  level?: 'h1' | 'h2'
}

/** セクション見出し：ラベル（等幅）＋見出し＋リード＋任意のリンク */
export default function SectionHeading({ label, title, lead, id, link, level = 'h2' }: Props) {
  const Heading = level
  return (
    <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <p className="label mb-4" id={id ? `${id}-label` : undefined}>
          {label}
        </p>
        <Heading
          id={id}
          className={`${level === 'h1' ? 'text-hero font-medium' : 'text-h2 font-medium'} text-balance`}
        >
          {title}
        </Heading>
        {lead && <p className="mt-5 max-w-prose-wide text-md text-muted">{lead}</p>}
      </div>
      {link && (
        <div className="md:col-span-4 md:justify-self-end">
          <Link href={link.href} className="link text-sm">
            {link.label} →
          </Link>
        </div>
      )}
    </div>
  )
}
