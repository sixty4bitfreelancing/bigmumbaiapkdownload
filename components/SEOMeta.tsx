/**
 * Reusable SEO Meta component for bigmumbaiapkdownload.com
 *
 * Includes: meta tags, Open Graph, Twitter Card, geo, AI optimization, canonical, hreflang,
 * Organization & WebSite JSON-LD, theme-color, robots.
 *
 * Usage:
 *   // In page.tsx or layout.tsx
 *   import { getSEOMetadata, SEOMetaJsonLd } from '@/components/SEOMeta';
 *
 *   export const metadata = getSEOMetadata({
 *     title: 'Page Title',
 *     description: 'Page description',
 *     image: '/hero.png',
 *     url: '/page-path',
 *     aiDescription: 'Optional longer description for AI search',
 *   });
 *
 *   export default function Page() {
 *     return (
 *       <>
 *         <SEOMetaJsonLd title="..." description="..." url="/page-path" />
 *         ...page content
 *       </>
 *     );
 *   }
 */

import type { Metadata } from 'next';

import { BASE_URL, TELEGRAM_LINK } from '@/lib/constants';
const BRAND_COLOR = '#d2a778';
const SITE_NAME = 'bigmumbaiapkdownload.com';

export interface SEOMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  /** AI-optimized description (longer, structured for LLMs) */
  aiDescription?: string;
  /** Optional: override Open Graph type */
  ogType?: 'website' | 'article';
  /** Optional: page-specific keywords */
  keywords?: string;
}

/**
 * Generates Next.js Metadata object for use in layout.tsx or page.tsx
 * Usage: export const metadata = getSEOMetadata({ title, description, image, url });
 */
export function getSEOMetadata(props: SEOMetaProps): Metadata {
  const {
    title,
    description,
    image = '/bigmumbaimain.png',
    url = '',
    aiDescription,
    ogType = 'website',
    keywords,
  } = props;

  const canonicalUrl = url ? `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}` : BASE_URL;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description: aiDescription ?? description,
    viewport: 'width=device-width, initial-scale=1',
    keywords: keywords ?? 'big mumbai apk download, big mumbai aviator, big mumbai game, bigmumbaiapkdownload.com',
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: url ? `/${url.replace(/^\//, '')}` : './',
      languages: {
        'en-IN': canonicalUrl,
        en: canonicalUrl,
      },
    },
    openGraph: {
      type: ogType,
      url: canonicalUrl,
      title,
      description,
      siteName: 'Big Mumbai',
      locale: 'en_IN',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bigmumbai',
      creator: '@bigmumbai',
      title,
      description,
      images: [imageUrl],
    },
    themeColor: BRAND_COLOR,
    other: {
      'geo.region': 'IN-MH',
      'geo.placename': 'Mumbai, Maharashtra, India',
      'geo.position': '19.0760;72.8777',
      'ICBM': '19.0760, 72.8777',
      'language': 'en-IN',
      'content-language': 'en-IN',
    },
  };
}

/**
 * Renders JSON-LD Organization and WebSite schemas
 * Place inside page or layout body
 */
export function SEOMetaJsonLd(props: SEOMetaProps) {
  const { description } = props;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Big Mumbai',
    url: BASE_URL,
    logo: `${BASE_URL}/bigmumbailogo.png`,
    sameAs: [
      TELEGRAM_LINK,
      'https://wa.me/919999999999',
      'https://bigmumbaiwinn.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Big Mumbai APK Download',
    url: BASE_URL,
    description: description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

/**
 * Default/global meta values for the site
 */
export const SEOMetaDefaults = {
  baseUrl: BASE_URL,
  brandColor: BRAND_COLOR,
  siteName: SITE_NAME,
  locale: 'en-IN',
  geo: {
    region: 'IN-MH',
    placename: 'Mumbai, Maharashtra, India',
    position: '19.0760;72.8777',
    icbm: '19.0760, 72.8777',
  },
} as const;
