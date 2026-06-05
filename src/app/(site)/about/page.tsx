import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-24 md:px-12 lg:px-24 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      
      {/* Left Side: The Portrait */}
      <div className="w-full md:w-1/2 relative aspect-[3/4] bg-gray-50 overflow-hidden">
        {/* Replace the src with his actual portrait URL from Sanity or your public folder */}
        <Image 
          src="/about_photo.jpeg" 
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
Bharat Sethi is a photographer and creative director currently based in London, United Kingdom.

Born and raised in Haryana, India, his work reflects a fascination with emotion, fashion, and the meanings hidden within everyday moments. For Bharat, photography is more than a medium of documentation; it is a way of preserving feelings that words often struggle to express. Influenced by art, cinema, music, and culture, he approaches every image as an opportunity to capture not only what is seen, but also what is felt.
          </p>
          <p>
Believing that art has no fixed shape, Bharat views photography as a third eye—one that allows him to notice moments, details, and emotions that might otherwise pass unnoticed. Through his work, he explores the relationship between people, identity, and self-expression, creating images that invite viewers to discover their own meaning within the frame.

His creative practice is driven by the belief that every photograph carries a soul of its own, transforming fleeting moments into lasting visual experiences.          </p>
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