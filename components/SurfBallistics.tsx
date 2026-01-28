"use client";

import React, { useState, useEffect } from 'react';
import { Target, Wind, Zap, Gauge, ArrowUpRight, Award, Layers, AlertTriangle, Activity, Database, Smartphone } from 'lucide-react';
import {
    SurfPhysicsV2,
    SurfSimulationInput,
    ROD_DB,
    REEL_DB,
    GUIDE_DB,
    SINKER_DB,
    KNOT_DB,
    CASTING_TECHNIQUE_DB,
    SimulationResult
} from '@/lib/surf-logic';
import { SURF_LOCATIONS, WeatherData } from '@/lib/weather-data';
import { SurfAICoach, AIRecommendation } from '@/lib/ai-coach';
import { useLanguage } from '@/context/LanguageContext';

export default function SurfBallistics() {
    const { t } = useLanguage();
    // Input State
    const [rodModel, setRodModel] = useState<string>(ROD_DB[0].model);
    const [reelModel, setReelModel] = useState<string>(REEL_DB[0].model);
    const [guideMaterial, setGuideMaterial] = useState<string>(GUIDE_DB[0].material);
    const [sinkerShape, setSinkerShape] = useState<string>(SINKER_DB[0].shape);
    const [knotType, setKnotType] = useState<string>(KNOT_DB[0].type);
    const [baitType, setBaitType] = useState<string>('none'); // New V4.2 State

    // Physics Parameters
    const [rodLength, setRodLength] = useState<number>(4.20);
    const [weight, setWeight] = useState<number>(150);
    const [lineDiameter, setLineDiameter] = useState<number>(0.16);
    const [leaderThickness, setLeaderThickness] = useState<number>(0.40); // Shock Leader mm
    const [leaderMaterial, setLeaderMaterial] = useState<string>("Fluorocarbon");

    const [castingAngle, setCastingAngle] = useState<number>(40);
    const [windSpeed, setWindSpeed] = useState<number>(20);
    const [windAngle, setWindAngle] = useState<number>(90); // Side wind default
    const [castingTechnique, setCastingTechnique] = useState<string>("Standard Cast");

    const [result, setResult] = useState<SimulationResult | null>(null);
    const [isJsonOpen, setIsJsonOpen] = useState(false);

    // Weather Integration
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isLoadingWeather, setIsLoadingWeather] = useState(false);

    // AI Assistant
    const [aiRecommendations, setAiRecommendations] = useState<AIRecommendation[]>([]);
    const [targetDistance, setTargetDistance] = useState<number | null>(null);



    // Weather Integration Functions
    const fetchWeather = async () => {
        if (!selectedLocation) {
            alert(t('ballistics.alert_loc'));
            return;
        }

        setIsLoadingWeather(true);
        try {
            const response = await fetch(`/api/weather?location=${encodeURIComponent(selectedLocation)}`);
            const data = await response.json();

            if (response.ok) {
                setWeatherData(data);
                alert(`✅ ${data.location} ${t('ballistics.alert_weather_ok')}`);
            } else {
                alert(`❌ ${t('ballistics.alert_weather_err')}: ${data.error}`);
            }
        } catch (error) {
            alert(`❌ ${t('ballistics.alert_weather_err')}`);
        } finally {
            setIsLoadingWeather(false);
        }
    };

    const applyWeatherData = () => {
        if (!weatherData) {
            alert(t('ballistics.alert_weather_err'));
            return;
        }

        setWindSpeed(weatherData.wind.speed);
        setWindAngle(weatherData.wind.direction);
        alert(`🌬️ ${t('ballistics.alert_wind_applied')} ${weatherData.wind.speed} km/h ${weatherData.wind.directionName}`);
    };

    // Real-time Calculation Effect
    useEffect(() => {
        const input: SurfSimulationInput = {
            rodModel,
            reelModel,
            guideMaterial,
            sinkerShape,
            knotType,
            baitType: baitType as 'standard' | 'clipped' | 'none',
            leaderMaterial,
            leaderThickness,
            castingTechnique,
            rodLength,
            weight,
            lineDiameter,
            castingAngle,
            windSpeed,
            windAngle
        };

        const res = SurfPhysicsV2.calculatePerformance(input);
        setResult(res);

        // Generate AI Recommendations
        const currentSetup = {
            castingTechnique,
            lineDiameter,
            guideMaterial,
            knotType,
            sinkerShape,
            leaderThickness,
            weight,
            castingAngle
        };

        const recommendations = SurfAICoach.getAllRecommendations(
            res.ballistics.distance_meters,
            targetDistance,
            currentSetup,
            res,
            weatherData
        );
        setAiRecommendations(recommendations);
    }, [rodModel, reelModel, guideMaterial, sinkerShape, knotType, baitType, leaderMaterial, leaderThickness, castingTechnique, rodLength, weight, lineDiameter, castingAngle, windSpeed, windAngle]);

    return (
        <div className="w-full max-w-5xl mx-auto mt-8 p-1 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-slate-700/50 shadow-2xl overflow-hidden font-sans">

            {/* Header */}
            <div className="bg-slate-950/50 p-6 border-b border-slate-700/50 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Database className="w-5 h-5 text-cyan-400" />
                        {t('ballistics.title')}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">{t('ballistics.subtitle')}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-200 uppercase">{t('ballistics.mobile_ready')}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

                {/* LEFT COLUMN: Database & Inputs */}
                <div className="lg:col-span-7 p-6 md:p-8 space-y-8 bg-slate-900/40">

                    {/* Equipment Database Selection */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Database className="w-3 h-3" /> {t('ballistics.db_title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.rod_model')}</label>
                                <select
                                    value={rodModel}
                                    onChange={(e) => setRodModel(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                >
                                    {ROD_DB.map(r => (
                                        <option key={r.model} value={r.model}>{r.brand} - {r.model} (M={r.modulus_k})</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.reel_tech')}</label>
                                <select
                                    value={reelModel}
                                    onChange={(e) => setReelModel(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                >
                                    {REEL_DB.map(r => (
                                        <option key={r.model} value={r.model}>{r.brand} - {r.tech_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.guide_mat')}</label>
                                <select
                                    value={guideMaterial}
                                    onChange={(e) => setGuideMaterial(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                >
                                    {GUIDE_DB.map(g => (
                                        <option key={g.material} value={g.material}>{g.material} (f={g.friction_f})</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.sinker_shape')}</label>
                                <select
                                    value={sinkerShape}
                                    onChange={(e) => setSinkerShape(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                >
                                    {SINKER_DB.map(s => (
                                        <option key={s.shape} value={s.shape}>{s.shape} (Cd={s.drag_cd})</option>
                                    ))}
                                </select>
                            </div>

                            {/* NEW V4.2: Bait Type Selector */}
                            <div className="space-y-2">
                                <label className="text-xs text-slate-400 flex items-center gap-1 text-orange-400 font-bold">
                                    <Layers className="w-3 h-3" /> {t('ballistics.bait_factor')}
                                </label>
                                <select
                                    value={baitType}
                                    onChange={(e) => setBaitType(e.target.value)}
                                    className="w-full bg-slate-800 border border-orange-900/50 rounded-lg px-3 py-2 text-white text-xs focus:border-orange-500 outline-none"
                                >
                                    <option value="none">{t('ballistics.bait_none')}</option>
                                    <option value="clipped">{t('ballistics.bait_clipped')}</option>
                                    <option value="standard">{t('ballistics.bait_std')}</option>
                                </select>
                            </div>

                            {/* New V4: Shock Leader & Knot */}
                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.knot_type')}</label>
                                <select
                                    value={knotType}
                                    onChange={(e) => setKnotType(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                >
                                    {KNOT_DB.map(k => (
                                        <option key={k.type} value={k.type}>{k.type} (Eff: %{(k.efficiency * 100).toFixed(0)})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-slate-400">{t('ballistics.shock_leader')}</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={leaderThickness}
                                    onChange={(e) => setLeaderThickness(parseFloat(e.target.value))}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-cyan-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-800/80"></div>

                    {/* Physics Parameters */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Target className="w-3 h-3" /> {t('ballistics.physics_title')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.rod_len')}</label>
                                <input type="number" step="0.10" value={rodLength} onChange={e => setRodLength(parseFloat(e.target.value))} className="w-full bg-black/20 border border-slate-700 rounded px-2 py-1.5 text-white text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.weight')}</label>
                                <input type="number" step="5" value={weight} onChange={e => setWeight(parseFloat(e.target.value))} className="w-full bg-black/20 border border-slate-700 rounded px-2 py-1.5 text-white text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.line_dia')}</label>
                                <input type="number" step="0.01" value={lineDiameter} onChange={e => setLineDiameter(parseFloat(e.target.value))} className="w-full bg-black/20 border border-slate-700 rounded px-2 py-1.5 text-white text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.angle')}</label>
                                <input type="number" value={castingAngle} onChange={e => setCastingAngle(parseFloat(e.target.value))} className="w-full bg-black/20 border border-slate-700 rounded px-2 py-1.5 text-white text-sm" />
                            </div>
                            <div className="space-y-1 col-span-2 md:col-span-4">
                                <label className="text-[10px] text-slate-400 uppercase flex items-center gap-1 text-green-400">
                                    <Target className="w-3 h-3" /> {t('ballistics.target_dist')}
                                </label>
                                <input
                                    type="number"
                                    placeholder={t('common.optional')}
                                    value={targetDistance || ''}
                                    onChange={e => setTargetDistance(e.target.value ? parseFloat(e.target.value) : null)}
                                    className="w-full bg-green-950/20 border border-green-900/30 rounded px-2 py-1.5 text-white text-sm outline-none placeholder:text-slate-600 focus:border-green-500/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-1 col-span-2 md:col-span-4">
                                <label className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                                    <Award className="w-3 h-3 text-yellow-500" /> {t('ballistics.cast_tech')}
                                </label>
                                <select
                                    value={castingTechnique}
                                    onChange={e => setCastingTechnique(e.target.value)}
                                    className="w-full bg-black/20 border border-slate-700 rounded px-2 py-1.5 text-white text-sm outline-none"
                                >
                                    {CASTING_TECHNIQUE_DB.map(t => (
                                        <option key={t.name} value={t.name}>
                                            {t.name} {t.velocity_multiplier > 1.0 ? `(+${((t.velocity_multiplier - 1) * 100).toFixed(0)}%)` : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Weather Integration Card */}
                    <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/80 p-4 rounded-xl border border-blue-800/30">
                        <h3 className="text-xs font-bold text-blue-300 uppercase tracking-widest flex items-center gap-2 mb-3">
                            <Wind className="w-3 h-3" /> {t('ballistics.weather_title')}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.search_loc')}</label>
                                <input
                                    type="text"
                                    placeholder="Enter city..."
                                    value={selectedLocation}
                                    onChange={e => setSelectedLocation(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-white text-xs outline-none"
                                    onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-400 uppercase">{t('ballistics.get_data')}</label>
                                <button
                                    onClick={fetchWeather}
                                    disabled={isLoadingWeather || !selectedLocation}
                                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
                                >
                                    {isLoadingWeather ? t('ballistics.loading') : `🌤️ ${t('ballistics.get_data')}`}
                                </button>
                            </div>
                        </div>

                        {weatherData && (
                            <div className="mt-3 p-3 bg-black/30 rounded-lg border border-blue-900/50">
                                <div className="grid grid-cols-3 gap-2 text-center mb-2">
                                    <div>
                                        <div className="text-[10px] text-slate-400">{t('ballistics.wind')}</div>
                                        <div className="text-sm font-bold text-cyan-400">{weatherData.wind.speed} km/h</div>
                                        <div className="text-[10px] text-slate-500">{weatherData.wind.directionName}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400">{t('ballistics.temp')}</div>
                                        <div className="text-sm font-bold text-orange-400">{weatherData.temperature}°C</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400">{t('ballistics.humidity')}</div>
                                        <div className="text-sm font-bold text-blue-400">{weatherData.humidity}%</div>
                                    </div>
                                </div>
                                <button
                                    onClick={applyWeatherData}
                                    className="w-full bg-green-600 hover:bg-green-500 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
                                >
                                    ✅ {t('ballistics.apply_wind')}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Environmental Matrix Inputs */}
                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-400 uppercase flex items-center gap-1"><Wind className="w-3 h-3" /> {t('ballistics.wind_speed')} (km/h)</label>
                                <input
                                    type="range"
                                    min="0" max="60"
                                    value={windSpeed}
                                    onChange={e => setWindSpeed(parseInt(e.target.value))}
                                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="text-right text-xs text-cyan-400 font-mono font-bold">{windSpeed} km/h</div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-400 uppercase flex items-center gap-1"><Target className="w-3 h-3" /> {t('ballistics.wind_angle')}</label>
                                <select
                                    value={windAngle}
                                    onChange={e => setWindAngle(parseInt(e.target.value))}
                                    className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-white text-xs outline-none"
                                >
                                    <option value="0">0° - Tailwind</option>
                                    <option value="90">90° - Side</option>
                                    <option value="180">180° - Headwind</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Visual Output & JSON Report */}
                <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-l border-slate-800 relative flex flex-col">

                    {/* 1. SCORE CARD (Top) */}
                    <div className="flex-none p-6 flex flex-col justify-center items-center text-center relative overflow-hidden border-b border-slate-800">
                        <div className="absolute inset-0 bg-cyan-500/5 pattern-grid-lg opacity-20"></div>
                        <div className="relative z-10">
                            <div className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-2xl">
                                {result?.ballistics.distance_meters.toFixed(0)}
                                <span className="text-2xl md:text-3xl text-slate-600 align-top ml-1 opacity-50">m</span>
                            </div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${result?.ballistics.efficiency_rating.includes('A') ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                                result?.ballistics.efficiency_rating.includes('B') ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 'bg-red-500/10 border-red-500/30 text-red-400'
                                }`}>
                                <Award className="w-3 h-3" />
                                <span className="text-xs font-bold tracking-widest">{t('ballistics.efficiency')}: {result?.ballistics.efficiency_rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. TRAJECTORY CHART (Middle) */}
                    <div className="flex-none h-[180px] relative border-b border-slate-800 bg-black/40 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="trajectoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                                </linearGradient>
                            </defs>
                            <polyline
                                points={result?.ballistics.trajectory_points.map(p => `${(p.x / (result?.ballistics.distance_meters || 1)) * 100},${50 - (p.y * 0.8)}`).join(' ')}
                                fill="none"
                                stroke="url(#trajectoryGradient)"
                                strokeWidth="0.5"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                        <div className="absolute bottom-2 left-2 text-[10px] text-slate-600 font-mono">{t('ballistics.trajectory')}</div>
                        <div className="absolute top-2 right-2 text-[10px] text-cyan-400 font-mono">v₀ = {result?.ballistics.exit_velocity_ms}m/s</div>
                    </div>

                    {/* 3. METRICS GRID */}
                    <div className="grid grid-cols-2 bg-black/20 border-b border-slate-800">
                        <div className="p-3 text-center border-r border-b border-slate-800">
                            <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t('ballistics.air_drag')}</span>
                            <span className="text-sm font-mono text-red-400">-{result?.loss_analysis?.air_drag_loss_m}m</span>
                        </div>
                        <div className="p-3 text-center border-b border-slate-800">
                            <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t('ballistics.knot_loss')}</span>
                            <span className="text-sm font-mono text-orange-400">-{result?.loss_analysis?.knot_friction_m}m</span>
                        </div>
                        <div className="p-3 text-center border-r border-slate-800">
                            <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t('ballistics.mat_gain')}</span>
                            <span className="text-sm font-mono text-cyan-400">+{result?.equipment_insights?.modulus_gain_m}m</span>
                        </div>
                        <div className="p-3 text-center">
                            <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t('ballistics.knot_eff')}</span>
                            <span className="text-xs text-green-400">{result?.equipment_insights?.knot_efficiency.split('-')[1]}</span>
                        </div>
                    </div>

                    {/* 4. AI INSIGHTS CARD */}
                    {aiRecommendations.length > 0 ? (
                        <div className="p-4 bg-gradient-to-br from-purple-950/40 to-slate-900/80 border-b border-purple-800/30">
                            <h3 className="text-xs font-bold text-purple-300 uppercase tracking-widest flex items-center gap-2 mb-3">
                                <Activity className="w-3 h-3" /> {t('ballistics.ai_title')}
                            </h3>
                            <div className="space-y-2">
                                {aiRecommendations.map((rec, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-2 rounded-lg border ${rec.priority === 'high' ? 'bg-red-950/30 border-red-800/30' :
                                            rec.priority === 'medium' ? 'bg-yellow-950/30 border-yellow-800/30' :
                                                'bg-blue-950/30 border-blue-800/30'
                                            }`}
                                    >
                                        <div className="text-[10px] font-bold text-slate-400 mb-1">{rec.category}</div>
                                        <div className="text-xs text-white">{rec.message}</div>
                                        {rec.action && (
                                            <div className="text-[10px] text-slate-500 mt-1 italic">→ {rec.action}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="p-3 bg-green-950/20 border border-green-900/30 rounded-lg text-center flex flex-col items-center gap-2">
                            <Award className="w-8 h-8 text-green-500 opacity-50" />
                            <div>
                                <div className="text-green-400 font-bold text-sm">✅ {t('ballistics.perfect')}</div>
                                <div className="text-xs text-slate-400 mt-1">{t('ballistics.perfect_desc')}</div>
                            </div>
                        </div>
                    )}


                    {/* 5. COLLAPSIBLE JSON CONSOLE */}
                    <div className="border-t border-slate-800 bg-[#0d1117]">
                        <button
                            onClick={() => setIsJsonOpen(!isJsonOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-[#21262d] text-xs text-slate-400 hover:text-white hover:bg-[#2d333b] transition-colors"
                        >
                            <span className="font-mono flex items-center gap-2">
                                <Database className="w-3 h-3" />
                                JSON API Response
                            </span>
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${result ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                                <span className="font-bold">{isJsonOpen ? '▼' : '▶'}</span>
                            </div>
                        </button>

                        {isJsonOpen && (
                            <div
                                className="p-4 font-mono text-[10px] text-green-400 overflow-y-auto border-t border-slate-700/50"
                                style={{ maxHeight: '180px' }}
                            >
                                <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
