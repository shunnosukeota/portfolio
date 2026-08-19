import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="py-24 lg:py-40">
      <div className="mx-auto w-full max-w-content px-6 lg:px-16">
        <p className="label">404</p>
        <h1 className="mt-4 text-h2 font-medium">ページが見つかりませんでした。</h1>
        <p className="mt-5 max-w-prose text-md text-muted">URL が変更されたか、削除された可能性があります。</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            トップへ戻る
          </Link>
          <Link href="/works" className="btn-secondary">
            実績を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
