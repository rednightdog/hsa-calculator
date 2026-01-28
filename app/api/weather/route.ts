import { NextRequest, NextResponse } from 'next/server';
import { SURF_LOCATIONS, getWindDirectionName, WeatherData } from '@/lib/weather-data';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const locationName = searchParams.get('location');

    if (!locationName) {
        return NextResponse.json({ error: 'Location parameter required' }, { status: 400 });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
        return NextResponse.json({
            error: 'API key not configured',
            message: 'Please add OPENWEATHER_API_KEY to .env.local'
        }, { status: 500 });
    }

    let lat, lon, displayName;

    // 1. Check if it's a preset location (Fast path)
    const presetLocation = SURF_LOCATIONS.find(loc => loc.name === locationName);

    if (presetLocation) {
        lat = presetLocation.lat;
        lon = presetLocation.lon;
        displayName = presetLocation.name;
    } else {
        // 2. If not preset, use Geocoding API (Global Search)
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(locationName)}&limit=1&appid=${apiKey}`;
            const geoResponse = await fetch(geoUrl);
            if (!geoResponse.ok) throw new Error('Geocoding failed');

            const geoData = await geoResponse.json();

            if (!geoData || geoData.length === 0) {
                return NextResponse.json({ error: 'City not found' }, { status: 404 });
            }

            lat = geoData[0].lat;
            lon = geoData[0].lon;
            displayName = `${geoData[0].name}, ${geoData[0].country}`;
        } catch (error) {
            console.error('Geocoding error:', error);
            return NextResponse.json({ error: 'Failed to resolve location' }, { status: 500 });
        }
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await fetch(url, {
            next: { revalidate: 300 } // Cache for 5 minutes
        });

        if (!response.ok) {
            throw new Error(`OpenWeather API error: ${response.status}`);
        }

        const data = await response.json();

        const weatherData: WeatherData = {
            location: displayName,
            wind: {
                speed: Math.round(data.wind.speed * 3.6), // m/s to km/h
                direction: data.wind.deg,
                directionName: getWindDirectionName(data.wind.deg)
            },
            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            timestamp: Date.now()
        };

        return NextResponse.json(weatherData);
    } catch (error: any) {
        console.error('Weather API error:', error);
        return NextResponse.json({
            error: 'Failed to fetch weather data',
            details: error.message
        }, { status: 500 });
    }
}
