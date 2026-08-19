import type { Metadata } from 'next'
import { SITE } from '@/content/site'
import type { Work } from '@/content/works'

type PageMeta = {
  title?: string
  description?: string
  /** 先頭スラッシュ付きのパス（例: '/about'） */
  path: string
  type?: 'website' | 'article'
}

/** ページごとの title / description / canonical / OGP / Twitter Card をまとめて生成 */
export function pageMetadata({ title, description, path, type = 'website' }: PageMeta): Metadata {
  const url = `${SITE.url}${path}`
  const desc = description ?? SITE.description
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.title
  return {
    title: title ?? SITE.title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: desc,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE.name} — ${SITE.owner.titleEn}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: ['/og.png'],
    },
  }
}

const sameAs = SITE.social.filter((s) => s.url).map((s) => s.url)

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.owner.name,
  alternateName: SITE.owner.nameEn,
  jobTitle: SITE.owner.title,
  url: SITE.url,
  email: `mailto:${SITE.contact.email}`,
  image: `${SITE.url}/images/hero/portrait.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: '仙台市', addressRegion: '宮城県', addressCountry: 'JP' },
  worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  knowsAbout: [
    'Web development',
    'Salesforce Commerce Cloud',
    'AWS',
    'Snowflake',
    'Databricks',
    'Data engineering',
  ],
  ...(sameAs.length ? { sameAs } : {}),
}

export const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE.url}/#profile`,
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  inLanguage: 'ja',
  mainEntity: { '@id': `${SITE.url}/#person` },
}

export function creativeWorkJsonLd(work: Work) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    description: work.summary,
    url: `${SITE.url}/works/${work.slug}`,
    ...(work.url ? { sameAs: work.url } : {}),
    genre: work.category,
    dateCreated: work.year.split(' ')[0],
    keywords: work.tech.join(', '),
    creator: { '@id': `${SITE.url}/#person` },
    inLanguage: 'ja',
  }
}
