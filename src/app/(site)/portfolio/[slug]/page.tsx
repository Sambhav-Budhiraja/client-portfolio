import Link from "next/link";
import Image from "next/image";

// 9 high-res editorial cloud photography assets for the sample 3x3 grid
const sampleCloudImages = [
  "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500491460312-c32fc2dba939?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590161423230-6644fcf2db91?q=80&w=600&auto=format&fit=crop",
];

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 md:px-12 max-w-[1400px] mx-auto">
      
      {/* Header / Context Navigation */}
      <div className="mb-16 flex flex-col items-center justify-center text-center space-y-4">
        <Link 
          href="/portfolio" 
          className="text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
        >
          &larr; Back to Collections
        </Link>
        <h1 className="text-2xl tracking-[0.3em] uppercase font-light">
          {currentSlug}
        </h1>
      </div>

      {/* The 3x3 Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sampleCloudImages.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-square bg-gray-50 overflow-hidden group cursor-pointer"
          >
            <Image 
              src={src} 
              alt={`${currentSlug} artwork frame ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              priority={index < 3} // Optimize loading speeds for above-the-fold content
            />
            {/* Minimalist image indicator overlay on hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

    </main>
  );
}