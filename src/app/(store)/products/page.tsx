"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { CategorySidebar } from "@/components/store/CategorySidebar"
import { CATEGORIES } from "@/lib/constants"
import { Suspense, useState, useEffect } from "react"

const PRODUCTS: any[] = []; // Replaced by dynamic state

function ProductsContent() {
    const searchParams = useSearchParams()
    const selectedCategory = searchParams.get("category") || "All Products"
    const [products, setProducts] = useState<any[]>([])

    // Seed Data (Same as Admin)
    // Seed Data (Same as Admin)
    const DEFAULT_PRODUCTS = [
        { id: "PROD-001", name: "Standard Business Cards", category: "Business Cards", price: 25.0, stock: 5000, status: "Active", sku: "BC-STD-001", images: [], description: "Make a lasting first impression with our premium business cards. Available in various finishes and paper weights to suit your brand identity." },
        { id: "PROD-002", name: "Premium Glossy Flyers", category: "Marketing Materials", price: 45.0, stock: 2500, status: "Active", sku: "FL-GLO-002", images: [], description: "Promote your events or services with vibrant, high-gloss flyers. Perfect for handouts, inserts, and mailers." },
        { id: "PROD-003", name: "Vinyl Banners (3x6)", category: "Large Format", price: 120.0, stock: 50, status: "Low Stock", sku: "BN-VIN-003", images: [], description: "Durable, weather-resistant vinyl banners ideal for outdoor advertising. Comes with hemmed edges and grommets for easy hanging." },
        { id: "PROD-004", name: "Custom Letterhead", category: "Stationery", price: 35.00, stock: 1000, status: "Active", sku: "ST-LET-004", images: [], description: "Professional letterheads printed on high-quality paper. Compatible with inkjet and laser printers." },
        { id: "PROD-005", name: "Promotional Mugs", category: "Promotional", price: 15.00, stock: 0, status: "Out of Stock", sku: "PR-MUG-005", images: [], description: "Custom ceramic mugs perfect for corporate gifts or merchandise. Microwave and dishwasher safe." }
    ];

    useEffect(() => {
        // Fetch from Admin Data
        const savedProducts = localStorage.getItem("web2print_products");
        if (savedProducts) {
            let loadedProducts = JSON.parse(savedProducts);
            // PATCH: Merge default descriptions if missing (fixes stale localStorage)
            loadedProducts = loadedProducts.map((p: any) => {
                const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
                if (def && !p.description) {
                    return { ...p, description: def.description };
                }
                return p;
            });
            setProducts(loadedProducts);
        } else {
            // Auto-seed if empty for demo purposes
            localStorage.setItem("web2print_products", JSON.stringify(DEFAULT_PRODUCTS));
            setProducts(DEFAULT_PRODUCTS);
        }
    }, []);

    const filteredProducts = products.filter(p => {
        if (selectedCategory === "All Products") return true;

        // Simple tag-based filtering for now since we don't have implicit categories yet
        // If product has a tag that matches the category (case-insensitive)
        if (p.tags && Array.isArray(p.tags)) {
            return p.tags.some((t: string) => t.toLowerCase() === selectedCategory.toLowerCase());
        }
        return false;
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
                                <Link key={product.id} href={`/products/${product.id}`} className="group block h-full">
                                    <div className="h-full border bg-card text-card-foreground transition-all hover:border-primary rounded-xl overflow-hidden">
                                        <div className="aspect-square bg-muted/30 w-full overflow-hidden flex items-center justify-center text-muted-foreground font-thin text-xl group-hover:bg-muted/50 transition-colors relative">
                                            {product.images && product.images[0] ? (
                                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span>IMAGE</span>
                                            )}
                                        </div>
                                        <div className="p-4 flex flex-col gap-2">
                                            <div className="flex flex-wrap gap-1">
                                                {product.tags?.slice(0, 2).map((tag: string, i: number) => (
                                                    <span key={i} className="text-[10px] uppercase tracking-wider bg-gray-100 px-1.5 py-0.5 rounded text-muted-foreground font-semibold">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="font-bold text-base leading-tight mt-1">{product.name}</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{product.description || product.subtitle || "No description available."}</p>
                                            <div className="mt-auto pt-3 flex items-center justify-between border-t border-dashed mt-3">
                                                <span className="font-bold text-lg text-blue-600">RM {product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-xl bg-gray-50/50">
                            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                <span className="text-4xl">🔍</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">No products found</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                                We couldn't find any products in this category. Try selecting "All Products".
                            </p>
                            <Link href="/products?category=All%20Products">
                                <Button
                                    variant="default"
                                    className="mt-6"
                                >
                                    View All Products
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


