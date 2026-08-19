/**
 * OG 画像（1200×630 / public/og.png）を静的に生成する。
 * 静的エクスポートでは ImageResponse が使えないため、SVG を sharp でラスタライズする。
 *
 *   npm run og
 *
 * フォントは実行環境のシステムフォント（Helvetica Neue / Hiragino Sans 等）を使用。
 */
import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const logo = await readFile(path.join(ROOT, 'public/logo.svg'), 'utf8')
const logoPaths = logo.match(/<path[^>]*\/>/g).join('')

const SANS = "'Helvetica Neue', 'Inter Tight', 'Hiragino Sans', 'Noto Sans JP', Arial, sans-serif"
const JP = "'Hiragino Sans', 'Noto Sans JP', 'Helvetica Neue', sans-serif"
const MONO = "'Geist Mono', 'SF Mono', Menlo, 'Courier New', monospace"

const W = 1200
const H = 630

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#fafaf9"/>
  <!-- wordmark -->
  <g transform="translate(72 64) scale(2.1)" fill="#0a0a0a">${logoPaths}</g>
  <!-- label -->
  <text x="72" y="214" font-family="${MONO}" font-size="20" letter-spacing="3" fill="#5a5a5a">IT CONSULTANT &amp; ENGINEER — SENDAI, JAPAN</text>
  <!-- title -->
  <text x="68" y="310" font-family="${JP}" font-size="61" font-weight="600" letter-spacing="-1.5" fill="#0a0a0a">Web・EC・クラウド・データ基盤を、</text>
  <text x="68" y="392" font-family="${JP}" font-size="61" font-weight="600" letter-spacing="-1.5" fill="#0a0a0a">企画から運用まで一人で通す。</text>
  <!-- footer -->
  <line x1="72" y1="506" x2="1128" y2="506" stroke="#0a0a0a" stroke-opacity="0.14" stroke-width="1.5"/>
  <text x="72" y="556" font-family="${JP}" font-size="24" fill="#0a0a0a">太田 駿之介</text>
  <text x="212" y="556" font-family="${JP}" font-size="22" fill="#5a5a5a">ITコンサルタント / エンジニア</text>
  <text x="1128" y="556" text-anchor="end" font-family="${MONO}" font-size="20" letter-spacing="1" fill="#5a5a5a">stendear.com</text>
</svg>`

const out = path.join(ROOT, 'public/og.png')
await sharp(Buffer.from(svg), { density: 144 })
  .resize(W, H)
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile(out)
const size = (await readFile(out)).length
console.log(`og.png ${(size / 1024).toFixed(1)}KB`)
await writeFile(path.join(ROOT, 'assets/og-source.svg'), svg)
