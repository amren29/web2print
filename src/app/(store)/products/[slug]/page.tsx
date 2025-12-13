"use client";

import { CategorySidebar } from "@/components/store/CategorySidebar"
import { Button } from "@/components/ui/button"
import { Check, Upload, PenTool, Palette, Download, ShoppingCart, Loader2 } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ProductCalculator } from "@/components/product/ProductCalculator"

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Seed Data (Same as Admin/Listing)
    const DEFAULT_PRODUCTS = [
        {
            id: "PROD-001",
            name: "Standard Business Cards",
            category: "Business Cards",
            price: 25.0,
            stock: 5000,
            status: "Active",
            sku: "BC-STD-001",
            images: [],
            description: "Make a lasting first impression with our premium business cards. Available in various finishes and paper weights to suit your brand identity.",
            sizes: [],
            materials: [
                { id: "artcard-260", label: "Art Card 260gsm", priceAdjustment: 0 },
                { id: "artcard-310", label: "Art Card 310gsm", priceAdjustment: 5 }
            ],
            finishings: [
                { id: "none", label: "No Lamination", priceAdjustment: 0 },
                { id: "matte", label: "Matte Lamination", priceAdjustment: 5 },
                { id: "gloss", label: "Gloss Lamination", priceAdjustment: 5 }
            ],
            printSides: [
                { id: "single", label: "Single Side", priceAdjustment: 0 },
                { id: "double", label: "Double Side", priceAdjustment: 10 }
            ],
            customSections: []
        },
        { id: "PROD-002", name: "Premium Glossy Flyers", category: "Marketing Materials", price: 45.0, stock: 2500, status: "Active", sku: "FL-GLO-002", images: [], description: "Promote your events or services with vibrant, high-gloss flyers. Perfect for handouts, inserts, and mailers." },
        { id: "PROD-003", name: "Vinyl Banners (3x6)", category: "Large Format", price: 120.0, stock: 50, status: "Low Stock", sku: "BN-VIN-003", images: [], description: "Durable, weather-resistant vinyl banners ideal for outdoor advertising. Comes with hemmed edges and grommets for easy hanging." },
        { id: "PROD-004", name: "Custom Letterhead", category: "Stationery", price: 35.00, stock: 1000, status: "Active", sku: "ST-LET-004", images: [], description: "Professional letterheads printed on high-quality paper. Compatible with inkjet and laser printers." },
        { id: "PROD-005", name: "Promotional Mugs", category: "Promotional", price: 15.00, stock: 0, status: "Out of Stock", sku: "PR-MUG-005", images: [], description: "Custom ceramic mugs perfect for corporate gifts or merchandise. Microwave and dishwasher safe." },
        {
            id: "PROD-006",
            name: "Sublimation Jersey",
            category: "Apparel",
            price: 35.00,
            stock: 500,
            status: "Active",
            sku: "SUB-JER-001",
            description: "Full-color sublimation printing on high-quality microfiber. Perfect for sports teams and events.",
            pricingModel: "fixed",
            images: [],
            sizes: [
                { id: "s", label: "S", priceAdjustment: 0 },
                { id: "m", label: "M", priceAdjustment: 0 },
                { id: "l", label: "L", priceAdjustment: 0 },
                { id: "xl", label: "XL", priceAdjustment: 2 },
                { id: "2xl", label: "2XL", priceAdjustment: 4 }
            ],
            materials: [
                { id: "microfiber-interlock", label: "Microfiber Interlock", priceAdjustment: 0 },
                { id: "microfiber-eyelet", label: "Microfiber Eyelet", priceAdjustment: 2 }
            ],
            printSides: [
                { id: "full", label: "Full Body Print", priceAdjustment: 0 }
            ],
            finishings: [],
            customSections: [
                {
                    id: "neck",
                    title: "Neck Type",
                    inputType: 'select',
                    options: [
                        { id: "round", label: "Round Neck", priceAdjustment: 0 },
                        { id: "vneck", label: "V-Neck", priceAdjustment: 0 },
                        { id: "collar", label: "Collar (Polo)", priceAdjustment: 10 }
                    ]
                },
                {
                    id: "sleeve",
                    title: "Sleeve Type",
                    inputType: 'select',
                    options: [
                        { id: "short", label: "Short Sleeve", priceAdjustment: 0 },
                        { id: "long", label: "Long Sleeve", priceAdjustment: 5 }
                    ]
                },
                {
                    id: "personalization",
                    title: "Personalization",
                    inputType: 'select',
                    options: [
                        { id: "none", label: "No Personalization", priceAdjustment: 0 },
                        { id: "names", label: "Add Individual Names", priceAdjustment: 5, requiresInput: true },
                        { id: "names-numbers", label: "Add Names & Numbers", priceAdjustment: 10, requiresInput: true }
                    ]
                }
            ],
            quantities: [
                { id: "q1", label: "10" },
                { id: "q2", label: "20" },
                { id: "q3", label: "50" },
                { id: "q4", label: "100" }
            ],
            durations: [
                { id: "std", label: "Standard (7 Days)", priceAdjustment: 0 },
                { id: "rush", label: "Rush (3 Days)", priceAdjustment: 15 }
            ]
        },
        {
            id: "PROD-007",
            name: "DTF Cotton T-Shirt",
            category: "Apparel",
            price: 25.00,
            stock: 1000,
            status: "Active",
            sku: "DTF-TEE-001",
            description: "Premium 100% Cotton T-Shirt with high-quality DTF printing.",
            pricingModel: "fixed",
            images: [],
            sizes: [
                { id: "xs", label: "XS", priceAdjustment: 0 },
                { id: "s", label: "S", priceAdjustment: 0 },
                { id: "m", label: "M", priceAdjustment: 0 },
                { id: "l", label: "L", priceAdjustment: 0 },
                { id: "xl", label: "XL", priceAdjustment: 2 },
                { id: "2xl", label: "2XL", priceAdjustment: 4 }
            ],
            materials: [
                { id: "cotton-160", label: "160gsm Cotton", priceAdjustment: 0 },
                { id: "cotton-190", label: "190gsm Cotton (Premium)", priceAdjustment: 5 }
            ],
            printSides: [],
            finishings: [],
            customSections: [
                {
                    id: "print-location",
                    title: "Print Locations (Select All That Apply)",
                    inputType: 'checkbox',
                    options: [
                        { id: "front-logo", label: "Front Left Logo (Pocket Size)", priceAdjustment: 5 },
                        { id: "front-big", label: "Front Big (A3)", priceAdjustment: 15 },
                        { id: "back-big", label: "Back Big (A3)", priceAdjustment: 15 },
                        { id: "sleeve-logo", label: "Sleeve Logo", priceAdjustment: 5 }
                    ]
                },
                {
                    id: "personalization",
                    title: "Add-ons",
                    inputType: 'select',
                    options: [
                        { id: "none", label: "None", priceAdjustment: 0 },
                        { id: "name-list", label: "Individual Names (Back)", priceAdjustment: 8, requiresInput: true }
                    ]
                }
            ],
            quantities: [
                { id: "q1", label: "1" },
                { id: "q2", label: "10" },
                { id: "q3", label: "50" }
            ],
            durations: [
                { id: "std", label: "Standard (3-5 Days)", priceAdjustment: 0 }
            ]
        }
    ];

    useEffect(() => {
        if (!slug) return;

        // Fetch product from localStorage
        const savedProducts = localStorage.getItem("web2print_products");
        let products = [];

        if (savedProducts) {
            products = JSON.parse(savedProducts);

            // PATCH: For Dev, always overwrite specific new products with DEFAULT data if they exist
            // This ensures potential code updates to seed data are reflected immediately
            products = products.map((p: any) => {
                const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
                // Overwrite if it's one of our new complex products to ensure calculator works
                if (def && (def.id === 'PROD-006' || def.id === 'PROD-007' || def.id === 'PROD-001')) {
                    return def;
                }
                if (def && !p.description) {
                    return { ...p, description: def.description };
                }
                return p;
            });

            // Also add if missing
            DEFAULT_PRODUCTS.forEach(def => {
                if (!products.find((p: any) => p.id === def.id)) {
                    products.push(def);
                }
            });

            // Save back to ensure persistence of this patch
            localStorage.setItem("web2print_products", JSON.stringify(products));

        } else {
            // Auto-seed
            localStorage.setItem("web2print_products", JSON.stringify(DEFAULT_PRODUCTS));
            products = DEFAULT_PRODUCTS;
        }

        const found = products.find((p: any) => p.id === slug);
        setProduct(found);
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="container py-24 flex justify-center">
                <Loader2 className="animate-spin text-muted-foreground" size={32} />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container py-24 text-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <Link href="/products">
                    <Button>Back to Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12">
            {/* Breadcrumbs */}
            <div className="mb-8 flex items-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="hover:text-foreground">Products</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground font-medium capitalize truncate">{product.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Sidebar */}
                <CategorySidebar />

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column: Images & Info (Tabbed) */}
                        <div className="flex flex-col gap-8">
                            <div className="aspect-[4/3] bg-muted w-full flex items-center justify-center border rounded-xl overflow-hidden relative">
                                {product.images && product.images[0] ? (
                                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-muted-foreground text-sm">Product Image Preview</span>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-2">{product.name}</h1>
                                    <p className="text-base text-muted-foreground">{product.subtitle}</p>
                                </div>

                                {product.tags && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs font-medium text-muted-foreground">Tags:</span>
                                        {product.tags.map((tag: string, i: number) => (
                                            <span key={i} className="text-xs bg-muted/50 px-2 py-0.5 rounded-sm text-muted-foreground">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {product.description && (
                                    <div className="prose prose-sm text-muted-foreground mb-8">
                                        <p className="whitespace-pre-line">{product.description}</p>
                                    </div>
                                )}



                                <Tabs defaultValue="process" className="w-full">
                                    <TabsList className="w-full justify-start h-auto flex-wrap gap-1 bg-transparent p-0 border-b rounded-none mb-6">
                                        <TabsTrigger value="process" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 uppercase text-xs font-bold">Process Duration</TabsTrigger>
                                        <TabsTrigger value="artwork" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 uppercase text-xs font-bold">Artwork Guideline</TabsTrigger>
                                        <TabsTrigger value="delivery" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 uppercase text-xs font-bold">Delivery</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="process" className="text-xs text-muted-foreground leading-relaxed animate-in fade-in-50">
                                        <p>Standard processing time is <strong>3-5 business days</strong> after artwork approval. Urgent options are available for 24-hour turnaround.</p>
                                    </TabsContent>

                                    <TabsContent value="artwork" className="space-y-6 animate-in fade-in-50">
                                        <div className="text-xs text-muted-foreground leading-relaxed">
                                            <p>Please ensure your artwork meets our requirements for the best printing results.</p>
                                            <ul className="list-disc list-inside mt-2 space-y-1">
                                                <li>Resolution: 300 DPI minimum</li>
                                                <li>Color Mode: CMYK</li>
                                                <li>Bleed: 3mm on all sides</li>
                                                <li>Safe Zone: Keep text 5mm from edge</li>
                                            </ul>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="delivery" className="text-xs text-muted-foreground leading-relaxed animate-in fade-in-50">
                                        <p>We deliver nationwide. Shipping fees are calculated at checkout based on weight and location. Self-collection is available at our Kota Kinabalu production center.</p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>

                        {/* Right Column: Actions */}
                        <div className="gap-4 flex flex-col">
                            <div className="xl:sticky xl:top-24 h-fit space-y-6">




                                {/* Buy Now Action */}
                                <ProductCalculator product={product} />

                                {/* Other Action Buttons */}
                                <div className="space-y-3">
                                    <Link href="https://wa.me/60103570729" target="_blank" className="w-full mb-3 block">
                                        <Button variant="outline" className="w-full justify-start h-12 text-sm font-semibold relative overflow-hidden group border-2 hover:border-primary hover:text-primary hover:bg-transparent">
                                            <div className="absolute inset-0 bg-muted/50 group-hover:bg-transparent transition-colors" />
                                            <div className="relative flex items-center">
                                                <div className="bg-primary/10 p-1.5 rounded-sm mr-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    <PenTool className="h-4 w-4" />
                                                </div>
                                                Request Design Service
                                            </div>
                                        </Button>
                                    </Link>

                                    {/* Mock Canva Button */}
                                    <Button variant="outline" className="w-full justify-start h-12 text-sm font-semibold relative overflow-hidden group border-2 hover:border-[#00C4CC] hover:text-[#00C4CC] hover:bg-transparent" disabled>
                                        <div className="relative flex items-center opacity-50">
                                            <div className="bg-[#00C4CC]/10 p-1.5 rounded-sm mr-3">
                                                <Palette className="h-4 w-4 text-[#00C4CC]" />
                                            </div>
                                            Create Design (Canva) - Coming Soon
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
