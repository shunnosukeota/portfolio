import { Arrow, Box, Caption, Frame } from './DiagramPrimitives'

/** データ基盤（NDA）：ソース → 取り込み → 3層 → 活用 のデータフロー図 */
export default function DataPlatformDiagram({ title }: { title: string }) {
  return (
    <Frame title={title}>
      <Caption x={80} y={96} text="DATA FLOW — MANUFACTURING LOG PLATFORM (NDA)" />

      {/* Sources */}
      <Box x={80} y={200} w={260} h={110} title="製造ログ" sub={['AWS S3 / 日次']} />
      <Box x={80} y={350} w={260} h={110} title="業務システム" sub={['RDB / API']} />
      <Box x={80} y={500} w={260} h={110} title="ファイル" sub={['CSV / Excel']} />

      {/* Ingest */}
      <Box x={430} y={350} w={260} h={110} title="取り込み" sub={['ELT / CI/CD 自動化']} />
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
        Snowflake
      </text>
      <Box x={818} y={260} w={344} h={110} title="Raw" sub={['そのまま蓄積']} />
      <Box x={818} y={400} w={344} h={110} title="Staging" sub={['整形 / メタデータ付与']} />
      <Box x={818} y={540} w={344} h={110} title="Mart" sub={['分析用モデル / AI 活用']} emphasis />
      <Arrow x1={690} y1={405} x2={790} y2={405} label="Spark / SQL" />

      {/* Consumers */}
      <Box x={1300} y={330} w={220} h={110} title="BI" sub={['ダッシュボード']} />
      <Box x={1300} y={480} w={220} h={110} title="Streamlit" sub={['業務自動化']} />
      <Arrow x1={1162} y1={570} x2={1300} y2={400} />
      <Arrow x1={1162} y1={600} x2={1300} y2={535} />

      <line x1={80} y1={800} x2={1520} y2={800} stroke="currentColor" strokeWidth={2} strokeOpacity={0.25} />
      <Caption x={80} y={860} text="ROLE — 基盤設計 / パイプライン開発 / AI メタデータ管理 / CI/CD" />
      <Caption x={80} y={910} text="SCALE — 全 10 名のプロジェクト（提案・要件定義・開発）" />
    </Frame>
  )
}
