import type { Metadata } from 'next'
import { WORKS } from '@/content/works'
import { pageMetadata } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import WorkCard from '@/components/WorkCard'
import { Blobs } from '@/components/ui/SplitText'
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
      <section className="relative overflow-hidden py-16 lg:py-24">
        <Blobs variant="top" />
        <div className="relative mx-auto w-full max-w-content px-6 lg:px-16">
          <SectionHeading
            level="h1"
            id="works-heading"
            dot="web"
            label="Works"
            title="どこからどこまで担当したか"
            lead="守秘義務のある案件は社名を伏せています。それぞれのケーススタディに、何が課題で、どこを担当して、何を使って、結果どうなったかを書きました。"
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
      <ContactCta heading="似たようなことで困っていませんか" />
    </>
  )
}
