import type { Certification } from '@/content/certifications'

/** 資格バッジ（160×160 グレースケール、WebP + PNG フォールバック）。装飾扱いのため alt は空 */
export default function CertBadge({ cert, className = 'h-14 w-14' }: { cert: Certification; className?: string }) {
  const base = cert.image.replace(/\.png$/, '')
  return (
    <picture className={`${className} shrink-0 overflow-hidden rounded-sm border border-line bg-surface p-1`}>
      <source type="image/webp" srcSet={`${base}.webp`} />
      <img src={`${base}.png`} alt="" width={160} height={160} loading="lazy" decoding="async" className="h-full w-full object-contain" />
    </picture>
  )
}
