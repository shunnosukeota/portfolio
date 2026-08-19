import { CAREER } from '@/content/career'
import { SITE } from '@/content/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function AboutTeaser() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 lg:py-32">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <SectionHeading
          id="about-title"
          label="About"
          title="建築からITへ。現場と設計の両方を知っている。"
          link={{ href: '/about', label: 'プロフィールを見る' }}
        />
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="max-w-prose text-md text-muted">
              高専で建築を学び、施工の現場を経てIT業界へ。ECのプロジェクトリーダーを務めたのち、データエンジニアへ転身しました。「作る」だけでなく「使われ続ける」ことまで設計するのが、私の仕事の軸です。
            </p>
            <div className="mt-8 border-t border-line pt-6">
              <p className="label">{SITE.brand.origin}</p>
              <p className="mt-3 max-w-prose text-sm text-muted">{SITE.brand.originNote}</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={60}>
            <ol className="divide-y divide-line border-y border-line">
              {CAREER.map((c) => (
                <li key={c.period + c.title} className="grid grid-cols-timeline gap-4 py-4 sm:grid-cols-timeline-wide">
                  <span className="font-mono text-xs text-muted">{c.period}</span>
                  <span className="text-sm">{c.title}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
