"use client"

import { useSearchParams } from "next/navigation"
import { PRODUCTS } from "@/lib/products"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')?.toLowerCase() || ""

    const filteredProducts = PRODUCTS.filter(product => {
        if (!query) return false

        const q = query.toLowerCase()
        return (
            product.name.toLowerCase().includes(q) ||
            product.skuid.toLowerCase().includes(q) ||
            product.material.toLowerCase().includes(q) ||
            product.keywords.some(k => k.toLowerCase().includes(q))
        )
    })

    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold uppercase mb-8">
                Search Results for <span className="text-primary">"{query}"</span>
            </h1>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-24 bg-muted/20 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground text-lg mb-4">No products found matching your search.</p>
                    <Link href="/products">
                        <Button>Browse All Products</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <Link href={`/products/${product.slug}`} key={product.id} className="group block">
                            <div className="border bg-card text-card-foreground transition-all hover:border-black">
                                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 space-y-2">
                                    <h3 className="font-bold text-sm uppercase truncate">{product.name}</h3>
                                    <p className="text-xs text-muted-foreground truncate">{product.material}</p>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="font-bold text-sm">From ${product.price.toFixed(2)}</p>
                                        <div className="text-[10px] bg-muted px-2 py-0.5 rounded-full uppercase tracking-wider">
                                            {product.skuid}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
