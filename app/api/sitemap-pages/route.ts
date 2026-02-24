import { NextResponse } from 'next/server';

const BASE = 'https://bigmumbaiapkdownload.com';

const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily', image: '/bigmumbaimain.png', imageTitle: 'Big Mumbai APK Download Latest Version' },
  { path: '/about', priority: '0.8', changefreq: 'monthly', image: '/about-big-mumbai.png', imageTitle: 'About Big Mumbai' },
  { path: '/how-to-register-big-mumbai-app', priority: '0.9', changefreq: 'weekly', image: '/how-to-register-big-mumbai-app.png', imageTitle: 'How to Register Big Mumbai App' },
  { path: '/big-mumbai-official', priority: '0.9', changefreq: 'weekly', image: '/big-mumbai-official.png', imageTitle: 'Big Mumbai Official Site Guide' },
  { path: '/big-mumbai-game-link', priority: '0.9', changefreq: 'weekly', image: '/big-mumbai-game-link.png', imageTitle: 'Big Mumbai Game Link Guide' },
  { path: '/big-mumbai-aviator', priority: '0.9', changefreq: 'weekly', image: '/big-mumbai-aviator.png', imageTitle: 'Big Mumbai Aviator Game Guide' },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = PAGES.map(
    (p) => `  <url>
    <loc>${BASE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <image:image>
      <image:loc>${BASE}${p.image}</image:loc>
      <image:title>${p.imageTitle}</image:title>
    </image:image>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
