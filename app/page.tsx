"use client";

import Link from 'next/link';
import { ArrowRight, Database, Fish, Anchor, Book } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/ui/LanguageSelector';

export default function Dashboard() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-blue-500/30 flex items-center justify-center relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-[#0f172a]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <LanguageSelector />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t('home.title')}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* HSA Card */}
          <Link href="/hsa" className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:bg-slate-900/80">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Anchor className="w-32 h-32 text-cyan-500 rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">HSA (LRF)</h2>
              <p className="text-slate-400 mb-6">{t('home.hsa_desc')}</p>

              <div className="flex items-center text-sm font-semibold text-cyan-500">
                {t('common.calculate')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Spin Card */}
          <Link href="/spin" className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all hover:bg-slate-900/80">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Fish className="w-32 h-32 text-purple-500 -rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Spin</h2>
              <p className="text-slate-400 mb-6">{t('home.spin_desc')}</p>

              <div className="flex items-center text-sm font-semibold text-purple-500">
                {t('common.calculate')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Surf Card */}
          <Link href="/surf" className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all hover:bg-slate-900/80">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Anchor className="w-32 h-32 text-orange-500 rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Surf Casting</h2>
              <p className="text-slate-400 mb-6">{t('home.surf_desc')}</p>

              <div className="flex items-center text-sm font-semibold text-orange-500">
                {t('common.calculate')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Database Link */}
        <div className="mt-12 text-center">
          <Link
            href="/database"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-all"
          >
            <Database className="w-4 h-4" />
            <span className="font-medium">{t('home.db_link')}</span>
          </Link>
        </div>

        {/* Knowledge Base Link */}
        <div className="max-w-6xl mx-auto mt-12 px-4 md:px-0">
          <Link href="/guide" className="block w-full bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-3xl hover:border-emerald-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Book className="w-64 h-64 text-emerald-500 -rotate-12 translate-x-20 -translate-y-20" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                  <Book className="w-6 h-6 text-emerald-500" /> {t('home.guide_title')}
                </h2>
                <p className="text-slate-400 max-w-xl">
                  {t('home.guide_desc')}
                </p>
              </div>
              <div className="flex items-center px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-bold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all whitespace-nowrap">
                {t('home.guide_btn')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}
