import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Rail from '@/components/ui/Rail'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'
import { SITE, mailtoHref } from '@/content/site'

export default function ContactCta({ heading = '要件は、まだなくて大丈夫です' }: { heading?: string }) {
  return (
    <section id="contact" className="relative scroll-mt-header pb-16 pt-20 lg:pb-20 lg:pt-28">
      <Rail label="Contact" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-fg px-7 py-14 text-white lg:px-16 lg:py-20">
            {/* 装飾の玉 */}
            <span aria-hidden="true" className="blob animate-blob -left-10 -top-10 h-64 w-64 bg-web/60" />
            <span aria-hidden="true" className="blob animate-float -bottom-16 right-0 h-72 w-72 bg-ad/50" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 font-mono text-label uppercase text-white/80">
                  Contact
                </span>
                <p className="mt-8 text-en font-normal text-balance" aria-hidden="true">
                  Get in
                  <br />
                  Touch.
                </p>
                <h2 className="mt-7 max-w-[16ch] text-h3 font-bold text-balance">{heading}</h2>
                <p className="mt-6 max-w-prose-wide text-md text-white/75">
                  メールか LINE をください。だいたい{SITE.contact.responseTime}に返します。
                  「こんなことできますか」の一行だけでも構いません。そこから一緒に整理していければと思います。
                </p>
                {/* 丸つきの大きなピル。押す場所が明確になるよう横幅いっぱいに置く */}
                <div className="mt-10 grid max-w-prose-wide gap-3">
                  <a href={mailtoHref()} className="pill-cta bg-white text-fg">
                    メールで相談する
                    <i className="bg-fg text-white" aria-hidden="true" />
                  </a>
                  <a
                    href={SITE.contact.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-cta border-2 border-white/40 text-white hover:bg-white/10"
                  >
                    LINE で相談する
                    <i className="bg-white text-fg" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <dl className="divide-y divide-white/15 border-y border-white/15 text-sm">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-white/60">メール</dt>
                    <dd className="font-mono text-xs">
                      <a href={`mailto:${SITE.contact.email}`} className="underline-grow">
                        {SITE.contact.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-white/60">返信目安</dt>
                    <dd className="font-mono text-xs">{SITE.contact.responseTime}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-white/60">拠点</dt>
                    <dd className="text-xs">{SITE.owner.location}</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <AvailabilityBadge tone="dark" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
