// Turkish Coastal Cities for Surf Casting
export const SURF_LOCATIONS = [
    { name: 'Kusadasi', lat: 37.8561, lon: 27.2615, region: 'Ege' },
    { name: 'Izmir', lat: 38.4192, lon: 27.1287, region: 'Ege' },
    { name: 'Cesme', lat: 38.3226, lon: 26.3067, region: 'Ege' },
    { name: 'Bodrum', lat: 37.0344, lon: 27.4305, region: 'Ege' },
    { name: 'Antalya', lat: 36.8597, lon: 30.6256, region: 'Akdeniz' },
    { name: 'Alanya', lat: 36.5444, lon: 31.9956, region: 'Akdeniz' },
    { name: 'Mersin', lat: 36.8121, lon: 34.6415, region: 'Akdeniz' },
    { name: 'Samsun', lat: 41.2867, lon: 36.3300, region: 'Karadeniz' },
    { name: 'Trabzon', lat: 41.0082, lon: 39.7179, region: 'Karadeniz' },
    { name: 'Istanbul', lat: 41.2333, lon: 29.0500, region: 'Marmara' },
    { name: 'Tekirdag', lat: 40.9833, lon: 27.5167, region: 'Marmara' }
];

export interface WeatherData {
    location: string;
    wind: {
        speed: number; // km/h
        direction: number; // degrees (0-360)
        directionName: string; // N, NE, E, etc.
    };
    temperature: number; // Celsius
    humidity: number; // %
    timestamp: number;
}

export function getWindDirectionName(degrees: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}

export function convertWindAngleToRelative(windDeg: number): number {
    // OpenWeather gives meteorological direction (where wind comes FROM)
    // We need relative to casting direction (assume north = 0°)
    // For simplicity, return as-is for now (can be adjusted based on casting direction)
    return windDeg;
}
