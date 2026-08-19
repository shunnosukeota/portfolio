import type { Metadata } from 'next'
import { LEVEL_LABEL, SKILL_GROUPS, type SkillLevel } from '@/content/skills'
import { CERTIFICATIONS } from '@/content/certifications'
import { pageMetadata } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CertBadge from '@/components/ui/CertBadge'
import ContactCta from '@/components/sections/ContactCta'

export const metadata: Metadata = pageMetadata({
  title: 'Skills — 技術スタックと保有資格',
  description:
    'Salesforce Commerce Cloud、Snowflake / Databricks、AWS、Next.js / Laravel / WordPress など。習熟度と実務年数、AWS・Databricks・Salesforce の保有資格を掲載しています。',
  path: '/skills',
})

function LevelDots({ level }: { level: SkillLevel }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`習熟度 ${LEVEL_LABEL[level]}`}>
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-1.5 w-1.5 rounded-full ${n <= level ? 'bg-fg' : 'border border-line-strong'}`} aria-hidden="true" />
      ))}
    </span>
  )
}

export default function SkillsPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="skills-heading"
            label="Skills"
            title="EC・データ・クラウド・Webを、横断して設計できる。"
            lead="習熟度は3段階（主力 / 実務 / 経験あり）。年数は実務での使用期間の目安です。"
          />

          <section aria-labelledby="certs-heading" className="mb-16 border-y border-line py-8">
            <h2 id="certs-heading" className="label mb-6">
              Certifications — 保有資格
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal as="li" key={c.id} delay={i * 60} className="flex items-start gap-4">
                  <CertBadge cert={c} className="h-16 w-16" />
                  <div>
                    <p className="text-sm font-medium leading-snug">{c.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </section>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal as="section" key={g.id} delay={(i % 2) * 60} aria-labelledby={`group-${g.id}`}>
                <h2 id={`group-${g.id}`} className="text-h3 font-medium">
                  {g.title}
                </h2>
                <p className="mt-2 max-w-prose text-sm text-muted">{g.description}</p>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {g.skills.map((s) => (
                    <li key={s.name} className="grid grid-cols-12 items-center gap-3 py-3 text-sm">
                      <span className="col-span-7">
                        {s.name}
                        {s.note && <span className="mt-0.5 block text-xs text-muted">{s.note}</span>}
                      </span>
                      <span className="col-span-3 font-mono text-xs text-muted">{s.years ?? ''}</span>
                      <span className="col-span-2 flex items-center justify-end gap-2">
                        <LevelDots level={s.level} />
                        <span className="sr-only">{LEVEL_LABEL[s.level]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs text-muted">
            {([3, 2, 1] as SkillLevel[]).map((l) => (
              <span key={l} className="inline-flex items-center gap-2">
                <LevelDots level={l} /> {LEVEL_LABEL[l]}
              </span>
            ))}
          </div>
        </div>
      </section>
      <ContactCta heading="この技術領域で、困っていることはありませんか。" />
    </>
  )
}
