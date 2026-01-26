export type Brand = 'Shimano' | 'Daiwa' | 'Okuma';

export interface Technology {
    id: string;
    name: string;
    brand: Brand;
    summary: string; // Kısa açıklama (Kart için)
    description: string; // Detaylı uzman açıklaması
    benefit: string; // Kullanıcıya faydası
}

export interface ReelModel {
    id: string;
    name: string;
    brand: Brand;
    priceRange: 'budget' | 'value' | 'premium';
    price: string; // Yaklaşık fiyat (örn: "3000 - 4500 ₺")
    image: string; // Resim yolu
    techs: string[]; // Technology ID'leri
    description: string;
    link: string; // Amazon affiliate linki
}

export const tools = [
    // SHIMANO TECHNOLOGIES
    {
        id: 'hagane_body',
        name: 'Hagane Body',
        brand: 'Shimano',
        summary: 'Metal Gövde Teknolojisi',
        description: 'HAGANE Body, yüksek rijitliğe sahip metal bir makine gövdesidir. Gövde sertliği ve darbe direnci, makinenin bükülmesini neredeyse tamamen ortadan kaldırır. Bu özellik, dişlilerin ürettiği gücün kayıpsız bir şekilde sarıma aktarılmasını sağlar.',
        benefit: 'Yük altında makine esnemez, tüm gücünüz balığa aktarılır. Uzun ömürlüdür.'
    },
    {
        id: 'hagane_gear',
        name: 'Hagane Gear',
        brand: 'Shimano',
        summary: 'Soğuk Dövme Dişli',
        description: 'Kesme işlemi olmadan, tek parça metalden soğuk dövme teknolojisi ile üretilen dişli sistemi. Mikron seviyesinde hassasiyet sağlar.',
        benefit: 'Dişliler zamanla aşınmaz, ilk günkü pürüzsüzlüğünü korur. Daha sessiz çalışır.'
    },
    {
        id: 'micromodule_ii',
        name: 'MicroModule Gear II',
        brand: 'Shimano',
        summary: 'Mikro Dişli Sistemi',
        description: 'Dişli yüzeylerinin ideal şekilde tasarlanması ve dişlerin küçültülerek sayısının artırılması teknolojisidir.',
        benefit: 'İnanılmaz derecede pürüzsüz bir sarım hissi ve sıfır boşluk.'
    },
    {
        id: 'x_protect',
        name: 'X-Protect',
        brand: 'Shimano',
        summary: 'Su Geçirmezlik',
        description: 'Labirent yapılı özel su tahliye kanalları ve su itici gres yağı kombinasyonu. Makinenin içine su girmesini engeller.',
        benefit: 'Tuzlu suyun yıkıcı etkisine karşı tam koruma. Bakım ihtiyacını azaltır.'
    },
    {
        id: 'silent_drive',
        name: 'Silent Drive',
        brand: 'Shimano',
        summary: 'Sessiz Sürüş',
        description: 'Gövde içindeki tüm parçalar (dişliler, solucan mili vb.) arasındaki mikroskobik boşlukların ve titreşimlerin ortadan kaldırılmasıdır.',
        benefit: 'Sarımdan gelen tıkırtı sesleri yok olur, sadece balığı hissedersiniz.'
    },

    // DAIWA TECHNOLOGIES
    {
        id: 'magsealed',
        name: 'Magsealed',
        brand: 'Daiwa',
        summary: 'Manyetik Yağ Koruması',
        description: 'Uzay teknolojisi (NASA) ile geliştirilen manyetik yağ (Mag Oil), rotor ve gövde arasında aşılamaz bir bariyer oluşturur. Sürtünmesiz bir su yalıtımı sağlar.',
        benefit: 'Makineniz su almaz ama dönüşü asla ağırlaşmaz. İlk günkü yağ gibi döner.'
    },
    {
        id: 'monocoque',
        name: 'Monocoque (MQ) Body',
        brand: 'Daiwa',
        summary: 'Tek Parça Gövde',
        description: 'Geleneksel kapaklı ve vidalı gövde yapısı yerine, motor kapağı gibi vidalanan tek parça gövde yapısıdır. Daha geniş iç hacim sağlar.',
        benefit: 'Daha büyük ve güçlü dişliler sığdırılabilir. Vidalar olmadığı için gövde esnemez.'
    },
    {
        id: 'zaion',
        name: 'Zaion / Zaion V',
        brand: 'Daiwa',
        summary: 'Karbon Kompozit Malzeme',
        description: 'Magnezyum kadar sert ve güçlü, ancak korozyona tamamen dirençli yüksek yoğunluklu karbon reçine malzeme.',
        benefit: 'Metal kadar güçlü ama tüy kadar hafiftir. Paslanma derdi yoktur.'
    },
    {
        id: 'atd',
        name: 'ATD Drag',
        brand: 'Daiwa',
        summary: 'Otomatik Kalama Sistemi',
        description: 'Balığın ilk vuruş anında yumuşakça yol veren, balık yoruldukça direnci artıran akıllı kalama sistemi.',
        benefit: 'Ani vuruşlarda misina patlamasını önler, balığı daha çabuk yorar.'
    },
    {
        id: 'lt_concept',
        name: 'LT Concept',
        brand: 'Daiwa',
        summary: 'Light & Tough',
        description: 'Daha küçük kasa boyutlarıyla daha yüksek güç elde etme felsefesi. Gereksiz ağırlıklar atılmış, dayanıklılık artırılmıştır.',
        benefit: 'Bütün gün yorulmadan at-çek yapabilirsiniz.'
    },

    // OKUMA TECHNOLOGIES
    {
        id: 'tca',
        name: 'TCA (Torsion Control Armor)',
        brand: 'Okuma',
        summary: 'Burulma Kontrol Zırhı',
        description: 'Çift kollu C-40X karbon gövde tasarımı. Makine gövdesini bir zırh gibi sararak yük altında bükülmeyi önler.',
        benefit: 'Ağır balıkla mücadele ederken makine kasmaz, iç mekanizma hizada kalır.'
    },
    {
        id: 'cfr',
        name: 'CFR (Cyclonic Flow Rotor)',
        brand: 'Okuma',
        summary: 'Siklonik Akış Rotoru',
        description: 'Rotor her döndüğünde makine etrafında girdap şeklinde hava akımı yaratır. Islanan makineyi ve misinayı hızla kurutur.',
        benefit: 'Korozyonu önler, makinenin ömrünü uzatır.'
    },
    {
        id: 'c40x',
        name: 'C-40X Carbon',
        brand: 'Okuma',
        summary: ' %25 Daha Hafif Karbon',
        description: 'Standart grafite göre %25 daha hafif ve %50 daha güçlü özel karbon polimer malzeme.',
        benefit: 'Hafiflik ve sağlamlık dengesi.'
    }
] as Technology[];

export const reels = [
    // SHIMANO
    {
        id: 'stella_fk',
        name: 'Shimano Stella FK',
        brand: 'Shimano',
        priceRange: 'premium',
        price: '25.000 - 35.000 ₺',
        image: '/reels/stella.png',
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'x_protect', 'silent_drive'],
        description: 'Japon mühendisliğinin zirvesi. Sonsuzluk hissi veren pürüzsüzlük.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'stradic_fm',
        name: 'Shimano Stradic FM',
        brand: 'Shimano',
        priceRange: 'value',
        price: '7.000 - 9.000 ₺',
        image: '/reels/stradic.png',
        techs: ['hagane_body', 'hagane_gear', 'micromodule_ii', 'x_protect'],
        description: 'Dünyanın en çok tercih edilen spin makinesi. Güvenilirlik dendiğinde akla gelen ilk model.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'vanford',
        name: 'Shimano Vanford',
        brand: 'Shimano',
        priceRange: 'value',
        price: '8.000 - 10.000 ₺',
        image: '/reels/vanford.png',
        techs: ['hagane_gear', 'micromodule_ii', 'x_protect', 'silent_drive'],
        description: 'Hız ve hassasiyet için tasarlandı. LRF ve Light Spin için mükemmel hafiflik.',
        link: 'https://amzn.to/3XXX'
    },

    // DAIWA
    {
        id: 'exist_g',
        name: 'Daiwa Exist lt',
        brand: 'Daiwa',
        priceRange: 'premium',
        price: '30.000 - 40.000 ₺',
        image: '/reels/exist.png',
        techs: ['monocoque', 'magsealed', 'zaion', 'atd', 'lt_concept'],
        description: 'Geleceğin teknolojisi. Kusursuz denge ve ağırlıksızlık hissi.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'certate',
        name: 'Daiwa Certate LT',
        brand: 'Daiwa',
        priceRange: 'premium',
        price: '15.000 - 20.000 ₺',
        image: '/reels/certate.png',
        techs: ['monocoque', 'magsealed', 'atd', 'lt_concept'],
        description: 'Güç abidesi. Zorlu şartlar ve büyük balıklar için tek parça gövde gücü.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'fuego',
        name: 'Daiwa Fuego LT',
        brand: 'Daiwa',
        priceRange: 'budget',
        price: '3.000 - 4.500 ₺',
        image: '/reels/fuego.png',
        techs: ['magsealed', 'zaion', 'atd', 'lt_concept'],
        description: 'Bütçe dostu efsane. Magsealed teknolojisine sahip en ulaşılabilir model.',
        link: 'https://amzn.to/3XXX'
    },

    // OKUMA
    {
        id: 'itx',
        name: 'Okuma ITX Carbon',
        brand: 'Okuma',
        priceRange: 'value',
        price: '4.000 - 5.500 ₺',
        image: '/reels/itx.png',
        techs: ['c40x', 'tca', 'cfr'],
        description: 'Tamamen karbon gövde yapısıyla hafiflik ve gücün mükemmel birleşimi.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'epixor',
        name: 'Okuma Epixor XT',
        brand: 'Okuma',
        priceRange: 'budget',
        price: '2.000 - 3.000 ₺',
        image: '/reels/epixor.png',
        techs: ['tca', 'cfr'],
        description: 'TCA zırh teknolojisi ile fiyat/performans kralı.',
        link: 'https://amzn.to/3XXX'
    },
    {
        id: 'ceymar',
        name: 'Okuma Ceymar HD',
        brand: 'Okuma',
        priceRange: 'budget',
        price: '2.500 - 3.500 ₺',
        image: '/reels/ceymar.png',
        techs: ['hd_gear'], // Simplified for this example
        description: 'Yenilenen dişli sistemiyle (HD) pürüzsüz ve güçlü.',
        link: 'https://amzn.to/3XXX'
    }
] as ReelModel[];
