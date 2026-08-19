import type { Metadata } from 'next'
import { SITE, mailtoHref } from '@/content/site'
import { PROCESS } from '@/content/process'
import { pageMetadata } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = pageMetadata({
  title: 'Contact — お問い合わせ・ご相談',
  description:
    'Web・EC・クラウド・データ基盤の開発のご相談はメールまたは LINE で。通常24時間以内に返信します。初回相談は無料、要件が固まっていなくても大丈夫です。',
  path: '/contact',
})

export default function ContactPage() {
  const { contact, availability } = SITE
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <SectionHeading
          level="h1"
          id="contact-heading"
          label="Contact"
          title="まずは、相談から。"
          lead={`メールか LINE でご連絡ください。通常${contact.responseTime}に返信します。初回相談は無料。要件が固まっていなくても大丈夫です。`}
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex flex-wrap gap-3">
              <a href={mailtoHref()} className="btn-primary">
                メールで相談する
              </a>
              <a href={contact.line} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LINE で相談する
              </a>
            </div>
            <dl className="mt-10 divide-y divide-line border-y border-line text-sm">
              <div className="grid grid-cols-timeline gap-4 py-4">
                <dt className="text-muted">メール</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="link font-mono text-xs">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-timeline gap-4 py-4">
                <dt className="text-muted">LINE</dt>
                <dd>
                  <a href={contact.line} target="_blank" rel="noopener noreferrer" className="link font-mono text-xs break-all">
                    {contact.line.replace(/^https?:\/\//, '')}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-timeline gap-4 py-4">
                <dt className="text-muted">返信目安</dt>
                <dd className="font-mono text-xs">{contact.responseTime}</dd>
              </div>
              <div className="grid grid-cols-timeline gap-4 py-4">
                <dt className="text-muted">稼働状況</dt>
                <dd>
                  <AvailabilityBadge />
                  <p className="mt-2 text-xs text-muted">{availability.note}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <p className="label mb-4">お伝えいただけるとスムーズなこと</p>
              <ul className="max-w-prose space-y-2 text-sm text-muted">
                {contact.mailBody.split('\n').map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-3 h-px w-4 shrink-0 bg-line-strong" aria-hidden="true" />
                    <span>{line.replace(/：$/, '')}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">※「メールで相談する」を押すと、上記の項目が本文に入った状態でメールが開きます。</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={60}>
            <p className="label mb-6">ご相談後の流れ</p>
            <ol className="border-t border-line">
              {PROCESS.map((p) => (
                <li key={p.step} className="grid grid-cols-meta gap-3 border-b border-line py-5">
                  <span className="font-mono text-sm text-muted">{p.step}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="text-lg font-medium">{p.title}</h2>
                      <span className="font-mono text-xs text-muted">{p.duration}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{p.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
