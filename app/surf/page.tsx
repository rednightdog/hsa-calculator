import SurfCalculator from '@/components/SurfCalculator';
import { Waves, TrendingUp, Anchor, Home } from 'lucide-react';
import Link from 'next/link';

export default function SurfPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-orange-500/30">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-900/40 to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
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

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
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
