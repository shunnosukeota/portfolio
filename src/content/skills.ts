/**
 * Skills（技術スタック）。level は 3 段階。
 * 3: 主力（要件定義〜運用まで通して担当できる）
 * 2: 実務（実務で継続的に使用）
 * 1: 経験あり（案件で使用・学習済み）
 */
export type SkillLevel = 1 | 2 | 3

export type Skill = {
  name: string
  level: SkillLevel
  /** 実務年数の目安 */
  years?: string
  note?: string
}

export type SkillGroup = {
  id: string
  title: string
  description: string
  skills: Skill[]
}

export const LEVEL_LABEL: Record<SkillLevel, string> = {
  3: '主力',
  2: '実務',
  1: '経験あり',
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'ec',
    title: 'EC / Salesforce',
    description: '一次請け SIer で 4 社のECを担当。業務フローを踏まえた設計が強みです。',
    skills: [
      { name: 'Salesforce Commerce Cloud (SFRA)', level: 3, years: '2年7ヶ月', note: '認定 B2C Commerce Developer' },
      { name: 'OCAPI / SCAPI・外部API連携（Yext / POS 在庫 / CRM）', level: 3, years: '2年+' },
      { name: '決済連携（AmazonPay / PayPay / 楽天ペイ / 3Dセキュア）', level: 3, years: '2年' },
      { name: 'Salesforce Platform（Marketing / Service / Data Cloud 連携）', level: 2, note: '認定 Platform Administrator' },
    ],
  },
  {
    id: 'data',
    title: 'データ基盤',
    description: 'AWS × Snowflake のデータ基盤を現職で構築・拡張中。AI を使ったメタデータ管理を Zenn で連載しています。',
    skills: [
      { name: 'Snowflake（取り込み基盤 / Streamlit / Cortex AI）', level: 2, years: '1年', note: 'SnowPro Core 認定' },
      { name: 'Databricks（Spark / Delta Lake）', level: 1, note: '認定 Data Engineer Associate' },
      { name: 'Python / SQL（ETL・データ加工）', level: 2, years: '1年+' },
      { name: 'メタデータ管理・データマネジメント運用設計', level: 2 },
    ],
  },
  {
    id: 'cloud',
    title: 'クラウド / インフラ',
    description: 'アーキテクトとしてインフラ構築の実務経験あり。コストと安全性を両立した構成を設計します。',
    skills: [
      { name: 'AWS（S3 / CloudFront / Lambda@Edge / Route 53 / IAM）', level: 3, years: '2年+', note: '認定 Solutions Architect Associate' },
      { name: 'AWS（EC2 / RDS / VPC）', level: 2, years: '2年' },
      { name: 'CI/CD（GitHub Actions・OIDC・AWS × Snowflake）', level: 2 },
      { name: '負荷テスト（JMeter）・監視・コスト最適化', level: 2 },
    ],
  },
  {
    id: 'web',
    title: 'Web / アプリ開発',
    description: 'フロントからバックエンドまで。CMS 運用を含む「更新しやすい」サイトを作ります。',
    skills: [
      { name: 'JavaScript / TypeScript', level: 3, years: '3年+' },
      { name: 'Next.js / React', level: 2, years: '2年+' },
      { name: 'PHP（Laravel / WordPress テーマ開発）', level: 2, years: '2年' },
      { name: 'HTML / CSS / Tailwind CSS', level: 3, years: '4年+' },
      { name: 'Go / Python（Django）', level: 1 },
    ],
  },
  {
    id: 'design',
    title: 'デザイン / 広告制作',
    description: 'チラシなどの紙媒体から Web バナーまで。構成とコピーから考え、入稿データまで仕上げます。',
    skills: [
      { name: 'チラシ / フライヤー（A4 両面・入稿データ）', level: 2 },
      { name: '構成設計・コピーライティング', level: 2 },
      { name: 'Web バナー / LP デザイン', level: 2 },
      { name: 'UI デザイン（Web サイト・アプリ）', level: 2 },
    ],
  },
  {
    id: 'management',
    title: 'プロジェクト推進',
    description: '技術だけでなく、顧客折衝・要件定義・見積・進行管理まで任せられます。',
    skills: [
      { name: '提案・見積・要件定義・基本設計', level: 3, years: '2年+' },
      { name: '顧客折衝・進行管理・月次定例', level: 3, years: '2年' },
      { name: 'テスト計画・リリース管理', level: 2 },
      { name: 'ドキュメント整備・運用引き継ぎ', level: 2 },
    ],
  },
]
