"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, Anchor, Info, Droplets, Gauge, HelpCircle, Fish, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from '@/context/LanguageContext';
import AffiliateSection from '@/components/ui/AffiliateSection';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function SpinCalculator() {
    const { t, unitSystem } = useLanguage();

    const [weight, setWeight] = useState<string>('');
    const [target, setTarget] = useState<string>('seabass');
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

        // Spin Logic (Typical 5g - 60g range)
        let finalPE = 0.6;

        if (w <= 10) finalPE = 0.6;
        else if (w > 10 && w <= 20) finalPE = 0.8;
        else if (w > 20 && w <= 30) finalPE = 1.0;
        else if (w > 30 && w <= 45) finalPE = 1.2;
        else if (w > 45 && w <= 60) finalPE = 1.5;
        else if (w > 60) finalPE = 2.0;

        // Modifiers based on target fish
        if (target === 'bluefish') finalPE += 0.2;
        else if (target === 'barracuda') finalPE += 0.2;

        // Fish Weight Modifier
        let fishWarning = "";
        let dragMultiplier = 0.30; // Default 30%

        let fw = parseFloat(fishWeight);
        if (unitSystem === 'imperial' && !isNaN(fw)) fw = fw * 0.453; // lb -> kg

        if (!isNaN(fw) && fw > 4) {
            finalPE += 0.2; // Bump PE for trophy fish
            dragMultiplier = 0.35; // Tighter drag
            fishWarning = t('hsa.warning_trophy');
        } else if (!isNaN(fw) && fw > 7) {
            finalPE += 0.5;
            dragMultiplier = 0.40;
            fishWarning = t('spin.explanation_tooth_desc'); // Close enough generic warning
        }

        // Rod & Reel Logic (Spin)
        let reelSize = "2500 - 3000";
        let rodPower = "Medium Light (ML)";
        let rodLength = "2.40m - 2.70m";

        if (w > 20 && w <= 30) {
            reelSize = "3000 - 4000";
            rodPower = "Medium (M)";
        } else if (w > 30 && w <= 50) {
            reelSize = "4000";
            rodPower = "Medium Heavy (MH)";
            rodLength = "2.70m";
        } else if (w > 50) {
            reelSize = "5000";
            rodPower = "Heavy (H)";
            rodLength = "2.70m - 2.90m";
            if (depth && parseFloat(depth) > 20) rodLength = "2.90m (Shore Jig)";
        }

        // Depth Logic
        let d = parseFloat(depth);
        if (unitSystem === 'imperial' && !isNaN(d)) d = d * 0.3048; // ft -> m

        if (!isNaN(d) && d > 20) {
            // Deep water logic handled above somewhat or confirms heavy gear
        }

        // Line Type Logic
        let lineType = "8x " + t('spin.explanation_braid').split(' ')[0]; // Hacky but works for now
        if (finalPE <= 0.8) lineType = "4x / 8x " + t('spin.explanation_braid').split(' ')[0];

        // Leader Type Logic
        let leaderType = "Fluorocarbon (FC)";
        if (target === 'bluefish') leaderType = "FC + Wire";

        // Database for Spin Specs
        type PEData = { kg: string; mm: string; leader: string };
        const peData: Record<number, PEData> = {
            0.6: { kg: "5.0", mm: "0.128", leader: "8-10 lb" },
            0.8: { kg: "6.5", mm: "0.148", leader: "10-12 lb" },
            1.0: { kg: "9.0", mm: "0.165", leader: "14-16 lb" },
            1.2: { kg: "11.0", mm: "0.185", leader: "16-20 lb" },
            1.5: { kg: "14.0", mm: "0.205", leader: "20-25 lb" },
            1.7: { kg: "16.0", mm: "0.215", leader: "25-30 lb" },
            2.0: { kg: "18.0", mm: "0.235", leader: "30-35 lb" },
            2.2: { kg: "20.0", mm: "0.245", leader: "35-40 lb" },
            2.5: { kg: "24.0", mm: "0.260", leader: "40+ lb" },
            3.0: { kg: "28.0", mm: "0.280", leader: "50+ lb" }
        };

        const availablePEs = Object.keys(peData).map(parseFloat);
        const nearestPE = availablePEs.reduce((prev, curr) =>
            Math.abs(curr - finalPE) < Math.abs(prev - finalPE) ? curr : prev
        );

        const data = peData[nearestPE] || peData[2.5];
        const dragVal = (parseFloat(data.kg) * 1000 * dragMultiplier).toFixed(0);
        let dragKg = parseFloat(data.kg) * dragMultiplier;

        // Output formatting
        let displayDrag = "";
        let displayBreakStrength = "";
        let displayRodLength = rodLength;

        if (unitSystem === 'imperial') {
            displayDrag = (dragKg * 2.204).toFixed(1) + " lb";
            displayBreakStrength = (parseFloat(data.kg) * 2.204).toFixed(1) + " lb";
            // Rough conversion logic for rod text
            if (rodLength.includes("2.40m")) displayRodLength = "7'10\" - 8'10\"";
            if (rodLength.includes("2.70m")) displayRodLength = "8'10\" - 9'6\"";
            if (rodLength.includes("2.90m")) displayRodLength = "9'6\"+";
        } else {
            displayDrag = dragVal + " gr";
            displayBreakStrength = data.kg + " kg";
        }

        setResult({
            pe: nearestPE,
            mm: data.mm,
            kg: displayBreakStrength,
            drag: displayDrag,
            leader: data.leader,
            leaderType: leaderType,
            reel: reelSize,
            rod: rodPower,
            rodLength: displayRodLength,
            lineType: lineType,
            fishWarning: fishWarning
        });
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden text-white">
                {/* Header - Different Color for Spin */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Fish className="w-6 h-6" /> {t('spin.title')}
                    </h2>
                    <p className="text-indigo-100 text-sm mt-1 opacity-90">{t('spin.subtitle')}</p>
                </div>

                <div className="p-6 space-y-6">
                    {/* Input: Weight */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Anchor className="w-4 h-4 text-purple-400" /> {t('spin.lure_weight')} ({unitSystem === 'imperial' ? 'oz' : 'gr'})
                        </label>
                        <input
                            type="number"
                            step={unitSystem === 'imperial' ? "0.1" : "1"}
                            placeholder={unitSystem === 'imperial' ? "e.g. 0.5" : "Örn: 15"}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-white placeholder-gray-500"
                        />
                    </div>

                    {/* Input: Target Fish */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Fish className="w-4 h-4 text-purple-400" /> {t('spin.target_fish')}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setTarget('seabass')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", target === 'seabass' ? "bg-purple-500/20 border-purple-500 text-purple-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('spin.fish_seabass')}</button>
                            <button onClick={() => setTarget('bluefish')} className={cn("py-2 px-3 rounded-lg text-sm border transition-all", target === 'bluefish' ? "bg-purple-500/20 border-purple-500 text-purple-300" : "bg-gray-800/40 border-transparent hover:bg-gray-800")}>{t('spin.fish_bluefish')}</button>
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
                                placeholder={unitSystem === 'imperial' ? "e.g. 5" : "Örn: 3.5"}
                                value={fishWeight}
                                onChange={(e) => setFishWeight(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 flex items-center gap-2">
                                ({t('common.optional')}) {t('common.depth')} ({unitSystem === 'imperial' ? 'ft' : 'm'})
                            </label>
                            <input
                                type="number"
                                step="1"
                                placeholder={unitSystem === 'imperial' ? "e.g. 20" : "Örn: 15"}
                                value={depth}
                                onChange={(e) => setDepth(e.target.value)}
                                className="w-full bg-gray-900/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-500/50"
                            />
                        </div>
                    </div>

                    <button onClick={calculatePE} className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-all">
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
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
                                        {result.pe} <span className="text-2xl text-gray-400 font-normal">PE</span>
                                    </div>
                                    <p className="text-sm text-purple-300 mt-1 font-medium">{result.lineType}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p className="text-xs text-gray-500">{t('common.breakStrength')}</p>
                                        <p className="font-semibold text-lg">{result.kg}</p>
                                    </div>
                                    <div className="relative">
                                        <p className="text-xs text-gray-500 flex justify-center items-center gap-1">Lider / Şok <HelpCircle className="w-3 h-3" /></p>
                                        <p className="font-semibold text-lg text-emerald-400">{result.leader}</p>
                                        <p className="text-[10px] text-emerald-500/80">{result.leaderType}</p>
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
                                        <p className="text-[10px] text-gray-400 mt-0.5">{result.rodLength}</p>
                                    </div>
                                </div>
                            </div>

                            <AffiliateSection discipline="spin" />
                        </div>
                    )}
                </div>

                {/* Spin Explanations */}
                {result && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 mt-6 p-4 border-t border-white/10">
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> {t('spin.explanation_braid')}</h4>
                            <p>{t('spin.explanation_braid_desc')}</p>
                        </div>

                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> {t('spin.explanation_rod')}</h4>
                            <p>{t('spin.explanation_rod_desc')}</p>
                        </div>

                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> {t('common.drag')} (%30)</h4>
                            <p>Drag setting ~30% of line strength.</p>
                        </div>

                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> {t('spin.explanation_tooth')}</h4>
                            <p>{t('spin.explanation_tooth_desc')}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
