import Link from 'next/link';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL, REGISTER_LINK } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/contact',
  'Contact Us | Big Mumbai APK Download – Support, Inquiries & Feedback | bigmumbaiapkdownload.com',
  'Contact bigmumbaiapkdownload.com for Big Mumbai APK download support, registration help, and feedback. Email support, response times, and links to Help Center and main guides.'
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Contact Us – Big Mumbai APK Download Support</h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          At <strong>bigmumbaiapkdownload.com</strong>, we are committed to helping you with every step of your Big Mumbai journey — from downloading the official Big Mumbai APK latest version to understanding how to register and claim your welcome bonus. Whether you have a question about the Big Mumbai game link, need help with the Big Mumbai Aviator guide, or want to report an issue with our website, our team is here to assist you. We are an official affiliate partner of Big Mumbai and provide verified download links, registration guides, and up-to-date information so you can access the platform safely. Use the options below to get in touch; we typically respond within 24–48 hours on business days.
        </p>

        <div className="mb-10 p-6 bg-[#d2a778]/10 rounded-xl border border-[#d2a778]/20">
          <p className="text-gray-700 text-sm">
            <strong>Affiliate disclosure:</strong> bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We may earn a commission when you register or download through links on this site. For account-specific issues (login, withdrawals, bonuses), please contact Big Mumbai&apos;s official support directly.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <div className="flex items-start gap-4">
              <Mail className="w-10 h-10 text-[#d2a778] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Email Support</h2>
                <p className="text-gray-600 mb-3">For general inquiries, support requests, partnership opportunities, or feedback about our Big Mumbai APK download guides and content, email us at:</p>
                <a href="mailto:support@bigmumbaiapkdownload.com" className="text-[#d2a778] font-semibold hover:underline text-lg">
                  support@bigmumbaiapkdownload.com
                </a>
                <p className="text-gray-500 text-sm mt-3">We typically respond within 24–48 hours on business days. For urgent matters (e.g. broken download links), please include &quot;URGENT&quot; in your subject line.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <div className="flex items-start gap-4">
              <MapPin className="w-10 h-10 text-[#d2a778] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Location</h2>
                <p className="text-gray-600 mb-2">Mumbai, Maharashtra, India</p>
                <p className="text-gray-500 text-sm">Our team operates from India&apos;s financial capital. We serve users across the country and beyond, with a focus on providing reliable Big Mumbai APK download resources, registration guides, and safe links to the official Big Mumbai platform.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <div className="flex items-start gap-4">
              <Clock className="w-10 h-10 text-[#d2a778] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Response Times</h2>
                <p className="text-gray-600 mb-2">We strive to respond to all inquiries as quickly as possible:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>General inquiries: Within 24–48 hours</li>
                  <li>Technical or download issues: Within 24 hours</li>
                  <li>Partnership requests: Within 2–3 business days</li>
                </ul>
                <p className="text-gray-500 text-sm mt-3">Response times may be longer during weekends or holidays.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#d2a778]/10 rounded-xl p-8 border border-[#d2a778]/20">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-10 h-10 text-[#d2a778] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Links &amp; Resources</h2>
                <p className="text-gray-600 mb-4">Before reaching out, you may find quick answers on these pages:</p>
                <ul className="space-y-3 text-gray-600">
                  <li><Link href={`${BASE_URL}/`} className="text-[#d2a778] font-medium hover:underline">Home – Big Mumbai APK Download</Link> — Get the latest APK and register with invitation code 54147218367.</li>
                  <li><Link href={`${BASE_URL}/about`} className="text-[#d2a778] font-medium hover:underline">About Big Mumbai</Link> — Learn about the platform and why we recommend it.</li>
                  <li><Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] font-medium hover:underline">How to Register on Big Mumbai App</Link> — Step-by-step registration guide.</li>
                  <li><Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] font-medium hover:underline">Help Center</Link> — FAQs on download, installation, and registration.</li>
                  <li><Link href={`${BASE_URL}/report-an-issue`} className="text-[#d2a778] font-medium hover:underline">Report an Issue</Link> — Broken links or website problems.</li>
                  <li><Link href={`${BASE_URL}/responsible-gaming`} className="text-[#d2a778] font-medium hover:underline">Responsible Gaming</Link> — Resources for safe play.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Big Mumbai Account Support</h2>
            <p className="text-gray-600">For issues related to your Big Mumbai account — such as login problems, withdrawal requests, bonus inquiries, or game-related support — please contact Big Mumbai&apos;s official customer support directly through their in-app help or official channels. <strong>bigmumbaiapkdownload.com</strong> is an affiliate site and cannot resolve account-specific issues on Big Mumbai&apos;s platform. We provide the official <Link href={REGISTER_LINK} className="text-[#d2a778] hover:underline">Big Mumbai registration link</Link> and download resources; all account and gameplay matters are handled by Big Mumbai.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
