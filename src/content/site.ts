/**
 * サイト全体の基本情報。
 * 稼働状況・連絡先・SNS はここを書き換えるだけで全ページに反映されます。
 */
export const SITE = {
  name: 'Stendear',
  url: 'https://stendear.com',
  /** <title> のデフォルト */
  title: 'Stendear | 太田駿之介 — Web・EC・クラウド・データ基盤の受託開発',
  description:
    '仙台のシステムエンジニア／データエンジニア 太田駿之介の個人開発ブランド。Webサイト・Webアプリ開発、Salesforce Commerce Cloud によるEC構築、AWS クラウド構築、Snowflake / Databricks によるデータ基盤構築まで、企画から運用まで一貫して対応します。',
  locale: 'ja_JP',
  owner: {
    name: '太田 駿之介',
    nameEn: 'Shunnosuke Ota',
    title: 'システムエンジニア / データエンジニア',
    titleEn: 'Systems & Data Engineer',
    location: '宮城県仙台市',
    locationEn: 'Sendai, Japan',
    birthYear: 2001,
    birthMonth: 10, // 1-12
    birthDay: 24,
  },
  brand: {
    origin: 'Stand × Endear',
    originNote:
      'Stand（信念を持って立つ）と Endear（人に愛され、心に寄り添う）を掛け合わせた造語です。',
  },
  contact: {
    email: 'info@stendear.com',
    line: 'https://lin.ee/8lv6nLh',
    /** 返信目安。Proof bar・Contact に表示 */
    responseTime: '24時間以内',
    /** メール問い合わせの件名・本文テンプレート */
    mailSubject: '【お問い合わせ】開発のご相談',
    mailBody: [
      'ご担当者名：',
      '会社名／屋号：',
      'ご相談の種類（Web / EC / クラウド / データ基盤 / その他）：',
      'ご予算の目安：',
      'ご希望の時期：',
      'ご相談内容：',
    ].join('\n'),
  },
  /**
   * 稼働状況バッジ。status を 'open' | 'limited' | 'closed' で切り替え、
   * label を書き換えるだけで Hero とフッターに反映されます。
   */
  availability: {
    status: 'limited' as 'open' | 'limited' | 'closed',
    label: '2026年10月〜 受託枠 残1',
    note: '小規模な改修・スポット相談は随時受付中',
  },
  /**
   * SNS / 外部リンク。url が空のものは表示されません。
   * TODO: GitHub / X / LinkedIn の URL を設定してください。
   */
  social: [
    { id: 'github', label: 'GitHub', url: '' },
    { id: 'x', label: 'X', url: '' },
    { id: 'linkedin', label: 'LinkedIn', url: '' },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/shunnosukeshunnosukeshunnosuke/',
    },
  ] as const,
} as const

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
] as const

export function mailtoHref(): string {
  const { email, mailSubject, mailBody } = SITE.contact
  return `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
}

export function currentAge(now = new Date()): number {
  const { birthYear, birthMonth, birthDay } = SITE.owner
  let age = now.getFullYear() - birthYear
  const m = now.getMonth() + 1
  if (m < birthMonth || (m === birthMonth && now.getDate() < birthDay)) age--
  return age
}
