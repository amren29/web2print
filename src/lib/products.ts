
export interface Product {
    id: string
    name: string
    slug: string
    skuid: string
    material: string
    price: number
    image: string
    keywords: string[] // Hidden words for SEO/Search
    category: string
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Business Cards (Standard)",
        slug: "business-cards",
        skuid: "BC-STD-001",
        material: "Art Card 260gsm",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=500&auto=format&fit=crop&q=60",
        keywords: ["name card", "visiting card", "professional", "cards", "networking"],
        category: "Business Cards"
    },
    {
        id: "2",
        name: "A5 Flyers",
        slug: "flyers-a5",
        skuid: "FLY-A5-001",
        material: "Simili 80gsm",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60",
        keywords: ["leaflet", "brochure", "pamphlet", "marketing", "promotion"],
        category: "Flyers"
    },
    {
        id: "3",
        name: "Luxury Business Cards",
        slug: "business-cards-luxury",
        skuid: "BC-LUX-001",
        material: "Matte Art Card 310gsm",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1626544827763-d516dce335ca?w=500&auto=format&fit=crop&q=60",
        keywords: ["premium", "thick card", "high end", "gold foil", "spot uv"],
        category: "Business Cards"
    },
    {
        id: "4",
        name: "Vinyl Stickers",
        slug: "stickers-vinyl",
        skuid: "STK-VIN-001",
        material: "White Vinyl 100mic",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=500&auto=format&fit=crop&q=60",
        keywords: ["labels", "decals", "waterproof", "branding", "logo"],
        category: "Stickers"
    },
    {
        id: "5",
        name: "Round Stickers",
        slug: "stickers-round",
        skuid: "STK-RND-001",
        material: "Mirrorkote Sticker",
        price: 95.00,
        image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60",
        keywords: ["circle", "product labels", "packaging", "seal"],
        category: "Stickers"
    },
    {
        id: "6",
        name: "Pull Up Banners",
        slug: "banners-pullup",
        skuid: "BAN-PULL-001",
        material: "Synthetic Paper + Lamination",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60",
        keywords: ["roll up", "display", "exhibition", "event", "standee"],
        category: "Banners"
    }
]
