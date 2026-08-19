import { Arrow, Box, Caption, Frame } from './DiagramPrimitives'

/** データ基盤（NDA）：ソース → 取り込み → 3層 → 活用 のデータフロー図 */
export default function DataPlatformDiagram({ title }: { title: string }) {
  return (
    <Frame title={title}>
      <Caption x={80} y={96} text="DATA FLOW — ANALYTICS PLATFORM (NDA)" />

      {/* Sources */}
      <Box x={80} y={200} w={260} h={110} title="基幹システム" sub={['RDB / 日次']} />
      <Box x={80} y={350} w={260} h={110} title="SaaS" sub={['API / 時間毎']} />
      <Box x={80} y={500} w={260} h={110} title="ファイル" sub={['CSV / Excel']} />

      {/* Ingest */}
      <Box x={430} y={350} w={260} h={110} title="取り込み" sub={['ETL / ELT 自動化']} />
      <Arrow x1={340} y1={255} x2={430} y2={385} />
      <Arrow x1={340} y1={405} x2={430} y2={405} />
      <Arrow x1={340} y1={555} x2={430} y2={425} />

      {/* Warehouse layers */}
      <rect x={790} y={170} width={400} height={500} rx={8} fill="none" stroke="currentColor" strokeWidth={3.5} />
      <text
        x={818}
        y={226}
        fontSize={30}
        fontWeight={500}
        fill="currentColor"
        style={{ fontFamily: 'var(--font-sans), var(--font-jp), sans-serif' }}
      >
        Snowflake / Databricks
      </text>
      <Box x={818} y={260} w={344} h={110} title="Raw" sub={['そのまま蓄積']} />
      <Box x={818} y={400} w={344} h={110} title="Staging" sub={['整形 / 品質チェック']} />
      <Box x={818} y={540} w={344} h={110} title="Mart" sub={['分析用モデル']} emphasis />
      <Arrow x1={690} y1={405} x2={790} y2={405} label="Spark / SQL" />

      {/* Consumers */}
      <Box x={1300} y={330} w={220} h={110} title="BI" sub={['ダッシュボード']} />
      <Box x={1300} y={480} w={220} h={110} title="レポート" sub={['定期配信']} />
      <Arrow x1={1162} y1={570} x2={1300} y2={400} />
      <Arrow x1={1162} y1={600} x2={1300} y2={535} />

      <line x1={80} y1={800} x2={1520} y2={800} stroke="currentColor" strokeWidth={2} strokeOpacity={0.25} />
      <Caption x={80} y={860} text="ROLE — 基盤設計 / パイプライン開発 / モデリング / 監視・運用" />
      <Caption x={80} y={910} text="SCALE — 複数部門が利用する全社横断の分析基盤" />
    </Frame>
  )
}
