import Link from "next/link";
import Image from "next/image";

// NOTE: You will need to wire this up to your actual Sanity fetch function!
const mockCollections = [
  { slug: "clouds", title: "Clouds", caption: "Skycapes & Formations", coverImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80" },
  { slug: "street", title: "Street", caption: "Urban Life & Architecture", coverImage: "https://images.unsplash.com/photo-1517736996303-4e64a4f87309?w=800&q=80" },
  { slug: "portraits", title: "Portraits", caption: "Studio & Natural Light", coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
];

export default function PortfolioPage() {
  return (
<main className="min-h-screen bg-white text-black px-6 py-24 md:px-12 max-w-[1400px] mx-auto">
          
      {/* The Grid of Albums */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCollections.map((collection) => (
          
          <Link 
            key={collection.slug} 
            href={`/portfolio/${collection.slug}`} 
            className="group relative block aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer"
          >
            {/* The Cover Image */}
            <Image 
              src={collection.coverImage} 
              alt={collection.title}
              fill
              className="object-cover "
            />
            
            {/* The Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-white text-lg tracking-[0.2em] uppercase font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {collection.title}
              </h2>
              <p className="text-gray-200 text-xs tracking-widest font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {collection.caption}
              </p>
            </div>
            
          </Link>
        ))}
      </div>
    </main>
  );
}