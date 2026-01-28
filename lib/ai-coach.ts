import { SimulationResult } from './surf-logic';
import { WeatherData } from './weather-data';

export interface AIRecommendation {
    category: string;
    priority: 'high' | 'medium' | 'low';
    message: string;
    action?: string;
    value?: string;
}

export class SurfAICoach {

    // 1. Distance Gap Analysis
    static analyzeDistanceGap(
        currentDistance: number,
        targetDistance: number,
        currentSetup: any,
        result: SimulationResult
    ): AIRecommendation[] {
        const recommendations: AIRecommendation[] = [];
        const gap = targetDistance - currentDistance;

        if (gap <= 0) {
            recommendations.push({
                category: '🎯 Hedef',
                priority: 'high',
                message: 'ai_coach.target_reached', // KEY
                value: `(${currentDistance.toFixed(0)}m)` // Dynamic value to append
            });
            return recommendations;
        }

        // Technique upgrade
        if (currentSetup.castingTechnique === 'Standard Cast') {
            const pendulumGain = currentDistance * 0.25;
            const tournamentGain = currentDistance * 0.35;

            if (gap <= pendulumGain) {
                recommendations.push({
                    category: '🏆 Teknik',
                    priority: 'high',
                    message: 'ai_coach.tech_pendulum',
                    value: `(+${pendulumGain.toFixed(0)}m)`,
                    action: 'ai_coach.action_pendulum'
                });
            } else if (gap <= tournamentGain) {
                recommendations.push({
                    category: '🏆 Teknik',
                    priority: 'high',
                    message: 'ai_coach.tech_tournament',
                    value: `(+${tournamentGain.toFixed(0)}m)`,
                    action: 'ai_coach.action_tournament'
                });
            }
        }

        // Line diameter optimization
        if (currentSetup.lineDiameter > 0.14) {
            const lineSavings = gap * 0.15; // ~15% improvement
            recommendations.push({
                category: '🎣 Misina',
                priority: 'medium',
                message: 'ai_coach.line_thinner',
                value: `(0.12-0.14mm) → +${lineSavings.toFixed(0)}m`,
                action: 'ai_coach.action_line'
            });
        }

        // Equipment upgrades
        if (currentSetup.guideMaterial !== 'Fuji Torzite') {
            recommendations.push({
                category: '⚙️ Ekipman',
                priority: 'medium',
                message: 'ai_coach.guide_fuji',
                value: '(+5-8m)',
                action: 'ai_coach.action_guide'
            });
        }

        // Weight optimization
        if (currentSetup.weight < 120 || currentSetup.weight > 180) {
            recommendations.push({
                category: '⚖️ Ağırlık',
                priority: 'high',
                message: 'ai_coach.weight_opt',
                action: 'ai_coach.action_weight'
            });
        }

        return recommendations;
    }

    // 2. Equipment Optimizer
    static optimizeEquipment(currentSetup: any, result: SimulationResult): AIRecommendation[] {
        const recommendations: AIRecommendation[] = [];

        // Knot efficiency
        if (currentSetup.knotType !== 'FG Knot') {
            const knotLoss = result.loss_analysis.knot_friction_m;
            recommendations.push({
                category: '🪢 Düğüm',
                priority: 'high',
                message: 'ai_coach.knot_fg',
                value: `(${knotLoss.toFixed(1)}m loss)`, // We'll handle 'loss' translation in UI if needed, or keep valid metric
                action: 'ai_coach.action_knot'
            });
        }

        // Sinker shape
        if (currentSetup.sinkerShape !== 'Longtail/Bullet') {
            recommendations.push({
                category: '🎯 Kurşun',
                priority: 'medium',
                message: 'ai_coach.sinker_aero',
                action: 'ai_coach.action_sinker'
            });
        }

        // Leader thickness
        if (currentSetup.leaderThickness > 0.40) {
            const leaderLoss = (currentSetup.leaderThickness - 0.30) * 20;
            recommendations.push({
                category: '🧵 Şok Lider',
                priority: 'low',
                message: 'ai_coach.leader_thinner',
                value: `(${leaderLoss.toFixed(1)}m loss)`,
                action: 'ai_coach.action_leader'
            });
        }

        return recommendations;
    }

    // 3. Technique Coach
    static provideTechniqueAdvice(
        currentSetup: any,
        result: SimulationResult,
        targetDistance?: number
    ): AIRecommendation[] {
        const recommendations: AIRecommendation[] = [];

        // Angle optimization
        if (currentSetup.castingAngle < 35 || currentSetup.castingAngle > 45) {
            recommendations.push({
                category: '📐 Açı',
                priority: 'high',
                message: 'ai_coach.angle_opt',
                action: 'ai_coach.action_angle'
            });
        }

        // Casting technique progression
        if (targetDistance && targetDistance > 250) {
            if (currentSetup.castingTechnique === 'Standard Cast') {
                recommendations.push({
                    category: '🎓 Eğitim',
                    priority: 'high',
                    message: 'ai_coach.tech_advance',
                    action: 'ai_coach.action_learn'
                });
            }
        }

        return recommendations;
    }

    // 4. Weather Advisor
    static analyzeWeather(
        weatherData: WeatherData | null,
        currentSetup: any
    ): AIRecommendation[] {
        const recommendations: AIRecommendation[] = [];

        if (!weatherData) {
            recommendations.push({
                category: '🌤️ Hava',
                priority: 'low',
                message: 'ai_coach.weather_live',
                action: 'ai_coach.action_weather'
            });
            return recommendations;
        }

        // Wind analysis
        const windSpeed = weatherData.wind.speed;
        const windDir = weatherData.wind.direction;

        if (windSpeed < 5) {
            recommendations.push({
                category: '🌬️ Rüzgar',
                priority: 'high',
                message: 'ai_coach.weather_calm',
            });
        } else if (windSpeed > 25) {
            recommendations.push({
                category: '⚠️ Rüzgar',
                priority: 'high',
                message: 'ai_coach.weather_windy',
                value: `(${windSpeed} km/h)`
            });
        }

        // Tailwind/headwind advice
        if (windDir >= 0 && windDir <= 45 || windDir >= 315 && windDir <= 360) {
            recommendations.push({
                category: '💨 Arka Rüzgar',
                priority: 'high',
                message: 'ai_coach.wind_tail',
                value: `(+${(windSpeed * 1.5).toFixed(0)}m bonus)`
            });
        } else if (windDir >= 135 && windDir <= 225) {
            recommendations.push({
                category: '🌊 Ön Rüzgar',
                priority: 'medium',
                message: 'ai_coach.wind_head',
                value: `(-${(windSpeed * 1.2).toFixed(0)}m loss)`
            });
        } else {
            // Side wind (45-135 or 225-315)
            // 90 is East, 270 is West
            const side = (windDir > 0 && windDir < 180) ? 'Right' : 'Left'; // Will handle translation in UI
            recommendations.push({
                category: '🌬️ Yan Rüzgar',
                priority: 'medium',
                message: 'ai_coach.wind_side',
                value: `(${side} - ${windDir}°)`
            });
        }

        return recommendations;
    }

    // Master function: Get all recommendations
    static getAllRecommendations(
        currentDistance: number,
        targetDistance: number | null,
        currentSetup: any,
        result: SimulationResult,
        weatherData: WeatherData | null
    ): AIRecommendation[] {
        const all: AIRecommendation[] = [];

        // Distance gap analysis
        if (targetDistance) {
            all.push(...this.analyzeDistanceGap(currentDistance, targetDistance, currentSetup, result));
        }

        // Equipment optimization
        all.push(...this.optimizeEquipment(currentSetup, result));

        // Technique advice
        all.push(...this.provideTechniqueAdvice(currentSetup, result, targetDistance || undefined));

        // Weather advice
        all.push(...this.analyzeWeather(weatherData, currentSetup));

        // Sort by priority
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        all.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

        return all.slice(0, 5); // Top 5 recommendations
    }
}
