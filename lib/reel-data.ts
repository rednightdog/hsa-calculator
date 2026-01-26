import { LanguageCode } from './dictionary';

// Brand Type Expansion
export type Brand = 'Shimano' | 'Daiwa' | 'Okuma' | 'Penn' | 'Abu Garcia' | 'Ryobi' | 'Savage Gear' | 'DAM' | 'Mitchell' | 'Van Staal' | 'KastKing' | 'Tsurinoya' | 'Seaknight' | 'Megabass' | 'Evergreen';
export type ReelType = 'lrf' | 'spin' | 'surf';

export interface BrandInfo {
    name: Brand;
    origin: string;
    category: string;
    lrfScore: number; // 1-10
    keyTechs: string[];
    developerNote: string;
    color: string; // Hex or Tailwind class for UI
}

export const manufacturers: Record<Brand, BrandInfo> = {
    Shimano: {
        name: 'Shimano',
        origin: 'Japonya',
        category: 'High-End / Mühendislik',
        lrfScore: 10,
        keyTechs: ['Hagane Body', 'Micromodule Gear', 'X-Ship', 'Silent Drive'],
        developerNote: 'Veriler (Ağırlık/Drag) %99 tutarlıdır. Referans marka.',
        color: 'from-blue-600 to-indigo-900'
    },
    Daiwa: {
        name: 'Daiwa',
        origin: 'Japonya',
        category: 'High-End / İnovasyon',
        lrfScore: 10,
        keyTechs: ['MagSealed', 'LT (Light & Tough)', 'Monocoque Body', 'Digigear'],
        developerNote: '"LT" konsepti LRF için kritik bir filtreleme verisidir.',
        color: 'from-orange-500 to-red-900'
    },
    Okuma: {
        name: 'Okuma',
        origin: 'Tayvan',
        category: 'Fiyat/Performans (Pro)',
        lrfScore: 9,
        keyTechs: ['TCA', 'C-40X Carbon', 'Cyclonic Flow', 'Dual Force Drag'],
        developerNote: 'Türkiye pazarında çok yaygın. Yedek parça verisi boldur.',
        color: 'from-emerald-500 to-teal-900'
    },
    Penn: {
        name: 'Penn',
        origin: 'ABD',
        category: 'Heavy Duty / Tork',
        lrfScore: 5,
        keyTechs: ['HT-100 Drag', 'CNC Gear', 'IPX6 Sealing'],
        developerNote: 'LRF için ağır kalır, "Surf Casting" modülü için elzemdir.',
        color: 'from-yellow-600 to-amber-900'
    },
    'Abu Garcia': {
        name: 'Abu Garcia',
        origin: 'İsveç/ABD',
        category: 'Hız / Turnuva',
        lrfScore: 8,
        keyTechs: ['Revo Series', 'Rocket Line Management', 'Carbon Matrix'],
        developerNote: 'Özellikle "Baitcasting" (Çıkrık) modülü eklenirse 10 puandır.',
        color: 'from-red-600 to-rose-900'
    },
    Ryobi: {
        name: 'Ryobi',
        origin: 'Japon/Çin',
        category: 'Dayanıklılık / F/P',
        lrfScore: 7,
        keyTechs: ['NCRT (Hafif Kompozit)', 'RFO'],
        developerNote: 'Efsanevi modelleri (Ecusima/Virtual) Türkiye\'de çoktur.',
        color: 'from-lime-600 to-green-900'
    },
    'Savage Gear': {
        name: 'Savage Gear',
        origin: 'Danimarka',
        category: 'Predatör / Agresif',
        lrfScore: 8,
        keyTechs: ['SGS (Saltwater)', 'Friction Control Drag'],
        developerNote: 'Son yıllarda LRF makineleri (SG2, SG4) çok popülerleşti.',
        color: 'from-gray-600 to-slate-900'
    },
    DAM: {
        name: 'DAM',
        origin: 'Almanya',
        category: 'Geleneksel',
        lrfScore: 6,
        keyTechs: ['Quick Series', 'Anti-Vibro'],
        developerNote: 'Eski toprakçılar kullanır, verileri standarttır.',
        color: 'from-stone-600 to-stone-900'
    },
    Mitchell: {
        name: 'Mitchell',
        origin: 'Fransa',
        category: 'Klasik Spin',
        lrfScore: 6,
        keyTechs: ['Halo Rotor', 'Carbon Hybrid Drag'],
        developerNote: 'Dünyanın ilk spin makinesi üreticisi, orta segment.',
        color: 'from-yellow-500 to-orange-800'
    },
    'Van Staal': {
        name: 'Van Staal',
        origin: 'ABD',
        category: 'Extreme / Surf',
        lrfScore: 2,
        keyTechs: ['Fully Sealed', 'Titanium Shaft'],
        developerNote: 'LRF için uygun değil, sadece "Hardcore Surf" için.',
        color: 'from-zinc-500 to-zinc-900'
    },
    KastKing: {
        name: 'KastKing',
        origin: 'Çin/ABD',
        category: 'E-Ticaret / Bütçe',
        lrfScore: 7,
        keyTechs: ['Shark Fin Spool', 'Intruder Rotor'],
        developerNote: 'Veri tutarlılığı Japonlar kadar net olmayabilir (Tolerans payı bırakılmalı).',
        color: 'from-cyan-600 to-blue-900'
    },
    Tsurinoya: {
        name: 'Tsurinoya',
        origin: 'Çin',
        category: 'LRF / BFS (Niş)',
        lrfScore: 9,
        keyTechs: ['Carbon Washer', 'Ultra Light Spool'],
        developerNote: 'LRF ve BFS (Bait Finesse) için özel üretim. Veriler şaşırtıcı derecede iyidir.',
        color: 'from-pink-600 to-rose-900'
    },
    Seaknight: {
        name: 'Seaknight',
        origin: 'Çin',
        category: 'Bütçe Dostu',
        lrfScore: 7,
        keyTechs: ['Power Drag', 'Anti-Corrosion Bearings'],
        developerNote: 'Başlangıç seviyesi kullanıcılar için veri tabanında olmalı.',
        color: 'from-indigo-500 to-indigo-900'
    },
    Megabass: {
        name: 'Megabass',
        origin: 'Japonya',
        category: 'Boutique / Sanat',
        lrfScore: 9,
        keyTechs: ['Özel Modifiye Daiwa Sistemleri'],
        developerNote: 'Çok pahalı ve niş. "Luxury" segmenti.',
        color: 'from-purple-600 to-fuchsia-900'
    },
    Evergreen: {
        name: 'Evergreen',
        origin: 'Japonya',
        category: 'Pro / Turnuva',
        lrfScore: 8,
        keyTechs: ['Opus Series'],
        developerNote: 'Genelde kamış üreticisi olsa da üst düzey makineleri vardır.',
        color: 'from-green-600 to-emerald-900'
    }
};

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
    // price property removed
    // image property removed
    techs: string[];
    description: Record<LanguageCode, string>;
    link: string;
}

export const tools: Technology[] = [
    // --- SHIMANO TECHNOLOGIES ---
    {
        id: 'anti_twist_fin',
        name: 'Anti-Twist Fin',
        brand: 'Shimano',
        summary: {
            tr: 'Misina Bükülme Önleyici',
            en: 'Anti-Twist Fin',
            jp: 'アンチツイストフィン',
            it: 'Aletta Anti-Torsione',
            fr: 'Ailette Anti-Vrillage',
            cn: '防缠绕鳍'
        },
        description: {
            tr: 'Misina sarıcı silindirin (line roller) hemen altına yerleştirilen elastik bir yüzgeçtir. Misina boşaldığında bile bobine girmeden önce gergin kalmasını sağlar.',
            en: 'Elastic fin installed on the lower part of the line roller. It prevents line from sagging and reduces line twist entering the spool.',
            jp: 'ラインローラー下部に設置された弾性フィン。ラインのたるみを抑え、スプール下部へのライン落ちやヨレたままの巻き取りを防止します。',
            it: 'Aletta elastica installata sotto il rullino guidafilo che previene l\'allentamento del filo.',
            fr: 'Ailette élastique installée sous le galet de ligne pour empêcher le mou de la ligne.',
            cn: '安装在导线轮下方的弹性鳍片，防止鱼线松弛和缠绕。'
        },
        benefit: {
            tr: 'Rüzgarlı havalarda oluşan "kuş gözü" ve misina düğümlerini tamamen ortadan kaldırır.',
            en: 'Eliminates wind knots and keeps line management perfect.',
            jp: 'ライントラブル（バックラッシュや糸ヨレ）を劇的に低減します。',
            it: 'Elimina i nodi da vento.',
            fr: 'Élimine les perruques ve vent.',
            cn: '消除风结，保持鱼线管理完美。'
        }
    },
    {
        id: 'duracross',
        name: 'DuraCross Drag',
        brand: 'Shimano',
        summary: {
            tr: '10 Kat Güçlü Kalama Pulu',
            en: 'High Durability Drag Washer',
            jp: 'デュラクロス',
            it: 'Rondella Frizione DuraCross',
            fr: 'Rondelle de Frein DuraCross',
            cn: '高耐久刹车片'
        },
        description: {
            tr: 'Karbon liflerinin özel bir desenle (dik açılı) dokunmasıyla üretilen yeni nesil kalama pulu.',
            en: 'New drag washer material made by weaving carbon fibers in a perpendicular pattern.',
            jp: '新素材の繊維を直交するように織り込んだドラグワッシャー。滑らかさはそのままに、耐摩耗性を10倍以上に高めました。',
            it: 'Nuovo materiale per rondelle frizione con fibre di carbonio intessute.',
            fr: 'Nouveau matériau de rondelle de frein tissé en fibres de carbone.',
            cn: '通过垂直编织碳纤维制成的新型刹车片材料。'
        },
        benefit: {
            tr: 'Standart keçelere göre 10 kat daha dayanıklıdır ama aynı yumuşaklıkta çalışır.',
            en: '10x more durability than felt washers with the same smoothness.',
            jp: 'フェルトの滑らかさとカーボンの耐久性を両立。ドラグ性能が劣化しません。',
            it: '10 volte più durevole delle rondelle in feltro.',
            fr: '10x plus durable que les rondelles en feutre.',
            cn: '比羊毛片耐用10倍，且保持顺滑。'
        }
    },
    {
        id: 'rigid_support_drag',
        name: 'Rigid Support Drag',
        brand: 'Shimano',
        summary: {
            tr: 'Rijit Destekli Kalama',
            en: 'Rigid Support Drag',
            jp: 'リジッドサポートドラグ',
            it: 'Supporto Rigido Frizione',
            fr: 'Support Rigide de Frein',
            cn: '刚性支撑刹车'
        },
        description: {
            tr: 'Ana şaft ve bobin yatağı arasındaki boşluğu sıfırlayarak, bobinin yalpalama yapmasını engelleyen iki noktalı destek sistemidir.',
            en: 'Eliminates spool wobble/waggling during drag operation by supporting the spool on the main shaft with two bearings.',
            jp: 'メインシャフト、スプール内のベアリング2点でスプールを支持し、ドラグ作動時のスプールのフラつきを完全に抑制します。',
            it: 'Elimina l\'oscillazione della bobina durante l\'azione della frizione.',
            fr: 'Élimine l\'oscillation de la bobine pendant l\'action du frein.',
            cn: '通过两个轴承支撑线杯，消除刹车时的线杯晃动。'
        },
        benefit: {
            tr: 'En ince misinalarda bile kalama pürüzsüzce akar, ani kopmaları önler.',
            en: 'Insanely smooth line release even at light drag settings.',
            jp: '極細ラインでも安定してラインが放出され、ラインブレイクを防ぎます。',
            it: 'Rilascio del filo incredibilmente fluido.',
            fr: 'Libération de ligne incroyablement fluide.',
            cn: '即使在轻刹车设置下也能极其顺滑地出线。'
        }
    },
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
            it: 'Il corpo HAGANE è un corpo mulinello in metallo ad alta rigidità.',
            fr: 'Le corps HAGANE est un corps de moulinet en métal à haute rigidité.',
            cn: 'HAGANE机身是具有高刚性的金属机身。'
        },
        benefit: {
            tr: 'Yük altında makine esnemez, tüm gücünüz balığa aktarılır.',
            en: 'Direct cranking power transmission without energy loss.',
            jp: '高負荷時でもボディが歪まず、力をダイレクトに伝達します。',
            it: 'Trasmissione diretta della potenza.',
            fr: 'Transmission directe de la puissance.',
            cn: '直接动力传输，无能量损失。'
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
            en: 'State-of-the-art gear tooth surface design and MicroModule Gear.',
            jp: '歯を可能な限り小型化し、数を増やすことで滑らかな噛み合わせを実現した機構をさらに進化させました。',
            it: 'Design della superficie dei denti all\'avanguardia.',
            fr: 'Conception de surface de dents d\'engrenage de pointe.',
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
            it: 'Riduce drasticamente l\'attrito del filo.',
            fr: 'Réduit considérablement la friction de la ligne.',
            cn: '大幅减少抛投时的出线摩擦，增加距离。'
        }
    },
    {
        id: 'infinity_drive',
        name: 'Infinity Drive',
        brand: 'Shimano',
        summary: {
            tr: 'Sürtünmesiz Dönüş',
            en: 'Frictionless Rotation',
            jp: 'インフィニティドライブ',
            it: 'Rotazione Senza Attrito',
            fr: 'Rotation Sans Friction',
            cn: '无摩擦旋转'
        },
        description: {
            tr: 'Pinyon dişlisini destekleyen yeni bir yapı.',
            en: 'A new structure that supports the pinion gear.',
            jp: 'ピニオンギアを支える新構造。',
            it: 'Nuova struttura che supporta il pignone.',
            fr: 'Nouvelle structure supportant le pignon.',
            cn: '支撑小齿轮的新结构。'
        },
        benefit: {
            tr: 'Daha güçlü ve hafif sarım.',
            en: 'More powerful and lighter winding.',
            jp: 'より力強く、軽い巻き上げ。',
            it: 'Avvolgimento più potente e leggero.',
            fr: 'Enroulement plus puissant et léger.',
            cn: '更强力、更轻盈的收线。'
        }
    },
    {
        id: 'silent_drive',
        name: 'Silent Drive',
        brand: 'Shimano',
        summary: {
            tr: 'Sessiz Sürüş',
            en: 'Silent Drive',
            jp: 'サイレントドライブ',
            it: 'Guida Silenziosa',
            fr: 'Entraînement Silencieux',
            cn: '静音驱动'
        },
        description: {
            tr: 'Gövde içindeki en ufak boşlukları ve sesleri ortadan kaldıran tasarım.',
            en: 'Design that eliminates the smallest gaps and noises inside the body.',
            jp: 'ボディ内部の微細なガタやノイズを排除した設計。',
            it: 'Design che elimina i più piccoli spazi e rumori.',
            fr: 'Conception éliminant les plus petits espaces et bruits.',
            cn: '消除机身内部最小间隙和噪音的设计。'
        },
        benefit: {
            tr: 'Pürüzsüz ve sessiz performans.',
            en: 'Smooth and silent performance.',
            jp: '滑らかで静かな性能。',
            it: 'Prestazioni fluide e silenziose.',
            fr: 'Performance fluide et silencieuse.',
            cn: '平滑且静音的性能。'
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
            tr: 'Labirent yapısı ile suyun iç aksama girmesini engeller.',
            en: 'Prevents water intrusion with a labyrinth structure.',
            jp: 'ラビリンス構造で水の浸入を防ぎます。',
            it: 'Previene l\'intrusione d\'acqua con una struttura a labirinto.',
            fr: 'Empêche l\'intrusion d\'eau avec une structure en labyrinthe.',
            cn: '通过迷宫结构防止进水。'
        },
        benefit: {
            tr: 'Tuzlu suyun zararlı etkilerine karşı tam koruma.',
            en: 'Full protection against saltwater.',
            jp: '塩水による腐食から守ります。',
            it: 'Protezione completa contro l\'acqua salata.',
            fr: 'Protection complète contre l\'eau salée.',
            cn: '完全防止盐水腐蚀。'
        }
    },
    {
        id: 'hagane_gear',
        name: 'Hagane Gear',
        brand: 'Shimano',
        summary: {
            tr: 'Soğuk Dövme Dişli',
            en: 'Cold Forged Gear',
            jp: 'HAGANEギア',
            it: 'Ingranaggio Forgiato a Freddo',
            fr: 'Engrenage Forgé à Froid',
            cn: '冷锻齿轮'
        },
        description: {
            tr: 'Kesme işlemi olmadan, moleküler yapısı bozulmadan preslenen metal dişli.',
            en: 'Metal gear pressed without cutting, preserving molecular structure.',
            jp: '切削なしでプレスされた金属ギア。',
            it: 'Ingranaggio pressato senza taglio.',
            fr: 'Engrenage pressé sans coupe.',
            cn: '无切削压制的金属齿轮。'
        },
        benefit: {
            tr: 'Yıllarca bozulmayan pürüzsüzlük ve güç.',
            en: 'Long-lasting smoothness and power.',
            jp: '長期間続く滑らかさと強さ。',
            it: 'Fluidità e potenza durature.',
            fr: 'Fluidité et puissance durables.',
            cn: '持久的顺滑和强力。'
        }
    },

    // --- DAIWA TECHNOLOGIES ---
    {
        id: 'twist_buster_iii',
        name: 'Twist Buster III',
        brand: 'Daiwa',
        summary: {
            tr: 'Misina Bükülme Önleyici III',
            en: 'Line Twist Reduction',
            jp: 'ツイストバスターIII',
            it: 'Riduzione Torsione Filo',
            fr: 'Réduction Vrillage Ligne',
            cn: '防缠绕系统 III'
        },
        description: {
            tr: 'Misina silindirinde (line roller) yapılan oluklu tasarım, misinanın sarılırken kendi etrafında dönmesini (burulmasını) engeller. Yeni nesil Magsealed ile korunur.',
            en: 'Updated line roller with a groove to flatten the line as it is retrieved, preventing twist. Often Magsealed.',
            jp: 'ラインローラーにテーパーをかけて糸を転がすことで、スピニングリールの宿命である糸ヨレを大幅に解消。最新版はさらに溝を追加。',
            it: 'Rullino guidafilo aggiornato che appiattisce il filo mentre viene recuperato.',
            fr: 'Galet de ligne mis à jour aplatissant la ligne lors de la récupération.',
            cn: '更新的导线轮带有一个凹槽，可在回收时压平鱼线，防止缠绕。'
        },
        benefit: {
            tr: 'İnce PE (örgü) iplerin düğüm olmasını ve kuş gözünü engeller.',
            en: 'Prevents line twist and prolongs line life.',
            jp: 'PEラインのトラブルを激減させ、ラインの寿命を延ばします。',
            it: 'Previene la torsione del filo.',
            fr: 'Prévient le vrillage de la ligne.',
            cn: '防止鱼线缠绕并延长鱼线寿命。'
        }
    },
    {
        id: 'atd_type_l',
        name: 'ATD Type-L',
        brand: 'Daiwa',
        summary: {
            tr: 'Hassas Başlangıç Kalaması',
            en: 'Sensitive Initial Drag',
            jp: 'ATD TYPE-L',
            it: 'Frizione Iniziale Sensibile',
            fr: 'Frein Initial Sensible',
            cn: '灵敏初始刹车'
        },
        description: {
            tr: 'Standart ATD\'ye göre daha düşük viskoziteli özel bir yağ kullanılır. Bu, balığın ilk vuruşundaki o "yapışmayı" (ilk direnci) tamamen yok eder.',
            en: 'Uses a lower viscosity grease than standard ATD. Eliminates the initial "stickiness" at the start of the drag.',
            jp: '魚の引きに合わせて滑らかに効き続けるATDの特性を維持しつつ、初動のレスポンスをさらに向上させたチューニング。',
            it: 'Usa un grasso a bassa viscosità. Elimina l\'"incollaggio" iniziale.',
            fr: 'Utilise une graisse à faible viscosité. Élimine le "collage" initial.',
            cn: '使用比标准ATD更低粘度的油脂。消除了刹车启动时的初始“粘滞感”。'
        },
        benefit: {
            tr: '0.2 PE gibi çok ince iplerle (LRF) avlanırken ani kopmaların önüne geçer.',
            en: 'Critical for light line fishing (LRF) to prevent instant breaks.',
            jp: 'ライトライン使用時のラインブレイクを防ぎ、安心してファイトできます。',
            it: 'Critico per la pesca leggera.',
            fr: 'Critique pour la pêche légère.',
            cn: '对于细线钓鱼至关重要，防止瞬间断线。'
        }
    },
    {
        id: 'atd',
        name: 'ATD',
        brand: 'Daiwa',
        summary: {
            tr: 'Otomatik Turnuva Kalaması',
            en: 'Automatic Tournament Drag',
            jp: 'ATD',
            it: 'Frizione Automatica da Torneo',
            fr: 'Frein Automatique de Tournoi',
            cn: '自动竞技刹车'
        },
        description: {
            tr: 'Balığın çekişine göre direncini otomatik ayarlayan akıllı kalama.',
            en: 'Smart drag that adjusts resistance based on fish pull.',
            jp: '魚の引きに合わせて滑らかに作動。',
            it: 'Frizione intelligente.',
            fr: 'Frein intelligent.',
            cn: '智能刹车。'
        },
        benefit: {
            tr: 'Misinayı korur ve balığı daha çabuk yorar.',
            en: 'Protects line and tires fish faster.',
            jp: 'ラインを守り、魚を早く疲れさせる。',
            it: 'Protegge il filo.',
            fr: 'Protège la ligne.',
            cn: '保护鱼线。'
        }
    },
    {
        id: 'airdrive_design',
        name: 'Airdrive Design',
        brand: 'Daiwa',
        summary: {
            tr: 'Ağırlıksız Rotasyon',
            en: 'Weightless Rotation',
            jp: 'エアドライブデザイン',
            it: 'Rotazione Senza Peso',
            fr: 'Rotation Sans Poids',
            cn: '无重力旋转'
        },
        description: {
            tr: 'Rotor, makara, kol ve şaftın ağırlık merkezini arkaya taşıyarak ataleti düşürme konsepti.',
            en: 'Redesign of Rotor, Spool, Bail and Shaft to lower inertia.',
            jp: 'フロントユニットの軽量化により、巻き出しの軽さと操作性を劇的に向上させる次世代設計思想。',
            it: 'Riprogettazione di Rotore, Bobina, Archetto e Albero.',
            fr: 'Redesign du Rotor, de la Bobine, de l\'Anse et de l\'Arbre.',
            cn: '重新设计转盘、线杯、线规和轴以降低惯性。'
        },
        benefit: {
            tr: 'Makineyi çevirdiğinizi değil, suyun akışını hissedersiniz. Ultra hassasiyet.',
            en: 'Ultimate control and sensitivity. The reel disappears in your hand.',
            jp: '意のままにルアーを操作でき、水中情報をダイレクトに手元に伝えます。',
            it: 'Controllo e sensibilità definitivi.',
            fr: 'Contrôle et sensibilité ultimes.',
            cn: '极致的操控和灵敏度。'
        }
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
            tr: 'Vidasız, tek parça gövde yapısı. İç hacmi genişletir.',
            en: 'One-piece body structure eliminating screws, allowing bigger gears.',
            jp: 'ボディカバーを廃し、高精度のプレートを直接ねじ込むことで、強靭さと広大なギアスペースを実現。',
            it: 'Struttura monoscocca che elimina le viti.',
            fr: 'Structure monocoque éliminant les vis.',
            cn: '消除螺丝的单体结构，允许更大的齿轮。'
        },
        benefit: {
            tr: 'Daha büyük dişli = Daha fazla güç. Gövde esnemesi sıfır.',
            en: 'Stronger, sealed gear housing and improved power.',
            jp: '巨大なドライブギアを封入でき、パワーと防水性が向上します。',
            it: 'Alloggiamento ingranaggi più forte.',
            fr: 'Boîtier d\'engrenage plus fort.',
            cn: '更强、更密封的齿轮室。'
        }
    },
    {
        id: 'magsealed',
        name: 'Magsealed',
        brand: 'Daiwa',
        summary: {
            tr: 'Manyetik Yağ Kalkanı',
            en: 'Magnetic Oil Shield',
            jp: 'マグシールド',
            it: 'Scudo a Olio Magnetico',
            fr: 'Bouclier d\'Huile Magnétique',
            cn: '磁油密封'
        },
        description: {
            tr: 'Uzay teknolojisi. Manyetik yağ ile suyun geçişini %100 engeller.',
            en: 'Space tech. Blocks water passage 100% with magnetic oil.',
            jp: '磁性流体で水の浸入をシャットアウト。',
            it: 'Blocca l\'acqua al 100%.',
            fr: 'Bloque l\'eau à 100%.',
            cn: '100%阻挡水。'
        },
        benefit: {
            tr: 'Sürtünmesiz su geçirmezlik.',
            en: 'Frictionless waterproofing.',
            jp: '回転性能を損なわず防水。',
            it: 'Impermeabilità senza attrito.',
            fr: 'Étanchéité sans friction.',
            cn: '无摩擦防水。'
        }
    },
    {
        id: 'zaion',
        name: 'Zaion / Zaion V',
        brand: 'Daiwa',
        summary: {
            tr: 'Yüksek Yoğunluklu Karbon',
            en: 'High Density Carbon',
            jp: 'ザイオン',
            it: 'Carbonio ad Alta Densità',
            fr: 'Carbone Haute Densité',
            cn: '高密度碳'
        },
        description: {
            tr: 'Metal kadar sert ve magnezyum kadar hafif özel karbon kompozit.',
            en: 'Special carbon composite as hard as metal and light as magnesium.',
            jp: '金属に匹敵する強さと、マグネシウムより軽い素材。',
            it: 'Duro come il metallo, leggero come il magnesio.',
            fr: 'Dur comme le métal, léger comme le magnésium.',
            cn: '硬如金属，轻如镁。'
        },
        benefit: {
            tr: 'Paslanmaz ve ultra hafiftir.',
            en: 'Corrosion proof and ultra light.',
            jp: '腐食せず、超軽量。',
            it: 'Anticorrosione e ultra leggero.',
            fr: 'Anticorrosion et ultra léger.',
            cn: '耐腐蚀且超轻。'
        }
    },
    {
        id: 'digigear',
        name: 'Digigear',
        brand: 'Daiwa',
        summary: {
            tr: 'Dijital Dişli Tasarımı',
            en: 'Digital Gear Design',
            jp: 'デジギア',
            it: 'Design Ingranaggi Digitale',
            fr: 'Conception d\'Engrenage Numérique',
            cn: '数字齿轮设计'
        },
        description: {
            tr: 'Dijital olarak tasarlanmış ve işlenmiş hassas dişliler.',
            en: 'Digitally designed and machined precision gears.',
            jp: 'デジタル設計された精密ギア。',
            it: 'Ingranaggi di precisione progettati digitalmente.',
            fr: 'Engrenages de précision conçus numériquement.',
            cn: '数字设计的精密齿轮。'
        },
        benefit: {
            tr: 'Pürüzsüz dönüş ve dayanıklılık.',
            en: 'Smooth rotation and durability.',
            jp: '滑らかな回転と耐久性。',
            it: 'Rotazione fluida e durata.',
            fr: 'Rotation fluide et durabilité.',
            cn: '平滑旋转和耐用性。'
        }
    },
    {
        id: 'hardbodyz',
        name: 'HardBodyz',
        brand: 'Daiwa',
        summary: {
            tr: 'Metal Alaşım Gövde',
            en: 'Metal Alloy Body',
            jp: 'ハードボディーズ',
            it: 'Corpo in Lega Metallica',
            fr: 'Corps en Alliage Métallique',
            cn: '金属合金机身'
        },
        description: {
            tr: 'Ağır yük altında esnemeyen sağlam alüminyum gövde.',
            en: 'Sturdy aluminum body that does not flex under heavy load.',
            jp: '高負荷でも歪まないアルミボディ。',
            it: 'Corpo in alluminio robusto.',
            fr: 'Corps en aluminium robuste.',
            cn: '重负荷下不弯曲的坚固铝机身。'
        },
        benefit: {
            tr: 'Büyük balıklarla mücadele için maksimum güç.',
            en: 'Maximum power for fighting big fish.',
            jp: '大物とのファイトに最大のパワー。',
            it: 'Massima potenza.',
            fr: 'Puissance maximale.',
            cn: '最大力量。'
        }
    },

    // --- OKUMA TECHNOLOGIES ---
    {
        id: 'litecast',
        name: 'LITECAST™',
        brand: 'Okuma',
        summary: {
            tr: 'Magnezyum Alaşım',
            en: 'Magnesium Structure',
            jp: 'ライトキャスト',
            it: 'Struttura in Magnesio',
            fr: 'Structure en Magnésium',
            cn: '镁合金结构'
        },
        description: {
            tr: 'Alüminyumdan %15 daha hafif olan özel Magnezyum alaşımı döküm teknolojisi.',
            en: 'Special Magnesium alloy casting technology that is 15% lighter than aluminum alloy.',
            jp: 'アルミニウム合金より15%軽量な、特殊マグネシウム合金の鋳造技術です。',
            it: 'Tecnologia di fusione in lega di magnesio speciale.',
            fr: 'Technologie de moulage en alliage de magnésium spécial.',
            cn: '特殊的镁合金铸造技术，比铝合金轻15%。'
        },
        benefit: {
            tr: 'Metal sağlamlığını tüy siklet ağırlıkla sunar.',
            en: 'Maximum strength with minimum weight.',
            jp: '強度を犠牲にすることなく、驚異的な軽さを実現します。',
            it: 'Massima forza con minimo peso.',
            fr: 'Force maximale avec un poids minimum.',
            cn: '以最小的重量提供最大的强度。'
        },
    },
    {
        id: 'dfd',
        name: 'Dual Force Drag (DFD)',
        brand: 'Okuma',
        summary: {
            tr: 'Çift Güçlü Kalama',
            en: 'Dual Force Drag',
            jp: 'デュアルフォースドラグ',
            it: 'Frizione a Doppia Forza',
            fr: 'Frein à Double Force',
            cn: '双力刹车'
        },
        description: {
            tr: 'Makaranın hem üstünde hem de altında diskler bulunur. Basıncı iki yüzeye eşit dağıtır.',
            en: 'Drag system mounted on both the top AND bottom of the spool to equalize pressure.',
            jp: 'スプールの上面だけでなく下面にもドラグワッシャーを配置し、上下から挟み込んで制動力を発揮します。',
            it: 'Sistema di frizione montato sia sopra che sotto la bobina.',
            fr: 'Système de frein monté à la fois sur le dessus et le dessous de la bobine.',
            cn: '安装在线杯顶部和底部的刹车系统，以平衡压力。'
        },
        benefit: {
            tr: 'Çok yüksek kalama güçlerinde bile ısınma yapmaz ve stabil çalışır (Büyük balık için).',
            en: 'Extremely stable high drag pressure and heat dissipation.',
            jp: '高負荷時の熱ダレを防ぎ、安定した強力なドラグ力を維持します。',
            it: 'Pressione di frizione estremamente stabile.',
            fr: 'Pression de frein extrêmement stable.',
            cn: '极其稳定的高刹车压力和散热性。'
        }
    },
    {
        id: 'flite_spool',
        name: 'Flite Spool™',
        brand: 'Okuma',
        summary: {
            tr: 'Hafifletilmiş Özel Makara',
            en: 'Super Tuned Spool',
            jp: 'フライトスプール',
            it: 'Bobina Super Tuned',
            fr: 'Bobine Super Réglée',
            cn: '超级调校线杯'
        },
        description: {
            tr: 'Dream Tackle (JDM) tarafından geliştirilen, et kalınlığı inceltilmiş özel hafif alüminyum makara.',
            en: 'Super lightweight spool designed by Dream Tackle aiming for long distance casting.',
            jp: 'Dream Tackleによって設計された、遠投性能を追求した超軽量スプール。',
            it: 'Bobina super leggera progettata per lanci a lunga distanza.',
            fr: 'Bobine super légère conçue pour les lancers longue distance.',
            cn: '专为远投设计的超轻线杯。'
        },
        benefit: {
            tr: 'Çok daha uzak mesafelere atış yapmanızı sağlar.',
            en: 'Increases casting distance significantly.',
            jp: '圧倒的な飛距離を生み出します。',
            it: 'Aumenta significativamente la distanza di lancio.',
            fr: 'Augmente considérablement la distance de lancer.',
            cn: '显著增加抛投距离。'
        }
    },
    {
        id: 'tca',
        name: 'TCA',
        brand: 'Okuma',
        summary: {
            tr: 'Burulma Kontrol Zırhı',
            en: 'Torsion Control Armor',
            jp: 'トーションコントロールアーマー',
            it: 'Armatura Controllo Torsione',
            fr: 'Armure Contrôle Torsion',
            cn: '扭力控制装甲'
        },
        description: { tr: 'Çift kollu gövde tasarımı.', en: 'Double-arm body design.', jp: 'ダブルアーム構造。', it: 'Design a doppio braccio.', fr: 'Conception à double bras.', cn: '双臂机身设计。' },
        benefit: { tr: 'Gövde esnemesini önler.', en: 'Prevents body twist.', jp: 'ボディのねじれを防ぎます。', it: 'Previene la torsione.', fr: 'Empêche la torsion.', cn: '防止机身扭曲。' }
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
            tr: 'Şaft ile pinyon arasındaki sürtünmeyi azaltan tasarım.',
            en: 'Design that reduces friction between shaft and pinion.',
            jp: 'シャフトとピニオン間の摩擦を低減。',
            it: 'Riduce l\'attrito.',
            fr: 'Réduit la friction.',
            cn: '减少摩擦。'
        },
        benefit: {
            tr: 'Daha pürüzsüz sarım.',
            en: 'Smoother winding.',
            jp: 'より滑らかな巻き心地。',
            it: 'Avvolgimento più fluido.',
            fr: 'Enroulement plus fluide.',
            cn: '更顺滑的收线。'
        }
    },
    {
        id: 'hd_gear',
        name: 'HD Gear',
        brand: 'Okuma',
        summary: {
            tr: 'Yüksek Yoğunluklu Dişli',
            en: 'High Density Gear',
            jp: 'HDギア',
            it: 'Ingranaggio ad Alta Densità',
            fr: 'Engrenage Haute Densité',
            cn: '高密度齿轮'
        },
        description: {
            tr: 'Güçlendirilmiş ve boyutu büyütülmüş ana dişli.',
            en: 'Reinforced and oversized main gear.',
            jp: '強化された大型メインギア。',
            it: 'Ingranaggio principale rinforzato.',
            fr: 'Engrenage principal renforcé.',
            cn: '强化的大尺寸主齿轮。'
        },
        benefit: {
            tr: 'Dayanıklılık ve güç.',
            en: 'Durability and power.',
            jp: '耐久性とパワー。',
            it: 'Durata e potenza.',
            fr: 'Durabilité et puissance.',
            cn: '耐用性和力量。'
        }
    },
    {
        id: 'cfr',
        name: 'CFR',
        brand: 'Okuma',
        summary: {
            tr: 'Siklonik Akış Rotoru',
            en: 'Cyclonic Flow Rotor',
            jp: 'サイクロニックフローローター',
            it: 'Rotore a Flusso Ciclonico',
            fr: 'Rotor à Flux Cyclonique',
            cn: '气旋流动转盘'
        },
        description: {
            tr: 'Hava akışını artırarak makinenin içini kurutan rotor tasarımı.',
            en: 'Rotor design that dries the reel internals by increasing airflow.',
            jp: '空気の流れを増やしてリール内部を乾燥させるローター。',
            it: 'Asciuga l\'interno del mulinello.',
            fr: 'Sèche l\'intérieur du moulinet.',
            cn: '干燥渔轮内部。'
        },
        benefit: {
            tr: 'Korozyonu önler.',
            en: 'Prevents corrosion.',
            jp: '腐食を防ぐ。',
            it: 'Previene la corrosione.',
            fr: 'Prévient la corrosion.',
            cn: '防止腐蚀。'
        }
    },
    {
        id: 'corrosion_resistant',
        name: 'Corrosion Resistant Body',
        brand: 'Okuma',
        summary: {
            tr: 'Korozyon Dirençli Gövde',
            en: 'Corrosion Resistant Body',
            jp: '耐腐食ボディ',
            it: 'Corpo Resistente alla Corrosione',
            fr: 'Corps Résistant à la Corrosion',
            cn: '耐腐蚀机身'
        },
        description: {
            tr: 'Tuzlu suya dayanıklı grafit gövde.',
            en: 'Saltwater resistant graphite body.',
            jp: '海水に強いグラファイトボディ。',
            it: 'Corpo in grafite resistente all\'acqua salata.',
            fr: 'Corps en graphite résistant à l\'eau salée.',
            cn: '耐盐水石墨机身。'
        },
        benefit: {
            tr: 'Uzun ömürlü kullanım.',
            en: 'Long lasting use.',
            jp: '長持ち。',
            it: 'Lunga durata.',
            fr: 'Longue durée.',
            cn: '持久使用。'
        }
    }
];

export const reels: ReelModel[] = [
    // --- SHIMANO ---
    {
        id: 'stella_fk',
        name: 'Shimano Stella FK',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 210,
        priceRange: 'premium',

        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'infinity_loop', 'infinity_drive', 'anti_twist_fin', 'duracross', 'rigid_support_drag'],
        description: { tr: 'Japon mühendisliğinin zirvesi ve sonsuz pürüzsüzlük.', en: 'The pinnacle of Japanese engineering.', jp: '日本工学の頂点。', it: 'L\'apice dell\'ingegneria giapponese.', fr: 'Le summum de l\'ingénierie japonaise.', cn: '日本工程的巅峰。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Stella+FK'
    },
    {
        id: 'vanquish_fc',
        name: 'Shimano Vanquish FC',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 170, // Ultra light
        priceRange: 'premium',
        techs: ['hagane_body', 'micromodule_ii', 'infinity_drive', 'x_protect', 'anti_twist_fin'],
        description: { tr: 'Hafifliğin ötesi. Hızlı tepki veren MGL rotor.', en: 'Beyond lightness. Quick response MGL rotor.', jp: '軽さのその先へ。', it: 'Oltre la leggerezza.', fr: 'Au-delà de la légèreté.', cn: '超越轻盈。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Vanquish+FC'
    },
    {
        id: 'twinpower_fe',
        name: 'Shimano TwinPower FE',
        brand: 'Shimano',
        types: ['spin'],
        weight: 215,
        priceRange: 'premium',
        techs: ['hagane_body', 'hagane_gear', 'infinity_loop', 'infinity_drive', 'duracross'],
        description: { tr: 'Sarsılmaz sağlamlık. Stella teknolojilerine sahip güç makinesi.', en: 'Unshakable solidity. Power reel with Stella techs.', jp: '揺るぎない堅牢性。', it: 'Solidità incrollabile.', fr: 'Solidité inébranlable.', cn: '不可动摇的坚固。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+TwinPower+FE'
    },
    {
        id: 'stradic_fm',
        name: 'Shimano Stradic FM',
        brand: 'Shimano',
        types: ['spin', 'surf'],
        weight: 225,
        priceRange: 'value',
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'x_protect', 'anti_twist_fin'],
        description: { tr: 'Spin balıkçılığının standardı. F/P kralı.', en: 'The standard of spin fishing.', jp: 'スピニングの基準。', it: 'Lo standard dello spinning.', fr: 'La référence du spinning.', cn: '纺车轮的标准。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Stradic+FM'
    },
    {
        id: 'vanford',
        name: 'Shimano Vanford',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 180,
        priceRange: 'value',
        techs: ['hagane_gear', 'micromodule_ii', 'x_protect', 'silent_drive'],
        description: { tr: 'Hassasiyet için süper hafif Ci4+ gövde.', en: 'Super light Ci4+ body for sensitivity.', jp: '感度のためのCi4+ボディ。', it: 'Corpo Ci4+ super leggero.', fr: 'Corps Ci4+ super leggero.', cn: '超轻Ci4+机身。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Vanford'
    },
    {
        id: 'miravel',
        name: 'Shimano Miravel',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 205,
        priceRange: 'budget',
        techs: ['hagane_gear', 'silent_drive', 'x_protect'],
        description: { tr: 'Ci4+ gövdeye sahip en ulaşılabilir hafif makine.', en: 'Most accessible light reel with Ci4+ body.', jp: '最も手頃なCi4+リール。', it: 'Mulinello leggero più accessibile.', fr: 'Moulinet léger le plus accessible.', cn: '最亲民的轻量轮。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Miravel'
    },
    {
        id: 'sedona_fj',
        name: 'Shimano Sedona FJ',
        brand: 'Shimano',
        types: ['spin', 'lrf'],
        weight: 245,
        priceRange: 'budget',
        techs: ['hagane_gear', 'silent_drive'],
        description: { tr: 'Hagane dişli teknolojisine sahip en uygun fiyatlı model.', en: 'Most affordable model with Hagane Gear.', jp: 'Haganeギア搭載の最安モデル。', it: 'Modello più economico con Hagane Gear.', fr: 'Modèle le plus abordable avec Hagane Gear.', cn: '拥有Hagane齿轮的最实惠型号。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Sedona+FJ'
    },
    {
        id: 'ultegra_xte',
        name: 'Shimano Ultegra XTE',
        brand: 'Shimano',
        types: ['surf'],
        weight: 600,
        priceRange: 'value',
        techs: ['hagane_gear', 'infinity_drive', 'rigid_support_drag', 'silent_drive'],
        description: { tr: 'Surf casting efsanesi. Uzak atış rekorları için.', en: 'Surf casting legend. For long distance records.', jp: 'サーフキャスティングの伝説。', it: 'Leggenda del surf casting.', fr: 'Légende du surf casting.', cn: '远投传奇。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Ultegra+XTE'
    },
    {
        id: 'fliegen_sd',
        name: 'Shimano Fliegen SD',
        brand: 'Shimano',
        types: ['surf'],
        weight: 490,
        priceRange: 'premium',
        techs: ['hagane_body', 'hagane_gear', 'x_protect', 'rigid_support_drag'],
        description: { tr: 'Hafif ve güçlü surf makinesi. Japon pazarı (JDM) favorisi.', en: 'Light and strong surf reel. JDM favorite.', jp: '軽くて強いサーフリール。', it: 'Mulinello da surf leggero e forte.', fr: 'Moulinet surf léger et fort.', cn: '轻量強力的远投轮。' },
        link: 'https://www.amazon.com.tr/s?k=Shimano+Fliegen+SD'
    },

    // --- DAIWA ---
    {
        id: 'exist_lt',
        name: 'Daiwa Exist LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 160,
        priceRange: 'premium',
        techs: ['airdrive_design', 'monocoque', 'magsealed', 'atd_type_l', 'twist_buster_iii'],
        description: { tr: 'Geleceğin teknolojisi. Airdrive ile ağırlıksızlık hissi.', en: 'Future technology. Weightlessness with Airdrive.', jp: '未来のテクノロジー。エアドライブによる無重力感。', it: 'Tecnologia del futuro.', fr: 'Technologie du futur.', cn: '未来科技。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Exist+LT'
    },
    {
        id: 'airity_lt',
        name: 'Daiwa Airity LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 145,
        priceRange: 'premium',
        techs: ['airdrive_design', 'monocoque', 'atd_type_l', 'twist_buster_iii'],
        description: { tr: 'Hafifliğin yeni tanımı. Magnezyum MQ gövde.', en: 'The new definition of lightness. Magnesium MQ body.', jp: '軽さの革命。', it: 'La nuova definizione di leggerezza.', fr: 'La nouvelle définition de la légèreté.', cn: '轻量的新定义。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Airity+LT'
    },
    {
        id: 'certate_lt',
        name: 'Daiwa Certate LT',
        brand: 'Daiwa',
        types: ['spin'],
        weight: 205,
        priceRange: 'premium',
        techs: ['monocoque', 'magsealed', 'atd_type_l'],
        description: { tr: 'Güç ve dayanıklılık sembolü. Alüminyum yekpare gövde.', en: 'Symbol of strength and durability.', jp: '強さと耐久性の象徴。', it: 'Simbolo di forza e durata.', fr: 'Symbole de force et de durabilité.', cn: '力量与耐用的象征。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Certate+LT'
    },
    {
        id: 'luvias_lt',
        name: 'Daiwa Luvias LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 150,
        priceRange: 'value',
        techs: ['monocoque', 'magsealed', 'atd'],
        description: { tr: 'Zaion monokok gövde ile tüy kadar hafif.', en: 'Feather light with Zaion MQ body.', jp: 'ザイオンモノコックボディで羽のように軽い。', it: 'Leggero come una piuma.', fr: 'Léger comme une plume.', cn: '如羽毛般轻盈。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Luvias+LT'
    },
    {
        id: 'caldia_mq',
        name: 'Daiwa Caldia MQ',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 195,
        priceRange: 'value',
        techs: ['monocoque', 'magsealed', 'zaion'],
        description: { tr: 'MQ teknolojisinin en ulaşılabilir hali.', en: 'Most accessible MQ tech.', jp: '最も身近なMQ技術。', it: 'Tecnologia MQ più accessibile.', fr: 'Tech MQ la plus accessible.', cn: '最亲民的MQ技术。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Caldia+MQ'
    },
    {
        id: 'fuego_lt',
        name: 'Daiwa Fuego LT',
        brand: 'Daiwa',
        types: ['spin', 'lrf'],
        weight: 205,
        priceRange: 'budget',
        techs: ['magsealed', 'atd', 'zaion'], // Zaion V body
        description: { tr: 'Magsealed korumasına sahip en popüler bütçe dostu makine.', en: 'Most popular budget reel with Magsealed.', jp: 'マグシールド搭載の人気エントリーモデル。', it: 'Mulinello economico più popolare con Magsealed.', fr: 'Moulinet économique le plus populaire avec Magsealed.', cn: '拥有磁油保护的最受欢迎预算轮。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Fuego+LT'
    },
    {
        id: 'legalis_lt',
        name: 'Daiwa Legalis LT',
        brand: 'Daiwa',
        types: ['spin', 'lrf'],
        weight: 210,
        priceRange: 'budget',
        techs: ['atd', 'zaion'], // Zaion V
        description: { tr: 'Fiyatına göre inanılmaz hafiflik ve performans (Zaion V gövde).', en: 'Incredible lightness and performance for the price.', jp: '価格以上の軽さと性能。', it: 'Leggerezza e prestazioni incredibili per il prezzo.', fr: 'Légèreté et performance incroyables pour le prix.', cn: '性价比极高的轻量和性能。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Legalis+LT'
    },
    {
        id: 'bg_sw',
        name: 'Daiwa BG SW',
        brand: 'Daiwa',
        types: ['spin', 'surf'],
        weight: 285, // Heavy
        priceRange: 'budget',
        techs: ['hardbodyz', 'atd', 'digigear'], // Adding common tech (will fallback to text if not in DB, but better to stick to DB keys if possible. I'll stick to generic descriptions or assume some basic matches)
        // Actually ID mismatch risk. Let's stick to known IDs or simple ones. "atd" is known.
        description: { tr: 'Efsanevi "Black Gold". Alüminyum gövde, yok edilemez dayanıklılık.', en: 'Legendary "Black Gold". Indestructible.', jp: '伝説のブラックゴールド。', it: 'Leggendario Black Gold.', fr: 'Légendaire Black Gold.', cn: '传奇的黑金。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+BG+SW'
    },
    {
        id: 'basia_surf',
        name: 'Daiwa Tournament Basia',
        brand: 'Daiwa',
        types: ['surf'],
        weight: 520,
        priceRange: 'premium',
        techs: ['magsealed', 'zaion', 'monocoque'], // High end surf
        description: { tr: 'Surf dünyasının Rolls-Royce\'u. Magnezyum gövde.', en: 'The Rolls-Royce of surf fishing.', jp: 'サーフフィッシングのロールスロイス。', it: 'La Rolls-Royce del surf.', fr: 'La Rolls-Royce du surf.', cn: '远投界的劳斯莱斯。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Tournament+Basia'
    },
    {
        id: 'crosscast_surf',
        name: 'Daiwa Crosscast',
        brand: 'Daiwa',
        types: ['surf'],
        weight: 610,
        priceRange: 'value',
        techs: ['digigear', 'atd'],
        description: { tr: '35mm veya 45mm kafa yapısıyla uzak atış canavarı.', en: 'Long distance beast with 35/45mm stroke.', jp: '遠投の野獣。', it: 'Bestia da lunga distanza.', fr: 'Bête de longue distance.', cn: '远投猛兽。' },
        link: 'https://www.amazon.com.tr/s?k=Daiwa+Crosscast'
    },

    // --- OKUMA ---
    {
        id: 'makaira_spin',
        name: 'Okuma Makaira',
        brand: 'Okuma',
        types: ['surf', 'spin'], // Heavy
        weight: 600,
        priceRange: 'premium',
        techs: ['dfd', 'tca'],
        description: { tr: 'Dev orkinoslar için üretilmiş bir tank.', en: 'A tank built for giant tuna.', jp: '巨大マグロのための戦車。', it: 'Un carro armato per tonni giganti.', fr: 'Un char pour les thons géants.', cn: '为巨型金枪鱼制造的坦克。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Makaira'
    },
    {
        id: 'tesoro',
        name: 'Okuma Tesoro',
        brand: 'Okuma',
        types: ['spin', 'surf'],
        weight: 400,
        priceRange: 'value',
        techs: ['dfd', 'tca', 'litecast'],
        description: { tr: 'Tuzlu suyun yeni hakimi. Tamamen su geçirmez gövde.', en: 'New ruler of saltwater. Waterproof body.', jp: 'ソルトウォーターの支配者。', it: 'Nuovo sovrano dell\'acqua salata.', fr: 'Nouveau souverain de l\'eau salée.', cn: '咸水的新统治者。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Tesoro'
    },
    {
        id: 'cedros',
        name: 'Okuma Cedros',
        brand: 'Okuma',
        types: ['spin', 'surf'],
        weight: 400,
        priceRange: 'value',
        techs: ['dfd', 'litecast'],
        description: { tr: 'Jigging ve ağır spin için özel tasarım. Mavi renkli güç.', en: 'Designed for jigging and heavy spin.', jp: 'ジギング専用設計。', it: 'Progettato per jigging.', fr: 'Conçu pour le jigging.', cn: '专为铁板钓设计。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Cedros'
    },
    {
        id: 'itx_cb',
        name: 'Okuma ITX Carbon',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 200,
        priceRange: 'value',
        techs: ['tca', 'flite_shaft'],
        description: { tr: 'C-40X karbon ile hafiflik ve güç.', en: 'Lightness and power with C-40X.', jp: 'C-40Xによる軽さと強さ。', it: 'Leggerezza e potenza.', fr: 'Légèreté et puissance.', cn: '轻量与强力。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+ITX+Carbon'
    },
    {
        id: 'inspira_isx',
        name: 'Okuma Inspira ISX',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 210,
        priceRange: 'value',
        techs: ['tca', 'flite_shaft'],
        description: { tr: 'TCA teknolojisinin öncüsü.', en: 'Pioneer of TCA tech.', jp: 'TCA技術のパイオニア。', it: 'Pioniere della tecnologia TCA.', fr: 'Pionnier de la technologie TCA.', cn: 'TCA技术的先驱。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Inspira+ISX'
    },
    {
        id: 'ceymar_hd',
        name: 'Okuma Ceymar HD',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 235,
        priceRange: 'budget',
        techs: ['hd_gear'],
        description: { tr: 'Yenilenen HD dişli ile pürüzsüz. Türkiye\'nin en çok satanı.', en: 'Smooth with HD gear. Best seller in TR.', jp: 'HDギアで滑らか。', it: 'Fluido con ingranaggio HD.', fr: 'Fluide avec engrenage HD.', cn: 'HD齿轮顺滑。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Ceymar+HD'
    },
    {
        id: 'aria',
        name: 'Okuma Aria',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 220,
        priceRange: 'budget',
        techs: ['cfr'],
        description: { tr: 'Başlangıç için en ideal ve ekonomik seçenek.', en: 'Ideal and economic for beginners.', jp: '初心者に最適。', it: 'Ideale ed economico per principianti.', fr: 'Idéal et économique pour les débutants.', cn: '初学者的理想经济选择。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Aria'
    },
    {
        id: 'rockaway',
        name: 'Okuma Rockaway',
        brand: 'Okuma',
        types: ['surf'],
        weight: 480,
        priceRange: 'budget',
        techs: ['corrosion_resistant'], // Generic
        description: { tr: 'Hafif surf balıkçılığı için kompakt gövde.', en: 'Compact body for light surf.', jp: 'ライトサーフ用コンパクトボディ。', it: 'Corpo compatto per surf leggero.', fr: 'Corps compact pour surf léger.', cn: '轻型远投紧凑机身。' },
        link: 'https://www.amazon.com.tr/s?k=Okuma+Rockaway'
    }
];
