"use client";

import { ArrowLeft, Building, Mail, Phone, User, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    status: string;
    // ... other fields present in data
}

export default function EditCustomerPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState<any>({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "Active"
    });

    useEffect(() => {
        const saved = localStorage.getItem("web2print_customers");
        if (saved) {
            const customers = JSON.parse(saved);
            const found = customers.find((c: Customer) => c.id === id);
            if (found) {
                setFormData(found);
            } else {
                alert("Customer not found");
                router.push("/customers");
            }
        }
        setIsLoading(false);
    }, [id, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const saved = localStorage.getItem("web2print_customers");
        const customers = saved ? JSON.parse(saved) : [];

        const updatedCustomers = customers.map((c: Customer) =>
            c.id === id ? { ...c, ...formData } : c
        );

        localStorage.setItem("web2print_customers", JSON.stringify(updatedCustomers));
        router.push("/customers");
    };

    const handleDelete = () => {
        if (confirm("Permanently delete this customer?")) {
            const saved = localStorage.getItem("web2print_customers");
            const customers = saved ? JSON.parse(saved) : [];
            const filtered = customers.filter((c: Customer) => c.id !== id);
            localStorage.setItem("web2print_customers", JSON.stringify(filtered));
            router.push("/customers");
        }
    }

    if (isLoading) return <div className="p-8">Loading customer details...</div>;

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
                        <h1 className="text-2xl font-bold text-gray-900">Edit Customer</h1>
                        <p className="text-gray-500">Update client information.</p>
                    </div>
                </div>
                <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium"
                >
                    <Trash2 size={16} /> Delete Customer
                </button>
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
                                    value={formData.company || ""}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full pl-9 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
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
                        <Save size={18} /> Update Customer
                    </button>
                </div>
            </form>
        </div>
    );
}
