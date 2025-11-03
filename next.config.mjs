/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: [], // WebP dönüşümünü devre dışı bırak, orijinal formatı kullan
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cloudflare R2 için remote patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-c1f7f49eaa9c4d6bb013c52d6da112d3.r2.dev',
        pathname: '/**',
      },
    ],
  },
  // Production optimizasyonları
  productionBrowserSourceMaps: false, // .map dosyalarını arama (hızı artırır)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
