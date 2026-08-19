import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // S3 + CloudFront への静的配信のため完全静的エクスポート
  output: 'export',
  // 既存の CloudFront ルーティング（/about と /about/ の双方で about.html が返る）に合わせ、
  // 出力形式（about.html / works/slug.html）は従来どおりとする
  trailingSlash: false,
  reactStrictMode: true,
  // ホームディレクトリ等の別 lockfile をワークスペースルートと誤認しないようにする
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  experimental: {
    // CSS は合計 6KB 程度なので <style> にインライン化し、レンダーブロックの往復を 1 つ減らす
    inlineCss: true,
  },
  images: {
    // 静的エクスポートでは画像最適化 API が使えないため、
    // 画像は scripts/optimize-images.mjs で事前に AVIF/WebP を生成し <picture> で配信する
    unoptimized: true,
  },
}

export default nextConfig
