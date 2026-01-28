import { Brand, manufacturers } from "./reel-data";

/**
 * Calculates the realistic "safe" drag limit based on brand reliability.
 * JDM brands usually state true max, while budget brands might overstate.
 */
export function calculateEffectiveDrag(brand: Brand, statedDrag: number): number {
    const tolerance = manufacturers[brand]?.dragTolerance || 0.85;
    // Return rounded to 1 decimal
    return Math.round(statedDrag * tolerance * 10) / 10;
}

/**
 * Detects if a reel has a Shallow Spool based on its model name.
 * S, SS, Type-L are indicators of shallow pools used for thin braids (LRF).
 */
export function isShallowSpool(modelName: string): boolean {
    const indicators = [
        ' S', ' SS', ' C2000S', ' 2500S', ' 3000S',  // Shimano style
        ' LT 1000', ' LT 2000', // Daiwa small sizes often correspond (heuristic)
        'Shallow', 'Air Spool'
    ];

    // Check for explicit "S" suffix often occurring at end or before another delimiter
    // Regex matches " S" or " SS" at end of string or followed by space
    if (/[\s-](S|SS)(\s|$)/.test(modelName)) return true;

    return indicators.some(ind => modelName.includes(ind));
}

/**
 * Suggests target species/style based on Gear Ratio.
 * High Gear (HG/XG) -> Levrek (Bass) / WTD
 * Low Gear (PG/Power) -> Istavrit (Horse Mackerel) / Crank
 */
export function getGearApplication(ratio: number): string {
    if (ratio >= 5.8) return "Levrek (WTD & Hız)";
    if (ratio <= 5.3) return "İstavrit (Tork & Krank)";
    return "Genel Kullanım";
}
