import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import AnimatedGrid from "@/components/AnimatedGrid";
type Campaign = {
  _id: string;
  title: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: any; 
};
// 1. The GROQ Query: Ask Sanity for all campaigns and their cover images
const query = `*[_type == "campaign"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  coverImage
}`;

// 2. The Page Component (Async because it fetches data)
export default async function Home() {
  const campaigns = await client.fetch(query);

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 md:px-12 md:py-20">
      <AnimatedGrid campaigns={campaigns} />
      </main>
  );
}