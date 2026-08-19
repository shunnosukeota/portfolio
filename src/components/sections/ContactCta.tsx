import { SITE, mailtoHref } from '@/content/site'
import Reveal from '@/components/ui/Reveal'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'

export default function ContactCta({ heading = 'まずは、相談から。' }: { heading?: string }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 lg:py-32">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="label mb-4">Contact</p>
            <h2 id="contact-title" className="text-h2 font-medium text-balance">
              {heading}
            </h2>
            <p className="mt-5 max-w-prose text-md text-muted">
              メールか LINE でご連絡ください。通常{SITE.contact.responseTime}に返信します。要件が固まっていなくても大丈夫です。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mailtoHref()} className="btn-primary">
                メールで相談する
              </a>
              <a href={SITE.contact.line} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LINE で相談する
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={60}>
            <dl className="divide-y divide-line border-y border-line text-sm">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-muted">メール</dt>
                <dd className="font-mono text-xs">
                  <a href={`mailto:${SITE.contact.email}`} className="link">
                    {SITE.contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-muted">返信目安</dt>
                <dd className="font-mono text-xs">{SITE.contact.responseTime}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-muted">稼働状況</dt>
                <dd>
                  <AvailabilityBadge />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-muted">拠点</dt>
                <dd className="text-xs">{SITE.owner.location}（リモート可）</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
