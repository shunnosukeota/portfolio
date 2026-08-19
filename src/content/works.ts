/**
 * Works（実績）。
 * - featured: true のものがトップページの Selected Works に表示されます（表示順は配列順）。
 * - NDA 案件は client を匿名化しつつ規模感を書きます。
 * - thumbnail は画像（images/works/{slug}.{avif,webp}）か、SVG 図版（diagram）のどちらか。
 * TODO: 成果（outcomes）の数値は可能な範囲で実数に更新してください。
 */
export type WorkThumbnail =
  | { type: 'image'; src: string; alt: string; width: number; height: number }
  | { type: 'diagram'; id: 'apparel-ec' | 'data-platform'; alt: string }

export type Work = {
  slug: string
  title: string
  client: string
  category: string
  period: string
  year: string
  featured: boolean
  nda?: boolean
  summary: string
  challenge: string
  role: string[]
  tech: string[]
  outcomes: string[]
  /** 体制・規模感 */
  scale?: string
  url?: string
  credits?: { label: string; name: string; url?: string }[]
  thumbnail: WorkThumbnail
}

export const WORKS: Work[] = [
  {
    slug: 'apparel-ec',
    title: '大手アパレルEC（NDA）の構築・改修・運用',
    client: '大手アパレル企業 公式EC（NDA）',
    category: 'EC構築・運用 / SFCC',
    period: '約2年',
    year: '2023 – 2025',
    featured: true,
    nda: true,
    summary:
      'Salesforce Commerce Cloud 上で稼働する大規模ECの機能改修・運用を、プロジェクトリーダーとして担当。顧客折衝から要件定義、設計、開発、テスト、リリースまで全工程を通しました。',
    challenge:
      'セール・新作発売など負荷ピークが読める一方で、決済・ポイント・在庫など外部システム連携が多く、1つの改修が注文フロー全体に影響する。短いリリースサイクルの中で品質と速度を両立する必要があった。',
    role: [
      'プロジェクトリーダー（顧客折衝・進行管理・見積）',
      '要件定義・基本設計・詳細設計',
      'SFRA ベースの機能開発、決済・外部API連携',
      'プロモーション / カタログ設定、リリース・障害対応',
    ],
    tech: ['Salesforce Commerce Cloud', 'SFRA', 'OCAPI / SCAPI', 'JavaScript', 'Jobs / Webhook', '決済代行連携'],
    outcomes: [
      '要件定義〜リリースまでを一貫して担当し、複数の改修案件を計画どおりに本番投入',
      '注文・決済・配送までの業務フローを把握したうえで設計し、リリース後の手戻りを抑制',
      '顧客との定例運営・見積・課題管理を担い、継続的な追加発注につながる信頼関係を構築',
    ],
    scale: '開発チーム数名〜10名規模のPL。エンドユーザー向け公式ECサイト',
    thumbnail: {
      type: 'diagram',
      id: 'apparel-ec',
      alt: 'SFCC を中心に、決済・ポイント・在庫・CRM の各システムと連携するECアーキテクチャ図',
    },
  },
  {
    slug: 'data-platform',
    title: '事業会社のデータ基盤構築・ETL開発（NDA）',
    client: '事業会社 データ分析基盤（NDA）',
    category: 'データ基盤 / Snowflake・Databricks',
    period: '継続中',
    year: '2025 –',
    featured: true,
    nda: true,
    summary:
      '複数の業務システムに散在するデータを収集・加工・蓄積し、分析に使える形に整備するデータ基盤の構築と ETL/ELT パイプライン開発を担当。',
    challenge:
      '部門ごとに異なるソース（基幹システム・SaaS・ファイル）からデータが届き、定義も粒度も揃っていない。手作業の集計に時間がかかり、分析に着手する前にデータ整備で消耗していた。',
    role: [
      'データ基盤の設計（レイヤ構成・命名規約・権限設計）',
      'ETL / ELT パイプライン開発と定期実行の自動化',
      'データモデリング（分析用マート設計）',
      '品質チェック・監視・運用ドキュメント整備',
    ],
    tech: ['Snowflake', 'Databricks', 'Python', 'SQL', 'Spark / Delta Lake', 'AWS'],
    outcomes: [
      'ソースから分析マートまでの処理を自動化し、手作業の集計・再集計を削減',
      'レイヤ構成と命名規約を統一し、新しいデータソースの追加手順を標準化',
      '分析側がSQLだけで参照できるマートを整備し、データ準備の待ち時間を短縮',
    ],
    scale: 'データエンジニアとして設計・開発を担当。複数部門が利用する全社横断の分析基盤',
    thumbnail: {
      type: 'diagram',
      id: 'data-platform',
      alt: '業務システム・SaaS・ファイルのデータを取り込み、Raw / Staging / Mart の3層で整備して BI に届けるデータフロー図',
    },
  },
  {
    slug: 'drawers9',
    title: '映像制作会社 DRAWERS9 コーポレートサイト',
    client: 'DRAWERS9 inc.',
    category: 'Web制作 / CMS（WordPress）',
    period: '約1.5ヶ月',
    year: '2024',
    featured: true,
    summary:
      'デザイナーが手掛けたデザインをもとに、映像・画像中心のコーポレートサイトを WordPress で構築。日々の実績投稿を担当者自身で行える管理画面設計と、重いメディアを扱いながらもパフォーマンスを維持する実装を行いました。',
    challenge:
      '映像作品のサムネイルと動画を大量に扱うため、素朴に作ると表示が重くなる。一方で更新は非エンジニアが日常的に行うため、投稿のしやすさを損なえない。',
    role: [
      'デザインデータからの実装（レスポンシブ）',
      'WordPress テーマ開発・カスタム投稿タイプ設計',
      '画像・動画の最適化（遅延読み込み・圧縮）',
      '公開・運用引き継ぎ',
    ],
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    outcomes: [
      '作品の追加・差し替えを管理画面だけで完結できる運用フローを実現',
      '画像の遅延読み込みと圧縮で、メディア主体のページでも軽快な表示を維持',
      'デザイナーの意図したレイアウトを各デバイスで再現',
    ],
    url: 'https://drawers9.tokyo/',
    credits: [{ label: 'Design', name: '加藤 健吾（DotteteDesign）', url: 'https://www.dottetedesign.com/' }],
    thumbnail: {
      type: 'image',
      src: '/images/works/drawers9',
      alt: 'DRAWERS9 コーポレートサイトのトップページ。映像作品のサムネイルがグリッドで並ぶ',
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: 'pretwe',
    title: 'プレゼント共有アプリ「プレツイ」',
    client: '自社プロダクト（個人開発）',
    category: 'Webアプリ開発 / Laravel・AWS',
    period: '約3ヶ月',
    year: '2022',
    featured: true,
    summary:
      '受け取った・贈ったプレゼントを投稿し、相手・年齢・シーンから検索できる共有アプリ。企画からUI設計、実装、AWS へのデプロイまで一人で完結させた個人開発プロダクトです。',
    challenge:
      '「誰に何を贈ればいいか分からない」という課題に対し、実際の投稿を参考にできる場を作る。投稿・評価・検索を備えたアプリをゼロから一人で作り切る必要があった。',
    role: ['企画・要件定義', 'UI設計・フロント実装', 'Laravel によるバックエンド開発', 'AWS EC2 でのデプロイ・運用'],
    tech: ['Laravel', 'PHP', 'MySQL', 'AWS EC2', 'JavaScript'],
    outcomes: [
      '投稿・評価・検索（相手/年齢/シーン）の主要機能を実装しリリース',
      '企画〜運用まで一人で通し、Web アプリ開発の全工程を経験',
    ],
    thumbnail: {
      type: 'image',
      src: '/images/works/pretwe',
      alt: 'プレツイの投稿詳細画面。贈り先・年齢・シーンのタグと5段階評価が表示されている',
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: 'stendear-site',
    title: 'Stendear 公式サイト（本サイト）',
    client: 'Stendear',
    category: 'Web制作 / Next.js・AWS',
    period: '継続改善',
    year: '2024 –',
    featured: false,
    summary:
      'Next.js の静的エクスポートを S3 + CloudFront で配信。GitHub Actions から OIDC で AWS にデプロイし、サーバー費用ほぼゼロで高速・高セキュリティな配信を実現しています。',
    challenge:
      '個人ブランドサイトとして、低コスト・高速・高いセキュリティを両立しつつ、更新はコードを触らずに行えるようにしたい。',
    role: ['設計・実装・デザイン', 'AWS（S3 / CloudFront / IAM / OIDC）構築', 'GitHub Actions による自動デプロイ'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
    outcomes: [
      'サーバーレス配信で運用コストを最小化',
      'push だけで本番反映されるデプロイ基盤を構築',
    ],
    url: 'https://stendear.com',
    thumbnail: {
      type: 'image',
      src: '/images/works/stendear-site',
      alt: 'Stendear 公式サイトのトップページ',
      width: 1600,
      height: 1000,
    },
  },
]

export const FEATURED_WORKS = WORKS.filter((w) => w.featured)

export function getWork(slug: string): Work | undefined {
  return WORKS.find((w) => w.slug === slug)
}
