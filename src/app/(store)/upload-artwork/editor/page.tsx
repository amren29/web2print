"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, RotateCcw, RotateCw, Image as ImageIcon, ZoomIn, ZoomOut, ShoppingCart, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ArtworkEditorPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">
            {/* Editor Header */}
            <div className="h-16 bg-white border-b flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        {/* Mock logo */}
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">PS</div>
                        <div>
                            <h1 className="text-sm font-bold text-black">Business Cards (Standard)</h1>
                            <div className="flex items-center gap-1 text-xs text-black bg-gray-100 px-2 py-0.5 rounded-sm">
                                54 mm (W) X 89 mm (H) <ChevronDown className="h-3 w-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <RotateCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ImageIcon className="h-4 w-4" />
                    </Button>
                </div>

                <Button
                    className="bg-black hover:bg-black/90 text-white shadow-sm"
                    onClick={() => router.push('/checkout')}
                >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Continue
                </Button>
            </div>

            {/* Main Editor Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar: Guides Legend */}
                <div className="w-64 bg-white border-r p-4 overflow-y-auto hidden md:block">
                    <div className="space-y-6">
                        {/* Bleed Guide */}
                        <div>
                            <h3 className="flex items-center gap-2 font-bold text-sm mb-1">
                                <span className="w-3 h-3 rounded-full border-2 border-black"></span> Bleed Size
                            </h3>
                            <Separator className="bg-black/20 mb-2" />
                            <p className="text-xs text-black leading-relaxed">
                                Extend background color or artwork to this line to avoid any white edges from the trimming process.
                            </p>
                        </div>

                        {/* Cut Guide */}
                        <div>
                            <h3 className="flex items-center gap-2 font-bold text-sm mb-1 text-red-500">
                                <span className="w-3 h-3 rounded-full border-2 border-red-500"></span> Cut Size
                            </h3>
                            <div className="border-t border-dashed border-red-500 mb-2 w-full"></div>
                            <p className="text-xs text-black leading-relaxed">
                                This is where we aim to trim the product. The actual line can vary due to the trimming process.
                            </p>
                        </div>

                        {/* Safe Zone Guide */}
                        <div>
                            <h3 className="flex items-center gap-2 font-bold text-sm mb-1 text-green-500">
                                <span className="w-3 h-3 rounded-full border-2 border-green-500"></span> Safe Zone Size
                            </h3>
                            <div className="border-t border-dashed border-green-500 mb-2 w-full"></div>
                            <p className="text-xs text-black leading-relaxed">
                                Keep text and important imagery within this line to ensure it does not get cut off during trimming.
                            </p>
                        </div>

                        {/* Quality Legend */}
                        <div className="border rounded p-3 space-y-3 bg-muted/10 mt-8">
                            <div className="flex items-start gap-2">
                                <div className="text-orange-500 mt-0.5"><AlertIcon color="orange" /></div>
                                <div>
                                    <span className="font-bold text-xs block text-black">Medium Quality</span>
                                    <p className="text-[10px] text-black">The image is of OK quality and may be affected when printed in large format.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="text-red-500 mt-0.5"><AlertIcon color="red" /></div>
                                <div>
                                    <span className="font-bold text-xs block text-black">Low Quality</span>
                                    <p className="text-[10px] text-black">The image is of bad quality and will be affected when printed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 bg-gray-100 flex flex-col relative">
                    {/* Toolbar */}
                    <div className="h-10 bg-white border-b flex items-center justify-center px-4 gap-4 text-xs">
                        <div className="flex items-center gap-2">
                            <span>Fit to design</span>
                            <div className="w-24 h-1 bg-black rounded-full relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="text-black">W: 327.38  H: 395.11</div>
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
                        <div className="relative shadow-2xl bg-white w-[300px] h-[480px]">
                            {/* Mock Artwork Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>

                            {/* Guides Overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* Bleed Line (Outer Edge logic) */}
                                <div className="absolute inset-0 border border-black/10"></div>

                                {/* Cut Line (Red Dashed) */}
                                <div className="absolute inset-2 border border-dashed border-red-500 opacity-60">
                                    <div className="absolute -top-1 -left-1 text-red-500"><ScissorIcon /></div>
                                </div>

                                {/* Safe Zone (Green Dashed) */}
                                <div className="absolute inset-6 border border-dashed border-green-500 opacity-60">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-1">
                                        <div className="bg-white px-1 text-[10px] font-bold text-green-700 whitespace-nowrap shadow-sm border border-green-200">Safe Line</div>
                                    </div>
                                </div>

                                {/* Warning Icon Mock */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                    <AlertIcon color="red" size={24} />
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                    <AlertIcon color="yellow" size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="h-10 border-t bg-white flex items-center justify-between px-4">
                        <div className="text-xs text-muted-foreground">Page 1 of 2</div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-6 w-6"><ZoomOut className="h-3 w-3" /></Button>
                            <span className="text-xs font-mono">100%</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6"><ZoomIn className="h-3 w-3" /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AlertIcon({ color = "red", size = 16 }: { color?: string, size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={color === "red" ? "text-red-500" : color === "orange" ? "text-orange-500" : "text-yellow-500"}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    )
}

function ScissorIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
    )
}
