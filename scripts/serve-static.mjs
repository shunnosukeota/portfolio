/**
 * out/ をローカル配信する開発用サーバー。
 *
 * gzip とキャッシュヘッダを付けるので、CloudFront 配信に近い条件で
 * Lighthouse を測れる。`python3 -m http.server` は無圧縮のため
 * HTML/JS が数倍に見え、モバイルスコアが 10 以上低く出てしまう。
 *
 *   npm run build && npm run preview          # http://127.0.0.1:4322
 *   npx lighthouse http://127.0.0.1:4322/ --preset=desktop
 */
import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import path from 'node:path'

const ROOT = process.argv[2]
const PORT = Number(process.argv[3] || 4322)
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
  '.xml': 'application/xml',
}
const COMPRESS = new Set(['.html', '.js', '.css', '.json', '.txt', '.svg', '.xml'])

http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://x')
    let p = path.join(ROOT, decodeURIComponent(u.pathname))
    // /works のように「同名ディレクトリ」と「works.html」が両方ある構成に対応する。
    // ディレクトリに index.html が無ければ <dir>.html にフォールバックする。
    try {
      if ((await stat(p)).isDirectory()) {
        const idx = path.join(p, 'index.html')
        try { await stat(idx); p = idx } catch { p = `${p}.html` }
      }
    } catch {
      if (!path.extname(p)) p += '.html'
    }
    const buf = await readFile(p)
    const ext = path.extname(p)
    const headers = {
      'content-type': TYPES[ext] || 'application/octet-stream',
      'cache-control': ext === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable',
    }
    if (COMPRESS.has(ext) && (req.headers['accept-encoding'] || '').includes('gzip')) {
      const z = gzipSync(buf, { level: 9 })
      res.writeHead(200, { ...headers, 'content-encoding': 'gzip', 'content-length': z.length })
      res.end(z)
    } else {
      res.writeHead(200, { ...headers, 'content-length': buf.length })
      res.end(buf)
    }
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('not found')
  }
}).listen(PORT, '127.0.0.1', () => console.log('serving on', PORT))
