import { FEATURED_WORKS } from '@/content/works'
import SectionHeading from '@/components/ui/SectionHeading'
import WorkCard from '@/components/WorkCard'
import Reveal from '@/components/ui/Reveal'

export default function SelectedWorks() {
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-header border-t border-line py-20 lg:py-32">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <SectionHeading
          id="works-title"
          label="Selected Works"
          title="課題から成果まで、通して担当した実績。"
          lead="守秘義務のある案件は匿名化し、規模感と担当範囲を記載しています。"
          link={{ href: '/works', label: 'すべての実績を見る' }}
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {FEATURED_WORKS.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 2) * 60}>
              <WorkCard work={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
