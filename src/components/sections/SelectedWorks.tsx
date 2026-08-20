import Link from 'next/link'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import SectionIntro from '@/components/ui/SectionIntro'
import WorkThumbnail from '@/components/WorkThumbnail'
import { FEATURED_WORKS } from '@/content/works'

export default function SelectedWorks() {
  return (
    <section id="works" className="grid-cols-bg relative scroll-mt-header overflow-clip border-t border-line py-24 lg:py-32">
      <Rail label="Works" />
      <Container className="relative">
        <SectionIntro
          label="Works"
          dot="web"
          en={
            <>
              Selected
              <br />
              Work.
            </>
          }
          title="つくったものは、まだ動いている。"
          lead="守秘義務のある案件は社名を伏せています。規模と、どこからどこまでを担当したかを書きました。"
          link={{ href: '/works', label: 'すべての実績を見る' }}
        />

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-2">
          {FEATURED_WORKS.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 2) * 90}>
              <article className="group card card-hover h-full overflow-hidden">
                <Link href={`/works/${w.slug}`} className="block">
                  <div className="zoomable relative border-b border-line">
                    <WorkThumbnail thumbnail={w.thumbnail} />
                    {/* ホバーで下から暗く沈ませ、写真に締まりを出す */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fg/60 via-fg/10 to-transparent opacity-0 transition-opacity duration-base ease-out group-hover:opacity-100"
                    />
                  </div>
                </Link>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                    <span>{w.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{w.year}</span>
                    {w.nda && (
                      <span className="rounded-full bg-surface px-2 py-0.5">NDA</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-h3 font-bold text-balance">
                    <Link href={`/works/${w.slug}`} className="underline-grow">
                      {w.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-muted">{w.summary}</p>

                  <div className="mt-5 rounded-xl bg-surface p-5">
                    <p className="font-mono text-label uppercase text-muted">成果</p>
                    <p className="mt-2 text-sm font-bold">{w.outcomes[0]}</p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {w.tech.slice(0, 5).map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/works/${w.slug}`} className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-brand">
                      <span className="underline-grow">ケーススタディを読む</span>
                    </span>
                    <span className="arrow-btn" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
