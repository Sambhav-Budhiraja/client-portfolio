import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AnimatedGrid({ campaigns }: { campaigns: any[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto">
      {campaigns.map((campaign) => (
        <div key={campaign._id} className="break-inside-avoid">
          
          <Link href={`/portfolio/${campaign.slug}`} className="group block cursor-pointer">
            
            {/* Static Image Wrapper (Hover zoom kept for interactivity) */}
            <div className="relative overflow-hidden bg-gray-50 mb-4">
              {campaign.coverImage && (
                <Image
                  src={urlFor(campaign.coverImage).width(800).url()}
                  alt={campaign.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>

            {/* Static Title */}
            <div className="flex items-center justify-between px-1">
              <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-black group-hover:text-gray-400 transition-colors duration-300">
                {campaign.title}
              </h2>
            </div>

          </Link>
          
        </div>
      ))}
    </div>
  );
}