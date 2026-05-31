import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-8 px-10 bg-white text-black sticky top-0 z-50">
      {/* Left side: Brand Name */}
      <Link href="/" className="text-xl font-medium tracking-[0.2em] uppercase">
        Bharat Sethi
      </Link>

      {/* Right side: Navigation Links */}
      <div className="flex gap-8 text-xs tracking-widest uppercase font-semibold">
        <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}