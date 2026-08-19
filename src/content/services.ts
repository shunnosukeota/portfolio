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
    delivery: '2週間〜',
    price: '30万円〜',
    workSlug: 'drawers9',
  },
  {
    id: 'ec',
    category: 'EC構築・運用（Salesforce Commerce Cloud）',
    title: '止まらないECを、設計から運用まで。',
    description:
      'SFCC（Salesforce Commerce Cloud）による大規模ECの構築・改修・運用を、プロジェクトリーダーとして経験。決済・外部API連携、プロモーション設定、注文から配送までの業務フローを踏まえて設計します。',
    scope: ['SFRA カスタマイズ', '決済・外部API連携', 'プロモーション / カタログ設計', '運用保守・障害対応'],
    tags: ['SFCC', 'SFRA', 'OCAPI / SCAPI', 'JavaScript', '決済連携'],
    delivery: '1ヶ月〜（改修は1週間〜）',
    price: '50万円〜 / 月額運用 要相談',
    workSlug: 'apparel-ec',
  },
  {
    id: 'cloud',
    category: 'クラウドインフラ（AWS）',
    title: '安全で、無駄のないAWS環境を。',
    description:
      'AWS 認定ソリューションアーキテクトとして、セキュリティ・可用性・コストのバランスを取った構成を設計します。サーバーレス配信（S3 + CloudFront）から EC2、IaC による再現性のある構築まで対応します。',
    scope: ['構成設計・見積', 'S3 / CloudFront / Lambda', 'EC2 / RDS / VPC', 'CI/CD・監視・コスト最適化'],
    tags: ['AWS', 'CloudFront', 'Lambda', 'IAM', 'GitHub Actions'],
    delivery: '1週間〜',
    price: '20万円〜',
    workSlug: 'stendear-site',
  },
  {
    id: 'data',
    category: 'データ基盤・ETL開発（Snowflake / Databricks）',
    title: '散らばったデータを、意思決定に使える形に。',
    description:
      '業務データの収集・加工・蓄積から分析環境の整備まで。Snowflake / Databricks を用いたデータ基盤構築と ETL/ELT パイプライン開発で、データを「使える」状態にします。',
    scope: ['データ基盤の設計', 'ETL / ELT パイプライン開発', 'データモデリング', '品質監視・運用'],
    tags: ['Snowflake', 'Databricks', 'Python', 'SQL', 'Spark'],
    delivery: '1ヶ月〜',
    price: '40万円〜',
    workSlug: 'data-platform',
  },
]
