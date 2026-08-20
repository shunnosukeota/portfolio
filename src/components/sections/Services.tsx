import Link from 'next/link'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import SectionIntro from '@/components/ui/SectionIntro'
import { SERVICES, type ServiceColor } from '@/content/services'

/** 事業カラーごとのクラス。Tailwind の purge に拾わせるため、文字列で持つ */
const C: Record<ServiceColor, { text: string; bg: string; softBg: string; border: string; ring: string }> = {
  web: { text: 'text-web', bg: 'bg-web', softBg: 'bg-web/8', border: 'border-web', ring: 'group-hover:border-web' },
  ec: { text: 'text-ec', bg: 'bg-ec', softBg: 'bg-ec/8', border: 'border-ec', ring: 'group-hover:border-ec' },
  cloud: { text: 'text-cloud', bg: 'bg-cloud', softBg: 'bg-cloud/8', border: 'border-cloud', ring: 'group-hover:border-cloud' },
  data: { text: 'text-data', bg: 'bg-data', softBg: 'bg-data/8', border: 'border-data', ring: 'group-hover:border-data' },
  ad: { text: 'text-ad', bg: 'bg-ad', softBg: 'bg-ad/8', border: 'border-ad', ring: 'group-hover:border-ad' },
}

/** 事業ごとのアイコン（線画・currentColor） */
function Icon({ id }: { id: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" {...common}>
      {id === 'web' && (
        <>
          <rect x="3" y="6" width="26" height="20" rx="3" />
          <path d="M3 12h26" />
          <circle cx="7.5" cy="9" r="0.6" fill="currentColor" />
          <path d="M12 18l-2.5 2.5L12 23M20 18l2.5 2.5L20 23" />
        </>
      )}
      {id === 'ec' && (
        <>
          <path d="M4 6h3l3.2 13.5a2 2 0 0 0 2 1.5h9.4a2 2 0 0 0 2-1.5L27 10H9" />
          <circle cx="13" cy="26" r="1.6" />
          <circle cx="23" cy="26" r="1.6" />
        </>
      )}
      {id === 'cloud' && (
        <>
          <path d="M9 22a5.5 5.5 0 0 1 .6-11A7.5 7.5 0 0 1 24 12.5a4.75 4.75 0 0 1-.5 9.5H9Z" />
          <path d="M16 16v8M13 21l3 3 3-3" />
        </>
      )}
      {id === 'data' && (
        <>
          <ellipse cx="16" cy="8" rx="10" ry="4" />
          <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" />
          <path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" />
        </>
      )}
      {id === 'ad' && (
        <>
          <path d="M5 12v8h5l9 5V7l-9 5H5Z" />
          <path d="M23 12.5a5 5 0 0 1 0 7" />
          <path d="M26.5 9a9.5 9.5 0 0 1 0 14" />
        </>
      )}
    </svg>
  )
}

export default function Services() {
  return (
    <section id="business" className="grid-cols-bg relative scroll-mt-header overflow-clip bg-surface py-24 lg:py-32">
      <Rail label="Business" />
      <Container className="relative">
        <SectionIntro
          label="Business"
          dot="brand"
          en={
            <>
              Web, EC, Cloud,
              <br />
              Data, and Ads.
            </>
          }
          title="書いていないことも、聞いてください"
          lead={
            <>
              Web、EC、クラウド、データ基盤、広告。ここに並べたのは、実際に手を動かしてきた領域です。
              ただ、ご相談がこの5つにきれいに収まるとは限らないと思います。
              <strong className="font-bold text-fg">近いことなら調べてやりますし、できないものはその場で正直に言います。</strong>
              小さな改修でも、チラシ1枚でも構いません。
            </>
          }
        />

        {/*
          モバイルは縦に長くなりすぎるので横の棚にする。
          Container の左右余白ぶんだけ外に広げ、画面端まで送れるようにしている。
        */}
        <ol className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory scroll-pl-6 gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:mt-20 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const c = C[s.color]
            return (
              <Reveal as="li" key={s.id} delay={(i % 3) * 90} className="w-card shrink-0 snap-start md:w-auto">
                <article className={`group card card-hover relative h-full overflow-hidden ${c.ring}`}>
                  {/* 色の帯 */}
                  <div className={`h-2 w-full ${c.bg}`} aria-hidden="true" />
                  <div className="relative flex h-full flex-col p-7 lg:p-8">
                    <span className="ghost-num" aria-hidden="true">0{i + 1}</span>
                    <div className="relative flex items-start justify-between gap-4">
                      <span className={`inline-flex rounded-xl p-3 ${c.softBg} ${c.text} transition-transform duration-base ease-pop group-hover:-rotate-6 group-hover:scale-110`}>
                        <Icon id={s.id} />
                      </span>
                    </div>

                    <h3 className="relative mt-6 text-xl font-bold">{s.name}</h3>
                    <p className={`mt-1 font-mono text-label uppercase ${c.text}`}>{s.nameEn}</p>

                    <p className="mt-5 text-sm font-bold text-fg">{s.title}</p>
                    <p className="mt-3 text-sm text-muted">{s.description}</p>

                    <ul className="mt-6 space-y-2 pb-2">
                      {s.scope.map((v) => (
                        <li key={v} className="flex gap-2.5 text-sm text-muted">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.bg}`} aria-hidden="true" />
                          {v}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-line pt-5">
                      <div>
                        <dt className="font-mono text-label uppercase text-muted">納期目安</dt>
                        <dd className="mt-1 text-sm font-bold">{s.delivery}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-label uppercase text-muted">費用目安</dt>
                        <dd className="mt-1 text-sm font-bold">{s.price}</dd>
                      </div>
                    </dl>

                    {s.workSlug && (
                      <Link
                        href={`/works/${s.workSlug}`}
                        className="mt-6 flex items-center justify-between gap-4"
                      >
                        <span className={`text-sm font-bold ${c.text}`}>
                          <span className="underline-grow">実績を見る</span>
                        </span>
                        <span className="arrow-btn" aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}

          {/* 最後のマスは相談への導線に */}
          <Reveal as="li" delay={180} className="w-card shrink-0 snap-start md:w-auto">
            <div className="card card-hover flex h-full flex-col justify-center gap-5 bg-fg p-8 text-center text-white">
              <p className="text-xl font-bold text-balance">困りごとだけ決まっていれば十分です</p>
              <p className="text-sm text-white/70">
                やりたいことだけ聞かせてください。どう作るかはこちらで考えます。初回の相談は無料です。
              </p>
              <Link href="/contact" className="btn bg-white text-fg hover:-translate-y-0.5">
                相談してみる
              </Link>
            </div>
          </Reveal>
        </ol>

        <p className="mt-8 text-xs text-muted">※ 納期と費用はあくまで目安です。要件を詰めてから、あらためて見積りをお出しします。</p>
      </Container>
    </section>
  )
}
