"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, CreditCard, Truck, ShieldCheck, Trash2 } from "lucide-react"

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-muted/5">
            <div className="container py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Checkout Steps */}
                    <div className="lg:col-span-7 space-y-12">

                        <div className="space-y-2 border-b pb-8">
                            <h1 className="text-4xl font-extrabold tracking-tight uppercase">Checkout</h1>
                            <p className="text-muted-foreground">Complete your order details below.</p>
                        </div>

                        {/* Step 1: Contact Info */}
                        <section aria-labelledby="contact-heading">
                            <h2 id="contact-heading" className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground text-sm font-bold">1</span>
                                Contact Information
                            </h2>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="you@example.com" className="bg-background" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    {/* Custom Checkbox (Mock) */}
                                    <div className="h-4 w-4 border border-input bg-background flex items-center justify-center cursor-pointer">
                                        {/* <Check className="h-3 w-3" /> */}
                                    </div>
                                    <Label className="font-normal text-muted-foreground">Email me news and offers</Label>
                                </div>
                            </div>
                        </section>

                        {/* Step 2: Shipping */}
                        <section aria-labelledby="shipping-heading" className="border-t pt-10">
                            <h2 id="shipping-heading" className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Shipping Details
                            </h2>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" className="bg-background" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" className="bg-background" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="postal-code">Postal Code</Label>
                                        <Input id="postal-code" className="bg-background" />
                                    </div>
                                </div>

                                {/* Shipping Method Selection */}
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-primary bg-primary/5 p-4 flex items-center justify-between cursor-pointer ring-2 ring-primary ring-offset-2">
                                        <div className="flex items-center gap-3">
                                            <Truck className="h-5 w-5" />
                                            <div>
                                                <p className="font-bold text-sm">Standard Shipping</p>
                                                <p className="text-xs text-muted-foreground">4-5 Business Days</p>
                                            </div>
                                        </div>
                                        <span className="font-bold">Free</span>
                                    </div>
                                    <div className="border bg-background p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Truck className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-bold text-sm">Express Shipping</p>
                                                <p className="text-xs text-muted-foreground">1-2 Business Days</p>
                                            </div>
                                        </div>
                                        <span className="font-bold">$15.00</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Step 3: Payment */}
                        <section aria-labelledby="payment-heading" className="border-t pt-10">
                            <h2 id="payment-heading" className="text-xl font-bold uppercase mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground text-sm font-bold">3</span>
                                Payment
                            </h2>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-primary bg-primary/5 p-4 flex items-center gap-3 cursor-pointer">
                                        <CreditCard className="h-5 w-5" />
                                        <span className="font-bold text-sm">Credit Card</span>
                                    </div>
                                    <div className="border bg-background p-4 flex items-center gap-3 cursor-pointer opacity-50 cursor-not-allowed">
                                        <span className="font-bold text-sm">PayPal (Unavailable)</span>
                                    </div>
                                </div>

                                <div className="grid gap-6 p-6 border bg-card">
                                    <div className="space-y-2">
                                        <Label htmlFor="card-number">Card number</Label>
                                        <Input id="card-number" placeholder="0000 0000 0000 0000" className="bg-background" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 space-y-2">
                                            <Label htmlFor="expiry">Expiration Date (MM/YY)</Label>
                                            <Input id="expiry" placeholder="MM/YY" className="bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cvc">CVC</Label>
                                            <Input id="cvc" placeholder="123" className="h-12 bg-background" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Column: Order Summary (Sticky) */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-muted/40 border p-6 lg:p-10 space-y-6">
                                <h2 className="text-xl font-bold uppercase border-b pb-4 mb-4 flex justify-between items-center">
                                    <span>Order Summary</span>
                                    <span className="text-sm font-normal text-muted-foreground">#WEB-2024-8829</span>
                                </h2>

                                <div className="space-y-6">
                                    {/* Cart Item 1 */}
                                    <div className="flex gap-4">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden border bg-background">
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 uppercase">
                                                IMG
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-sm uppercase">Business Cards (Standard)</h3>
                                                        <p className="text-[10px] text-muted-foreground">Ref: Q-99281</p>
                                                    </div>
                                                    <p className="font-bold">$45.00</p>
                                                </div>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Size:</span> <span className="text-foreground font-medium">89mm x 54mm</span>
                                                    </p>
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Material:</span> <span className="text-foreground font-medium">Art Card 260gsm</span>
                                                    </p>
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Finishing:</span> <span className="text-foreground font-medium">Matte Lamination</span>
                                                    </p>
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Quantity:</span> <span className="text-foreground font-medium">500 pcs</span>
                                                    </p>
                                                    <div className="pt-1 mt-1 border-t border-dashed">
                                                        <p className="text-xs font-bold text-blue-900 flex justify-between">
                                                            <span>Method:</span> <span>Self Collect (KK)</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <button className="text-[10px] text-muted-foreground hover:text-foreground font-medium underline">Edit Details</button>
                                                <button className="text-[10px] text-destructive hover:underline uppercase font-medium">Remove</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cart Item 2 */}
                                    <div className="flex gap-4 opacity-50 grayscale">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden border bg-background">
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 uppercase">
                                                IMG
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-sm uppercase">A5 Flyers</h3>
                                                        <p className="text-[10px] text-muted-foreground">Ref: Q-99282</p>
                                                    </div>
                                                    <p className="font-bold">$89.00</p>
                                                </div>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Material:</span> <span className="text-foreground font-medium">Simili 80gsm</span>
                                                    </p>
                                                    <p className="text-xs text-muted-foreground flex justify-between">
                                                        <span>Quantity:</span> <span className="text-foreground font-medium">1000 pcs</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-6 space-y-4">
                                    <div className="flex items-center justify-between text-muted-foreground text-sm">
                                        <span>Subtotal</span>
                                        <span>$134.00</span>
                                    </div>
                                    <div className="flex items-center justify-between text-muted-foreground text-sm">
                                        <span>Shipping (Self Collect)</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex items-center justify-between text-muted-foreground text-sm">
                                        <span>Taxes (SST 6%)</span>
                                        <span>$8.04</span>
                                    </div>
                                    <div className="border-t border-black pt-4 flex items-center justify-between">
                                        <span className="text-lg font-bold uppercase">Total</span>
                                        <span className="text-2xl font-bold">$142.04</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full h-14 text-lg uppercase font-bold tracking-widest bg-black hover:bg-black/90 text-white">
                                    Confirm Order
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span>Secure SSL Encryption</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
