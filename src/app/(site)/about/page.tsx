import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-10 py-20 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl uppercase tracking-[0.2em] mb-12 text-center">About</h1>
        
        {/* Optional: You can drop a profile image in the public folder and link it here later */}
        {/* <div className="relative w-full aspect-[4/5] mb-12 bg-gray-50">
          <Image src="/profile.jpg" alt="Photographer" fill className="object-cover" />
        </div> */}

        <div className="space-y-6 text-sm leading-relaxed tracking-wide text-gray-800 text-justify font-light">
          <p>
            Bharat Sethi is an editorial and commercial photographer specializing in high-fashion, 
            beauty, and portraiture. With a minimalist approach to lighting and composition, 
            his work strips away distractions to focus on the raw essence of his subjects.
          </p>
          <p>
            Based between Delhi and London, his portfolio includes campaigns for leading 
            global publications and luxury fashion houses, capturing moments that balance 
            elegance with quiet intensity.
          </p>
        </div>
      </div>
    </main>
  );
}