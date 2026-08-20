'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** stagger 用の遅延（ms）。60ms 刻みを推奨 */
  delay?: number
  as?: ElementType
}

/**
 * スクロール連動のフェード（opacity + 8px）。
 * html.js が付与された場合のみ CSS 側で初期非表示になるため、
 * JS が失敗してもコンテンツは最初から表示される。
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
