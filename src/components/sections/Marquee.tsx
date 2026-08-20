import { SERVICES } from '@/content/services'

const DOT: Record<string, string> = {
  web: 'bg-web',
  ec: 'bg-ec',
  cloud: 'bg-cloud',
  data: 'bg-data',
  ad: 'bg-ad',
}

/**
 * 事業名が流れ続ける帯。
 * 同じ内容を2つ並べて -50% ずらすことで途切れなく繋げるため、
 * 余白は要素間の gap ではなく各項目の右パディングで持たせている。
 */
export default function Marquee() {
  const group = (
    <div className="flex shrink-0">
      {SERVICES.map((s) => (
        <span key={s.id} className="flex items-center gap-4 pr-12 text-xl font-bold text-white">
          <span className={`h-3 w-3 shrink-0 rounded-full ${DOT[s.color]}`} />
          {s.name}
          <span className="font-mono text-label font-normal uppercase text-white/65">{s.nameEn}</span>
        </span>
      ))}
    </div>
  )
  return (
    <div aria-hidden="true" data-dark className="overflow-hidden bg-fg py-5">
      <div className="flex w-max animate-marquee">
        {group}
        {group}
      </div>
    </div>
  )
}
