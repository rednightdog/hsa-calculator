export interface SurfSimulationInput {
    rodModel: string;
    reelModel: string;
    guideMaterial: string;
    sinkerShape: string;
    knotType: string; // New V4
    leaderMaterial: string; // New V4 (FC/Mono)
    leaderThickness: number; // New V4 (mm)
    castingTechnique?: string; // New V4.1 - Professional Mode
    rodLength: number; // m
    weight: number; // g
    lineDiameter: number; // mm
    castingAngle: number; // degrees
    windSpeed: number; // km/h
    windAngle: number; // degrees 
    baitType?: 'standard' | 'clipped' | 'none'; // New V4.2 - Bait Aerodynamics
}

export interface SimulationResult {
    simulation_id: string;
    ballistics: {
        distance_meters: number;
        exit_velocity_ms: number;
        efficiency_rating: string;
        trajectory_points: { x: number, y: number }[];
    };
    loss_analysis: {
        air_drag_loss_m: number;
        guide_friction_m: number;
        knot_friction_m: number;
        wind_drift_m: number;
    };
    equipment_insights: {
        modulus_gain_m: number;
        reel_optimization: string;
        knot_efficiency: string;
    };
    // Kept for backward compatibility with UI if needed, but primary is above
    visual_output: any;
    insights: string[];
    visuals: any;
}

// Databases
export const ROD_DB = [
    { brand: 'Shimano', model: 'Aero Technium Spiral X', tech_name: 'Ultra High Modulus (50T)', modulus_k: 1.10, action_bonus: 0.05, max_weight: 250 },
    { brand: 'Daiwa', model: 'Tournament Surf AGS', tech_name: 'High Modulus (30T-40T)', modulus_k: 1.02, action_bonus: 0.02, max_weight: 225 },
    { brand: 'Akami', model: 'Yonago High Modulus', tech_name: 'Composite/Glass', modulus_k: 0.85, action_bonus: -0.05, max_weight: 200 }
];

export const REEL_DB = [
    { brand: 'Shimano', model: 'Aero Technium MGS', tech_name: 'Super Slow 10', friction_reduction: 0.92 },
    { brand: 'Daiwa', model: 'Basia 45 SCW', tech_name: 'Long Cast ABS', friction_reduction: 0.94 },
    { brand: 'Generic', model: 'Standard Surf Reel', tech_name: 'Standard Oscillation', friction_reduction: 1.00 }
];

export const GUIDE_DB = [
    { material: 'Fuji Torzite', friction_f: 0.12 },
    { material: 'Fuji SIC', friction_f: 0.16 },
    { material: 'Alconite', friction_f: 0.18 }
];

export const SINKER_DB = [
    { shape: 'Longtail/Bullet', drag_cd: 0.07 },
    { shape: 'Torpedo', drag_cd: 0.12 },
    { shape: 'Pirate/Hexagonal', drag_cd: 0.28 }
];

export const KNOT_DB = [
    { type: 'FG Knot', penalty_m: 1.5, efficiency: 0.98 },
    { type: 'Double Uni', penalty_m: 4.5, efficiency: 0.85 },
    { type: 'Albright', penalty_m: 3.8, efficiency: 0.88 }
];

export const CASTING_TECHNIQUE_DB = [
    {
        name: 'Standard Cast',
        velocity_multiplier: 1.0,
        description: 'Overhead cast - Amateur/Recreational'
    },
    {
        name: 'Pendulum Cast',
        velocity_multiplier: 1.25,
        description: 'Advanced technique - Professional'
    },
    {
        name: 'Tournament Cast',
        velocity_multiplier: 1.35,
        description: 'Competition technique - World Record'
    }
];

export class SurfPhysicsV2 {

    static calculatePerformance(input: SurfSimulationInput): SimulationResult {
        const { rodLength, weight, lineDiameter, castingAngle, windSpeed, windAngle, leaderThickness } = input;

        // 1. Load Coefficients
        const rod = ROD_DB.find(r => r.model === input.rodModel) || ROD_DB[2];
        const reel = REEL_DB.find(r => r.model === input.reelModel) || REEL_DB[2];
        const guide = GUIDE_DB.find(g => g.material === input.guideMaterial) || GUIDE_DB[1];
        const sinker = SINKER_DB.find(s => s.shape === input.sinkerShape) || SINKER_DB[1];
        const knot = KNOT_DB.find(k => k.type === input.knotType) || KNOT_DB[0];

        const insights: string[] = [];

        // 2. Initial Velocity (Material Physics)
        const v0_base = (rodLength * 14.4) * (rod.modulus_k + rod.action_bonus);
        let v0 = v0_base * Math.sqrt(150 / weight);

        // Realistic velocity cap based on weight
        // Light weights: limited by rod mechanics (~45 m/s)
        // Optimal weights (150g): can reach ~65 m/s
        // Heavy weights: limited by mass inertia (~70 m/s max)
        const max_v0 = Math.min(70, 35 + (weight / 3)); // 15g→40 m/s, 90g→65 m/s, 150g→85→70 m/s cap
        if (v0 > max_v0) v0 = max_v0;

        // 2.1 Apply Casting Technique Multiplier (Professional Mode)
        const technique = CASTING_TECHNIQUE_DB.find(t => t.name === input.castingTechnique) || CASTING_TECHNIQUE_DB[0];
        v0 = v0 * technique.velocity_multiplier;

        if (technique.velocity_multiplier > 1.0) {
            insights.push(`🏆 ${technique.name}: +${((technique.velocity_multiplier - 1) * 100).toFixed(0)}% hız bonusu`);
        }

        // 3. Theoretical Distance (Vacuum)
        const g = 9.81;
        const angleRad = (castingAngle * Math.PI) / 180;
        const d_theory = (Math.pow(v0, 2) * Math.sin(2 * angleRad)) / g;

        // 4. Air Drag (Quadratic Damping with Mass Dependency)
        // Damping Factor approach
        let safeLineDiameter = lineDiameter > 1.0 ? lineDiameter / 100 : lineDiameter;
        const lineFactor = safeLineDiameter / 0.16;

        // CRITICAL: Mass-dependent drag coefficient
        // Light objects (low weight) have MUCH higher drag relative to their mass
        // Physics: Drag force is proportional to area, but deceleration = F/mass
        // So lighter objects decelerate faster even with same drag force
        const mass_drag_multiplier = Math.pow(150 / weight, 1.2); // Strong exponential penalty for ultra-light weights

        // Use reference velocity (60 m/s) instead of actual v0 to prevent feedback loop
        // This ensures drag is purely mass-dependent, not velocity-dependent
        const v_ref = 60; // Reference velocity for drag calculation

        // BAIT DRAG LOGIC (V4.2 Restoration)
        // Values verified from V1 legacy engine
        let bait_drag_multiplier = 1.0;
        if (input.baitType === 'standard') {
            bait_drag_multiplier = 3.0; // Huge drag penalty
            insights.push(`Warning: Standart yem kullanımı mesafeyi ciddi oranda düşürür.`);
        } else if (input.baitType === 'clipped') {
            bait_drag_multiplier = 1.10; // Only 10% penalty
            insights.push(`Info: Klipsli sistem aerodinamik yapıyı koruyor.`);
        }

        const damping = Math.min(1 + ((v_ref / 45) * lineFactor * (1 + (sinker.drag_cd * bait_drag_multiplier) * 5) * mass_drag_multiplier), 50.0);

        const d_dragged = d_theory / damping;
        const air_drag_loss = d_theory - d_dragged;

        // 5. Wind Physics (Scientific Model - Flight Time Based)
        const windRad = (windAngle * Math.PI) / 180;

        // Calculate flight time (time projectile is in air)
        // t = 2 * v0 * sin(θ) / g
        const flight_time = (2 * v0 * Math.sin(angleRad)) / g;

        // Wind drift = wind_speed * flight_time * angle_factor
        // Convert wind from km/h to m/s: km/h / 3.6
        const wind_ms = windSpeed / 3.6;

        // Headwind/Tailwind component (affects range)
        // Positive = tailwind (adds distance), Negative = headwind (reduces)
        const wind_range_effect = wind_ms * Math.cos(windRad) * flight_time;

        // Crosswind component (creates lateral drift, reduces effective range)
        // Side wind creates "line bow" - misina şişer, sürtünme artar
        const crosswind_drift = wind_ms * Math.abs(Math.sin(windRad)) * flight_time;
        // Crosswind penalty: drift creates extra drag (approximately 30% of drift distance)
        const crosswind_penalty = crosswind_drift * 0.3;

        const net_wind_effect = wind_range_effect - crosswind_penalty;

        // 6. Friction & Mechanical Losses (The V4 Upgrade)

        // A. Guide Friction (Material * Reel Tech)
        const guide_loss_pct = guide.friction_f * reel.friction_reduction;
        const guide_loss_m = d_dragged * guide_loss_pct;

        // B. Knot & Leader Physics (Specific Loss Calculation)
        // Fixed penalty per knot type
        let knot_loss_m = knot.penalty_m;

        // Leader Stiffness / Whip Effect (Kamçı Etkisi)
        // Thick leaders resist bending through guides.
        // Factor: (Thickness - 0.30) * 15m penalty
        const effective_leader = Math.max(leaderThickness || 0.40, 0.30);
        const leader_stiffness_loss = (effective_leader - 0.30) * 20;
        const total_mechanical_loss = guide_loss_m + knot_loss_m + leader_stiffness_loss;

        // 7. Final Distance
        let finalDistance = d_dragged - total_mechanical_loss + net_wind_effect;
        if (finalDistance > 300) finalDistance = 300;
        if (finalDistance < 0) finalDistance = 0;

        // 8. Insights & Rating
        let rating = "B";
        if (finalDistance > 220) rating = "A+";
        else if (finalDistance > 190) rating = "A";
        else if (finalDistance > 160) rating = "B";
        else if (finalDistance < 130) rating = "C";

        // Trajectory
        const trajectoryPoints: { x: number, y: number }[] = [];
        const h_max = (Math.pow(v0 * Math.sin(angleRad), 2)) / (2 * g);
        for (let i = 0; i <= 20; i++) {
            const x = (finalDistance / 20) * i;
            const nx = x / finalDistance;
            const y = 4 * h_max * nx * (1 - nx);
            trajectoryPoints.push({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(1)) });
        }

        // Material Gain Calc
        const base_v0 = (rodLength * 14.4) * 1.0 * Math.sqrt(150 / weight);
        const gain_pct = (v0 / base_v0) - 1;
        const material_gain_m = finalDistance * gain_pct;

        // Construct V4 Payload
        return {
            simulation_id: "HSA-FINAL-2026",
            ballistics: {
                distance_meters: parseFloat(finalDistance.toFixed(2)),
                exit_velocity_ms: parseFloat(v0.toFixed(2)),
                efficiency_rating: rating,
                trajectory_points: trajectoryPoints
            },
            loss_analysis: {
                air_drag_loss_m: parseFloat(air_drag_loss.toFixed(1)),
                guide_friction_m: parseFloat(guide_loss_m.toFixed(1)),
                knot_friction_m: parseFloat((knot_loss_m + leader_stiffness_loss).toFixed(1)),
                wind_drift_m: parseFloat(crosswind_drift.toFixed(1)) // Crosswind lateral drift
            },
            equipment_insights: {
                modulus_gain_m: parseFloat(material_gain_m.toFixed(1)),
                reel_optimization: `${reel.tech_name} - Friction x${reel.friction_reduction}`,
                knot_efficiency: `${knot.type}|${(knot.efficiency * 100).toFixed(0)}`
            },
            visual_output: { // Legacy Mapping for UI Safety
                distance_meters: parseFloat(finalDistance.toFixed(2)),
                efficiency_rating: rating,
                trajectory_points: trajectoryPoints,
                wind_drift_meters: parseFloat(crosswind_drift.toFixed(1)),
                exit_velocity_ms: parseFloat(v0.toFixed(2)),
                status: "Engineering Platform Ready"
            },
            insights: [],
            visuals: { // Legacy Mapping
                material_analysis: { modulus_bonus: rod.modulus_k, total_gain_m: material_gain_m },
                reel_analysis: { tech_name: reel.tech_name, friction_reduction: reel.friction_reduction }
            }
        };
    }
}
