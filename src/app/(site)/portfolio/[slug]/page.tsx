import { client } from "@/sanity/lib/client";
import ProjectGallery from "@/components/ProjectGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `*[_type == "campaign" && slug.current == $slug][0]{
    title,
    client,
    gallery
  }`;

  const campaign = await client.fetch(query, { slug });

  if (!campaign) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-2xl uppercase tracking-widest">Project Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 md:px-12 md:py-20 max-w-[1600px] mx-auto">
      
      <header className="mb-20 text-center">
        <h1 className="text-3xl uppercase tracking-widest mb-4">{campaign.title}</h1>
        {campaign.client && (
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Client: {campaign.client}
          </p>
        )}
      </header>

      {/* Pass the data to our new interactive client component */}
      {campaign.gallery && campaign.gallery.length > 0 ? (
        <ProjectGallery title={campaign.title} images={campaign.gallery} />
      ) : (
        <p className="text-center text-gray-400 tracking-widest uppercase text-sm mt-32">Gallery coming soon</p>
      )}
      
    </main>
  );
}