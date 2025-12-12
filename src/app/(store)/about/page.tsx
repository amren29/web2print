import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="container py-12 lg:py-16 space-y-16">

            {/* Hero / Intro */}
            <section className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center border bg-muted/50 w-fit px-3 py-1 text-sm font-semibold transition-colors rounded-none">
                    Est. 2009
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
                    Page Eight Presents Kinabalu Print Shop. <br className="hidden md:inline" />
                    Sabah&apos;s 1st Online Printing Services Platform.
                </h1>
                <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">
                    Why waste the time visiting your printer when online help is at hand? Page Eight brings you the one-stop shop for all your printing needs and more.
                    Page Eight helps you capitalize on the advantages afforded by the digital age. We assure affordability, flexibility and profitability like no other
                    online print shop. Just about anybody can use Page Eight services - artists, freelance designers, small and medium businesses, or anyone that needs
                    print materials in small or bulk quantities.
                </p>
            </section>

            {/* Vision & Mission Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y py-12">
                <div className="space-y-3">
                    <h3 className="font-bold text-lg uppercase">Our Vision</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Our vision is to be the top choice for innovative, high-quality printing solutions,
                        setting the standard for sustainability and customer satisfaction in the industry.
                        We aim to empower local businesses in Sabah with world-class printing capabilities accessible from anywhere.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold text-lg uppercase">Our Mission</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Our mission is to provide exceptional printing services and products,
                        exceeding customer expectations with quality, innovation, and
                        personalized service while promoting sustainable practices. We are committed to continuous improvement
                        and adopting the latest printing technologies.
                    </p>
                </div>
            </section>

            {/* Values / Why Choose Us */}
            <section className="space-y-8">
                <div className="text-left max-w-2xl space-y-2">
                    <h2 className="text-2xl font-bold uppercase tracking-tight">Our Core Values</h2>
                    <p className="text-sm text-muted-foreground">
                        At Page Eight, we believe in doing business the right way. These principles guide every print job we handle.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Quality First", desc: "We never compromise on the quality of materials or print resolution." },
                        { title: "Customer Focus", desc: "Your deadlines are our deadlines. We go the extra mile for you." },
                        { title: "Innovation", desc: "Constantly upgrading our machinery to offer the best in print tech." },
                        { title: "Integrity", desc: "Honest pricing with no hidden fees. What you see is what you pay." }
                    ].map((value, i) => (
                        <div key={i} className="p-4 border bg-card hover:border-primary transition-colors">
                            <h4 className="font-bold text-base mb-1">{value.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}
