import SpinCalculator from '@/components/SpinCalculator';
import { Anchor, Wind, Swords, Home } from 'lucide-react';
import Link from 'next/link';

export default function SpinPage() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-purple-500/30">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/40 to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 justify-center">
                        <Link href="/" className="hover:text-purple-400 flex items-center gap-1 transition-colors">
                            <Home className="w-3 h-3" /> Ana Sayfa
                        </Link>
                        <span>/</span>
                        <span className="text-white">Spin (At-Çek)</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Güçlü ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Dengeli Takım.</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Levrek, Lüfer veya Turna... Hedefiniz ne olursa olsun, sahtenize en uygun ip ve lider kombinasyonunu hesaplayın.
                        </p>
                    </div>

                    <SpinCalculator />

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-purple-400">
                                <Anchor className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Sağlam Lider</h3>
                            <p className="text-sm text-slate-500">Dişli balıklar için doğru kalınlıkta FC lider önerisi.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-indigo-400">
                                <Wind className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Uzak Atış</h3>
                            <p className="text-sm text-slate-500">Gereksiz kalın ipten kaçınarak eriminizi maksimize edin.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-pink-400">
                                <Swords className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Trophy Mücadele</h3>
                            <p className="text-sm text-slate-500">Büyük balıklarla mücadele için optimize edilmiş drag ayarları.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
