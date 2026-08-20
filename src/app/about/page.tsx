import type { Metadata } from 'next'
import { CAREER, PERSONAL_FACTS, PROFILE_FACTS } from '@/content/career'
import { CERTIFICATIONS } from '@/content/certifications'
import { SITE } from '@/content/site'
import { pageMetadata, personJsonLd, profilePageJsonLd } from '@/lib/seo'
import JsonLd from '@/components/ui/JsonLd'
import Picture from '@/components/ui/Picture'
import { Blobs } from '@/components/ui/SplitText'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CertBadge from '@/components/ui/CertBadge'
import ContactCta from '@/components/sections/ContactCta'

export const metadata: Metadata = pageMetadata({
  title: 'About — 太田駿之介のプロフィールと経歴',
  description:
    '宮城県仙台市のITコンサルタント／エンジニア 太田駿之介のプロフィール。高専（建築）から建設、IT（ECの開発・進行管理）、外資系コンサルティングファームのデータエンジニアへ。ブランド Stendear の由来、経歴、資格、そして少しの遊び心。',
  path: '/about',
  type: 'article',
})

export default function AboutPage() {
  const { owner, brand } = SITE
  return (
    <>
      <JsonLd data={[personJsonLd, { ...profilePageJsonLd, url: `${SITE.url}/about` }]} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <Blobs variant="top" />
        <div className="relative mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="about-heading"
            dot="ec"
            label="About"
            title="建築の現場から、ITの現場へ"
            lead="高専で建築を学んだあと、施工管理として現場に出て、そこから IT に移りました。SIer で EC のプロジェクトリーダーを務め、いまは外資系コンサルティングファームでデータの仕事をしながら、Stendear として受託開発と制作をしています。作って渡すところまでで終わらせたくない、というのが仕事の軸です。"
          />

          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Picture
                src="/images/about/portrait-env"
                alt={`${owner.name}。打ち合わせ中のポートレート`}
                width={1200}
                height={800}
                widths={[800]}
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
                className="zoomable overflow-hidden rounded-2xl border-2 border-fg shadow-card"
                imgClassName="aspect-3/2 w-full object-cover"
              />
              <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
                <div className="grid grid-cols-timeline gap-4 py-3">
                  <dt className="text-muted">名前</dt>
                  <dd>
                    {owner.name} <span className="ml-2 font-mono text-xs text-muted">{owner.nameEn}</span>
                  </dd>
                </div>
                <div className="grid grid-cols-timeline gap-4 py-3">
                  <dt className="text-muted">肩書き</dt>
                  <dd>{owner.title}</dd>
                </div>
                {PROFILE_FACTS.map((f) => (
                  <div key={f.label} className="grid grid-cols-timeline gap-4 py-3">
                    <dt className="text-muted">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 border-t border-line pt-8">
                <h2 className="text-h3 font-bold">{brand.origin}</h2>
                <p className="mt-4 max-w-prose text-md text-muted">
                  {SITE.name}（ステンディア）は、{owner.name}が運営する個人の開発ブランドです。{brand.originNote}
                  人のためであるという信念に立ち、長く愛され使われ続けるものを作る。その想いを名前に込めています。
                </p>
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="label mb-6">Career</p>
                <ol className="border-t border-line">
                  {CAREER.map((c) => (
                    <li key={c.period + c.title} className="grid gap-3 border-b border-line py-6 sm:grid-cols-timeline-wide sm:gap-6">
                      <span className="font-mono text-xs text-muted">{c.period}</span>
                      <div>
                        <h3 className="text-lg font-bold">{c.title}</h3>
                        {c.org && <p className="mt-1 font-mono text-xs text-muted">{c.org}</p>}
                        <p className="mt-2 text-sm text-muted">{c.description}</p>
                        {c.tags && (
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {c.tags.map((t) => (
                              <li key={t} className="tag">
                                {t}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal className="mt-14" delay={60}>
                <p className="label mb-6">Certifications</p>
                <ul className="grid gap-6 sm:grid-cols-2">
                  {CERTIFICATIONS.map((c) => (
                    <li key={c.id} className="flex items-start gap-4">
                      <CertBadge cert={c} className="h-14 w-14" />
                      <div>
                        <p className="text-sm font-bold leading-snug">{c.name}</p>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {c.issuer} · {c.acquired}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Personal — 少しの遊び心 */}
          <div className="mt-20 border-t border-line pt-16 lg:mt-32 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <p className="label mb-4">Personal</p>
                <h2 className="text-h2 font-bold text-balance">仕事の外側も、少しだけ。</h2>
                <p className="mt-5 max-w-prose text-md text-muted">
                  毎日走って、マラソンに出場。その原動力はUVERworldからきています。
                  <br/>やって確かめる精神のもと、未知の領域ほど燃えるタイプです。
                </p>
                <dl className="mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                  {PERSONAL_FACTS.map((f) => (
                    <div key={f.label} className="grid grid-cols-timeline gap-4 border-b border-line py-3 text-sm">
                      <dt className="font-mono text-xs text-muted">{f.label}</dt>
                      <dd>
                        {f.value}
                        {f.href && (
                          <a
                            href={f.href}
                            target="_blank"
                            rel="noopener noreferrer me"
                            className="link ml-3 font-mono text-xs text-muted"
                          >
                            {f.linkLabel ?? f.href} ↗
                          </a>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal className="lg:col-span-4 lg:col-start-9" delay={60}>
                <Picture
                  src="/images/about/marathon-2025"
                  alt="東京レガシーハーフ 2025 完走後、メダルとタオルを手にした太田駿之介"
                  width={900}
                  height={1200}
                  widths={[600]}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="zoomable overflow-hidden rounded-2xl border-2 border-fg shadow-card"
                  imgClassName="aspect-3/4 w-full object-cover"
                />

              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <ContactCta heading="経歴も稼働条件も、遠慮なく聞いてください" />
    </>
  )
}
