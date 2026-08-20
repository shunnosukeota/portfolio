/**
 * 数字で見る Stendear。
 * TODO: 対応プロジェクト数は実数に合わせて更新してください。
 */
export type Stat = {
  value: string
  unit?: string
  label: string
  note?: string
}

export const STATS: Stat[] = [
  { value: '5', label: '事業領域', note: 'Web / EC / クラウド / データ / 広告' },
  { value: '10', unit: '+', label: '対応プロジェクト', note: '受託・自社開発を含む' },
  { value: '5', label: 'ベンダー認定資格', note: 'AWS / Snowflake / Databricks / Salesforce ×2' },
  { value: '24', unit: 'h', label: '平均返信時間', note: '通常24時間以内に返信' },
]
