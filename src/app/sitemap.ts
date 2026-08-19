import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'
import { WORKS } from '@/content/works'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/works`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ]
  const works: MetadataRoute.Sitemap = WORKS.map((w) => ({
    url: `${SITE.url}/works/${w.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  return [...pages, ...works]
}
