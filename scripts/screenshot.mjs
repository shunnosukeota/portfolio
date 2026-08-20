/**
 * CDP（Chrome DevTools Protocol）経由でスクリーンショットを撮る。
 *
 * `chrome --headless --window-size=390,844 --screenshot` は、この Mac では
 * ウィンドウ幅が最低 500px にクランプされる。390px を指定しても 500px 幅で
 * レイアウトしたものが 390px に切り取られて返るため、「横にはみ出している」
 * ように見える偽陽性が出る。Emulation.setDeviceMetricsOverride を使えば
 * 実機どおりの幅で描画できる。
 *
 *   node --experimental-websocket scripts/screenshot.mjs <url> <out.png> <width> [height] [fullPage=1]
 *
 * 例）モバイル全体: ... http://127.0.0.1:4322/ shot.png 390 844 1
 *     デスクトップ: ... http://127.0.0.1:4322/ shot.png 1440 900 1
 *
 * 注意: Node 21 では WebSocket に --experimental-websocket が必要。
 *       fullPage=1（captureBeyondViewport）は loading="lazy" の画像を
 *       読み込まないため、下部の画像も撮りたいときは height にページ全体の
 *       高さを渡して fullPage=0 にするのが確実。
 */
import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const [url, out, wArg, hArg, fullArg] = process.argv.slice(2)
const width = Number(wArg || 1440)
const height = Number(hArg || 900)
const fullPage = fullArg !== '0'
const PORT = 9333 + (Number(process.env.SHOT_PORT_OFFSET) || 0)

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  `--remote-debugging-port=${PORT}`,
  // プロファイルを使い回すと画像が HTTP キャッシュに残り、差し替えたのに古い画像が写る
  `--user-data-dir=/tmp/cdp-shot-${PORT}-${Date.now()}`,
  '--disk-cache-size=1',
  'about:blank',
], { stdio: 'ignore' })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function targets() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json`)
      const list = await r.json()
      const page = list.find((t) => t.type === 'page')
      if (page) return page
    } catch {}
    await sleep(250)
  }
  throw new Error('DevTools に接続できませんでした')
}

const page = await targets()
const ws = new WebSocket(page.webSocketDebuggerUrl)
let id = 0
const pending = new Map()
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result)
    pending.delete(m.id)
  }
})
await new Promise((r) => ws.addEventListener('open', r, { once: true }))
const send = (method, params = {}) =>
  new Promise((res) => {
    const n = ++id
    pending.set(n, res)
    ws.send(JSON.stringify({ id: n, method, params }))
  })

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', {
  width, height, deviceScaleFactor: 1, mobile: width < 768,
})
await send('Page.navigate', { url })
await sleep(2500)
// 画面外の画像は loading="lazy" のままだと全ページ撮影で空になるので、先に eager へ切り替える
await send('Runtime.evaluate', {
  expression: `document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; i.src = i.src })`,
})
await sleep(2500)
const metrics = await send('Page.getLayoutMetrics')
const cw = metrics.cssContentSize || metrics.contentSize
const shot = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: fullPage,
  ...(fullPage
    ? { clip: { x: 0, y: 0, width, height: Math.min(cw.height, 30000), scale: 1 } }
    : {}),
})
writeFileSync(out, Buffer.from(shot.data, 'base64'))
console.log(`${out}  viewport=${width}  docHeight=${Math.round(cw.height)}  scrollW=${Math.round(cw.width)}`)
ws.close()
chrome.kill()
process.exit(0)
