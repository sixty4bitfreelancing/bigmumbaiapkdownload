import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/report-an-issue',
  'Report an Issue | Big Mumbai APK Download – Broken Links, Bugs & Feedback | bigmumbaiapkdownload.com',
  'Report technical issues, broken download links, bugs, or concerns to bigmumbaiapkdownload.com. We take your feedback seriously and fix issues quickly.'
);

export default function ReportAnIssue() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Report an Issue – Broken Links, Bugs &amp; Feedback</h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          At <strong>bigmumbaiapkdownload.com</strong>, we work hard to keep our Big Mumbai APK download links, registration guides, and all pages working correctly. If you encounter a broken link, a page that won&apos;t load, incorrect information, or any other issue while using our site, your report helps us fix it for everyone. We cover the <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> download page, <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official</Link>, <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link>, <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link>, <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link>, and the rest of our content. Please note: we are an affiliate site; issues related to your Big Mumbai account (login, withdrawals, bonuses) must be reported to Big Mumbai&apos;s official support. For general website problems, use the instructions below.
        </p>

        <div className="mb-10 p-6 bg-[#d2a778]/10 rounded-xl border border-[#d2a778]/20">
          <p className="text-gray-700 text-sm">
            <strong>Affiliate disclosure:</strong> bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We may earn a commission when you register or download through our links. We can only fix issues on our own website (broken links, errors, content). For Big Mumbai account or platform issues, contact Big Mumbai support directly.
          </p>
        </div>

        <div className="space-y-10">
          <section className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How to Report</h2>
            <p className="text-gray-600 mb-4">Email us at <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] font-semibold hover:underline">support@bigmumbaiapkdownload.com</a> with the subject line <strong>&quot;Report an Issue&quot;</strong> and include the following details for faster resolution:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Clear description:</strong> What went wrong? Describe the issue in as much detail as possible.</li>
              <li><strong>Steps to reproduce:</strong> If applicable, list the exact steps you took before the issue occurred (e.g., &quot;Clicked Download button → Page did not load&quot;).</li>
              <li><strong>Device and browser:</strong> Your device type (e.g., Android 12, Samsung Galaxy), browser name and version (e.g., Chrome 120, Firefox), and screen size if relevant.</li>
              <li><strong>Screenshots or error messages:</strong> Attach screenshots or copy-paste any error messages you see. This helps us diagnose the problem quickly.</li>
              <li><strong>URL:</strong> The exact page URL where you encountered the issue.</li>
            </ul>
            <p className="text-gray-500 text-sm">The more information you provide, the faster we can investigate and fix the issue. You can also visit our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page for other ways to reach us.</p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Types of Issues We Address</h2>
            <p className="text-gray-600 mb-4">We handle a wide range of reports related to our website. Here are the main categories:</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Broken download links:</strong> Big Mumbai APK links that don&apos;t work, redirect incorrectly, or fail to start the download. Please include the specific link and what happens when you click it.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Website errors or loading problems:</strong> Pages that won&apos;t load, display incorrectly, or show error messages. Include your device, browser, and a screenshot if possible.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Incorrect or outdated information:</strong> Content that appears wrong, outdated, or misleading. Let us know the page, section, and what you believe the correct information should be.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Security concerns:</strong> Suspected phishing, malware, or security vulnerabilities on our site. We take these reports very seriously and will investigate promptly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Content or compliance concerns:</strong> Issues related to content accuracy, legality, or adherence to our <Link href={`${BASE_URL}/disclaimer`} className="text-[#d2a778] hover:underline">Disclaimer</Link> or <Link href={`${BASE_URL}/terms-of-service`} className="text-[#d2a778] hover:underline">Terms of Service</Link>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d2a778] font-bold">•</span>
                <span><strong>Accessibility issues:</strong> Problems that affect your ability to use our site (e.g., poor contrast, unreadable text, navigation difficulties).</span>
              </li>
            </ul>
          </section>

          <section className="bg-[#d2a778]/10 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-gray-600 mb-4">After you submit a report:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>We aim to acknowledge your report within <strong>24–48 hours</strong> on business days.</li>
              <li>We investigate each report and may follow up with additional questions.</li>
              <li>For critical issues (e.g., broken download links, security concerns), we prioritize resolution as quickly as possible.</li>
              <li>We may not respond individually to every report, but we review and act on all feedback.</li>
            </ul>
            <p className="text-gray-600 mt-4">Thank you for helping us keep bigmumbaiapkdownload.com reliable for all users. For FAQs and general support, see our <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] hover:underline">Help Center</Link> and <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page.</p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Big Mumbai Account or Game Issues</h2>
            <p className="text-gray-600 mb-4">For issues related to your Big Mumbai account — such as login problems, withdrawal requests, bonus not credited, or game-related support — please contact Big Mumbai&apos;s official customer support directly. We are an affiliate site and cannot resolve account-specific or platform issues on Big Mumbai&apos;s side.</p>
            <p className="text-gray-500 text-sm">Use the in-app help section or official Big Mumbai support channels for account-related queries. For downloading the APK and registration steps, always use our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link>, <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link>, and <Link href={`${BASE_URL}/privacy-policy`} className="text-[#d2a778] hover:underline">Privacy Policy</Link> for reference.</p>
          </section>

          <div className="pt-4">
            <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] font-semibold hover:underline inline-flex items-center gap-2">
              → Go to Contact Us
            </Link>
            {' · '}
            <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] font-semibold hover:underline">
              Help Center
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
