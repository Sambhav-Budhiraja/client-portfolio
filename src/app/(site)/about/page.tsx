import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Fetch the single 'about' document from Sanity
const query = `*[_type == "about"][0]`;

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const data = await client.fetch(query);

  // If he hasn't typed anything in Sanity yet, show a friendly fallback
  if (!data) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center bg-white text-black">
        <p className="text-gray-400 font-light tracking-widest uppercase text-sm">
          About page content coming soon.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 pt-12 pb-24 md:px-12 md:pt-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start">
        
        {/* Profile Image Column */}
        {data.image && (
          <div className="w-full md:w-1/2 relative aspect-[4/5] max-w-md">
            <Image
              src={urlFor(data.image).width(800).url()}
              alt="Bharat Sethi"
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Text Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase mb-8">
            {data.title || "About"}
          </h1>
          
          <p className="text-gray-600 font-light leading-relaxed whitespace-pre-wrap text-sm md:text-base">
            {data.bio}
          </p>
        </div>

      </div>
    </main>
  );
}