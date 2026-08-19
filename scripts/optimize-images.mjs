/**
 * 画像最適化スクリプト（静的エクスポート前提）
 *
 *   npm run images
 *
 * assets/originals/ の元画像から、public/images/ 配下に
 * AVIF / WebP / フォールバック(JPG|PNG) をグレースケールで書き出します。
 * 生成物は git にコミットし、ビルド時には何もしません（ビルドを軽く・決定的に保つため）。
 */
import sharp from 'sharp'
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'assets/originals')
const OUT = path.join(ROOT, 'public')

const AVIF = { quality: 55, effort: 6 }
const WEBP = { quality: 78, effort: 6 }
const JPG = { quality: 78, mozjpeg: true, progressive: true }

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

/** 16:10 のサムネイルに統一（余白付き・グレースケール） */
async function thumbnail(srcFile, outBase, { position = 'top', pad = false, fit = 'cover' } = {}) {
  const W = 1600
  const H = 1000
  const src = sharp(path.join(SRC, srcFile))
  let img
  if (pad) {
    // 案B：実画面を 16:10 でトリミングし、余白を付けて無地の面に配置
    const inner = await src
      .clone()
      .resize({ width: 1360, height: 850, fit, position })
      .grayscale()
      .png()
      .toBuffer()
    const m = await sharp(inner).metadata()
    img = sharp({ create: { width: W, height: H, channels: 3, background: '#e9e9e7' } }).composite([
      { input: inner, left: Math.round((W - m.width) / 2), top: Math.round((H - m.height) / 2) },
    ])
  } else {
    img = src.resize({ width: W, height: H, fit: 'cover', position }).grayscale()
  }
  await writeSet(img, outBase, { widths: [800] })
}

async function main() {
  console.log('▶ Works thumbnails (16:10, grayscale)')
  await thumbnail('pretwe.jpg', 'images/works/pretwe', { pad: true, fit: 'inside' })
  await thumbnail('drawers9.jpg', 'images/works/drawers9', { position: 'top', pad: true })
  await thumbnail('stendear-site.png', 'images/works/stendear-site', { position: 'top', pad: true })

  console.log('▶ Hero portrait (3:4, grayscale)')
  await writeSet(
    sharp(path.join(SRC, 'about_shun.png')).resize({ width: 480, height: 640, fit: 'cover', position: 'top' }).grayscale(),
    'images/hero/portrait',
    { widths: [240] },
  )

  console.log('▶ About environment photo (3:2, grayscale)')
  await writeSet(
    sharp(path.join(SRC, 'about_main2.jpg'))
      .resize({ width: 1200, height: 800, fit: 'cover', position: 'right top' })
      .grayscale()
      .modulate({ brightness: 1.08 }),
    'images/about/portrait-env',
    { widths: [800] },
  )

  console.log('▶ Certification badges (160×160 @2x, grayscale WebP + PNG)')
  const certs = [
    ['cert-aws-saa.png', 'aws-saa'],
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
      .grayscale()
    await badge.clone().png({ compressionLevel: 9, palette: true }).toFile(out)
    await badge.clone().webp({ quality: 80, effort: 6 }).toFile(out.replace(/\.png$/, '.webp'))
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
