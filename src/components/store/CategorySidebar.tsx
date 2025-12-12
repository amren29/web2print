"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { CATEGORIES } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function CategorySidebar() {
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get("category") || "All Products"
    const [expandedCategories, setExpandedCategories] = useState<string[]>(["Business Cards", "Flyers", "Leaflets", "Stickers"])

    const toggleExpand = (catName: string) => {
        setExpandedCategories(prev =>
            prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
        )
    }

    return (
        <aside className="w-full lg:w-64 space-y-8 flex-shrink-0 lg:sticky lg:top-24 lg:h-fit">
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 uppercase">Categories</h3>
                <ul className="space-y-1">
                    {CATEGORIES.map((cat, i) => (
                        <li key={i} className="flex flex-col">
                            <div className="flex items-center justify-between group">
                                <Link
                                    href={`/products?category=${encodeURIComponent(cat.name)}`}
                                    className={cn(
                                        "text-sm transition-colors text-left flex-1 py-1.5 hover:text-primary",
                                        currentCategory === cat.name ? "font-bold text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {cat.name}
                                </Link>
                                {cat.subcategories && (
                                    <button
                                        onClick={(e) => { e.preventDefault(); toggleExpand(cat.name); }}
                                        className="p-1 text-muted-foreground hover:text-foreground"
                                    >
                                        {expandedCategories.includes(cat.name) ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </button>
                                )}
                            </div>

                            {/* Subcategories Dropdown */}
                            {cat.subcategories && expandedCategories.includes(cat.name) && (
                                <ul className="pl-4 border-l ml-1 space-y-1 my-1">
                                    {cat.subcategories.map((sub, j) => (
                                        <li key={j}>
                                            <Link
                                                href={`/products?category=${encodeURIComponent(sub)}`}
                                                className={cn(
                                                    "text-xs transition-colors block py-1 w-full text-left hover:text-primary",
                                                    currentCategory === sub ? "font-semibold text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Filter Mock */}
            <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 uppercase">Price Range</h3>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="w-full text-xs h-8">$ Min</Button>
                    <span>-</span>
                    <Button variant="outline" size="sm" className="w-full text-xs h-8">$ Max</Button>
                </div>
            </div>
        </aside>
    )
}
