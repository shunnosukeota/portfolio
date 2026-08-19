import { STATS } from '@/content/stats'
import { CERTIFICATIONS } from '@/content/certifications'
import Reveal from '@/components/ui/Reveal'
import CertBadge from '@/components/ui/CertBadge'

/** 信頼の指標：数値4つ＋保有資格バッジ */
export default function ProofBar() {
  return (
    <section aria-label="信頼の指標" className="border-y border-line">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className={`py-8 md:py-10 ${i % 2 === 1 ? 'pl-6' : ''} ${i > 0 ? 'md:border-l md:border-line md:pl-8' : ''} ${
                i >= 2 ? 'border-t border-line md:border-t-0' : ''
              }`}
            >
              <dd className="order-1 font-mono text-stat font-medium tracking-tighter">
                {s.value}
                {s.unit && <span className="ml-0.5 text-h3 text-muted">{s.unit}</span>}
              </dd>
              <dt className="mt-3 text-sm font-medium">{s.label}</dt>
              {s.note && <dd className="mt-1 text-xs text-muted">{s.note}</dd>}
            </Reveal>
          ))}
        </dl>

        <div className="border-t border-line py-8 md:py-10">
          <p className="label mb-6">Certifications</p>
          <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 60} className="flex items-start gap-4">
                <CertBadge cert={c} className="h-14 w-14 md:h-16 md:w-16" />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{c.shortName}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                  <span className="sr-only">{c.name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
