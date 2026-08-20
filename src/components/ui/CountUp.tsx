'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  /** 表示する最終値。'2:56:53' / '800.5' / '5' のいずれも可 */
  value: string
  className?: string
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3)

function isTime(v: string) {
  return /^\d+:\d{2}:\d{2}$/.test(v)
}
function toSec(v: string) {
  const [h, m, s] = v.split(':').map(Number)
  return h! * 3600 + m! * 60 + s!
}
function fromSec(n: number) {
  const h = Math.floor(n / 3600)
  const m = Math.floor((n % 3600) / 60)
  const s = Math.floor(n % 60)
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/**
 * 画面に入ったら数字がカウントアップする。
 * タイム表記（H:MM:SS）は秒に直して回し、最後に整形して戻す。
 * prefers-reduced-motion のときは最終値をそのまま出す。
 */
export default function CountUp({ value, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [text, setText] = useState(value)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || done.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const time = isTime(value)
    const target = time ? toSec(value) : parseFloat(value)
    if (!Number.isFinite(target)) return
    const decimals = !time && value.includes('.') ? value.split('.')[1]!.length : 0

    const run = () => {
      const D = 1100
      const t0 = performance.now()
      const tick = (now: number) => {
        const k = Math.min(1, (now - t0) / D)
        const cur = target * ease(k)
        setText(time ? fromSec(cur) : cur.toFixed(decimals))
        if (k < 1) requestAnimationFrame(tick)
        else setText(value)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !done.current) {
            done.current = true
            setText(time ? fromSec(0) : (0).toFixed(decimals))
            run()
            io.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
