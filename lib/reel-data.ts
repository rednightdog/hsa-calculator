import { LanguageCode } from './dictionary';

export type Brand = 'Shimano' | 'Daiwa' | 'Okuma';
export type ReelType = 'lrf' | 'spin' | 'surf';

export interface Technology {
    id: string;
    name: string;
    brand: Brand;
    summary: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    benefit: Record<LanguageCode, string>;
}

export interface ReelModel {
    id: string;
    name: string;
    brand: Brand;
    types: ReelType[];
    weight: number; // grams
    priceRange: 'budget' | 'value' | 'premium';
    price: string;
    image: string;
    techs: string[];
    description: Record<LanguageCode, string>;
    link: string;
}

export const tools: Technology[] = [
    // SHIMANO TECHNOLOGIES
    {
        id: 'hagane_body',
        name: 'Hagane Body',
        brand: 'Shimano',
        summary: {
            tr: 'Metal Gövde Teknolojisi',
            en: 'High Rigidity Metal Body',
            jp: '高剛性金属ボディ',
            it: 'Corpo in Metallo Rigido',
            fr: 'Corps en Métal Rigide',
            cn: '高刚性金属机身'
        },
        description: {
            tr: 'HAGANE Body, yüksek rijitliğe sahip metal bir makine gövdesidir. Gövde sertliği ve darbe direnci, makinenin bükülmesini neredeyse tamamen ortadan kaldırır.',
            en: 'The HAGANE Body is a metal reel body with high rigidity. The body stiffness and impact resistance virtually guarantee the elimination of body flexing.',
            jp: 'HAGANEボディは、高い剛性を持つ金属製のボディです。不意の衝撃にも耐え、たわみを最小限に抑えることで、巻き上げる力を逃しません。',
            it: 'Il corpo HAGANE è un corpo mulinello in metallo ad alta rigidità. La rigidità del corpo e la resistenza agli urti eliminano praticamente la flessione.',
            fr: 'Le corps HAGANE est un corps de moulinet en métal à haute rigidité. La rigidité du corps et la résistance aux chocs éliminent pratiquement toute flexion.',
            cn: 'HAGANE机身是具有高刚性的金属机身。机身刚性和抗冲击性几乎消除了机身弯曲。'
        },
        benefit: {
            tr: 'Yük altında makine esnemez, tüm gücünüz balığa aktarılır.',
            en: 'Direct cranking power transmission without energy loss.',
            jp: '高負荷時でもボディが歪まず、力をダイレクトに伝達します。',
            it: 'Trasmissione diretta della potenza senza perdita di energia.',
            fr: 'Transmission directe de la puissance sans perte d\'énergie.',
            cn: '直接动力传输，无能量损失。'
        }
    },
    {
        id: 'hagane_gear',
        name: 'Hagane Gear',
        brand: 'Shimano',
        summary: {
            tr: 'Soğuk Dövme Dişli',
            en: 'Cold Forged Gear',
            jp: '精密冷間鍛造ギア',
            it: 'Ingranaggi Forgiati a Freddo',
            fr: 'Engrenages Forgés à Froid',
            cn: '冷锻齿轮'
        },
        description: {
            tr: 'Kesme işlemi olmadan, tek parça metalden soğuk dövme teknolojisi ile üretilen dişli sistemi. Mikron seviyesinde hassasiyet sağlar.',
            en: 'Drive gear produced by cold forging technology from a single piece of metal, without any cutting process.',
            jp: '金属の塊を約200トンの圧力でプレスし、切削なしにミクロン単位の精度で仕上げたドライブギアです。',
            it: 'Ingranaggio di trasmissione prodotto con tecnologia di forgiatura a freddo da un unico pezzo di metallo.',
            fr: 'Engrenage d\'entraînement produit par technologie de forgeage à froid à partir d\'une seule pièce de métal.',
            cn: '通过冷锻技术由单块金属无需切割工艺制造的驱动齿轮。'
        },
        benefit: {
            tr: 'Dişliler zamanla aşınmaz, ilk günkü pürüzsüzlüğünü korur.',
            en: 'Long-lasting smoothness and durability.',
            jp: '驚異的な耐久性と、変わらない巻きごこちを実現します。',
            it: 'Fluidità e durata nel tempo.',
            fr: 'Fluidité et durabilité longue durée.',
            cn: '持久的平滑度和耐用性。'
        }
    },
    {
        id: 'micromodule_ii',
        name: 'MicroModule Gear II',
        brand: 'Shimano',
        summary: {
            tr: 'Mikro Dişli Sistemi',
            en: 'Micro Gear System',
            jp: 'マイクロモジュールギアII',
            it: 'Sistema Micro Ingranaggi',
            fr: 'Système Micro Engrenages',
            cn: '微型齿轮系统'
        },
        description: {
            tr: 'Dişli yüzeylerinin ideal şekilde tasarlanması ve dişlerin küçültülerek sayısının artırılması teknolojisidir.',
            en: 'State-of-the-art gear tooth surface design and MicroModule Gear, further advanced through Shimanos exclusive manufacturing technology.',
            jp: '歯を可能な限り小型化し、数を増やすことで滑らかな噛み合わせを実現した機構をさらに進化させました。',
            it: 'Design della superficie dei denti all\'avanguardia e MicroModule Gear avanzato.',
            fr: 'Conception de surface de dents d\'engrenage de pointe et MicroModule Gear avancé.',
            cn: '最先进的齿面设计和MicroModule齿轮。'
        },
        benefit: {
            tr: 'İnanılmaz derecede pürüzsüz bir sarım hissi ve sıfır boşluk.',
            en: 'Silky smooth reeling and reduced noise.',
            jp: 'シルキーな巻き心地と、ノイズの低減を実現。',
            it: 'Avvolgimento setoso e rumore ridotto.',
            fr: 'Enroulement soyeux et bruit réduit.',
            cn: '如丝般顺滑的收线和降低的噪音。'
        }
    },
    {
        id: 'infinity_loop',
        name: 'Infinity Loop',
        brand: 'Shimano',
        summary: {
            tr: 'Süper Yavaş Osilasyon',
            en: 'Super Slow Oscillation',
            jp: 'インフィニティループ',
            it: 'Oscillazione Super Lenta',
            fr: 'Oscillation Super Lente',
            cn: '超慢速摆动'
        },
        description: {
            tr: 'Makara aşağı-yukarı hareketini (osilasyon) aşırı yavaşlatarak misinanın bobine çok sık ve düzenli sarılmasını sağlar.',
            en: 'Significantly reduces the speed of the spool oscillation to wind the line very strictly and orderly.',
            jp: 'スプールの上下動を極限まで低速化し、ラインを緻密に整列させて巻き取る技術です。',
            it: 'Riduce significativamente la velocità di oscillazione della bobina.',
            fr: 'Réduit considérablement la vitesse d\'oscillation de la bobine.',
            cn: '显著降低线杯摆动速度，使排线非常紧密有序。'
        },
        benefit: {
            tr: 'Atış sırasında misina sürtünmesi azalır, çok daha uzun atışlar yapılır.',
            en: 'Drastically reduces line friction during casting for longer distance.',
            jp: 'キャスト時の放出抵抗が激減し、抜けるようなキャストフィールと飛距離を生みます。',
            it: 'Riduce drasticamente l\'attrito del filo durante il lancio.',
            fr: 'Réduit considérablement la friction de la ligne lors du lancer.',
            cn: '大幅减少抛投时的出线摩擦，增加距离。'
        }
    },
    {
        id: 'infinity_drive',
        name: 'Infinity Drive',
        brand: 'Shimano',
        summary: {
            tr: 'Yüksek Torklu Sarım',
            en: 'High Torque Winding',
            jp: 'インフィニティドライブ',
            it: 'Avvolgimento ad Alta Coppia',
            fr: 'Enroulement à Couple Élevé',
            cn: '高扭矩卷绕'
        },
        description: {
            tr: 'Pinyon dişlisini sürtünmeden kurtaran ve yük altında bile kolun hafif dönmesini sağlayan mil yataklama sistemi.',
            en: 'A standard structure designed to support the pinion gear with bearings, achieving light winding even under heavy load.',
            jp: 'ピニオンギアを内側からスプール軸で支持する構造を一新し、回転抵抗を最大60%低減。',
            it: 'Struttura progettata per supportare il pignone con cuscinetti.',
            fr: 'Structure conçue pour supporter le pignon avec des roulements.',
            cn: '通过轴承支撑小齿轮的结构，即使在重负荷下也能实现轻盈卷绕。'
        },
        benefit: {
            tr: 'Büyük balıkla mücadele ederken kolu çevirmek "yapay" şekilde kolaylaşır.',
            en: 'Powerful and light winding even when fighting large fish.',
            jp: '高負荷時でも驚くほど軽く、力強い巻き上げが可能になります。',
            it: 'Avvolgimento potente e leggero anche combattendo pesci grandi.',
            fr: 'Enroulement puissant et léger même en combattant de gros poissons.',
            cn: '即使在对抗大鱼时也能实现强劲而轻盈的卷绕。'
        }
    },
    {
        id: 'x_protect',
        name: 'X-Protect',
        brand: 'Shimano',
        summary: {
            tr: 'Su Geçirmezlik',
            en: 'Water Resistance',
            jp: 'Xプロテクト',
            it: 'Resistenza all\'acqua',
            fr: 'Résistance à l\'eau',
            cn: '防水'
        },
        description: {
            tr: 'Labirent yapılı özel su tahliye kanalları ve su itici gres yağı kombinasyonu.',
            en: 'Combines a labyrinth structure that physically suppresses water intrusion with water-repellent grease.',
            jp: '撥水処理とラビリンス構造を組み合わせ、回転の軽さを損なわずに高い防水性能を実現。',
            it: 'Combina una struttura a labirinto con grasso idrorepellente.',
            fr: 'Combine une structure en labyrinthe avec de la graisse hydrofuge.',
            cn: '结合labyrinth结构和防水油脂，物理阻止水侵入。'
        },
        benefit: {
            tr: 'Tuzlu suyun yıkıcı etkisine karşı tam koruma. Bakım ihtiyacını azaltır.',
            en: 'High water resistance without sacrificing rotation lightness.',
            jp: '塩ガミを大幅に抑制し、初期性能を長期間維持します。',
            it: 'Alta resistenza all\'acqua senza sacrificare la leggerezza.',
            fr: 'Haute résistance à l\'eau sans sacrifier la légèreté.',
            cn: '在不牺牲旋转轻盈度的情况下实现高防水性。'
        }
    },

    // DAIWA TECHNOLOGIES
    {
        id: 'airdrive_design',
        name: 'Airdrive Design',
        brand: 'Daiwa',
        summary: {
            tr: 'Yeni Nesil Hafiflik',
            en: 'Next Gen Lightness',
            jp: 'エアドライブデザイン',
            it: 'Leggerezza di Nuova Generazione',
            fr: 'Légèreté Nouvelle Génération',
            cn: '新一代轻量化设计'
        },
        description: {
            tr: 'Rotor, makara, kol ve şaftın tamamen yeniden tasarlanarak ağırlık merkezinin ele yaklaştırılması ve ataletin düşürülmesi konsepti.',
            en: 'New concept reducing the weight of Rotor, Spool, Bail and Shaft to lower inertia and shift center of gravity.',
            jp: 'ローター、ベール、スプール、シャフトを軽量化し、操作性を劇的に向上させる次世代設計思想。',
            it: 'Nuovo concetto che riduce il peso di rotore, bobina, archetto e albero.',
            fr: 'Nouveau concept réduisant le poids du rotor, de la bobine, de l\'anse et de l\'arbre.',
            cn: '减轻转盘、线杯、线规和轴的重量，降低惯性并改变重心的新概念。'
        },
        benefit: {
            tr: 'Makine sanki elinizde yokmuş gibi hissedersiniz. Kamış kontrolü ve vuruş hassasiyeti artar.',
            en: 'Ultimate control and sensitivity. The reel disappears in your hand.',
            jp: '意のままにルアーを操作でき、巻き出しの軽さが感度を研ぎ澄ませます。',
            it: 'Controllo e sensibilità definitivi.',
            fr: 'Contrôle et sensibilité ultimes.',
            cn: '极致的操控和灵敏度。'
        },
    },
    {
        id: 'monocoque',
        name: 'Monocoque (MQ) Body',
        brand: 'Daiwa',
        summary: {
            tr: 'Tek Parça Gövde',
            en: 'One-Piece Body',
            jp: 'モノコックボディ',
            it: 'Corpo Monoscocca',
            fr: 'Corps Monocoque',
            cn: '单体壳机身'
        },
        description: {
            tr: 'Geleneksel kapaklı yapı yerine, motor kapağı gibi vidalanan tek parça gövde yapısıdır.',
            en: 'One-piece body structure that eliminates the need for body cover screws, allowing more space for larger gears.',
            jp: 'ボディカバーを廃し、ボディに直接高精度のプレートをねじ込むことで、強靭さと広大なギアスペースを実現。',
            it: 'Struttura monoscocca che elimina le viti del coperchio.',
            fr: 'Structure monocoque éliminant les vis du couvercle.',
            cn: '消除机身盖螺丝的单体结构，为更大的齿轮提供空间。'
        },
        benefit: {
            tr: 'Daha büyük ve güçlü dişliler sığdırılabilir. Vidalar olmadığı için gövde esnemez.',
            en: 'Stronger, sealed gear housing and improved power.',
            jp: '巨大なドライブギアを封入でき、剛性と防水性が飛躍的に向上します。',
            it: 'Alloggiamento ingranaggi più forte e sigillato.',
            fr: 'Boîtier d\'engrenage plus fort et scellé.',
            cn: '更强、更密封的齿轮室和提升的动力。'
        },
    },
    {
        id: 'magsealed',
        name: 'Magsealed',
        brand: 'Daiwa',
        summary: {
            tr: 'Manyetik Yağ Koruması',
            en: 'Magnetic Oil Protection',
            jp: 'マグシールド',
            it: 'Protezione Olio Magnetico',
            fr: 'Protection Huile Magnétique',
            cn: '磁油保护'
        },
        description: {
            tr: 'Uzay teknolojisi ile geliştirilen manyetik yağ (Mag Oil), rotor ve gövde arasında aşılamaz bir sıvı bariyer oluşturur.',
            en: 'A waterproof wall of magnetic oil shuts out seawater and dust.',
            jp: '磁性流体「マグオイル」の壁で、海水や埃の侵入をシャットアウトする防水・防塵構造。',
            it: 'Un muro impermeabile di olio magnetico chiude fuori acqua salata e polvere.',
            fr: 'Un mur étanche d\'huile magnétique empêche l\'eau salée et la poussière d\'entrer.',
            cn: '磁油防水墙阻挡海水和灰尘。'
        },
        benefit: {
            tr: 'Makineniz su almaz ama dönüşü asla ağırlaşmaz. İlk günkü yağ gibi döner.',
            en: 'Maintenance-free smooth rotation for years.',
            jp: 'メンテナンスフリーで、初期の滑らかな回転性能が長期間維持されます。',
            it: 'Rotazione fluida senza manutenzione per anni.',
            fr: 'Rotation fluide sans entretien pendant des années.',
            cn: '多年免维护的顺滑旋转。'
        },
    },
    {
        id: 'atd',
        name: 'ATD Drag',
        brand: 'Daiwa',
        summary: {
            tr: 'Otomatik Kalama',
            en: 'Automatic Tournament Drag',
            jp: 'ATD',
            it: 'Frizione Automatica',
            fr: 'Frein Automatique',
            cn: '自动卸力'
        },
        description: {
            tr: 'Balığın ani vuruşlarında yumuşakça yol veren, ancak balık koştukça direnci stabilize eden akıllı kalama sistemi.',
            en: 'ATD works smoothly at start up and then increases drag pressure as speed increases.',
            jp: '魚の引きに追従して滑らかに効き続ける新世代のドラグシステム。',
            it: 'Funziona dolcemente all\'avvio e poi aumenta la pressione della frizione.',
            fr: 'Fonctionne en douceur au démarrage puis augmente la pression du frein.',
            cn: '起步顺滑，并在速度增加时增加阻力压力。'
        },
        benefit: {
            tr: 'İnce misinalarla bile büyük balıklarla güvenle mücadele edebilirsiniz. Kopmaları önler.',
            en: 'Prevents line breakage and fights fish more efficiently.',
            jp: '滑り出しがスムーズで、ファイト中のラインブレイクを防ぎます。',
            it: 'Previene la rottura del filo.',
            fr: 'Empêche la rupture de la ligne.',
            cn: '防止断线，更有效地对抗鱼类。'
        }
    },
    {
        id: 'lt_concept',
        name: 'LT Concept',
        brand: 'Daiwa',
        summary: {
            tr: 'Light & Tough',
            en: 'Light & Tough',
            jp: 'LIGHT & TOUGH',
            it: 'Leggero e Resistente',
            fr: 'Léger et Résistant',
            cn: '轻量且强韧'
        },
        description: {
            tr: 'Daha küçük kasa boyutlarıyla daha yüksek güç ve dayanıklılık elde etme felsefesi.',
            en: 'LT concept introduces a smaller and lighter reel frame that is tougher than ever.',
            jp: 'ボディ、スプール、ハンドルといった細部までの徹底した軽量化へのこだわり。',
            it: 'Concetto che introduce un telaio più piccolo e leggero.',
            fr: 'Concept introduisant un cadre plus petit et plus léger.',
            cn: '引入了更小更轻的渔轮框架，比以往更坚韧。'
        },
        benefit: {
            tr: 'Bütün gün yorulmadan, bileğiniz ağrımadan av yapabilirsiniz.',
            en: 'All-day fishing comfort without fatigue.',
            jp: '軽さが感度を生み、長時間の釣行でも疲れません。',
            it: 'Comfort di pesca per tutto il giorno.',
            fr: 'Confort de pêche toute la journée.',
            cn: '全天钓鱼舒适无疲劳。'
        }
    },

    // OKUMA TECHNOLOGIES
    {
        id: 'tca',
        name: 'TCA (Torsion Control Armor)',
        brand: 'Okuma',
        summary: {
            tr: 'Burulma Kontrol Zırhı',
            en: 'Torsion Control Armor',
            jp: 'トーションコントロールアーマー',
            it: 'Armatura Controllo Torsione',
            fr: 'Armure Contrôle Torsion',
            cn: '扭力控制装甲'
        },
        description: {
            tr: 'Çift kollu karbon gövde tasarımı. Makine gövdesini bir zırh gibi sararak yük altında bükülmeyi önler.',
            en: 'Double-arm body design that reduces twist and torque and keeps the internal parts in perfect alignment.',
            jp: 'ダブルアーム構造がボディのねじれを抑制し、内部パーツの配置を常に適正に保ちます。',
            it: 'Design a doppio braccio che riduce torsione e coppia.',
            fr: 'Conception à double bras réduisant la torsion et le couple.',
            cn: '双臂机身设计，减少扭曲和扭矩，保持内部零件完美对齐。'
        },
        benefit: {
            tr: 'Ağır balıkla mücadele ederken makine kasmaz, iç mekanizma hizada kalır.',
            en: 'Solid feel and durability under heavy pressure.',
            jp: '高負荷時でもボディが歪まず、安定した巻き上げ力を発揮します。',
            it: 'Sensazione solida e durata sotto forte pressione.',
            fr: 'Sensation solide et durabilité sous forte pression.',
            cn: '在重压下具有坚实的手感和耐用性。'
        },
    },
    {
        id: 'flite_shaft',
        name: 'Flite Shaft',
        brand: 'Okuma',
        summary: {
            tr: 'Sürtünmesiz Şaft',
            en: 'Frictionless Shaft',
            jp: 'フライトシャフト',
            it: 'Albero Senza Attrito',
            fr: 'Arbre Sans Friction',
            cn: '无摩擦轴'
        },
        description: {
            tr: 'Pinyon dişlisinin içi boşaltılarak şaft ile teması azaltılır, böylece sürtünme en aza indirilir.',
            en: 'Reduces friction between the main shaft and pinion gear for lighter rotation.',
            jp: 'メインシャフトとピニオンギアの摩擦を極限まで減らし、驚くほど軽い回転を実現。',
            it: 'Riduce l\'attrito tra l\'albero principale e il pignone.',
            fr: 'Réduit la friction entre l\'arbre principal et le pignon.',
            cn: '减少主轴和小齿轮之间的摩擦，实现更轻盈的旋转。'
        },
        benefit: {
            tr: 'Kol dönüşü çok daha hafif ve pürüzsüz hale gelir.',
            en: 'Lighter handle rotation and sensitivity.',
            jp: '巻き始めが軽く、繊細なアタリも逃しません。',
            it: 'Rotazione della manovella più leggera.',
            fr: 'Rotation de la manivelle plus légère.',
            cn: '更轻盈的手柄旋转和灵敏度。'
        },
    },
    {
        id: 'cfr',
        name: 'CFR (Cyclonic Flow Rotor)',
        brand: 'Okuma',
        summary: {
            tr: 'Siklonik Akış Rotoru',
            en: 'Cyclonic Flow Rotor',
            jp: 'サイクロニック・フロー・ローター',
            it: 'Rotore a Flusso Ciclonico',
            fr: 'Rotor à Flux Cyclonique',
            cn: '气旋流动转盘'
        },
        description: {
            tr: 'Rotor her döndüğünde makine etrafında girdap şeklinde hava akımı yaratır. Islanan makineyi hızla kurutur.',
            en: 'Creates a cyclonic airflow that significantly increases air flow through the rotor to dry the reel faster.',
            jp: 'ローター回転時にサイクロン状の気流を生み出し、リール内部の水分を素早く乾燥させます。',
            it: 'Crea un flusso d\'aria ciclonico che asciuga il mulinello più velocemente.',
            fr: 'Crée un flux d\'air cyclonique qui sèche le moulinet plus rapidement.',
            cn: '产生气旋气流，显著增加通过转盘的气流，使渔轮更快干燥。'
        },
        benefit: {
            tr: 'Korozyonu önler, makinenin ömrünü uzatır.',
            en: 'Prevents corrosion and extends reel life.',
            jp: '腐食を防ぎ、リールの寿命を延ばします。',
            it: 'Previene la corrosione.',
            fr: 'Prévient la corrosion.',
            cn: '防止腐蚀并延长渔轮寿命。'
        }
    },
    {
        id: 'c40x',
        name: 'C-40X Carbon',
        brand: 'Okuma',
        summary: {
            tr: 'Hafif Karbon Malzeme',
            en: 'Lightweight Carbon',
            jp: 'C-40Xカーボン',
            it: 'Carbonio Leggero',
            fr: 'Carbone Léger',
            cn: '轻量碳纤维'
        },
        description: {
            tr: 'Standart grafite göre %25 daha hafif ve %50 daha güçlü özel karbon polimer malzeme.',
            en: 'Precisely engineered carbon polymer that is 25% lighter and 50% stronger than standard graphite.',
            jp: '標準的なグラファイトよりも25%軽く、50%強い特別に設計されたカーボンポリマー。',
            it: 'Polimero di carbonio 25% più leggero e 50% più forte.',
            fr: 'Polymère de carbone 25% plus léger et 50% plus fort.',
            cn: '比标准石墨轻25%，强50%的精密工程碳聚合物。'
        },
        benefit: {
            tr: 'Metal kadar sağlam ama plastik kadar hafif bir gövde.',
            en: 'Rigidity of metal with the lightness of plastic.',
            jp: '金属並みの剛性と、樹脂並みの軽さを両立。',
            it: 'Rigidità del metallo con la leggerezza della plastica.',
            fr: 'Rigidité du métal avec la légèreté du plastique.',
            cn: '金属的刚性和塑料的轻盈。'
        }
    },
    {
        id: 'hd_gear',
        name: 'HDG-II (High Density Gearing)',
        brand: 'Okuma',
        summary: {
            tr: 'Yüksek Yoğunluklu Dişli',
            en: 'High Density Gearing',
            jp: '高密度ギア',
            it: 'Ingranaggi ad Alta Densità',
            fr: 'Engrenages Haute Densité',
            cn: '高密度齿轮'
        },
        description: {
            tr: 'Korozyona dayanıklı, yüksek yoğunluklu alaşımlı ana dişli.',
            en: 'Corrosion resistant, high density alloy main gear.',
            jp: '耐腐食性に優れた高密度合金製のメインギア。',
            it: 'Ingranaggio principale in lega ad alta densità resistente alla corrosione.',
            fr: 'Engrenage principal en alliage haute densité résistant à la corrosion.',
            cn: '耐腐蚀，高密度合金主齿轮。'
        },
        benefit: {
            tr: 'Zorlu şartlarda güvenilir güç aktarımı ve dayanıklılık.',
            en: 'Reliable power transmission and durability.',
            jp: '過酷な状況下でも信頼できるパワー伝達と耐久性。',
            it: 'Trasmissione di potenza affidabile.',
            fr: 'Transmission de puissance fiable.',
            cn: '可靠的动力传输和耐用性。'
        }
    }
];

export const reels: ReelModel[] = [
    // SHIMANO
    {
        id: 'stella_fk',
        name: 'Shimano Stella FK',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 210, // C3000
        priceRange: 'premium',
        price: '25.000 - 35.000 ₺',
        image: '/reels/stella.png',
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'infinity_loop', 'infinity_drive', 'x_protect'],
        description: { tr: 'Japon mühendisliğinin zirvesi. Sonsuzluk hissi veren pürüzsüzlük.', en: 'The pinnacle of Japanese engineering. Smoothness that feels infinite.', jp: '日本工学の頂点。無限を感じさせる滑らかさ。', it: 'L\'apice dell\'ingegneria giapponese.', fr: 'Le summum de l\'ingénierie japonaise.', cn: '日本工程的巅峰。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'vanford',
        name: 'Shimano Vanford',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 180, // C3000
        priceRange: 'value',
        price: '8.000 - 10.000 ₺',
        image: '/reels/vanford.png',
        techs: ['hagane_gear', 'micromodule_ii', 'x_protect', 'silent_drive'],
        description: { tr: 'Hız ve hassasiyet için tasarlandı. LRF ve Light Spin için mükemmel hafiflik.', en: 'Designed for speed and sensitivity. Perfect lightness for LRF.', jp: 'スピードと感度のために設計されました。LRFに最適な軽さ。', it: 'Progettato per velocità e sensibilità.', fr: 'Conçu pour la vitesse et la sensibilité.', cn: '为速度和灵敏度而设计。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'stradic_fm',
        name: 'Shimano Stradic FM',
        brand: 'Shimano',
        types: ['spin', 'surf'],
        weight: 225,
        priceRange: 'value',
        price: '7.000 - 9.000 ₺',
        image: '/reels/stradic.png',
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'x_protect'],
        description: { tr: 'Dünyanın en çok tercih edilen spin makinesi.', en: 'The most preferred spinning reel in the world.', jp: '世界で最も選ばれているスピニングリール。', it: 'Il mulinello da spinning più preferito al mondo.', fr: 'Le moulinet spinning le plus préféré au monde.', cn: '世界上最受欢迎的纺车轮。' },
        link: 'https://amzn.to/3XXX'
    },

    // DAIWA
    {
        id: 'exist_g',
        name: 'Daiwa Exist LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 160,
        priceRange: 'premium',
        price: '30.000 - 45.000 ₺',
        image: '/reels/exist.png',
        techs: ['airdrive_design', 'monocoque', 'magsealed', 'atd'],
        description: { tr: 'Geleceğin teknolojisi. Airdrive ile ağırlıksızlık hissi.', en: 'Future technology. Weightlessness with Airdrive.', jp: '未来のテクノロジー。エアドライブによる無重力感。', it: 'Tecnologia del futuro.', fr: 'Technologie du futur.', cn: '未来科技。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'certate',
        name: 'Daiwa Certate LT',
        brand: 'Daiwa',
        types: ['spin', 'surf'],
        weight: 205,
        priceRange: 'premium',
        price: '15.000 - 20.000 ₺',
        image: '/reels/certate.png',
        techs: ['airdrive_design', 'monocoque', 'magsealed'],
        description: { tr: 'Güç abidesi. Zorlu şartlar için tek parça gövde.', en: 'A pillar of strength. Monocoque body for tough conditions.', jp: '強さの象徴。過酷な条件のためのモノコックボディ。', it: 'Un pilastro di forza.', fr: 'Un pilier de force.', cn: '力量的支柱。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'caldia',
        name: 'Daiwa Caldia MQ',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 195,
        priceRange: 'value',
        price: '6.000 - 8.000 ₺',
        image: '/reels/caldia.png',
        techs: ['monocoque', 'magsealed', 'zaion'],
        description: { tr: 'MQ gövde teknolojisine sahip en erişilebilir model.', en: 'Most accessible model with MQ body tech.', jp: 'MQボディ技術を搭載した最も身近なモデル。', it: 'Modello più accessibile con tecnologia MQ.', fr: 'Modèle le plus accessible avec technologie MQ.', cn: '拥有MQ机身技术的最亲民型号。' },
        link: 'https://amzn.to/3XXX'
    },

    // OKUMA
    {
        id: 'itx',
        name: 'Okuma ITX Carbon',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 200,
        priceRange: 'value',
        price: '4.000 - 5.500 ₺',
        image: '/reels/itx.png',
        techs: ['tca', 'c40x', 'cfr', 'flite_shaft'],
        description: { tr: 'Tamamen karbon gövde yapısıyla hafiflik ve gücün birleşimi.', en: 'Fusion of lightness and strength with full carbon body.', jp: 'フルカーボンボディによる軽さと強さの融合。', it: 'Fusione di leggerezza e forza.', fr: 'Fusion de légèreté et de force.', cn: '全碳机身，轻量与强度的融合。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'inspira',
        name: 'Okuma Inspira ISX',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 210,
        priceRange: 'value',
        price: '3.500 - 4.500 ₺',
        image: '/reels/inspira.png',
        techs: ['tca', 'flite_shaft', 'cfr'],
        description: { tr: 'TCA teknolojisi ile burulmaya karşı maksimum direnç.', en: 'Max resistance to torsion with TCA tech.', jp: 'TCA技術によるねじれに対する最大の耐性。', it: 'Massima resistenza alla torsione.', fr: 'Résistance maximale à la torsion.', cn: 'TCA技术最大程度抵抗扭曲。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'ceymar_hd',
        name: 'Okuma Ceymar HD',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 235,
        priceRange: 'budget',
        price: '2.500 - 3.500 ₺',
        image: '/reels/ceymar.png',
        techs: ['hd_gear', 'cfr', 'flite_shaft'],
        description: { tr: 'Yenilenen HD dişli sistemiyle pürüzsüz ve güçlü.', en: 'Smooth and powerful with renewed HD gear system.', jp: '刷新されたHDギアシステムで滑らかかつ強力。', it: 'Fluido e potente.', fr: 'Fluide et puissant.', cn: '全新的HD齿轮系统，顺滑有力。' },
        link: 'https://amzn.to/3XXX'
    }
];
