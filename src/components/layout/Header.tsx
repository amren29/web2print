"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
        }
    }
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight uppercase">Web2Print</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Products
                    </Link>
                    <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Features
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        About
                    </Link>
                    <Link href="/how-to-order" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        How to Order
                    </Link>
                    <Link href="/delivery" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Delivery
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Contact
                    </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="hidden md:flex">
                                Login
                            </Button>
                        </Link>

                        <form onSubmit={handleSearch} className="relative hidden md:block">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-[200px] lg:w-[300px] h-9 pr-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-9 w-9 hover:bg-transparent"
                            >
                                <Search className="h-4 w-4 text-muted-foreground" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </form>
                        {/* Mobile visible search icon triggers same logic or separate simple view? Keeping simple for now, maybe just icon implies desktop focus as per existing code */}
                        <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                            <Search className="h-4 w-4" />
                        </Button>

                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                                <ShoppingBag className="h-4 w-4" />
                                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background invisible" /> {/* Badge mock */}
                                <span className="sr-only">Cart</span>
                            </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                            <Menu className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
