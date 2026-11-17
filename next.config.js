/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化設定
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 実験的機能でパフォーマンス向上
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // 圧縮とキャッシュ最適化
  compress: true,
  
  // PWA対応でキャッシュ強化
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;