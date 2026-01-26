"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, Anchor, Info, Droplets, Gauge, HelpCircle, Fish, Waves, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from '@/context/LanguageContext';
import AffiliateSection from '@/components/ui/AffiliateSection';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function SurfCalculator() {
    const { t, unitSystem } = useLanguage();

    const [weight, setWeight] = useState<string>('');
    const [target, setTarget] = useState<string>('bluefish');
    const [fishWeight, setFishWeight] = useState<string>('');
    const [depth, setDepth] = useState<string>('');
    const [result, setResult] = useState<any>(null);
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    // Reset on unit change
    useEffect(() => {
        setResult(null);
        setWeight('');
        setFishWeight('');
        setDepth('');
    }, [unitSystem]);

    const calculatePE = () => {
        let w = parseFloat(weight);
        // Conversion: oz -> g
        if (unitSystem === 'imperial') w = w * 28.35;

        if (!weight || isNaN(w) || w <= 0) {
            alert("Lütfen geçerli bir gramaj girin."); // TODO Localize
            return;
        }

        // Surf Logic (Base)
        let finalPE = 1.0;
        if (w <= 100) finalPE = 0.8;
        else if (w <= 150) finalPE = 1.0;
        else if (w <= 200) finalPE = 1.2;
        else finalPE = 1.5;

        // Shock Leader Calculation
        const ounces = w / 28.35; // True ounce calculation
        const requiredShockLb = Math.ceil(ounces * 10);
        const requiredShockKg = (requiredShockLb * 0.45).toFixed(1);
        let shockLeader = `${requiredShockLb} lb (${requiredShockKg} kg)`;
        if (unitSystem === 'imperial') {
            shockLeader = `${requiredShockLb} lb`;
        }

        let shockLeaderDetail = `0.20mm - 0.57mm Tapered`;
        if (requiredShockLb <= 30) shockLeaderDetail = "0.18mm - 0.45mm Tapered";
        else if (requiredShockLb >= 60) shockLeaderDetail = "0.26mm - 0.57mm Tapered";

        // Rod & Reel Logic
        let reelSize = "6000 - 8000";
        let rodPower = "4.20m (100-200g)";
        if (unitSystem === 'imperial') rodPower = "14ft (3-7oz)";

        if (w > 150) {
            reelSize = "10000 - 14000 (Big Pit)";
            rodPower = "4.20m - 4.50m (200-250g)";
            if (unitSystem === 'imperial') rodPower = "14ft - 15ft (7-9oz)";
        }

        let d = parseFloat(depth);
        if (unitSystem === 'imperial') d = d * 0.3048;

        if (!isNaN(d) && d > 10) {
            // rodPower += " (Long Cast)";
        }

        // Database
        type PEData = { kg: string; mm: string; };
        const peData: Record<number, PEData> = {
            0.6: { kg: "5.0", mm: "0.128" },
            0.8: { kg: "6.5", mm: "0.148" },
            1.0: { kg: "9.0", mm: "0.165" },
            1.2: { kg: "11.0", mm: "0.185" },
            1.5: { kg: "14.0", mm: "0.205" },
            2.0: { kg: "18.0", mm: "0.235" },
            2.5: { kg: "24.0", mm: "0.260" }
        };

        const nearestPE = Object.keys(peData).reduce((prev, curr) =>
            Math.abs(parseFloat(curr) - finalPE) < Math.abs(parseFloat(prev) - finalPE) ? curr : prev
        );
        const data = peData[parseFloat(nearestPE)];
        const dragVal = (parseFloat(data.kg) * 1000 * 0.35).toFixed(0);
        const dragKg = parseFloat(data.kg) * 0.35;

        // Output formatting
        let displayDrag = "";
        let displayBreakStrength = "";

        if (unitSystem === 'imperial') {
            displayDrag = (dragKg * 2.204).toFixed(1) + " lb";
            displayBreakStrength = (parseFloat(data.kg) * 2.204).toFixed(1) + " lb";
        } else {
            displayDrag = dragVal + " gr";
            displayBreakStrength = data.kg + " kg";
        }

        setResult({
            pe: nearestPE,
            mm: data.mm,
            kg: displayBreakStrength,
            drag: displayDrag,
            shockLeader: shockLeader,
            shockLeaderDetail: shockLeaderDetail,
            reel: reelSize,
            rod: rodPower
        });
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden text-white">
                {/* Header - Orange for Surf */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 text-center">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Waves className="w-6 h-6" /> {t('surf.title')}
                    </h2>
                    <p className="text-orange-100 text-sm mt-1 opacity-90">{t('surf.subtitle')}</p>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Anchor className="w-4 h-4 text-orange-400" /> {t('surf.lead_weight')} ({unitSystem === 'imperial' ? 'oz' : 'gr'})
                        </label>
                        <input
                            type="number"
                            step={unitSystem === 'imperial' ? "0.5" : "5"}
                            placeholder={unitSystem === 'imperial' ? "e.g. 4.0" : "Örn: 125"}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-white placeholder-gray-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Fish className="w-4 h-4 text-orange-400" /> {t('surf.target_fish')}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setTarget('bluefish')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", target === 'bluefish' ? "bg-orange-500/20 border-orange-500 text-orange-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('surf.fish_bluefish')}</button>
                            <button onClick={() => setTarget('bream')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", target === 'bream' ? "bg-orange-500/20 border-orange-500 text-orange-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('surf.fish_bream')}</button>
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
                                placeholder={unitSystem === 'imperial' ? "e.g. 3" : "Örn: 2.0"}
                                value={fishWeight}
                                onChange={(e) => setFishWeight(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-orange-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2">
                                ({t('common.optional')}) {t('common.depth')} ({unitSystem === 'imperial' ? 'ft' : 'm'})
                            </label>
                            <input
                                type="number"
                                step="1"
                                placeholder={unitSystem === 'imperial' ? "e.g. 25" : "Örn: 5"}
                                value={depth}
                                onChange={(e) => setDepth(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-orange-500/50"
                            />
                        </div>
                    </div>

                    <button onClick={calculatePE} className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all">
                        {t('common.calculate')}
                    </button>

                    {result && (
                        <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 animation-fade-in text-gray-200">
                            <div className="space-y-4">
                                <div className="text-center pb-4 border-b border-gray-700 relative">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 cursor-pointer flex justify-center items-center gap-1">
                                        {t('hsa.ideal_pe')} <HelpCircle className="w-3 h-3" />
                                    </p>
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
                                        {result.pe} <span className="text-2xl text-gray-400 font-normal">PE</span>
                                    </div>
                                    <p className="text-sm text-orange-300 mt-1 font-medium">8x Surf Braid</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="relative col-span-2 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
                                        <p className="text-xs text-gray-500 flex justify-center items-center gap-1 cursor-pointer mb-1">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> {t('surf.shock_leader')} <HelpCircle className="w-3 h-3" />
                                        </p>
                                        <p className="font-bold text-xl text-white">{result.shockLeader}</p>
                                        <p className="text-xs text-orange-300">{result.shockLeaderDetail}</p>
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
                                        <p className="text-xs text-gray-500">Reel</p>
                                        <p className="font-semibold text-lg">{result.reel}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Rod</p>
                                        <p className="font-semibold text-lg">{result.rod}</p>
                                    </div>
                                </div>
                            </div>

                            <AffiliateSection discipline="surf" />
                        </div>
                    )}
                </div>

                {/* Surf Explanations */}
                {result && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 mt-6 p-4 border-t border-white/10">
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div> {t('surf.explanation_thin')}</h4>
                            <p>{t('surf.explanation_thin_desc')}</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> {t('surf.explanation_shock')}</h4>
                            <p>{t('surf.explanation_shock_desc')}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
