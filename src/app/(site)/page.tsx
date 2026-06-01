import { client } from "@/sanity/lib/client";
import AnimatedGrid from "@/components/AnimatedGrid";

// The GROQ Query: Now fetching the 'lqip' (blur string) metadata
const query = `*[_type == "campaign"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  coverImage {
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
  const campaigns = await client.fetch(query);

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 md:px-12 md:py-20">
      <AnimatedGrid campaigns={campaigns} />
    </main>
  );
}


