# 画像アセット差し替え提案（image-plan）

対象：stendear.com リニューアル（`feature/redesign`）
作成日：2026-08-19

## 0. 方針

- 全画像を **AVIF（主）＋ WebP（副）＋ JPG/PNG（フォールバック）** で `scripts/optimize-images.mjs` から生成し、`<picture>` で配信（`src/components/ui/Picture.tsx`）。
- **色は元画像のまま**（2026-08-19 の方針変更でグレースケール化を廃止）。レイアウト自体がモノクロなので、写真・バッジ・チラシの色がアクセントとして機能する。ホバーは明度をわずかに上げるだけ。
- サムネイルは **全案件 16:10 / 1600×1000** に統一。実画面は「案B：16:10 トリミング＋無地の余白に配置」、紙媒体は「表・裏 2 面を台紙に並置」、NDA 案件は「案C：SVG 図版を自作」を採用済み。
- 元画像は `assets/originals/`（非公開・git 管理）、生成物は `public/images/`。**差し替えは元画像を置き換えて `npm run images` を実行するだけ**。
- 画像が無い箇所もレイアウトは完成しており、置き換えるだけで済む構造になっている。

## 1. 差し替え・新規追加の一覧

| # | 配置場所 | 現状 | 推奨する画像の内容 | 仕様（比率／解像度／形式／上限容量） | 調達方法 |
|---|---|---|---|---|---|
| 1 | **Hero 人物写真**（トップ右下の小さなポートレート）`public/images/hero/portrait.*` | 旧 `about_shun.png`（640×640・カラー）を 3:4 にトリミングして**暫定使用**（18.5KB AVIF、元の色のまま）。解像度が低く、Retina の 128px 表示が上限 | **案A（推奨）**：縦位置バストアップ。無地（白〜ライトグレー）または窓際の簡素な背景、自然光、正面〜やや斜め、口角を上げた穏やかな表情。襟付きシャツ or 無地ニット（柄物・ロゴ不可）。カラー（自然な色）で可。<br>**案B**：人物写真を使わず、文字とヘアラインのみで構成（現在の実装で `Hero.tsx` の `<Picture>` ブロックを削除すれば成立）。<br>→ 発注獲得が目的のため「顔が見える安心感」を優先し **案A を推奨**。ただし撮り直すまでは案Bのほうが印象が良ければ切替可 | 3:4 ／ 1200×1600 ／ AVIF + WebP + JPG ／ **150KB 以下**（表示は最大 128px 幅なので実効 30KB 程度） | **②新規撮影**。屋内・窓際、午前10時〜午後2時の自然光（直射は避けレースカーテン越し）。カメラは目線の高さ、焦点距離 50〜85mm 相当、背景との距離 1.5m 以上で軽くぼかす。頭上に余白を 10% 残し胸元まで。三脚またはスマホのポートレートモード可。RAW/HEIC で保存し、`assets/originals/about_shun.png` を置き換え → `npm run images` |
| 2 | **OG 画像**（SNS シェア時）`public/og.png` | **新規作成済み**：ワードマーク＋肩書きラベル＋見出しコピーのモノクロ組版（`scripts/build-og.mjs`、19.5KB） | 現状のままで可。人物写真を入れる案もあるが、匿名性のある B2B 向けには文字のみが無難 | 1200×630 ／ PNG ／ **200KB 以下** | **③コード/SVG で自作**（済）。文言は `scripts/build-og.mjs` を編集 → `npm run og` |
| 3 | **Works サムネイル：EC構築・改修・運用（SFCC / NDA）** `public/images/works/sfcc-ec.*` | **ChatGPT で制作したカラー構成図（4:3・1448×1086）** を `assets/originals/work-sfcc-ec.png` に保存し、16:10 の台紙に収めて生成済み（28KB AVIF）。モノクロのインライン SVG 版（`ApparelEcDiagram.tsx`）も残してあり、`works.ts` で `type: 'diagram'` に戻せる | 現状で可。解像度を上げるなら 2000px 幅以上で再出力 | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 60KB 以下 | **③図版（ChatGPT 制作）**（済） |
| 4 | **Works サムネイル：製造ログのデータ基盤（AWS × Snowflake / NDA）** `public/images/works/data-platform.*` | **ChatGPT で制作したカラー構成図（4:3）** を `assets/originals/work-data-platform.png` に保存し、16:10 の台紙に収めて生成済み（45KB AVIF）。SVG 版（`DataPlatformDiagram.tsx`）も残置 | 現状で可 | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 60KB 以下 | **③図版（ChatGPT 制作）**（済） |
| 5 | **Works サムネイル：DRAWERS9** `public/images/works/drawers9.*` | 旧 640px 幅の縦長スクショ（AVIF 拡張子偽装 PNG）を廃止し、**https://drawers9.tokyo/ を 1600×1000 で再キャプチャ**（ヘッドレス Chrome）→ 16:10・余白付きで生成済み（67KB AVIF、カラー） | 現状で可。より良くするなら「ノートPC＋スマホのデバイスモックアップ（案A）」に差し替え | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 120KB 以下 | **①既存画像を加工**（済）。案Aにする場合はモックアップ素材（Unsplash の mockup 系・商用可・クレジット不要）に実画面を合成 |
| 6 | **Works サムネイル：プレツイ** `public/images/works/pretwe.*` | 旧 2878×1588 スクショを 16:10・余白付きに統一（15KB AVIF、カラー）。ヘッダー「プレツイ」が写る全体像 | 可能なら **投稿一覧＋詳細の2画面をスマホモックアップで並置**したほうがアプリらしさが出る。アプリが稼働中なら 2x で再キャプチャ推奨 | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 120KB 以下 | **①既存画像を加工**（済）／再キャプチャ可能なら ① |
| 7 | **Works サムネイル：本サイト** `public/images/works/stendear-site.*` | **新デザインのトップを 1600×1000・ライトモードで再キャプチャ**して生成済み（21KB AVIF）。旧 2.36MB PNG は削除 | 現状で可。公開後に本番 URL から再キャプチャしても良い | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 120KB 以下 | **①既存画像を加工**（済） |
| 7b | **Works サムネイル＋詳細：五大建設足場 チラシ（広告制作）** `public/images/works/godai-flyer*.*` | 添付 PDF（A4 両面）をラスタライズし、**表・裏 2 面を 16:10 の台紙に並置**したサムネイル（113KB AVIF）と、詳細ページ用の各面画像（1200px 幅、約 145KB AVIF）を生成済み | 現状で可。印刷後に **実物を手に持った／机に置いた写真** を 1 枚追加すると「紙として存在する」説得力が増す | 16:10 ／ 1600×1000 ／ AVIF + WebP + JPG ／ 120KB 前後（情報量が多いため例外的に許容）<br>詳細用：A4 比率 ／ 1200×1697 ／ 150KB 以下 | **①既存データを加工**（済）。実物写真は **②新規撮影**：白いデスク、斜め上 45°、自然光、手元または小物を添えて |
| 8 | **保有資格バッジ ×5** `public/images/certs/*.{webp,png}` | 400〜1893px でバラバラだった 4 枚＋新規取得した **SnowPro Core（Credly 公式 PNG 600×600）** を **余白トリミング→160×160 に正規化**、元の色のまま WebP+PNG で生成済み（各 5〜9KB）。ヘアライン付きの小タイルに配置 | 可能なら **Credly 等の公式 SVG を再取得**してベクターで差し替える。AWS / Snowflake は Credly、Databricks は Credentials.databricks.com、Salesforce は Trailhead/Credly で配布 | 1:1 ／ 160×160（@2x 320）／ SVG 推奨・なければ WebP+PNG ／ 各 10KB 以下 | **①既存画像を加工**（済）／公式 SVG 再取得 |
| 9 | **About ページの人物・環境写真** `public/images/about/portrait-env.*` / `marathon-2025.*` | 旧 `about_main2.jpg`（589KB・元からモノクロ）を 3:2・1200×800 にトリミングし明度補正、12KB AVIF で生成済み。加えて自己紹介スライドから **東京レガシーハーフ 2025 完走写真（カラー）** を 3:4 で切り出し Personal セクションに配置（101KB AVIF） | 経歴（建築→建設→IT→データ）の物語を補強する **1〜2枚を追加**：<br>(a) 作業デスクの俯瞰または斜め（ノートPC・図面・コーヒー。画面は消灯か抽象化）<br>(b) 仙台の風景（定禅寺通のケヤキ並木、広瀬川、仙台駅前の引き）<br>カラーで可。打ち合わせ写真もカラーの新規カットに差し替えると統一感が出る | (a) 3:2 ／ 1800×1200 ／ AVIF+WebP+JPG ／ 120KB 以下<br>(b) 16:9 ／ 1920×1080 ／ 同上 ／ 150KB 以下 | (a) **②新規撮影**：デスクは片付け、窓から 45° の自然光、f/4 前後で手前の小物をぼかす。(b) **②新規撮影** or **④ストック**（Unsplash「Sendai」「Jozenji」、Pexels。Unsplash/Pexels ライセンスは商用可・クレジット不要、ただし撮影者クレジット表記を推奨） |
| 10 | **ロゴ（ワードマーク）** `public/logo.svg` / インライン `Logo.tsx` | 旧 45KB（PNG を base64 埋め込み）を **S マークをベクター化（potrace）＋既存欧文パス**で再構成し SVGO 最適化 → **3.4KB**。インライン SVG は `currentColor` でダークモード追従 | 現状で可。長期的にはデザイナーに S マークの正式ベクターデータ（AI/SVG）を依頼し差し替え | SVG ／ 5KB 以下 | **③コードで自作**（済）。正式データ入手時は `assets/originals/s-mark-traced.svg` を置き換え → `npm run logo` |
| 11 | **ファビコン / アプリアイコン** `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`（180）, `icon.png`（512） | 857×857 宣言の 43KB `favicon.ico` を廃止し、黒丸＋白 S の SVG（ダークモードで反転）と PNG 3 種を生成済み | 現状で可 | SVG ／ 180×180 ／ 512×512 ／ PNG | **③コードで自作**（済） |
| 12 | **Services の各領域アイコン／図版**（任意） | 未使用（罫線区切りのテキストのみ） | 追加するなら装飾ではなく **各領域の最小構成図（線画 SVG）** をホバー時に表示する程度に留める。基本は不要 | 16:10 ／ SVG | **③SVG 自作**（任意・後日） |

## 2. 未使用画像（削除候補 — 勝手には消していません）

| ファイル | 使用箇所の調査結果 | 提案 |
|---|---|---|
| `public/footer/wordpress.svg` | 旧 Footer でもコメントアウト済み。新コードから参照なし | 削除 |
| `public/footer/Instagram_Glyph_White.svg` | 新 Footer はテキストリンクに変更したため未使用 | 削除（アイコンを復活させる場合は `currentColor` の SVG をインライン化） |
| `public/logo.png` | 旧 Contact ページの装飾のみ。新コードから参照なし | 削除（S マークは `public/logo-mark.svg` に置換済み） |
| `public/about_main.jpeg` | 参照なし（クラーク像の私的写真。サイトのトーンにも合わない） | 削除 |
| `assets/originals/shun_top_main.png` | 旧ヒーロー写真。横位置で顔が小さく新デザインでは不採用 | 元画像として保管のみ（公開されない） |
| `assets/originals/sfcc.png` | Salesforce のデモ画像（Northern Trail Outfitters）。第三者の商標・画像のため**公開サイトでは不使用**にし、SVG 構成図に置換 | 削除推奨 |

## 3. 実装ルール（適用済み）

- すべての `<img>` に `width` / `height` を指定（CLS 0 を Lighthouse で確認）
- LCP になりうるヒーローのポートレートのみ `fetchpriority="high"`・`loading="eager"`、他は `loading="lazy"`
- 装飾画像（資格バッジ）は `alt=""`、意味のある画像は内容を説明する `alt`
- 色は元画像のまま（グレースケール化しない）。モノクロにしたい場合だけ `sharp().grayscale()` を個別に付ける

## 4. 差し替え手順

1. 元画像を `assets/originals/` に置く（ファイル名は `scripts/optimize-images.mjs` 内の参照に合わせる）
2. `npm run images`（必要なら `npm run logo`, `npm run og`）
3. `public/images/` の生成物をコミット
4. 文字を追加した場合は `npm run fonts`（和文サブセットの再生成）
