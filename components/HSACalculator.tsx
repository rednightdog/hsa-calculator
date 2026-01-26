"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, Anchor, Info, Droplets, Gauge, HelpCircle, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from '@/context/LanguageContext';
import AffiliateSection from '@/components/ui/AffiliateSection';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function HSACalculator() {
    const { t, unitSystem } = useLanguage();

    const [weight, setWeight] = useState<string>('');
    const [experience, setExperience] = useState<string>('experienced');
    const [fishWeight, setFishWeight] = useState<string>('');
    const [depth, setDepth] = useState<string>('');
    const [condition, setCondition] = useState<string>('standard');
    const [result, setResult] = useState<any>(null);
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    // Reset results when unit system changes
    useEffect(() => {
        setResult(null);
        setWeight('');
        setFishWeight('');
        setDepth('');
    }, [unitSystem]);

    // Internal Tooltips (Localized logic would go here ideally, but keeping simple for now)
    // For full i18n, these strings should also be in the dictionary.
    // I will access them via t() if they exist, or fallback.
    // Since dictionary is huge, I'm using simplified logic for now.

    const calculatePE = () => {
        let w = parseFloat(weight);

        // Convert Imperial (oz) to Metric (g)
        if (unitSystem === 'imperial') {
            w = w * 28.35;
        }

        if (!weight || isNaN(w) || w <= 0) {
            alert("Please enter a valid weight."); // TODO: Localize
            return;
        }

        // Base Calculation
        let basePE = (w * 10) / 100;

        if (w < 1) basePE = 0.15;
        else if (w >= 1 && w < 3) basePE = 0.25;
        else if (w >= 3 && w < 5) basePE = 0.4;
        else if (w >= 5 && w <= 7) basePE = 0.55;
        else if (w > 7) basePE = 0.7;

        if (experience === 'beginner') basePE += 0.1;
        if (condition === 'clear') basePE -= 0.05;

        // Depth conversion
        let d = parseFloat(depth);
        if (unitSystem === 'imperial' && !isNaN(d)) d = d * 0.3048;

        if (!isNaN(d) && d > 10) {
            basePE -= 0.05;
        }

        // Fish Weight conversion
        let fw = parseFloat(fishWeight);
        if (unitSystem === 'imperial' && !isNaN(fw)) fw = fw * 0.453;

        let bigFishWarning = false;
        if (!isNaN(fw) && fw > 2) {
            basePE += 0.1;
            bigFishWarning = true;
        }

        const standardPEs = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
        const finalPE = standardPEs.reduce((prev, curr) =>
            Math.abs(curr - basePE) < Math.abs(prev - basePE) ? curr : prev
        );

        type PEData = { kg: string; mm: string; leader: string };
        const peData: Record<number, PEData> = {
            0.1: { kg: "0.9", mm: "0.052", leader: "1.5-2 lb" },
            0.2: { kg: "1.7", mm: "0.074", leader: "2-2.5 lb" },
            0.3: { kg: "2.4", mm: "0.090", leader: "3-4 lb" },
            0.4: { kg: "3.3", mm: "0.104", leader: "4-5 lb" },
            0.5: { kg: "4.0", mm: "0.117", leader: "5-6 lb" },
            0.6: { kg: "4.8", mm: "0.128", leader: "6-7 lb" },
            0.8: { kg: "6.3", mm: "0.148", leader: "8-10 lb" }
        };

        const data = peData[finalPE] || { kg: "?", mm: "?", leader: "?" };

        let dragRatio = 0.25;
        if (finalPE < 0.4) dragRatio = 0.20;
        else if (finalPE >= 0.8) dragRatio = 0.30;
        if (bigFishWarning) dragRatio = 0.30;

        let dragKg = parseFloat(data.kg) * dragRatio;

        let reelSize = "500 - 1000";
        let rodPower = "Ultra Light (UL)";

        if (w >= 3) {
            reelSize = "2000";
            rodPower = "Light (L)";
        }

        let rodLength = "2.10m - 2.30m";
        if (!isNaN(d) && d > 5) rodLength = "2.30m+";

        // Output Formatting
        let displayDrag = "";
        let displayBreakStrength = "";
        let displayRodLength = rodLength;

        if (unitSystem === 'imperial') {
            displayDrag = (dragKg * 2.204).toFixed(1) + " lb";
            displayBreakStrength = (parseFloat(data.kg) * 2.204).toFixed(1) + " lb";
            // Rough conversion for rod string if needed, mostly static though
            if (rodLength.includes("2.10m")) displayRodLength = "6'10\" - 7'6\"";
            if (rodLength.includes("2.30m+")) displayRodLength = "7'6\"+";
        } else {
            displayDrag = (dragKg * 1000).toFixed(0) + " gr";
            displayBreakStrength = data.kg;
        }

        setResult({
            pe: finalPE,
            mm: data.mm,
            kg: displayBreakStrength,
            drag: displayDrag,
            leader: data.leader,
            reel: reelSize,
            rod: rodPower,
            rodLength: displayRodLength,
            fishWarning: bigFishWarning ? t('hsa.warning_trophy') : null
        });
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden text-white">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-center">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Calculator className="w-6 h-6" /> {t('hsa.title')}
                    </h2>
                    <p className="text-blue-100 text-sm mt-1 opacity-90">{t('hsa.subtitle')}</p>
                </div>

                <div className="p-6 space-y-6">
                    {/* Input: Weight */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Anchor className="w-4 h-4 text-cyan-400" /> {t('hsa.lure_weight')} ({unitSystem === 'imperial' ? 'oz' : 'gr'})
                        </label>
                        <input
                            type="number"
                            step={unitSystem === 'imperial' ? "0.01" : "0.1"}
                            placeholder={unitSystem === 'imperial' ? "e.g. 0.1" : "Örn: 3.5"}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-white placeholder-gray-500"
                        />
                    </div>

                    {/* Input: Target Fish */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-cyan-400" /> {t('hsa.target_fish')}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setExperience('beginner')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", experience === 'beginner' ? "bg-cyan-500/20 border-cyan-500 text-cyan-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('hsa.fish_horse_mackerel')}</button>
                            <button onClick={() => setExperience('experienced')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", experience === 'experienced' ? "bg-cyan-500/20 border-cyan-500 text-cyan-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('hsa.fish_general')}</button>
                        </div>
                    </div>

                    {/* Optional Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2">
                                ({t('common.optional')}) {t('common.target')} ({unitSystem === 'imperial' ? 'lb' : 'kg'})
                            </label>
                            <input
                                type="number"
                                step="0.5"
                                placeholder={unitSystem === 'imperial' ? "e.g. 2.0" : "Örn: 2.0"}
                                value={fishWeight}
                                onChange={(e) => setFishWeight(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-cyan-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2">
                                ({t('common.optional')}) {t('common.depth')} ({unitSystem === 'imperial' ? 'ft' : 'm'})
                            </label>
                            <input
                                type="number"
                                step="1"
                                placeholder={unitSystem === 'imperial' ? "e.g. 15" : "Örn: 5"}
                                value={depth}
                                onChange={(e) => setDepth(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-cyan-500/50"
                            />
                        </div>
                    </div>

                    <button onClick={calculatePE} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all">
                        {t('common.calculate')}
                    </button>

                    {result && (
                        <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 animation-fade-in text-gray-200">
                            {result.fishWarning && (
                                <div className="mb-4 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-xs text-yellow-200 text-center">
                                    ⚠️ {result.fishWarning}
                                </div>
                            )}
                            <div className="space-y-4">
                                <div className="text-center pb-4 border-b border-gray-700 relative">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 cursor-pointer flex justify-center items-center gap-1">
                                        {t('hsa.ideal_pe')} <HelpCircle className="w-3 h-3" />
                                    </p>
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                                        {result.pe} <span className="text-2xl text-gray-400 font-normal">PE</span>
                                    </div>
                                    <p className="text-sm text-cyan-300 mt-1 font-medium">{result.pe < 0.3 ? "Ester / Polyester" : "4x Örgü (Braid)"}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p className="text-xs text-gray-500">{t('common.breakStrength')}</p>
                                        <p className="font-semibold text-lg">{result.kg} {unitSystem === 'metric' ? 'kg' : ''}</p>
                                    </div>
                                    <div className="relative">
                                        <p className="text-xs text-gray-500 flex justify-center items-center gap-1">Lider (FC) <HelpCircle className="w-3 h-3" /></p>
                                        <p className="font-semibold text-lg text-emerald-400">{result.leader}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{t('common.drag')}</p>
                                        <p className="font-semibold text-lg text-yellow-400">{result.drag}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{t('common.diameter')}</p>
                                        <p className="font-semibold text-lg">{result.mm} mm</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center border-t border-gray-700/50 pt-4">
                                    <div>
                                        <p className="text-xs text-gray-500">Makine</p>
                                        <p className="font-semibold text-lg">{result.reel}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Kamış</p>
                                        <p className="font-semibold text-lg">{result.rod}</p>
                                        <p className="text-[10px] text-gray-400 mt-0.5">{result.rodLength}</p>
                                    </div>
                                </div>
                            </div>

                            <AffiliateSection discipline="hsa" />

                        </div>
                    )}
                </div>

                {/* Explanations */}
                {result && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 mt-6 p-4 border-t border-white/10">
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500"></div> {t('hsa.explanation_line')}</h4>
                            <p>{t('hsa.explanation_line_desc')}</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> {t('hsa.explanation_leader')}</h4>
                            <p>{t('hsa.explanation_leader_desc')}</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 col-span-1 md:col-span-2">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> {t('common.guide')}</h4>
                            <p>{t('home.guide_desc')}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
