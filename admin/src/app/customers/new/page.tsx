"use client";

import { ArrowLeft, Building, Mail, Phone, User, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewCustomerPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "Active"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Load existing customers
        const saved = localStorage.getItem("web2print_customers");
        const customers = saved ? JSON.parse(saved) : [];

        // Create new customer
        const newCustomer = {
            id: `CUST-${Date.now()}`,
            joinDate: new Date().toISOString().split('T')[0],
            totalOrders: 0,
            ...formData
        };

        // Save
        localStorage.setItem("web2print_customers", JSON.stringify([newCustomer, ...customers]));
        router.push("/customers");
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link
                        href="/customers"
                        className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Add New Customer</h1>
                        <p className="text-gray-500">Enter client details below.</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                                    placeholder="e.g. John Doe"
                                />
                            </div>
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Company Name</label>
                            <div className="relative">
                                <Building className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                                    placeholder="e.g. Acme Corp"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <input
                                    required
                                    type="text"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                                    placeholder="+60 12..."
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Account Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-black outline-none"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Blocked">Blocked</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link href="/customers">
                        <button type="button" className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                            Cancel
                        </button>
                    </Link>
                    <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-colors">
                        <Save size={18} /> Save New Customer
                    </button>
                </div>
            </form>
        </div>
    );
}
