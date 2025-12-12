"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Palette, Loader2 } from "lucide-react"

export default function MockCanvaPage() {
    const router = useRouter()
    const [status, setStatus] = useState("initializing")

    useEffect(() => {
        // Step 1: Simulate loading Canva
        setTimeout(() => setStatus("editing"), 1500)
    }, [])

    const handlePublish = () => {
        setStatus("publishing")
        // Step 3: Simulate processing and redirect back
        setTimeout(() => {
            router.push("/create-design?design_id=mock_123_abc&status=success")
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col font-sans">
            {/* Mock Canva Header */}
            <div className="h-14 bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] flex items-center justify-between px-4 text-white shadow-md z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded">
                        <Palette className="h-5 w-5" />
                    </div>
                    <span className="font-bold tracking-wide">Canva</span>
                    <span className="text-white/60 text-sm">| Business Card Design</span>
                </div>
                {status === "editing" && (
                    <Button
                        onClick={handlePublish}
                        className="bg-white text-[#7D2AE8] hover:bg-gray-100 font-bold px-6 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        Publish
                    </Button>
                )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                {status === "initializing" && (
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="h-12 w-12 text-[#00C4CC] animate-spin" />
                        <h2 className="text-xl font-bold text-gray-700">Loading Editor...</h2>
                    </div>
                )}

                {status === "editing" && (
                    <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-2xl w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-full aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 relative group cursor-pointer hover:border-[#00C4CC] transition-colors">
                            <img
                                src="https://images.unsplash.com/photo-1626785774573-4b7993143a4d?w=800&auto=format&fit=crop&q=80"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                alt="Template"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold shadow-sm text-gray-600 group-hover:text-[#00C4CC]">
                                    Click to Edit (Simulated)
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">You are in the "Canvas"</h3>
                            <p className="text-gray-500 mt-2">
                                This is a simulation of the external Canva editor. <br />
                                Adjust your design here and click <b>Publish</b> to send it back to the webapp.
                            </p>
                        </div>
                    </div>
                )}

                {status === "publishing" && (
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                            <Palette className="h-8 w-8 text-[#7D2AE8] animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Publishing Design...</h2>
                        <p className="text-gray-500">Preparing high-resolution PDF...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
