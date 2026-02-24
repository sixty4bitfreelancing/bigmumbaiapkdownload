import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { AutoYearScript } from '@/components/auto-year-script';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bigmumbaiapkdownload.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  title: 'Big Mumbai APK Download Latest Version 2026 | Official Big Mumbai App Free Download',
  description: 'Download Big Mumbai APK latest version 2026 for Android. Get the official Big Mumbai app APK free download, Big Mumbai Aviator, colour trading & more. Fast, direct APK download without login. Register now & get ₹500 bonus!',
  keywords: 'big mumbai apk download, big mumbai apk 2026, big mumbai aviator, big mumbai colour trading, big mumbai login, big mumbai game register',
  authors: [{ name: 'Big Mumbai' }],
  creator: 'Big Mumbai',
  publisher: 'Big Mumbai',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bigmumbaiapkdownload.com',
    title: 'Big Mumbai APK Download Latest Version 2026 | Official Big Mumbai App Free Download',
    description: 'Download Big Mumbai APK latest version 2026 for Android. Get the official Big Mumbai app APK free download, Big Mumbai Aviator, colour trading & more. Fast, direct APK download without login. Register now & get ₹500 bonus!',
    siteName: 'Big Mumbai',
    images: [
      {
        url: '/bigmumbaimain.png',
        width: 1200,
        height: 630,
        alt: 'Big Mumbai Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Mumbai APK Download Latest Version 2026 | Official Big Mumbai App Free Download',
    description: 'Download Big Mumbai APK latest version 2026 for Android. Get the official Big Mumbai app APK free download, Big Mumbai Aviator, colour trading & more. Fast, direct APK download without login. Register now & get ₹500 bonus!',
    images: ['/bigmumbaimain.png'],
    creator: '@bigmumbai',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai',
    'geo.position': '19.076090;72.877426',
    'ICBM': '19.076090, 72.877426',
  },
  alternates: {
    canonical: 'https://bigmumbaiapkdownload.com',
    languages: {
      'en-IN': 'https://bigmumbaiapkdownload.com',
      'x-default': 'https://bigmumbaiapkdownload.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* dns-prefetch only for non-font origins - fonts use preconnect above */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical above-the-fold hero images */}
        <link rel="preload" href="/bigmumbaimain.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Big Mumbai',
              url: 'https://bigmumbaiapkdownload.com',
              description: 'Download Big Mumbai APK latest version 2026 for Android. Get the official Big Mumbai app APK free download, Big Mumbai Aviator, colour trading & more. Fast, direct APK download without login. Register now & get ₹500 bonus!',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://bigmumbaiapkdownload.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Where to download Big Mumbai APK safely?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The safest place to get the Big Mumbai APK download link is bigmumbaiapkdownload.com — the only verified source for the Big Mumbai game original APK.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Big Mumbai game real or fake?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Big Mumbai is a real and operational platform with 500,000+ users, instant withdrawals, and certified RNG games. It is not fake.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I do a Big Mumbai APK download without login?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply visit our download page and click the direct download button. You do not need an account to download the Big Mumbai APK file.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the latest Big Mumbai APK version in 2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The current release is the Big Mumbai APK 2026 download — always updated on this page. Check back regularly for the Big Mumbai updated APK download.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I download the Big Mumbai APK for Android older devices?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We archive the Big Mumbai APK old version for devices running Android 5.0 and above.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is BigMumbaiLife / BigMumbaiWin?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BigMumbaiLife and BigMumbaiWin are alternate brand names for the same official Big Mumbai platform — same games, same app, same rewards.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}<AutoYearScript /></body>
    </html>
  );
}
