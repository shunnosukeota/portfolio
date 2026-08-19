/**
 * NDA 案件用 SVG 図版の共通パーツ。16:10（viewBox 1600×1000）、currentColor で描画し、
 * ライト／ダーク両モードに追従する。テキストはラベル用に等幅フォント。
 */
export const STROKE = 2.5

export function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  emphasis = false,
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string[]
  emphasis?: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={emphasis ? 'currentColor' : 'none'}
        fillOpacity={emphasis ? 0.06 : 0}
        stroke="currentColor"
        strokeWidth={emphasis ? STROKE * 1.4 : STROKE}
      />
      <text
        x={x + 28}
        y={y + 52}
        fontSize={34}
        fontWeight={500}
        fill="currentColor"
        style={{ fontFamily: 'var(--font-sans), var(--font-jp), sans-serif', letterSpacing: '-0.01em' }}
      >
        {title}
      </text>
      {sub?.map((s, i) => (
        <text
          key={s}
          x={x + 28}
          y={y + 98 + i * 40}
          fontSize={26}
          fill="currentColor"
          fillOpacity={0.62}
          style={{ fontFamily: 'var(--font-mono), ui-monospace, monospace' }}
        >
          {s}
        </text>
      ))}
    </g>
  )
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
  dashed = false,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  label?: string
  dashed?: boolean
}) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeDasharray={dashed ? '8 8' : undefined}
        markerEnd="url(#arrow)"
      />
      {label && (
        <text
          x={mx}
          y={my - 14}
          fontSize={22}
          textAnchor="middle"
          fill="currentColor"
          fillOpacity={0.62}
          style={{ fontFamily: 'var(--font-mono), ui-monospace, monospace', letterSpacing: '0.04em' }}
        >
          {label}
        </text>
      )}
    </g>
  )
}

export function Caption({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fontSize={22}
      fill="currentColor"
      fillOpacity={0.62}
      style={{ fontFamily: 'var(--font-mono), ui-monospace, monospace', letterSpacing: '0.08em' }}
    >
      {text}
    </text>
  )
}

export function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 1600 1000" role="img" aria-label={title} className="h-full w-full text-fg">
      <title>{title}</title>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>
      {children}
    </svg>
  )
}
