import type { Metadata } from 'next'
import { CAREER, PROFILE_FACTS } from '@/content/career'
import { CERTIFICATIONS } from '@/content/certifications'
import { SITE } from '@/content/site'
import { pageMetadata, personJsonLd, profilePageJsonLd } from '@/lib/seo'
import JsonLd from '@/components/ui/JsonLd'
import Picture from '@/components/ui/Picture'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CertBadge from '@/components/ui/CertBadge'
import ContactCta from '@/components/sections/ContactCta'

export const metadata: Metadata = pageMetadata({
  title: 'About — 太田駿之介のプロフィールと経歴',
  description:
    '宮城県仙台市のシステムエンジニア／データエンジニア 太田駿之介のプロフィール。高専（建築）から建設、IT、ECのプロジェクトリーダー、データ基盤へ。ブランド Stendear の由来と経歴を紹介します。',
  path: '/about',
  type: 'article',
})

export default function AboutPage() {
  const { owner, brand } = SITE
  return (
    <>
      <JsonLd data={[personJsonLd, { ...profilePageJsonLd, url: `${SITE.url}/about` }]} />
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="about-heading"
            label="About"
            title="建築からITへ。現場と設計の両方を知っている。"
            lead="高専で建築を学び、施工の現場を経てIT業界へ。ECのプロジェクトリーダーを務めたのち、データエンジニアへ転身。「作る」だけでなく「使われ続ける」ことまで設計するのが、仕事の軸です。"
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
                className="overflow-hidden rounded-sm border border-line"
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
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <h2 className="text-h3 font-medium">{brand.origin}</h2>
                <p className="mt-4 max-w-prose text-md text-muted">
                  {SITE.name}（ステンディア）は、{owner.name}が運営する個人の開発ブランドです。{brand.originNote}
                  人のためであるという信念に立ち、長く愛され使われ続けるものを作る。その想いを名前に込めています。
                </p>
              </Reveal>

              <Reveal className="mt-14" delay={60}>
                <p className="label mb-6">Career</p>
                <ol className="border-t border-line">
                  {CAREER.map((c) => (
                    <li key={c.period + c.title} className="grid gap-3 border-b border-line py-6 sm:grid-cols-timeline-wide sm:gap-6">
                      <span className="font-mono text-xs text-muted">{c.period}</span>
                      <div>
                        <h3 className="text-lg font-medium">{c.title}</h3>
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
                        <p className="text-sm font-medium leading-snug">{c.name}</p>
                        <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <ContactCta heading="経歴の詳細や稼働条件は、お気軽にお尋ねください。" />
    </>
  )
}
