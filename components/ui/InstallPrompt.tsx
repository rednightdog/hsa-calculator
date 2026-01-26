"use client";

import React, { useState, useEffect } from 'react';
import { Download, X, Share, SquareArrowUp } from 'lucide-react';

export default function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false);
    const [showplugin, setShowPlugin] = useState(false);

    useEffect(() => {
        // Simple iOS detection
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
        const isStandalone = (window.navigator as any).standalone; // Check if already installed

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
            // Show prompt after 3 seconds
            setTimeout(() => setShowPlugin(true), 3000);
        }
    }, []);

    if (!showplugin || !isIOS) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-700 p-4 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-bottom-5">
            <button onClick={() => setShowPlugin(false)} className="absolute top-2 right-2 text-slate-500 hover:text-white">
                <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">Uygulamayı Yükle (iOS)</h4>
                    <p className="text-xs text-slate-400 mb-2">En iyi deneyim için <strong>Safari</strong> kullanın.</p>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                        1. <SquareArrowUp className="w-3 h-3" /> &quot;Paylaş&quot; butonuna basın
                    </div>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium mt-1">
                        2. Menüden &quot;Ana Ekrana Ekle&quot; seçin
                    </div>
                </div>
            </div>
        </div>
    );
}
