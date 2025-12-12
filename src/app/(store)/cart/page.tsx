"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CartPage() {
    // Mock Cart Data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Premium Business Cards",
            specs: "500pcs, Standard Matte, 300gsm, No Finishing",
            price: 45.00,
            quantity: 1,
            image: "IMAGE"
        },
        {
            id: 2,
            name: "A5 Flyers",
            specs: "1000pcs, Gloss Art Paper, 128gsm",
            price: 120.00,
            quantity: 1,
            image: "IMAGE"
        }
    ])

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const shipping = 10.80 // Mock shipping
    const total = subtotal + shipping

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta)
                return { ...item, quantity: newQty }
            }
            return item
        }))
    }

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    return (
        <div className="container py-12 lg:py-16">
            {/* Breadcrumbs */}
            <div className="mb-8 flex items-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground font-medium">Shopping Cart</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight uppercase mb-8">Your Cart ({cartItems.length})</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed rounded-lg">
                    <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h2 className="text-xl font-bold uppercase mb-2">Your cart is empty</h2>
                    <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
                    <Link href="/products">
                        <Button size="lg" className="uppercase font-bold">Start Shopping</Button>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items List */}
                    <div className="flex-1 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 border rounded-lg bg-card text-card-foreground">
                                {/* Image Placeholder */}
                                <div className="h-24 w-24 bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium border shrink-0">
                                    {item.image}
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight uppercase">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{item.specs}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-muted-foreground hover:text-destructive transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-end justify-between mt-4">
                                        {/* Quantity Control */}
                                        <div className="flex items-center border rounded-md h-8">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-8 h-full flex items-center justify-center hover:bg-muted transition-colors"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <div className="w-10 h-full flex items-center justify-center text-sm font-semibold border-x">
                                                {item.quantity}
                                            </div>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-8 h-full flex items-center justify-center hover:bg-muted transition-colors"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            <span className="block text-lg font-bold">RM{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96 shrink-0">
                        <div className="bg-muted/30 border rounded-lg p-6 sticky top-24">
                            <h2 className="font-bold text-lg uppercase mb-4">Order Summary</h2>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">RM{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping Estimate</span>
                                    <span className="font-medium">RM{shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span className="font-medium">RM0.00</span>
                                </div>

                                <Separator className="my-2" />

                                <div className="flex justify-between items-end">
                                    <span className="font-bold uppercase">Total</span>
                                    <span className="text-2xl font-bold text-primary">RM{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <Link href="/checkout" className="block mt-6">
                                <Button size="lg" className="w-full text-base font-bold uppercase h-12">
                                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            <div className="mt-4 text-xs text-center text-muted-foreground">
                                Secure Checkout - SSL Encrypted
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
