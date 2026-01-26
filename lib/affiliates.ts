/**
 * Affiliate Links Central Configuration
 * 
 * Structure: Discipline -> Category -> Tiers -> Region { tr, global }
 * 
 * TR: Links to Hepsiburada, Trendyol, Amazon TR (Local shipping)
 * Global: Links to Amazon.com, AliExpress (International shipping)
 * 
 * Price: Approximate price in local currency (TL for TR, USD for Global) for budget calculations.
 */

// User's Amazon Associate Tag
const AMZ_TR_TAG = "arasdemiray-21";

// Helper to construct tagged Amazon TR URL
const getAmzTrUrl = (query: string) => {
    // query format expected: "Daiwa+J-Braid" (already URL encoded or with pluses)
    return `https://www.amazon.com.tr/s?k=${query}&tag=${AMZ_TR_TAG}`;
};

interface ProductLink {
    name: string;
    url: string;
    price: number; // Approx price
}

interface RegionalLinks {
    tr: ProductLink;
    global: ProductLink;
}

export const AFFILIATE_LINKS = {
    hsa: {
        braid: {
            budget: {
                tr: { name: "Kendo 4x LRF", url: getAmzTrUrl("Kendo+ip"), price: 250 },
                global: { name: "SeaKnight Monster 8x", url: "https://www.aliexpress.com/w/wholesale-SeaKnight-Monster-8x.html", price: 10 }
            },
            value: {
                tr: { name: "Daiwa J-Braid x8", url: getAmzTrUrl("Daiwa+J-Braid+x8"), price: 650 },
                global: { name: "Daiwa J-Braid x8 Grand", url: "https://www.amazon.com/s?k=Daiwa+J-Braid+x8+Grand", price: 25 }
            },
            premium: {
                tr: { name: "Varivas Avani Light", url: getAmzTrUrl("Varivas+Avani"), price: 1200 },
                global: { name: "Varivas Avani Light Game", url: "https://www.amazon.co.jp/s?k=Varivas+Avani+Light+Game", price: 50 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Okuma Dead Ringer", url: getAmzTrUrl("Okuma+Dead+Ringer"), price: 1100 },
                global: { name: "Ugly Stik Elite Spinning", url: "https://www.amazon.com/s?k=Ugly+Stik+Elite+Spinning", price: 60 }
            },
            value: {
                tr: { name: "Savage Gear SG2", url: getAmzTrUrl("Savage+Gear+SG2"), price: 2800 },
                global: { name: "St. Croix Triumph", url: "https://www.amazon.com/s?k=St.+Croix+Triumph+Spinning", price: 110 }
            },
            premium: {
                tr: { name: "Major Craft Crostage", url: getAmzTrUrl("Major+Craft+Crostage"), price: 5500 },
                global: { name: "G.Loomis NRX+", url: "https://www.amazon.com/s?k=G.Loomis+NRX", price: 450 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Okuma Ceymar", url: getAmzTrUrl("Okuma+Ceymar"), price: 1400 },
                global: { name: "Shimano Sienna 1000", url: "https://www.amazon.com/s?k=Shimano+Sienna+1000", price: 35 }
            },
            value: {
                tr: { name: "Daiwa Legalis LT", url: getAmzTrUrl("Daiwa+Legalis+LT"), price: 2500 },
                global: { name: "Daiwa Legalis LT 1000", url: "https://www.amazon.com/s?k=Daiwa+Legalis+LT+1000", price: 75 }
            },
            premium: {
                tr: { name: "Shimano Soare", url: getAmzTrUrl("Shimano+Soare"), price: 9000 },
                global: { name: "Shimano Vanford 1000", url: "https://www.amazon.com/s?k=Shimano+Vanford+1000", price: 230 }
            }
        },
        hook: {
            budget: {
                tr: { name: "VMC Jighead", url: getAmzTrUrl("VMC+Jighead"), price: 100 },
                global: { name: "Eagle Claw Jighead", url: "https://www.amazon.com/s?k=Eagle+Claw+Jighead", price: 5 }
            },
            value: {
                tr: { name: "Decoy Jighead", url: getAmzTrUrl("Decoy+Jighead"), price: 250 },
                global: { name: "Decoy Rocket Plus", url: "https://www.amazon.com/s?k=Decoy+Rocket+Plus", price: 8 }
            },
            premium: {
                tr: { name: "Owner Jighead", url: getAmzTrUrl("Owner+Jighead"), price: 400 },
                global: { name: "Owner Ultrahead", url: "https://www.amazon.com/s?k=Owner+Ultrahead", price: 12 }
            }
        }
    },
    spin: {
        braid: {
            budget: {
                tr: { name: "Kendo 4x Spin", url: getAmzTrUrl("Kendo+ip"), price: 250 },
                global: { name: "PowerPro Braid", url: "https://www.amazon.com/s?k=PowerPro+Braid", price: 15 }
            },
            value: {
                tr: { name: "Daiwa J-Braid x8", url: getAmzTrUrl("Daiwa+J-Braid+x8"), price: 650 },
                global: { name: "Daiwa J-Braid x8 Grand", url: "https://www.amazon.com/s?k=Daiwa+J-Braid+x8+Grand", price: 25 }
            },
            premium: {
                tr: { name: "Shimano Kairiki", url: getAmzTrUrl("Shimano+Kairiki"), price: 850 },
                global: { name: "Shimano Kairiki 8", url: "https://www.amazon.com/s?k=Shimano+Kairiki+8", price: 30 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Daiwa Legalis Spin", url: getAmzTrUrl("Daiwa+Legalis+Spin"), price: 1900 },
                global: { name: "Ugly Stik GX2", url: "https://www.amazon.com/s?k=Ugly+Stik+GX2+Spinning", price: 50 }
            },
            value: {
                tr: { name: "Shimano Bassterra", url: getAmzTrUrl("Shimano+Bassterra"), price: 4200 },
                global: { name: "Fenwick HMG", url: "https://www.amazon.com/s?k=Fenwick+HMG+Spinning", price: 120 }
            },
            premium: {
                tr: { name: "Daiwa Ballistic", url: getAmzTrUrl("Daiwa+Ballistic"), price: 7500 },
                global: { name: "St. Croix Avid", url: "https://www.amazon.com/s?k=St.+Croix+Avid+Spinning", price: 250 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Daiwa Ninja", url: getAmzTrUrl("Daiwa+Ninja+makine"), price: 2200 },
                global: { name: "Penn Pursuit IV", url: "https://www.amazon.com/s?k=Penn+Pursuit+IV", price: 55 }
            },
            value: {
                tr: { name: "Shimano Nasci", url: getAmzTrUrl("Shimano+Nasci"), price: 3800 },
                global: { name: "Shimano Nasci FC", url: "https://www.amazon.com/s?k=Shimano+Nasci+FC", price: 100 }
            },
            premium: {
                tr: { name: "Shimano Stradic", url: getAmzTrUrl("Shimano+Stradic"), price: 7800 },
                global: { name: "Shimano Stradic FM", url: "https://www.amazon.com/s?k=Shimano+Stradic+FM", price: 220 }
            }
        },
        hook: {
            budget: {
                tr: { name: "Mustad İğne", url: getAmzTrUrl("Mustad+olta+iğnesi"), price: 150 },
                global: { name: "Mustad UltraPoint", url: "https://www.amazon.com/s?k=Mustad+UltraPoint", price: 8 }
            },
            value: {
                tr: { name: "BKK İğne", url: getAmzTrUrl("BKK+iğne"), price: 350 },
                global: { name: "VMC 9626", url: "https://www.amazon.com/s?k=VMC+9626", price: 15 }
            },
            premium: {
                tr: { name: "Owner İğne", url: getAmzTrUrl("Owner+olta+iğnesi"), price: 550 },
                global: { name: "Owner ST-66", url: "https://www.amazon.com/s?k=Owner+ST-66", price: 25 }
            }
        }
    },
    surf: {
        braid: {
            budget: {
                tr: { name: "Kendo İp", url: getAmzTrUrl("Kendo+ip+misina"), price: 300 },
                global: { name: "Berkley FireLine", url: "https://www.amazon.com/s?k=Berkley+FireLine", price: 20 }
            },
            value: {
                tr: { name: "Trabucco S-Force", url: getAmzTrUrl("Trabucco+S-Force"), price: 500 },
                global: { name: "Sufix Tritanium", url: "https://www.amazon.com/s?k=Sufix+Tritanium", price: 35 }
            },
            premium: {
                tr: { name: "Shimano Kairiki", url: getAmzTrUrl("Shimano+Kairiki"), price: 900 },
                global: { name: "Daiwa Saltiga 12", url: "https://www.amazon.com/s?k=Daiwa+Saltiga+12+Braid", price: 80 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Lineaeffe Kamış", url: getAmzTrUrl("Lineaeffe+surf+kamış"), price: 2500 },
                global: { name: "Fiblink Surf Rod", url: "https://www.amazon.com/s?k=Fiblink+Surf+Rod", price: 80 }
            },
            value: {
                tr: { name: "Okuma Surf", url: getAmzTrUrl("Okuma+Surf+Kamış"), price: 4500 },
                global: { name: "Penn Battalion", url: "https://www.amazon.com/s?k=Penn+Battalion+Surf", price: 130 }
            },
            premium: {
                tr: { name: "Shimano Surf", url: getAmzTrUrl("Shimano+Surf+Kamış"), price: 9500 },
                global: { name: "St. Croix Seage", url: "https://www.amazon.com/s?k=St.+Croix+Seage", price: 300 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Okuma Surf Makine", url: getAmzTrUrl("Okuma+Surf+Makine"), price: 2800 },
                global: { name: "Penn Fierce III", url: "https://www.amazon.com/s?k=Penn+Fierce+III", price: 90 }
            },
            value: {
                tr: { name: "Shimano Speedmaster", url: getAmzTrUrl("Shimano+Speedmaster"), price: 6500 },
                global: { name: "Shimano Speedmaster 14000", url: "https://www.amazon.com/s?k=Shimano+Speedmaster+14000", price: 180 }
            },
            premium: {
                tr: { name: "Shimano Ultegra", url: getAmzTrUrl("Shimano+Ultegra"), price: 8500 },
                global: { name: "Daiwa Saltist MQ", url: "https://www.amazon.com/s?k=Daiwa+Saltist+MQ", price: 350 }
            }
        },
        hook: {
            budget: {
                tr: { name: "Mustad İğne", url: getAmzTrUrl("Mustad+iğne"), price: 150 },
                global: { name: "Gamakatsu Octopus", url: "https://www.amazon.com/s?k=Gamakatsu+Octopus", price: 10 }
            },
            value: {
                tr: { name: "Sasame İğne", url: getAmzTrUrl("Sasame+iğne"), price: 250 },
                global: { name: "Owner Mutu Light", url: "https://www.amazon.com/s?k=Owner+Mutu+Light", price: 15 }
            },
            premium: {
                tr: { name: "Gamakatsu İğne", url: getAmzTrUrl("Gamakatsu+iğne"), price: 400 },
                global: { name: "Trokar Lancet", url: "https://www.amazon.com/s?k=Trokar+Lancet+Circle", price: 25 }
            }
        }
    }
};
