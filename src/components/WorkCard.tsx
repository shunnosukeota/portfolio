import Link from 'next/link'
import type { Work } from '@/content/works'
import WorkThumbnail from '@/components/WorkThumbnail'

/** 実績カード：課題 → 担当 → 技術 → 成果 の要約 */
export default function WorkCard({ work, priority = false }: { work: Work; priority?: boolean }) {
  const href = `/works/${work.slug}`
  return (
    <article className="group flex h-full flex-col">
      <Link href={href} className="block rounded-sm" aria-label={`${work.title} の詳細`}>
        <WorkThumbnail thumbnail={work.thumbnail} priority={priority} />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
          <span>{work.category}</span>
          <span aria-hidden="true">·</span>
          <span>{work.year}</span>
          {work.nda && (
            <>
              <span aria-hidden="true">·</span>
              <span>NDA</span>
            </>
          )}
        </div>
        <h2 className="mt-3 text-h3 font-bold text-balance">
          <Link href={href} className="transition-colors duration-fast hover:text-muted">
            {work.title}
          </Link>
        </h2>
        <p className="mt-2 text-xs text-muted">{work.client}</p>
        <dl className="mt-5 grid gap-4 border-t border-line pt-5 text-sm">
          <div className="grid grid-cols-meta gap-3">
            <dt className="label pt-1">課題</dt>
            <dd className="text-muted">{work.challenge}</dd>
          </div>
          <div className="grid grid-cols-meta gap-3">
            <dt className="label pt-1">成果</dt>
            <dd className="text-muted">{work.outcomes[0]}</dd>
          </div>
          <div className="grid grid-cols-meta gap-3">
            <dt className="label pt-1">技術</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {work.tech.slice(0, 5).map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="grid grid-cols-meta gap-3">
            <dt className="label pt-1">期間</dt>
            <dd className="font-mono text-xs text-muted">{work.period}</dd>
          </div>
        </dl>
        <div className="mt-auto pt-6">
          <Link href={href} className="link text-sm">
            ケーススタディを読む →
          </Link>
        </div>
      </div>
    </article>
  )
}
