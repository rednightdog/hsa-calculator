"use client";

import React from 'react';
import SurfCalculator from '@/components/SurfCalculator';
import SurfBallistics from '@/components/SurfBallistics';
import { Waves, TrendingUp, Anchor, Home, Atom } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function SurfPageContent() {
    const { t } = useLanguage();

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
                            <Home className="w-3 h-3" /> {t('common.home')}
                        </Link>
                        <span>/</span>
                        <span className="text-white">Surf Casting</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            {t('surf_page.hero_title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">{t('surf_page.hero_title_suffix')}</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            {t('surf_page.hero_desc')}
                        </p>
                    </div>

                    <SurfCalculator />

                    {/* BALLISTICS LAB INTEGRATION */}
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                                <Atom className="w-4 h-4" /> {t('surf_page.pro_tools')}
                            </span>
                            <h2 className="text-3xl font-bold text-white">{t('surf_page.ballistics_lab')}</h2>
                            <p className="text-slate-500 mt-2">{t('surf_page.lab_desc')}</p>
                        </div>
                        <SurfBallistics />
                    </div>

                    {/* Guide Cards */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-400">
                                <Waves className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{t('surf_page.card_wave_title')}</h3>
                            <p className="text-sm text-slate-500">{t('surf_page.card_wave_desc')}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-red-400">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{t('surf_page.card_taper_title')}</h3>
                            <p className="text-sm text-slate-500">{t('surf_page.card_taper_desc')}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <div className="w-10 h-10 bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-amber-400">
                                <Anchor className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{t('surf_page.card_heavy_title')}</h3>
                            <p className="text-sm text-slate-500">{t('surf_page.card_heavy_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
