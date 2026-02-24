import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/privacy-policy',
  'Privacy Policy | Big Mumbai APK Download – How We Protect Your Data | bigmumbaiapkdownload.com',
  'Privacy Policy for bigmumbaiapkdownload.com. Learn how we collect, use, and protect your information when you use our Big Mumbai APK download site.'
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Privacy Policy – How We Protect Your Data</h1>
        <p className="text-gray-500 mb-6">Last updated: February <span className="auto-year">2026</span></p>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          At <strong>bigmumbaiapkdownload.com</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website — whether you are here to download the Big Mumbai APK, read our <Link href={`${BASE_URL}/big-mumbai-official`} className="text-[#d2a778] hover:underline">Big Mumbai Official Guide</Link>, learn how to <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">register on the Big Mumbai app</Link>, or use any of our other resources. We are an affiliate site and do not operate the Big Mumbai platform; when you follow links to Big Mumbai, their own privacy policy applies. This policy applies only to data we collect through bigmumbaiapkdownload.com. By using our site, you consent to the practices described below. If you have questions, visit our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page or read our <Link href={`${BASE_URL}/disclaimer`} className="text-[#d2a778] hover:underline">Disclaimer</Link> and <Link href={`${BASE_URL}/terms-of-service`} className="text-[#d2a778] hover:underline">Terms of Service</Link>.
        </p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="mb-4">bigmumbaiapkdownload.com (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains in detail how we collect, use, disclose, and safeguard your information when you visit our website at bigmumbaiapkdownload.com, including any subdomains or related services.</p>
            <p>By using our website, you consent to the practices described in this policy. If you do not agree with our practices, please discontinue use of our site. We encourage you to read this policy carefully and contact us if you have any questions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-4">We collect information in several ways to provide and improve our services:</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Contact Information:</strong> When you reach out via email or contact forms, we may collect your name, email address, and the content of your message.</li>
              <li><strong>Feedback and Inquiries:</strong> Any information you voluntarily submit when reporting issues, asking questions, or providing feedback.</li>
              <li><strong>Newsletter or Updates:</strong> If you opt in to receive communications, we collect your email address and preferences.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type, and unique device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click paths, referring URLs, and interaction with content.</li>
              <li><strong>Log Data:</strong> Server logs including access times, page requests, and error logs for technical maintenance.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.3 Information from Third Parties</h3>
            <p>We may receive aggregated or anonymized data from analytics providers, advertising partners, or other services to improve our website and user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our website and the Big Mumbai APK download resources we offer.</li>
              <li><strong>Communication:</strong> To respond to your inquiries, support requests, and feedback.</li>
              <li><strong>Analytics:</strong> To understand how visitors use our site, which pages are most popular, and how we can enhance the user experience.</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, or abusive activity.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, or legal processes.</li>
              <li><strong>Marketing:</strong> With your consent, to send relevant updates, offers, or newsletters about Big Mumbai or our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">We use cookies and similar technologies to enhance your browsing experience:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., session management, security).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand traffic patterns and user behavior (e.g., Google Analytics).</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
              <li><strong>Advertising Cookies:</strong> May be used by third-party ad networks to deliver relevant ads (you can opt out).</li>
            </ul>
            <p>You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our website (hosting, analytics, email services) under strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request, or to protect our rights and safety.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> When you have explicitly agreed to such sharing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links and Services</h2>
            <p className="mb-4">Our website contains links to third-party sites, including Big Mumbai and other external platforms. We are not responsible for the privacy practices, content, or policies of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            <p>When you click links to download the Big Mumbai APK or register on Big Mumbai&apos;s platform (e.g. from our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> or <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link> pages), you will be subject to Big Mumbai&apos;s own privacy policy and terms of service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Security</h2>
            <p className="mb-4">We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption (SSL/TLS), secure servers, and limited access to personal data.</p>
            <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Retention</h2>
            <p className="mb-4">We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. For example, we may retain contact form submissions for customer service purposes, and analytics data in aggregated form for improving our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information, subject to legal obligations.</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails or disable certain tracking via browser settings.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] hover:underline">support@bigmumbaiapkdownload.com</a>. We will respond within a reasonable timeframe. You can also use our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> or <Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] hover:underline">Report an Issue</Link> pages.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
            <p>Our website is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately and we will take steps to delete such information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p>For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <ul className="mt-3 space-y-1 text-gray-600">
              <li>Email: <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] hover:underline">support@bigmumbaiapkdownload.com</a></li>
              <li>Location: Mumbai, Maharashtra, India</li>
            </ul>
            <p className="mt-4">We aim to respond to all privacy-related inquiries within 30 days. For more ways to reach us, see our <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page and <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] hover:underline">Help Center</Link>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
