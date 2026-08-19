import Link from 'next/link'
import { SERVICES } from '@/content/services'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

/** 提供領域：カードではなく罫線区切りのリスト */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 lg:py-32">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <SectionHeading
          id="services-title"
          label="Services"
          title="頼めること。"
          lead="5つの領域を、要件定義から運用まで一人で通せます。小さな改修やチラシ1枚からご相談ください。"
          link={{ href: '/skills', label: '技術スタックを見る' }}
        />
        <ol className="border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.id} className="border-b border-line">
              <div className="grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs text-muted">{s.category}</p>
                  <h3 className="mt-2 text-h3 font-medium text-balance">{s.title}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-muted">{s.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="主な技術">
                    {s.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <dl className="grid grid-cols-2 gap-4 font-mono text-xs md:grid-cols-1">
                    <div>
                      <dt className="text-muted">納期目安</dt>
                      <dd className="mt-1 text-sm">{s.delivery}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">費用目安</dt>
                      <dd className="mt-1 text-sm">{s.price}</dd>
                    </div>
                  </dl>
                  {s.workSlug && (
                    <p className="mt-4">
                      <Link href={`/works/${s.workSlug}`} className="link text-sm">
                        実績を見る →
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 text-xs text-muted">
          ※ 納期・費用は目安です。要件定義のうえで正式なお見積りをお出しします。
        </p>
      </div>
    </section>
  )
}
