import { Arrow, Box, Caption, Frame } from './DiagramPrimitives'

/** 大手アパレルEC（NDA）：SFCC を中心としたシステム連携図 */
export default function ApparelEcDiagram({ title }: { title: string }) {
  return (
    <Frame title={title}>
      <Caption x={80} y={96} text="ARCHITECTURE — B2C COMMERCE (NDA)" />

      {/* Customer */}
      <Box x={80} y={400} w={300} h={170} title="お客様" sub={['Web / スマホ', '会員・ゲスト購入']} />
      <Arrow x1={380} y1={485} x2={560} y2={485} label="HTTPS" />

      {/* SFCC core */}
      <Box
        x={560}
        y={250}
        w={520}
        h={470}
        title="Salesforce Commerce Cloud"
        sub={['SFRA ストアフロント', 'カート / チェックアウト', 'プロモーション / カタログ', 'Jobs（バッチ連携）', 'OCAPI / SCAPI']}
        emphasis
      />

      {/* External systems */}
      <Box x={1260} y={180} w={260} h={110} title="決済代行" sub={['カード・後払い']} />
      <Box x={1260} y={330} w={260} h={110} title="ポイント / CRM" sub={['会員連携']} />
      <Box x={1260} y={480} w={260} h={110} title="基幹 / 在庫" sub={['商品・在庫・受注']} />
      <Box x={1260} y={630} w={260} h={110} title="倉庫 / 配送" sub={['出荷・追跡']} />

      <Arrow x1={1080} y1={330} x2={1260} y2={235} label="API" />
      <Arrow x1={1080} y1={400} x2={1260} y2={385} label="API" />
      <Arrow x1={1080} y1={520} x2={1260} y2={535} label="Jobs / Feed" />
      <Arrow x1={1080} y1={600} x2={1260} y2={685} label="Jobs / Feed" />

      {/* Role line */}
      <line x1={80} y1={800} x2={1520} y2={800} stroke="currentColor" strokeWidth={2} strokeOpacity={0.25} />
      <Caption x={80} y={860} text="ROLE — PL / 要件定義 / 設計 / 開発 / テスト / リリース / 運用" />
      <Caption x={80} y={910} text="SCALE — 公式EC・開発チーム 〜10名" />
    </Frame>
  )
}
