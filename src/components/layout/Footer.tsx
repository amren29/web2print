import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight uppercase">Print Shop KK</h3>
                        <p className="text-sm text-muted-foreground">
                            Your trusted partner for high-quality printing solutions. Dedicated to excellence since 2009.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/products" className="hover:text-foreground">Business Cards</Link></li>
                            <li><Link href="/products" className="hover:text-foreground">Flyers & Leaflets</Link></li>
                            <li><Link href="/products" className="hover:text-foreground">Banners</Link></li>
                            <li><Link href="/products" className="hover:text-foreground">Posters</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/how-to-order" className="hover:text-foreground">How to Order</Link></li>
                            <li><Link href="/delivery" className="hover:text-foreground">Delivery Information</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
                            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0" />
                                <span>123 Print Street, Creative City, Design State, 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0" />
                                <span>sales@printshopkk.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Print Shop KK (EICI PRINT SDN BHD). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
