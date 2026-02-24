import type { Metadata } from 'next';
import { BASE_URL } from './constants';

export function getPageMetadata(
  path: string,
  title: string,
  description: string,
  imagePath = '/bigmumbaimain.png'
): Metadata {
  const url = path.startsWith('/') ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
        'x-default': url,
      },
    },
    openGraph: {
      url,
      title,
      description,
      images: [{ url: `${BASE_URL}${imagePath}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [`${BASE_URL}${imagePath}`],
    },
  };
}
