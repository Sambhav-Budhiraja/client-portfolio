import { client } from "@/sanity/lib/client";
import AnimatedGrid from "@/components/AnimatedGrid";

// Kills the cache so it stays perfectly synced with Sanity
export const dynamic = 'force-dynamic';

// 🚨 THE FIX: Explicitly target ONLY the campaign with the "home" slug
const query = `*[_type == "campaign" && slug.current == "home"][0] {
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

export default async function Home() {
  const data = await client.fetch(query);
  
  // Extract the 50 photos you dragged into the Home campaign
  const photos = data?.gallery || [];

  return (
    <main className="min-h-screen bg-white text-black px-6 pt-4 pb-12 md:px-12 md:pt-6 md:pb-20">
      
      {/* Passing only the HOME photos to the grid */}
      <AnimatedGrid photos={photos} />
      
    </main>
  );
}