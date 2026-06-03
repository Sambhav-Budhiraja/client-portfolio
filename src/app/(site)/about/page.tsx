import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-24 md:px-12 lg:px-24 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      
      {/* Left Side: The Portrait */}
      <div className="w-full md:w-1/2 relative aspect-[3/4] bg-gray-50 overflow-hidden">
        {/* Replace the src with his actual portrait URL from Sanity or your public folder */}
        <Image 
          src="https://images.unsplash.com/photo-1554046920-90dc20696342?q=80&w=800&auto=format&fit=crop" 
          alt="Bharat Sethi Portrait" 
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out"
        />
      </div>

      {/* Right Side: The Copy */}
      <div className="w-full md:w-1/2 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-xs tracking-[0.3em] uppercase font-semibold text-gray-400">
            About
          </h1>
          <h2 className="text-2xl font-light tracking-tight">
            Bharat Sethi
          </h2>
        </div>
        
        {/* Bio */}
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed max-w-md font-light">
          <p>
            Specializing in high-end editorial, fashion, and commercial photography. Based in India, working globally.
          </p>
          <p>
            The approach is rooted in stark minimalism and raw emotion—stripping away the unnecessary to reveal the core narrative of every subject and brand.
          </p>
        </div>

        {/* Selected Clients / Exhibition List */}
        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-black mb-6">
            Selected Works & Publications
          </h3>
          <ul className="text-xs text-gray-500 space-y-3 uppercase tracking-widest">
            <li>Editorial — Campaign 01</li>
            <li>Commercial — Studio Sessions</li>
            <li>Print — Volume IV</li>
          </ul>
        </div>

        {/* Seamless routing to the Contact page */}
        <div className="pt-4">
          <Link 
            href="/contact" 
            className="text-xs tracking-[0.2em] uppercase font-semibold text-black border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors duration-300"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </main>
  );
}