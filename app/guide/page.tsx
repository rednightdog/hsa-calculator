import { Book, Compass, Wind, Sun, Search, Anchor, ArrowRight, Home, HelpCircle, Fish, Bug } from 'lucide-react';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Balıkçılık Rehberi | Terimler, Yemler ve Taktikler",
    description: "Balıkçılıkta kullanılan terimler (Drag, PE, Jerk vb.), hedef balıklara göre yem seçimi ve mera okuma rehberi.",
};

export default function GuidePage() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-emerald-500/30">

            {/* Hero / Header */}
            <section className="relative pt-20 pb-16">
                <div className="container mx-auto px-4 text-center">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 justify-center">
                        <Link href="/" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                            <Home className="w-3 h-3" /> Ana Sayfa
                        </Link>
                        <span>/</span>
                        <span className="text-white">Rehber & Sözlük</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Balıkçı <span className="text-emerald-400">Bilgi Bankası</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Terimler, taktikler, hedef balıklar ve yem rehberi üzerine amatörler için derlenmiş ipuçları.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-5xl space-y-20 pb-20">

                {/* SECTION 1: SÖZLÜK (GLOSSARY) */}
                <section id="glossary" className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                            <Book className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Balıkçı Sözlüğü</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card title="Drag (Kalama)" icon={<Anchor className="w-4 h-4" />}>
                            Makinenin ip verme direnci. Balık asıldığında ipin kopmaması için makinenin &apos;cırcır&apos; sesi çıkarerek ip salmasıdır. İyi ayarlanmış drag hayat kurtarır.
                        </Card>
                        <Card title="PE Değeri" icon={<HelpCircle className="w-4 h-4" />}>
                            Japon ip kalınlık standardı. mm cinsinden değil, ağırlık bazlı bir ölçümdür. Numara düştükçe ip incelir (örn: 0.2 PE çok incedir).
                        </Card>
                        <Card title="Erim (Casting)" icon={<Wind className="w-4 h-4" />}>
                            Sahteyi fırlattığınızda ulaştığı maksimum mesafe. Rüzgar, ip kalınlığı ve kamış boyu erimi doğrudan etkiler.
                        </Card>
                        <Card title="Jerk / Jerking" icon={<ArrowRight className="w-4 h-4" />}>
                            Kamışla yapılan sert vurdurma hareketi. Sahteye yaralı balık taklidi yaptırır. Kofana ve Levrek avında sık kullanılır.
                        </Card>
                        <Card title="WTD (Walk The Dog)" icon={<ArrowRight className="w-4 h-4" />}>
                            Su üstü sahtelerine, kamış ucuyla zikzak çizdirme aksiyonu. &quot;Köpeği gezdirme&quot; anlamına gelir.
                        </Card>
                        <Card title="Devir (Gear Ratio)" icon={<Search className="w-4 h-4" />}>
                            Makine kolunun bir turunda kafanın kaç tur attığı. Yüksek devir (6.2:1) hızlı sarım için, düşük devir (4.8:1) güç için tercih edilir.
                        </Card>
                        <Card title="Shock Leader" icon={<Anchor className="w-4 h-4" />}>
                            Atış anındaki patlama gücünü emmesi için ana ipin ucuna eklenen, ana ipten daha kalın ve esnek misina parçası.
                        </Card>
                        <Card title="Aksiyon (Kamış)" icon={<HelpCircle className="w-4 h-4" />}>
                            Kamışın bükülme karakteri. <strong>Fast:</strong> Sadece uçtan bükülür (Hissiyatlı). <strong>Regular:</strong> Ortadan bükülür (Daha esnek).
                        </Card>
                    </div>
                </section>

                {/* SECTION 2: HEDEF BALIK REHBERİ (FISH SPECIES) */}
                <section id="species" className="scroll-mt-24 pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                            <Fish className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Hedef Balık Rehberi</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SpeciesCard
                            title="Lüfer / Kofana (Bluefish)"
                            desc="Denizlerin en agresif avcısıdır. Çok keskin dişleri vardır, bu yüzden mutlaka çelik tel veya kalın florokarbon lider kullanılmalıdır. Sabah ve akşam suyu en verimli saatleridir. Su üstü (WTD) ve kaşık sahtelerine bayılır."
                            season="Eylül - Ocak"
                            tackle="Spin (Orta/Sert), Çelik Tel"
                        />
                        <SpeciesCard
                            title="Levrek (Seabass)"
                            desc="Zeki ve şüpheci bir balıktır. Bulanık suları ve dalgalı havaları sever (Levrek havası). Sessizlik çok önemlidir. Silikon yemler ve dalarlı maket balıklar (Minnow) ile avlanır. Lider misina şarttır."
                            season="Kış ve İlkbahar"
                            tackle="Spin (Hassas), İnce Lider"
                        />
                        <SpeciesCard
                            title="Çipura / Karagöz"
                            desc="Dip balıklarıdır. Yengeç, midye ve solucan ile beslenirler. LRF ile 'Micro Jig' veya kokulu silikonlar (Berkley Gulp) kullanılarak kandırılabilir. Vuruşları serttir, tasmalamayı iyi yapmak gerekir."
                            season="Yaz ve Sonbahar"
                            tackle="LRF veya Beklemeli (Surf)"
                        />
                        <SpeciesCard
                            title="Kefal / Has Kefal"
                            desc="Ekmek ve hamur ile avlanır. Çok ürkektir. Şamandıralı takımlar veya 'Kıbrıs Oltası' (çok iğneli sarmal) ile yakalanır. Büyükleri (Has Kefal) çok güçlü mücadele eder."
                            season="Yıl Boyu (İlkbahar En İyi)"
                            tackle="Şamandıralı / Dip (Kıbrıs)"
                        />
                        <SpeciesCard
                            title="Minekop / Eşkina"
                            desc="Kaya kenarlarında ve derin oyuklarda yaşarlar. Gece avcılarıdır. Fosforlu boncuklar veya canlı teke (karides) ile avlanırlar. Misinayı kayalara sürterek koparmaya çalışırlar."
                            season="Yaz ve Sonbahar"
                            tackle="Surf Casting / Beklemeli"
                        />
                    </div>
                </section>

                {/* SECTION 3: YEM REHBERİ (BAIT GUIDE) */}
                <section id="bait" className="scroll-mt-24 pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                            <Bug className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Yem Dünyası</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-3 text-cyan-400">Yapay Yemler (Sahteler)</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• <strong>Maket Balık:</strong> Plastik veya ahşap, dalarlı veya su üstü.</li>
                                <li>• <strong>Silikon:</strong> Yumuşak, kurt veya balık taklidi. En ekonomiktir.</li>
                                <li>• <strong>Metal Jig:</strong> Ağır metal, uzak atış için. Dipten zıplatılır.</li>
                                <li>• <strong>Kaşık:</strong> Parlak metal levha, yansıma yaparak balığı çeker.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-3 text-orange-400">Doğal Yemler</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• <strong>Boru Kurdu:</strong> En popüler genel yem. Her balık yer.</li>
                                <li>• <strong>Sülünes:</strong> Kabuklu yumuşakça. Çipura ve Mırmır sever.</li>
                                <li>• <strong>Mamun:</strong> Karides benzeri canlı. Çok etkilidir ama iğneden çabuk düşer.</li>
                                <li>• <strong>Tavuk Göğsü:</strong> Ekonomik alternatif. Tuzlanarak sertleştirilir.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-3 text-red-400">Canlı Yem Yakalama</h3>
                            <p className="text-sm text-slate-400 mb-3">Büyük balık (Levrek, Akya) yakalamak için en iyi yem, canlı küçük balıktır (Kefal, İstavrit, Zargana).</p>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>• <strong>Kıbrıs Oltası:</strong> Kefal yakalamak için ekmek sarılan çok iğneli düzenek.</li>
                                <li>• <strong>Çapari:</strong> İstavrit yakalamak için tüylü 10&apos;lu iğne takımı.</li>
                                <li>• <strong>Şişe Tuzağı:</strong> Pet şişenin ağzı ters çevrilerek içine hamur konur, sığ suya bırakılır (Gümüş/İlarya için).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: MERA OKUMA (MERA TIPS) */}
                <section id="mera" className="scroll-mt-24 pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                            <Compass className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Mera Okuma & Taktikler</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tip 1 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex gap-4">
                            <div className="min-w-[48px] h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400">
                                <Wind className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Rüzgarı Arkanıza Almayın</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Genel kanının aksine, rüzgarı tam karşıdan (veya çaprazdan) almak genellikle daha verimlidir. Rüzgar, planktonları ve küçük balıkları kıyıya iter. Avcı balıklar da onları takip eder.
                                </p>
                            </div>
                        </div>

                        {/* Tip 2 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex gap-4">
                            <div className="min-w-[48px] h-12 bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-400">
                                <Sun className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Alacakaranlık Büyüsü</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Güneşin doğuşu (Sabah suyu) ve batışı (Akşam suyu), avcı balıkların en aktif olduğu saatlerdir. Işık kırılması balıkların sahteyi fark etmesini zorlaştırır, cesaretini artırır.
                                </p>
                            </div>
                        </div>

                        {/* Tip 3 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex gap-4">
                            <div className="min-w-[48px] h-12 bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-400">
                                <Search className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Akıntı ve Renk Farkı</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Deniz yüzeyindeki köpükler, suyun renginin değiştiği çizgiler (Mavi/Yeşil arası) veya akıntının oluşturduğu burgaçlar... Balıklar genellikle bu sınır hatlarında pusu kurar.
                                </p>
                            </div>
                        </div>

                        {/* Tip 4 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex gap-4">
                            <div className="min-w-[48px] h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                                <Anchor className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Sessizlik ve Gölge</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Kıyıya çok yaklaşırken gölgenizin suya düşmemesine dikkat edin. LRF gibi kıyı avlarında balıklar sizi görebilir. Sessiz olun ve mümkünse çömelerek atış yapın.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

function Card({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors group">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                {icon} {title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
                {children}
            </p>
        </div>
    )
}

function SpeciesCard({ title, desc, season, tackle }: { title: string, desc: string, season: string, tackle: string }) {
    return (
        <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700 hover:bg-slate-800/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30">{season}</span>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-900/20 px-3 py-2 rounded-lg w-fit">
                <Anchor className="w-3 h-3" />
                {tackle}
            </div>
        </div>
    )
}
