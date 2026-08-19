/**
 * Services（提供領域）。
 * 納期・費用レンジは目安です。TODO: 実際の単価に合わせて更新してください。
 */
export type Service = {
  id: string
  /** 成果ベースの見出し */
  title: string
  /** 領域名（ラベル） */
  category: string
  /** 1〜2文の成果ベースの説明 */
  description: string
  /** 対応範囲 */
  scope: string[]
  tags: string[]
  /** 想定納期の目安 */
  delivery: string
  /** 費用レンジの目安 */
  price: string
  /** 代表的な実績（works の slug） */
  workSlug?: string
}

export const SERVICES: Service[] = [
  {
    id: 'web',
    category: 'Web / アプリ開発',
    title: '運用しやすく、速いWebを。企画から公開まで。',
    description:
      'コーポレートサイト・サービスサイト・業務アプリを、要件定義から設計・実装・公開まで一貫して担当します。CMS（WordPress）での更新運用や、Next.js による高速な静的サイトにも対応します。',
    scope: ['要件定義・情報設計', 'UI実装（レスポンシブ）', 'CMS構築 / ヘッドレス化', '公開・保守'],
    tags: ['Next.js', 'TypeScript', 'WordPress', 'Laravel', 'Tailwind CSS'],
    delivery: '1週間〜',
    price: '5万円〜',
    workSlug: 'drawers9',
  },
  {
    id: 'ec',
    category: 'EC構築・運用（Salesforce Commerce Cloud）',
    title: '止まらないECを、設計から運用まで。',
    description:
      'SFCC（Salesforce Commerce Cloud）によるECの新規構築・機能改修・保守運用を、一次請け SIer のプロジェクトリーダー／マネージャーとして経験。決済（AmazonPay・PayPay・3Dセキュア）・CRM・店舗在庫などの外部連携を、注文から配送までの業務フローを踏まえて設計します。',
    scope: ['SFRA カスタマイズ', '決済・外部API連携', 'プロモーション / カタログ設計', '運用保守・障害対応'],
    tags: ['SFCC', 'SFRA', 'OCAPI / SCAPI', 'JavaScript', '決済連携'],
    delivery: '1ヶ月〜（改修は1週間〜）',
    price: '50万円〜 / 月額運用 要相談',
    workSlug: 'sfcc-ec',
  },
  {
    id: 'cloud',
    category: 'クラウドインフラ（AWS）',
    title: '安全で、無駄のないAWS環境を。',
    description:
      'AWS 認定ソリューションアーキテクトとして、セキュリティ・可用性・コストのバランスを取った構成を設計します。サーバーレス配信（S3 + CloudFront）から EC2、GitHub Actions による CI/CD まで対応します。',
    scope: ['構成設計・見積', 'S3 / CloudFront / Lambda', 'EC2 / RDS / VPC', 'CI/CD・監視・コスト最適化'],
    tags: ['AWS', 'CloudFront', 'Lambda', 'IAM', 'GitHub Actions'],
    delivery: '1週間〜',
    price: '15万円〜',
    workSlug: 'stendear-site',
  },
  {
    id: 'data',
    category: 'データ基盤・ETL開発（Snowflake / Databricks）',
    title: '散らばったデータを、意思決定に使える形に。',
    description:
      '業務データの収集・加工・蓄積から分析環境の整備まで。Snowflake / Databricks を用いたデータ基盤構築と ETL/ELT パイプライン開発、AI を活用したメタデータ管理、Streamlit による業務自動化まで対応します。',
    scope: ['データ基盤の設計', 'ETL / ELT パイプライン開発', 'メタデータ管理・データモデリング', '品質監視・運用・CI/CD'],
    tags: ['Snowflake', 'Databricks', 'Python', 'SQL', 'AWS'],
    delivery: '1ヶ月〜',
    price: '40万円〜',
    workSlug: 'data-platform',
  },
  {
    id: 'ad',
    category: '広告・販促物の制作（チラシ / バナー / LP）',
    title: '読まれて、問い合わせにつながる広告を。',
    description:
      '新サービス告知のチラシ（A4両面）などの紙媒体から、Webバナー・ランディングページまで。「誰に・何を・いくらで」を一目で伝える構成とコピーから、デザイン・入稿データの作成まで一貫して対応します。',
    scope: ['構成・コピーライティング', 'チラシ / フライヤーのデザイン', 'Webバナー・LP', '入稿データ作成・修正対応'],
    tags: ['チラシ', 'フライヤー', 'バナー', 'LP', 'コピー'],
    delivery: '1週間〜',
    price: 'A4チラシ 5万円〜 / バナー 1万円〜',
    workSlug: 'godai-flyer',
  },
]
