import { SimulationResult } from './surf-logic';
import { WeatherData } from './weather-data';

export interface AIRecommendation {
    category: string;
    priority: 'high' | 'medium' | 'low';
    message: string;
    action?: string;
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
                message: `Tebrikler! Hedefinize ulaştınız (${currentDistance.toFixed(0)}m)`,
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
                    message: `Pendulum Cast tekniğine geçin (+${pendulumGain.toFixed(0)}m)`,
                    action: 'Atış tekniğini "Pendulum Cast" olarak değiştirin'
                });
            } else if (gap <= tournamentGain) {
                recommendations.push({
                    category: '🏆 Teknik',
                    priority: 'high',
                    message: `Tournament Cast tekniğine geçin (+${tournamentGain.toFixed(0)}m)`,
                    action: 'Atış tekniğini "Tournament Cast" olarak değiştirin'
                });
            }
        }

        // Line diameter optimization
        if (currentSetup.lineDiameter > 0.14) {
            const lineSavings = gap * 0.15; // ~15% improvement
            recommendations.push({
                category: '🎣 Misina',
                priority: 'medium',
                message: `Daha ince misina kullanın (0.12-0.14mm) → +${lineSavings.toFixed(0)}m`,
                action: 'Misina kalınlığını azaltın'
            });
        }

        // Equipment upgrades
        if (currentSetup.guideMaterial !== 'Fuji Torzite') {
            recommendations.push({
                category: '⚙️ Ekipman',
                priority: 'medium',
                message: 'Fuji Torzite halkalar en düşük sürtünmeyi sağlar (+5-8m)',
                action: 'Halka materyalini "Fuji Torzite" olarak değiştirin'
            });
        }

        // Weight optimization
        if (currentSetup.weight < 120 || currentSetup.weight > 180) {
            recommendations.push({
                category: '⚖️ Ağırlık',
                priority: 'high',
                message: 'Optimal ağırlık 150-175g arasındadır',
                action: 'Kurşun ağırlığını 150-175g aralığına getirin'
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
                message: `FG Knot kullanın (şu an ${knotLoss.toFixed(1)}m kayıp)`,
                action: 'Düğüm tipini "FG Knot" olarak değiştirin'
            });
        }

        // Sinker shape
        if (currentSetup.sinkerShape !== 'Longtail/Bullet') {
            recommendations.push({
                category: '🎯 Kurşun',
                priority: 'medium',
                message: 'Longtail/Bullet kurşun en aerodinamik seçimdir',
                action: 'Kurşun şeklini "Longtail/Bullet" olarak değiştirin'
            });
        }

        // Leader thickness
        if (currentSetup.leaderThickness > 0.40) {
            const leaderLoss = (currentSetup.leaderThickness - 0.30) * 20;
            recommendations.push({
                category: '🧵 Şok Lider',
                priority: 'low',
                message: `Şok lider kalınlığını azaltın (şu an ${leaderLoss.toFixed(1)}m kayıp)`,
                action: 'Şok lider kalınlığını 0.35-0.40mm aralığına getirin'
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
                message: 'Optimal atış açısı 40-42° arasındadır',
                action: 'Atış açısını 40-42° aralığına getirin'
            });
        }

        // Casting technique progression
        if (targetDistance && targetDistance > 250) {
            if (currentSetup.castingTechnique === 'Standard Cast') {
                recommendations.push({
                    category: '🎓 Eğitim',
                    priority: 'high',
                    message: '250m+ için profesyonel atış tekniği gereklidir',
                    action: 'Pendulum veya Tournament Cast öğrenin'
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
                message: 'Canlı hava durumu verisi alarak daha iyi öneriler alabilirsiniz',
                action: 'Konum seçip hava durumu verisi alın'
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
                message: 'Sakin hava - ideal atış koşulları!',
            });
        } else if (windSpeed > 25) {
            recommendations.push({
                category: '⚠️ Rüzgar',
                priority: 'high',
                message: `Çok rüzgarlı (${windSpeed} km/h) - atış zorlaşacak`,
            });
        }

        // Tailwind/headwind advice
        if (windDir >= 0 && windDir <= 45 || windDir >= 315 && windDir <= 360) {
            recommendations.push({
                category: '💨 Arka Rüzgar',
                priority: 'high',
                message: `Arka rüzgar var! Şimdi atış yapın (+${(windSpeed * 1.5).toFixed(0)}m bonus)`,
            });
        } else if (windDir >= 135 && windDir <= 225) {
            recommendations.push({
                category: '🌊 Ön Rüzgar',
                priority: 'medium',
                message: `Ön rüzgar var (-${(windSpeed * 1.2).toFixed(0)}m kayıp)`,
            });
        } else {
            // Side wind (45-135 or 225-315)
            // 90 is East, 270 is West
            const side = (windDir > 0 && windDir < 180) ? 'Sağdan' : 'Soldan';
            recommendations.push({
                category: '🌬️ Yan Rüzgar',
                priority: 'medium',
                message: `${side} esen rüzgar misinayı savurabilir (${windDir}°). Atış açınızı rüzgarın içine doğru biraz kaydırın.`,
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
