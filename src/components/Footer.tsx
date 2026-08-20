import Link from 'next/link'
import Container from '@/components/ui/Container'
import { NAV, SITE } from '@/content/site'
import { Wordmark } from '@/components/ui/Logo'
import { SERVICES } from '@/content/services'

const DOT: Record<string, string> = {
  web: 'bg-web',
  ec: 'bg-ec',
  cloud: 'bg-cloud',
  data: 'bg-data',
  ad: 'bg-ad',
}

export default function Footer() {
  const social = SITE.social.filter((s) => s.url)
  return (
    <footer className="on-dark relative overflow-hidden">
      {/* 事業カラーの細いライン。上端で5つの領域を思い出させる */}
      <div className="flex h-1 w-full" aria-hidden="true">
        <span className="flex-1 bg-web" />
        <span className="flex-1 bg-ec" />
        <span className="flex-1 bg-cloud" />
        <span className="flex-1 bg-data" />
        <span className="flex-1 bg-ad" />
      </div>
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" prefetch={false} className="inline-flex text-fg" aria-label={`${SITE.name} ホーム`}>
              <Wordmark className="h-6 w-auto" />
            </Link>
            <p className="mt-5 max-w-prose text-sm text-muted">
              {SITE.owner.name} — {SITE.owner.title}。{SITE.owner.location}を拠点に、
              Web・EC・クラウド・データ基盤・広告制作を、企画から運用まで一貫して支援します。
            </p>
            <a href={`mailto:${SITE.contact.email}`} className="link mt-5 inline-block font-mono text-sm">
              {SITE.contact.email}
            </a>
          </div>

          <nav aria-label="事業" className="md:col-span-3">
            <p className="label mb-4">Business</p>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#business"
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-fast hover:text-fg"
                  >
                    <span className={`h-2 w-2 rounded-full ${DOT[s.color]}`} aria-hidden="true" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="サイトマップ" className="md:col-span-2">
            <p className="label mb-4">Sitemap</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" prefetch={false} className="text-muted transition-colors duration-fast hover:text-fg">
                  ホーム
                </Link>
              </li>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={false} className="text-muted transition-colors duration-fast hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label mb-4">Follow</p>
            <ul className="space-y-2.5 text-sm">
              {social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group inline-flex items-center gap-1.5 text-muted transition-colors duration-fast hover:text-fg"
                  >
                    {s.label}
                    <span className="font-mono text-xs opacity-0 transition-opacity duration-fast group-hover:opacity-100" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.owner.titleEn} — {SITE.owner.locationEn}</p>
        </div>
      </Container>
    </footer>
  )
}
