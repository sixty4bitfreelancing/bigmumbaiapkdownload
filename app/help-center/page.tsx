import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL, REGISTER_LINK } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/help-center',
  'Help Center | Big Mumbai APK Download – FAQs, Download & Registration Support | bigmumbaiapkdownload.com',
  'Find answers to common questions about Big Mumbai APK download, installation, registration, welcome bonus, and more. Get support from bigmumbaiapkdownload.com.'
);

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Help Center – Big Mumbai APK Download &amp; Registration FAQs</h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Welcome to the <strong>bigmumbaiapkdownload.com</strong> Help Center. Here you will find quick answers to the most common questions about downloading the Big Mumbai APK, installing the app, registering for an account, claiming the welcome bonus, and staying safe while using our site. We are an official affiliate of Big Mumbai and provide verified download links and step-by-step guides. For detailed walkthroughs, visit our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> page for the latest APK, our <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official</Link> guide, <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link>, and <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link>. If your question is not answered here, use our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page or <Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] hover:underline">Report an Issue</Link>.
        </p>

        <div className="mb-10 p-6 bg-[#d2a778]/10 rounded-xl border border-[#d2a778]/20">
          <p className="text-gray-700 text-sm">
            <strong>Affiliate disclosure:</strong> bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We may earn a commission when you register or download through links on this site. For account-specific issues (login, withdrawals, bonuses on the Big Mumbai platform), please contact Big Mumbai&apos;s official support directly.
          </p>
        </div>

        <div className="space-y-8">
          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How do I download the Big Mumbai APK?</h2>
            <p className="text-gray-600 mb-3">Visit our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">homepage</Link> and click the &quot;Download Big Mumbai APK – Latest Version&quot; button. Before installing, enable &quot;Install from Unknown Sources&quot; in your Android device&apos;s Settings → Security. Then open the downloaded APK file and tap &quot;Install&quot; to complete the setup.</p>
            <p className="text-gray-500 text-sm">For a step-by-step guide, see our <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link> and the download section on the <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> page.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Do I need to login to download the APK?</h2>
            <p className="text-gray-600">No. You can complete the Big Mumbai APK download without login. An account is not required just to download the file. You only need to register or login once you have installed the app and want to play games or claim bonuses.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Is the Big Mumbai APK safe and free from malware?</h2>
            <p className="text-gray-600 mb-3">We only provide verified Big Mumbai official APK files from trusted sources. All files are scanned and safe to use. Always download from bigmumbaiapkdownload.com — avoid third-party or unofficial sources that may host modified or harmful versions. For the official experience, use our <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official</Link> and <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link> pages.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What Android versions are supported?</h2>
            <p className="text-gray-600">The Big Mumbai APK latest version supports Android 5.0 (Lollipop) and above. For older devices, we archive the Big Mumbai APK old version for compatibility. Check the specific APK description on our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> page for device requirements.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How do I register and claim the ₹500 welcome bonus?</h2>
            <p className="text-gray-600 mb-3">After installing the app, open it and tap &quot;Register&quot; or &quot;Big Mumbai Game Register Online.&quot; Enter your phone number, create a password, and verify with the OTP sent to your number. Complete the registration process, and your ₹500 welcome bonus (Big Mumbai 500 offer) will be credited to your account. Use our official <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline">registration link</Link> and see <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link> for the full guide.</p>
            <p className="text-gray-500 text-sm">The bonus is typically credited instantly for new users. Terms may apply — check Big Mumbai&apos;s offer details in the app.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What if the download link is not working?</h2>
            <p className="text-gray-600 mb-3">Try refreshing the page or using a different browser. If the problem persists, please <Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] hover:underline">Report an Issue</Link> with details such as the page URL, your device, and what happens when you click the link. We investigate and fix broken links as quickly as possible.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What games are available on Big Mumbai?</h2>
            <p className="text-gray-600">The Big Mumbai app includes games such as Big Mumbai Aviator, Big Mumbai Colour Trading, Big Mumbai Color Prediction, Big Mumbai Club Game, Mumbai Game, and Big Mumbai Win. All games use certified RNG technology for fair play. Visit our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">homepage</Link> and <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link> page for descriptions and guides.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Is Big Mumbai game real or fake?</h2>
            <p className="text-gray-600">Big Mumbai is a real and operational platform with over 500,000 active users. It offers instant withdrawals, certified RNG games, and operates under verified security standards. It is not fake. For more details, see our <Link href={`${BASE_URL}/about`} className="text-[#d2a778] hover:underline">About Big Mumbai</Link> and the &quot;What is Big Mumbai Game&quot; section on the <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> page.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">I have an issue with my Big Mumbai account (login, withdrawal, bonus). Who do I contact?</h2>
            <p className="text-gray-600">For account-specific issues — such as login problems, withdrawal requests, or bonus inquiries — you must contact Big Mumbai&apos;s official customer support directly. We are an affiliate site and cannot resolve platform or account issues. Use the in-app help or official Big Mumbai support channels.</p>
          </section>

          <section className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How can I play responsibly?</h2>
            <p className="text-gray-600">Set limits on time and money before playing. Never chase losses, and seek help if gaming becomes a problem. Visit our <Link href={`${BASE_URL}/responsible-gaming`} className="text-[#d2a778] hover:underline">Responsible Gaming</Link> page for resources, tips, and support organizations.</p>
          </section>

          <section className="pb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Still need help?</h2>
            <p className="text-gray-600">If your question is not answered here, <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] font-medium hover:underline">contact us</Link> or <Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] font-medium hover:underline">Report an Issue</Link>. We&apos;ll get back to you as soon as possible. You can also review our <Link href={`${BASE_URL}/disclaimer`} className="text-[#d2a778] hover:underline">Disclaimer</Link> and <Link href={`${BASE_URL}/terms-of-service`} className="text-[#d2a778] hover:underline">Terms of Service</Link> for more information about our site.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
