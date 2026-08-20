import type { Metadata } from 'next'
import { FEATURED_MENTIONS, ZENN } from '@/content/blog'
import { fetchZennArticles, formatDate } from '@/lib/zenn'
import { pageMetadata } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import { Blobs } from '@/components/ui/SplitText'
import Reveal from '@/components/ui/Reveal'
import ContactCta from '@/components/sections/ContactCta'

export const metadata: Metadata = pageMetadata({
  title: 'Blog — Zenn での技術発信',
  description:
    'Snowflake のメタデータ管理（AI を使ったタグ伝播・セマンティックビュー自動生成）などの技術記事を Zenn で連載中。SnowVillage のライブ配信でも紹介されました。',
  path: '/blog',
})

export default async function BlogPage() {
  const { articles } = await fetchZennArticles()
  const totalLikes = articles.reduce((s, a) => s + a.likedCount, 0)

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <Blobs variant="top" />
        <div className="relative mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="blog-heading"
            dot="data"
            label="Blog"
            title="試したことを書いています"
            lead="Snowflake まわりで実際に試したことを Zenn に書いています。いまはメタデータ管理の連載を続けているところです。"
            link={{ href: ZENN.url, label: 'Zenn でフォローする' }}
          />

          {/* Featured mention */}
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            {FEATURED_MENTIONS.map((m) => (
              <Reveal key={m.id} className="md:col-span-12">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card card-hover grid gap-4 p-6 md:grid-cols-12 md:items-center md:gap-8 md:p-8"
                >
                  <div className="md:col-span-2">
                    <span className="label">{m.label}</span>
                    <span className="mt-2 block font-mono text-xs text-muted">{m.date}</span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-h3 font-bold text-balance">{m.title}</p>
                    <p className="mt-2 text-sm text-muted">{m.description}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-fast group-hover:text-fg">
                      <span
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-line"
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                      {m.source}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Articles */}
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <h2 className="label">Articles on Zenn</h2>
                <span className="font-mono text-xs text-muted">
                  {articles.length} posts · {totalLikes} likes
                </span>
              </div>
              <ol>
                {articles.map((a, i) => (
                  <Reveal as="li" key={a.url} delay={(i % 3) * 60} className="border-b border-line">
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-emoji gap-4 py-6 transition-colors duration-fast hover:text-muted"
                    >
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {a.emoji}
                      </span>
                      <span>
                        <span className="block text-lg font-bold text-balance">{a.title}</span>
                        <span className="mt-2 flex flex-wrap gap-x-4 font-mono text-xs text-muted">
                          <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                          <span>♥ {a.likedCount}</span>
                          <span>zenn.dev</span>
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-3 lg:col-start-10">
              <Reveal>
                <p className="label mb-4">Series</p>
                <p className="text-sm font-bold">{ZENN.seriesTitle}</p>
                <p className="mt-3 text-sm text-muted">
                  設計編 → 実装編（タグの伝播 / セマンティックビューの自動生成）と、AI を使ったメタデータ管理を段階的に検証しています。
                </p>
                <a href={ZENN.url} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-block text-sm">
                  {ZENN.url.replace(/^https?:\/\//, '')} →
                </a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
      <ContactCta heading="データ基盤の相談も歓迎です" />
    </>
  )
}
