import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balık Hesaplama Asistanı",
  description: "Spin, LRF ve Surf avlarınız için şok, ip ve ekipman hesaplama aracı.",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { LanguageProvider } from '@/context/LanguageContext';
import { Heart } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen flex flex-col`}>
        <LanguageProvider>
          <main className="flex-grow">
            {children}
          </main>

          <footer className="w-full py-6 text-center border-t border-white/5 mt-12 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-300 transition-colors">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20 animate-pulse" />
              <span>by <span className="text-white font-bold">Aras Demiray</span></span>
            </div>
            <p className="text-[10px] text-gray-600 mt-2">© 2026 CineGearPro & HSA Calc. All rights reserved.</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
