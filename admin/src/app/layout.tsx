import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Tag, Settings, Menu, Users, TicketPercent } from "lucide-react";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Admin Panel | Web2Print",
    description: "Admin management console.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
                <div className="flex h-screen bg-gray-100">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                        </div>
                        <nav className="flex-1 p-4 space-y-2">
                            <Link
                                href="/"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <LayoutDashboard size={20} />
                                <span className="font-medium">Dashboard</span>
                            </Link>
                            <Link
                                href="/orders"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <ShoppingCart size={20} />
                                <span className="font-medium">Orders</span>
                            </Link>
                            <Link
                                href="/customers"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <Users size={20} />
                                <span className="font-medium">Customers</span>
                            </Link>
                            <Link
                                href="/promotions"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <TicketPercent size={20} />
                                <span className="font-medium">Promotions</span>
                            </Link>
                            <Link
                                href="/products"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <Tag size={20} />
                                <span className="font-medium">Products</span>
                            </Link>
                            <Link
                                href="/settings"
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <Settings size={20} />
                                <span className="font-medium">Settings</span>
                            </Link>
                        </nav>
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center gap-3 px-4 py-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Admin User</p>
                                    <p className="text-xs text-gray-500">admin@example.com</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Mobile Header */}
                        <header className="bg-white border-b border-gray-200 p-4 md:hidden flex items-center justify-between">
                            <h1 className="text-lg font-bold text-gray-800">Admin Panel</h1>
                            <button className="p-2 text-gray-600">
                                <Menu size={24} />
                            </button>
                        </header>

                        <main className="flex-1 overflow-y-auto p-6 md:p-8">
                            {children}
                        </main>
                    </div>
                </div>
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
