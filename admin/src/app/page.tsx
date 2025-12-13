"use client";

import { CreditCard, Package, ShoppingBag, Users, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface StatData {
    revenue: number;
    orders: number;
    products: number;
    customers: number;
    recentActivity: any[];
}

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<StatData>({
        revenue: 0,
        orders: 0,
        products: 0,
        customers: 0,
        recentActivity: []
    });

    useEffect(() => {
        // Load data from Storage
        const orders = JSON.parse(localStorage.getItem("web2print_orders") || "[]");
        const products = JSON.parse(localStorage.getItem("web2print_products") || "[]");
        const customers = JSON.parse(localStorage.getItem("web2print_customers") || "[]");

        // Calculate Stats
        const totalRevenue = orders.reduce((sum: number, order: any) => sum + (order.total || 0), 0);
        const activeProducts = products.filter((p: any) => p.stock > 0).length; // Example filter

        // Generate Recent Activity from all orders history
        let allActivity: any[] = [];
        orders.forEach((order: any) => {
            if (order.history) {
                order.history.forEach((h: any) => {
                    allActivity.push({
                        ...h,
                        orderId: order.id,
                        customer: order.customer
                    });
                });
            } else {
                // Fallback if no history, use createdAt
                allActivity.push({
                    date: order.createdAt,
                    action: "Order Created",
                    user: "System",
                    orderId: order.id,
                    customer: order.customer
                });
            }
        });

        // Sort by date desc and take top 10
        const recent = allActivity
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);

        setStats({
            revenue: totalRevenue,
            orders: orders.length,
            products: products.length,
            customers: customers.length,
            recentActivity: recent
        });

    }, []);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-MY", {
            style: "currency",
            currency: "MYR",
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Dashboard Overview</h2>
                <p className="text-gray-500">Here's what's happening in your store today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Revenue"
                    value={formatCurrency(stats.revenue)}
                    change="Lifetime Volume"
                    icon={<CreditCard className="text-blue-600" size={24} />}
                    color="bg-blue-50 border-blue-100"
                />
                <StatsCard
                    title="Total Orders"
                    value={stats.orders.toString()}
                    change="All time orders"
                    icon={<ShoppingBag className="text-purple-600" size={24} />}
                    color="bg-purple-50 border-purple-100"
                />
                <StatsCard
                    title="Products"
                    value={stats.products.toString()}
                    change="In Catalog"
                    icon={<Package className="text-orange-600" size={24} />}
                    color="bg-orange-50 border-orange-100"
                />
                <StatsCard
                    title="Customers"
                    value={stats.customers.toString()}
                    change="Registered Users"
                    icon={<Users className="text-emerald-600" size={24} />}
                    color="bg-emerald-50 border-emerald-100"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
                        <Link href="/orders" className="text-sm text-blue-600 hover:underline font-medium">View All Orders</Link>
                    </div>

                    <div className="space-y-6">
                        {stats.recentActivity.length > 0 ? (
                            stats.recentActivity.map((activity, idx) => (
                                <div key={idx} className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                        <Clock size={16} className="text-gray-500 group-hover:text-blue-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900">
                                            {activity.action} <span className="text-gray-400 font-normal">for</span> <span className="text-blue-600">{activity.orderId}</span>
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            by {activity.user} • {new Date(activity.date).toLocaleString()}
                                        </p>
                                        {activity.details && (
                                            <p className="text-xs text-gray-500 mt-1 italic">"{activity.details}"</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-gray-400">
                                <AlertCircle className="mx-auto h-8 w-8 mb-2 opacity-50" />
                                <p>No activity recorded yet.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Actions / Tips */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-md text-white">
                        <h3 className="text-lg font-bold mb-2">Detailed Reports</h3>
                        <p className="text-gray-300 text-sm mb-6">
                            Need more insights? Check out the orders page for filtering and bulk actions.
                        </p>
                        <Link href="/orders">
                            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors">
                                Go to Orders
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Pending Orders</span>
                                <span className="text-sm font-bold text-orange-600">
                                    {Math.round(stats.orders * 0.1)} {/* Mock calculation */}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Completed Today</span>
                                <span className="text-sm font-bold text-green-600">
                                    {Math.round(stats.orders * 0.05)} {/* Mock calculation */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatsCard({
    title,
    value,
    change,
    icon,
    color = "bg-gray-50"
}: {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    color?: string;
}) {
    return (
        <div className={`p-6 rounded-xl shadow-sm border flex flex-col justify-between transition-all hover:shadow-md ${color}`}>
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <h4 className="text-3xl font-bold text-gray-800 mt-2 tracking-tight">{value}</h4>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm">
                    {icon}
                </div>
            </div>
            <div>
                <p className="text-xs font-medium text-gray-500 opacity-80">{change}</p>
            </div>
        </div>
    );
}
