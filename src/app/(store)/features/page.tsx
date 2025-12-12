import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Truck, Leaf, Palette, ShieldCheck, Headphones } from "lucide-react"

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Premium Quality Guarantee",
        desc: "We use only the finest paper stocks and state-of-the-art digital offset printing technology to ensure your brand looks professional."
    },
    {
        icon: Truck,
        title: "Fast Turnaround",
        desc: "Need it yesterday? specific products are available for next-day delivery. We prioritize speed without compromising on quality."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Options",
        desc: "Sustainable printing solutions including recycled paper stocks and soy-based inks. Good for business, good for the planet."
    },
    {
        icon: Palette,
        title: "Online Design Studio",
        desc: "Don't have a design? Use our powerful, free online design tools to create professional marketing materials in minutes."
    },
    {
        icon: Check,
        title: "Bulk Order Discounts",
        desc: "Scale up and save. Our transparent pricing model offers significant discounts for larger quantity orders."
    },
    {
        icon: Headphones,
        title: "Expert Support",
        desc: "Our team of print experts is here to help check your files, answer questions, and ensure your print job is perfect."
    }
]

export default function FeaturesPage() {
    return (
        <div className="container py-12 lg:py-16 space-y-12">
            <div className="flex flex-col gap-4 max-w-3xl mx-auto text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-foreground">
                    Why Choose Page Eight?
                </h1>
                <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
                    We combine technology with craftsmanship to deliver the best printing experience in Sabah.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURES.map((feature, i) => (
                    <div key={i} className="flex flex-col gap-3 p-4 border bg-card text-card-foreground hover:border-primary transition-colors group">
                        <div className="h-10 w-10 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <feature.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-base">{feature.title}</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
