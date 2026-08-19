import type { Metadata } from 'next'
import { WORKS } from '@/content/works'
import { pageMetadata } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import WorkCard from '@/components/WorkCard'
import Reveal from '@/components/ui/Reveal'
import ContactCta from '@/components/sections/ContactCta'

export const metadata: Metadata = pageMetadata({
  title: 'Works — 実績・ケーススタディ',
  description:
    'Salesforce Commerce Cloud による大手アパレルEC、Snowflake / Databricks のデータ基盤、WordPress コーポレートサイト、Laravel アプリなど。課題・担当範囲・技術・成果をケーススタディ形式で紹介します。',
  path: '/works',
})

export default function WorksPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="works-heading"
            label="Works"
            title="課題から成果まで、通して担当した実績。"
            lead="守秘義務のある案件は匿名化し、規模感と担当範囲を記載しています。各案件のケーススタディで、課題 → 担当 → 技術 → 成果 の流れを確認できます。"
          />
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {WORKS.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 2) * 60}>
                <WorkCard work={w} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCta heading="似た課題をお持ちですか。まずはご相談ください。" />
    </>
  )
}
