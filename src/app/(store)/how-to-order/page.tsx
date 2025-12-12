import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, PenTool, ShoppingCart, CreditCard, MousePointerClick, Upload, Image as ImageIcon } from "lucide-react"

export default function HowToOrderPage() {
    return (
        <div className="container py-12 lg:py-16 space-y-12">

            {/* Header */}
            <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-black">How to Order?</h1>
                <p className="text-black text-sm md:text-base">
                    Follow these simple steps to submit your order
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto space-y-8">
                <div className="absolute left-[20px] top-6 bottom-6 w-px bg-muted md:hidden" />

                {/* Step 1 */}
                <div className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 z-10 w-10 h-10 rounded-none border bg-background flex items-center justify-center shadow-sm text-base font-bold text-black">1</div>
                    <div className="pt-0.5 space-y-3 w-full">
                        <div className="flex items-center gap-2">
                            <Search className="h-5 w-5 text-black" />
                            <h2 className="text-xl font-bold uppercase text-black">Choose Your Product</h2>
                        </div>
                        <div className="space-y-3 border p-4 bg-card">
                            <div>
                                <h3 className="font-bold text-sm mb-0.5 text-black">Choose Product</h3>
                                <p className="text-xs text-black">Select your product from the &quot;View All Products&quot; page, or on the Home page of this site.</p>
                            </div>
                            <div className="border-t pt-3">
                                <h3 className="font-bold text-sm mb-0.5 text-black">Price Calculator</h3>
                                <p className="text-xs text-black">Select your desired Size, Quantity, Material and Printing Specification. Different products may have different options. Prices update automatically based on your selection.</p>
                            </div>
                            <div className="border-t pt-3">
                                <h3 className="font-bold text-sm mb-0.5 text-black">Estimated Completion Date & Shipping Cost</h3>
                                <p className="text-xs text-black">Choose between <strong>Shipping</strong> or <strong>Self Pick-up</strong> to check Rates and Estimated Delivery/Completion Dates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 z-10 w-10 h-10 rounded-none border bg-background flex items-center justify-center shadow-sm text-base font-bold text-black">2</div>
                    <div className="pt-0.5 space-y-3 w-full">
                        <div className="flex items-center gap-2">
                            <MousePointerClick className="h-5 w-5 text-black" />
                            <h2 className="text-xl font-bold uppercase text-black">Select Option to Order</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="border p-3 bg-muted/10 hover:border-black transition-colors">
                                <div className="mb-1"><ImageIcon className="h-4 w-4 text-black" /></div>
                                <h3 className="font-bold text-sm mb-0.5 text-black">FREE DESIGN</h3>
                                <p className="text-[10px] text-black">Choose any of our pre-made designs.</p>
                            </div>
                            <div className="border p-3 bg-muted/10 hover:border-black transition-colors">
                                <div className="mb-1"><PenTool className="h-4 w-4 text-black" /></div>
                                <h3 className="font-bold text-sm mb-0.5 text-black">CREATE DESIGN</h3>
                                <p className="text-[10px] text-black">Use our Online Design Studio to design from a blank canvas.</p>
                            </div>
                            <div className="border p-3 bg-muted/10 hover:border-black transition-colors">
                                <div className="mb-1"><Upload className="h-4 w-4 text-black" /></div>
                                <h3 className="font-bold text-sm mb-0.5 text-black">UPLOAD YOUR DESIGN</h3>
                                <p className="text-[10px] text-black">Upload your own artwork. For files &gt; 50MB, use the &quot;Click here to upload large files&quot; link.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 z-10 w-10 h-10 rounded-none border bg-background flex items-center justify-center shadow-sm text-base font-bold text-black">3</div>
                    <div className="pt-0.5 space-y-3 w-full">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5 text-black" />
                            <h2 className="text-xl font-bold uppercase text-black">Click &quot;Add to Cart&quot;</h2>
                        </div>
                        <div className="space-y-3 border p-4 bg-card text-xs">
                            <ul className="space-y-3 list-disc pl-4 text-black">
                                <li>
                                    <strong className="text-black">Edit, Remove, Add Products:</strong> Manage items in your cart. You can edit artwork design, duplicate products, or change specifications.
                                </li>
                                <li>
                                    <strong className="text-black">Shipping Method:</strong> Choose available Shipping options (rates depend on weight) or Self Pick-up locations.
                                </li>
                                <li>
                                    <strong className="text-black">Estimated Delivery / Completion:</strong> Check dates for your selected shipping method.
                                </li>
                                <li>
                                    <strong className="text-black">Enter Coupon Code:</strong> Enter code and click &quot;Redeem&quot; before placing order.
                                </li>
                                <li>
                                    <strong className="text-black">Review Order Summary:</strong> Carefully review your details one last time.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 z-10 w-10 h-10 rounded-none border bg-background flex items-center justify-center shadow-sm text-base font-bold text-black">4</div>
                    <div className="pt-0.5 space-y-3 w-full">
                        <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-black" />
                            <h2 className="text-xl font-bold uppercase text-black">Click Here to Pay</h2>
                        </div>
                        <div className="space-y-3 border p-4 bg-card">
                            <p className="text-xs text-black">To place and pay for the order, click the <strong>&quot;Click Here to Pay&quot;</strong> button. You will be redirected to a secure eGHL page.</p>
                            <div className="pt-3 border-t">
                                <h3 className="font-bold mb-2 uppercase text-xs text-black">Payment Options</h3>
                                <div className="flex flex-wrap gap-2 text-black">
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Credit Card</span>
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Online Banking</span>
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Boost</span>
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Grab Pay</span>
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Touch &apos;N Go</span>
                                    <span className="px-2 py-0.5 bg-muted/50 border text-[10px] font-medium">Maybank2u QRpay</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
