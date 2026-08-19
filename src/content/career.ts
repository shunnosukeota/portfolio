/**
 * 経歴（年表）。転身の物語として読ませる構成。
 * TODO: 年は概算です。正確な年月に更新してください。
 */
export type CareerItem = {
  period: string
  title: string
  org?: string
  description: string
  tags?: string[]
}

export const CAREER: CareerItem[] = [
  {
    period: '2017 – 2022',
    title: '高専 建築デザインコース',
    description:
      '建築の設計・デザインを学ぶ。図面と模型で「人が使うもの」を考え抜く姿勢は、いまのシステム設計の土台になっています。',
    tags: ['建築設計', 'デザイン'],
  },
  {
    period: '2022',
    title: '建設（施工）業界へ',
    description:
      '施工管理として半年間勤務。現場で工程・品質・安全を回す経験を積む一方、趣味で始めたブログとアプリ開発に手応えを感じ、IT業界への転身を決意。',
    tags: ['施工管理'],
  },
  {
    period: '2022 – 2023',
    title: 'IT業界へ転身。EC開発に従事',
    description:
      'SIer で Salesforce Commerce Cloud によるEC開発を担当。開発・運用保守を通じて業務フローを把握し、入社1年数ヶ月でプロジェクトリーダーに。',
    tags: ['SFCC', 'EC', 'AWS'],
  },
  {
    period: '2024 – 2025',
    title: 'ECプロジェクトのリーダーとして',
    description:
      '顧客折衝を中心に、提案・要件定義から設計・開発・テストまで全工程を担当。大手アパレルECの改修・運用を率いる。',
    tags: ['PL', '要件定義', '顧客折衝'],
  },
  {
    period: '2025 –',
    title: 'データエンジニアへ',
    description:
      'Snowflake / Databricks を用いたデータ基盤構築・ETL開発に従事。AWS・Databricks・Salesforce の認定資格を取得し、Web・EC・クラウド・データを横断して設計できる領域を広げる。',
    tags: ['Snowflake', 'Databricks', 'ETL'],
  },
  {
    period: '2026 –',
    title: 'Stendear として受託開発',
    description:
      '個人開発ブランド Stendear として、企画から運用まで一人で通せる強みを生かし、事業会社・制作会社の開発パートナーとして活動。',
    tags: ['受託開発', '仙台'],
  },
]

/** About ページの補足プロフィール */
export const PROFILE_FACTS = [
  { label: '拠点', value: '宮城県仙台市（リモート対応可）' },
  { label: '稼働形態', value: '業務委託 / 準委任・請負' },
  { label: '趣味', value: 'フルマラソン、野球観戦、UVERworld' },
]
