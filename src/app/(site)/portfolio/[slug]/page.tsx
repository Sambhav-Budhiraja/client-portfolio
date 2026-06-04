import { client } from "@/sanity/lib/client";
import AnimatedGrid from "@/components/AnimatedGrid";
import { notFound } from "next/navigation";

const query = `*[_type == "campaign" && slug.current == $slug][0] {
  title,
  gallery[] {
    ...,
    asset->{
      ...,
      metadata {
        lqip
      }
    }
  }
}`;

// 🚨 NEXT.JS FIX 1: Wrap the params type in a Promise 🚨
export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 🚨 NEXT.JS FIX 2: You must "await" the params before pulling the slug out! 🚨
  const resolvedParams = await params;
  
  // Now it successfully grabs "portraits" and passes it to Sanity
  const data = await client.fetch(query, { slug: resolvedParams.slug });
  
  if (!data) {
    notFound();
  }

  const photos = data?.gallery || [];

  return (
    <main className="min-h-screen bg-white text-black px-6 pt-12 pb-12 md:px-12 md:pt-20 md:pb-32">
      
      {/* The Minimalist Museum-Style Heading */}
      <div className="max-w-[1200px] mx-auto mb-16 md:mb-24 flex flex-col items-center text-center">
        <span className="text-xs font-light tracking-[0.4em] text-gray-400 uppercase mb-4">
          Collection
        </span>
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase text-black">
          {data.title}
        </h1>
      </div>

      {/* Passing the photos to your grid */}
      <AnimatedGrid photos={photos} />
      
    </main>
  );
}