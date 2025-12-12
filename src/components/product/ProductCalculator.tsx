"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button" // Squared
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card" // Squared
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ShoppingBag, HelpCircle, ChevronDown } from "lucide-react"

// Mock Pricing Data
const PAPER_TYPES = [
    { id: "standard-matte", name: "Standard Matte", multiplier: 1 },
    { id: "premium-gloss", name: "Premium Glossy", multiplier: 1.2 },
    { id: "heavy-cardstock", name: "Heavy Cardstock", multiplier: 1.5 },
]

const SIZES = [
    { id: "a5", name: "A5 (148 x 210mm)", basePrice: 0.5 },
    { id: "a4", name: "A4 (210 x 297mm)", basePrice: 1.0 },
    { id: "a3", name: "A3 (297 x 420mm)", basePrice: 2.0 },
]

export function ProductCalculator() {
    const router = useRouter()
    // Mock Pricing Data with new options
    const FINISHING_TYPES = [
        { id: "none", name: "None", price: 0 },
        { id: "matte-lamination", name: "Matte Lamination", price: 5.00 },
        { id: "gloss-lamination", name: "Gloss Lamination", price: 5.00 },
        { id: "round-corners", name: "Round Corners", price: 3.50 },
    ]

    const DURATION_TYPES = [
        { id: "standard", name: "Standard (3-5 Days)", multiplier: 1 },
        { id: "urgent", name: "Urgent (24 Hours)", multiplier: 1.5 },
    ]

    // Calculate future date for shipping estimation
    const getEstimatedDate = (days: number) => {
        const date = new Date()
        date.setDate(date.getDate() + days)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    const [finishing, setFinishing] = useState(FINISHING_TYPES[0].id)
    const [duration, setDuration] = useState(DURATION_TYPES[0].id)
    const [size, setSize] = useState(SIZES[0].id)
    const [material, setMaterial] = useState(PAPER_TYPES[0].id)
    const [quantity, setQuantity] = useState(100)

    // Shipping State
    const [isShippingOpen, setIsShippingOpen] = useState(true)
    const [shippingRegion, setShippingRegion] = useState("sabah")
    const [showShippingResult, setShowShippingResult] = useState(false)


    // Enhanced Pricing Logic
    const totalPrice = useMemo(() => {
        const selectedSize = SIZES.find((s) => s.id === size)
        const selectedMaterial = PAPER_TYPES.find((m) => m.id === material)
        const selectedFinishing = FINISHING_TYPES.find((f) => f.id === finishing)
        const selectedDuration = DURATION_TYPES.find((d) => d.id === duration)

        if (!selectedSize || !selectedMaterial || !selectedFinishing || !selectedDuration) return 0

        // Base: (Size * Material * Qty) + Finishing
        let price = (selectedSize.basePrice * selectedMaterial.multiplier * quantity) + (selectedFinishing.price * (quantity / 100))

        // Apply duration multiplier
        price = price * selectedDuration.multiplier

        // Bulk discounts
        if (quantity >= 1000) price *= 0.8
        else if (quantity >= 500) price *= 0.9

        return price
    }, [size, material, quantity, finishing, duration])

    return (
        <Card className="w-full border-2 border-primary/10 shadow-sm">
            <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg uppercase">Instant Quote</CardTitle>
                <CardDescription className="text-xs">
                    Configure your product options.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
                {/* Size Selection */}
                <div className="space-y-1.5">
                    <Label htmlFor="size" className="text-xs font-semibold uppercase">Size</Label>
                    <Select value={size} onValueChange={setSize}>
                        <SelectTrigger id="size" className="h-9 text-sm">
                            <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                            {SIZES.map((s) => (
                                <SelectItem key={s.id} value={s.id} className="text-sm">
                                    {s.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Material Selection */}
                <div className="space-y-1.5">
                    <Label htmlFor="material" className="text-xs font-semibold uppercase">Material</Label>
                    <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger id="material" className="h-9 text-sm">
                            <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                            {PAPER_TYPES.map((m) => (
                                <SelectItem key={m.id} value={m.id} className="text-sm">
                                    {m.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-[10px] text-muted-foreground">Standard 300gsm unless specified.</p>
                </div>

                {/* Finishing */}
                <div className="space-y-1.5">
                    <Label htmlFor="finishing" className="text-xs font-semibold uppercase">Finishing</Label>
                    <Select value={finishing} onValueChange={setFinishing}>
                        <SelectTrigger id="finishing" className="h-9 text-sm">
                            <SelectValue placeholder="Select finishing" />
                        </SelectTrigger>
                        <SelectContent>
                            {FINISHING_TYPES.map((f) => (
                                <SelectItem key={f.id} value={f.id} className="text-sm">
                                    {f.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Duration */}
                <div className="space-y-1.5">
                    <Label htmlFor="duration" className="text-xs font-semibold uppercase">Process Duration</Label>
                    <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger id="duration" className="h-9 text-sm">
                            <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                            {DURATION_TYPES.map((d) => (
                                <SelectItem key={d.id} value={d.id} className="text-sm">
                                    {d.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Quantity */}
                <div className="space-y-1.5">
                    <Label htmlFor="quantity" className="text-xs font-semibold uppercase">Quantity</Label>
                    <Select value={quantity.toString()} onValueChange={(val) => setQuantity(parseInt(val))}>
                        <SelectTrigger id="quantity" className="h-9 text-sm">
                            <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                            {[50, 100, 200, 300, 500, 1000, 2000, 5000, 10000].map((q) => (
                                <SelectItem key={q} value={q.toString()} className="text-sm">
                                    {q} pcs
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-[10px] text-muted-foreground">
                        Bulk discounts for 500+ items.
                    </p>
                </div>

                {/* Shipping Estimator */}
                <div className="pt-4 border-t space-y-4">
                    <div
                        className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors group"
                        onClick={() => setIsShippingOpen(!isShippingOpen)}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold uppercase">Estimated Collection / Shipping</span>
                            <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isShippingOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isShippingOpen && (
                        <div className="space-y-4 animate-in fade-in-50 slide-in-from-top-2">
                            <div className="flex gap-2">
                                <div className="space-y-1.5 flex-1">
                                    <Label className="text-[10px] text-muted-foreground uppercase tracking-wider">Select State</Label>
                                    <Select value={shippingRegion} onValueChange={setShippingRegion}>
                                        <SelectTrigger className="h-9 text-sm">
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sabah">Sabah</SelectItem>
                                            <SelectItem value="sarawak">Sarawak</SelectItem>
                                            <SelectItem value="west-malaysia">West Malaysia</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-end">
                                    <Button
                                        className="h-9 px-4 text-xs font-bold uppercase bg-slate-600 hover:bg-slate-700"
                                        onClick={() => setShowShippingResult(true)}
                                    >
                                        Calculate
                                    </Button>
                                </div>
                            </div>

                            {showShippingResult && (
                                <div className="space-y-4 pt-2">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs text-muted-foreground font-medium">Select Shipping / Self Pick-Up Options</Label>
                                        <Select value="jnt">
                                            <SelectTrigger className="h-9 text-xs">
                                                <div className="flex items-center justify-between w-full pr-2">
                                                    <span className="truncate">J & T Express (Est: {getEstimatedDate(5)})</span>
                                                    <span className="font-bold text-red-500">RM10.80</span>
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="jnt" className="text-xs">
                                                    <div className="flex items-center justify-between w-full gap-4">
                                                        <span>J & T Express (Malaysia)</span>
                                                        <span className="font-bold">RM10.80</span>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="pickup" className="text-xs">
                                                    <div className="flex items-center justify-between w-full gap-4">
                                                        <span>Self Pick-Up (Kota Kinabalu)</span>
                                                        <span className="font-bold text-green-600">FREE</span>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-center justify-end gap-2 text-sm border-t pt-3 border-dashed">
                                        <span className="font-medium text-muted-foreground">Estimated Total:</span>
                                        <span className="font-bold text-lg text-blue-900">RM{(totalPrice + 10.80).toFixed(2)}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 border-t bg-muted/20 p-4">
                <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Total Estimate</span>
                    <span className="text-2xl font-bold text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <Button
                    size="default"
                    className="w-full text-sm font-bold h-10 uppercase tracking-wide"
                    onClick={() => router.push('/cart')}
                >
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}
