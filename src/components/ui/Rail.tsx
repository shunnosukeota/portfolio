/**
 * セクション右端に縦書きで貼りつくラベル。
 * スクロール中も位置を保ち、いま何のセクションを見ているかを示す。
 * 内容は装飾なので読み上げからは外す。
 */
export default function Rail({ label }: { label: string }) {
  return (
    <span className="rail" aria-hidden="true">
      <span>{label}</span>
    </span>
  )
}
