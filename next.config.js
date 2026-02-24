/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/sitemap-pages.xml', destination: '/api/sitemap-pages' },
      { source: '/sitemap-images.xml', destination: '/api/sitemap-images' },
    ];
  },
};

module.exports = nextConfig;
