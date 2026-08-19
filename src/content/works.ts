/**
 * Works（実績）。
 * - featured: true のものがトップページの Selected Works に表示されます（表示順は配列順）。
 * - NDA 案件は client を匿名化しつつ規模感を書きます。
 * - thumbnail は画像（images/works/{slug}.{avif,webp,jpg}）か、SVG 図版（diagram: src/components/diagrams）のどちらか。
 *   NDA 2 案件は現在 画像（カラー構成図）を使用。モノクロのインライン SVG に戻す場合は type: 'diagram' に切り替える。
 * - gallery は詳細ページにのみ表示する追加画像（任意）。
 */
export type WorkThumbnail =
  | { type: 'image'; src: string; alt: string; width: number; height: number }
  | { type: 'diagram'; id: 'apparel-ec' | 'data-platform'; alt: string }

export type WorkImage = { src: string; alt: string; width: number; height: number; caption?: string }

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
  gallery?: WorkImage[]
}

export const WORKS: Work[] = [
  {
    slug: 'sfcc-ec',
    title: 'EC構築・改修・運用（SFCC）',
    client: 'アパレル / ジュエリー / スポーツアパレル / 浄水器メーカー 各社の公式EC（NDA）',
    category: 'EC構築・運用 / Salesforce Commerce Cloud',
    period: '2年7ヶ月',
    year: '2023 – 2025',
    featured: true,
    nda: true,
    summary:
      '一次請け SIer にて、Salesforce Commerce Cloud 上で稼働するECサイトの新規構築・機能改修・保守運用を担当。入社1年経たずでプロジェクトリーダーに就任し、以後はPL/PMとして提案・見積から要件定義、設計、開発、テスト、リリース、保守運用までを通しました。',
    challenge:
      'セール・新作発売など負荷ピークが読める一方で、決済・ポイント・在庫・CRM など外部システム連携が多く、1つの改修が注文フロー全体に影響する。複数クライアントの改修と保守運用を 3〜4 名のチームで並行して回し、短いリリースサイクルの中で品質と納期を両立する必要があった。',
    role: [
      'プロジェクトリーダー / マネージャー（顧客折衝・提案・見積・進行管理・月次定例の進行）',
      '要件定義・基本設計・詳細設計、クライアントとの設計書読み合わせ',
      'SFRA ベースの機能開発、結合テスト仕様書の作成・実施、負荷テスト（JMeter on AWS）',
      '決済（AmazonPay・PayPay・楽天ペイ・3Dセキュア）、店舗在庫 API、Yext、CRM（Marketing Cloud / Service Cloud / Data Cloud）連携',
      '顧客管理・プロモーション設定などの日常運用、OMS 側保守の管理',
    ],
    tech: [
      'Salesforce Commerce Cloud',
      'SFRA',
      'JavaScript (Rhino)',
      'OCAPI / SCAPI',
      'AmazonPay / PayPay / 3D Secure',
      'Marketing Cloud / Data Cloud',
      'Go（データ移行ツール）',
      'AWS / JMeter',
    ],
    outcomes: [
      '未経験入社から1年経たずでプロジェクトリーダーに就任し、2年間で 4 業界・4 社のEC改修を並行してリード',
      '新規構築（浄水器EC）はテスト・不具合修正を最小工数で完了し、ローンチ時の売上立ち上がりに貢献',
      '要件定義段階で詳細を詰める運営により、PL 担当案件を納期遅延なく納品',
      '保守運用の窓口を引き継ぎ、定例のファシリテーションと月次提案で契約工数の消化率を大幅に改善。継続受注につなげた',
    ],
    scale: '3〜4 名チームの PL/PM。4 社の公式ECを並行担当（うち 2 社の保守運用窓口）',
    thumbnail: {
      type: 'image',
      src: '/images/works/sfcc-ec',
      alt: 'EC構築・改修・運用（SFCC）の構成図。顧客 → Salesforce Commerce Cloud（Storefront / 商品・カタログ / カート・チェックアウト / プロモーション / Jobs / OCAPI・SCAPI）→ 決済サービス・会員 CRM・在庫基幹・物流の連携と、要件定義から運用改善までの工程',
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: 'data-platform',
    title: '製造ログを扱うデータ基盤の構築・拡張（AWS × Snowflake）',
    client: 'ゲーム業界 事業会社（NDA）',
    category: 'データ基盤 / Snowflake・AWS',
    period: '継続中',
    year: '2025 –',
    featured: true,
    nda: true,
    summary:
      '外資系コンサルティングファームの ITコンサルタントとして参画。AWS S3 に蓄積される製造ログを Snowflake へ連携する基盤の構築・拡張、AI を活用したメタデータ管理、CI/CD による自動化、Streamlit による業務自動化を担当しています。',
    challenge:
      'データ量・ソースが増え続ける中で、取り込み基盤の拡張と同時に、メタデータ（定義・タグ・リネージ）の整備と運用負荷の低減を進める必要があった。手作業の設定やドキュメント更新がボトルネックになっていた。',
    role: [
      'データマネジメントの運用フロー設計',
      'AI モデルを用いたメタデータ管理（タグ伝播・セマンティックビュー自動生成）の提案書作成と実装',
      'AWS・Snowflake・GitHub を連携させるインフラ設計・構築と CI/CD 化',
      'Snowflake Streamlit による業務自動化アプリの開発',
      'Snowflake 新機能の検証とナレッジ展開（Zenn 連載として公開）',
    ],
    tech: ['Snowflake', 'AWS (S3 / IAM)', 'Python', 'SQL', 'Streamlit', 'GitHub Actions', 'Cortex AI'],
    outcomes: [
      '未経験領域ながら AWS / Snowflake / Databricks の認定資格を取得して短期間でキャッチアップし、要件定義から実装までを担当',
      'AI を活用したメタデータ管理アーキテクチャを提案・実装し、将来の運用工数削減に寄与',
      '取り組みを Zenn 連載「これからのメタデータ管理の話をしよう」として公開し、Snowflake ユーザーコミュニティ SnowVillage の配信で紹介',
    ],
    scale: '全 10 名のプロジェクトにメンバーとして参画（提案・要件定義・開発）',
    thumbnail: {
      type: 'image',
      src: '/images/works/data-platform',
      alt: '製造ログを扱うデータ基盤の構成図。設備ログ・センサー・作業実績・各種システム → Amazon S3（レイク）→ Snowflake の RAW / TRANSFORM / MART → 可視化・アラート・レポート。CloudFormation / IAM / KMS / Secrets Manager / Route 53 によるガバナンスと運用',
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: 'godai-flyer',
    title: '足場工事会社の新サービス告知チラシ（A4 両面）',
    client: '株式会社五大建設足場（宮城県東松島市）',
    category: '広告制作 / チラシデザイン',
    period: '約2週間',
    year: '2026',
    featured: true,
    summary:
      '足場工事会社が新たに始める「太陽光パネル洗浄・外壁洗浄」を住宅オーナーに知らせる A4 両面チラシを、構成・コピー・デザイン・入稿データまで一貫して制作。表面で「何を・いくらで」、裏面で「不安の解消」と役割を分け、問い合わせにつながる 1 枚にしました。',
    challenge:
      '新サービスの認知がゼロの状態で、価格への納得感と「訪問販売は不安」という住宅オーナーの心理的ハードルの両方を、紙 1 枚で越える必要があった。足場専門業者ならではの強み（高所の安全施工・自社施工）を短い言葉で伝えることも課題。',
    role: [
      '構成設計（表：訴求・料金・施工例・相談導線 ／ 裏：お困りごと・選ばれる理由・クーリングオフの説明）',
      'キャッチコピー・本文コピーの作成',
      'デザイン（写真選定・図版・配色・組版）',
      '印刷用入稿データの作成と修正対応',
    ],
    tech: ['チラシ / フライヤー', 'A4 両面・フルカラー', 'コピーライティング', '印刷入稿データ'],
    outcomes: [
      '料金プラン・施工事例（Before / After）・無料相談の導線を表面に集約し、読み手が 10 秒で判断できる構成に',
      '裏面でお困りごとチェックリスト → 選ばれる理由 → クーリングオフ制度の順に並べ、訪問販売への不安を先回りして解消',
      'Instagram・公式サイトへの QR を配置し、紙からデジタルへの導線を確保',
    ],
    scale: '企画から入稿まで 1 名で担当',
    url: 'https://www.godai-ashiba.co.jp/',
    thumbnail: {
      type: 'image',
      src: '/images/works/godai-flyer',
      alt: '五大建設足場の太陽光パネル洗浄・外壁洗浄チラシ。表面と裏面を並べたもの',
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        src: '/images/works/godai-flyer-front',
        alt: 'チラシ表面。新サービス開始のお知らせ、太陽光パネル洗浄・外壁洗浄、料金プラン、本社施工例、無料相談の案内',
        width: 1200,
        height: 1697,
        caption: '表面 — 訴求・料金・施工例・相談導線',
      },
      {
        src: '/images/works/godai-flyer-back',
        alt: 'チラシ裏面。こんなお困りごとはありませんか、足場のプロに任せる理由、訪問販売が不安な方へ、クーリングオフ制度について',
        width: 1200,
        height: 1697,
        caption: '裏面 — お困りごと・選ばれる理由・安心の説明',
      },
    ],
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
      alt: 'DRAWERS9 コーポレートサイトのトップページ。映像作品のキービジュアルが大きく表示されている',
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
    featured: false,
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
    outcomes: ['サーバーレス配信で運用コストを最小化', 'push だけで本番反映されるデプロイ基盤を構築'],
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
