import Link from 'next/link'
import { NAV, SITE } from '@/content/site'
import { Mark, Wordmark } from '@/components/ui/Logo'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'

export default function Footer() {
  const social = SITE.social.filter((s) => s.url)
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-content px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 text-fg" aria-label={`${SITE.name} ホーム`}>
              <Mark className="h-7 w-auto" />
              <Wordmark className="h-5 w-auto" />
            </Link>
            <p className="mt-5 max-w-prose text-sm text-muted">
              {SITE.owner.name} — {SITE.owner.title}。{SITE.owner.location}を拠点に、Web・EC・クラウド・データ基盤の開発を、企画から運用まで一貫して支援します。
            </p>
            <div className="mt-6">
              <AvailabilityBadge />
            </div>
          </div>

          <nav aria-label="フッターナビゲーション" className="md:col-span-3 md:col-start-7">
            <p className="label mb-4">Sitemap</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted transition-colors duration-fast hover:text-fg">
                  Home
                </Link>
              </li>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors duration-fast hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${SITE.contact.email}`} className="font-mono text-muted transition-colors duration-fast hover:text-fg">
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.contact.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors duration-fast hover:text-fg"
                >
                  LINE で相談する
                </a>
              </li>
              {social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-muted transition-colors duration-fast hover:text-fg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.owner.titleEn} — {SITE.owner.locationEn}</p>
        </div>
      </div>
    </footer>
  )
}
