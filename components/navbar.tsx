'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BASE_URL, REGISTER_LINK } from '@/lib/constants';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `${BASE_URL}/`, label: 'Home' },
    { href: `${BASE_URL}/about`, label: 'About' },
    { href: `${BASE_URL}/big-mumbai-official`, label: 'Official Guide' },
    { href: `${BASE_URL}/big-mumbai-game-link`, label: 'Game Link' },
    { href: `${BASE_URL}/big-mumbai-aviator`, label: 'Aviator' },
    { href: `${BASE_URL}/how-to-register-big-mumbai-app`, label: 'Register' },
    { href: REGISTER_LINK, label: 'Download' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#d2a778]/20 md:backdrop-blur-md md:bg-white/95 md:shadow-none shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px] sm:h-20">
          <Link href={`${BASE_URL}/`} className="flex-shrink-0 min-w-0 max-w-[35vw] md:max-w-none overflow-hidden">
            <Image
              src="/bigmumbailogo.png"
              alt="Big Mumbai"
              width={140}
              height={48}
              className="h-8 sm:h-12 w-auto max-w-full object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#d2a778] transition-colors text-sm sm:text-base px-3"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-[#d2a778] text-[#d2a778] hover:bg-[#d2a778] hover:text-black transition-all duration-300 text-sm sm:text-base px-4 sm:px-6"
              onClick={() => window.location.href = REGISTER_LINK}
            >
              Login
            </Button>
            <Button
              className="bg-[#d2a778] text-black hover:bg-[#c49768] transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 font-semibold"
              onClick={() => window.location.href = REGISTER_LINK}
            >
              Register
            </Button>
          </div>

          {/* Mobile: Login & Register buttons + hamburger */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0">
            <Link href={REGISTER_LINK} className="shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-[#d2a778] text-[#d2a778] hover:bg-[#d2a778] hover:text-black text-xs px-2 py-1.5 whitespace-nowrap min-h-[36px]"
              >
                Login
              </Button>
            </Link>
            <Link href={REGISTER_LINK} className="shrink-0">
              <Button
                size="sm"
                className="bg-[#d2a778] text-black hover:bg-[#c49768] text-xs px-2 py-1.5 font-semibold whitespace-nowrap min-h-[36px]"
              >
                Register
              </Button>
            </Link>
            <button
              type="button"
              className="min-w-[44px] min-h-[44px] -mr-1 flex items-center justify-center text-gray-600 hover:text-[#d2a778] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#d2a778]/20 shadow-lg">
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 text-gray-600 hover:text-[#d2a778] hover:bg-[#d2a778]/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
