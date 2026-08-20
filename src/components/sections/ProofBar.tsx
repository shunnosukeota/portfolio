import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import SectionIntro from '@/components/ui/SectionIntro'
import CertBadge from '@/components/ui/CertBadge'
import CountUp from '@/components/ui/CountUp'
import { STATS } from '@/content/stats'
import { CERTIFICATIONS } from '@/content/certifications'

/**
 * 数字と資格で「実体があること」を示す帯。
 * ページ中盤で唯一の暗い面にして、白いセクションが続く単調さを断ち切る。
 * 配色は .on-dark がトークンごと差し替えるので、中の部品はそのまま使える。
 */
export default function ProofBar() {
  return (
    <section aria-label="数字と資格" className="grid-cols-bg on-dark relative overflow-clip py-24 lg:py-32">
      <Rail label="Numbers" />
      {/* 背面の淡い光 */}
      <span
        aria-hidden="true"
        className="blob animate-blob -left-20 top-0 h-96 w-96 bg-cloud/50"
      />
      <span
        aria-hidden="true"
        className="blob animate-float -bottom-24 right-0 h-96 w-96 bg-web/45"
      />

      <Container className="relative">
        <SectionIntro
          label="Numbers"
          dot="data"
          en={
            <>
              Skills and
              <br />
              Certifications.
            </>
          }
          title="できることの範囲"
          lead="どこまで自分で手を動かせるのか。並べておくので、頼めそうかどうかの判断材料にしてもらえればと思います。"
        />

        <dl className="mt-14 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal as="div" key={s.label} delay={i * 80} className="card card-hover relative overflow-hidden p-6 lg:p-8">
              <span className="ghost-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <dd className="num relative text-stat font-bold">
                <CountUp value={s.value} />
                {s.unit && <span className="ml-0.5 text-xl text-muted">{s.unit}</span>}
              </dd>
              <dt className="relative mt-4 text-sm font-bold">{s.label}</dt>
              {s.note && <dd className="relative mt-1.5 text-xs text-muted">{s.note}</dd>}
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-14 lg:mt-20">
          <p className="label mb-6">Certifications</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 60} className="card card-hover flex items-center gap-4 p-4">
                <CertBadge cert={c} className="h-14 w-14" />
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-snug">{c.shortName}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
