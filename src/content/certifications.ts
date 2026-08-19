/**
 * 保有資格。画像は scripts/optimize-images.mjs で
 * public/images/certs/ に 160×160（WebP + PNG、元の色のまま）として書き出されます。
 */
export type Certification = {
  id: string
  name: string
  shortName: string
  issuer: string
  image: string
  /** 取得年月 */
  acquired: string
  url?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-saa',
    name: 'AWS Certified Solutions Architect – Associate',
    shortName: 'Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    image: '/images/certs/aws-saa.png',
    acquired: '2024.02',
  },
  {
    id: 'snowpro-core',
    name: 'Snowflake SnowPro Core Certification',
    shortName: 'SnowPro Core',
    issuer: 'Snowflake',
    image: '/images/certs/snowpro-core.png',
    acquired: '2026.03',
  },
  {
    id: 'databricks-de',
    name: 'Databricks Certified Data Engineer Associate',
    shortName: 'Data Engineer Associate',
    issuer: 'Databricks',
    image: '/images/certs/databricks-de.png',
    acquired: '2025.09',
  },
  {
    id: 'sf-b2c-dev',
    name: 'Salesforce Certified B2C Commerce Cloud Developer',
    shortName: 'B2C Commerce Cloud Developer',
    issuer: 'Salesforce',
    image: '/images/certs/sf-b2c-dev.png',
    acquired: '2023.03',
  },
  {
    id: 'sf-admin',
    name: 'Salesforce Certified Platform Administrator',
    shortName: 'Platform Administrator',
    issuer: 'Salesforce',
    image: '/images/certs/sf-admin.png',
    acquired: '2024.04',
  },
]

/** バッジ画像のないその他の資格・スコア */
export const OTHER_CREDENTIALS: { name: string; acquired: string }[] = [
  { name: '基本情報技術者試験', acquired: '2023.12' },
  { name: '技術英語能力検定 2級', acquired: '2021.12' },
  { name: 'TOEIC Listening & Reading 715', acquired: '2021.04' },
]
