"use client";

import { useState } from 'react';
import { tools, reels, Technology, ReelModel, Brand, ReelType, manufacturers } from '@/lib/reel-data';
import { Info, Check, Filter, ShoppingBag, ArrowRight, X, ChevronLeft, Scale } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageCode } from '@/lib/dictionary';

// ... (Keep existing Type and Dictionary)
type FilterType = ReelType | 'All';

// UI Dictionary for static elements
const uiTexts: Record<LanguageCode, {
    backToHome: string;
    title: string;
    subtitle: string;
    brand: string;
    discipline: string;
    technologies: string;
    reset: string;
    matchedReels: string;
    noReelsFound: string;
    clearFilters: string;
    expertExpl: string;
    benefit: string;
    removeFilter: string;
    addFilter: string;
    all: string;
    amazon: string;
    premium: string;
    performance: string;
    budget: string;
    weight: string;
}> = {
    en: {
        backToHome: "Back to Home",
        title: "Reel Laboratory",
        subtitle: "Explore technologies with an expert eye, find the reel that fits your needs.",
        brand: "Brand",
        discipline: "Discipline",
        technologies: "Technologies",
        reset: "Reset",
        matchedReels: "Matched Reels",
        noReelsFound: "No reels found with selected criteria.",
        clearFilters: "Clear Filters",
        expertExpl: "Expert Explanation",
        benefit: "Benefit",
        removeFilter: "Remove Filter",
        addFilter: "Filter by this Tech",
        all: "All",
        amazon: "Check on Amazon",
        premium: "Premium",
        performance: "Performance",
        budget: "Budget",
        weight: "Weight"
    },
    tr: {
        backToHome: "Ana Sayfaya Dön",
        title: "Makine Laboratuvarı",
        subtitle: "Teknolojileri uzman gözüyle inceleyin, ihtiyacınıza en uygun makineyi bulun.",
        brand: "Marka",
        discipline: "Disiplin (Tür)",
        technologies: "Teknolojiler",
        reset: "Sıfırla",
        matchedReels: "Eşleşen Makineler",
        noReelsFound: "Seçili kriterlere uygun makine bulunamadı.",
        clearFilters: "Filtreleri Temizle",
        expertExpl: "Uzman Açıklaması",
        benefit: "Size Faydası",
        removeFilter: "Filtreden Çıkar",
        addFilter: "Bu Özelliği Olanları Bul",
        all: "Tümü",
        amazon: "Amazon'da İncele",
        premium: "Premium",
        performance: "F/P Kralı",
        budget: "Bütçe Dostu",
        weight: "Ağırlık"
    },
    jp: {
        backToHome: "ホームに戻る",
        title: "リールテクノロジーラボ",
        subtitle: "専門家の視点で技術を検討し、ニーズに最適なリールを見つけてください。",
        brand: "ブランド",
        discipline: "釣り方",
        technologies: "テクノロジー",
        reset: "リセット",
        matchedReels: "マッチングリール",
        noReelsFound: "条件に合うリールが見つかりませんでした。",
        clearFilters: "フィルターをクリア",
        expertExpl: "専門家の解説",
        benefit: "メリット",
        removeFilter: "フィルターを解除",
        addFilter: "この技術で絞り込む",
        all: "すべて",
        amazon: "Amazonで見る",
        premium: "プレミアム",
        performance: "パフォーマンス",
        budget: "バジェット",
        weight: "重量"
    },
    it: {
        backToHome: "Torna alla Home",
        title: "Laboratorio Mulinelli",
        subtitle: "Esplora le tecnologie con occhio esperto, trova il mulinello adatto alle tue esigenze.",
        brand: "Marca",
        discipline: "Disciplina",
        technologies: "Tecnologie",
        reset: "Reimposta",
        matchedReels: "Mulinelli Corrispondenti",
        noReelsFound: "Nessun mulinello trovato con i criteri selezionati.",
        clearFilters: "Cancella Filtri",
        expertExpl: "Spiegazione Esperta",
        benefit: "Benefico",
        removeFilter: "Rimuovi Filtro",
        addFilter: "Filtra per questa Tech",
        all: "Tutti",
        amazon: "Vedi su Amazon",
        premium: "Premium",
        performance: "Performance",
        budget: "Economico",
        weight: "Peso"
    },
    fr: {
        backToHome: "Retour à l'accueil",
        title: "Laboratoire de Moulinets",
        subtitle: "Explorez les technologies avec un œil expert, trouvez le moulinet adapté à vos besoins.",
        brand: "Marque",
        discipline: "Discipline",
        technologies: "Technologies",
        reset: "Réinitialiser",
        matchedReels: "Moulinets Correspondants",
        noReelsFound: "Aucun moulinet trouvé avec les critères sélectionnés.",
        clearFilters: "Effacer les filtres",
        expertExpl: "Explication d'Expert",
        benefit: "Avantage",
        removeFilter: "Retirer le filtre",
        addFilter: "Filtrer par cette Tech",
        all: "Tous",
        amazon: "Voir sur Amazon",
        premium: "Premium",
        performance: "Performance",
        budget: "Budget",
        weight: "Poids"
    },
    cn: {
        backToHome: "返回首页",
        title: "渔轮实验室",
        subtitle: "以专家眼光探索技术，找到适合您需求的渔轮。",
        brand: "品牌",
        discipline: "钓法",
        technologies: "技术",
        reset: "重置",
        matchedReels: "匹配的渔轮",
        noReelsFound: "未找到符合选定标准的渔轮。",
        clearFilters: "清除筛选",
        expertExpl: "专家解释",
        benefit: "优势",
        removeFilter: "移除筛选",
        addFilter: "按此技术筛选",
        all: "全部",
        amazon: "在亚马逊查看",
        premium: "高端",
        performance: "高性能",
        budget: "预算",
        weight: "重量"
    }
};

export default function ReelExpertPage() {
    const { language } = useLanguage();
    const t = uiTexts[language] || uiTexts.en; // Fallback to EN

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

    const translateData = (obj: any) => obj[language] || obj['en'] || obj['tr'] || "Text not available";

    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30 pb-20">

            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6">
                        <ChevronLeft className="w-5 h-5" />
                        {t.backToHome}
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-medium mb-6">
                            <Filter className="w-3 h-3" /> v2.2
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {t.title}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            {t.subtitle}
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
                                {t.brand}
                            </h3>
                            <div className="flex gap-2 overflow-x-auto pb-2 snap-x hide-scrollbar">
                                {(['All', ...Object.keys(manufacturers)] as const).map(brand => (
                                    <button
                                        key={brand}
                                        onClick={() => setSelectedBrand(brand as Brand | 'All')}
                                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap snap-center ${selectedBrand === brand
                                            ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        {brand === 'All' ? t.all : brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                {t.discipline}
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
                                        {type === 'All' ? t.all : type}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Technology List */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-semibold">{t.technologies}</h3>
                            {selectedTechs.length > 0 && (
                                <button onClick={() => setSelectedTechs([])} className="text-xs text-red-400 hover:text-red-300">
                                    {t.reset}
                                </button>
                            )}
                        </div>

                        <div className="space-y-3">
                            {tools
                                .filter(tech => selectedBrand === 'All' || tech.brand === selectedBrand)
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
                                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">{translateData(tech.summary)}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: RESULTS */}
                <div className="lg:w-2/3">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            {t.matchedReels}
                            <span className="text-slate-500 text-lg font-normal ml-2">({filteredReels.length})</span>
                        </h2>
                    </div>

                    {filteredReels.length === 0 ? (
                        <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                            <p className="text-slate-500">
                                {t.noReelsFound}
                            </p>
                            <button onClick={() => { setSelectedTechs([]); setSelectedType('All'); }} className="mt-4 text-cyan-400 hover:underline">
                                {t.clearFilters}
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {filteredReels.map(reel => (
                                <div key={reel.id} className={`
                    border rounded-3xl overflow-hidden hover:border-slate-500 transition-all group flex flex-col relative
                    ${reel.brand === 'Shimano' ? 'bg-gradient-to-br from-blue-900/20 to-slate-900 border-blue-900/50' :
                                        reel.brand === 'Daiwa' ? 'bg-gradient-to-br from-orange-900/20 to-slate-900 border-orange-900/50' :
                                            'bg-gradient-to-br from-emerald-900/20 to-slate-900 border-emerald-900/50'}
                  `}>

                                    {/* Header: Brand Intelligence (Replaces Photo) */}
                                    <div className={`p-6 pb-4 relative overflow-hidden bg-gradient-to-br ${manufacturers[reel.brand]?.color || 'from-slate-800 to-slate-900'}`}>

                                        {/* Decorative Background Texture */}
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white select-none pointer-events-none">
                                            {manufacturers[reel.brand]?.origin === 'Japonya' ? 'JP' :
                                                manufacturers[reel.brand]?.origin === 'Almanya' ? 'DE' :
                                                    manufacturers[reel.brand]?.origin === 'ABD' ? 'USA' : 'INT'}
                                        </div>

                                        <div className="relative z-10 flex justify-between items-start">
                                            <div>
                                                <span className="inline-block px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white/90 mb-2 border border-white/10">
                                                    {manufacturers[reel.brand]?.origin}
                                                </span>
                                                <h3 className="text-2xl font-black text-white mb-1 drop-shadow-md">
                                                    {reel.brand}
                                                </h3>
                                                <p className="text-xs text-white/80 font-medium bg-black/20 px-2 py-1 rounded inline-block">
                                                    {manufacturers[reel.brand]?.category}
                                                </p>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">LRF Score</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xl font-black text-white">{manufacturers[reel.brand]?.lrfScore}</span>
                                                        <span className="text-xs text-white/50">/10</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-6 pt-4">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {reel.name}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4 border-b border-slate-800 pb-4">
                                            <span className="flex items-center gap-1 font-medium text-white">
                                                <Scale className="w-4 h-4 text-cyan-500" /> {reel.weight}g
                                            </span>
                                            <span className={`font-bold tracking-wide px-2 py-0.5 rounded flex gap-0.5 ${reel.priceRange === 'premium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                                reel.priceRange === 'value' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                                                    'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                }`}>
                                                {[...Array(3)].map((_, i) => {
                                                    const level = reel.priceRange === 'budget' ? 1
                                                        : reel.priceRange === 'value' ? 2
                                                            : 3;
                                                    return (
                                                        <span key={i} className={i < level ? 'opacity-100' : 'opacity-30'}>$</span>
                                                    );
                                                })}
                                            </span>
                                        </div>

                                        <p className="text-slate-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                                            {translateData(reel.description)}
                                        </p>
                                    </div>

                                    {/* Tech Chips Area */}
                                    <div className="px-6 pb-6 mt-auto">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-wider">
                                            {t.technologies}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {reel.techs.slice(0, 5).map(tId => {
                                                const tool = tools.find(tool => tool.id === tId);
                                                return tool ? (
                                                    <span key={tId} className="px-2 py-1 bg-slate-800/80 rounded text-[10px] text-slate-300 border border-slate-700/50">
                                                        {tool.name}
                                                    </span>
                                                ) : null;
                                            })}
                                            {reel.techs.length > 5 && (
                                                <span className="px-2 py-1 bg-slate-800/80 rounded text-[10px] text-slate-500 border border-slate-700/50">
                                                    +{reel.techs.length - 5}
                                                </span>
                                            )}
                                        </div>

                                        <a
                                            href={reel.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:-translate-y-0.5 transition-all"
                                        >
                                            <ShoppingBag className="w-5 h-5" /> {t.amazon}
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
                            <p className="text-lg text-slate-400">{translateData(activeTech.summary)}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-cyan-500" /> {t.expertExpl}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {translateData(activeTech.description)}
                                </p>
                            </div>

                            <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                                <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                    <Check className="w-4 h-4" /> {t.benefit}
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    {translateData(activeTech.benefit)}
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
                                    ? t.removeFilter
                                    : t.addFilter}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}
