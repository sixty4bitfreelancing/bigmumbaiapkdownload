import { NextResponse } from 'next/server';

const BASE = 'https://bigmumbaiapkdownload.com';

const IMAGES = [
  { page: '/', loc: '/bigmumbaimain.png', title: 'Big Mumbai APK Download – Main Hero' },
  { page: '/', loc: '/bigmumbailogo.png', title: 'Big Mumbai Logo' },
  { page: '/about', loc: '/about-big-mumbai.png', title: 'About Big Mumbai' },
  { page: '/how-to-register-big-mumbai-app', loc: '/how-to-register-big-mumbai-app.png', title: 'How to Register Big Mumbai App' },
  { page: '/big-mumbai-official', loc: '/big-mumbai-official.png', title: 'Big Mumbai Official Site' },
  { page: '/big-mumbai-game-link', loc: '/big-mumbai-game-link.png', title: 'Big Mumbai Game Link' },
  { page: '/big-mumbai-aviator', loc: '/big-mumbai-aviator.png', title: 'Big Mumbai Aviator Game' },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = IMAGES.map(
    (img) => `  <url>
    <loc>${BASE}${img.page}</loc>
    <lastmod>${today}</lastmod>
    <image:image>
      <image:loc>${BASE}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
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
