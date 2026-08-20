import Link from 'next/link'
import Container from '@/components/ui/Container'
import Picture from '@/components/ui/Picture'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import SectionIntro from '@/components/ui/SectionIntro'
import { CAREER } from '@/content/career'
import { SITE } from '@/content/site'

export default function AboutTeaser() {
  return (
    <section id="about" className="grid-cols-bg relative scroll-mt-header overflow-clip border-t border-line py-24 lg:py-32">
      <Rail label="About" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              label="About"
              dot="ec"
              en={
                <>
                  From Site Work
                  <br />
                  to Software.
                </>
              }
              title="建築の現場から来ました"
            />
            <Reveal delay={90}>
            <p className="mt-6 max-w-prose text-md text-muted">
              高専で建築を学んで、施工管理として半年だけ現場に立ちました。図面どおりに進む日はほとんどなくて、
              前もってどれだけ段取りを組めるかで結果が変わる、というのをそこで覚えました。
              その後 IT に移り、ECのプロジェクトリーダーを経て、いまは外資系コンサルティングファームでデータの仕事をしています。
              やっていることは変わったのに、大事なところは案外同じだと思っています。
            </p>

            <div className="mt-8 rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-label uppercase text-muted">{SITE.brand.origin}</p>
              <p className="mt-3 text-sm text-muted">{SITE.brand.originNote}</p>
            </div>

            <Link href="/about" className="round-link mt-10">
              経歴をくわしく見る
              <i aria-hidden="true" />
            </Link>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={90}>
            <div className="zoomable overflow-hidden rounded-2xl border-2 border-fg shadow-card">
              <Picture
                src="/images/about/portrait-env"
                alt={`${SITE.owner.name}。打ち合わせ中のポートレート`}
                width={1200}
                height={800}
                widths={[800]}
                sizes="(min-width: 1024px) 560px, 100vw"
                imgClassName="aspect-3/2 w-full object-cover"
              />
            </div>

            <ol className="mt-8 space-y-0">
              {CAREER.map((c) => (
                <li key={c.period + c.title} className="group grid grid-cols-timeline gap-4 border-b border-line py-4 sm:grid-cols-timeline-wide">
                  <span className="num text-xs text-muted">{c.period}</span>
                  <span className="text-sm font-bold transition-colors duration-fast group-hover:text-brand">
                    {c.title}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
