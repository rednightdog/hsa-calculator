import HSACalculator from '@/components/HSACalculator';
import { BookOpen, CheckCircle, HelpCircle, Anchor, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 justify-center">
            <Link href="/" className="hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white">HSA</span>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              HSA (Hafif Sahte Avcılığı) İçin Optimize Edildi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Meralarda <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kusursuz Seçim</span> Yapın.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Japon JAFTMA standartlarına göre geliştirilen akıllı algoritma ile sahte ağırlığınıza en uygun PE misina, lider ve drag ayarını saniyeler içinde hesaplayın.
            </p>
          </div>

          <HSACalculator />

          {/* Database CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/database"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all group"
            >
              <Database className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium">PE Misina Veri Tabanını İncele</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 bg-cyan-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">Doğru Ekipman</h3>
              <p className="text-sm text-slate-500">Gramajınıza en uygun PE değerini bularak takım hassasiyetini maksimize edin.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">Doğru Aksiyon</h3>
              <p className="text-sm text-slate-500">İnce ip sayesinde sahtenizin su altındaki doğal süzülüşünü bozmayın.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-10 h-10 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-indigo-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">Güvenli Av</h3>
              <p className="text-sm text-slate-500">Kopma gücü ve drag önerileriyle trofe balıkları kaçırma riskini azaltın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-cyan-500" />
              PE Değeri Ve HSA Rehberi
            </h2>

            <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-cyan-500 mb-8">
              <h3 className="text-xl font-semibold text-white mt-0 mb-2">Hızlı Özet</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>PE</strong> = Kopma Gücü Standardı</li>
                <li><strong>0.2 PE</strong> ≈ 1.7 kg kopma gücü ≈ 0.074mm çap</li>
                <li><strong>0.4 PE</strong> ≈ 3.3 kg kopma gücü ≈ 0.104mm çap</li>
                <li className="text-cyan-400 font-medium">İnce PE = Daha hassas hissiyat + Daha doğal sunum = Daha fazla balık</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Neden Bu Kadar Önemli?</h3>
            <p>
              HSA (Hafif Sahte Avcılığı) disiplininde, başarının en kritik faktörü doğru misina seçimidir. Yanlış bir seçim tüm sistemi bozabilir.
            </p>
            <p>
              <strong>Kalın PE + Hafif Sahte = SORUN:</strong><br />
              2 gram jighead + 0.6 PE kullanırsanız, misina su direncinden dolayı sahteyi "frenler". Sahte doğal düşüş hızıyla inemez, yapay bir şekilde asılı kalır ve balık saldırmaz.
            </p>
            <p>
              <strong>İnce PE + Hafif Sahte = ÇÖZÜM:</strong><br />
              Aynı 2 gram jighead ile 0.3 PE kullandığınızda, misina suda minimal direnç oluşturur. Sahte serbestçe düşer, aksiyonunu tam yapar ve balık refleks olarak saldırır.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">PE Seçim Tablosu</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="p-4 font-semibold">Sahte Ağırlığı</th>
                    <th className="p-4 font-semibold">Önerilen PE</th>
                    <th className="p-4 font-semibold">Kullanım Alanı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700 bg-slate-900/60">
                  <tr>
                    <td className="p-4">0.3 - 1g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.1 - 0.2 PE</td>
                    <td className="p-4 text-slate-400">Mikro Ajing</td>
                  </tr>
                  <tr>
                    <td className="p-4">0.5 - 2g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.2 - 0.3 PE</td>
                    <td className="p-4 text-slate-400">Ultra Light (HSA)</td>
                  </tr>
                  <tr>
                    <td className="p-4">1 - 3g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.3 PE</td>
                    <td className="p-4 text-slate-400">Light (En Yaygın)</td>
                  </tr>
                  <tr>
                    <td className="p-4">2 - 4g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.3 - 0.4 PE</td>
                    <td className="p-4 text-slate-400">Medium Light / Derin</td>
                  </tr>
                  <tr>
                    <td className="p-4">3 - 6g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.4 - 0.5 PE</td>
                    <td className="p-4 text-slate-400">Medium / Rüzgarlı</td>
                  </tr>
                  <tr>
                    <td className="p-4">5 - 7g</td>
                    <td className="p-4 text-cyan-400 font-medium">0.5 - 0.6 PE</td>
                    <td className="p-4 text-slate-400">Medium Heavy / Trofe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-6 bg-slate-800 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">💡 Altın Kural</h3>
              <p className="text-slate-300 m-0">
                Sahte ağırlığını gram olarak al, 10 ile çarp, sonucu 100'e böl = Optimal PE değeri.
                <br /><br />
                <span className="text-cyan-400">Örnek:</span> 3 gram sahte → (3 × 10) ÷ 100 = <strong>0.3 PE</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© 2025 HSA Calculator. Balıkçılar için, balıkçılar tarafından tasarlandı.</p>
        <p className="mt-2 text-xs">Veriler JAFTMA standartlarına dayanmaktadır.</p>
      </footer>

    </main>
  );
}
