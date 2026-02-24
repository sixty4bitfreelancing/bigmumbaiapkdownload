import Link from 'next/link';
import { BASE_URL } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-[#d2a778] mb-2">404</h1>
      <h2 className="text-xl text-gray-600 mb-6">This page could not be found.</h2>
      <Link
        href={BASE_URL}
        className="inline-flex items-center justify-center px-6 py-3 bg-[#d2a778] text-black font-semibold rounded-lg hover:bg-[#c49768] transition-colors"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
