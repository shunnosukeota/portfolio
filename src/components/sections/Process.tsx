import { PROCESS } from '@/content/process'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line py-20 lg:py-32">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <SectionHeading
          id="process-title"
          label="Process"
          title="進め方は、4ステップ。"
          lead="初回相談は無料です。範囲・納期・金額を文書で確定してから着手します。"
        />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 60} className="border-t border-line-strong pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-muted">{p.step}</span>
                <span className="font-mono text-xs text-muted">{p.duration}</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm text-muted">{p.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
