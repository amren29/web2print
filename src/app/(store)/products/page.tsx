"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { CategorySidebar } from "@/components/store/CategorySidebar"
import { CATEGORIES } from "@/lib/constants"
import { Suspense } from "react"

const PRODUCTS = [
    { id: 1, name: "Standard Business Cards", slug: "business-cards", price: "19.99", desc: "Premium matte or gloss finish", category: "Business Cards", subcategory: "Standard" },
    { id: 7, name: "Luxury Business Cards", slug: "business-cards-lux", price: "29.99", desc: "Extra thick with gold foil", category: "Business Cards", subcategory: "Luxury" },
    { id: 10, name: "Folded Business Cards", slug: "business-cards-folded", price: "34.99", desc: "Double the space", category: "Business Cards", subcategory: "Folded" },

    { id: 2, name: "A5 Flyers", slug: "flyers-a5", price: "45.00", desc: "Classic A5 size", category: "Flyers", subcategory: "A5 Flyers" },
    { id: 11, name: "A4 Flyers", slug: "flyers-a4", price: "55.00", desc: "Larger impact", category: "Flyers", subcategory: "A4 Flyers" },

    { id: 3, name: "Posters", slug: "posters", price: "12.00", desc: "High-gloss large format", category: "Posters", subcategory: "Standard" },
    { id: 4, name: "Stickers", slug: "stickers", price: "25.00", desc: "Vinyl die-cut stickers", category: "Stickers", subcategory: "Vinyl" },
    { id: 9, name: "Round Stickers", slug: "stickers-round", price: "15.00", desc: "Perfect for packaging", category: "Stickers", subcategory: "Round" },

    { id: 5, name: "Booklets", slug: "booklets", price: "89.00", desc: "Saddle-stitched multi-page", category: "Booklets", subcategory: "Saddle Stitched" },
    { id: 6, name: "Banners", slug: "banners", price: "55.00", desc: "Durable outdoor vinyl", category: "Banners", subcategory: "Outdoor" },
    { id: 8, name: "Folded Leaflets", slug: "leaflets-folded", price: "35.00", desc: "Tri-fold or Z-fold options", category: "Leaflets", subcategory: "Folded" },
]

function ProductsContent() {
    const searchParams = useSearchParams()
    const selectedCategory = searchParams.get("category") || "All Products"

    const filteredProducts = PRODUCTS.filter(p => {
        if (selectedCategory === "All Products") return true

        // Check if selected is a main category
        const mainCat = CATEGORIES.find(c => c.name === selectedCategory)
        if (mainCat) {
            return p.category === selectedCategory
        }

        // Check if selected is a subcategory
        return p.subcategory === selectedCategory
    })

    return (
        <div className="container py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight uppercase">{selectedCategory}</h1>
                    <p className="text-muted-foreground">
                        {filteredProducts.length} result{filteredProducts.length !== 1 && 's'} found
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Sort By: Featured</Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Category Sidebar */}
                <CategorySidebar />

                {/* Product Grid */}
                <div className="flex-1">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.slug}`} className="group block h-full">
                                    <div className="h-full border bg-card text-card-foreground transition-all hover:border-primary">
                                        <div className="aspect-square bg-muted/30 w-full overflow-hidden flex items-center justify-center text-muted-foreground font-thin text-xl group-hover:bg-muted/50 transition-colors">
                                            IMAGE
                                        </div>
                                        <div className="p-3 flex flex-col gap-1">
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                                                {product.category}
                                            </div>
                                            <h3 className="font-bold text-base leading-tight">{product.name}</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{product.desc}</p>
                                            <div className="mt-auto pt-2 flex items-center justify-between">
                                                <span className="font-semibold text-sm">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-none">
                            <h3 className="text-lg font-bold">No products found</h3>
                            <p className="text-muted-foreground">Try selecting a different category.</p>
                            <Link href="/products?category=All%20Products">
                                <Button
                                    variant="link"
                                    className="mt-2"
                                >
                                    Clear Filters
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading Products...</div>}>
            <ProductsContent />
        </Suspense>
    )
}


