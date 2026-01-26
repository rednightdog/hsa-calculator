import React from 'react';
import LineDatabase from '@/components/LineDatabase';
import { Database, Home } from 'lucide-react';
import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';

async function getData() {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/lines.json', 'utf8');
    return JSON.parse(fileContents);
}

export default async function DatabasePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30 pb-20">

            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 pt-8 pb-12 mb-8">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href="/" className="hover:text-cyan-400 flex items-center gap-1 transition-colors">
                            <Home className="w-3 h-3" /> Ana Sayfa
                        </Link>
                        <span>/</span>
                        <span className="text-white">Veri Tabanı</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                        <Database className="w-8 h-8 md:w-12 md:h-12 text-cyan-500" />
                        PE Misina Veri Tabanı
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Üretici beyanları ile laboratuvar test sonuçlarını karşılaştırın. Gerçek değerleri görün, daha iyi seçim yapın.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4">
                <LineDatabase data={data} />

                <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-xl max-w-3xl">
                    <h3 className="text-lg font-bold text-white mb-2">Nasıl Okunmalı?</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>• <span className="text-white font-medium">Beyan (kg):</span> Üreticinin kutu üzerinde yazdığı değer.</li>
                        <li>• <span className="text-white font-medium">Test (kg):</span> Bağımsız laboratuvarlarda ölçülen gerçek kopma değeri.</li>
                        <li>• <span className="text-white font-medium">Fark %:</span> (Test - Beyan) oranı. <span className="text-red-400">Kırmızı</span> ise beyan edilenden daha zayıf, <span className="text-green-400">Yeşil</span> ise daha güçlüdür.</li>
                    </ul>
                </div>
            </div>

        </main>
    );
}
