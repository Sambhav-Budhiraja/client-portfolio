import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Added flex, flex-col, and min-h-screen to the body */}
<body suppressHydrationWarning className={`${inter.className} antialiased bg-white text-black selection:bg-black selection:text-white flex flex-col min-h-screen`}>        
        <Navbar /> 
        
        {/* 2. Wrapped children in a main tag with flex-grow so it pushes the footer down */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 3. The exact Copyright Footer */}
        <footer className="w-full py-12 flex justify-center items-center">
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400">
            &copy; 2026 Bharat Sethi. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}