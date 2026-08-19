import { LOGO_PATHS, LOGO_VIEWBOX, MARK_PATH, MARK_VIEWBOX } from './logoPaths'

/** ワードマーク（Stendear）。currentColor で描画するためダークモードに追従する */
export function Wordmark({ className = 'h-5 w-auto', title = 'Stendear' }: { className?: string; title?: string }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} role="img" aria-label={title} fill="currentColor">
      {LOGO_PATHS.map((p, i) => (
        <path key={i} d={p.d} transform={p.transform} />
      ))}
    </svg>
  )
}

/** S マーク単体 */
export function Mark({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} aria-hidden="true" fill="currentColor">
      <path d={MARK_PATH} />
    </svg>
  )
}
