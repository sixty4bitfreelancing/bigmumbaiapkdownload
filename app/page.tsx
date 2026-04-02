'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Gamepad2, Send, Download, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { BASE_URL, REGISTER_LINK, TELEGRAM_LINK } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" id="register">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d2a778]/5 to-transparent pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Big Mumbai APK Download –{' '}
              <span className="text-[#d2a778]">Latest Version <span className="auto-year">2026</span></span> | Official & Free
            </h1>

            <div className="mb-6 sm:mb-8 w-full">
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-[#d2a778]/20 border border-[#d2a778]/20">
                <Image
                  src="/bigmumbaimain.png"
                  alt="Big Mumbai APK Download - Official App"
                  width={1200}
                  height={630}
                  priority
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 justify-center items-stretch mb-6 sm:mb-8">
              <Link href={REGISTER_LINK} className="block w-full sm:w-auto min-h-[48px] cta-mobile-full">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-0 bg-[#d2a778] text-black hover:bg-[#c49768] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base px-4 sm:px-8 py-5 sm:py-6 rounded-xl font-bold shadow-lg shadow-[#d2a778]/30 flex items-center justify-center gap-2 max-[480px]:w-full max-[480px]:py-4 max-[480px]:px-3 max-[480px]:text-[15px] max-[480px]:whitespace-normal max-[480px]:text-center"
                >
                  <Download className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden sm:inline text-center">Download Big Mumbai APK – Latest Version</span>
                  <span className="sm:hidden text-center">Download Official Big Mumbai APK — Free</span>
                </Button>
              </Link>

              <Link href={REGISTER_LINK} className="block w-full sm:w-auto min-h-[48px]">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-0 border-2 border-[#d2a778] text-[#d2a778] hover:bg-[#d2a778] hover:text-black active:scale-[0.98] transition-all duration-300 text-sm sm:text-base px-4 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5 flex-shrink-0" />
                  <span className="text-center">Big Mumbai Login App Download</span>
                </Button>
              </Link>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto min-h-[48px]"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-0 border-2 border-[#d2a778]/50 bg-gray-100 text-gray-900 hover:bg-[#d2a778] hover:text-black hover:border-[#d2a778] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base px-4 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 flex-shrink-0" />
                  <span className="text-center">Join Telegram</span>
                </Button>
              </a>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Big Mumbai APK Latest Version – Download Free for Android
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to bigmumbaiapkdownload.com — your official source for Big Mumbai APK download latest version <span className="auto-year">2026</span>. <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline font-medium">Register on Big Mumbai</Link> with invitation code 16454276749 to get instant access. Whether you&apos;re looking for the Big Mumbai new version APK, the Big Mumbai updated APK download, or even the Big Mumbai APK old version, you&apos;ll find every version right here. Get the Big Mumbai game original APK fast, safe, and directly on your Android device — no hassle, no waiting.
            </p>
          </div>
        </section>

        {/* SECTION 1 — APK DOWNLOAD OPTIONS */}
        <section id="download" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              Big Mumbai APK Download – All Versions Available
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide the most complete and up-to-date collection of the Big Mumbai APK file download for every type of user. Whether you need the big mumbai apk download latest update, a specific big mumbai apk 2026 download, or want to roll back to a big mumbai apk old version, this is the only platform you need. All files are verified, safe, and available as a big mumbai apk direct download — no redirects, no surveys.
            </p>
            <p className="font-semibold text-gray-900 mb-4">Download Options Available:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">✅ Big Mumbai APK Latest Version – Updated for <span className="auto-year">2026</span></li>
              <li className="flex items-start gap-2">✅ Big Mumbai New Version APK – All new features included</li>
              <li className="flex items-start gap-2">✅ Big Mumbai Updated APK Download – Bug fixes & improvements</li>
              <li className="flex items-start gap-2">✅ Big Mumbai APK <span className="auto-year">2026</span> Download – Fresh release</li>
              <li className="flex items-start gap-2">✅ Big Mumbai APK Old Version – For compatible devices</li>
              <li className="flex items-start gap-2">✅ Big Mumbai APK Download Without Login – No account needed to download</li>
              <li className="flex items-start gap-2">✅ Big Mumbai APK Free Download – 100% free, always</li>
              <li className="flex items-start gap-2">✅ Big Mumbai APK Download Fast – High-speed servers</li>
            </ul>
          </div>
        </section>

        {/* SECTION 2 — HOW TO DOWNLOAD */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              How to Download Big Mumbai APK – Step-by-Step Guide
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Not sure how to download Big Mumbai APK or where to download Big Mumbai APK safely? Follow our simple guide below to get the Big Mumbai official APK download on your Android phone in under 2 minutes.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-2">Step 1 — Visit the Download Page</h3>
                <p className="text-gray-600">You&apos;re already in the right place. Click the <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline font-medium">Big Mumbai registration link</Link> above or below to access the Big Mumbai APK download link instantly.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-2">Step 2 — Choose Your Version</h3>
                <p className="text-gray-600">Select the Big Mumbai APK download latest version or browse older versions. We recommend the Big Mumbai APK <span className="auto-year">2026</span> download for the best experience.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-2">Step 3 — Enable Unknown Sources</h3>
                <p className="text-gray-600">On your Android device, go to Settings → Security → Enable &quot;Install from Unknown Sources&quot; to allow the Big Mumbai APK for Android to install properly.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-2">Step 4 — Direct Download & Install</h3>
                <p className="text-gray-600">Click the Big Mumbai APK direct download button. The Big Mumbai APK file download will begin immediately — fast and secure. Once downloaded, open the file and tap Install.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-2">Step 5 — Login or Register</h3>
                <p className="text-gray-600">Open the app and use your Big Mumbai login app download credentials, or <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline font-medium">complete your Big Mumbai registration</Link> for new users and claim your ₹500 welcome bonus.</p>
              </div>
            </div>

            <p className="mt-6 p-4 bg-[#d2a778]/10 rounded-xl text-gray-700 border border-[#d2a778]/20">
              <strong>💡 Pro Tip:</strong> You can complete the Big Mumbai APK download without login — no account is required just to download the file.
            </p>
          </div>
        </section>

        {/* SECTION 3 — ABOUT THE PLATFORM */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              What is Big Mumbai Game? – Real or Fake, Platform Review
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Many players ask: is Big Mumbai game real or fake? The answer is clear — Big Mumbai is one of India&apos;s most established and trusted online gaming platforms, with over 500,000 active players across Big Mumbai Win, Big Mumbai Club, and regional communities including Big Mumbai Rajasthan.
              </p>
              <p>
                Big Mumbai (also known as BigMumbaiWin, BigMumbaiLife, and Big Mumbai Club Game) is a fully operational Big Mumbai platform offering a wide range of real-money games, instant withdrawals, and certified fair play. The Big Mumbai office is based in Mumbai, Maharashtra, and the service operates 24/7 under verified security standards.
              </p>
              <p>
                This is not a big mobile game clone — this is the Big Mumbai game original APK, available only through official sources like this site.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — GAMES & FEATURES */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              Big Mumbai Games – Aviator, Colour Trading & More
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Big Mumbai app APK download gives you full access to all games on the Big Mumbai platform, including:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li><strong>🛩️ Big Mumbai Aviator</strong> – The most popular crash game; play Big Mumbai Aviator online or download it via Big Mumbai Aviator download</li>
              <li><strong>🎨 Big Mumbai Colour Trading</strong> – Predict colors and win big in real time</li>
              <li><strong>🔴 Big Mumbai Color Prediction</strong> – Fast-paced, round-by-round prediction game</li>
              <li><strong>🃏 Big Mumbai Club Game</strong> – Exclusive club-based games for members</li>
              <li><strong>🎰 Mumbai Game</strong> – Classic and modern casino-style games</li>
              <li><strong>📊 Big Mumbai Win</strong> – Strategy-based winning platform</li>
              <li><strong>💰 Big Mumbai 500</strong> – Special ₹500 bonus game mode for new players</li>
            </ul>
            <p className="mt-6 text-gray-600">
              All games use certified RNG (Random Number Generation) technology, ensuring Big Mumbai is 100% fair and transparent.
            </p>
          </div>
        </section>

        {/* SECTION 5 — LOGIN & REGISTRATION */}
        <section id="login" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              Big Mumbai Login App Download & Registration Guide
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Getting your Big Mumbai login app download latest version is now easier than ever. The Big Mumbai login app download gives you access to your full account, game history, wallet, and bonuses — all from your Android device.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-4">For New Users — Big Mumbai Game Register:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li><Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline">Visit bigmumbaiapkdownload.com and register</Link> to download the APK</li>
                  <li>Open the app and click Big Mumbai Game Register Online</li>
                  <li>Enter your phone number, create a password, and verify OTP</li>
                  <li>Complete Big Mumbai Registration and claim ₹500 instantly</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-[#d2a778]/20">
                <h3 className="font-bold text-gray-900 mb-4">For Existing Users — Big Mumbai APK Login:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Open the downloaded app</li>
                  <li>Use your registered number and password for Big Mumbai APK login</li>
                  <li>Access your Big Mumbai Club dashboard, wallet, and games</li>
                </ol>
              </div>
            </div>

            <p className="text-gray-600">
              Whether you&apos;re doing a fresh Big Mumbai game login register download APK or returning to your account via Big Mumbai game login win, the process is seamless on all Android devices.
            </p>
          </div>
        </section>

        {/* SECTION 6 — WHY CHOOSE US */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              Why Download Big Mumbai APK from bigmumbaiapkdownload.com?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              There are dozens of sites claiming to offer the Big Mumbai game APK download, but only bigmumbaiapkdownload.com provides:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li><strong>🔒 Official & Safe Files</strong> – Only verified Big Mumbai official APK download versions</li>
              <li><strong>⚡ Big Mumbai APK Download Fast</strong> – High-speed CDN servers for instant downloads</li>
              <li><strong>📱 Big Mumbai APK Download for Android</strong> – Compatible with Android 5.0 and above</li>
              <li><strong>🆓 Big Mumbai APK Free Download</strong> – No charges, no subscriptions</li>
              <li><strong>🔗 Direct Download Links</strong> – No pop-ups or redirections; pure Big Mumbai APK download link</li>
              <li><strong>🗂️ All Versions Archive</strong> – From big mumbai apk old version to big mumbai apk latest version</li>
              <li><strong>🛡️ No Login Required to Download</strong> – Full big mumbai apk download without login support</li>
            </ul>
          </div>
        </section>

        {/* SECTION 7 — BONUSES & REWARDS */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#d2a778]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-6">
              Big Mumbai 500 Welcome Bonus & Exclusive Rewards
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When you download the Big Mumbai login app download latest version and complete your Big Mumbai game register, you unlock:
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li><strong>🎁 ₹500 Welcome Bonus (Big Mumbai 500 offer)</strong> – Credited instantly on registration</li>
              <li><strong>📅 Daily login rewards</strong> through the Big Mumbai service</li>
              <li><strong>🏆 Seasonal tournaments</strong> hosted on the Big Mumbai platform</li>
              <li><strong>👥 Referral commissions</strong> for every friend you invite</li>
              <li><strong>📲 Exclusive offers</strong> announced via the Big Mumbai Aviator Telegram channel</li>
            </ul>
            <p className="text-gray-600 font-medium">
              <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline font-medium">Join 500,000+ active players</Link> on BigMumbai and start winning today.
            </p>
            <div className="mt-8 flex justify-center max-[480px]:w-full">
              <Button
                size="lg"
                className="bg-[#d2a778] text-black hover:bg-[#c49768] transition-all duration-300 text-lg px-8 py-6 rounded-xl font-bold max-[480px]:w-full max-[480px]:py-4 max-[480px]:px-3 max-[480px]:text-[15px] max-[480px]:min-h-[48px]"
                onClick={() => window.location.href = REGISTER_LINK}
              >
                <Gamepad2 className="w-6 h-6 mr-2" />
                Register Now & Get ₹500 Bonus!
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d2a778] mb-8">
              Frequently Asked Questions – Big Mumbai APK Download
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2">Q: Where to download Big Mumbai APK safely?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: The safest place to get the Big Mumbai APK download link is bigmumbaiapkdownload.com — <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline">register here with invitation code 16454276749</Link> for the only verified source for the Big Mumbai game original APK.</p>
              </div>
              <div className="faq-mobile-item border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2 max-[480px]:text-[15px] max-[480px]:font-semibold">Q: Is Big Mumbai game real or fake?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: Big Mumbai is a real and operational platform with 500,000+ users, instant withdrawals, and certified RNG games. It is not fake.</p>
              </div>
              <div className="faq-mobile-item border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2 max-[480px]:text-[15px] max-[480px]:font-semibold">Q: How do I do a Big Mumbai APK download without login?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: Simply visit our download page and click the direct download button. You do not need an account to download the Big Mumbai APK file.</p>
              </div>
              <div className="faq-mobile-item border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2 max-[480px]:text-[15px] max-[480px]:font-semibold">Q: What is the latest Big Mumbai APK version in <span className="auto-year">2026</span>?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: The current release is the Big Mumbai APK <span className="auto-year">2026</span> download — always updated on this page. Check back regularly for the Big Mumbai updated APK download.</p>
              </div>
              <div className="faq-mobile-item border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2 max-[480px]:text-[15px] max-[480px]:font-semibold">Q: Can I download the Big Mumbai APK for Android older devices?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: Yes. We archive the Big Mumbai APK old version for devices running Android 5.0 and above.</p>
              </div>
              <div className="faq-mobile-item pb-6">
                <h3 className="font-bold text-gray-900 mb-2 max-[480px]:text-[15px] max-[480px]:font-semibold">Q: What is BigMumbaiLife / BigMumbaiWin?</h3>
                <p className="text-gray-600 max-[480px]:text-[14px]">A: BigMumbaiLife and BigMumbaiWin are alternate brand names for the same official Big Mumbai platform — same games, same app, same rewards.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#d2a778]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-[#d2a778] mb-6 text-center">
            Big Mumbai APK Download – Official Resource Site
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href={`${BASE_URL}/about`} className="hover:text-[#d2a778] transition-colors">About Big Mumbai</Link></li>
                <li><Link href={`${BASE_URL}/big-mumbai-official`} className="hover:text-[#d2a778] transition-colors">Big Mumbai Official Site Guide</Link></li>
                <li><Link href={`${BASE_URL}/big-mumbai-game-link`} className="hover:text-[#d2a778] transition-colors">Big Mumbai Game Link</Link></li>
                <li><Link href={`${BASE_URL}/big-mumbai-aviator`} className="hover:text-[#d2a778] transition-colors">Big Mumbai Aviator</Link></li>
                <li><Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="hover:text-[#d2a778] transition-colors">How to Register Big Mumbai</Link></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai APK Download Latest Version</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai Aviator Download</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai Login App Download</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai Game Register</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai APK Old Version</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai Colour Trading</a></li>
                <li><a href={REGISTER_LINK} className="hover:text-[#d2a778] transition-colors">Big Mumbai Color Prediction</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contact & Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>📧 support@bigmumbaiapkdownload.com</li>
                <li>📍 Mumbai, Maharashtra, India</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal & Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href={`${BASE_URL}/privacy-policy`} className="hover:text-[#d2a778] transition-colors">Privacy Policy</Link></li>
                <li><Link href={`${BASE_URL}/disclaimer`} className="hover:text-[#d2a778] transition-colors">Disclaimer</Link></li>
                <li><Link href={`${BASE_URL}/terms-of-service`} className="hover:text-[#d2a778] transition-colors">Terms of Service</Link></li>
                <li><Link href={`${BASE_URL}/contact`} className="hover:text-[#d2a778] transition-colors">Contact Us</Link></li>
                <li><Link href={`${BASE_URL}/report-an-issue`} className="hover:text-[#d2a778] transition-colors">Report an Issue</Link></li>
                <li><Link href={`${BASE_URL}/responsible-gaming`} className="hover:text-[#d2a778] transition-colors">Responsible Gaming</Link></li>
                <li><Link href={`${BASE_URL}/help-center`} className="hover:text-[#d2a778] transition-colors">Help Center</Link></li>
              </ul>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-4 text-center">
            <strong>Disclaimer:</strong> bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We may earn a commission when you register or download through links on this site. Please ensure online gaming is permitted in your region. Play responsibly.
          </p>
          <p className="text-gray-600 text-sm text-center">
            © <span className="auto-year">2026</span> bigmumbaiapkdownload.com — Affiliate Site | All Rights Reserved | SSL Secured | 🇮🇳 Made for India
          </p>
        </div>
      </footer>
    </div>
  );
}
