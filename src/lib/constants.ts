
export type CategoryNode = {
    name: string
    subcategories?: string[]
}

export const CATEGORIES: CategoryNode[] = [
    { name: "All Products" },
    {
        name: "Business Cards",
        subcategories: ["Standard", "Luxury", "Folded"]
    },
    {
        name: "Flyers",
        subcategories: ["A5 Flyers", "A4 Flyers", "DL Flyers"]
    },
    {
        name: "Leaflets",
        subcategories: ["Folded", "Flat"]
    },
    {
        name: "Stickers",
        subcategories: ["Vinyl", "Round", "Sheet"]
    },
    { name: "Posters" },
    { name: "Banners" },
    { name: "Booklets" },
]
