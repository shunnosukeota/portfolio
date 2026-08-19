'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, SITE } from '@/content/site'
import { Wordmark } from '@/components/ui/Logo'
import AvailabilityBadge from '@/components/ui/AvailabilityBadge'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  // スクロールで背景を backdrop-blur 化
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ルート遷移でドロワーを閉じる
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // ドロワー表示中は背面スクロールを止め、Esc で閉じる
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
  const solid = scrolled || open

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 h-header transition-colors duration-base ease-out ${
        solid ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-content items-center justify-between px-6 lg:px-16">
        <Link href="/" className="flex items-center rounded-sm text-fg" aria-label={`${SITE.name} ホーム`}>
          <Wordmark className="h-5 w-auto" />
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-sm text-sm tracking-wide transition-colors duration-fast hover:text-fg ${
                isActive(item.href) ? 'text-fg' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary btn-sm">
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-sm text-fg md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? (
              <>
                <path d="M4 4l12 12" />
                <path d="M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M2 6h16" />
                <path d="M2 14h16" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>

      {/* SP ドロワー（リンクは絶対パス）。header の backdrop-filter が
          fixed の包含ブロックにならないよう、header の外に置く */}
      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto bg-bg md:hidden"
      >
        <nav aria-label="モバイルナビゲーション" className="flex min-h-full flex-col px-6 pb-10 pt-6">
          <ul className="divide-y divide-line border-y border-line">
            <li>
              <Link href="/" className="flex items-center justify-between py-5 text-xl font-medium">
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="flex items-center justify-between py-5 text-xl font-medium"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <a href={`mailto:${SITE.contact.email}`} className="btn-secondary font-mono text-xs">
              {SITE.contact.email}
            </a>
          </div>
          <div className="mt-auto pt-10">
            <AvailabilityBadge />
          </div>
        </nav>
      </div>
    </>
  )
}
