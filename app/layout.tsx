import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hsa-calculator-five.vercel.app'),
  title: {
    default: "Fishing Gear Guru | Profesyonel Balıkçılık Ekipman Rehberi",
    template: "%s | Fishing Gear Guru"
  },
  description: "Fishing Gear Guru ile LRF, Spin ve Surf avlarınız için ideal ekipman kombinasyonunu hesaplayın. Bilimsel verilerle doğru kamış, makine ve misina seçimi.",
  keywords: ["fishing gear guru", "balıkçılık", "lrf", "hsa", "spin", "surf casting", "pe hesaplama", "misina kalınlığı", "light rock fishing", "balık avı", "olta takımı"],
  authors: [{ name: "Aras Demiray" }],
  creator: "Aras Demiray",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hsa-calculator-five.vercel.app",
    title: "Fishing Gear Guru - En İyi Kombinasyonu Bulun",
    description: "Av stilinizi seçin, Fishing Gear Guru yapay zekası size en uygun takımı saniyeler içinde önersin.",
    siteName: "Fishing Gear Guru",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fishing Gear Guru Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishing Gear Guru | Akıllı Ekipman Seçimi",
    description: "LRF, Spin ve Surf avları için profesyonel ekipman rehberi.",
    creator: "@arasdemiray",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "GTf1eSbP1hhxj8WJ9eV7pLQo-rAg26gZ8LF2ErFc6XE",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Fishing Gear Guru",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/fishing-gear-guru-icon.jpg",
    apple: "/fishing-gear-guru-icon.jpg",
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
import LanguageSelector from '@/components/ui/LanguageSelector';
import { Heart, Instagram } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen flex flex-col`}>
        <LanguageProvider>
          <LanguageSelector />
          <main className="flex-grow">
            {children}
          </main>

          <footer className="w-full py-8 text-center border-t border-white/5 mt-12 bg-black/40 backdrop-blur-md">

            <div className="flex justify-center mb-4">
              <a
                href="https://instagram.com/arasdemiray"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 hover:bg-pink-600/20 text-slate-400 hover:text-pink-500 transition-all border border-slate-700 hover:border-pink-500/50 group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Bana Ulaşın</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-300 transition-colors">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20 animate-pulse" />
              <span>by <span className="text-white font-bold">Aras Demiray</span></span>
            </div>
            <p className="text-[10px] text-gray-600 mt-2">© 2026 HSA Calculator. All rights reserved.</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
