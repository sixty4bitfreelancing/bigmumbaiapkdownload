'use client';

import Link from 'next/link';
import { BASE_URL, REGISTER_LINK } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-[#d2a778]/20 py-8 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm mb-4">
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/`}>Home</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/about`}>About</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/big-mumbai-official`}>Official Guide</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/big-mumbai-game-link`}>Game Link</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/big-mumbai-aviator`}>Aviator</Link>
        <Link className="hover:text-[#d2a778]" href={REGISTER_LINK}>Register</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/privacy-policy`}>Privacy</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/disclaimer`}>Disclaimer</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/terms-of-service`}>Terms</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/contact`}>Contact</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/report-an-issue`}>Report Issue</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/responsible-gaming`}>Responsible Gaming</Link>
        <Link className="hover:text-[#d2a778]" href={`${BASE_URL}/help-center`}>Help Center</Link>
      </div>
      <p className="text-gray-500 text-sm">© <span className="auto-year">2026</span> bigmumbaiapkdownload.com — Affiliate Site | All Rights Reserved</p>
    </footer>
  );
}
