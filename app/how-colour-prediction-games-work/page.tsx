import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { getPageMetadata } from '@/lib/seo';
import ColourPredictionGuideArticle from '@/components/ColourPredictionGuideArticle';

export const metadata = getPageMetadata(
  '/how-colour-prediction-games-work',
  'How Colour Prediction Games Work | Simple Guide (India)',
  'Learn how colour prediction games work: rounds, timers, red/green/violet, numbers, and big/small. Neutral educational guide for Indian readers.',
  '/bigmumbaimain.png'
);

export default function HowColourPredictionGamesWorkPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="text-[#d2a778] hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">How colour prediction games work</span>
          </nav>
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              How Colour Prediction Games Work
            </h1>
            <p className="text-gray-600">Educational guide. Not financial or legal advice.</p>
          </header>
          <ColourPredictionGuideArticle variant="light" responsibleHref="/responsible-gaming" />
        </div>
      </main>
    </div>
  );
}
