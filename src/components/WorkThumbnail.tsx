import type { WorkThumbnail as Thumb } from '@/content/works'
import Picture from '@/components/ui/Picture'
import ApparelEcDiagram from '@/components/diagrams/ApparelEcDiagram'
import DataPlatformDiagram from '@/components/diagrams/DataPlatformDiagram'

/** 16:10 に統一したサムネイル。画像（元の色）または SVG 図版 */
export default function WorkThumbnail({
  thumbnail,
  sizes = '(min-width: 1024px) 600px, 100vw',
  priority = false,
}: {
  thumbnail: Thumb
  sizes?: string
  priority?: boolean
}) {
  if (thumbnail.type === 'diagram') {
    const Diagram = thumbnail.id === 'apparel-ec' ? ApparelEcDiagram : DataPlatformDiagram
    return (
      <div className="aspect-16/10 w-full overflow-hidden rounded-xl border border-line bg-surface">
        <Diagram title={thumbnail.alt} />
      </div>
    )
  }
  return (
    <Picture
      src={thumbnail.src}
      alt={thumbnail.alt}
      width={thumbnail.width}
      height={thumbnail.height}
      widths={[800]}
      sizes={sizes}
      priority={priority}
      className="aspect-16/10 w-full overflow-hidden rounded-xl border border-line bg-surface"
      imgClassName="img-thumb h-full w-full object-cover"
    />
  )
}
