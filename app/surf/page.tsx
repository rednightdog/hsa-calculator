import SurfCalculator from '@/components/SurfCalculator';
import SurfBallistics from '@/components/SurfBallistics';
import { Waves, TrendingUp, Anchor, Home, Atom } from 'lucide-react';
import Link from 'next/link';

// ... (Metadata stays same)

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Surf Casting Hesaplama | Uzak Atış ve Beklemeli Av",
    description: "Surf avlarında en uzağa atış yapabilmek için ideal kurşun ağırlığı, shock leader ve misina kombinasyonunu hesaplayın.",
};

export default function SurfPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-orange-500/30">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* ... (Hero structure stays same) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-900/40 to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* ... (Breadcrumb stays same) */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 justify-center">
                        <Link href="/" className="hover:text-orange-400 flex items-center gap-1 transition-colors">
                            <Home className="w-3 h-3" /> Ana Sayfa
                        </Link>
                        <span>/</span>
                        <span className="text-white">Surf Casting</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Maksimum <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Mesafe.</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Kıyıdan en uzak noktaya ulaşmak için kurşun ağırlığınıza uygun şok lider ve ip kombinasyonunu hesaplayın.
                        </p>
                    </div>

                    <SurfCalculator />

                    {/* BALLISTICS LAB INTEGRATION */}
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                                <Atom className="w-4 h-4" /> Pro Tools
                            </span>
                            <h2 className="text-3xl font-bold text-white">Ballistics Lab</h2>
                            <p className="text-slate-500 mt-2">Gelişmiş fizik motoru ile atış menzilinizi simüle edin.</p>
                        </div>
                        <SurfBallistics />
                    </div>

                    {/* Guide Cards (Shifted down) */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-400">
                                <Waves className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Dalga Arkası</h3>
                            <p className="text-sm text-slate-500">Kıyı şeridindeki dalgaları aşıp balığın olduğu kanala ulaşın.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-red-400">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Tapered Leader</h3>
                            <p className="text-sm text-slate-500">Konik şok lider kullanarak düğüm sürtünmesini mimimize edin.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-amber-400">
                                <Anchor className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Ağır Kurşun</h3>
                            <p className="text-sm text-slate-500">200g+ ağırlıklarda bile güvenli atış için doğru hesaplama.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
