import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/terms-of-service',
  'Terms of Service | Big Mumbai APK Download – Website Use Terms | bigmumbaiapkdownload.com',
  'Terms of Service for bigmumbaiapkdownload.com. Read the terms governing use of our Big Mumbai APK download website and affiliate content.'
);

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Terms of Service – Website Use Terms</h1>
        <p className="text-gray-500 mb-6">Last updated: February <span className="auto-year">2026</span></p>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Welcome to <strong>bigmumbaiapkdownload.com</strong>. These Terms of Service (&quot;Terms&quot;) govern your use of our website, including our Big Mumbai APK download resources, registration guides, and pages such as <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official</Link>, <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link>, and <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link>. We are an official affiliate of Big Mumbai; we do not operate the gaming platform itself. By using our site, you agree to these Terms. If you do not agree, please do not use our website. For privacy practices, see our <Link href={`${BASE_URL}/privacy-policy`} className="text-[#d2a778] hover:underline">Privacy Policy</Link>; for affiliate and legal disclaimers, see our <Link href={`${BASE_URL}/disclaimer`} className="text-[#d2a778] hover:underline">Disclaimer</Link>. For support, visit our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> or <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] hover:underline">Help Center</Link>.
        </p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing, browsing, or using bigmumbaiapkdownload.com (the &quot;Website&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you must not use our Website.</p>
            <p>We reserve the right to modify these Terms at any time. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Eligibility</h2>
            <p className="mb-4">You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to use this Website. By using the Website, you represent and warrant that you meet this requirement.</p>
            <p>If you are using the Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of the Website</h2>
            <p className="mb-4">You may use the Website for lawful purposes only and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Infringe upon the intellectual property, privacy, or other rights of any third party.</li>
              <li>Transmit any viruses, malware, or other harmful code.</li>
              <li>Attempt to gain unauthorized access to our systems, networks, or accounts.</li>
              <li>Use automated means (bots, scrapers, etc.) to access the Website without our prior written consent.</li>
              <li>Interfere with or disrupt the integrity or performance of the Website.</li>
              <li>Collect or harvest user information without consent.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation.</li>
            </ul>
            <p>We reserve the right to suspend or terminate your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our operations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Affiliate Disclosure</h2>
            <p className="mb-4">bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We earn commissions or referral fees when users register, download the Big Mumbai APK, or engage with Big Mumbai&apos;s platform through links on our Website.</p>
            <p className="mb-4">Our content, including reviews, recommendations, and guides, is provided in good faith. However, we do not guarantee any specific outcomes, bonuses, or results. Your experience with Big Mumbai is subject to Big Mumbai&apos;s own terms, policies, and operational decisions. We are not responsible for Big Mumbai&apos;s platform, services, or any disputes between you and Big Mumbai.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p className="mb-4">All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of bigmumbaiapkdownload.com or its licensors and is protected by copyright and other intellectual property laws.</p>
            <p>You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit our content without our prior written permission. You may view and print pages for personal, non-commercial use only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links and Services</h2>
            <p className="mb-4">Our Website contains links to third-party websites and services, including Big Mumbai and others. We do not control, endorse, or assume responsibility for the content, privacy practices, or terms of these external sites. Your use of third-party services is at your own risk.</p>
            <p>When you leave our Website via a link (e.g. to our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> download button or <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link>), you become subject to that third party&apos;s terms and policies. We encourage you to review them before proceeding.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Disclaimers</h2>
            <p className="mb-4">THE WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee the accuracy, completeness, or timeliness of any content. Download links and offers may change without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p className="mb-4">TO THE FULLEST EXTENT PERMITTED BY LAW, bigmumbaiapkdownload.com, ITS OWNERS, OPERATORS, AFFILIATES, AND REPRESENTATIVES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your use or inability to use the Website.</li>
              <li>Any third-party conduct or content.</li>
              <li>Your use of Big Mumbai or any other third-party service linked from our Website.</li>
              <li>Unauthorized access to or alteration of your data.</li>
            </ul>
            <p>Our total liability for any claims arising from your use of the Website shall not exceed the amount you paid to us (if any) in the twelve months preceding the claim, or one hundred Indian Rupees (₹100), whichever is greater. Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless bigmumbaiapkdownload.com, its owners, operators, affiliates, and representatives from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your use of the Website, your violation of these Terms, or your violation of any third-party rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Severability</h2>
            <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p>For questions about these Terms of Service, please contact us at <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] hover:underline">support@bigmumbaiapkdownload.com</a>. We will respond to all inquiries within a reasonable timeframe. You can also visit our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page or <Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] hover:underline">Report an Issue</Link> for website-related feedback.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
