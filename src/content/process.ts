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
      'メールか LINE をください。何をしたいか、いま何が困っているか、予算はどのくらいかを聞かせてもらえれば、できるかどうかとだいたいの進め方をお返しします。オンラインでも構いません。',
  },
  {
    step: '02',
    title: '要件定義・見積',
    duration: '3日〜2週間',
    description:
      'やること、やらないことを書き出して、範囲と納期と金額を確定させます。一度に全部やると大きくなりすぎる場合は、フェーズを切って分けることも提案します。',
  },
  {
    step: '03',
    title: '設計・実装',
    duration: '2週間〜（規模による）',
    description:
      '週に一度、進み具合を共有しながら進めます。途中で実際に触れる環境を用意するので、「思っていたのと違う」に早い段階で気づけます。',
  },
  {
    step: '04',
    title: '運用・改善',
    duration: '継続 / スポット',
    description:
      '公開したあとの保守や改善も引き受けます。毎月でも、必要なときだけでも構いません。将来ほかの人に引き継ぐ可能性も考えて、ドキュメントは残します。',
  },
]
