import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Truck, AlertCircle } from "lucide-react"

export default function DeliveryPage() {
    return (
        <div className="container py-12 lg:py-16 space-y-12">

            {/* Header */}
            <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-black">Delivery & Collection Policy</h1>
                <p className="text-black text-sm md:text-base">
                    Please read our guidelines on business days, cut-off times, and shipping options.
                </p>
            </div>

            {/* Business Days & Cut-off Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="border bg-card p-4 space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-5 w-5 text-black" />
                        <h2 className="text-lg font-bold uppercase text-black">Business Days</h2>
                    </div>
                    <div className="prose prose-sm text-black text-xs leading-relaxed">
                        <p className="font-semibold text-black">Monday - Friday ONLY</p>
                        <p>Saturday, Sunday, and Public Holidays DO NOT count as Business Days and will NOT be included during counting.</p>
                        <div className="pt-3 border-t mt-3">
                            <p className="font-semibold text-black mb-1">Operating Hours</p>
                            <ul className="list-none space-y-1">
                                <li>Monday to Friday: 9:00 AM - 6:30 PM</li>
                                <li>Saturday: 9:00 AM - 1:30 PM</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border bg-card p-4 space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-5 w-5 text-black" />
                        <h2 className="text-lg font-bold uppercase text-black">1PM Cut-off Time</h2>
                    </div>
                    <div className="space-y-3 text-xs">
                        <div>
                            <span className="font-bold text-black block mb-1">Before 1PM</span>
                            <p className="text-black">Any successful orders placed before 1PM are eligible for Same Day Collection (if applicable). For non-urgent collection, this counts as DAY 1.</p>
                        </div>
                        <div>
                            <span className="font-bold text-black block mb-1">After 1PM</span>
                            <p className="text-black">Orders placed after 1PM are NOT eligible for Same Day Collection. For non-urgent collection, the following day will be counted as count as DAY 1.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collection Timelines */}
            <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-xl font-bold uppercase border-b pb-2 text-black">Collection Timeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Same Day */}
                    <div className="border p-4 bg-muted/10 hover:bg-muted/20 transition-colors">
                        <div className="text-black font-bold text-2xl mb-1">Same Day</div>
                        <h3 className="font-bold text-base mb-2 text-black">Collection</h3>
                        <p className="text-xs text-black mb-3">Collection on the exact day order is placed (within operating hours).</p>
                        <p className="text-[10px] text-black italic border-t pt-2">
                            <span className="font-semibold text-black not-italic">Condition:</span> Applies for orders placed before 1PM with ready-for-print artwork.
                        </p>
                    </div>

                    {/* Next Day */}
                    <div className="border p-4 bg-muted/10 hover:bg-muted/20 transition-colors">
                        <div className="text-black font-bold text-2xl mb-1">Next Day</div>
                        <h3 className="font-bold text-base mb-2 text-black">Collection</h3>
                        <p className="text-xs text-black mb-3">Collection on the following day after order is placed (After 24hrs).</p>
                        <p className="text-[10px] text-black italic border-t pt-2">
                            <span className="font-semibold text-black not-italic">Condition:</span> Ready-for-print artwork & payment processed previous day.
                        </p>
                    </div>

                    {/* 3 Days */}
                    <div className="border p-4 bg-muted/10 hover:bg-muted/20 transition-colors">
                        <div className="text-black font-bold text-2xl mb-1">3 Days</div>
                        <h3 className="font-bold text-base mb-2 text-black">Business Days</h3>
                        <p className="text-xs text-black mb-3">Collection on the THIRD day after order is placed.</p>
                        <p className="text-[10px] text-black italic border-t pt-2">
                            <span className="font-semibold text-black not-italic">Condition:</span> Subject to cut-off time rules for DAY 1 calculation.
                        </p>
                    </div>

                    {/* 4-7 Days */}
                    <div className="border p-4 bg-muted/10 hover:bg-muted/20 transition-colors">
                        <div className="text-black font-bold text-2xl mb-1">4-7 Days</div>
                        <h3 className="font-bold text-base mb-2 text-black">Business Days</h3>
                        <p className="text-xs text-black mb-3">Collection between 4th - 7th day.</p>
                        <p className="text-[10px] text-black italic border-t pt-2">
                            <span className="font-semibold text-black not-italic">Condition:</span> Larger quantity orders.
                        </p>
                    </div>

                    {/* 8-14 Days */}
                    <div className="border p-4 bg-muted/10 hover:bg-muted/20 transition-colors md:col-span-2 lg:col-span-2">
                        <div className="text-black font-bold text-2xl mb-1">8-14 Days</div>
                        <h3 className="font-bold text-base mb-2 text-black">Business Days</h3>
                        <p className="text-xs text-black mb-3">Collection between 8th - 14th day.</p>
                        <p className="text-[10px] text-black italic border-t pt-2">
                            <span className="font-semibold text-black not-italic">Condition:</span> Large quantity or long finishing duration orders.
                        </p>
                    </div>
                </div>
            </div>

            {/* Postage Services */}
            <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-xl font-bold uppercase border-b pb-2 text-black">Postage Services</h2>

                <div className="space-y-4">
                    <div className="flex gap-4 items-start p-4 border bg-card">
                        <Truck className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                            <h3 className="font-bold text-base text-black">Postage to Different Districts or States</h3>
                            <p className="text-xs text-black leading-relaxed">
                                <strong>J&T Courier Service</strong> is our default shipping partner. Delivery takes <strong>3 - 7 business days</strong> depending on location.
                            </p>
                            <div className="flex gap-2 items-start pt-1">
                                <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                                <p className="text-[10px] text-black">
                                    For tight deadlines, we do not take responsibility for courier delays. Please order well in advance to avoid logistic issues.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start p-4 border bg-card">
                        <div className="h-6 w-6 bg-green-500 rounded-sm flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">G</div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-base text-black">Postage via Grab Delivery Service</h3>
                            <p className="text-xs text-black leading-relaxed">
                                Available upon request within a <strong>20KM radius</strong> from our shop.
                            </p>
                            <p className="text-xs text-black">
                                Charges start from <strong>RM15.00 (minimum)</strong> and vary based on vehicle type and distance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
