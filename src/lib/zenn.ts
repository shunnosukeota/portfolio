import { FALLBACK_ARTICLES, ZENN, type ZennArticle } from '@/content/blog'

type ZennApiArticle = {
  title: string
  path: string
  emoji: string
  published_at: string
  liked_count: number
}

/**
 * Zenn の記事一覧をビルド時に取得する（静的エクスポートなので実行は `next build` 時の 1 回のみ）。
 * ネットワーク不可・API 変更時は FALLBACK_ARTICLES を返し、ビルドを止めない。
 */
export async function fetchZennArticles(): Promise<{ articles: ZennArticle[]; live: boolean }> {
  try {
    const res = await fetch(`https://zenn.dev/api/articles?username=${ZENN.username}&order=latest`, {
      headers: { accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`zenn api ${res.status}`)
    const json = (await res.json()) as { articles?: ZennApiArticle[] }
    const articles = (json.articles ?? []).map((a) => ({
      title: a.title,
      url: `https://zenn.dev${a.path}`,
      emoji: a.emoji || '📝',
      publishedAt: a.published_at,
      likedCount: a.liked_count ?? 0,
    }))
    if (articles.length === 0) throw new Error('zenn api returned no articles')
    return { articles, live: true }
  } catch (e) {
    console.warn('[blog] Zenn API unavailable, using fallback list:', (e as Error).message)
    return { articles: FALLBACK_ARTICLES, live: false }
  }
}

export function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}
