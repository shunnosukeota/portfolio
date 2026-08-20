/**
 * 画像最適化スクリプト（静的エクスポート前提）
 *
 *   npm run images
 *
 * assets/originals/ の元画像から、public/images/ 配下に
 * AVIF / WebP / フォールバック(JPG|PNG) を書き出します（色は元画像のまま）。
 * 生成物は git にコミットし、ビルド時には何もしません（ビルドを軽く・決定的に保つため）。
 */
import sharp from 'sharp'
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'assets/originals')
const OUT = path.join(ROOT, 'public')

const AVIF = { quality: 58, effort: 6 }
const WEBP = { quality: 80, effort: 6 }
const JPG = { quality: 80, mozjpeg: true, progressive: true }

/** 余白付きサムネイルの台紙色（ライト UI と馴染む薄いグレー） */
const MAT = '#ebebe9'

const kb = (n) => `${(n / 1024).toFixed(1)}KB`

async function ensureDir(p) {
  await mkdir(path.dirname(p), { recursive: true })
}

async function report(p) {
  const s = await stat(p)
  console.log(`  ${path.relative(OUT, p).padEnd(48)} ${kb(s.size)}`)
}

/** pipeline → avif/webp/jpg を同名で書き出し */
async function writeSet(pipeline, outBase, { fallback = 'jpg', widths = [] } = {}) {
  const base = path.join(OUT, outBase)
  await ensureDir(base)
  const buf = await pipeline.png().toBuffer()
  const meta = await sharp(buf).metadata()
  const targets = [{ suffix: '', width: meta.width }, ...widths.map((w) => ({ suffix: `-w${w}`, width: w }))]
  for (const t of targets) {
    const img = sharp(buf).resize({ width: t.width, withoutEnlargement: true })
    await img.clone().avif(AVIF).toFile(`${base}${t.suffix}.avif`)
    await img.clone().webp(WEBP).toFile(`${base}${t.suffix}.webp`)
    if (fallback === 'jpg') await img.clone().flatten({ background: '#f4f4f3' }).jpeg(JPG).toFile(`${base}${t.suffix}.jpg`)
    if (fallback === 'png') await img.clone().png({ compressionLevel: 9, palette: true }).toFile(`${base}${t.suffix}.png`)
    for (const ext of ['avif', 'webp', fallback]) await report(`${base}${t.suffix}.${ext}`)
  }
}

/** 16:10 のサムネイルに統一（必要なら余白付き） */
async function thumbnail(srcFile, outBase, { position = 'top', pad = false, fit = 'cover' } = {}) {
  const W = 1600
  const H = 1000
  const src = sharp(path.join(SRC, srcFile))
  let img
  if (pad) {
    // 案B：実画面を 16:10 でトリミングし、余白を付けて無地の面に配置
    const inner = await src.clone().resize({ width: 1360, height: 850, fit, position }).png().toBuffer()
    const m = await sharp(inner).metadata()
    img = sharp({ create: { width: W, height: H, channels: 3, background: MAT } }).composite([
      { input: inner, left: Math.round((W - m.width) / 2), top: Math.round((H - m.height) / 2) },
    ])
  } else {
    img = src.resize({ width: W, height: H, fit: 'cover', position })
  }
  await writeSet(img, outBase, { widths: [800] })
}

/** 紙媒体（A4 両面）を 16:10 の台紙に 2 面並べる */
async function printThumbnail(frontFile, backFile, outBase) {
  const W = 1600
  const H = 1000
  const pageH = 860
  const front = await sharp(path.join(SRC, frontFile)).resize({ height: pageH }).png().toBuffer()
  const back = await sharp(path.join(SRC, backFile)).resize({ height: pageH }).png().toBuffer()
  const fm = await sharp(front).metadata()
  const bm = await sharp(back).metadata()
  const gap = 48
  const total = fm.width + gap + bm.width
  const left = Math.round((W - total) / 2)
  const top = Math.round((H - pageH) / 2)
  // 紙らしさ：ごく薄い縁取り
  const frame = (w, h) =>
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" fill="none" stroke="#0a0a0a" stroke-opacity="0.14"/></svg>`,
    )
  const img = sharp({ create: { width: W, height: H, channels: 3, background: MAT } }).composite([
    { input: front, left, top },
    { input: frame(fm.width, pageH), left, top },
    { input: back, left: left + fm.width + gap, top },
    { input: frame(bm.width, pageH), left: left + fm.width + gap, top },
  ])
  await writeSet(img, outBase, { widths: [800] })
}

async function main() {
  console.log('▶ Works thumbnails (16:10)')
  await thumbnail('pretwe.jpg', 'images/works/pretwe', { pad: true, fit: 'inside' })
  await thumbnail('asobizukan.png', 'images/works/asobizukan', { pad: true, fit: 'inside' })
  await thumbnail('drawers9.jpg', 'images/works/drawers9', { position: 'top', pad: true })
  await thumbnail('stendear-site.png', 'images/works/stendear-site', { position: 'top', pad: true })
  await printThumbnail('godai-flyer-front.jpg', 'godai-flyer-back.jpg', 'images/works/godai-flyer')
  // NDA 案件の構成図（4:3 の図版を 16:10 の台紙に収める）
  await thumbnail('work-sfcc-ec.png', 'images/works/sfcc-ec', { pad: true, fit: 'inside' })
  await thumbnail('work-data-platform.png', 'images/works/data-platform', { pad: true, fit: 'inside' })

  console.log('▶ Work detail images (flyer pages)')
  await writeSet(sharp(path.join(SRC, 'godai-flyer-front.jpg')).resize({ width: 1200 }), 'images/works/godai-flyer-front', {
    widths: [800],
  })
  await writeSet(sharp(path.join(SRC, 'godai-flyer-back.jpg')).resize({ width: 1200 }), 'images/works/godai-flyer-back', {
    widths: [800],
  })

  // ヒーローでは小さく添えるだけなので縦位置で切る。
  // 元が 672x448 なので 336x448 までは拡大なしで取れる。
  console.log('▶ Hero portrait (3:4)')
  await writeSet(
    sharp(path.join(SRC, 'hero-office.jpg')).resize({ width: 336, height: 448, fit: 'cover', position: 'center' }),
    'images/hero/portrait',
    { widths: [168] },
  )

  console.log('▶ About photos')
  await writeSet(
    sharp(path.join(SRC, 'about_main2.jpg'))
      .resize({ width: 1200, height: 800, fit: 'cover', position: 'right top' })
      .modulate({ brightness: 1.08 }),
    'images/about/portrait-env',
    { widths: [800] },
  )
  await writeSet(
    sharp(path.join(SRC, 'marathon-2025.jpg')).resize({ width: 900, height: 1200, fit: 'cover', position: 'top' }),
    'images/about/marathon-2025',
    { widths: [600] },
  )

  console.log('▶ Certification badges (160×160, WebP + PNG, original colors)')
  const certs = [
    ['cert-aws-saa.png', 'aws-saa'],
    ['cert-snowpro-core.png', 'snowpro-core'],
    ['cert-databricks-de.png', 'databricks-de'],
    ['cert-sf-b2c-dev.png', 'sf-b2c-dev'],
    ['cert-sf-admin.png', 'sf-admin'],
  ]
  for (const [file, id] of certs) {
    const out = path.join(OUT, `images/certs/${id}.png`)
    await ensureDir(out)
    const badge = sharp(path.join(SRC, file))
      .trim({ threshold: 5 })
      .resize({ width: 160, height: 160, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    await badge.clone().png({ compressionLevel: 9, palette: true }).toFile(out)
    await badge.clone().webp({ quality: 82, effort: 6 }).toFile(out.replace(/\.png$/, '.webp'))
    await report(out)
    await report(out.replace(/\.png$/, '.webp'))
  }

  console.log('▶ Favicons / app icons from the traced S mark')
  const sPath = (await readFile(path.join(SRC, 's-mark-traced.svg'), 'utf8')).match(/ d="([^"]+)"/)[1]
  // 正方形アイコン：黒い円 + 白い S（ダークモード時は SVG 内で反転）
  const iconSvg = (bg, fg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221">
<circle cx="110.5" cy="110.5" r="110.5" fill="${bg}"/>
<g transform="translate(60.2 26.5) scale(0.215)"><path fill="${fg}" d="${sPath}"/></g>
</svg>`
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 221">
<style>circle{fill:#0a0a0a}path{fill:#fafaf9}@media(prefers-color-scheme:dark){circle{fill:#f5f5f4}path{fill:#0a0a0a}}</style>
<circle cx="110.5" cy="110.5" r="110.5"/>
<g transform="translate(60.2 26.5) scale(0.215)"><path d="${sPath}"/></g>
</svg>`
  await writeFile(path.join(OUT, 'favicon.svg'), faviconSvg)
  await report(path.join(OUT, 'favicon.svg'))
  const dark = iconSvg('#0a0a0a', '#fafaf9')
  await sharp(Buffer.from(dark)).resize(180, 180).png().toFile(path.join(OUT, 'apple-touch-icon.png'))
  await report(path.join(OUT, 'apple-touch-icon.png'))
  await sharp(Buffer.from(dark)).resize(512, 512).png().toFile(path.join(OUT, 'icon.png'))
  await report(path.join(OUT, 'icon.png'))
  await sharp(Buffer.from(dark)).resize(32, 32).png().toFile(path.join(OUT, 'favicon-32.png'))
  await report(path.join(OUT, 'favicon-32.png'))
  console.log('done')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
