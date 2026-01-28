import type { Metadata } from 'next';
import SurfPageContent from '@/components/SurfPageContent';

export const metadata: Metadata = {
    title: "Surf Casting Hesaplama | Uzak Atış ve Beklemeli Av",
    description: "Surf avlarında en uzağa atış yapabilmek için ideal kurşun ağırlığı, shock leader ve misina kombinasyonunu hesaplayın.",
};

export default function SurfPage() {
    return <SurfPageContent />;
}
