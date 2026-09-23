import Link from 'next/link'
import Container from '@/components/ui/Container'
import SplitText, { Blobs } from '@/components/ui/SplitText'
import Picture from '@/components/ui/Picture'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'
import { SITE } from '@/content/site'
import { SERVICES } from '@/content/services'

const DOT: Record<string, string> = {
  web: 'bg-web',
  ec: 'bg-ec',
  cloud: 'bg-cloud',
  data: 'bg-data',
  ad: 'bg-ad',
}

/**
 * ファーストビュー。
 * 見出しと事業一覧が主役。写真は右下に小さく添えるだけにして、文字の邪魔をしないようにする。
 */
export default function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-clip pb-20 pt-4 lg:pb-28">
      <Blobs tone="mono" />

      <Container className="relative">
        <div className="grid items-end gap-12 pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-8">
            <div className="animate-fade-up">
              <AvailabilityBadge />
            </div>

            <p
              className="mt-8 font-mono text-label uppercase text-muted animate-fade-up"
              style={{ animationDelay: '80ms' }}
              aria-hidden="true"
            >
              Design What Comes After
            </p>

            <h1 className="mt-6 text-hero font-bold text-balance">
              <SplitText text="つくったあとを、" delay={120} />
              <br />
              {/*
                グラデーション文字は background-clip:text のため1文字ずつには割らない。
                外側で登場アニメーション、内側でグラデーションと、animation を取り合わないよう分ける。
              */}
              <span className="inline-block animate-fade-up" style={{ animationDelay: '560ms' }}>
                <span className="grad-text">設計する。</span>
              </span>
            </h1>

            <p
              className="mt-8 max-w-prose-wide text-md text-muted animate-fade-up"
              style={{ animationDelay: '900ms' }}
            >
              仙台で受託開発をしている {SITE.owner.name} です。
              Webサイト、ネットショップ、クラウド、データ基盤、それにチラシまで引き受けています。
              <strong className="font-bold text-fg">公開したあと誰がどう動かすのかまで考えて作るので、渡したきり困る、ということにはなりません。</strong>
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '1050ms' }}>
              <Link href="/contact" className="btn-primary">
                無料で相談する
              </Link>
              <Link href="#business" className="btn-outline">
                できることを見る
              </Link>
            </div>

            {/* 事業を色つきで一覧 */}
            <ul
              className="mt-12 flex flex-wrap gap-x-5 gap-y-3 animate-fade-up"
              style={{ animationDelay: '1200ms' }}
              aria-label="事業領域"
            >
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#business"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-3.5 py-1.5 text-xs font-bold backdrop-blur transition-all duration-fast ease-pop hover:-translate-y-0.5 hover:border-line-strong"
                  >
                    <span className={`h-2 w-2 rounded-full ${DOT[s.color]}`} aria-hidden="true" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 右下に小さく人物を添える */}
          <figure
            className="animate-pop-in lg:col-span-3 lg:col-start-10 lg:justify-self-end"
            style={{ animationDelay: '700ms' }}
          >
            <div className="zoomable w-40 overflow-hidden rounded-xl border border-line">
              <Picture
                src="/images/hero/portrait"
                alt={`${SITE.owner.name}のポートレート`}
                width={480}
                height={640}
                widths={[240]}
                sizes="160px"
                priority
                imgClassName="aspect-3/4 w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 w-40">
              <p className="text-sm font-bold">{SITE.owner.name}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{SITE.owner.nameEn}</p>
              <p className="mt-1 text-xs text-muted">{SITE.owner.title}</p>
            </figcaption>
          </figure>
        </div>

        {/* 下へ続くことを示す細い線 */}
        <div
          className="mt-16 hidden items-center gap-4 font-mono text-label uppercase text-muted lg:flex"
          aria-hidden="true"
        >
          <span className="scroll-rail" />
          Scroll
        </div>
      </Container>
    </section>
  )
}
