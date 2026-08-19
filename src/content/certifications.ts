/**
 * 保有資格。画像は scripts/optimize-images.mjs で
 * public/images/certs/ に 320×320 グレースケール PNG として書き出されます。
 */
export type Certification = {
  id: string
  name: string
  shortName: string
  issuer: string
  image: string
  /** 取得年（わかる範囲で。未設定なら非表示） */
  year?: string
  url?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-saa',
    name: 'AWS Certified Solutions Architect – Associate',
    shortName: 'Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    image: '/images/certs/aws-saa.png',
  },
  {
    id: 'databricks-de',
    name: 'Databricks Certified Data Engineer Associate',
    shortName: 'Data Engineer Associate',
    issuer: 'Databricks',
    image: '/images/certs/databricks-de.png',
  },
  {
    id: 'sf-b2c-dev',
    name: 'Salesforce Certified B2C Commerce Cloud Developer',
    shortName: 'B2C Commerce Cloud Developer',
    issuer: 'Salesforce',
    image: '/images/certs/sf-b2c-dev.png',
  },
  {
    id: 'sf-admin',
    name: 'Salesforce Certified Platform Administrator',
    shortName: 'Platform Administrator',
    issuer: 'Salesforce',
    image: '/images/certs/sf-admin.png',
  },
]
