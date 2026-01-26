"use client";

import React, { useState, useMemo } from 'react';
import { AFFILIATE_LINKS } from '@/lib/affiliates';
import { ArrowRight, Star, TrendingUp, DollarSign, Award, Anchor, Fish, Wallet, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type Discipline = 'hsa' | 'spin' | 'surf';
type Category = 'braid' | 'rod' | 'reel' | 'hook';

interface AffiliateSectionProps {
    discipline: Discipline;
}

export default function AffiliateSection({ discipline }: AffiliateSectionProps) {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState<Category>('braid');
    const [budget, setBudget] = useState<string>('');
    const [showDetails, setShowDetails] = useState(true);

    // Safety check - handled inside hooks or before render
    const data = AFFILIATE_LINKS[discipline];

    // Determine region based on language
    const region = language === 'tr' ? 'tr' : 'global';
    const currency = region === 'tr' ? '₺' : '$';

    // Calculate Set Totals
    const setTotals = useMemo(() => {
        if (!data) return { budget: 0, value: 0, premium: 0 };
        const types: ('budget' | 'value' | 'premium')[] = ['budget', 'value', 'premium'];
        const totals: Record<string, number> = {};

        types.forEach(tier => {
            let total = 0;
            // Sum up braid, rod, reel, hook for this tier in this region
            total += data.braid[tier][region].price;
            total += data.rod[tier][region].price;
            total += data.reel[tier][region].price;
            total += data.hook[tier][region].price;
            totals[tier] = total;
        });

        return totals;
    }, [data, region]);

    // Determine recommended tier based on budget
    const recommendedTier = useMemo(() => {
        if (!budget || !data) return null;
        const b = parseFloat(budget);
        if (isNaN(b) || b <= 0) return null;

        if (b >= setTotals.premium * 0.9) return 'premium'; // 10% flexibility
        if (b >= setTotals.value * 0.9) return 'value';
        return 'budget';
    }, [budget, setTotals, data]);


    const tabs: { id: Category; label: string; icon: any }[] = [
        { id: 'braid', label: 'İp & Misina', icon: Anchor },
        { id: 'reel', label: 'Makine', icon: Star },
        { id: 'rod', label: 'Kamış', icon: TrendingUp },
        { id: 'hook', label: 'İğne/Hook', icon: Fish },
    ];

    const tiers = [
        {
            id: 'budget',
            label: language === 'tr' ? 'Giriş Seviyesi' : 'Budget / Entry',
            icon: DollarSign,
            color: 'text-green-400',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20'
        },
        {
            id: 'value',
            label: language === 'tr' ? 'Fiyat / Performans' : 'Best Value',
            icon: TrendingUp,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20'
        },
        {
            id: 'premium',
            label: language === 'tr' ? 'Profesyonel' : 'Premium / Pro',
            icon: Award,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20'
        }
    ];

    // Helper to get items for the recommended set
    const recommendedSetItems = useMemo(() => {
        if (!recommendedTier || !data) return [];
        return [
            { type: 'rod', ...data.rod[recommendedTier][region], icon: TrendingUp, label: 'Kamış' },
            { type: 'reel', ...data.reel[recommendedTier][region], icon: Star, label: 'Makine' },
            { type: 'braid', ...data.braid[recommendedTier][region], icon: Anchor, label: 'İp' },
            { type: 'hook', ...data.hook[recommendedTier][region], icon: Fish, label: 'İğne' },
        ];
    }, [recommendedTier, data, region]);

    if (!data) return null;

    return (
        <div className="mt-8 pt-6 border-t border-gray-700/50">
            {/* PART 1: Standard Recommendations (Browsing) */}
            <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" /> {language === 'tr' ? 'Önerilen Ekipmanlar (Sponsorlu)' : 'Recommended Gear (Sponsored)'}
            </h3>

            {/* Tabs */}
            <div className="flex p-1 bg-gray-900/50 rounded-xl mb-4 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all
                            ${activeTab === tab.id
                                ? 'bg-gray-700 text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                            }
                        `}
                    >
                        <tab.icon className="w-3 h-3" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Browsing Grid */}
            <div className="space-y-3 mb-8">
                {tiers.map((tier) => {
                    const item = data[activeTab][tier.id as 'budget' | 'value' | 'premium'][region];
                    if (!item) return null;

                    return (
                        <a
                            key={tier.id}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                block p-3 rounded-xl border transition-all hover:scale-[1.02] group
                                ${tier.bg} ${tier.border} hover:border-opacity-50
                            `}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className={`flex items-center gap-1.5 text-xs font-bold ${tier.color}`}>
                                    <tier.icon className="w-3 h-3" />
                                    {tier.label}
                                </div>
                                <ArrowRight className={`w-3 h-3 ${tier.color} opacity-0 group-hover:opacity-100 transition-opacity -rotate-45`} />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-200 font-medium truncate pr-2 w-3/4">{item.name}</p>
                                <span className="text-[10px] text-gray-500 bg-gray-900/50 px-2 py-0.5 rounded-full">{item.price}{currency}</span>
                            </div>
                        </a>
                    );
                })}
            </div>


            {/* PART 2: Budget Assistant (Separate Block) */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 border border-gray-700/50 shadow-xl relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <h4 className="text-sm font-bold text-teal-100 mb-3 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-teal-400" />
                    {language === 'tr' ? 'Set Sihirbazı' : 'Budget Set Builder'}
                </h4>

                <div className="flex flex-col gap-4">
                    <div className="relative w-full">
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder={language === 'tr' ? 'Bütçeniz (₺)' : 'Your Budget ($)'}
                            className="w-full bg-gray-900/80 border border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-all text-white placeholder-gray-500"
                        />
                        <span className="absolute right-4 top-3 text-gray-400">{currency}</span>
                    </div>

                    {/* Result Card (Appears on Input) */}
                    {budget && recommendedTier && (
                        <div className="bg-black/20 rounded-xl p-4 border border-teal-500/30 animate-in slide-in-from-top-2 duration-300">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-1 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="w-3 h-3" />
                                        {language === 'tr' ? 'Önerilen Paket' : 'Recommended Package'}
                                    </div>
                                    <p className={`text-lg font-bold ${recommendedTier === 'premium' ? 'text-purple-400' :
                                        recommendedTier === 'value' ? 'text-blue-400' : 'text-green-400'
                                        }`}>
                                        {tiers.find(t => t.id === recommendedTier)?.label}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        ~{setTotals[recommendedTier]}{currency}
                                    </p>
                                </div>
                                {showDetails ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                            </div>

                            {/* Detailed Breakdown */}
                            {showDetails && (
                                <div className="mt-4 space-y-2 border-t border-gray-700/50 pt-3">
                                    {recommendedSetItems.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-2 rounded-lg bg-gray-800/40 hover:bg-gray-800 transition-colors group"
                                        >
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <item.icon className="w-3 h-3 text-gray-500 shrink-0" />
                                                <div className="truncate">
                                                    <span className="text-[10px] text-gray-500 block">{item.label}</span>
                                                    <span className="text-xs text-gray-200 font-medium truncate">{item.name}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-[10px] text-gray-500">{item.price}{currency}</span>
                                                <ArrowRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Upsell Logic */}
                            {recommendedTier !== 'premium' && parseFloat(budget) * 1.5 > setTotals['premium'] && (
                                <p className="text-[10px] text-gray-500 mt-3 border-t border-gray-700/50 pt-2">
                                    💡 {language === 'tr' ? 'İpucu: Biraz daha bütçe ile Profesyonel sete geçebilirsiniz.' : 'Tip: Slightly higher budget unlocks Premium gear.'}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
