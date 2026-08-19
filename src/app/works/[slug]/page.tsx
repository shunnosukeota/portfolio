import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WORKS, getWork } from '@/content/works'
import { creativeWorkJsonLd, pageMetadata } from '@/lib/seo'
import JsonLd from '@/components/ui/JsonLd'
import WorkThumbnail from '@/components/WorkThumbnail'
import Picture from '@/components/ui/Picture'
import ContactCta from '@/components/sections/ContactCta'

type Params = { slug: string }

/** 静的エクスポートのため全 slug を事前生成 */
export function generateStaticParams(): Params[] {
  return WORKS.map((w) => ({ slug: w.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) return {}
  return pageMetadata({
    title: `${work.title} — ケーススタディ`,
    description: work.summary,
    path: `/works/${work.slug}`,
    type: 'article',
  })
}

export default async function WorkDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  const index = WORKS.findIndex((w) => w.slug === work.slug)
  const prev = WORKS[(index - 1 + WORKS.length) % WORKS.length]
  const next = WORKS[(index + 1) % WORKS.length]

  return (
    <>
      <JsonLd data={creativeWorkJsonLd(work)} />
      <article className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-content px-6 lg:px-16">
          <nav aria-label="パンくず" className="mb-8 font-mono text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-fg">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/works" className="hover:text-fg">
                  Works
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-fg">
                {work.slug}
              </li>
            </ol>
          </nav>

          <header className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="label">{work.category}</p>
              <h1 className="mt-4 text-h2 font-medium text-balance">{work.title}</h1>
              <p className="mt-5 max-w-prose-wide text-md text-muted">{work.summary}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="label">Client</dt>
                <dd className="mt-1">{work.client}</dd>
              </div>
              <div>
                <dt className="label">Period</dt>
                <dd className="mt-1 font-mono text-xs">
                  {work.year} · {work.period}
                </dd>
              </div>
              {work.scale && (
                <div className="col-span-2 lg:col-span-1">
                  <dt className="label">Scale</dt>
                  <dd className="mt-1 text-muted">{work.scale}</dd>
                </div>
              )}
              {work.url && (
                <div>
                  <dt className="label">URL</dt>
                  <dd className="mt-1">
                    <a href={work.url} target="_blank" rel="noopener noreferrer" className="link break-all font-mono text-xs">
                      {work.url.replace(/^https?:\/\//, '')}
                    </a>
                  </dd>
                </div>
              )}
              {work.credits?.map((c) => (
                <div key={c.label}>
                  <dt className="label">{c.label}</dt>
                  <dd className="mt-1">
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="link">
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </header>

          <div className="mt-12">
            <WorkThumbnail thumbnail={work.thumbnail} sizes="(min-width: 1280px) 1112px, 100vw" priority />
          </div>

          {work.gallery && (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2" aria-label="制作物">
              {work.gallery.map((g) => (
                <li key={g.src}>
                  <Picture
                    src={g.src}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    widths={[800]}
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="overflow-hidden rounded-sm border border-line bg-surface"
                    imgClassName="h-auto w-full"
                  />
                  {g.caption && <p className="mt-2 font-mono text-xs text-muted">{g.caption}</p>}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              <section aria-labelledby="challenge">
                <h2 id="challenge" className="label mb-4">
                  Challenge — 課題
                </h2>
                <p className="max-w-prose-wide text-md">{work.challenge}</p>
              </section>
              <section aria-labelledby="role">
                <h2 id="role" className="label mb-4">
                  Role — 担当範囲
                </h2>
                <ul className="max-w-prose-wide space-y-2 text-md">
                  {work.role.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span className="mt-3 h-px w-4 shrink-0 bg-fg" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="outcome">
                <h2 id="outcome" className="label mb-4">
                  Outcome — 成果
                </h2>
                <ol className="max-w-prose-wide space-y-4 text-md">
                  {work.outcomes.map((o, i) => (
                    <li key={o} className="grid grid-cols-meta gap-3 border-t border-line pt-4">
                      <span className="font-mono text-sm text-muted">0{i + 1}</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
            <aside className="lg:col-span-3 lg:col-start-10">
              <h2 className="label mb-4">Tech — 技術</h2>
              <ul className="flex flex-wrap gap-1.5">
                {work.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <nav aria-label="前後の実績" className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            {prev && (
              <Link href={`/works/${prev.slug}`} className="group rounded-sm">
                <span className="label">← Prev</span>
                <span className="mt-2 block text-sm transition-colors duration-fast group-hover:text-muted">{prev.title}</span>
              </Link>
            )}
            {next && (
              <Link href={`/works/${next.slug}`} className="group rounded-sm sm:text-right">
                <span className="label">Next →</span>
                <span className="mt-2 block text-sm transition-colors duration-fast group-hover:text-muted">{next.title}</span>
              </Link>
            )}
          </nav>
        </div>
      </article>
      <ContactCta heading="似た課題をお持ちですか。まずはご相談ください。" />
    </>
  )
}
