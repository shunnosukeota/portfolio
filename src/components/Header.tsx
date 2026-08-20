'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, SITE } from '@/content/site'
import { Wordmark } from '@/components/ui/Logo'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(false)
  const [open, setOpen] = useState(false)
  const bar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // スクロール毎に getBoundingClientRect を呼ぶと強制リフローが起きて操作が重くなる。
    // 暗い面の範囲とページ全長は先に一度だけ測っておき、以降は数値の比較だけで済ませる。
    const darks = Array.from(document.querySelectorAll<HTMLElement>('.on-dark, [data-dark]'))
    let ranges: [number, number][] = []
    let max = 0
    let ticking = false

    const measure = () => {
      const y = window.scrollY
      ranges = darks.map((el) => {
        const r = el.getBoundingClientRect()
        return [r.top + y, r.top + y + r.height]
      })
      max = document.documentElement.scrollHeight - window.innerHeight
    }

    const update = () => {
      ticking = false
      const y = window.scrollY
      setScrolled(y > 12)
      // ヘッダーの中心が暗い面に重なっていれば白抜きにする
      const mid = y + 38
      setOverDark(ranges.some(([a, b]) => mid >= a && mid <= b))
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  /**
   * いま開いているページのリンクを押したときの処理。
   * Next.js の Link は同一ルートだと何も起きず「押しても反応しない」ように見えるので、
   * その場合だけ通常のページ遷移に切り替える。
   */
  const onNavClick = (href: string) => (e: React.MouseEvent) => {
    if (pathname !== href) return
    // 新しいタブで開く操作は邪魔しない
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    setOpen(false)
    window.location.href = href
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-header transition-all duration-base ease-out ${
          overDark && !open ? 'over-dark' : ''
        } ${scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'border-b border-transparent'}`}
      >
        <div className="mx-auto flex h-full w-full max-w-content items-center justify-between px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            prefetch={false}
            onClick={onNavClick('/')}
            className="flex items-center text-fg"
            aria-label={`${SITE.name} ホーム`}
          >
            <Wordmark className="h-5 w-auto" />
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                onClick={onNavClick(item.href)}
                className={`text-sm font-bold transition-colors duration-fast hover:text-brand ${
                  isActive(item.href) ? 'text-brand' : 'text-fg'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={onNavClick('/contact')} className="btn-primary btn-sm">
              お問い合わせ
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full text-fg transition-colors duration-fast hover:bg-surface md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <path d="M5 5l12 12" />
                  <path d="M17 5L5 17" />
                </>
              ) : (
                <>
                  <path d="M2 7h18" />
                  <path d="M2 15h18" />
                </>
              )}
            </svg>
          </button>
        </div>
        <span ref={bar} className="progress" aria-hidden="true" />
      </header>

      <div hidden={!open} className="fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto bg-bg md:hidden">
        <nav aria-label="モバイルナビゲーション" className="flex min-h-full flex-col px-6 pb-12 pt-6">
          <ul className="divide-y divide-line border-y border-line">
            <li>
              <Link href="/" onClick={onNavClick('/')} className="flex items-center justify-between py-5 text-xl font-bold">
                ホーム
                <span className="font-mono text-xs text-muted" aria-hidden="true">→</span>
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavClick(item.href)}
                  className="flex items-center justify-between py-5 text-xl font-bold"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={onNavClick('/contact')} className="btn-primary mt-8">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </>
  )
}
