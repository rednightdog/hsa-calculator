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
                tr: { name: "Kendo 4x LRF (0.06mm)", url: "https://www.hepsiburada.com/ara?q=Kendo+4x+LRF+Braid", price: 250 },
                global: { name: "SeaKnight Monster 8x", url: "https://www.aliexpress.com/w/wholesale-SeaKnight-Monster-8x.html", price: 10 }
            },
            value: {
                tr: { name: "Daiwa J-Braid x8 (Chartreuse)", url: "https://www.amazon.com.tr/s?k=Daiwa+J-Braid+Grand+x8+Chartreuse", price: 650 },
                global: { name: "Daiwa J-Braid x8 Grand", url: "https://www.amazon.com/s?k=Daiwa+J-Braid+x8+Grand", price: 25 }
            },
            premium: {
                tr: { name: "Varivas Avani Light Game", url: "https://www.amazon.com.tr/s?k=Varivas+Avani+Light+Game", price: 1200 },
                global: { name: "Varivas Avani Light Game", url: "https://www.amazon.co.jp/s?k=Varivas+Avani+Light+Game", price: 50 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Okuma Dead Ringer (1-8g)", url: "https://www.hepsiburada.com/ara?q=Okuma+Dead+Ringer+LRF", price: 1100 },
                global: { name: "Ugly Stik Elite Spinning", url: "https://www.amazon.com/s?k=Ugly+Stik+Elite+Spinning", price: 60 }
            },
            value: {
                tr: { name: "Savage Gear SG2 LRF", url: "https://www.amazon.com.tr/s?k=Savage+Gear+LRF+Rod", price: 2800 },
                global: { name: "St. Croix Triumph", url: "https://www.amazon.com/s?k=St.+Croix+Triumph+Spinning", price: 110 }
            },
            premium: {
                tr: { name: "Major Craft Crostage Aji", url: "https://www.hepsiburada.com/ara?q=Major+Craft+Crostage+Aji", price: 5500 },
                global: { name: "G.Loomis NRX+", url: "https://www.amazon.com/s?k=G.Loomis+NRX", price: 450 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Okuma Ceymar CXT 10", url: "https://www.hepsiburada.com/ara?q=Okuma+Ceymar+CXT+10", price: 1400 },
                global: { name: "Shimano Sienna 1000", url: "https://www.amazon.com/s?k=Shimano+Sienna+1000", price: 35 }
            },
            value: {
                tr: { name: "Daiwa Legalis LT 1000", url: "https://www.amazon.com.tr/s?k=Daiwa+Legalis+LT+1000", price: 2500 },
                global: { name: "Daiwa Legalis LT 1000", url: "https://www.amazon.com/s?k=Daiwa+Legalis+LT+1000", price: 75 }
            },
            premium: {
                tr: { name: "Shimano Soare XR", url: "https://www.amazon.com.tr/s?k=Shimano+Soare+XR", price: 9000 },
                global: { name: "Shimano Vanford 1000", url: "https://www.amazon.com/s?k=Shimano+Vanford+1000", price: 230 }
            }
        },
        hook: {
            budget: {
                tr: { name: "VMC 7239 Jighead", url: "https://www.hepsiburada.com/ara?q=VMC+Jighead", price: 100 },
                global: { name: "Eagle Claw Jighead", url: "https://www.amazon.com/s?k=Eagle+Claw+Jighead", price: 5 }
            },
            value: {
                tr: { name: "Decoy Rocket Plus", url: "https://www.amazon.com.tr/s?k=Decoy+Rocket+Plus+Jighead", price: 250 },
                global: { name: "Decoy Rocket Plus", url: "https://www.amazon.com/s?k=Decoy+Rocket+Plus", price: 8 }
            },
            premium: {
                tr: { name: "Cultiva/Owner Jighead", url: "https://www.amazon.com.tr/s?k=Cultiva+Owner+Jighead", price: 400 },
                global: { name: "Owner Ultrahead", url: "https://www.amazon.com/s?k=Owner+Ultrahead", price: 12 }
            }
        }
    },
    spin: {
        braid: {
            budget: {
                tr: { name: "Kendo 4x Spin", url: "https://www.hepsiburada.com/ara?q=Kendo+4x", price: 250 },
                global: { name: "PowerPro Braid", url: "https://www.amazon.com/s?k=PowerPro+Braid", price: 15 }
            },
            value: {
                tr: { name: "Daiwa J-Braid Grand x8", url: "https://www.amazon.com.tr/s?k=Daiwa+J-Braid+Grand+x8", price: 650 },
                global: { name: "Daiwa J-Braid x8 Grand", url: "https://www.amazon.com/s?k=Daiwa+J-Braid+x8+Grand", price: 25 }
            },
            premium: {
                tr: { name: "Shimano Kairiki 8", url: "https://www.hepsiburada.com/ara?q=Shimano+Kairiki+8", price: 850 },
                global: { name: "Shimano Kairiki 8", url: "https://www.amazon.com/s?k=Shimano+Kairiki+8", price: 30 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Daiwa Legalis Spin", url: "https://www.hepsiburada.com/ara?q=Daiwa+Legalis+Spin+Rod", price: 1900 },
                global: { name: "Ugly Stik GX2", url: "https://www.amazon.com/s?k=Ugly+Stik+GX2+Spinning", price: 50 }
            },
            value: {
                tr: { name: "Shimano Bassterra", url: "https://www.amazon.com.tr/s?k=Shimano+Bassterra+Spin", price: 4200 },
                global: { name: "Fenwick HMG", url: "https://www.amazon.com/s?k=Fenwick+HMG+Spinning", price: 120 }
            },
            premium: {
                tr: { name: "Daiwa Ballistic X", url: "https://www.amazon.com.tr/s?k=Daiwa+Ballistic+X+Spin", price: 7500 },
                global: { name: "St. Croix Avid", url: "https://www.amazon.com/s?k=St.+Croix+Avid+Spinning", price: 250 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Daiwa Ninja LT 3000", url: "https://www.hepsiburada.com/ara?q=Daiwa+Ninja+LT", price: 2200 },
                global: { name: "Penn Pursuit IV", url: "https://www.amazon.com/s?k=Penn+Pursuit+IV", price: 55 }
            },
            value: {
                tr: { name: "Shimano Nasci", url: "https://www.amazon.com.tr/s?k=Shimano+Nasci", price: 3800 },
                global: { name: "Shimano Nasci FC", url: "https://www.amazon.com/s?k=Shimano+Nasci+FC", price: 100 }
            },
            premium: {
                tr: { name: "Shimano Stradic FM", url: "https://www.amazon.com.tr/s?k=Shimano+Stradic+FM", price: 7800 },
                global: { name: "Shimano Stradic FM", url: "https://www.amazon.com/s?k=Shimano+Stradic+FM", price: 220 }
            }
        },
        hook: {
            budget: {
                tr: { name: "Mustad Kaiju", url: "https://www.amazon.com.tr/s?k=Mustad+Kaiju", price: 150 },
                global: { name: "Mustad UltraPoint", url: "https://www.amazon.com/s?k=Mustad+UltraPoint", price: 8 }
            },
            value: {
                tr: { name: "BKK Fangs", url: "https://www.amazon.com.tr/s?k=BKK+Fangs+Treble", price: 350 },
                global: { name: "VMC 9626", url: "https://www.amazon.com/s?k=VMC+9626", price: 15 }
            },
            premium: {
                tr: { name: "Owner ST-66", url: "https://www.amazon.com.tr/s?k=Owner+ST-66", price: 550 },
                global: { name: "Owner ST-66", url: "https://www.amazon.com/s?k=Owner+ST-66", price: 25 }
            }
        }
    },
    surf: {
        braid: {
            budget: {
                tr: { name: "Kendo Surf Braid", url: "https://www.hepsiburada.com/ara?q=Kendo+Surf+Braid", price: 300 },
                global: { name: "Berkley FireLine", url: "https://www.amazon.com/s?k=Berkley+FireLine", price: 20 }
            },
            value: {
                tr: { name: "Trabucco S-Force", url: "https://www.amazon.com.tr/s?k=Trabucco+S-Force+Surf", price: 500 },
                global: { name: "Sufix Tritanium", url: "https://www.amazon.com/s?k=Sufix+Tritanium", price: 35 }
            },
            premium: {
                tr: { name: "Shimano Kairiki 8", url: "https://www.hepsiburada.com/ara?q=Shimano+Kairiki+8", price: 900 },
                global: { name: "Daiwa Saltiga 12", url: "https://www.amazon.com/s?k=Daiwa+Saltiga+12+Braid", price: 80 }
            }
        },
        rod: {
            budget: {
                tr: { name: "Lineaeffe Oyster", url: "https://www.hepsiburada.com/ara?q=Lineaeffe+Oyster+Surf", price: 2500 },
                global: { name: "Fiblink Surf Rod", url: "https://www.amazon.com/s?k=Fiblink+Surf+Rod", price: 80 }
            },
            value: {
                tr: { name: "Okuma Rockaway", url: "https://www.amazon.com.tr/s?k=Okuma+Rockaway+Surf", price: 4500 },
                global: { name: "Penn Battalion", url: "https://www.amazon.com/s?k=Penn+Battalion+Surf", price: 130 }
            },
            premium: {
                tr: { name: "Shimano Ultegra", url: "https://www.amazon.com.tr/s?k=Shimano+Ultegra+Surf+Rod", price: 9500 },
                global: { name: "St. Croix Seage", url: "https://www.amazon.com/s?k=St.+Croix+Seage", price: 300 }
            }
        },
        reel: {
            budget: {
                tr: { name: "Okuma Custom Surf", url: "https://www.hepsiburada.com/ara?q=Okuma+Custom+Surf", price: 2800 },
                global: { name: "Penn Fierce III", url: "https://www.amazon.com/s?k=Penn+Fierce+III", price: 90 }
            },
            value: {
                tr: { name: "Shimano Speedmaster", url: "https://www.amazon.com.tr/s?k=Shimano+Speedmaster+14000", price: 6500 },
                global: { name: "Shimano Speedmaster 14000", url: "https://www.amazon.com/s?k=Shimano+Speedmaster+14000", price: 180 }
            },
            premium: {
                tr: { name: "Shimano Ultegra XTE", url: "https://www.amazon.com.tr/s?k=Shimano+Ultegra+14000+XTE", price: 8500 },
                global: { name: "Daiwa Saltist MQ", url: "https://www.amazon.com/s?k=Daiwa+Saltist+MQ", price: 350 }
            }
        },
        hook: {
            budget: {
                tr: { name: "Mustad 496", url: "https://www.hepsiburada.com/ara?q=Mustad+496", price: 150 },
                global: { name: "Gamakatsu Octopus", url: "https://www.amazon.com/s?k=Gamakatsu+Octopus", price: 10 }
            },
            value: {
                tr: { name: "Sasame Wormer", url: "https://www.amazon.com.tr/s?k=Sasame+Wormer", price: 250 },
                global: { name: "Owner Mutu Light", url: "https://www.amazon.com/s?k=Owner+Mutu+Light", price: 15 }
            },
            premium: {
                tr: { name: "Gamakatsu LS-3310", url: "https://www.amazon.com.tr/s?k=Gamakatsu+LS-3310", price: 400 },
                global: { name: "Trokar Lancet", url: "https://www.amazon.com/s?k=Trokar+Lancet+Circle", price: 25 }
            }
        }
    }
};
