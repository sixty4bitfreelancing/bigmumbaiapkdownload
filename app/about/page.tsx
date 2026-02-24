import Image from 'next/image';
import Link from 'next/link';
import { Download, Lock, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { getPageMetadata } from '@/lib/seo';
import { REGISTER_LINK } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/about',
  "About Big Mumbai – India's #1 Big Mumbai APK Download & Gaming Platform | bigmumbaiapkdownload.com",
  "Learn about Big Mumbai — India's most trusted gaming platform with 500,000+ players. Discover Big Mumbai Aviator, colour prediction, lottery, APK downloads, and why millions choose Big Mumbai every day.",
  '/about-big-mumbai.png'
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        {/* HERO INTRO SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d2a778] mb-8">
              About Big Mumbai – India&apos;s Most Trusted Gaming & APK Download Platform
            </h1>

            <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-[#d2a778]/20">
              <Image
                src="/about-big-mumbai.png"
                alt="About Big Mumbai - India's Most Trusted Gaming Platform"
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are — The Story Behind Big Mumbai</h2>

            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong>bigmumbaiapkdownload.com</strong> is India&apos;s most visited affiliate resource dedicated exclusively to the <strong>Big Mumbai platform</strong> — your one-stop destination for the <strong>Big Mumbai APK download latest version</strong>, game guides, registration support, and everything related to the <strong>Big Mumbai gaming ecosystem</strong>.
              </p>
              <p>
                <strong>Big Mumbai</strong> isn&apos;t just an app — it&apos;s a movement. Born from the desire to give every Indian player access to fair, transparent, and genuinely rewarding online gaming, <strong>Big Mumbai</strong> has grown into a platform trusted by over <strong>500,000 active players</strong> across India — from metro cities to <strong>Big Mumbai Rajasthan</strong>, from Gujarat to the Northeast. Whether you&apos;re here to download the <strong>Big Mumbai APK <span className="auto-year">2026</span></strong>, explore <strong>Big Mumbai Aviator online</strong>, or understand how <strong>Big Mumbai colour trading</strong> works — you&apos;ve come to the right place.
              </p>
              <p>
                We are an <strong>authorized affiliate partner</strong> of Big Mumbai, committed to providing accurate, up-to-date information, safe APK download links, and trusted guidance for both new and experienced players on the <strong>Big Mumbai platform</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-6">Our Mission — Making Big Mumbai Accessible to Every Indian Player</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Our mission at <strong>bigmumbaiapkdownload.com</strong> is simple but powerful: <strong>to be the most reliable, transparent, and helpful resource for every Big Mumbai player in India.</strong>
              </p>
              <p>
                We were built to solve a real problem — millions of Indian players were downloading fake or outdated APK files from unverified sources, risking their data, money, and gaming experience. We changed that. By partnering directly with the <strong>official Big Mumbai platform</strong>, we now provide:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The <strong>Big Mumbai game original APK</strong> — verified, safe, and always updated</li>
                <li>Step-by-step guides for <strong>Big Mumbai game register online</strong>, login, and withdrawal</li>
                <li>Honest reviews, game strategies, and platform updates</li>
                <li>Direct access to <strong>Big Mumbai APK download without login</strong> — no barriers, no gatekeeping</li>
              </ul>
              <p>
                We believe that every player — whether a first-timer or a seasoned <strong>BigMumbaiWin</strong> veteran — deserves a trustworthy source for their <strong>Big Mumbai app APK download</strong>. That is the promise we deliver every single day.
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM OVERVIEW SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-6">What is Big Mumbai? — Full Platform Breakdown</h2>
            <div className="text-gray-600 space-y-6 leading-relaxed">
              <p>
                <strong>Big Mumbai</strong> (officially known across communities as <strong>BigMumbaiWin</strong>, <strong>BigMumbaiLife</strong>, and <strong>Big Mumbai Club</strong>) is one of India&apos;s fastest-growing real-money gaming platforms. Launched to serve the modern Indian gamer, the <strong>Big Mumbai platform</strong> combines cutting-edge technology, certified fair play, and a deeply engaging community experience unlike anything else available today.
              </p>
              <p>Here&apos;s what makes the <strong>Big Mumbai game</strong> stand out in a crowded market:</p>

              <div className="space-y-6 mt-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                  <h3 className="font-bold text-gray-900 mb-2">🛩️ Big Mumbai Aviator</h3>
                  <p>The crown jewel of the platform — <strong>Big Mumbai Aviator</strong> is a real-time crash game where players multiply their stake by cashing out before the plane flies away. Available both as <strong>Big Mumbai Aviator online</strong> and via <strong>Big Mumbai Aviator download</strong> through the app, this game has become a national obsession. Thousands of players join <strong>Big Mumbai Aviator Telegram</strong> communities daily to share strategies and winning tips.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                  <h3 className="font-bold text-gray-900 mb-2">🎨 Big Mumbai Colour Trading & Colour Prediction</h3>
                  <p><strong>Big Mumbai colour trading</strong> and <strong>Big Mumbai color prediction</strong> are fast-paced, round-by-round prediction games that test your instincts and reward smart decision-making. With rounds completing in under 3 minutes, it&apos;s one of the most addictive and accessible formats on the <strong>Big Mumbai platform</strong>.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                  <h3 className="font-bold text-gray-900 mb-2">🎰 Big Mumbai Club Game</h3>
                  <p>The <strong>Big Mumbai Club</strong> is an exclusive membership tier on the platform offering access to premium games, higher withdrawal limits, dedicated support, and invite-only tournaments. The <strong>Big Mumbai club game</strong> experience is designed for serious players who want maximum value from every session.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                  <h3 className="font-bold text-gray-900 mb-2">🎟️ Big Mumbai Lottery</h3>
                  <p>Daily, weekly, and special-draw lotteries give every player on <strong>BigMumbai</strong> the chance to win massive rewards with minimal investment. The <strong>Big Mumbai lottery</strong> draws are transparent, RNG-certified, and results are published in real time.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                  <h3 className="font-bold text-gray-900 mb-2">📊 Big Mumbai Big Small & Win Go</h3>
                  <p>Classic number-prediction formats with high win rates and quick rounds — perfect for players who prefer structured, strategic gameplay over pure luck.</p>
                </div>
              </div>

              <p className="mt-6">
                All games on the <strong>Big Mumbai service</strong> use internationally <strong>certified Random Number Generation (RNG) technology</strong>, guaranteeing that every single outcome is 100% random, unbiased, and fair — making <strong>Big Mumbai game real</strong>, not fake.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-8">The Core Values That Power the Big Mumbai Platform</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">🔒 Security First</h3>
                <p className="text-gray-600 text-sm">Every transaction, account detail, and personal data point on <strong>Big Mumbai</strong> is protected by <strong>bank-grade SSL encryption</strong> and multi-layer security protocols. Your money and identity are always safe on the <strong>Big Mumbai platform</strong>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">⚖️ Certified Fair Play</h3>
                <p className="text-gray-600 text-sm"><strong>Big Mumbai</strong> uses internationally audited <strong>RNG technology</strong> across all games — <strong>Big Mumbai Aviator</strong>, colour prediction, lottery, and more. There are no rigged outcomes, no house manipulation.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">🤝 Community-First Approach</h3>
                <p className="text-gray-600 text-sm">From <strong>Big Mumbai Rajasthan</strong> player groups to metro city clubs, the <strong>BigMumbaiLife</strong> community is one of the most active in India. Real-time chat, strategy forums, and <strong>Big Mumbai Aviator Telegram</strong> channels keep players connected.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">💡 Continuous Innovation</h3>
                <p className="text-gray-600 text-sm">The <strong>Big Mumbai new version APK</strong> is released regularly, bringing new games, UI improvements, and features. The team listens to player feedback and ships updates faster than any competitor.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">🏆 Rewarding Loyalty</h3>
                <p className="text-gray-600 text-sm">From the <strong>Big Mumbai 500</strong> welcome bonus for new users to daily login rewards, seasonal tournaments, and referral commissions — <strong>Big Mumbai win</strong> is the platform&apos;s core promise.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#d2a778]/20 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">📱 Player-Centric Design</h3>
                <p className="text-gray-600 text-sm">Whether you use the <strong>Big Mumbai login app download latest version</strong> on a budget Android phone or a flagship device, the experience is optimized. <strong>Big Mumbai APK download for Android</strong> supports Android 5.0 and above.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-6">Why 500,000+ Indians Choose Big Mumbai Every Day</h2>
            <div className="text-gray-600 space-y-6 leading-relaxed">
              <p>In a market flooded with gaming apps, <strong>Big Mumbai</strong> has earned genuine trust through consistent performance, transparent operations, and real results. Here&apos;s the hard data that proves it:</p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#d2a778] font-bold">•</span>
                  <p><strong>500,000+ Active Players</strong> — The <strong>Big Mumbai</strong> community isn&apos;t inflated by bots or inactive accounts. These are real, verified players from every state in India — making <strong>BigMumbaiWin</strong> one of the most active gaming platforms in the country.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d2a778] font-bold">•</span>
                  <p><strong>Instant Withdrawals to Bank / UPI</strong> — When you win on <strong>Big Mumbai</strong>, you actually receive your money — fast. The platform processes withdrawals to any Indian bank account, UPI ID, or digital wallet <strong>within minutes</strong>.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d2a778] font-bold">•</span>
                  <p><strong>100+ Games, Always Expanding</strong> — From <strong>Big Mumbai Aviator</strong> and <strong>colour prediction</strong> to casino classics and <strong>mumbai game</strong> formats, the library covers every preference.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d2a778] font-bold">•</span>
                  <p><strong>24/7 Multilingual Support</strong> — The <strong>Big Mumbai office</strong> support team operates round-the-clock in both <strong>Hindi and English</strong>. Whether it&apos;s a <strong>Big Mumbai registration</strong> query or a withdrawal issue, help is always one message away.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d2a778] font-bold">•</span>
                  <p><strong>The Only Platform with a Trusted APK Archive</strong> — Through <strong>bigmumbaiapkdownload.com</strong>, players can access the <strong>Big Mumbai APK latest version</strong>, <strong>Big Mumbai APK old version</strong>, and every release in between — all verified, all free, all available as <strong>Big Mumbai APK direct download</strong> without any login requirement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#d2a778]/10 border-y border-[#d2a778]/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stats-grid-mobile max-[480px]:gap-3 max-[480px]:p-4">
              <div className="max-[480px]:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-[#d2a778] stat-number max-[480px]:text-[28px]">500K+</p>
                <p className="text-gray-600 text-sm mt-1 stat-label max-[480px]:text-[13px]">Active Players</p>
              </div>
              <div className="max-[480px]:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-[#d2a778] stat-number max-[480px]:text-[28px]">₹10L+</p>
                <p className="text-gray-600 text-sm mt-1 stat-label max-[480px]:text-[13px]">Rewards Distributed</p>
              </div>
              <div className="max-[480px]:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-[#d2a778] stat-number max-[480px]:text-[28px]">100+</p>
                <p className="text-gray-600 text-sm mt-1 stat-label max-[480px]:text-[13px]">Games Available</p>
              </div>
              <div className="max-[480px]:p-5">
                <p className="text-2xl sm:text-3xl font-bold text-[#d2a778] stat-number max-[480px]:text-[28px]"><span className="auto-year">2026</span></p>
                <p className="text-gray-600 text-sm mt-1 stat-label max-[480px]:text-[13px]">Latest APK Version</p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL OR FAKE SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-6">Big Mumbai Game — Real or Fake? Here&apos;s the Truth</h2>
            <div className="text-gray-600 space-y-6 leading-relaxed">
              <p>This is one of the most searched questions online: <strong>&quot;Is Big Mumbai game real or fake?&quot;</strong></p>
              <p className="text-lg font-semibold text-gray-900">The answer is: <strong>Big Mumbai is a real, operational, and legitimate gaming platform.</strong></p>
              <p>Here&apos;s the evidence:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">✅ Over <strong>500,000 verified active users</strong> with real withdrawal records</li>
                <li className="flex gap-2">✅ Games certified with <strong>international RNG standards</strong> — not manipulated</li>
                <li className="flex gap-2">✅ Instant <strong>UPI and bank withdrawals</strong> processed daily — real money, real people</li>
                <li className="flex gap-2">✅ A registered <strong>Big Mumbai office</strong> with a live customer support team</li>
                <li className="flex gap-2">✅ A consistently updated <strong>Big Mumbai APK</strong> — fake platforms don&apos;t invest in development</li>
                <li className="flex gap-2">✅ Active communities across <strong>Telegram, WhatsApp, and social media</strong> with genuine player testimonials</li>
                <li className="flex gap-2">✅ <strong>Big Mumbai Rajasthan</strong>, Maharashtra, Delhi, and dozens of regional player networks operating publicly</li>
              </ul>
              <p>
                No fake platform sustains <strong>500,000 active players</strong>, operates a <strong>24/7 Big Mumbai service</strong> team, and publishes real-time game results. <strong>Big Mumbai is real</strong> — and this site exists to help you access it safely.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#d2a778] mb-6">Ready to Join India&apos;s Biggest Gaming Community?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download the <strong>Big Mumbai APK latest version <span className="auto-year">2026</span></strong> right now from <strong>bigmumbaiapkdownload.com</strong> — India&apos;s only verified affiliate source for the <strong>Big Mumbai game original APK</strong>. Complete your <strong>Big Mumbai game register</strong> in under 2 minutes and claim your <strong>₹500 welcome bonus</strong> instantly.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8">
              <Link href={REGISTER_LINK}>
                <Button
                  size="lg"
                  className="bg-[#d2a778] text-black hover:bg-[#c49768] transition-all font-bold px-8 py-6 rounded-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Big Mumbai APK — Free & Official
                </Button>
              </Link>
              <Link href={REGISTER_LINK}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#d2a778] text-[#d2a778] hover:bg-[#d2a778] hover:text-black font-semibold px-8 py-6 rounded-xl"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Big Mumbai Login App Download
                </Button>
              </Link>
              <Link href={REGISTER_LINK}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#d2a778]/70 text-gray-700 hover:bg-[#d2a778] hover:text-black font-semibold px-8 py-6 rounded-xl"
                >
                  <ClipboardList className="w-5 h-5 mr-2" />
                  Big Mumbai Game Register Online
                </Button>
              </Link>
            </div>

            <p className="text-gray-600 text-sm">
              ✅ 100% Safe & Verified | ✅ Big Mumbai APK Free Download | ✅ No Login Needed to Download | ✅ Instant ₹500 Bonus on Registration
            </p>
          </div>
        </section>

        {/* FOOTER DISCLAIMER */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#d2a778]/20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Affiliate Disclosure:</strong> bigmumbaiapkdownload.com is an authorized affiliate partner of the Big Mumbai platform. We earn a referral commission when users register or download via links on this site — at no extra cost to you. All APK files linked from this site are official and unmodified. Online gaming regulations vary by state and region in India — please verify legality in your jurisdiction before registering. Play responsibly. If gaming is affecting your life negatively, please seek support.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#d2a778]/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm mb-4">
            <Link href="/" className="hover:text-[#d2a778] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#d2a778] transition-colors">About</Link>
            <Link href="/privacy-policy" className="hover:text-[#d2a778] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#d2a778] transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#d2a778] transition-colors">Contact</Link>
          </div>
          <p className="text-gray-600 text-sm">
            © <span className="auto-year">2026</span> bigmumbaiapkdownload.com — Affiliate Site | All Rights Reserved | SSL Secured | 🇮🇳 Made for India
          </p>
        </div>
      </footer>

      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: "About Big Mumbai – India's #1 Big Mumbai APK Download & Gaming Platform",
            description: "Learn about Big Mumbai — India's most trusted gaming platform with 500,000+ players.",
            url: 'https://bigmumbaiapkdownload.com/about',
            mainEntity: {
              '@type': 'Organization',
              name: 'Big Mumbai',
              description: "India's most trusted gaming platform with 500,000+ active players.",
              url: 'https://bigmumbaiapkdownload.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bigmumbaiapkdownload.com' },
              { '@type': 'ListItem', position: 2, name: 'About Big Mumbai', item: 'https://bigmumbaiapkdownload.com/about' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Big Mumbai APK',
            applicationCategory: 'GameApplication',
            operatingSystem: 'Android',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '500000',
              bestRating: '5',
              worstRating: '1',
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
                name: 'Is Big Mumbai game real or fake?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Big Mumbai is a real, operational, and legitimate gaming platform with over 500,000 verified active users, instant UPI and bank withdrawals, a registered Big Mumbai office with live customer support, and internationally certified RNG technology across all games. Fake platforms do not sustain this level of activity or investment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Big Mumbai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Big Mumbai (BigMumbaiWin, BigMumbaiLife, Big Mumbai Club) is one of India\'s fastest-growing real-money gaming platforms, offering Big Mumbai Aviator, colour trading, colour prediction, Big Mumbai Club, Big Mumbai lottery, and 100+ games with certified RNG technology.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
