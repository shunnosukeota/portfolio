/**
 * 事業紹介（Business）。
 * color は tailwind のキー（web / ec / cloud / data / ad）。カード・タグ・アイコンの色に使われます。
 * 納期・費用レンジは目安です。TODO: 実際の単価に合わせて更新してください。
 */
export type ServiceColor = 'web' | 'ec' | 'cloud' | 'data' | 'ad'

export type Service = {
  id: string
  color: ServiceColor
  /** 事業名（短く） */
  name: string
  /** 英語表記 */
  nameEn: string
  /** 成果ベースの見出し */
  title: string
  /** 1〜2文の説明 */
  description: string
  /** できること */
  scope: string[]
  tags: string[]
  delivery: string
  price: string
  workSlug?: string
}

export const SERVICES: Service[] = [
  {
    id: 'web',
    color: 'web',
    name: 'Web・アプリ開発',
    nameEn: 'Web Development',
    title: 'あとから自分たちで直せるサイトを',
    description:
      'コーポレートサイトや業務アプリを、要件を詰めるところから公開まで担当します。担当者が自分で更新できるようにするなら WordPress、表示速度を優先するなら Next.js。どちらがいいかは、更新の頻度と社内で誰が触るのかを聞いてから決めています。',
    scope: ['要件定義・情報設計', 'UI実装（レスポンシブ）', 'CMS構築 / ヘッドレス化', '公開・保守'],
    tags: ['Next.js', 'TypeScript', 'WordPress', 'Laravel'],
    delivery: '1週間〜',
    price: '5万円〜',
    workSlug: 'drawers9',
  },
  {
    id: 'ec',
    color: 'ec',
    name: 'EC構築・運用',
    nameEn: 'E-Commerce',
    title: '注文が止まらないことを最優先に',
    description:
      'Salesforce Commerce Cloud のECを、一次請け SIer で4社ぶん担当してきました。決済や在庫の連携は、画面より先に「注文が入ってから商品が届くまで」を聞きます。ここを外すと、あとから必ず手作業が増えるからです。',
    scope: ['SFRA カスタマイズ', '決済・外部API連携', 'プロモーション / カタログ設計', '運用保守・障害対応'],
    tags: ['SFCC', 'SFRA', 'OCAPI / SCAPI', '決済連携'],
    delivery: '1ヶ月〜（改修は1週間〜）',
    price: '50万円〜 / 月額運用 要相談',
    workSlug: 'sfcc-ec',
  },
  {
    id: 'cloud',
    color: 'cloud',
    name: 'クラウド構築',
    nameEn: 'Cloud & Infra',
    title: '必要なぶんだけのAWS構成に',
    description:
      'AWS 認定ソリューションアーキテクトとして構成を設計します。とりあえず大きめに作って毎月払い続ける、という状態は避けたいので、想定アクセス数と「止まったら何が困るか」を先に確認してから決めます。',
    scope: ['構成設計・見積', 'S3 / CloudFront / Lambda', 'EC2 / RDS / VPC', 'CI/CD・監視・コスト最適化'],
    tags: ['AWS', 'CloudFront', 'Lambda', 'GitHub Actions'],
    delivery: '1週間〜',
    price: '15万円〜',
    workSlug: 'stendear-site',
  },
  {
    id: 'data',
    color: 'data',
    name: 'データ基盤構築',
    nameEn: 'Data Platform',
    title: 'あちこちにあるデータを、一か所に',
    description:
      'Snowflake や Databricks でデータ基盤をつくり、ETL/ELT を書きます。本業では製造ログを扱う基盤の構築・拡張を担当中で、AI を使ったメタデータ管理や Streamlit での自動化も、実際に手を動かしながら試しています。',
    scope: ['データ基盤の設計', 'ETL / ELT パイプライン開発', 'メタデータ管理・モデリング', '品質監視・運用・CI/CD'],
    tags: ['Snowflake', 'Databricks', 'Python', 'SQL'],
    delivery: '1ヶ月〜',
    price: '40万円〜',
    workSlug: 'data-platform',
  },
  {
    id: 'ad',
    color: 'ad',
    name: '広告・販促物の制作',
    nameEn: 'Advertising',
    title: '読み飛ばされないチラシを',
    description:
      'A4のチラシから Web バナー、LP まで。デザインの前に、誰に何をいくらで伝えるのかを決めるところから入ります。足場工事会社さんの新サービス告知では、表面を料金と施工事例だけに絞りました。印刷所への入稿データまで作ります。',
    scope: ['構成・コピーライティング', 'チラシ / フライヤーのデザイン', 'Webバナー・LP', '入稿データ作成'],
    tags: ['チラシ', 'バナー', 'LP', 'コピー'],
    delivery: '1週間〜',
    price: 'A4チラシ 5万円〜 / バナー 1万円〜',
    workSlug: 'godai-flyer',
  },
]

/** 事業の並びを1行で言い切るコピー（Hero やメタで使う） */
export const BUSINESS_SUMMARY = 'Web・EC・クラウド・データ基盤・広告制作'
