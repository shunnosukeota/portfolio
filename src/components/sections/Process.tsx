import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import SectionIntro from '@/components/ui/SectionIntro'
import { PROCESS } from '@/content/process'

const STEP_COLOR = ['bg-web', 'bg-ec', 'bg-cloud', 'bg-data']

/**
 * 進め方。
 * 番号を四角で置き、縦線でつなぐ形にして「順番があること」を ひと目で分かるようにした。
 */
export default function Process() {
  const last = PROCESS.length - 1
  return (
    <section
      id="process"
      className="grid-cols-bg relative scroll-mt-header overflow-clip border-t border-line bg-surface py-24 lg:py-32"
    >
      <Rail label="Flow" />
      <Container className="relative">
        <SectionIntro
          label="Process"
          dot="cloud"
          en={
            <>
              How It
              <br />
              Starts.
            </>
          }
          title="先に決めて、それから作る。"
          lead="範囲と納期と金額を文書にしてから着手します。作りながら決めていくと、だいたいどこかで揉めるからです。最初の相談は無料なので、まだ何も決まっていない段階でも大丈夫です。"
        />

        <ol className="mt-16 lg:mt-24">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={(i % 2) * 80} className="grid grid-cols-step gap-6 sm:gap-10">
              {/* 番号と、次のステップへ伸びる線 */}
              <div className="relative flex justify-center">
                <span className={`step-num ${STEP_COLOR[i] ?? 'bg-fg'} text-white`}>{i + 1}</span>
                {i !== last && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 top-14 w-px -translate-x-1/2 bg-line-strong"
                  />
                )}
              </div>

              <div className={i === last ? '' : 'pb-14 lg:pb-20'}>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <h3 className="text-h3 font-bold">{p.title}</h3>
                  <p className="font-mono text-xs text-muted">{p.duration}</p>
                </div>
                <p className="mt-4 max-w-prose-wide text-md text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
