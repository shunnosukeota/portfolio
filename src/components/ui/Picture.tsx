type Props = {
  /** 拡張子なしのベースパス（例: /images/works/pretwe） */
  src: string
  alt: string
  width: number
  height: number
  /** 追加で用意している幅（-w800 など） */
  widths?: number[]
  sizes?: string
  priority?: boolean
  fallback?: 'jpg' | 'png'
  className?: string
  imgClassName?: string
}

/**
 * 静的エクスポート向けの <picture>。
 * AVIF → WebP → JPG の順にフォールバックし、width/height を必ず指定して CLS を防ぐ。
 * 画像は scripts/optimize-images.mjs で事前生成されたものを参照する。
 */
export default function Picture({
  src,
  alt,
  width,
  height,
  widths = [],
  sizes = '100vw',
  priority = false,
  fallback = 'jpg',
  className = '',
  imgClassName = '',
}: Props) {
  const set = (ext: string) =>
    [`${src}.${ext} ${width}w`, ...widths.map((w) => `${src}-w${w}.${ext} ${w}w`)].join(', ')
  const hasSet = widths.length > 0
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={hasSet ? set('avif') : `${src}.avif`} sizes={hasSet ? sizes : undefined} />
      <source type="image/webp" srcSet={hasSet ? set('webp') : `${src}.webp`} sizes={hasSet ? sizes : undefined} />
      <img
        src={`${src}.${fallback}`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={imgClassName}
      />
    </picture>
  )
}
