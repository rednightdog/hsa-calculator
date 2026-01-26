"use client";

import { useState } from 'react';
import { tools, reels, Technology, ReelModel, Brand, ReelType } from '@/lib/reel-data';
import { Info, Check, Filter, ShoppingBag, ArrowRight, X, ChevronLeft, Scale } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

type FilterType = ReelType | 'All';

export default function ReelExpertPage() {
    const { language } = useLanguage();

    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<Brand | 'All'>('All');
    const [selectedType, setSelectedType] = useState<FilterType>('All');
    const [activeTech, setActiveTech] = useState<Technology | null>(null);

    // Filter Logic
    const filteredReels = reels.filter(reel => {
        // 1. Brand Filter
        if (selectedBrand !== 'All' && reel.brand !== selectedBrand) return false;

        // 2. Type Filter
        if (selectedType !== 'All' && !reel.types.includes(selectedType)) return false;

        // 3. Tech Match (Must have ALL selected techs)
        if (selectedTechs.length === 0) return true;
        return selectedTechs.every(techId => reel.techs.includes(techId));
    });

    const toggleTech = (id: string) => {
        if (selectedTechs.includes(id)) {
            setSelectedTechs(prev => prev.filter(t => t !== id));
        } else {
            setSelectedTechs(prev => [...prev, id]);
        }
    };

    // Helper for safe translation
    const translate = (obj: any) => obj[language] || obj['en'] || obj['tr'] || "Text not available";

    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30 pb-20">

            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6">
                        <ChevronLeft className="w-5 h-5" />
                        {language === 'tr' ? 'Ana Sayfaya Dön' : language === 'jp' ? 'ホームに戻る' : 'Back to Home'}
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-medium mb-6">
                            <Filter className="w-3 h-3" /> v2.0
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {language === 'tr' ? 'Makine Laboratuvarı' : language === 'jp' ? 'リールテクノロジーラボ' : 'Reel Lab'}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            {language === 'tr' ? 'Teknolojileri uzman gözüyle inceleyin, ihtiyacınıza en uygun makineyi bulun.' :
                                language === 'jp' ? '専門家の視点で技術を検討し、ニーズに最適なリールを見つけてください。' :
                                    'Explore technologies with an expert eye, find the reel that fits your needs.'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* LEFT COLUMN: FILTERS */}
                <div className="lg:w-1/3 space-y-8">

                    {/* PRIMARY FILTERS */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 space-y-6">

                        {/* Brand Filter */}
                        <div>
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                {language === 'tr' ? 'Marka' : 'Brand'}
                            </h3>
                            <div className="flex gap-2">
                                {(['All', 'Shimano', 'Daiwa', 'Okuma'] as const).map(brand => (
                                    <button
                                        key={brand}
                                        onClick={() => setSelectedBrand(brand)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${selectedBrand === brand
                                                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        {brand === 'All' ? (language === 'tr' ? 'Tümü' : 'All') : brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                {language === 'tr' ? 'Disiplin (Tür)' : 'Discipline'}
                            </h3>
                            <div className="flex gap-2">
                                {(['All', 'lrf', 'spin', 'surf'] as const).map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(type as FilterType)}
                                        className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${selectedType === type
                                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        {type === 'All' ? (language === 'tr' ? 'Tümü' : 'All') : type}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Technology List */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-semibold">{language === 'tr' ? 'Teknolojiler' : 'Technologies'}</h3>
                            {selectedTechs.length > 0 && (
                                <button onClick={() => setSelectedTechs([])} className="text-xs text-red-400 hover:text-red-300">
                                    {language === 'tr' ? 'Sıfırla' : 'Reset'}
                                </button>
                            )}
                        </div>

                        <div className="space-y-3">
                            {tools
                                .filter(t => selectedBrand === 'All' || t.brand === selectedBrand)
                                .map(tech => (
                                    <div
                                        key={tech.id}
                                        className={`
                      group relative p-4 rounded-xl border transition-all cursor-pointer
                      ${selectedTechs.includes(tech.id)
                                                ? 'bg-cyan-900/20 border-cyan-500/50'
                                                : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                                            }
                    `}
                                        onClick={() => toggleTech(tech.id)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 block ${tech.brand === 'Shimano' ? 'text-blue-400' :
                                                        tech.brand === 'Daiwa' ? 'text-orange-400' : 'text-emerald-400'
                                                    }`}>
                                                    {tech.brand}
                                                </span>
                                                <h4 className={`font-bold ${selectedTechs.includes(tech.id) ? 'text-white' : 'text-slate-300'}`}>
                                                    {tech.name}
                                                </h4>
                                            </div>

                                            {selectedTechs.includes(tech.id) ? (
                                                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveTech(tech);
                                                    }}
                                                    className="w-6 h-6 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-400 transition-colors"
                                                >
                                                    <Info className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">{translate(tech.summary)}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: RESULTS */}
                <div className="lg:w-2/3">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            {language === 'tr' ? 'Eşleşen Makineler' : language === 'jp' ? 'マッチングリール' : 'Matched Reels'}
                            <span className="text-slate-500 text-lg font-normal ml-2">({filteredReels.length})</span>
                        </h2>
                    </div>

                    {filteredReels.length === 0 ? (
                        <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                            <p className="text-slate-500">
                                {language === 'tr' ? 'Seçili kriterlere uygun makine bulunamadı.' : 'No reels found with selected criteria.'}
                            </p>
                            <button onClick={() => { setSelectedTechs([]); setSelectedType('All'); }} className="mt-4 text-cyan-400 hover:underline">
                                {language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredReels.map(reel => (
                                <div key={reel.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all group flex flex-col">
                                    {/* Image Area Placeholder */}
                                    <div className="h-48 bg-slate-950 flex items-center justify-center relative shrink-0">
                                        <span className="text-slate-700 font-bold text-4xl opacity-20">{reel.brand}</span>
                                        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white border border-slate-700">
                                            {reel.priceRange === 'premium' ? '👑 Premium' : reel.priceRange === 'value' ? '⚡ Performance' : '💰 Budget'}
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-300 border border-slate-700 flex items-center gap-1">
                                            <Scale className="w-3 h-3" /> {reel.weight}g
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col items-start flex-1">
                                        <div className="flex justify-between items-start w-full mb-2">
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-bold">{reel.brand}</p>
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{reel.name}</h3>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-emerald-400 mb-4 block">{reel.price}</span>

                                        <p className="text-slate-400 text-sm mb-6 h-10 line-clamp-2">{translate(reel.description)}</p>

                                        {/* Tech Chips */}
                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {reel.techs.slice(0, 3).map(tId => {
                                                const t = tools.find(tool => tool.id === tId);
                                                return t ? (
                                                    <span key={tId} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 border border-slate-700">
                                                        {t.name}
                                                    </span>
                                                ) : null;
                                            })}
                                            {reel.techs.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-500 border border-slate-700">
                                                    +{reel.techs.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <a
                                            href={reel.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-900/20"
                                        >
                                            <ShoppingBag className="w-4 h-4" /> Amazon
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* TECH DETAIL MODAL */}
            {activeTech && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setActiveTech(null)}>
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setActiveTech(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-6">
                            <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${activeTech.brand === 'Shimano' ? 'text-blue-400' :
                                    activeTech.brand === 'Daiwa' ? 'text-orange-400' : 'text-emerald-400'
                                }`}>
                                {activeTech.brand} Technology
                            </span>
                            <h2 className="text-3xl font-bold text-white mb-2">{activeTech.name}</h2>
                            <p className="text-lg text-slate-400">{translate(activeTech.summary)}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-cyan-500" /> {language === 'tr' ? 'Uzman Açıklaması' : 'Expert Explanation'}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {translate(activeTech.description)}
                                </p>
                            </div>

                            <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                                <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                    <Check className="w-4 h-4" /> {language === 'tr' ? 'Size Faydası' : 'Benefit'}
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    {translate(activeTech.benefit)}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                            <button
                                onClick={() => {
                                    toggleTech(activeTech.id);
                                    setActiveTech(null);
                                }}
                                className={`w-full py-3 rounded-xl font-bold transition-all ${selectedTechs.includes(activeTech.id)
                                        ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
                                        : 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20'
                                    }`}
                            >
                                {selectedTechs.includes(activeTech.id)
                                    ? (language === 'tr' ? 'Filtreden Çıkar' : 'Remove Filter')
                                    : (language === 'tr' ? 'Bu Özelliği Olanları Bul' : 'Filter by this Tech')}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}
