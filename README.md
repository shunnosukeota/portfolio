# stendear.com

太田 駿之介（Stendear）の個人ブランドサイト。
Next.js 15（App Router / 静的エクスポート）＋ Tailwind CSS。S3 + CloudFront に GitHub Actions で自動デプロイ。

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # out/ に静的書き出し（本番と同じ）
npm run start      # out/ をローカル配信して確認
npm run lint
npm run typecheck
```

Node 20 以上。`main` に push すると `.github/workflows/deploy.yml` が S3 同期 + CloudFront invalidation を実行し**本番に反映**されます。作業は必ずブランチで。

## コンテンツの更新（コードを触らない）

すべて `src/content/` にあります。

| ファイル | 内容 |
|---|---|
| `site.ts` | 氏名・肩書き・連絡先・SNS・**稼働状況バッジ**（`availability`）・返信目安 |
| `stats.ts` | トップの数値（実務年数・案件数・資格数・返信時間） |
| `services.ts` | 提供領域（見出し・説明・技術タグ・納期/費用の目安） |
| `works.ts` | 実績。`featured: true` がトップに出る。`/works/[slug]` が自動生成される |
| `skills.ts` | 技術スタック（習熟度 1〜3・年数） |
| `certifications.ts` | 保有資格（画像は `public/images/certs/`） |
| `process.ts` | 進め方の 4 ステップ |
| `career.ts` | 経歴年表・プロフィール補足・Personal（遊び心の自己紹介） |
| `blog.ts` | Zenn のプロフィール・フォールバック記事一覧・外部での紹介（SnowVillage 等）。記事一覧はビルド時に Zenn API から自動取得 |

**日本語を追加・変更したら `npm run fonts` を実行**してください（和文フォントはサイト内の使用文字にサブセット化して配信しているため。未収録文字は OS フォントで表示されます）。

## アセットの生成

| コマンド | 内容 |
|---|---|
| `npm run images` | `assets/originals/` → `public/images/` に AVIF/WebP/JPG（元の色のまま・16:10 統一）、資格バッジ、ファビコン群を生成 |
| `npm run logo` | `public/logo.svg` / `logo-mark.svg` / `src/components/ui/logoPaths.ts` を再生成（SVGO 最適化） |
| `npm run og` | `public/og.png`（1200×630）を生成 |
| `npm run fonts` | `src/fonts/NotoSansJP-{400,500}.subset.woff2` を再生成 |
| `npm run assets` | 上記すべて |

差し替え提案と仕様は [`docs/image-plan.md`](docs/image-plan.md)、ChatGPT 用の制作プロンプトは [`docs/image-prompts.md`](docs/image-prompts.md)。

## 設計メモ

- デザイントークン（色・タイポ・余白・モーション）は `tailwind.config.ts` と `src/app/globals.css` の `:root` に集約。任意値（`text-[13px]` 等）は使わない
- ダークモードは `prefers-color-scheme` に追従（CSS 変数の切り替えのみ）
- モーションは「フェード + 8px」だけ。JS 無効時も全文が表示される（`html.js-enabled` が付いた場合のみスクロール連動フェードを適用）。`prefers-reduced-motion` で全停止
- 静的エクスポートのため `next/image` 最適化・API Routes・ImageResponse は使わない。画像は事前生成 + `<picture>`
- URL は `about.html` 形式で書き出し（`trailingSlash: false`）。CloudFront 側のルーティング設定と一致させること
