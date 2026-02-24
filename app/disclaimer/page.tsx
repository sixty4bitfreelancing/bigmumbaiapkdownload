import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/disclaimer',
  'Disclaimer | Big Mumbai APK Download – Affiliate Disclosure & Legal Notice | bigmumbaiapkdownload.com',
  'Disclaimer for bigmumbaiapkdownload.com: affiliate disclosure, no professional advice, regional compliance, and limitations. Read before using our Big Mumbai APK download guides.'
);

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Disclaimer – Affiliate Disclosure &amp; Legal Notice</h1>
        <p className="text-gray-500 mb-6">Last updated: February <span className="auto-year">2026</span></p>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          <strong>bigmumbaiapkdownload.com</strong> is an independent affiliate and information site dedicated to helping users safely download the Big Mumbai APK, register on the official Big Mumbai platform, and access up-to-date guides such as our <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official Site Guide</Link>, <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link>, and <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link> pages. This disclaimer explains our affiliate relationship, the limits of our content, and your responsibilities when using our website. By using bigmumbaiapkdownload.com, you agree to the terms set out below. For our full terms of use, see our <Link href={`${BASE_URL}/terms-of-service`} className="text-[#d2a778] hover:underline">Terms of Service</Link> and <Link href={`${BASE_URL}/privacy-policy`} className="text-[#d2a778] hover:underline">Privacy Policy</Link>.
        </p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Affiliate Relationship and Commercial Disclosure</h2>
            <p className="mb-4">bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. This means we have a commercial arrangement with Big Mumbai, and we may earn a commission, referral fee, or other compensation when you register, download the Big Mumbai APK, or engage with Big Mumbai&apos;s platform through links on our website.</p>
            <p className="mb-4">Our recommendations, reviews, and content about Big Mumbai are influenced by this affiliate relationship. However, we strive to provide accurate and helpful information. We do not guarantee any specific outcomes, winnings, bonuses, or results. Your experience with Big Mumbai may vary based on your location, device, and usage.</p>
            <p>We do not control Big Mumbai&apos;s platform, policies, or operations. Any changes to Big Mumbai&apos;s terms, bonus offers, or services are solely at Big Mumbai&apos;s discretion.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Informational Purpose Only — Not Professional Advice</h2>
            <p className="mb-4">All content on bigmumbaiapkdownload.com is provided for general informational and educational purposes only. Nothing on this website constitutes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Financial Advice:</strong> We do not provide investment, financial planning, or money management advice. Any discussion of bonuses, winnings, or payouts is for informational purposes only.</li>
              <li><strong>Legal Advice:</strong> We do not provide legal counsel. Laws regarding online gaming vary by jurisdiction. You are responsible for understanding and complying with local laws.</li>
              <li><strong>Professional Advice:</strong> We are not licensed advisors in any professional capacity. For decisions involving significant financial, legal, or personal impact, consult qualified professionals.</li>
            </ul>
            <p>You should not rely solely on information from this website when making decisions. Always conduct your own research and seek professional guidance when appropriate.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Regional and Jurisdictional Compliance</h2>
            <p className="mb-4">Online gaming laws vary significantly by country, state, and region. Please ensure that online gaming is permitted in your jurisdiction before accessing any gaming platforms, including Big Mumbai.</p>
            <p className="mb-4">Users are solely responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Verifying that they are of legal age (18+ in most jurisdictions) to participate in online gaming.</li>
              <li>Complying with all applicable local, state, national, and international laws.</li>
              <li>Understanding the legal status of online gambling in their region.</li>
            </ul>
            <p>bigmumbaiapkdownload.com does not encourage or facilitate illegal activity. We make no representation that our content or the Big Mumbai platform is appropriate or available for use in all locations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. No Guarantees or Warranties</h2>
            <p className="mb-4">We provide this website and its content &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>That the Big Mumbai APK download links will always be available, functional, or safe.</li>
              <li>That information on our site is complete, accurate, or up to date at all times.</li>
              <li>That you will receive any specific bonus, payout, or outcome from using Big Mumbai.</li>
              <li>That our website will be free of errors, viruses, or other harmful components.</li>
            </ul>
            <p>We reserve the right to modify, update, or remove content without prior notice. Download links and offers may change based on Big Mumbai&apos;s policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Responsible Gaming</h2>
            <p className="mb-4">We strongly encourage responsible gaming. Gambling should be a form of entertainment, not a way to make money or solve financial problems. Set limits on time and money, never chase losses, and seek help if gaming becomes a problem.</p>
            <p className="mb-4">Visit our <Link href={`${BASE_URL}/responsible-gaming`} className="text-[#d2a778] hover:underline">Responsible Gaming</Link> page for resources, support organizations, and tools to help you play safely. If you or someone you know struggles with problem gambling, professional help is available. You can also explore our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link>, <Link href={`${BASE_URL}/about`} className="text-[#d2a778] hover:underline">About Big Mumbai</Link>, and <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link> for safe download and registration guidance.</p>
            <p>Our website is intended for users 18 years of age and older. We do not target minors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Content and Links</h2>
            <p className="mb-4">Our website contains links to third-party websites, including Big Mumbai and others. We are not responsible for the content, privacy practices, terms of service, or accuracy of information on external sites. Clicking external links is at your own risk.</p>
            <p>We do not endorse or assume responsibility for any third-party products, services, or content unless explicitly stated.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law, bigmumbaiapkdownload.com, its owners, operators, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your use or inability to use our website or the Big Mumbai platform.</li>
              <li>Any loss of data, profits, or opportunities.</li>
              <li>Any actions taken based on information from our website.</li>
              <li>Third-party conduct, links, or content.</li>
            </ul>
            <p>Our liability is limited to the maximum extent permitted by applicable law. Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
            <p className="mb-4">For questions about this disclaimer, please contact us at <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] hover:underline">support@bigmumbaiapkdownload.com</a>. We are happy to clarify any points or address your concerns. You can also visit our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page for support options or our <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] hover:underline">Help Center</Link> for FAQs on Big Mumbai APK download and registration.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
