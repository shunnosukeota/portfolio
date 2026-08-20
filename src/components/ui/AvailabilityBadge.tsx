import { SITE } from '@/content/site'

/**
 * 稼働状況バッジ。src/content/site.ts の availability を編集して更新。
 * tone='dark' は暗い面（ContactCta の黒カード）に置くとき用。
 */
export default function AvailabilityBadge({
  className = '',
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  const { status, label } = SITE.availability
  const dot = status === 'closed' ? 'bg-muted' : status === 'limited' ? 'bg-ec' : 'bg-data'
  const skin = tone === 'dark' ? 'border-white/25 bg-white/10 text-white' : 'border-line bg-bg text-fg'
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-bold ${skin} ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`} />
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
      </span>
      <span>
        <span className="sr-only">稼働状況：</span>
        {label}
      </span>
    </span>
  )
}
