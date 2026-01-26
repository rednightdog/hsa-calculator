"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Globe, Ruler, Scale } from 'lucide-react';

export default function LanguageSelector() {
    const { language, setLanguage, unitSystem, setUnitSystem } = useLanguage();

    const languages = [
        { code: 'tr', label: 'TR', flag: '🇹🇷' },
        { code: 'en', label: 'EN', flag: '🇺🇸' },
        { code: 'fr', label: 'FR', flag: '🇫🇷' },
        { code: 'it', label: 'IT', flag: '🇮🇹' },
        { code: 'cn', label: 'CN', flag: '🇨🇳' },
    ];

    return (
        <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Language Row */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-1.5 flex items-center gap-1 shadow-lg">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={`
              px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
              ${language === lang.code
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }
            `}
                    >
                        <span className="text-sm">{lang.flag}</span>
                        <span className="hidden md:inline">{lang.label}</span>
                    </button>
                ))}
            </div>

            {/* Unit Toggle Row */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-1 flex items-center shadow-lg">
                <button
                    onClick={() => setUnitSystem('metric')}
                    className={`
              px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
              ${unitSystem === 'metric'
                            ? 'bg-slate-700 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-300'
                        }
            `}
                    title="Metric (Gram / Meter)"
                >
                    <Scale className="w-3 h-3" /> Metric (kg/m)
                </button>
                <div className="w-px h-4 bg-slate-700 mx-1"></div>
                <button
                    onClick={() => setUnitSystem('imperial')}
                    className={`
              px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5
              ${unitSystem === 'imperial'
                            ? 'bg-slate-700 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-300'
                        }
            `}
                    title="Imperial (Ounce / Feet)"
                >
                    <Ruler className="w-3 h-3" /> Imperial (oz/ft)
                </button>
            </div>
        </div>
    );
}
