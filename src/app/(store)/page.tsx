import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="relative w-full py-24 md:py-32 lg:py-40 border-b bg-muted/40">
                <div className="container">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="inline-flex items-center border bg-background px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Premium Printing Services
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl uppercase">
                            Print Your Vision <br className="hidden sm:inline" />
                            With Precision
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            High-quality printing materials with sharp edges and premium finishes.
                            Calculate prices instantly and order online.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-8">
                            <Link href="/products">
                                <Button size="lg" className="h-12 px-8 text-base">
                                    Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section (Based on Image) */}
            {/* About Us Section */}
            {/* About Us Section */}
            {/* About Us Section */}
            <section className="container py-16 lg:py-24">
                <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
                        Page Eight Presents Kinabalu Print Shop. <br className="hidden md:inline" />
                        Sabah&apos;s 1st Online Printing Services Platform.
                    </h2>
                    <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">
                        Why waste the time visiting your printer when online help is at hand? Page Eight brings you the one-stop shop for all your printing needs and more.
                        Page Eight helps you capitalize on the advantages afforded by the digital age. We assure affordability, flexibility and profitability like no other
                        online print shop. Just about anybody can use Page Eight services - artists, freelance designers, small and medium businesses, or anyone that needs
                        print materials in small or bulk quantities.
                    </p>
                </div>
            </section>

            {/* Featured Products Placeholders */}
            <section className="container pb-24">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">Featured Products</h2>
                    <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                        View all products
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Link key={i} href="/products/business-cards" className="group block h-full">
                            <div className="h-full border bg-card text-card-foreground transition-all hover:border-primary">
                                <div className="aspect-square bg-muted/30 w-full overflow-hidden flex items-center justify-center text-muted-foreground font-thin text-xl group-hover:bg-muted/50 transition-colors">
                                    IMAGE
                                </div>
                                <div className="p-3 flex flex-col gap-1">
                                    <h3 className="font-bold text-base leading-tight">Premium Business Cards</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2">Thick, matte, and strictly squared.</p>
                                    <div className="mt-auto pt-2 flex items-center justify-between">
                                        <span className="font-semibold text-sm">From $19.99</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
