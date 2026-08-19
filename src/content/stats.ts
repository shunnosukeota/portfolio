/**
 * Proof bar（信頼の指標）。
 * TODO: 対応プロジェクト数は実数に合わせて更新してください。
 */
export type Stat = {
  value: string
  unit?: string
  label: string
  note?: string
}

export const STATS: Stat[] = [
  { value: '3', unit: '+', label: 'IT実務年数（年）', note: 'EC開発 PL/PM → データ基盤' },
  { value: '10', unit: '+', label: '対応プロジェクト', note: 'Web / EC / クラウド / データ / 広告' },
  { value: '5', label: 'ベンダー認定資格', note: 'AWS / Snowflake / Databricks / Salesforce ×2' },
  { value: '24', unit: 'h', label: '平均返信時間', note: '通常24時間以内に返信' },
]
