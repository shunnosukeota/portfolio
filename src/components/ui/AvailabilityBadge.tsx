import { SITE } from '@/content/site'

/** 稼働状況バッジ。src/content/site.ts の availability を編集して更新 */
export default function AvailabilityBadge({ className = '' }: { className?: string }) {
  const { status, label } = SITE.availability
  const dot =
    status === 'closed'
      ? 'border border-line-strong'
      : status === 'limited'
        ? 'bg-fg'
        : 'bg-fg ring-4 ring-line'
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-fg ${className}`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
      <span>
        <span className="sr-only">稼働状況：</span>
        {label}
      </span>
    </span>
  )
}
