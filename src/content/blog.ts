/**
 * Blog（Zenn での発信）。
 * 記事一覧はビルド時に Zenn API から取得し、取得できない場合は FALLBACK_ARTICLES を表示します。
 * 新しい記事は Zenn に公開すれば次回ビルドで自動的に反映されます（手動更新不要）。
 */
export const ZENN = {
  username: 'shunnosuke_ohta',
  url: 'https://zenn.dev/shunnosuke_ohta',
  displayName: 'Shunnosuke Ohta',
  /** 現在の連載テーマ */
  seriesTitle: '【Snowflake - メタデータ管理】これからのメタデータ管理の話をしよう',
  note: '所属企業のテックブログ（Zenn Publication）に寄稿。投稿は個人の見解に基づくものです。',
} as const

export type ZennArticle = {
  title: string
  url: string
  emoji: string
  publishedAt: string // ISO
  likedCount: number
}

/** Zenn API が使えない場合のフォールバック（2026-08 時点の公開記事） */
export const FALLBACK_ARTICLES: ZennArticle[] = [
  {
    title: '【Snowflake - メタデータ管理】これからのメタデータ管理の話をしよう#3【実装編】セマンティックビューを自動で生成してみた',
    url: 'https://zenn.dev/acntechjp/articles/cfa29fb0bbd17f',
    emoji: '❄️',
    publishedAt: '2026-06-19',
    likedCount: 7,
  },
  {
    title: '【Snowflake - メタデータ管理】これからのメタデータ管理の話をしよう#2【実装編】タグの伝播の設定をしてみた',
    url: 'https://zenn.dev/acntechjp/articles/8d7b2f4fb553b4',
    emoji: '❄️',
    publishedAt: '2026-03-30',
    likedCount: 4,
  },
  {
    title: '【Snowflake - メタデータ管理】これからのメタデータ管理の話をしよう#1【設計編】',
    url: 'https://zenn.dev/acntechjp/articles/b426ff167e3491',
    emoji: '❄️',
    publishedAt: '2026-02-19',
    likedCount: 14,
  },
]

/** 外部での紹介・登壇など */
export const FEATURED_MENTIONS = [
  {
    id: 'snowvillage-ff53',
    label: 'Featured',
    title: 'SnowVillage「Frosty Friday Live Challenge Vol.53」で記事を紹介いただきました',
    description:
      'Snowflake の日本ユーザーコミュニティ SnowVillage のライブ配信にて、メタデータ管理の連載記事が取り上げられました（該当箇所から再生されます）。',
    url: 'https://youtu.be/wEu_jJVx4TQ?t=1933',
    source: 'YouTube — SnowVillage',
    date: '2026',
  },
]
