import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
    return (
        <section className="border-t bg-muted/40">
            <div className="container py-12 flex flex-col items-center text-center gap-6">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                    Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">
                    Whether you need a single prototype or a large-scale print run, we have the tools and expertise to deliver.
                </p>
                <Link href="/products">
                    <Button size="lg" className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90">
                        Get an Instant Quote
                    </Button>
                </Link>
            </div>
        </section>
    );
}
