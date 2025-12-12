"use client"

import { Button } from "@/components/ui/button"
import { Palette, ArrowLeft, Download, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

// Separate component that uses useSearchParams
function CreateDesignContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [designUrl, setDesignUrl] = useState<string | null>(null)

    // Check for callback from Canva (simulated by ?design_id=...)
    useEffect(() => {
        const designId = searchParams.get("design_id")
        const status = searchParams.get("status")

        if (designId && status === "success") {
            // Simulate fetching the design details
            setDesignUrl("https://images.unsplash.com/photo-1626785774573-4b7993143a4d?w=800&auto=format&fit=crop&q=80")
        }
    }, [searchParams])

    const handleStartDesign = () => {
        setIsLoading(true)
        // Redirect to Real Canva OAuth Flow
        window.location.href = "/api/canva/auth"
    }

    return (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: Canva Promo/Instruction */}
            <div className="space-y-6">
                <div className="h-12 w-12 bg-[#00C4CC] rounded-full flex items-center justify-center text-white mb-4">
                    <Palette className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-extrabold uppercase tracking-tight">Design with Canva</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Create professional designs easily with our Official Canva Connect integration.
                    You will be redirected to Canva to edit, and your design will automatically sync back here.
                </p>

                <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">1</div>
                        <p className="text-sm">Click "Start Designing" to go to Canva.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">2</div>
                        <p className="text-sm">Create your design and click "Publish".</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">3</div>
                        <p className="text-sm">We'll automatically import your PDF/Image.</p>
                    </div>
                </div>

                <Button
                    size="lg"
                    onClick={handleStartDesign}
                    disabled={isLoading}
                    className="w-full md:w-auto h-14 px-8 text-lg font-bold uppercase bg-[#00C4CC] hover:bg-[#00C4CC]/90 text-white shadow-xl shadow-[#00C4CC]/20 transition-all hover:scale-105"
                >
                    {isLoading ? "Redirecting..." : (designUrl ? "Edit on Canva" : "Start Designing")}
                </Button>
            </div>

            {/* Right: Preview / Placeholder */}
            <div className="aspect-[4/3] bg-white border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-sm">
                {designUrl ? (
                    <div className="w-full h-full relative animate-in fade-in duration-700">
                        <img src={designUrl} alt="Design Preview" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 animate-in slide-in-from-top-4">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                                <CheckCircle2 className="h-3 w-3" /> Synced
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 px-4 py-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase">
                                Previewing Design
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b7993143a4d?w=800&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
                        <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm relative z-10">
                            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <h3 className="font-bold text-lg mb-1">No Design Yet</h3>
                            <p className="text-xs text-muted-foreground">Your design preview will appear here<br />after you complete editing.</p>
                        </div>
                    </>
                )}
            </div>

            {/* Conditionally rendered continue button in header logic moved slightly or keep layout same? 
               Wait, the original layout had the header OUTSIDE the content area. 
               The header used designUrl state. 
               To avoid complex state hoisting, I will accept that the header button state might need designUrl.
               Actually, the best way in Next.js client components is to wrap the WHOLE page content that uses useSearchParams.
               But the Header was using router.back() which doesn't use searchParams. 
               However, the header "Continue" button uses designUrl.
               So designUrl state is needed at the top level? No, if I move everything using searchParams into the child, 
               then the parent doesn't know about designUrl. 
               
               Alternative: The parent just sets up the Suspense boundary.
               The entire page content (Header + Grid) goes into the child. 
            */}
        </div>
    )
}

export default function CreateDesignPage() {
    const router = useRouter()

    // We can leave the outer shell here or move everything in.
    // Moving everything in is safest to ensure all useSearchParams usage is covered.

    return (
        <div className="min-h-screen bg-muted/10 flex flex-col relative">
            <Suspense fallback={
                <div className="flex h-screen items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            }>
                <CreateDesignPageContentWrapper />
            </Suspense>
        </div>
    )
}

function CreateDesignPageContentWrapper() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [designUrl, setDesignUrl] = useState<string | null>(null)

    // Check for callback from Canva
    useEffect(() => {
        const designId = searchParams.get("design_id")
        const status = searchParams.get("status")

        if (designId && status === "success") {
            setDesignUrl("https://images.unsplash.com/photo-1626785774573-4b7993143a4d?w=800&auto=format&fit=crop&q=80")
        }
    }, [searchParams])

    const handleStartDesign = () => {
        setIsLoading(true)
        window.location.href = "/api/canva/auth"
    }

    return (
        <>
            {/* Header */}
            <header className="h-16 border-b bg-background flex items-center px-6 justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-sm uppercase">Business Cards (Standard)</h1>
                        <p className="text-xs text-muted-foreground">89mm x 54mm • Art Card 260gsm</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" disabled>
                        Save Draft
                    </Button>
                    <Link href="/checkout" className={!designUrl ? "pointer-events-none" : ""}>
                        <Button size="sm" className="bg-black text-white hover:bg-black/90" disabled={!designUrl}>
                            Continue to Order
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Workspace */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Canva Promo/Instruction */}
                    <div className="space-y-6">
                        <div className="h-12 w-12 bg-[#00C4CC] rounded-full flex items-center justify-center text-white mb-4">
                            <Palette className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight">Design with Canva</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Create professional designs easily with our Official Canva Connect integration.
                            You will be redirected to Canva to edit, and your design will automatically sync back here.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">1</div>
                                <p className="text-sm">Click "Start Designing" to go to Canva.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">2</div>
                                <p className="text-sm">Create your design and click "Publish".</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">3</div>
                                <p className="text-sm">We'll automatically import your PDF/Image.</p>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            onClick={handleStartDesign}
                            disabled={isLoading}
                            className="w-full md:w-auto h-14 px-8 text-lg font-bold uppercase bg-[#00C4CC] hover:bg-[#00C4CC]/90 text-white shadow-xl shadow-[#00C4CC]/20 transition-all hover:scale-105"
                        >
                            {isLoading ? "Redirecting..." : (designUrl ? "Edit on Canva" : "Start Designing")}
                        </Button>
                    </div>

                    {/* Right: Preview / Placeholder */}
                    <div className="aspect-[4/3] bg-white border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-sm">
                        {designUrl ? (
                            <div className="w-full h-full relative animate-in fade-in duration-700">
                                <img src={designUrl} alt="Design Preview" className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 animate-in slide-in-from-top-4">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                                        <CheckCircle2 className="h-3 w-3" /> Synced
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 px-4 py-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase">
                                        Previewing Design
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b7993143a4d?w=800&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
                                <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border shadow-sm relative z-10">
                                    <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Download className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">No Design Yet</h3>
                                    <p className="text-xs text-muted-foreground">Your design preview will appear here<br />after you complete editing.</p>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
