import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = getPageMetadata(
  '/responsible-gaming',
  'Responsible Gaming | Big Mumbai APK Download – Play Safe & Within Your Means | bigmumbaiapkdownload.com',
  'Responsible gaming resources and support for Big Mumbai users. Set limits, recognize warning signs, and get help. Play safely with bigmumbaiapkdownload.com.'
);

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#d2a778] mb-4">Responsible Gaming – Play Safe &amp; Within Your Means</h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          At <strong>bigmumbaiapkdownload.com</strong>, we believe gaming should be fun, entertaining, and never harmful. Whether you download the Big Mumbai APK from our <Link href={`${BASE_URL}/`} className="text-[#d2a778] hover:underline">Home</Link> page, use our <Link href={`${BASE_URL}/big-mumbai-game-link`} className="text-[#d2a778] hover:underline">Big Mumbai Game Link</Link>, or enjoy games like <Link href={`${BASE_URL}/big-mumbai-aviator`} className="text-[#d2a778] hover:underline">Big Mumbai Aviator</Link>, we are committed to promoting responsible gaming practices. We are an official affiliate of Big Mumbai and provide download and registration guides; we do not operate the gaming platform. This page offers practical tips, warning signs to watch for, and resources for getting help if gaming becomes a problem. We encourage every user to set limits, stay in control, and play only with money and time they can afford to spend.
        </p>

        <div className="mb-10 p-6 bg-[#d2a778]/10 rounded-xl border border-[#d2a778]/20">
          <p className="text-gray-700 text-sm">
            <strong>Affiliate disclosure:</strong> bigmumbaiapkdownload.com is an official affiliate partner of Big Mumbai. We may earn a commission when you register or download through our links. We do not provide clinical or legal advice; for problem gambling support, please use the resources below or contact qualified professionals.
          </p>
        </div>

        <div className="space-y-10 text-gray-600">
          <section className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Responsible Gaming Matters</h2>
            <p className="mb-4">Online gaming can be enjoyable when approached responsibly. However, it can become problematic when it interferes with daily life, relationships, work, or finances. Responsible gaming means playing within your limits, staying in control, and recognizing when to stop.</p>
            <p className="mb-4">We encourage all users to treat gaming as a form of entertainment, not a way to make money or solve financial problems. The house always has an edge — never gamble with money you cannot afford to lose. If you are new to Big Mumbai, read our <Link href={`${BASE_URL}/about`} className="text-[#d2a778] hover:underline">About Big Mumbai</Link> and <Link href={`${BASE_URL}/how-to-register-big-mumbai-app`} className="text-[#d2a778] hover:underline">How to Register Big Mumbai App</Link> for safe, informed access to the platform.</p>
            <p>Setting clear boundaries before you play helps keep the experience positive and under your control.</p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Set Limits — Practical Tips</h2>
            <p className="mb-4">Before you play, establish clear boundaries and stick to them:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Money limits:</strong> Decide in advance how much you can afford to spend. Never exceed this amount, even if you are losing or feel you can &quot;win it back.&quot;</li>
              <li><strong>Time limits:</strong> Set a time limit for each session. Use alarms or reminders to help you stop when your time is up.</li>
              <li><strong>Never chase losses:</strong> If you lose your predetermined limit, stop. Chasing losses often leads to bigger losses and emotional distress.</li>
              <li><strong>Don&apos;t play when stressed or emotional:</strong> Avoid gaming when you are upset, anxious, or under the influence of alcohol. Clear thinking helps you stay in control.</li>
              <li><strong>Take regular breaks:</strong> Step away from the screen periodically. Balance gaming with other activities and responsibilities.</li>
            </ul>
            <p>The Big Mumbai app may offer deposit limits, session reminders, and self-exclusion tools — use them to support your own limits.</p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Warning Signs of Problem Gambling</h2>
            <p className="mb-4">Recognizing early warning signs can help you or someone you care about get support before the problem escalates. Seek help if you notice:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spending more money or time than intended on gaming</li>
              <li>Borrowing money, selling possessions, or taking loans to gamble</li>
              <li>Gaming affecting work performance, relationships, or family life</li>
              <li>Difficulty cutting down or stopping despite wanting to</li>
              <li>Feeling restless or irritable when not gaming</li>
              <li>Lying to others about how much you play or spend</li>
              <li>Neglecting other hobbies, responsibilities, or self-care</li>
              <li>Using gaming to escape from stress, depression, or other problems</li>
            </ul>
            <p>Problem gambling can affect anyone. There is no shame in seeking help — it is a sign of strength.</p>
          </section>

          <section className="bg-[#d2a778]/10 rounded-xl p-8 border border-[#d2a778]/20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Get Help — Resources and Support</h2>
            <p className="mb-4">If you or someone you know needs support for problem gambling, the following resources can help:</p>
            <ul className="space-y-4 mb-4">
              <li>
                <strong>Gamblers Anonymous:</strong> A fellowship of people who share their experience and support each other to recover from problem gambling. Visit <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="text-[#d2a778] hover:underline">gamblersanonymous.org</a> for meetings and resources.
              </li>
              <li>
                <strong>National Problem Gambling Helpline:</strong> Many countries have helplines offering confidential support. Search for your local helpline or check resources provided by your government or health department.
              </li>
              <li>
                <strong>Big Mumbai Platform Tools:</strong> The Big Mumbai app offers self-exclusion options, deposit limits, and time-out features. Use these tools if you need to restrict your play. Contact Big Mumbai support for assistance.
              </li>
              <li>
                <strong>Professional Counselling:</strong> Therapists and counsellors trained in addiction can provide personalized support. Consider reaching out to a mental health professional.
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Age Restriction</h2>
            <p className="mb-4">Our website and the Big Mumbai platform are intended for users who are 18 years of age or older (or the legal age for gambling in your jurisdiction). We do not target minors and do not condone underage gambling.</p>
            <p>If you believe a minor has accessed gaming content through our site, please <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">contact us</Link> immediately.</p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="mb-4">bigmumbaiapkdownload.com is committed to promoting responsible gaming. We provide this information as a resource and encourage all users to play safely, within their means, and in compliance with local laws. Please ensure online gaming is permitted in your region before participating.</p>
            <p>For more support and FAQs, visit our <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] hover:underline">Help Center</Link> and <Link href={`${BASE_URL}/contact`} className="text-[#d2a778] hover:underline">Contact</Link> page. For our legal and affiliate disclosures, see our <Link href={`${BASE_URL}/disclaimer`} className="text-[#d2a778] hover:underline">Disclaimer</Link> and <Link href={`${BASE_URL}/terms-of-service`} className="text-[#d2a778] hover:underline">Terms of Service</Link>.</p>
          </section>

          <div className="pt-4">
            <Link href={`${BASE_URL}/help-center`} className="text-[#d2a778] font-semibold hover:underline">
              → Visit Help Center
            </Link>
            {' · '}
            <Link href={`${BASE_URL}/`} className="text-[#d2a778] font-semibold hover:underline">
              Big Mumbai APK Download
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
