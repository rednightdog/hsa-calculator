
export type RodModulus = 'high' | 'mid' | 'low';
export type SinkerType = 'longtail' | 'torpedo' | 'round';
export type CasterSkill = 'average' | 'pro';

interface BallisticsInput {
    rodLength: number; // meters
    weight: number; // grams
    lineDia: number; // mm
    angle: number; // degrees
    rodModulus: RodModulus;
    sinkerType: SinkerType;
    casterSkill?: CasterSkill; // Optional, defaults to average
    guideCount?: number; // Optional, defaults to standard calculation
}

interface BallisticsResult {
    distance: number; // meters
    theoreticalDistance: number; // meters
    airResistance: number; // meters lost
    v0: number; // m/s
}

const GRAVITY = 9.81;

export const MODULUS_MAP: Record<RodModulus, number> = {
    high: 1.05,
    mid: 0.95,
    low: 0.80
};

export const DRAG_MAP: Record<SinkerType, number> = {
    longtail: 0.08,
    torpedo: 0.15,
    round: 0.35
};

export type WindType = 'none' | 'tail' | 'head' | 'side';
export type BaitType = 'none' | 'standard' | 'clipped';

interface BallisticsInput {
    rodLength: number; // meters
    weight: number; // grams
    lineDia: number; // mm
    angle: number; // degrees
    rodModulus: RodModulus;
    sinkerType: SinkerType;
    casterSkill?: CasterSkill; // Optional, defaults to average
    guideCount?: number; // Optional, defaults to standard calculation
    wind?: WindType;
    windSpeed?: number; // km/h
    bait?: BaitType;
}

export class SurfPhysics {

    static calculateDistance(input: BallisticsInput): BallisticsResult {
        const { rodLength, lineDia, angle, rodModulus, sinkerType, casterSkill = 'average', guideCount = 0, wind = 'none', windSpeed = 0, bait = 'none' } = input;

        // 1. Initial Velocity Estimation (V0)
        // User's original formula produced supersonic speeds (88m/s+).
        // Calibrated for Earth gravity to produce realistic 100-200m results.
        // Average: 9.5 (~40m/s release) | Pro: 12.0 (~50m/s release)
        const skillMultiplier = casterSkill === 'pro' ? 12.0 : 9.5;
        const v0 = (rodLength * skillMultiplier) * MODULUS_MAP[rodModulus];

        // 2. Aerodynamic Drag Coefficient (Cd)
        let cd = DRAG_MAP[sinkerType];

        // Bait Drag Logic
        if (bait === 'standard') {
            cd *= 3.0; // "3 katına kadar çıkarabilir"
        } else if (bait === 'clipped') {
            cd *= 1.10; // "Bu artışı %10 seviyesine geri çeker"
        }

        // 3. Theoretical Range (Vacuum)
        // d = (v0^2 * sin(2*theta)) / g
        const thetaRad = (angle * Math.PI) / 180;
        const d_theoretical = (Math.pow(v0, 2) * Math.sin(2 * thetaRad)) / GRAVITY;

        // 4. Loss Calculations (Air Resistance & Line Friction)
        // User's formula: air_resistance = (line_dia / 0.12) * cd * (d_theoretical * 0.12)
        // "Misina Çapı: 0.12mm ile 0.20mm arasındaki her 0.02mm artış, aerodinamik sürüklemeyi yaklaşık %4-6 oranında artırır."
        // This is approximated by the linear ratio (line_dia / 0.12) in the user's formula.
        let airResistance = (lineDia / 0.12) * cd * (d_theoretical * 0.12);

        // 5. Guide Friction Loss (Non-linear Logic)
        // < 6 Guides: high exit speed but "Line Slap" risk -> ~4% loss
        // > 8 Guides: good distribution but high ceramic friction -> ~2% loss
        // 6-8 Guides: Ideal sweet spot

        let guideLossFactor = 1.0;

        if (guideCount < 6) {
            guideLossFactor = 0.96; // Line Slap Penalty
        } else if (guideCount > 8) {
            guideLossFactor = 0.98; // Excessive Friction
        } else {
            guideLossFactor = 0.995; // Ideal
        }

        let finalDistance = (d_theoretical - airResistance) * guideLossFactor;

        // 6. Wind Vector Logic (Variable Intensity)
        // Base impact factor: ~0.5% per km/h estimated
        // 20 km/h -> 10% change
        // 40 km/h -> 20% change
        const windImpact = (windSpeed * 0.5) / 100;

        if (wind === 'head') finalDistance *= (1.0 - windImpact);
        if (wind === 'side') finalDistance *= (1.0 - (windImpact * 0.6)); // Side wind has less impact on distance than head
        if (wind === 'tail') finalDistance *= (1.0 + windImpact);

        finalDistance = Math.max(0, finalDistance);

        return {
            distance: Number(finalDistance.toFixed(2)),
            theoreticalDistance: Number(d_theoretical.toFixed(2)),
            airResistance: Number(airResistance.toFixed(2)),

            v0: Number(v0.toFixed(2))
        };
    }
}

// Helper to get formatted details for UI
export const getSinkerDescription = (type: SinkerType) => {
    switch (type) {
        case 'longtail': return "Long Tail (Aerodinamik Uzun Kuyruk)";
        case 'torpedo': return "Torpedo (Klasik Hızlı Sinking)";
        case 'round': return "Top/Armut (Düşük Mesafe, Yüksek Tutuş)";
    }
};

export const getModulusDescription = (type: RodModulus) => {
    switch (type) {
        case 'high': return "High Modulus Carbon (Hızlı Aksiyon - Sert)";
        case 'mid': return "Standart Karbon / Kompozit (Orta Sert)";
        case 'low': return "Fiberglas / Düşük Karbon (Esnek - Sağlam)";
    }
};

// Wind Safety & Analysis Helpers (New)
export const getWindSafetyLevel = (speed: number) => {
    if (speed <= 10) return {
        label: "İdeal Koşullar",
        color: "text-emerald-400",
        desc: "Sapma payı düşüktür. Formüller %95+ doğrulukla çalışır."
    };
    if (speed <= 25) return {
        label: "Operasyonel Limit",
        color: "text-amber-400",
        desc: "Atış tekniği ve kurşun ağırlığı (150g+) önem kazanır."
    };
    if (speed <= 40) return {
        label: "Zorlayıcı Koşullar",
        color: "text-orange-500",
        desc: "Misina 'karın' (bowing) yapar, mesafe %30-50 arası düşer."
    };
    return {
        label: "Tehlikeli / İmkansız",
        color: "text-red-500",
        desc: "Mekanik hasar riski (kamış kırılması) ve kontrol kaybı başlar."
    };
};

export const getLineBowAnalysis = (speed: number) => {
    // Data based on User's "Sapma ve Duyarlılık Kaybı Tablosu"
    if (speed <= 10) return { deviation: "2 - 4 m", sensitivityLoss: 5, extraWeight: "Gerekmez" };
    if (speed <= 20) return { deviation: "8 - 12 m", sensitivityLoss: 15, extraWeight: "+15g" };
    if (speed <= 30) return { deviation: "20 - 25 m", sensitivityLoss: 40, extraWeight: "+30g / Tırnaklı" };
    return { deviation: "40+ m", sensitivityLoss: 70, extraWeight: "Avcılık Verimsiz" };
};
