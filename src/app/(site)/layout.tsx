import Navbar from "@/components/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* The children prop is where your page.tsx content gets injected */}
      {children} 
    </div>
  );
}