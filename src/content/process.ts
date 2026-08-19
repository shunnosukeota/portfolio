/** 進め方（Process）。発注前の不安を解消するための4ステップ。 */
export type ProcessStep = {
  step: string
  title: string
  duration: string
  description: string
}

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: '相談',
    duration: '初回 無料 / 返信 24時間以内',
    description:
      'メールか LINE でご連絡ください。目的・現状・予算感をうかがい、対応可否と進め方の当たりをつけます。オンライン打ち合わせも可能です。',
  },
  {
    step: '02',
    title: '要件定義・見積',
    duration: '3日〜2週間',
    description:
      'やること・やらないことを文書にし、範囲・納期・金額を確定します。規模に応じて段階的な見積（フェーズ分割）もご提案します。',
  },
  {
    step: '03',
    title: '設計・実装',
    duration: '2週間〜（規模による）',
    description:
      '週次で進捗を共有しながら設計・実装・テストを進めます。途中で確認できる環境を用意し、手戻りを小さくします。',
  },
  {
    step: '04',
    title: '運用・改善',
    duration: '継続 / スポット',
    description:
      '公開して終わりにしません。保守・監視・改善を継続的に、またはスポットでお引き受けします。引き継ぎ用ドキュメントも整備します。',
  },
]
