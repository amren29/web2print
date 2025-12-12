"use client"

import { Button } from "@/components/ui/button"
import { Palette, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateDesignPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-muted/10 flex flex-col relative">
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
            </header>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-md w-full text-center space-y-6">
                    <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Palette className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold uppercase">Canva Integration Offline</h2>
                    <p className="text-muted-foreground">
                        The design tool is currently being configured. <br />
                        Please check back later or use the upload feature.
                    </p>
                    <Link href="/upload-artwork">
                        <Button className="w-full">Upload Artwork Instead</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
