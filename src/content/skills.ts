/**
 * Skills（技術スタック）。level は 3 段階。
 * 3: 主力（要件定義〜運用まで一人で完結できる）
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
    description: '大規模ECの構築・改修をPLとして経験。業務フローを踏まえた設計が強みです。',
    skills: [
      { name: 'Salesforce Commerce Cloud (SFRA)', level: 3, years: '2年+' },
      { name: 'OCAPI / SCAPI・外部API連携', level: 3, years: '2年+' },
      { name: '決済・ポイント・在庫連携', level: 2, years: '2年' },
      { name: 'Salesforce Platform（管理）', level: 2, note: '認定 Platform Administrator' },
    ],
  },
  {
    id: 'data',
    title: 'データ基盤',
    description: 'Snowflake / Databricks を中心に、データ基盤の設計から ETL 開発・運用まで。',
    skills: [
      { name: 'Snowflake', level: 2, years: '1年+' },
      { name: 'Databricks（Spark / Delta Lake）', level: 2, years: '1年+', note: '認定 Data Engineer Associate' },
      { name: 'Python / SQL（ETL・データモデリング）', level: 3, years: '3年+' },
      { name: 'データ品質・監視・運用設計', level: 2 },
    ],
  },
  {
    id: 'cloud',
    title: 'クラウド / インフラ',
    description: 'AWS 認定ソリューションアーキテクト。コストと安全性を両立した構成を設計します。',
    skills: [
      { name: 'AWS（S3 / CloudFront / Lambda / IAM）', level: 3, years: '3年+', note: '認定 Solutions Architect Associate' },
      { name: 'AWS（EC2 / RDS / VPC）', level: 2, years: '3年' },
      { name: 'CI/CD（GitHub Actions・OIDC）', level: 2 },
      { name: '監視・コスト最適化', level: 2 },
    ],
  },
  {
    id: 'web',
    title: 'Web / アプリ開発',
    description: 'フロントからバックエンドまで。CMS 運用を含む「更新しやすい」サイトを作ります。',
    skills: [
      { name: 'TypeScript / JavaScript', level: 3, years: '3年+' },
      { name: 'Next.js / React', level: 2, years: '2年+' },
      { name: 'PHP / Laravel / WordPress', level: 2, years: '3年' },
      { name: 'HTML / CSS / Tailwind CSS', level: 3, years: '4年+' },
    ],
  },
  {
    id: 'management',
    title: 'プロジェクト推進',
    description: '技術だけでなく、顧客折衝・要件定義・見積・進行管理まで任せられます。',
    skills: [
      { name: '要件定義・基本設計', level: 3, years: '3年+' },
      { name: '顧客折衝・見積・進行管理（PL）', level: 3, years: '2年+' },
      { name: 'テスト計画・リリース管理', level: 2 },
      { name: 'ドキュメント整備・運用引き継ぎ', level: 2 },
    ],
  },
]
