"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionary, LanguageCode, translations } from '@/lib/dictionary';

type UnitSystem = 'metric' | 'imperial';

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    unitSystem: UnitSystem;
    setUnitSystem: (system: UnitSystem) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<LanguageCode>('tr');
    const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');

    // Initial setup: Default to Imperial only if English is selected initially AND user hasn't chosen yet
    // For now, we just let them stay independent. 
    // If user switches to EN, maybe Suggest Imperial? No, let's keep it manual as requested.

    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = translations[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation key not found: ${path} for language ${language}`);
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, unitSystem, setUnitSystem, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
