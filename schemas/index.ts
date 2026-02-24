/**
 * JSON-LD Schema exports for bigmumbaiapkdownload.com
 * Import and use per page - each returns an object for script dangerouslySetInnerHTML
 *
 * Usage:
 *   import { getOrganizationSchema, getAviatorFAQSchema } from '@/schemas';
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
 *
 */

const BASE = 'https://bigmumbaiapkdownload.com';

// ─── 1. Organization Schema ─────────────────────────────────────────────────
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Big Mumbai APK Download',
    url: BASE,
    logo: `${BASE}/bigmumbailogo.png`,
    description: "India's authorized affiliate source for Big Mumbai APK download",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@bigmumbaiapkdownload.com',
      availableLanguage: ['Hindi', 'English'],
    },
  };
}

// ─── 2. WebSite Schema with SearchAction ─────────────────────────────────────
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Big Mumbai APK Download',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─── 3. BreadcrumbList Schema (per page) ─────────────────────────────────────
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

// Predefined breadcrumbs for key pages
export const BREADCRUMBS = {
  home: [{ name: 'Home', path: '/' }],
  games: [{ name: 'Home', path: '/' }, { name: 'Games', path: '/' }],
  aviator: [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/' },
    { name: 'Big Mumbai Aviator', path: '/big-mumbai-aviator' },
  ],
  register: [{ name: 'Home', path: '/' }, { name: 'How to Register on Big Mumbai App', path: '/how-to-register-big-mumbai-app' }],
  official: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'Big Mumbai Official Site', path: '/big-mumbai-official' },
  ],
  gameLink: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'Big Mumbai Game Link', path: '/big-mumbai-game-link' },
  ],
};

// ─── 4. FAQPage Schemas ─────────────────────────────────────────────────────
export function getAviatorFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is Big Mumbai Aviator?', acceptedAnswer: { '@type': 'Answer', text: 'Big Mumbai Aviator is a real-money crash game on the Big Mumbai platform where players bet on a rising multiplier and must cash out before the virtual plane crashes. Rounds complete in 8–30 seconds.' } },
      { '@type': 'Question', name: 'How do I download Big Mumbai Aviator?', acceptedAnswer: { '@type': 'Answer', text: 'Download the Big Mumbai APK latest version from bigmumbaiapkdownload.com for the best mobile experience. Or play Big Mumbai Aviator online directly in your browser at bigmumbaiwinn.com — no download required.' } },
      { '@type': 'Question', name: 'Is Big Mumbai Aviator real or fake?', acceptedAnswer: { '@type': 'Answer', text: 'Big Mumbai Aviator is real. It uses internationally certified Provably Fair RNG technology, processes real-money withdrawals daily to Indian bank accounts and UPI, and is played by 500,000+ verified players on the Big Mumbai platform.' } },
      { '@type': 'Question', name: 'Can I play Big Mumbai Aviator on iPhone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Since APK installation is not available on iOS, play Big Mumbai Aviator online via Safari or Chrome at bigmumbaiwinn.com — the full game is accessible on all iOS devices.' } },
      { '@type': 'Question', name: 'What is the maximum win on Big Mumbai Aviator?', acceptedAnswer: { '@type': 'Answer', text: 'The theoretical maximum multiplier is 1,000,000x. Multipliers of 50x–200x occur regularly, with occasional rounds reaching 500x or higher.' } },
      { '@type': 'Question', name: 'Is there a Big Mumbai Aviator predictor or hack?', acceptedAnswer: { '@type': 'Answer', text: 'No. Big Mumbai Aviator uses certified RNG — outcomes are mathematically random and cannot be predicted. Any platform claiming to offer an Aviator predictor is a scam. Use bankroll management strategies instead.' } },
      { '@type': 'Question', name: 'What is the Big Mumbai Aviator Telegram channel?', acceptedAnswer: { '@type': 'Answer', text: 'The Big Mumbai Aviator Telegram channel is the official community hub — sharing bonus codes, strategies, APK updates, and tournament announcements. Always verify the channel is official before joining.' } },
      { '@type': 'Question', name: 'What is the minimum bet on Big Mumbai Aviator?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum bet is ₹10 per round — making it accessible to all players regardless of bankroll size.' } },
      { '@type': 'Question', name: 'How do I withdraw Aviator winnings from Big Mumbai?', acceptedAnswer: { '@type': 'Answer', text: 'Go to Account → Withdraw in the Big Mumbai login app, add your bank account or UPI ID, and request withdrawal. Minimum ₹110 — processed within 1–2 hours typically.' } },
    ],
  };
}

export function getRegisterFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I register on Big Mumbai app?', acceptedAnswer: { '@type': 'Answer', text: 'Download the Big Mumbai APK from bigmumbaiapkdownload.com, open the app, tap Account → Register, fill in mobile number, password, and invitation code 54147218367, then tap Register. Done in under 3 minutes.' } },
      { '@type': 'Question', name: 'What is the Big Mumbai invitation code for 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The current working Big Mumbai invitation code is 54147218367. Enter during registration to unlock gift bonus ₹10–₹100 plus Big Mumbai 500 welcome offer.' } },
      { '@type': 'Question', name: 'Is Big Mumbai registration free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Big Mumbai game register online is completely free. No deposit needed to create account or claim welcome bonus.' } },
      { '@type': 'Question', name: 'Can I register on Big Mumbai without downloading the APK?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, via the official website on mobile browser. However, downloading the Big Mumbai login app gives the best experience.' } },
      { '@type': 'Question', name: 'How long does Big Mumbai registration take?', acceptedAnswer: { '@type': 'Answer', text: 'Under 3 minutes — mobile number, password, invitation code, and activation are all instant.' } },
      { '@type': 'Question', name: 'What is the minimum withdrawal amount on Big Mumbai?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum withdrawal is ₹110. Processing typically 1–2 hours.' } },
    ],
  };
}

export function getOfficialFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: "How do I know if I'm on the real Big Mumbai official site?", acceptedAnswer: { '@type': 'Answer', text: 'Check for https:// and a padlock icon, verify the domain is bigmumbaiwinn.com, and confirm contact email is info@bigmumbaiwinn.com. For mobile, always download the Big Mumbai game original APK from bigmumbaiapkdownload.com.' } },
      { '@type': 'Question', name: 'Are my earnings safe on the Big Mumbai official site?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All transactions are encrypted with bank-grade SSL/TLS. The platform processes instant withdrawals via UPI and bank transfer. 500,000+ players have successfully withdrawn real money from BigMumbaiWin.' } },
      { '@type': 'Question', name: 'Is Big Mumbai RNG certified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All games use internationally certified RNG technology — every outcome is mathematically random and independently auditable.' } },
      { '@type': 'Question', name: 'Is the Big Mumbai game real or fake?', acceptedAnswer: { '@type': 'Answer', text: 'Big Mumbai is real. It is a verified, operational platform with 500,000+ active players, real-money withdrawals processed daily, a registered Big Mumbai office, and certified fair-play technology. It is not a fake or scam platform.' } },
      { '@type': 'Question', name: 'What is the safest way to download the Big Mumbai APK?', acceptedAnswer: { '@type': 'Answer', text: 'Download exclusively from bigmumbaiapkdownload.com. Never download from unknown Telegram links, random websites, or APK aggregators.' } },
      { '@type': 'Question', name: 'Does Big Mumbai have responsible gaming features?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Big Mumbai official site includes deposit limits, session time alerts, and self-exclusion options.' } },
    ],
  };
}

export function getGameLinkFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the official Big Mumbai game link?', acceptedAnswer: { '@type': 'Answer', text: 'The official Big Mumbai game link is bigmumbaiwinn.com. Always verify the HTTPS padlock in your browser before logging in or registering.' } },
      { '@type': 'Question', name: 'Can I play Big Mumbai without downloading the app?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Big Mumbai game link works directly in any modern browser on mobile, tablet, or desktop — no download or installation required.' } },
      { '@type': 'Question', name: "Why isn't the Big Mumbai game link opening?", acceptedAnswer: { '@type': 'Answer', text: 'Most link issues are caused by incorrect URLs, browser cache problems, VPN interference, or firewall blocking. Clear your browser cache, disable VPN, and verify you\'re using the exact URL bigmumbaiwinn.com.' } },
      { '@type': 'Question', name: 'Is it safe to use the Big Mumbai game link on mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The official Big Mumbai game link uses bank-level HTTPS encryption and is safe on all devices. Only use the verified URL from this page or bigmumbaiapkdownload.com.' } },
      { '@type': 'Question', name: 'Does the browser link give access to all Big Mumbai games?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All games — Big Mumbai Aviator, colour prediction, WinGo, lottery, casino, and more — are fully accessible through the Big Mumbai game link in your browser.' } },
      { '@type': 'Question', name: 'What if the Big Mumbai link has changed?', acceptedAnswer: { '@type': 'Answer', text: 'Always check bigmumbaiapkdownload.com or the official Big Mumbai Aviator Telegram channel for updated links. Our page is regularly updated with the current working Big Mumbai game link.' } },
      { '@type': 'Question', name: 'Can I use the Big Mumbai game link on iPhone/iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Since APK installation is not available on iOS, the Big Mumbai game link via Safari or Chrome is the recommended method for iPhone and iPad users.' } },
    ],
  };
}

// ─── 5. HowTo Schema for /how-to-register-big-mumbai-app ────────────────────
export function getRegisterHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register on Big Mumbai App',
    description: 'Complete step-by-step guide to register on Big Mumbai and claim your ₹500 welcome bonus.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download the Big Mumbai APK',
        text: 'Visit bigmumbaiapkdownload.com and download the Big Mumbai APK latest version. Install on your Android device. If prompted, enable "Install from Unknown Sources" in Security settings.',
        image: `${BASE}/how-to-register-big-mumbai-app.png`,
      },
      {
        '@type': 'HowToStep',
        name: 'Visit the Official Big Mumbai Website or Open the App',
        text: 'Open the installed Big Mumbai login app or visit the official site. Land on the Big Mumbai platform homepage. Always use links from bigmumbaiapkdownload.com to avoid fake mirror sites.',
        image: `${BASE}/how-to-register-big-mumbai-app.png`,
      },
      {
        '@type': 'HowToStep',
        name: 'Click on Account Tab, Then Register',
        text: 'On the bottom navigation bar, tap the Account tab. You will see Login and Register options. Tap Register to open the Big Mumbai registration form.',
        image: `${BASE}/how-to-register-big-mumbai-app.png`,
      },
      {
        '@type': 'HowToStep',
        name: 'Fill in Your Details Correctly',
        text: 'Enter your Indian mobile number, create an 8–14 character password, confirm password, and enter invitation code 54147218367. This code unlocks your ₹10–₹100 gift bonus and Big Mumbai 500 welcome offer.',
        image: `${BASE}/how-to-register-big-mumbai-app.png`,
      },
      {
        '@type': 'HowToStep',
        name: 'Submit & Start Playing',
        text: 'Tap the Register button. Your Big Mumbai account is created instantly. You will be logged in and redirected to the game lobby where your ₹500 welcome bonus will be credited.',
        image: `${BASE}/how-to-register-big-mumbai-app.png`,
      },
    ],
  };
}

// ─── 6. Article Schema for blog pages ───────────────────────────────────────
export function getArticleSchema(params: {
  headline: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}) {
  const { headline, url, image = '/bigmumbaimain.png', datePublished, dateModified } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    url: `${BASE}${url.startsWith('/') ? url : `/${url}`}`,
    image: image.startsWith('http') ? image : `${BASE}${image.startsWith('/') ? image : `/${image}`}`,
    author: { '@type': 'Person', name: 'Aditya' },
    publisher: {
      '@type': 'Organization',
      name: 'bigmumbaiapkdownload.com',
      logo: { '@type': 'ImageObject', url: `${BASE}/bigmumbailogo.png` },
    },
    datePublished,
    dateModified,
  };
}

// ─── 7. SoftwareApplication Schema for Big Mumbai APK ────────────────────────
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Big Mumbai APK',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '50000',
      bestRating: '5',
    },
    downloadUrl: BASE,
    url: BASE,
  };
}
