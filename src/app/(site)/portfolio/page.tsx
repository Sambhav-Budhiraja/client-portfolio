/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// 🚨 Kills the cache so new collections show up the second Bharat hits "Publish"
export const dynamic = 'force-dynamic';

// 1. Fetch all campaigns that have a slug (excluding the main "Home" campaign if you named it that)
const query = `*[_type == "campaign" && defined(slug.current) && title != "Home"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  hoverCaption,
  coverImage
}`;

export default async function PortfolioPage() {
  // 2. Grab the real data from Sanity
  const collections = await client.fetch(query);

  return (
    <main className="min-h-screen bg-white text-black px-6 py-24 md:px-12 max-w-[1400px] mx-auto">
      
      {/* The Grid of Albums */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3. Map over the REAL collections instead of the mock data */}
        {collections.map((collection: any) => {
          
          // Safety check: Don't render the card if Bharat forgot to upload a Cover Image
          if (!collection.coverImage?.asset) return null;

          return (
            <Link 
              key={collection.slug} 
              href={`/portfolio/${collection.slug}`} 
              className="group relative block aspect-[4/5] bg-gray-50 overflow-hidden cursor-pointer"
            >
              {/* The Real Cover Image from Sanity */}
              <Image 
                src={urlFor(collection.coverImage).width(800).url()} 
                alt={collection.title || "Collection cover"}
                fill
                className="object-cover"
              />
              
              {/* The Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-white text-lg tracking-[0.2em] uppercase font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {collection.title}
                </h2>
                
                {/* Only render the caption if Bharat typed one in the CMS */}
                {collection.hoverCaption && (
                  <p className="text-gray-200 text-xs tracking-widest font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {collection.hoverCaption}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

    </main>
  );
}