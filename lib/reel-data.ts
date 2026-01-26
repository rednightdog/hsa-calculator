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
        }
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
    }
];

export const reels: ReelModel[] = [
    // --- SHIMANO REELS ---
    {
        id: 'stella_fk',
        name: 'Shimano Stella FK',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 210,
        priceRange: 'premium',
        price: '25.000 - 35.000 ₺',
        image: '/reels/stella.png',
        // Added anti_twist_fin, duracross, rigid_support_drag
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'infinity_loop', 'infinity_drive', 'anti_twist_fin', 'duracross', 'rigid_support_drag'],
        description: { tr: 'Japon mühendisliğinin zirvesi. Sonsuzluk hissi veren pürüzsüzlük.', en: 'The pinnacle of Japanese engineering. Smoothness that feels infinite.', jp: '日本工学の頂点。無限を感じさせる滑らかさ。', it: 'L\'apice dell\'ingegneria giapponese.', fr: 'Le summum de l\'ingénierie japonaise.', cn: '日本工程的巅峰。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'vanford_a', // Updated to new A model logic potentially, but sticking to known Vanford listing
        name: 'Shimano Vanford',
        brand: 'Shimano',
        types: ['lrf', 'spin'],
        weight: 180,
        priceRange: 'value',
        price: '8.000 - 10.000 ₺',
        image: '/reels/vanford.png',
        techs: ['hagane_gear', 'micromodule_ii', 'x_protect', 'silent_drive', 'anti_twist_fin'], // Added Anti-Twist Fin (some new models have it)
        description: { tr: 'Hız ve hassasiyet için tasarlandı. LRF ve Light Spin için mükemmel hafiflik.', en: 'Designed for speed and sensitivity. Perfect lightness for LRF.', jp: 'スピードと感度のために設計されました。LRFに最適な軽さ。', it: 'Progettato per velocità e sensibilità.', fr: 'Conçu pour la vitesse et la sensibilité.', cn: '为速度和灵敏度而设计。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'twinpower_xd',
        name: 'Shimano TwinPower XD',
        brand: 'Shimano',
        types: ['spin', 'surf'],
        weight: 245,
        priceRange: 'premium',
        price: '18.000 - 22.000 ₺',
        image: '/reels/twinpower.png',
        techs: ['hagane_body', 'hagane_gear', 'x_protect', 'duracross', 'rigid_support_drag'],
        description: { tr: 'Aşırı dayanıklılık için üretildi. Zorlu tuzlu su şartlarının hakimi.', en: 'Built for extreme durability. Master of tough saltwater conditions.', jp: '過酷なソルトウォーターシーンを制する、圧倒的な耐久性。', it: 'Costruito per una durata estrema.', fr: 'Construit pour une durabilité extrême.', cn: '为极致耐用性而打造。' },
        link: 'https://amzn.to/3XXX'
    },

    // --- DAIWA REELS ---
    {
        id: 'exist_lt',
        name: 'Daiwa Exist LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 160,
        priceRange: 'premium',
        price: '35.000 - 50.000 ₺',
        image: '/reels/exist.png',
        techs: ['airdrive_design', 'monocoque', 'magsealed', 'atd_type_l', 'twist_buster_iii'],
        description: { tr: 'Geleceğin teknolojisi. Airdrive ile ağırlıksızlık hissi.', en: 'Future technology. Weightlessness with Airdrive.', jp: '未来のテクノロジー。エアドライブによる無重力感。', it: 'Tecnologia del futuro.', fr: 'Technologie du futur.', cn: '未来科技。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'airity_lt',
        name: 'Daiwa Airity LT',
        brand: 'Daiwa',
        types: ['lrf', 'spin'],
        weight: 145, // Super light
        priceRange: 'premium',
        price: '20.000 - 28.000 ₺',
        image: '/reels/airity.png',
        techs: ['airdrive_design', 'monocoque', 'atd_type_l', 'twist_buster_iii'],
        description: { tr: 'Hafifliğin yeni tanımı. İnanılmaz derecede hafif ve güçlü.', en: 'The new definition of lightness. Incredibly light and strong.', jp: '軽さの革命。信じられないほど軽く、強い。', it: 'La nuova definizione di leggerezza.', fr: 'La nouvelle définition de la légèreté.', cn: '轻量的新定义。' },
        link: 'https://amzn.to/3XXX'
    },

    // --- OKUMA REELS ---
    {
        id: 'hakai_dt',
        name: 'Okuma Hakai DT',
        brand: 'Okuma',
        types: ['lrf', 'spin'], // Actually a baitcaster usually but assuming spin version for this context or general tech showcase
        weight: 170,
        priceRange: 'premium',
        price: '8.000 - 10.000 ₺',
        image: '/reels/hakai.png',
        techs: ['litecast', 'flite_spool', 'flite_shaft'],
        description: { tr: 'Magnezyum LITECAST gövde ile ultra hafif performans.', en: 'Ultra light performance with Magnesium LITECAST body.', jp: 'マグネシウムLITECASTボディによる超軽量パフォーマンス。', it: 'Prestazioni ultra leggere.', fr: 'Performance ultra légère.', cn: '超轻性能。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'makaira_spin',
        name: 'Okuma Makaira',
        brand: 'Okuma',
        types: ['surf', 'spin'], // Heavy spin
        weight: 600, // Heavy duty
        priceRange: 'premium',
        price: '25.000 - 30.000 ₺',
        image: '/reels/makaira.png',
        techs: ['dfd', 'tca'], // Dressed with heavy duty tech
        description: { tr: 'Dev orkinoslar ve kılıç balıkları için üretilmiş bir tank.', en: 'A tank built for giant tuna and swordfish.', jp: '巨大マグロやカジキのために作られた戦車。', it: 'Un carro armato per tonni giganti.', fr: 'Un char pour les thons géants.', cn: '为巨型金枪鱼制造的坦克。' },
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'itx',
        name: 'Okuma ITX Carbon',
        brand: 'Okuma',
        types: ['lrf', 'spin'],
        weight: 200,
        priceRange: 'value',
        price: '4.000 - 5.500 ₺',
        image: '/reels/itx.png',
        techs: ['tca', 'flite_shaft'],
        description: { tr: 'Karbon ve teknolojinin buluşması.', en: 'Meeting of carbon and technology.', jp: 'カーボンとテクノロジーの融合。', it: 'Incontro di carbonio e tecnologia.', fr: 'Rencontre du carbone et de la technologie.', cn: '碳与科技的结合。' },
        link: 'https://amzn.to/3XXX'
    }
];
