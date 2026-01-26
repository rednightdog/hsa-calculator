"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, ArrowUpDown, ExternalLink, AlertCircle } from 'lucide-react';
// Types defined locally below

// Types
type LineRecord = {
    brand: string;
    model: string;
    pe: number;
    mm: number;
    kgMin: number;
    kgMax: number;
    spoolLength: number;
    sourceUrl: string;
    independentTest?: {
        kg: number;
        sourceUrl: string;
        retrievedAt: string;
    };
};

interface LineDatabaseProps {
    data: LineRecord[];
}

export default function LineDatabase({ data }: LineDatabaseProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    // Extract unique brands
    const brands = useMemo(() => {
        const b = new Set(data.map(item => item.brand));
        return ['All', ...Array.from(b)].sort();
    }, [data]);

    // Filtering Logic
    const filteredData = useMemo(() => {
        return data.filter(item => {
            const matchesSearch =
                item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.model.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        });
    }, [data, searchTerm, selectedBrand]);

    // Sorting Logic
    const sortedData = useMemo(() => {
        if (!sortConfig) return filteredData;
        return [...filteredData].sort((a: any, b: any) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig]);

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Helper: Diff Calculation
    const calculateDiff = (record: LineRecord) => {
        if (!record.independentTest) return null;
        const manufacturerAvg = (record.kgMin + record.kgMax) / 2;
        const diff = ((record.independentTest.kg - manufacturerAvg) / manufacturerAvg) * 100;
        return diff.toFixed(1);
    };

    // Helper: Export JSON
    const downloadJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(sortedData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "pe_lines_export.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <div className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">

            {/* Controls Header */}
            <div className="p-4 border-b border-slate-700 flex flex-col md:flex-row gap-4 justify-between items-center">

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Ara: Marka, Model..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-4 py-2 text-sm text-white appearance-none cursor-pointer hover:bg-slate-750 focus:ring-2 focus:ring-cyan-500 outline-none"
                        >
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>

                    <button
                        onClick={downloadJSON}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-cyan-400 font-medium hover:bg-slate-750 hover:border-cyan-500/50 transition-all ml-auto"
                    >
                        <Download className="w-4 h-4" /> <span className="hidden sm:inline">JSON İndir</span>
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                    <thead className="bg-slate-800/80 text-slate-300 uppercase text-xs font-semibold tracking-wider">
                        <tr>
                            <th onClick={() => requestSort('brand')} className="p-4 cursor-pointer hover:text-white transition-colors group">
                                <div className="flex items-center gap-1">Marka <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100" /></div>
                            </th>
                            <th onClick={() => requestSort('model')} className="p-4 cursor-pointer hover:text-white transition-colors group">
                                <div className="flex items-center gap-1">Model <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100" /></div>
                            </th>
                            <th onClick={() => requestSort('pe')} className="p-4 cursor-pointer hover:text-white transition-colors group">
                                <div className="flex items-center gap-1">PE <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100" /></div>
                            </th>
                            <th className="p-4 text-center">Çap (mm)</th>
                            <th className="p-4 text-right">Beyan (kg)</th>
                            <th className="p-4 text-right bg-slate-800/50">Test (kg)</th>
                            <th className="p-4 text-right">Fark %</th>
                            <th className="p-4 text-center">Kaynak</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {sortedData.length > 0 ? (
                            sortedData.map((item, idx) => {
                                const diff = calculateDiff(item);
                                const diffNum = diff ? parseFloat(diff) : 0;
                                const diffColor = !diff ? 'text-slate-600' : diffNum < -10 ? 'text-red-400' : diffNum > 10 ? 'text-green-400' : 'text-slate-400';

                                return (
                                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{item.brand}</td>
                                        <td className="p-4">{item.model}</td>
                                        <td className="p-4 font-mono text-cyan-400">{item.pe}</td>
                                        <td className="p-4 text-center">{item.mm}</td>
                                        <td className="p-4 text-right font-mono">
                                            {item.kgMin === item.kgMax ? item.kgMin : `${item.kgMin}-${item.kgMax}`}
                                        </td>
                                        <td className="p-4 text-right font-mono bg-slate-800/20 text-white font-semibold">
                                            {item.independentTest ? item.independentTest.kg : <span className="text-slate-700">--</span>}
                                        </td>
                                        <td className={`p-4 text-right font-mono font-bold ${diffColor}`}>
                                            {diff ? `${diff}%` : '--'}
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                {item.sourceUrl && (
                                                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400" title="Üretici Kaynağı">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {item.independentTest?.sourceUrl && (
                                                    <a href={item.independentTest.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-400" title="Bağımsız Test Kaynağı">
                                                        <AlertCircle className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={8} className="p-8 text-center text-slate-500">
                                    Aramanızla eşleşen kayıt bulunamadı.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
                <span>Toplam {sortedData.length} kayıt gösteriliyor.</span>
                <span>Veriler bağımsız kaynaklardan derlenmiştir.</span>
            </div>
        </div>
    );
}
