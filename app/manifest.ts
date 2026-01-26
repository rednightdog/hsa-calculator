import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Fish Gear Guru',
        short_name: 'FG Guru',
        description: 'Profesyonel Balıkçılık Ekipman Rehberi ve Hesaplayıcısı',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/app-icon.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    }
}
