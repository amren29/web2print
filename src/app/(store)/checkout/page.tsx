"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Label } from "@/components/ui/label"
import { CheckCircle2, CreditCard, Truck, ShieldCheck, Trash2, Loader2 } from "lucide-react"
import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const productId = searchParams.get("productId");

    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (productId) {
            const savedProducts = localStorage.getItem("web2print_products");
            if (savedProducts) {
                const products = JSON.parse(savedProducts);
                const found = products.find((p: any) => p.id === productId);
                setProduct(found);
            }
        }
        setLoading(false);
    }, [productId]);

    const handleConfirmOrder = async () => {
        if (!email || !firstName || !address) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Create Order Object
            // Create Order Object (Matching Admin Schema V2)
            const newOrder = {
                id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
                customer: `${firstName} ${lastName}`.trim(),
                email,
                phone,
                status: "New Order", // Match Admin Column Title
                total: product ? product.price : 0,
                priority: "Normal",
                fileStatus: "pending",
                source: "Storefront",
                invoiceNo: `INV-${Date.now().toString().slice(-6)}`,
                deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
                specs: {
                    productName: product ? product.name : "Custom Order",
                    quantity: 1,
                    size: "Standard", // Default for now
                    material: "Standard", // Default for now
                    department: "Production"
                },
                createdAt: new Date().toISOString(),
                deliveryAddress: `${address}, ${city}`,
                items: product ? [{
                    name: product.name,
                    quantity: 1,
                    price: product.price,
                    productId: product.id,
                }] : []
            };

            // Save to API (File System)
            /*
            const existingOrders = JSON.parse(localStorage.getItem("web2print_orders") || "[]");
            localStorage.setItem("web2print_orders", JSON.stringify([newOrder, ...existingOrders]));
            */

            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            });

            if (!response.ok) throw new Error("Failed to save order");

            // Allow time for "processing" simulation
            setTimeout(() => {
                toast.success("Order Placed Successfully!");
                router.push("/");
            }, 1000);

        } catch (e) {
            console.error(e);
            toast.error("Failed to place order. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (loading) return <div className="py-20 text-center">Loading Checkout...</div>;

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
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="bg-background"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+60..."
                                        className="bg-background"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
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
                                        <Input
                                            id="firstName"
                                            className="bg-background"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input
                                            id="lastName"
                                            className="bg-background"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        className="bg-background"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            className="bg-background"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
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
                                </div>
                            </div>
                        </section>

                        {/* Step 3: Payment */}
                        <section aria-labelledby="payment-heading" className="border-t pt-10">
                            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-start gap-3">
                                <ShieldCheck className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <h3 className="font-bold text-blue-900">Payment Gateway Mock</h3>
                                    <p className="text-sm text-blue-800">For this demo, payment is not required. Clicking confirm will simulate a successful transaction.</p>
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
                                    <span className="text-sm font-normal text-muted-foreground">Draft</span>
                                </h2>

                                <div className="space-y-6">
                                    {/* Cart Item */}
                                    {product ? (
                                        <div className="flex gap-4">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden border bg-background rounded-lg">
                                                {product.images && product.images[0] ? (
                                                    <img src={product.images[0]} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-xs text-gray-400 uppercase">IMG</div>
                                                )}
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-bold text-sm uppercase">{product.name}</h3>
                                                            <p className="text-[10px] text-muted-foreground">{product.subtitle}</p>
                                                        </div>
                                                        <p className="font-bold">RM {product.price}</p>
                                                    </div>
                                                    <div className="mt-2 space-y-1">
                                                        <p className="text-xs text-muted-foreground flex justify-between">
                                                            <span>Quantity:</span> <span className="text-foreground font-medium">1</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-4 text-gray-500 italic">No item selected</div>
                                    )}
                                </div>

                                <div className="border-t pt-6 space-y-4">
                                    <div className="flex items-center justify-between text-muted-foreground text-sm">
                                        <span>Subtotal</span>
                                        <span>RM {product ? product.price : 0}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-muted-foreground text-sm">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="border-t border-black pt-4 flex items-center justify-between">
                                        <span className="text-lg font-bold uppercase">Total</span>
                                        <span className="text-2xl font-bold">RM {product ? product.price : 0}</span>
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full h-14 text-lg uppercase font-bold tracking-widest bg-black hover:bg-black/90 text-white"
                                    onClick={handleConfirmOrder}
                                    disabled={!product || isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Confirm Order"
                                    )}
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

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    )
}
