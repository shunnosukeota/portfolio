/**
 * 経歴（年表）。転身の物語として読ませる構成。職務経歴書（2026.05）に基づく。
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
      '建築の設計・デザインを学ぶ。図面と模型で「人が使うもの」を考え抜く姿勢は、いまのシステム設計・広告制作の土台になっています。',
    tags: ['建築設計', 'デザイン'],
  },
  {
    period: '2022.04 – 2022.10',
    title: '建設業界で施工管理としてキャリア開始',
    org: '空調設備の大手サブコン（東京・東証プライム）',
    description:
      '都内新築ビルの現場で、職方への指示・安全管理・朝礼の進行・検査書類や資材搬入の手配を担当。現場を回す経験と並行して、趣味で始めたブログとアプリ開発に手応えを感じ、IT業界への転身を決意。',
    tags: ['施工管理', '現場運営'],
  },
  {
    period: '2023.01 – 2025.07',
    title: 'IT業界へ。EC開発のSIerで入社1年経たずでプロジェクトリーダーに',
    org: 'デジタルコマース領域の一次請け SIer（仙台）',
    description:
      'Salesforce Commerce Cloud によるEC開発に従事。浄水器メーカーの新規構築を皮切りに、アパレル・ジュエリー・スポーツアパレルの各ECで機能改修と保守運用を担当。入社1年経たずでプロジェクトリーダー、その後プロジェクトマネージャーとして 3〜4 名のチームを率い、提案・見積から保守運用まで複数案件を並行してリード。',
    tags: ['SFCC', 'PL / PM', '顧客折衝', '決済・CRM連携'],
  },
  {
    period: '2025.08 –',
    title: '外資系コンサルティングファームでITコンサルタント／データエンジニアに',
    org: '大手コンサルティングファーム（アクセンチュア）',
    description:
      'データエンジニアリング領域を担当。AWS と Snowflake を活用し、ゲーム業界の製造ログを扱うデータ基盤の構築・拡張に要件定義から実装まで参画。AI を活用したメタデータ管理の提案・実装、CI/CD 化、Streamlit による業務自動化に取り組み、知見を Zenn で連載中。AWS・Databricks・Snowflake の認定資格を取得。',
    tags: ['Snowflake', 'AWS', 'AI × メタデータ管理', 'ITコンサル'],
  },
  {
    period: '2026 –',
    title: 'Stendear として受託開発・制作',
    description:
      '個人開発ブランド Stendear として、Web・EC・クラウド・データ基盤に加えて広告制作まで、領域をまたいで企画から運用まで通せる強みを生かし、事業会社・制作会社の開発パートナーとして活動。',
    tags: ['受託開発', '広告制作', '仙台'],
  },
]

/** About ページの補足プロフィール（仕事側） */
export const PROFILE_FACTS = [
  { label: '拠点', value: '宮城県仙台市（リモート対応可）' },
  { label: '現職', value: '外資系コンサルティングファーム ITコンサルタント（データエンジニアリング）' },
  { label: '稼働形態', value: '業務委託 / 準委任・請負' },
]

/** About ページの "Personal" — 遊び心のある自己紹介。href を付けると値の横にリンクが出ます */
export type PersonalFact = { label: string; value: string; href?: string; linkLabel?: string }

export const PERSONAL_FACTS: PersonalFact[] = [
  { label: '生まれ', value: '2001年11月、仙台' },
  { label: 'MBTI', value: 'ENTP — 討論者' },
  { label: '投打', value: '右投右打' },
  { label: '身長体重', value: '171cm / 64kg' },
  { label: '趣味', value: 'ランニング', href: 'https://www.strava.com/athletes/205299491', linkLabel: 'Strava' },
  { label: 'スペック', value: 'Marathon: 2:56:53 / 100km: 9:54:11' },
  { label: '推し', value: 'UVERworld' },
  { label: '座右の銘', value: '「やって確かめる」' },
]
