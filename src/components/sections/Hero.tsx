import Link from 'next/link'
import { SITE } from '@/content/site'
import Picture from '@/components/ui/Picture'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'

/**
 * ファーストビュー：1画面で「誰が・何ができて・どう頼めるか」を完結させる。
 * 進入モーションは @starting-style（CSS のみ）。初期状態を opacity:0 にしない。
 */
export default function Hero() {
  const { owner } = SITE
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="mx-auto flex min-h-hero w-full max-w-content flex-col justify-center px-6 py-12 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <p className="label enter">
              <span>{owner.titleEn.toUpperCase()}</span>
              <span className="hidden sm:inline"> — </span>
              <span className="mt-1 block sm:mt-0 sm:inline">{owner.locationEn.toUpperCase()}</span>
            </p>
            {/* LCP 要素のため進入フェードは付けない（opacity アニメーションは LCP 計測を遅らせる） */}
            <h1 id="hero-title" className="mt-6 text-hero font-medium text-balance">
              Web・EC・クラウド・データ基盤を、企画から運用まで一人で通す。
            </h1>
            <p
              className="enter mt-8 max-w-prose text-base text-muted md:text-md lg:max-w-prose-wide"
              style={{ '--enter-delay': '120ms' } as React.CSSProperties}
            >
              要件定義から実装・運用まで一貫対応。SFCC によるEC構築、AWS、Snowflake / Databricks のデータ基盤、チラシやバナーの広告制作まで、仙台を拠点に事業会社・制作会社を支えます。個人開発ブランド {SITE.name}。
            </p>
            <div
              className="enter mt-10 flex flex-wrap items-center gap-3"
              style={{ '--enter-delay': '180ms' } as React.CSSProperties}
            >
              <Link href="/contact" className="btn-primary">
                相談する
              </Link>
              <Link href="#works" className="btn-secondary">
                実績を見る
              </Link>
              <AvailabilityBadge className="ml-0 sm:ml-2" />
            </div>
          </div>

          {/* 人物：小さく・モノクロ・文字を邪魔しない */}
          <div
            className="enter flex items-center gap-5 lg:col-span-3 lg:flex-col lg:items-end lg:justify-end lg:text-right"
            style={{ '--enter-delay': '240ms' } as React.CSSProperties}
          >
            <Picture
              src="/images/hero/portrait"
              alt={`${owner.name}のポートレート`}
              width={480}
              height={640}
              widths={[240]}
              sizes="(min-width: 1024px) 128px, (min-width: 640px) 80px, 64px"
              priority
              className="w-16 shrink-0 overflow-hidden rounded-sm border border-line sm:w-20 lg:w-32"
              imgClassName="aspect-3/4 h-auto w-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{owner.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">{owner.nameEn}</p>
              <p className="mt-2 text-xs text-muted">{owner.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
