/**
 * デザイントークンの取りこぼし検査。
 *
 * Tailwind は未定義のユーティリティを **エラーにせず無視する**ため、
 * `bg-accent` や `.btn-secondary` のような存在しないクラスを書いても
 * ビルドは通り、その要素だけスタイルが当たらないまま本番に出てしまう。
 * （実際に `.btn-secondary` が未定義のままリリースされ、/contact と 404 の
 *   ボタンが無スタイルで表示されていた。）
 *
 * ここでは tailwind.config.ts と globals.css の定義を読み、
 * src 配下で使われている spacing / 色 / 自作コンポーネントクラスを突き合わせる。
 *
 *   npm run check:tokens
 */
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const read = (p) => readFileSync(path.join(ROOT, p), 'utf8')

/** `key: value,` 形式のブロックからキー名だけ取り出す */
function keysOf(source, startMarker, endMarker = '\n    },') {
  const i = source.indexOf(startMarker)
  if (i < 0) return new Set()
  const block = source.slice(i).split(endMarker)[0]
  return new Set([...block.matchAll(/^\s+([\w.'"-]+):/gm)].map((m) => m[1].replace(/['"]/g, '')))
}

const cfg = read('tailwind.config.ts')
const css = read('src/app/globals.css')

const spacing = keysOf(cfg, '    spacing: {')
const colors = keysOf(cfg, '    colors: {')
const custom = new Set(
  [...css.matchAll(/^\s*\.([a-z][\w-]*)/gm)].map((m) => m[1]),
)

/** src 配下の .tsx / .css を再帰的に集める（Node 21 に globSync が無いため自前で歩く） */
function walk(dir) {
  const out = []
  for (const e of readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = `${dir}/${e.name}`
    if (e.isDirectory()) out.push(...walk(rel))
    else if (/\.(tsx|css)$/.test(e.name)) out.push(rel)
  }
  return out
}
const files = walk('src')

/** 数値を取るユーティリティ（余白・サイズ・位置） */
const SPACING_PROPS =
  '(?:gap|gap-x|gap-y|p|px|py|pt|pb|pl|pr|-?m|mx|my|mt|mb|ml|mr|space-x|space-y|w|h|min-w|min-h|top|bottom|left|right|inset)'
const SPACING_OK = new Set(['auto', 'full', 'screen', 'px', 'fit', 'min', 'max', 'none', 'svh', '0'])

/** 色を取るユーティリティ。値がキーワードのものは対象外 */
const COLOR_PROPS =
  '(bg|text|border|ring|fill|stroke|decoration|outline|divide|placeholder|caret|from|to|via|accent)'
const COLOR_SKIP = {
  text: ['left', 'right', 'center', 'justify', 'balance', 'pretty', 'wrap', 'nowrap', 'clip', 'ellipsis', 'start', 'end'],
  bg: ['cover', 'contain', 'center', 'no', 'fixed', 'local', 'scroll', 'clip', 'origin', 'blend', 'gradient', 'none', 'auto', 'bottom', 'top', 'left', 'right', 'repeat'],
  // bg-gradient-to-t / -tr … は方向指定なので色として見ない
  border: ['solid', 'dashed', 'dotted', 'double', 'none', 'collapse', 'separate', 'spacing', 't', 'b', 'l', 'r', 'x', 'y', 's', 'e'],
  ring: ['offset', 'inset', 'none'],
  outline: ['none', 'dashed', 'dotted', 'double', 'offset', 'hidden'],
  divide: ['x', 'y', 'solid', 'dashed', 'none'],
  stroke: ['none'],
  fill: ['none', 'current'],
  decoration: ['none', 'solid', 'dashed', 'dotted', 'wavy', 'clone', 'slice', 'from', 'auto'],
}
const GLOBAL_COLORS = ['inherit', 'current', 'transparent', 'white', 'black', 'none']

/** 自作のコンポーネントクラス（globals.css の @layer で定義しているもの） */
const CUSTOM_RE = /(?:^|[\s"'`{])((?:btn|card)-[a-z][\w-]*|btn|card|pill|tag|label|num|link|zoomable|underline-grow|slant-top)(?=[\s"'`}])/g

const fontSizes = keysOf(cfg, '    fontSize: {')
const problems = []

for (const file of files) {
  const lines = read(file).split('\n')
  lines.forEach((line, n) => {
    const at = `${file}:${n + 1}`
    const variants = '(?:(?:sm|md|lg|xl|2xl|hover|focus|focus-visible|active|group-hover|peer-focus|first|last|odd|even|disabled|motion-safe|motion-reduce):)*'

    for (const m of line.matchAll(new RegExp(`(?:^|[\\s"'\`{])${variants}${SPACING_PROPS}-([\\w.]+)`, 'g'))) {
      const raw = m[0].trim()
      const prop = raw.replace(/^.*?:/, '').replace(/-[\w.]+$/, '')
      const val = m[1]
      if (SPACING_OK.has(val) || val.startsWith('[') || !/^[\d.]+$/.test(val)) continue
      if (!spacing.has(val)) problems.push(`${at}  spacing 未定義: ${prop}-${val}`)
    }

    for (const m of line.matchAll(new RegExp(`(?:^|[\\s"'\`{])${variants}${COLOR_PROPS}-([a-z][\\w-]*)`, 'g'))) {
      const [, prop, val] = m
      const root = val.split('/')[0]
      if (prop === 'bg' && root.startsWith('gradient-')) continue
      if ((COLOR_SKIP[prop] || []).includes(root)) continue
      // border-t-0 / divide-x-2 のような「辺 + 太さ」は色ではないので除外する
      if (/^[a-z]{1,2}-\d+$/.test(root) && (COLOR_SKIP[prop] || []).includes(root.split('-')[0])) continue
      if (prop === 'text' && (fontSizes.has(root) || fontSizes.has(val))) continue
      if (GLOBAL_COLORS.includes(root) || colors.has(root)) continue
      if (file.endsWith('.css') && /^\s*(border|outline|text|background)-/.test(line)) continue
      problems.push(`${at}  色トークン未定義: ${prop}-${val}`)
    }

    if (file.endsWith('.tsx')) {
      for (const m of line.matchAll(CUSTOM_RE)) {
        if (!custom.has(m[1])) problems.push(`${at}  クラス未定義: .${m[1]}`)
      }
    }
  })
}

if (problems.length) {
  console.error('未定義のトークン／クラスが見つかりました:\n')
  for (const p of problems) console.error('  ' + p)
  console.error(`\n合計 ${problems.length} 件。tailwind.config.ts か globals.css に定義するか、使用側を修正してください。`)
  process.exit(1)
}
console.log(`OK — spacing ${spacing.size} / 色 ${colors.size} / 自作クラス ${custom.size} 件、すべて定義済みです。`)
