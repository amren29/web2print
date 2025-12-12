import { CategorySidebar } from "@/components/store/CategorySidebar"
import { ProductCalculator } from "@/components/product/ProductCalculator"
import { Button } from "@/components/ui/button"
import { Check, Upload, PenTool, Palette, Download } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { slug: string } }) {
    // In a real app, use params.slug to fetch data.

    return (
        <div className="container py-12">
            {/* Breadcrumbs */}
            <div className="mb-8 flex items-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="hover:text-foreground">Products</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground font-medium capitalize truncate">Business Cards</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Sidebar */}
                <CategorySidebar />

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column: Images & Info (Tabbed) */}
                        <div className="flex flex-col gap-8">
                            <div className="aspect-[4/3] bg-muted w-full flex items-center justify-center border">
                                <span className="text-muted-foreground text-sm">Product Image Preview</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-2">Premium Business Cards</h1>
                                    <p className="text-base text-muted-foreground">Make a lasting impression.</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs font-medium text-muted-foreground">Tags:</span>
                                    {["#businesscard", "#visitingcard", "#networking", "#office", "#branding"].map((tag, i) => (
                                        <span key={i} className="text-xs bg-muted/50 px-2 py-0.5 rounded-sm text-muted-foreground hover:text-black hover:bg-muted transition-colors cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

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

                                        <div className="border rounded p-4 bg-muted/20">
                                            <h4 className="font-bold text-sm uppercase mb-3">Download Templates</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <Button variant="outline" size="sm" className="h-8 text-xs justify-start w-full">
                                                    <Download className="mr-2 h-3 w-3" /> Adobe Illustrator (.ai)
                                                </Button>
                                                <Button variant="outline" size="sm" className="h-8 text-xs justify-start w-full">
                                                    <Download className="mr-2 h-3 w-3" /> Photoshop (.psd)
                                                </Button>
                                                <Button variant="outline" size="sm" className="h-8 text-xs justify-start w-full">
                                                    <Download className="mr-2 h-3 w-3" /> PDF Format
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="delivery" className="text-xs text-muted-foreground leading-relaxed animate-in fade-in-50">
                                        <p>We deliver nationwide. Shipping fees are calculated at checkout based on weight and location. Self-collection is available at our Kota Kinabalu production center.</p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>

                        {/* Right Column: Calculator & Actions */}
                        <div className="gap-4 flex flex-col">
                            <div className="xl:sticky xl:top-24 h-fit space-y-6">
                                <ProductCalculator />

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <Link href="https://wa.me/60103570729?text=Hi,%20I%20would%20like%20to%20request%20design%20services" target="_blank" className="w-full mb-3 block">
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

                                    <Link href="/create-design" className="w-full mb-3 block">
                                        <Button variant="outline" className="w-full justify-start h-12 text-sm font-semibold relative overflow-hidden group border-2 hover:border-primary hover:text-primary hover:bg-transparent">
                                            <div className="absolute inset-0 bg-muted/50 group-hover:bg-transparent transition-colors" />
                                            <div className="relative flex items-center">
                                                <div className="bg-[#00C4CC]/10 p-1.5 rounded-sm mr-3 group-hover:bg-[#00C4CC] group-hover:text-white transition-colors">
                                                    <Palette className="h-4 w-4 text-[#00C4CC] group-hover:text-white" />
                                                </div>
                                                Create Design (Canva)
                                            </div>
                                        </Button>
                                    </Link>

                                    <Link href="/upload-artwork" className="w-full">
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start h-12 text-sm font-semibold relative overflow-hidden group border-2 hover:border-primary hover:text-primary hover:bg-transparent"
                                        >
                                            <div className="absolute inset-0 bg-muted/50 group-hover:bg-transparent transition-colors" />
                                            <div className="relative flex items-center">
                                                <div className="bg-primary/10 p-1.5 rounded-sm mr-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    <Upload className="h-4 w-4" />
                                                </div>
                                                Upload Your Design
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products - Moved inside flex-1 column */}
                    <div className="mt-16 space-y-6 pt-16 border-t">
                        <h2 className="text-2xl font-bold tracking-tight uppercase">Related Products</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Link key={i} href="/products/related-product" className="group block h-full">
                                    <div className="h-full border bg-card text-card-foreground transition-all hover:border-primary">
                                        <div className="aspect-square bg-muted/30 w-full overflow-hidden flex items-center justify-center text-muted-foreground font-thin text-xl group-hover:bg-muted/50 transition-colors">
                                            IMAGE
                                        </div>
                                        <div className="p-3 flex flex-col gap-1">
                                            <h3 className="font-bold text-base leading-tight">Standard Business Cards</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2">Efficient, affordable, and high quality.</p>
                                            <div className="mt-auto pt-2 flex items-center justify-between">
                                                <span className="font-semibold text-sm">From $14.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
