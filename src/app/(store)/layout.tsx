"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/layout/CTA";
import { usePathname } from "next/navigation";

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Pages that should NOT have the global CTA and Footer
    const hideGlobalElements = [
        "/login",
        "/register",
        "/cart",
        "/upload-artwork",
        "/create-design",
        "/mock-canva",
        "/checkout",
        "/payment" // Assuming payment is a separate route or sub-route
    ];

    // Check if current path starts with any of the hidden routes (to cover sub-routes like /upload-artwork/editor)
    const isMinimalPage = hideGlobalElements.some(route => pathname?.startsWith(route));

    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {!isMinimalPage && (
                <>
                    <CTA />
                    <Footer />
                </>
            )}
        </div>
    );
}
